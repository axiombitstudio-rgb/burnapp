"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import { createNoise2D } from "simplex-noise";

interface BurnParchmentProps {
  text: string;
  trigger: boolean;
  onComplete: () => void;
}

// Seeded pseudo-random for stable ragged edges
function seededRng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function generateRaggedPath(w: number, h: number): string {
  const rng = seededRng(42);
  const jag = 4;
  const segs = 28;
  const pts: [number, number][] = [];

  // Top edge: left → right
  for (let i = 0; i <= segs; i++) {
    const x = (i / segs) * w;
    const y = (rng() * 2 - 1) * jag;
    pts.push([x, y]);
  }
  // Right edge: top → bottom
  for (let i = 0; i <= segs; i++) {
    const x = w + (rng() * 2 - 1) * jag;
    const y = (i / segs) * h;
    pts.push([x, y]);
  }
  // Bottom edge: right → left
  for (let i = 0; i <= segs; i++) {
    const x = ((segs - i) / segs) * w;
    const y = h + (rng() * 2 - 1) * jag;
    pts.push([x, y]);
  }
  // Left edge: bottom → top
  for (let i = 0; i <= segs; i++) {
    const x = (rng() * 2 - 1) * jag;
    const y = ((segs - i) / segs) * h;
    pts.push([x, y]);
  }

  return "polygon(" + pts.map(([x, y]) => `${x.toFixed(1)}px ${y.toFixed(1)}px`).join(", ") + ")";
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  size: number;
  color: string;
}

const ASH_COLORS = ["#555555", "#444444", "#777777", "#8a7a68", "#ff6a00", "#cc4400"];

