"use client";

import { useEffect, useState } from "react";

interface ScreenProps {
  children: React.ReactNode;
  active: boolean;
}

export default function Screen({ children, active }: ScreenProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!active) {
      setVisible(false);
      return;
    }
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, [active]);

  // Unmount when not active so timers inside (e.g. CountdownRing) don't fire
  if (!active) return null;

  return (
    <div
      className="flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-6 py-12 text-center"
      style={{
        opacity:    visible ? 1 : 0,
        transition: "opacity 3s ease",
      }}
    >
      {children}
    </div>
  );
}
