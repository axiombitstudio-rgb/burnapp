"use client";

import { useEffect, useRef, useState } from "react";

// ── Seeded RNG + ragged clip-path (shared logic with BurnParchment) ──────────
function seededRng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff;
    return (s >>> 0) / 0xffffffff;
  };
}

function generateRaggedPath(w: number, h: number, seed = 99): string {
  const rngTop    = seededRng(seed);
  const rngRight  = seededRng(seed + 7919);
  const rngBottom = seededRng(seed + 3571);
  const rngLeft   = seededRng(seed + 6247);

  const pts: [number, number][] = [];

  function edgeWobble(
    rng: () => number,
    t: number,
    baseJag: number,
    burstCenters: number[],
    burstWidth: number,
    burstScale: number,
  ): number {
    let localJag = baseJag;
    for (const c of burstCenters) {
      const d = Math.abs(t - c);
      if (d < burstWidth) localJag += baseJag * burstScale * (1 - d / burstWidth);
    }
    const r = rng();
    const spike = r < 0.08 ? 3.5 : r < 0.22 ? 1.8 : 1.0;
    return (rng() * 2 - 1) * localJag * spike;
  }

  const segs = 72;

  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    pts.push([t * w, edgeWobble(rngTop, t, 10, [0.30, 0.78], 0.14, 2.0)]);
  }
  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    pts.push([w + edgeWobble(rngRight, t, 9, [0.45, 0.68], 0.10, 1.8), t * h]);
  }
  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    pts.push([((segs - i) / segs) * w, h + edgeWobble(rngBottom, t, 11, [0.15, 0.60], 0.13, 2.4)]);
  }
  for (let i = 0; i <= segs; i++) {
    const t = i / segs;
    pts.push([edgeWobble(rngLeft, t, 8, [0.35, 0.80], 0.12, 2.0), ((segs - i) / segs) * h]);
  }

  return "polygon(" + pts.map(([x, y]) => `${x.toFixed(1)}px ${y.toFixed(1)}px`).join(", ") + ")";
}

const LINES = [
  "I told her it didn't matter anymore.",
  "That I had made peace with it.",
  "I smiled when I said it.",
  "",
  "I still check her profile every night.",
  "if it was right.",
];

type LineState = "visible" | "burning" | "gone";

interface ParchmentIntroProps {
  onComplete: () => void;
}

