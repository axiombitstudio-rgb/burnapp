"use client";

import { useEffect, useState } from "react";

interface NavProps {
  mode: "home" | "write" | "witness";
  onModeChange: (mode: "write" | "witness") => void;
  witnessCount: number;
}

export default function Nav({ mode, onModeChange, witnessCount }: NavProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <nav
      className="flex justify-between items-center px-6 py-4 absolute top-0 left-0 right-0 z-10"
      style={{ opacity: visible ? 1 : 0, transition: "opacity 3s ease" }}
    >
      <span className="text-[11px] text-muted tracking-[4px] uppercase">
        Burn
      </span>
      <div className="flex items-center gap-4">
        <button
          onClick={() => onModeChange("write")}
          className={`text-[12px] px-2 py-1 rounded transition-all font-serif ${
            mode === "write"
              ? "text-accent bg-accent/[0.08]"
              : "text-muted hover:text-text"
          }`}
        >
          Write
        </button>
        <button
          onClick={() => onModeChange("witness")}
          className={`text-[12px] px-2 py-1 rounded transition-all font-serif ${
            mode === "witness"
              ? "text-accent bg-accent/[0.08]"
              : "text-muted hover:text-text"
          }`}
        >
          Witness
        </button>
        <span className="text-[11px] text-muted italic">
          {witnessCount} present
        </span>
      </div>
    </nav>
  );
}
