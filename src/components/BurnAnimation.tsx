"use client";

import { useEffect, useRef, useState } from "react";

interface BurnAnimationProps {
  text: string;
  onComplete: () => void;
}

export default function BurnAnimation({ text, onComplete }: BurnAnimationProps) {
  const [displayed, setDisplayed] = useState(text);
  const containerRef = useRef<HTMLDivElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const total = text.length;
    const interval = setInterval(() => {
      indexRef.current++;
      const remaining = total - indexRef.current;

      if (containerRef.current) {
        const colors = ["#e87828", "#d85a30", "#c47a30", "#b34020"];
        for (let e = 0; e < 3; e++) {
          const ember = document.createElement("div");
          ember.style.cssText = `
            position: absolute;
            width: 3px; height: 3px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: emberFloat 1.1s ease-out forwards;
          `;
          containerRef.current.appendChild(ember);
          setTimeout(() => ember.remove(), 1100);
        }
      }

      if (remaining <= 0) {
        clearInterval(interval);
        setDisplayed("");
        setTimeout(onComplete, 600);
        return;
      }
      setDisplayed(text.substring(0, remaining));
    }, 80);

    return () => clearInterval(interval);
  }, [text, onComplete]);

  return (
    <div className="relative min-h-[80px] flex items-center justify-center mb-4">
      <div ref={containerRef} className="relative">
        <span className="text-[20px] font-light text-accent/80 tracking-wide font-serif">
          {displayed}
        </span>
      </div>
    </div>
  );
}