export default function ParchmentIntro({ onComplete }: ParchmentIntroProps) {
  const [started, setStarted] = useState(false);
  const [fading, setFading] = useState(false);
  const [lineStates, setLineStates] = useState<LineState[]>(LINES.map(() => "visible"));
  const [clipPath, setClipPath] = useState("");
  const parchmentRef = useRef<HTMLDivElement>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);
  const emberContainerRef = useRef<HTMLDivElement>(null);
  const cancelledRef = useRef(false);

  const spawnEmbers = (lineEl: HTMLDivElement | null) => {
    const container = emberContainerRef.current;
    const parchment = parchmentRef.current;
    if (!container || !parchment || !lineEl) return;
    const pRect = parchment.getBoundingClientRect();
    const lRect = lineEl.getBoundingClientRect();
    const colors = ["#e87828", "#d85a30", "#c47a30", "#f09040", "#ff6020"];
    for (let i = 0; i < 12; i++) {
      const ember = document.createElement("div");
      const x = lRect.left - pRect.left + Math.random() * lRect.width;
      const y = lRect.top - pRect.top + Math.random() * lRect.height;
      ember.style.cssText = `
        position: absolute;
        width: ${2 + Math.random() * 3}px;
        height: ${2 + Math.random() * 3}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: 50%;
        pointer-events: none;
        left: ${x}px;
        top: ${y}px;
        animation: emberFloat ${0.8 + Math.random() * 0.7}s ease-out forwards;
      `;
      container.appendChild(ember);
      setTimeout(() => ember.remove(), 1500);
    }
  };

  const skip = () => {
    cancelledRef.current = true;
    setFading(true);
    setTimeout(onComplete, 800);
  };

  useEffect(() => {
    const el = parchmentRef.current;
    if (!el) return;
    setClipPath(generateRaggedPath(el.offsetWidth, el.offsetHeight));
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), 1600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!started) return;
    cancelledRef.current = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        const t = setTimeout(() => {
          if (!cancelledRef.current) resolve();
        }, ms);
        timers.push(t);
      });

    const run = async () => {
      for (let i = 0; i < LINES.length; i++) {
        if (cancelledRef.current) return;
        const isLast = i === LINES.length - 1;
        const burnDuration = isLast ? 2000 : 650;

        spawnEmbers(lineRefs.current[i]);

        setLineStates((prev) => {
          const next = [...prev];
          next[i] = "burning";
          return next;
        });

        await wait(burnDuration);
        if (cancelledRef.current) return;

        setLineStates((prev) => {
          const next = [...prev];
          next[i] = "gone";
          return next;
        });

        if (!isLast) await wait(180);
      }

      if (cancelledRef.current) return;
      setFading(true);
      await wait(1000);
      if (!cancelledRef.current) onComplete();
    };

    run();
    return () => {
      cancelledRef.current = true;
      timers.forEach(clearTimeout);
    };
  }, [started, onComplete]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer"
      style={{ background: "#0f0c08" }}
      onClick={skip}
    >
      <div
        ref={parchmentRef}
        style={{
          position: "relative",
          background:
            "radial-gradient(ellipse at 12% 18%, rgba(10,4,0,0.20) 0%, transparent 42%), radial-gradient(ellipse at 88% 82%, rgba(8,3,0,0.18) 0%, transparent 40%), radial-gradient(ellipse at 78% 12%, rgba(18,8,0,0.15) 0%, transparent 38%), radial-gradient(ellipse at 25% 90%, rgba(12,5,0,0.17) 0%, transparent 40%), radial-gradient(ellipse at 50% 50%, rgba(80,42,6,0.07) 0%, transparent 65%), linear-gradient(162deg, #ead4b3 0%, #d8bd95 30%, #bba27d 58%, #a18b6b 100%)",
          boxShadow:
            "0 16px 64px rgba(0,0,0,0.88), 0 4px 20px rgba(0,0,0,0.65), inset 0 0 60px rgba(20,8,0,0.70)",
          clipPath,
          padding: "52px 56px",
          maxWidth: "440px",
          width: "90%",
          opacity: fading ? 0 : 1,
          transition: "opacity 1s ease",
        }}
      >
        {/* Ember overlay */}
        <div
          ref={emberContainerRef}
          style={{
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            overflow: "hidden",
          }}
        />

        {/* Papyrus fiber texture */}
        <svg
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
          aria-hidden="true"
        >
          <defs>
            <filter id="pi-grain">
              <feTurbulence type="fractalNoise" baseFrequency="0.03 0.92" numOctaves="6" stitchTiles="stitch" result="noise" />
              <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
              <feBlend in="SourceGraphic" in2="gray" mode="multiply" />
            </filter>
          </defs>
          <rect width="100%" height="100%" filter="url(#pi-grain)" opacity="0.38" />
        </svg>

        {LINES.map((line, i) => {
          const state = lineStates[i];
          const isLast = i === LINES.length - 1;

          let opacity = 1;
          let color = "#2a1604";
          let textShadow = "none";
          let transform = "translateY(0)";
          let transition = "none";

          if (state === "burning") {
            opacity = 0;
            color = "#b84010";
            textShadow = "0 0 14px rgba(210,70,10,0.95)";
            transform = "translateY(-8px)";
            transition = isLast
              ? "opacity 2s ease, transform 2s ease"
              : "opacity 0.65s ease, transform 0.65s ease";
          } else if (state === "gone") {
            opacity = 0;
          }

          return (
            <div
              key={i}
              ref={(el) => {
                lineRefs.current[i] = el;
              }}
              style={{
                opacity,
                color,
                textShadow,
                transform,
                transition,
                minHeight: line === "" ? "14px" : undefined,
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: isLast ? "22px" : "17px",
                fontWeight: isLast ? 400 : 300,
                fontStyle: isLast ? "italic" : "normal",
                lineHeight: "2",
              }}
            >
              {line || "\u00A0"}
            </div>
          );
        })}

        <p
          style={{
            position: "absolute",
            bottom: "14px",
            right: "20px",
            fontSize: "10px",
            color: "#9a7840",
            fontFamily: "Georgia, serif",
            fontStyle: "italic",
            opacity: 0.5,
          }}
        >
          tap to skip
        </p>
      </div>
    </div>
  );
}
