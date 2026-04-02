"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { createNoise2D } from "simplex-noise";

interface BurnParchmentProps {
  text: string;
  trigger: boolean;
  onComplete: () => void;
}

// ── Seeded RNG for stable ragged edges ──────────────────────────────────────
function seededRng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function generateRaggedPath(w: number, h: number, seed = 42): string {
  const rng = seededRng(seed);
  const segs = 64;
  const pts: [number, number][] = [];

  // jag per edge [top, right, bottom, left] — right & bottom more torn like real papyrus
  const jagEdge = [22, 38, 26, 20];

  const wobble = (base: number, jag: number) => {
    const r = rng();
    // 30% chance of a deep tear spike (2.5–3.5×), 10% chance of huge missing-chunk (5×)
    const spike = r < 0.10 ? 5.0 : r < 0.30 ? 3.0 : 1.0;
    return base + (rng() * 2 - 1) * jag * spike;
  };

  for (let i = 0; i <= segs; i++)
    pts.push([(i / segs) * w, wobble(0, jagEdge[0])]);
  for (let i = 0; i <= segs; i++)
    pts.push([wobble(w, jagEdge[1]), (i / segs) * h]);
  for (let i = 0; i <= segs; i++)
    pts.push([((segs - i) / segs) * w, wobble(h, jagEdge[2])]);
  for (let i = 0; i <= segs; i++)
    pts.push([wobble(0, jagEdge[3]), ((segs - i) / segs) * h]);

  return "polygon(" + pts.map(([x, y]) => `${x.toFixed(1)}px ${y.toFixed(1)}px`).join(", ") + ")";
}

// ── Fire colour palette (Doom-style: transparent → dark red → orange → yellow → white) ──
function buildFirePalette(): Uint8ClampedArray {
  const p = new Uint8ClampedArray(256 * 4);
  for (let i = 0; i < 256; i++) {
    let r = 0, g = 0, b = 0, a = 0;
    if (i < 20) {
      // near-transparent deep red embers
      r = i * 6; g = 0; b = 0; a = i * 8;
    } else if (i < 60) {
      r = 120 + (i - 20) * 3; g = 0; b = 0; a = 80 + (i - 20) * 4;
    } else if (i < 100) {
      r = 240; g = (i - 60) * 4; b = 0; a = 200 + (i - 60) * 1;
    } else if (i < 160) {
      r = 255; g = 160 + (i - 100); b = 0; a = 240;
    } else if (i < 210) {
      r = 255; g = 220 + Math.floor((i - 160) * 0.6); b = (i - 160) * 3; a = 255;
    } else {
      r = 255; g = 250; b = 180 + (i - 210) * 3; a = 255;
    }
    p[i * 4] = Math.min(255, r);
    p[i * 4 + 1] = Math.min(255, g);
    p[i * 4 + 2] = Math.min(255, b);
    p[i * 4 + 3] = Math.min(255, a);
  }
  return p;
}

const FIRE_PALETTE = buildFirePalette();
const FIRE_H = 90; // flame height above burn line in pixels
const BG = "#0f0c08";

interface Particle {
  x: number; y: number; vx: number; vy: number;
  opacity: number; size: number; color: string;
}

const ASH_COLORS = ["#3a3a3a", "#555", "#777", "#8a7a68", "#ff5500", "#cc3300"];

