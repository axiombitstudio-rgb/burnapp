"use client";

import { useEffect, useRef } from "react";

interface CountdownRingProps {
  secret: string;
  duration?: number;
  onComplete: () => void;
}

export default function CountdownRing({
  secret,
  duration = 10,
  onComplete,
}: CountdownRingProps) {
  const ringRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    if (ringRef.current) {
      ringRef.current.style.animation = "none";
      ringRef.current.offsetHeight;
      ringRef.current.style.animation = `countdownRing ${duration}s linear forwards`;
    }
    const timer = setTimeout(onComplete, duration * 1000);
    return () => clearTimeout(timer);
  }, [duration, onComplete]);

  return (
    <div className="relative w-[200px] h-[200px] mx-auto mb-5">
      <svg
        width="200"
        height="200"
        viewBox="0 0 200 200"
        style={{ transform: "rotate(-90deg)" }}
      >
        <circle
          cx="100"
          cy="100"
          r="45"
          fill="none"
          stroke="rgba(196,122,48,0.06)"
          strokeWidth="2"
        />
        <circle
          ref={ringRef}
          cx="100"
          cy="100"
          r="45"
          fill="none"
          stroke="#8a6a40"
          strokeWidth="2"
          strokeDasharray="283"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[13px] text-text max-w-[130px] text-center leading-relaxed italic font-serif">
        {secret}
      </div>
    </div>
  );
}