export default function BurnParchment({ text, trigger, onComplete }: BurnParchmentProps) {
  const parchmentRef = useRef<HTMLDivElement>(null);
  const burnCanvasRef = useRef<HTMLCanvasElement>(null);
  const particleCanvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const burnLineRef = useRef<Float32Array | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const noise2D = useRef(createNoise2D());
  const [clipPath, setClipPath] = useState("");
  const [parchmentOpacity, setParchmentOpacity] = useState(1);
  const [dimensions, setDimensions] = useState({ w: 0, h: 0 });
  const burnDoneRef = useRef(false);

  // Measure parchment and generate ragged edges
  useEffect(() => {
    const el = parchmentRef.current;
    if (!el) return;
    const { offsetWidth: w, offsetHeight: h } = el;
    setClipPath(generateRaggedPath(w, h));
    setDimensions({ w, h });
  }, [text]);

  const animate = useCallback(() => {
    const burnCanvas = burnCanvasRef.current;
    const particleCanvas = particleCanvasRef.current;
    if (!burnCanvas || !particleCanvas || !burnLineRef.current) return;

    const ctx = burnCanvas.getContext("2d");
    const pCtx = particleCanvas.getContext("2d");
    if (!ctx || !pCtx) return;

    const { width: W, height: H } = burnCanvas;
    const burnLine = burnLineRef.current;
    const now = performance.now();
    const elapsed = (now - startTimeRef.current) / 1000; // seconds
    const noise = noise2D.current;

    // ── Update burn line ──
    const baseSpeed = 1.1;
    const done = burnLine.every((y) => y <= 0);

    if (!done) {
      for (let x = 0; x < W; x++) {
        const centerFactor = 1 + 0.35 * Math.cos((x / W) * Math.PI);
        const n = noise(x * 0.025, elapsed * 0.55) * 2.2;
        let speed = (baseSpeed + n) * centerFactor;

        // Tongue surges: 4 tongues
        for (let t = 0; t < 4; t++) {
          const tongueCenter = (W / 5) * (t + 1);
          const dist = Math.abs(x - tongueCenter);
          if (dist < 30) {
            speed += (1 - dist / 30) * 2.5 * Math.max(0, Math.sin(elapsed * 0.8 + t));
          }
        }

        burnLine[x] -= Math.max(0.2, speed);
      }

      // Neighbor smoothing
      for (let x = 1; x < W - 1; x++) {
        burnLine[x] = burnLine[x] * 0.72 + (burnLine[x - 1] + burnLine[x + 1]) * 0.14;
      }
      for (let x = 0; x < W; x++) {
        burnLine[x] = Math.max(0, burnLine[x]);
      }
    }

    // ── Draw burn effect ──
    ctx.clearRect(0, 0, W, H);

    // Erased area (burned away) — use destination-out approach via black fill on separate pass
    // We draw the burn effect onto the canvas which is overlaid with mix-blend-mode: multiply
    // Actually: draw black (transparent) below burn line, char/ember at the edge

    for (let x = 0; x < W; x++) {
      const burnY = burnLine[x];

      // Burned-away: draw blackness (will show through parchment via multiply blend)
      if (burnY < H) {
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.fillRect(x, burnY, 1, H - burnY);
      }

      // Char band (above burn line)
      const charH = 14;
      const grad = ctx.createLinearGradient(x, burnY - charH, x, burnY);
      grad.addColorStop(0, "rgba(26, 10, 0, 0.0)");
      grad.addColorStop(0.3, "rgba(18, 6, 0, 0.85)");
      grad.addColorStop(0.65, "rgba(180, 60, 0, 0.75)");
      grad.addColorStop(1.0, "rgba(255, 90, 0, 0.0)");
      ctx.fillStyle = grad;
      ctx.fillRect(x, burnY - charH, 1, charH);
    }

    // Ember glow pass
    ctx.globalCompositeOperation = "lighter";
    for (let x = 0; x < W; x += 2) {
      if (Math.random() > 0.55) continue;
      const burnY = burnLine[x];
      const r = 2 + Math.random() * 4;
      const alpha = 0.15 + Math.random() * 0.45;
      const grd = ctx.createRadialGradient(x, burnY, 0, x, burnY, r);
      grd.addColorStop(0, `rgba(255, 90, 0, ${alpha})`);
      grd.addColorStop(1, "rgba(200, 40, 0, 0)");
      ctx.beginPath();
      ctx.arc(x, burnY, r, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();
    }
    ctx.globalCompositeOperation = "source-over";

    // ── Particles ──
    // Spawn new particles along the burn edge
    if (!done) {
      for (let i = 0; i < 3; i++) {
        const x = Math.random() * W;
        const idx = Math.floor(x);
        const burnY = burnLine[Math.min(idx, W - 1)];
        particlesRef.current.push({
          x,
          y: burnY,
          vx: (Math.random() - 0.5) * 0.8,
          vy: -(0.6 + Math.random() * 1.4),
          opacity: 0.6 + Math.random() * 0.3,
          size: 1 + Math.random() * 2,
          color: ASH_COLORS[Math.floor(Math.random() * ASH_COLORS.length)],
        });
      }
    }

    // Cull excess
    if (particlesRef.current.length > 200) {
      particlesRef.current = particlesRef.current.slice(-200);
    }

    // Update & draw particles
    pCtx.clearRect(0, 0, W, H);
    particlesRef.current = particlesRef.current.filter((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy *= 0.97;
      p.opacity -= 0.008;
      if (p.opacity <= 0) return false;
      pCtx.globalAlpha = p.opacity;
      pCtx.fillStyle = p.color;
      pCtx.beginPath();
      pCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      pCtx.fill();
      return true;
    });
    pCtx.globalAlpha = 1;

    // ── Check completion ──
    if (done && !burnDoneRef.current) {
      burnDoneRef.current = true;
      // Collapse: fade parchment
      setParchmentOpacity(0);
      setTimeout(onComplete, 1000);
      return;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, [onComplete]);

  // Kick off when triggered
  useEffect(() => {
    if (!trigger) return;

    const burnCanvas = burnCanvasRef.current;
    const particleCanvas = particleCanvasRef.current;
    const parchment = parchmentRef.current;
    if (!burnCanvas || !particleCanvas || !parchment) return;

    const W = parchment.offsetWidth;
    const H = parchment.offsetHeight;

    burnCanvas.width = W;
    burnCanvas.height = H;
    particleCanvas.width = W;
    particleCanvas.height = H;

    burnLineRef.current = new Float32Array(W).fill(H);
    particlesRef.current = [];
    burnDoneRef.current = false;
    startTimeRef.current = performance.now();

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [trigger, animate]);

  // prefers-reduced-motion
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (trigger && prefersReduced) {
      setParchmentOpacity(0);
      const t = setTimeout(onComplete, 2000);
      return () => clearTimeout(t);
    }
  }, [trigger, prefersReduced, onComplete]);

  return (
    <div
      aria-label="Your secret is being destroyed"
      style={{
        position: "relative",
        display: "inline-block",
        filter: "drop-shadow(0 8px 32px rgba(0,0,0,0.7))",
      }}
    >
      {/* Parchment */}
      <div
        ref={parchmentRef}
        style={{
          clipPath,
          width: "400px",
          maxWidth: "90vw",
          background: `
            radial-gradient(ellipse at 20% 30%, rgba(201,168,124,0.5) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 70%, rgba(180,140,96,0.4) 0%, transparent 55%),
            radial-gradient(ellipse at 50% 10%, rgba(220,196,158,0.3) 0%, transparent 50%),
            linear-gradient(160deg, #ede0c4 0%, #e0cd9c 50%, #d4bc88 100%)
          `,
          boxShadow: "inset 0 0 40px rgba(100,60,10,0.2), inset 0 0 8px rgba(80,40,0,0.15)",
          padding: "36px 32px",
          transition: "opacity 1s ease",
          opacity: parchmentOpacity,
          willChange: "transform",
        }}
      >
        {/* Grain overlay */}
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.18, pointerEvents: "none" }}
          aria-hidden="true"
        >
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" />
        </svg>

        <p
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "18px",
            color: "#3a2a1a",
            fontStyle: "italic",
            lineHeight: 1.8,
            textAlign: "center",
            margin: 0,
            position: "relative",
            zIndex: 1,
          }}
        >
          {text}
        </p>
      </div>

      {/* Burn canvas — multiply blend removes parchment below burn line */}
      <canvas
        ref={burnCanvasRef}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          mixBlendMode: "multiply",
          clipPath,
        }}
      />

      {/* Particle canvas */}
      <canvas
        ref={particleCanvasRef}
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          clipPath,
        }}
      />
    </div>
  );
}
