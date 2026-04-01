"use client";

interface NavProps {
  mode: "home" | "write" | "witness";
  onModeChange: (mode: "write" | "witness") => void;
  witnessCount: number;
}

export default function Nav({ mode, onModeChange, witnessCount }: NavProps) {
  return (
    <nav className="flex justify-between items-center px-6 py-4 absolute top-0 left-0 right-0 z-10">
      <span className="text-[11px] text-dim tracking-[4px] uppercase">
        Burn
      </span>
      <div className="flex items-center gap-4">
        <button
          onClick={() => onModeChange("write")}
          className={`text-[12px] px-2 py-1 rounded transition-all font-serif ${
            mode === "write"
              ? "text-accent bg-accent/[0.08]"
              : "text-deep hover:text-muted"
          }`}
        >
          Write
        </button>
        <button
          onClick={() => onModeChange("witness")}
          className={`text-[12px] px-2 py-1 rounded transition-all font-serif ${
            mode === "witness"
              ? "text-accent bg-accent/[0.08]"
              : "text-deep hover:text-muted"
          }`}
        >
          Witness
        </button>
        <span className="text-[11px] text-deep italic">
          {witnessCount} present
        </span>
      </div>
    </nav>
  );
}