export default function BurnParchment({ text, trigger, onComplete }: BurnParchmentProps) {
  const parchmentRef = useRef<HTMLDivElement>(null);
  // coverCanvas: sits on top of parchment, covers burned area with BG color
  const coverCanvasRef = useRef<HTMLCanvasElement>(null);
  // fireCanvas: sits above everything, renders Doom fire
  const fireCanvasRef = useRef<HTMLCanvasElement>(null);
  // particleCanvas: ash
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);

  const rafRef = useRef<number>(0);
  const burnLineRef = useRef<Float32Array | null>(null);
  const fireGridRef = useRef<Uint8Array | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const noise2D = useRef(createNoise2D());
  const startTimeRef = useRef<number>(0);
  const burnDoneRef = useRef(false);
  const [clipPath, setClipPath] = useState("");

  useEffect(() => {
    const el = parchmentRef.current;
    if (!el) return;
    setClipPath(generateRaggedPath(el.offsetWidth, el.offsetHeight));
  }, [text]);

  const animate = useCallback(() => {
    const coverCanvas = coverCanvasRef.current;
    const fireCanvas = fireCanvasRef.current;
    const particleCanvas = particleCanvasRef.current;
    if (!coverCanvas || !fireCanvas || !particleCanvas) return;
    if (!burnLineRef.current || !fireGridRef.current) return;

    const cCtx = coverCanvas.getContext("2d");
    const fCtx = fireCanvas.getContext("2d");
    const pCtx = particleCanvas.getContext("2d");
    if (!cCtx || !fCtx || !pCtx) return;

    const W = coverCanvas.width;
    const H = coverCanvas.height;
    const burnLine = burnLineRef.current;
    const fireGrid = fireGridRef.current;
    const elapsed = (performance.now() - startTimeRef.current) / 1000;
    const noise = noise2D.current;

    // ── 1. Advance burn line (bottom → top) ─────────────────────────────────
    const allDone = burnLine.every((y) => y <= 0);

    if (!allDone) {
      for (let x = 0; x < W; x++) {
        const centerBoost = 1 + 0.4 * Math.cos((x / W) * Math.PI);
        const n = noise(x * 0.022, elapsed * 0.5) * 2.5;
        let speed = (1.2 + n) * centerBoost;

        // 4 flame tongues surge ahead
        for (let t = 0; t < 4; t++) {
          const tc = (W / 5) * (t + 1);
          const d = Math.abs(x - tc);
          if (d < 35) speed += (1 - d / 35) * 3 * Math.max(0, Math.sin(elapsed * 1.1 + t * 1.3));
        }

        burnLine[x] = Math.max(0, burnLine[x] - Math.max(0.3, speed));
      }
      // Neighbor smoothing for organic edge
      const tmp = burnLine.slice();
      for (let x = 1; x < W - 1; x++) {
        burnLine[x] = tmp[x] * 0.68 + (tmp[x - 1] + tmp[x + 1]) * 0.16;
      }
    }

    // ── 2. Fire simulation (Doom heat diffusion) ─────────────────────────────
    // Seed bottom row of fire grid from burn line activity
    for (let x = 0; x < W; x++) {
      const by = burnLine[x];
      const active = by > 1 && by < H;
      fireGrid[(FIRE_H - 1) * W + x] = active ? 200 + Math.floor(Math.random() * 55) : 0;
    }

    // Propagate heat upward (classic Doom fire)
    for (let y = 0; y < FIRE_H - 2; y++) {
      for (let x = 0; x < W; x++) {
        const src = fireGrid[(y + 1) * W + x];
        const decay = Math.floor(Math.random() * 4);
        const heat = Math.max(0, src - decay);
        // Slight lateral drift for organic shape
        const dx = Math.floor(Math.random() * 3) - 1;
        const nx = Math.max(0, Math.min(W - 1, x + dx));
        fireGrid[y * W + nx] = heat;
      }
    }

    // ── 3. Render fire imageData ─────────────────────────────────────────────
    const fireImageData = fCtx.createImageData(W, FIRE_H);
    for (let i = 0; i < W * FIRE_H; i++) {
      const heat = fireGrid[i];
      const pi = heat * 4;
      fireImageData.data[i * 4] = FIRE_PALETTE[pi];
      fireImageData.data[i * 4 + 1] = FIRE_PALETTE[pi + 1];
      fireImageData.data[i * 4 + 2] = FIRE_PALETTE[pi + 2];
      fireImageData.data[i * 4 + 3] = FIRE_PALETTE[pi + 3];
    }

    // Find average burn Y for fire placement
    let sumY = 0;
    for (let x = 0; x < W; x++) sumY += burnLine[x];
    const avgBurnY = sumY / W;

    fCtx.clearRect(0, 0, W, H + FIRE_H);
    // Position fire so its base aligns with the burn edge
    fCtx.putImageData(fireImageData, 0, avgBurnY - FIRE_H + 12);

    // Soft glow beneath fire (radial bloom)
    fCtx.globalCompositeOperation = "lighter";
    const glowH = 18;
    for (let x = 0; x < W; x += 4) {
      const by = burnLine[x];
      if (by <= 0 || by >= H) continue;
      const alpha = 0.04 + Math.random() * 0.06;
      const grd = fCtx.createRadialGradient(x, by, 0, x, by, glowH);
      grd.addColorStop(0, `rgba(255,120,0,${alpha})`);
      grd.addColorStop(1, "rgba(200,50,0,0)");
      fCtx.fillStyle = grd;
      fCtx.fillRect(x - glowH, by - glowH, glowH * 2, glowH * 2);
    }
    fCtx.globalCompositeOperation = "source-over";

    // ── 4. Cover canvas: erase burned paper ─────────────────────────────────
    cCtx.clearRect(0, 0, W, H);

    // Draw background color over the burned (bottom) portion
    for (let x = 0; x < W; x++) {
      const by = burnLine[x];
      if (by < H) {
        cCtx.fillStyle = BG;
        cCtx.fillRect(x, by, 1, H - by);
      }
    }

    // Charred paper zone just above burn line
    for (let x = 0; x < W; x++) {
      const by = burnLine[x];
      if (by <= 0) continue;
      const charH = 18;
      const grad = cCtx.createLinearGradient(x, by - charH, x, by);
      grad.addColorStop(0, "rgba(12, 5, 0, 0.0)");
      grad.addColorStop(0.35, "rgba(10, 3, 0, 0.82)");
      grad.addColorStop(0.7, "rgba(8, 2, 0, 0.55)");
      grad.addColorStop(1.0, "rgba(5, 0, 0, 0.0)");
      cCtx.fillStyle = grad;
      cCtx.fillRect(x, by - charH, 1, charH);
    }

    // ── 5. Ash particles ─────────────────────────────────────────────────────
    if (!allDone) {
      for (let i = 0; i < 4; i++) {
        const x = Math.random() * W;
        const by = burnLine[Math.min(Math.floor(x), W - 1)];
        if (by <= 0 || by >= H) continue;
        particlesRef.current.push({
          x, y: by,
          vx: (Math.random() - 0.5) * 1.2,
          vy: -(0.8 + Math.random() * 2),
          opacity: 0.5 + Math.random() * 0.4,
          size: 0.8 + Math.random() * 2.2,
          color: ASH_COLORS[Math.floor(Math.random() * ASH_COLORS.length)],
        });
      }
    }

    if (particlesRef.current.length > 250) particlesRef.current = particlesRef.current.slice(-250);

    pCtx.clearRect(0, 0, W, H + FIRE_H);
    particlesRef.current = particlesRef.current.filter((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy *= 0.96;
      p.vx += (Math.random() - 0.5) * 0.1;
      p.opacity -= 0.007;
      if (p.opacity <= 0) return false;
      pCtx.globalAlpha = p.opacity;
      pCtx.fillStyle = p.color;
      pCtx.beginPath();
      pCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      pCtx.fill();
      return true;
    });
    pCtx.globalAlpha = 1;

    // ── 6. Completion ────────────────────────────────────────────────────────
    if (allDone && !burnDoneRef.current && particlesRef.current.length === 0) {
      burnDoneRef.current = true;
      setTimeout(onComplete, 600);
      return;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, [onComplete]);

  useEffect(() => {
    if (!trigger) return;

    const parchment = parchmentRef.current;
    const coverCanvas = coverCanvasRef.current;
    const fireCanvas = fireCanvasRef.current;
    const particleCanvas = particleCanvasRef.current;
    if (!parchment || !coverCanvas || !fireCanvas || !particleCanvas) return;

    const W = parchment.offsetWidth;
    const H = parchment.offsetHeight;

    coverCanvas.width = W;
    coverCanvas.height = H;
    fireCanvas.width = W;
    fireCanvas.height = H + FIRE_H;
    particleCanvas.width = W;
    particleCanvas.height = H + FIRE_H;

    burnLineRef.current = new Float32Array(W).fill(H);
    fireGridRef.current = new Uint8Array(W * FIRE_H).fill(0);
    particlesRef.current = [];
    burnDoneRef.current = false;
    startTimeRef.current = performance.now();

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [trigger, animate]);

  // Reduced motion fallback
  useEffect(() => {
    if (!trigger) return;
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setTimeout(onComplete, 2000);
    return () => clearTimeout(t);
  }, [trigger, onComplete]);

  return (
    <div
      aria-label="Your secret is being destroyed"
      style={{ position: "relative", display: "inline-block" }}
    >
      {/* Parchment paper */}
      <div
        ref={parchmentRef}
        style={{
          clipPath,
          width: "400px",
          maxWidth: "90vw",
          background: `
            radial-gradient(ellipse at 12% 18%, rgba(10,4,0,0.80) 0%, transparent 42%),
            radial-gradient(ellipse at 88% 82%, rgba(8,3,0,0.75) 0%, transparent 40%),
            radial-gradient(ellipse at 78% 12%, rgba(18,8,0,0.65) 0%, transparent 38%),
            radial-gradient(ellipse at 25% 90%, rgba(12,5,0,0.70) 0%, transparent 40%),
            radial-gradient(ellipse at 50% 50%, rgba(80,42,6,0.30) 0%, transparent 65%),
            linear-gradient(162deg, #7a5418 0%, #5a3a0a 30%, #3e2608 58%, #2a1804 100%)
          `,
          boxShadow:
            "0 12px 48px rgba(0,0,0,0.88), 0 3px 12px rgba(0,0,0,0.65), inset 0 0 60px rgba(20,8,0,0.70)",
          padding: "38px 34px",
          willChange: "transform",
        }}
      >
        {/* Papyrus fiber texture */}
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
          aria-hidden="true"
        >
          <defs>
            <filter id="pg">
              <feTurbulence type="fractalNoise" baseFrequency="0.03 0.92" numOctaves="6" stitchTiles="stitch" result="noise" />
              <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
              <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
            </filter>
            <filter id="spots">
              <feTurbulence type="turbulence" baseFrequency="0.06 0.09" numOctaves="4" seed="8" result="t" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.10  0 0 0 0 0.04  0 0 0 0 0.00  0 0 0 9 -4.5" in="t" />
            </filter>
            <filter id="damage">
              <feTurbulence type="turbulence" baseFrequency="0.12" numOctaves="3" seed="22" result="t" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.05  0 0 0 0 0.02  0 0 0 0 0.00  0 0 0 12 -7" in="t" />
            </filter>
          </defs>
          {/* Horizontal reed fiber lines — dense, dark */}
          {Array.from({ length: 52 }, (_, i) => (
            <line
              key={i}
              x1="0" y1={`${(i / 52) * 100}%`}
              x2="100%" y2={`${(i / 52) * 100}%`}
              stroke="#0d0500"
              strokeWidth={i % 5 === 0 ? "1.2" : "0.5"}
              strokeOpacity={i % 5 === 0 ? 0.35 : 0.15}
            />
          ))}
          {/* Grain overlay */}
          <rect width="100%" height="100%" filter="url(#pg)" opacity="0.38" />
          {/* Water-damage age spots */}
          <rect width="100%" height="100%" filter="url(#spots)" opacity="0.55" />
          {/* Fine dark damage patches */}
          <rect width="100%" height="100%" filter="url(#damage)" opacity="0.40" />
        </svg>
        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "18px",
            color: "#d4b87a",
            textShadow: "0 1px 3px rgba(0,0,0,0.8)",
            fontStyle: "italic",
            lineHeight: 1.85,
            textAlign: "center",
            margin: 0,
            position: "relative",
            zIndex: 1,
          }}
        >
          {text}
        </p>
      </div>

      {/* Cover canvas: paints #0f0c08 over burned area + charring */}
      <canvas
        ref={coverCanvasRef}
        style={{ position: "absolute", inset: 0, pointerEvents: "none", clipPath }}
      />

      {/* Fire canvas: Doom-style flames, sits above parchment (extends upward) */}
      <canvas
        ref={fireCanvasRef}
        style={{
          position: "absolute",
          left: 0,
          top: -FIRE_H,
          pointerEvents: "none",
          clipPath: `inset(${FIRE_H}px 0 0 0)`, // only show the part overlapping parchment
        }}
      />

      {/* Ash particle canvas */}
      <canvas
        ref={particleCanvasRef}
        style={{ position: "absolute", left: 0, top: -FIRE_H, pointerEvents: "none" }}
      />
    </div>
  );
}
