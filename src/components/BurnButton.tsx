"use client";

interface BurnButtonProps {
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  className?: string;
}

export default function BurnButton({
  onClick,
  disabled,
  children,
  variant = "primary",
  className = "",
}: BurnButtonProps) {
  if (variant === "ghost") {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`bg-transparent border border-dashed border-accent/20 text-dim font-serif text-[13px] px-6 py-2 rounded-sm cursor-pointer transition-all hover:border-accent/60 hover:text-accent disabled:opacity-20 disabled:cursor-default ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`bg-transparent border border-accent/30 text-accent/80 font-serif text-[13px] px-9 py-3 rounded-sm cursor-pointer transition-all tracking-[3px] uppercase hover:bg-accent/[0.07] hover:border-accent hover:text-accent disabled:opacity-20 disabled:cursor-default disabled:hover:bg-transparent ${className}`}
    >
      {children}
    </button>
  );
}
