"use client";

import { useEffect, useRef } from "react";

export default function FlameGlow() {
  const layer0 = useRef<HTMLDivElement>(null); // ember bed
  const layer1 = useRef<HTMLDivElement>(null); // center tongue
  const layer2 = useRef<HTMLDivElement>(null); // left tongue
  const layer3 = useRef<HTMLDivElement>(null); // right tongue
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const start = performance.now();

    const loop = (now: number) => {
      const t = (now - start) / 1000;

      // Each layer gets its own noise-like oscillation from summed sines
      const o0 = 0.12 + 0.06 * Math.sin(t * 1.1) + 0.04 * Math.sin(t * 2.7 + 1.0);
      const o1 = 0.20 + 0.10 * Math.sin(t * 1.7 + 0.5) + 0.06 * Math.sin(t * 3.3 + 2.1);
      const o2 = 0.14 + 0.07 * Math.sin(t * 2.1 + 1.2) + 0.05 * Math.sin(t * 0.9 + 0.3);
      const o3 = 0.13 + 0.07 * Math.sin(t * 1.4 + 2.4) + 0.04 * Math.sin(t * 3.8 + 1.5);

      // Slight vertical drift for the center tongue
      const y1 = -4 * Math.sin(t * 1.3 + 0.8);
      const y2 = -3 * Math.sin(t * 1.9 + 1.6);
      const y3 = -3 * Math.sin(t * 2.2 + 0.2);

      if (layer0.current) layer0.current.style.opacity = String(o0);
      if (layer1.current) {
        layer1.current.style.opacity = String(o1);
        layer1.current.style.transform = `translateX(-50%) translateY(${y1}px)`;
      }
      if (layer2.current) {
        layer2.current.style.opacity = String(o2);
        layer2.current.style.transform = `translateX(-180px) translateY(${y2}px)`;
      }
      if (layer3.current) {
        layer3.current.style.opacity = String(o3);
        layer3.current.style.transform = `translateX(20px) translateY(${y3}px)`;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, height: "60vh", pointerEvents: "none", zIndex: 0 }}>
      {/* Wide ember bed */}
      <div ref={layer0} style={{
        position: "absolute", bottom: 0, left: 0, right: 0,
        width: "100%", height: "220px",
        background: "radial-gradient(ellipse at center bottom, rgba(200,80,10,0.9) 0%, rgba(160,50,5,0.5) 45%, transparent 75%)",
      }} />
      {/* Center tongue */}
      <div ref={layer1} style={{
        position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
        width: "520px", height: "480px",
        background: "radial-gradient(ellipse at center bottom, rgba(230,110,15,1) 0%, rgba(190,65,5,0.55) 35%, rgba(120,30,0,0.18) 65%, transparent 85%)",
      }} />
      {/* Left tongue */}
      <div ref={layer2} style={{
        position: "absolute", bottom: 0, left: "50%", transform: "translateX(-300px)",
        width: "320px", height: "360px",
        background: "radial-gradient(ellipse at center bottom, rgba(210,80,10,0.9) 0%, rgba(150,45,5,0.4) 50%, transparent 80%)",
      }} />
      {/* Right tongue */}
      <div ref={layer3} style={{
        position: "absolute", bottom: 0, left: "50%", transform: "translateX(20px)",
        width: "320px", height: "340px",
        background: "radial-gradient(ellipse at center bottom, rgba(220,90,12,0.9) 0%, rgba(155,50,5,0.4) 50%, transparent 80%)",
      }} />
    </div>
  );
}
