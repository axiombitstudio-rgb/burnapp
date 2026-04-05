"use client";

import { useEffect, useRef } from "react";
import { createNoise2D } from "simplex-noise";

const EMBER_COLORS = [
  "#FF8C00", "#FF6B00", "#FF4500",
  "#FFB830", "#FF7700", "#FFD700", "#FF5500",
];

interface Ember {
  x: number; y: number;
  vx: number; vy: number;
  life: number; decay: number;
  size: number; color: string;
}

interface Props {
  active: boolean;
  onComplete: () => void;
}

function easeInQuad(t: number) {
  return t * t;
}

export default function FlameTransition({ active, onComplete }: Props) {
  const canvasRef     = useRef<HTMLCanvasElement>(null);
  const rafRef        = useRef<number>(0);
  const startRef      = useRef<number | null>(null);
  const doneFiredRef  = useRef(false);
  const embersRef     = useRef<Ember[]>([]);
  const noise2D       = useRef(createNoise2D());
  const onCompleteRef = useRef(onComplete);

  useEffect(() => { onCompleteRef.current = onComplete; }, [onComplete]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    if (!active) {
      cancelAnimationFrame(rafRef.current);
      canvas.style.display = "none";
      return;
    }

    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.display = "block";

    startRef.current   = null;
    doneFiredRef.current = false;
    embersRef.current  = [];

    const DURATION = 1.4; // seconds for wipe
    const noise    = noise2D.current;

    // Pre-compute tongue surge centres (stable per-run)
    const H = canvas.height;
    const TONGUE_COUNT = 6;
    const tongueY = Array.from({ length: TONGUE_COUNT }, (_, i) =>
      (H / TONGUE_COUNT) * i + (H / TONGUE_COUNT) * 0.5
    );

    const loop = (now: number) => {
      if (startRef.current === null) startRef.current = now;
      const elapsed  = (now - startRef.current) / 1000;
      const rawP     = Math.min(elapsed / DURATION, 1);
      const progress = easeInQuad(rawP);

      const W   = canvas.width;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, W, H);
      const t = elapsed;

      // The burn-front X marches right → left
      const frontX = W * (1 - progress);

      // ── Burned area (left of front) ────────────────────────────────────
      ctx.fillStyle = "rgba(4,1,0,1)";
      ctx.fillRect(0, 0, frontX, H);

      // ── Flame scanlines ────────────────────────────────────────────────
      // Render every 1px row for crispness
      for (let y = 0; y < H; y++) {
        const n1 = noise(y * 0.005,  t * 1.6);
        const n2 = noise(y * 0.012,  t * 2.4 + 4.1);
        const n3 = noise(y * 0.028,  t * 3.5 + 8.7);
        const nv = n1 * 0.55 + n2 * 0.30 + n3 * 0.15;

        // Tongue surge: nearby surge points push the flame further right
        let surge = 0;
        for (const ty of tongueY) {
          const drift = noise(t * 0.7, ty * 0.003) * H * 0.07;
          const dy    = Math.abs(y - (ty + drift));
          const band  = H * 0.055;
          if (dy < band) surge += (1 - dy / band) * 80;
        }

        const fx        = frontX + nv * 38;
        const flameW    = 90 + surge + Math.abs(nv) * 30;
        const intensity = 0.72 + 0.28 * Math.abs(nv);

        // Fire gradient — white-hot core → yellow → orange → red → dark
        if (fx < W) {
          const right = Math.min(fx + flameW, W);
          const grd   = ctx.createLinearGradient(fx, 0, right, 0);
          grd.addColorStop(0,    `rgba(255,255,230,${intensity})`);
          grd.addColorStop(0.04, `rgba(255,245,120,${intensity})`);
          grd.addColorStop(0.13, `rgba(255,170,25,${intensity * 0.97})`);
          grd.addColorStop(0.28, `rgba(255,95,8,${intensity * 0.88})`);
          grd.addColorStop(0.46, `rgba(210,45,2,${intensity * 0.68})`);
          grd.addColorStop(0.65, `rgba(130,18,0,${intensity * 0.38})`);
          grd.addColorStop(0.84, `rgba(45,5,0,${intensity * 0.12})`);
          grd.addColorStop(1,    "rgba(0,0,0,0)");
          ctx.fillStyle = grd;
          ctx.fillRect(fx, y, right - fx, 1);
        }

        // Char bleed on the left edge of the front — warm glow seeping left
        if (fx > 0) {
          const charW = 30 + Math.abs(nv) * 18;
          const left  = Math.max(fx - charW, 0);
          const cGrd  = ctx.createLinearGradient(left, 0, fx, 0);
          cGrd.addColorStop(0,   "rgba(0,0,0,0)");
          cGrd.addColorStop(0.4, `rgba(50,10,0,${intensity * 0.22})`);
          cGrd.addColorStop(1,   `rgba(190,65,0,${intensity * 0.52})`);
          ctx.fillStyle = cGrd;
          ctx.fillRect(left, y, charW, 1);
        }
      }

      // ── Bloom glow at the front ────────────────────────────────────────
      if (frontX < W) {
        const bGrd = ctx.createLinearGradient(frontX - 30, 0, frontX + 200, 0);
        bGrd.addColorStop(0,    "rgba(255,130,15,0.00)");
        bGrd.addColorStop(0.08, "rgba(255,160,20,0.22)");
        bGrd.addColorStop(0.22, "rgba(255,110,8,0.12)");
        bGrd.addColorStop(0.50, "rgba(180,45,0,0.05)");
        bGrd.addColorStop(1,    "rgba(0,0,0,0)");
        ctx.fillStyle = bGrd;
        ctx.fillRect(frontX - 30, 0, 240, H);
      }

      // ── Spawn embers ───────────────────────────────────────────────────
      if (rawP < 0.85) {
        const spawnN = Math.floor(2 + rawP * 6);
        for (let s = 0; s < spawnN; s++) {
          if (Math.random() > 0.45 || embersRef.current.length > 200) continue;
          const ey = Math.random() * H;
          const nx = noise(ey * 0.005, t * 1.6);
          embersRef.current.push({
            x:     frontX + nx * 38,
            y:     ey,
            vx:    -(1.2 + Math.random() * 5.5),
            vy:    -(0.3 + Math.random() * 3.2),
            life:  1,
            decay: 0.030 + Math.random() * 0.040,
            size:  0.7 + Math.random() * 2.8,
            color: EMBER_COLORS[Math.floor(Math.random() * EMBER_COLORS.length)],
          });
        }
      }

      // ── Draw + update embers ───────────────────────────────────────────
      embersRef.current = embersRef.current.filter((e) => {
        e.x  += e.vx;
        e.y  += e.vy;
        e.vy += 0.032;
        e.vx *= 0.987;
        e.life -= e.decay;
        if (e.life <= 0) return false;
        ctx.globalAlpha = Math.min(e.life, 1) * 0.92;
        ctx.fillStyle   = e.color;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.size * Math.min(e.life * 1.5, 1), 0, Math.PI * 2);
        ctx.fill();
        return true;
      });
      ctx.globalAlpha = 1;

      // ── Completion — fire as soon as wipe reaches left edge ────────────
      if (rawP >= 1 && !doneFiredRef.current) {
        doneFiredRef.current = true;
        onCompleteRef.current();
        return;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:      "fixed",
        inset:         0,
        zIndex:        50,
        display:       "none",
        pointerEvents: "none",
      }}
    />
  );
}
