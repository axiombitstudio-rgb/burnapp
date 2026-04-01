"use client";

interface ScreenProps {
  children: React.ReactNode;
  active: boolean;
}

export default function Screen({ children, active }: ScreenProps) {
  if (!active) return null;
  return (
    <div className="animate-fadeUp flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-6 py-12 text-center">
      {children}
    </div>
  );
}
