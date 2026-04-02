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
  const rng = seededRng(seed);
  const segs = 64;
  const pts: [number, number][] = [];
  const jagEdge = [22, 38, 26, 20];
  const wobble = (base: number, jag: number) => {
    const r = rng();
    const spike = r < 0.10 ? 5.0 : r < 0.30 ? 3.0 : 1.0;
    return base + (rng() * 2 - 1) * jag * spike;
  };
  for (let i = 0; i <= segs; i++) pts.push([(i / segs) * w, wobble(0, jagEdge[0])]);
  for (let i = 0; i <= segs; i++) pts.push([wobble(w, jagEdge[1]), (i / segs) * h]);
  for (let i = 0; i <= segs; i++) pts.push([((segs - i) / segs) * w, wobble(h, jagEdge[2])]);
  for (let i = 0; i <= segs; i++) pts.push([wobble(0, jagEdge[3]), ((segs - i) / segs) * h]);
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
            "radial-gradient(ellipse at 12% 18%, rgba(10,4,0,0.80) 0%, transparent 42%), radial-gradient(ellipse at 88% 82%, rgba(8,3,0,0.75) 0%, transparent 40%), radial-gradient(ellipse at 78% 12%, rgba(18,8,0,0.65) 0%, transparent 38%), radial-gradient(ellipse at 25% 90%, rgba(12,5,0,0.70) 0%, transparent 40%), radial-gradient(ellipse at 50% 50%, rgba(80,42,6,0.30) 0%, transparent 65%), linear-gradient(162deg, #7a5418 0%, #5a3a0a 30%, #3e2608 58%, #2a1804 100%)",
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
            <filter id="pi-spots">
              <feTurbulence type="turbulence" baseFrequency="0.06 0.09" numOctaves="4" seed="12" result="t" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.10  0 0 0 0 0.04  0 0 0 0 0.00  0 0 0 9 -4.5" in="t" />
            </filter>
            <filter id="pi-damage">
              <feTurbulence type="turbulence" baseFrequency="0.12" numOctaves="3" seed="31" result="t" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.05  0 0 0 0 0.02  0 0 0 0 0.00  0 0 0 12 -7" in="t" />
            </filter>
          </defs>
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
          <rect width="100%" height="100%" filter="url(#pi-grain)" opacity="0.38" />
          <rect width="100%" height="100%" filter="url(#pi-spots)" opacity="0.55" />
          <rect width="100%" height="100%" filter="url(#pi-damage)" opacity="0.40" />
        </svg>

        {LINES.map((line, i) => {
          const state = lineStates[i];
          const isLast = i === LINES.length - 1;

          let opacity = 1;
          let color = "#c8a86a";
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
