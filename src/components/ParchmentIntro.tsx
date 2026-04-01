"use client";

import { useEffect, useRef, useState } from "react";

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
            "linear-gradient(160deg, #ede0c4 0%, #e0cd9c 50%, #d4bc88 100%)",
          boxShadow:
            "0 16px 64px rgba(0,0,0,0.75), 0 4px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,245,220,0.5)",
          borderRadius: "1px",
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

        {LINES.map((line, i) => {
          const state = lineStates[i];
          const isLast = i === LINES.length - 1;

          let opacity = 1;
          let color = "#1a0e05";
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
            color: "#8a7060",
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
