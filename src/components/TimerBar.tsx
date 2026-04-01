"use client";

import { useEffect, useState } from "react";

interface TimerBarProps {
  duration?: number;
}

export default function TimerBar({ duration = 10 }: TimerBarProps) {
  const [width, setWidth] = useState(100);

  useEffect(() => {
    const steps = duration * 10;
    let current = 100;
    const interval = setInterval(() => {
      current -= 100 / steps;
      if (current <= 0) {
        clearInterval(interval);
        current = 0;
      }
      setWidth(current);
    }, 100);
    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div className="w-[240px] h-[2px] bg-accent/[0.08] rounded-sm overflow-hidden mb-5">
      <div
        className="h-full rounded-sm transition-[width] duration-100 ease-linear"
        style={{
          width: `${width}%`,
          background: "linear-gradient(90deg, #8a6a40, #a04020)",
        }}
      />
    </div>
  );
}
