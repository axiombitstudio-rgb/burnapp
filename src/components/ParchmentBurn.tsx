"use client";

import { useEffect, useRef, useCallback } from "react";
import { createNoise2D } from "simplex-noise";

// ── Types ─────────────────────────────────────────────────────────────────────

interface ParchmentBurnProps {
  imageSrc: string;
  text: string;
  burning: boolean;
  onComplete: () => void;
}

interface Ember {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;   // 0→1, decreasing
  decay: number;  // per-frame life reduction
  size: number;
  color: string;
}

// ── Constants ─────────────────────────────────────────────────────────────────

const EMBER_COLORS = [
  "#FF8C00", "#FF6B00", "#FF4500",
  "#FFB830", "#FF7700", "#FF5500",
  "#CC3300", "#FF9500",
];

const TOTAL_DURATION  = 6.5; // total burn animation in seconds
const PHASE1_END      = 1.0; // edge-ignition phase ends at 1 s
const MAX_EMBERS      = 500;

// ── Helpers ───────────────────────────────────────────────────────────────────

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  maxWidth: number,
): string[] {
  const words = text.split(" ");
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    const test = line ? `${line} ${word}` : word;
    if (ctx.measureText(test).width > maxWidth && line) {
      lines.push(line);
      line = word;
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function ParchmentBurn({
  imageSrc,
  text,
  burning,
  onComplete,
}: ParchmentBurnProps) {
  const containerRef  = useRef<HTMLDivElement>(null);
  const displayRef    = useRef<HTMLCanvasElement>(null);
  const effectsRef    = useRef<HTMLCanvasElement>(null);
  const imgRef        = useRef<HTMLImageElement | null>(null);
  const rafRef        = useRef<number>(0);
  const burnStartRef  = useRef<number | null>(null);
  const embersRef     = useRef<Ember[]>([]);
  const doneFiredRef  = useRef(false);
  const textRef       = useRef(text);
  const onCompleteRef = useRef(onComplete);
  const noise2D       = useRef(createNoise2D());

  // Keep refs in sync with props without invalidating callbacks
  useEffect(() => { textRef.current       = text;       }, [text]);
  useEffect(() => { onCompleteRef.current = onComplete; }, [onComplete]);

  // ── Canvas sizing ─────────────────────────────────────────────────────────

  const syncSize = useCallback(() => {
    const c = containerRef.current;
    const d = displayRef.current;
    const e = effectsRef.current;
    if (!c || !d || !e) return;
    const W = c.offsetWidth;
    const H = c.offsetHeight;
    if (d.width !== W || d.height !== H) {
      d.width = W; d.height = H;
      e.width = W; e.height = H;
    }
  }, []);

  // ── Organic burn-edge geometry ────────────────────────────────────────────
  //
  // Returns [x, y] points around the boundary of the remaining paper.
  // The shape is an ellipse that:
  //   • starts at full canvas size (burnP = 0)
  //   • shrinks to nothing (burnP = 1)
  //   • has per-sector bias so different sides burn at different rates
  //   • has time-varying noise so the edge is live and flickering

  const buildEdge = useCallback(
    (W: number, H: number, burnP: number, t: number, samples: number) => {
      const n  = noise2D.current;
      const cx = W / 2;
      const cy = H / 2;
      const pts: [number, number][] = [];

      for (let i = 0; i < samples; i++) {
        const angle = (i / samples) * Math.PI * 2;
        const ca    = Math.cos(angle);
        const sa    = Math.sin(angle);

        // Two octaves of noise for organic irregularity
        const n1 = n(ca * 1.8 + t * 0.35, sa * 1.8 + t * 0.25);
        const n2 = n(ca * 3.5 + t * 0.15, sa * 3.5 + t * 0.08);
        const nv = n1 * 0.70 + n2 * 0.30;

        // Per-sector burn rate — makes each side advance unevenly
        const bias =
          1.0
          + 0.18 * Math.sin(angle * 2.7 + 1.1)
          + 0.12 * Math.cos(angle * 1.9 - 0.4)
          + 0.07 * Math.sin(angle * 4.3 + 2.0);

        // Irregularity fades as paper shrinks (cleaner final collapse)
        const irregularity = nv * 0.17 * Math.max(0.25, 1 - burnP);
        const rx = cx * (1 - burnP) * bias * (1 + irregularity);
        const ry = cy * (1 - burnP) * bias * (1 + irregularity);

        pts.push([cx + ca * rx, cy + sa * ry]);
      }
      return pts;
    },
    [], // noise2D is a stable ref
  );

  // ── Main draw function ────────────────────────────────────────────────────

  const drawFrame = useCallback(() => {
    const dc  = displayRef.current;
    const ec  = effectsRef.current;
    const img = imgRef.current;
    if (!dc || !ec || !img?.complete) return;

    syncSize();

    const W = dc.width;
    const H = dc.height;
    if (!W || !H) return;

    const dCtx = dc.getContext("2d");
    const eCtx = ec.getContext("2d");
    if (!dCtx || !eCtx) return;

    const isBurning = burnStartRef.current !== null;
    const elapsed   = isBurning
      ? (performance.now() - burnStartRef.current!) / 1000
      : 0;

    // burnP: how much paper has been consumed (0 = full paper, 1 = gone)
    // Phase 1 (0→1 s): edge ignition only, paper does not shrink yet
    // Phase 2-3 (1 s→end): burnP ramps from 0 to 1 with slight acceleration
    const burnP = elapsed <= PHASE1_END
      ? 0
      : Math.min(
          Math.pow(
            (elapsed - PHASE1_END) / (TOTAL_DURATION - PHASE1_END),
            1.15,
          ),
          1,
        );

    const cx = W / 2;
    const cy = H / 2;

    // ── Layer 1: display canvas — parchment image + text ─────────────────

    dCtx.clearRect(0, 0, W, H);

    // Font setup (used for both measure and draw)
    const fontSize = Math.max(14, W * 0.042);
    dCtx.font          = `300 italic ${fontSize}px 'Cormorant Garamond', Georgia, serif`;
    dCtx.fillStyle     = "#2a1f14";
    dCtx.textAlign     = "center";
    dCtx.textBaseline  = "middle";

    const textPadH   = W * 0.16;
    const textW      = W - textPadH * 2;
    const lines      = wrapText(dCtx, textRef.current, textW);
    const lineH      = fontSize * 1.8;
    const totalTextH = lines.length * lineH;
    const textStartY = H / 2 - totalTextH / 2 + lineH / 2;

    const drawImageAndText = () => {
      dCtx.drawImage(img, 0, 0, W, H);
      dCtx.fillStyle = "#2a1f14";
      lines.forEach((line, i) =>
        dCtx.fillText(line, W / 2, textStartY + i * lineH),
      );
    };

    if (burnP < 1) {
      if (burnP > 0) {
        // Clip everything (image + text) to the remaining paper shape
        const edgePts = buildEdge(W, H, burnP, elapsed, 128);
        dCtx.save();
        dCtx.beginPath();
        edgePts.forEach(([x, y], i) =>
          i === 0 ? dCtx.moveTo(x, y) : dCtx.lineTo(x, y),
        );
        dCtx.closePath();
        dCtx.clip();
        drawImageAndText();

        // Simulate heat curling: warm darkening across remaining paper
        dCtx.globalAlpha = Math.min(burnP * 0.55, 0.46);
        dCtx.fillStyle   = "rgba(80, 22, 0, 1)";
        dCtx.fillRect(0, 0, W, H);
        dCtx.globalAlpha = 1;
        dCtx.restore();
      } else {
        // Pre-burn: full image, no clip
        drawImageAndText();
      }
    }

    // ── Layer 2: effects canvas — fire glow, char, embers ────────────────

    eCtx.clearRect(0, 0, W, H);

    if (!isBurning) return;

    const noise = noise2D.current;

    // ── Phase 1: pulsing ember ignition spots along paper edge ───────────

    if (elapsed < PHASE1_END) {
      const p1    = elapsed / PHASE1_END;
      const spots = 14;
      for (let i = 0; i < spots; i++) {
        const angle = (i / spots) * Math.PI * 2;
        // Position spots near the boundary of the paper (80% of half-dimensions)
        const sx    = cx + Math.cos(angle) * cx * 0.80;
        const sy    = cy + Math.sin(angle) * cy * 0.80;
        const pulse = 0.4 + 0.6 * Math.abs(Math.sin(elapsed * 8 + i * 1.9));
        const alpha = p1 * pulse * 0.90;
        const size  = 8 + 4 * pulse;

        const grd = eCtx.createRadialGradient(sx, sy, 0, sx, sy, size);
        grd.addColorStop(0,    `rgba(255, 215, 60, ${alpha})`);
        grd.addColorStop(0.45, `rgba(255, 95, 0,  ${alpha * 0.65})`);
        grd.addColorStop(1,    "rgba(200, 20, 0, 0)");
        eCtx.fillStyle = grd;
        eCtx.beginPath();
        eCtx.arc(sx, sy, size, 0, Math.PI * 2);
        eCtx.fill();
      }
    }

    // ── Phase 2-3: active burn edge — glow + char + ember spawn ──────────

    if (burnP > 0 && burnP < 1) {
      const edgePts = buildEdge(W, H, burnP, elapsed, 160);
      const glowR   = 9  + burnP * 9;
      const charR   = 11 + burnP * 7;

      // Spawn new embers
      const spawnN = Math.floor(1 + burnP * 10);
      for (let s = 0; s < spawnN; s++) {
        if (Math.random() > 0.4 || embersRef.current.length >= MAX_EMBERS) continue;
        const [px, py] = edgePts[Math.floor(Math.random() * edgePts.length)];
        embersRef.current.push({
          x:     px + (Math.random() - 0.5) * 8,
          y:     py + (Math.random() - 0.5) * 8,
          vx:    (Math.random() - 0.5) * 2.2,
          vy:    -(1.5 + Math.random() * 4.5),
          life:  1.0,
          decay: 0.011 + Math.random() * 0.017,
          size:  1.2 + Math.random() * 2.8,
          color: EMBER_COLORS[Math.floor(Math.random() * EMBER_COLORS.length)],
        });
      }

      // Draw char band + fire glow at every other edge point (performance)
      for (let i = 0; i < edgePts.length; i += 2) {
        const [ex, ey] = edgePts[i];

        // Charred black band, radiating inward from the burn front
        const cGrd = eCtx.createRadialGradient(ex, ey, 0, ex, ey, charR);
        cGrd.addColorStop(0,    "rgba(5, 2, 0, 0.96)");
        cGrd.addColorStop(0.38, "rgba(14, 5, 0, 0.68)");
        cGrd.addColorStop(0.72, "rgba(22, 7, 0, 0.24)");
        cGrd.addColorStop(1,    "rgba(0, 0, 0, 0)");
        eCtx.fillStyle = cGrd;
        eCtx.beginPath();
        eCtx.arc(ex, ey, charR, 0, Math.PI * 2);
        eCtx.fill();

        // Outer fire glow — modulated by noise for a live flame feel
        const gi   = 0.62 + 0.38 * noise(ex * 0.04 + elapsed * 4, ey * 0.04);
        const gGrd = eCtx.createRadialGradient(ex, ey, 0, ex, ey, glowR);
        gGrd.addColorStop(0,    `rgba(255, 185, 30, ${gi})`);
        gGrd.addColorStop(0.35, `rgba(255, 100, 0,  ${gi * 0.65})`);
        gGrd.addColorStop(0.70, `rgba(220, 40,  0,  ${gi * 0.25})`);
        gGrd.addColorStop(1,    "rgba(160, 0, 0, 0)");
        eCtx.fillStyle = gGrd;
        eCtx.beginPath();
        eCtx.arc(ex, ey, glowR, 0, Math.PI * 2);
        eCtx.fill();
      }
    }

    // ── Phase 3 final flare ───────────────────────────────────────────────

    if (burnP > 0.88) {
      const fp  = (burnP - 0.88) / 0.12;
      const grd = eCtx.createRadialGradient(cx, cy, 0, cx, cy, W * 0.55);
      grd.addColorStop(0,   `rgba(255, 220, 80, ${fp * 0.55})`);
      grd.addColorStop(0.4, `rgba(255, 110, 0,  ${fp * 0.32})`);
      grd.addColorStop(1,   "rgba(180, 40, 0, 0)");
      eCtx.fillStyle = grd;
      eCtx.fillRect(0, 0, W, H);
    }

    // ── Ember particles ───────────────────────────────────────────────────

    embersRef.current = embersRef.current.filter((e) => {
      e.x   += e.vx;
      e.y   += e.vy;
      e.vy  += 0.06;                        // slight downward arc
      e.vx  += (Math.random() - 0.5) * 0.18;
      e.life -= e.decay;
      if (e.life <= 0) return false;

      eCtx.globalAlpha = Math.min(e.life, 1) * 0.92;
      eCtx.fillStyle   = e.color;
      eCtx.beginPath();
      eCtx.arc(e.x, e.y, e.size * Math.min(e.life * 1.5, 1), 0, Math.PI * 2);
      eCtx.fill();
      return true;
    });
    eCtx.globalAlpha = 1;

    // ── Phase 4: completion ───────────────────────────────────────────────

    if (burnP >= 1 && embersRef.current.length === 0 && !doneFiredRef.current) {
      doneFiredRef.current = true;
      setTimeout(() => onCompleteRef.current(), 500);
    }
  }, [buildEdge, syncSize]);

  // ── Effects ────────────────────────────────────────────────────────────────

  // Load image into a hidden Image object (canvas texture source)
  useEffect(() => {
    const img = new Image();
    img.onload = () => { imgRef.current = img; };
    img.src = imageSrc;
  }, [imageSrc]);

  // Persistent RAF loop — always running so static frame renders correctly
  useEffect(() => {
    let active = true;
    const loop = () => {
      if (!active) return;
      drawFrame();
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);
    return () => {
      active = false;
      cancelAnimationFrame(rafRef.current);
    };
  }, [drawFrame]);

  // Start burn when prop flips to true
  useEffect(() => {
    if (!burning) return;
    doneFiredRef.current = false;
    embersRef.current    = [];
    burnStartRef.current = performance.now();
  }, [burning]);

  // Keep canvases sized to container on resize
  useEffect(() => {
    const obs = new ResizeObserver(syncSize);
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, [syncSize]);

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <div
      ref={containerRef}
      style={{
        position:    "relative",
        width:       "min(460px, 85vw)",
        aspectRatio: "3 / 4",
        margin:      "0 auto",
      }}
    >
      {/* Layer 1 — parchment image + text, clipped to remaining paper area */}
      <canvas
        ref={displayRef}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      />

      {/* Layer 2 — fire glow, char band, ember particles */}
      <canvas
        ref={effectsRef}
        style={{
          position:      "absolute",
          inset:         0,
          width:         "100%",
          height:        "100%",
          zIndex:        1,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}
