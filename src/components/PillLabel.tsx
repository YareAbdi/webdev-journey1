import React from "react";

interface PillLabelProps {
  children: React.ReactNode;
  variant?: "light" | "dark";
  dot?: boolean;
  className?: string;
}

export function PillLabel({
  children,
  variant = "light",
  dot = true,
  className = "",
}: PillLabelProps) {
  if (variant === "dark") {
    return (
      <span
        className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-mono text-[10px] sm:text-[10.5px] uppercase font-medium tracking-[0.16em] bg-white/10 text-[#34D399] border border-[#34D399]/40 ${className}`}
      >
        {dot && (
          <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] animate-pulse" />
        )}
        <span>{children}</span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-mono text-[10px] sm:text-[10.5px] uppercase font-medium tracking-[0.16em] bg-[#EEFAF5] text-[#065F43] border border-[#B9E6D6] ${className}`}
    >
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-[#087A58]" />}
      <span>{children}</span>
    </span>
  );
}
