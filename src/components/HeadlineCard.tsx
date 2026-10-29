import React from "react";
import { PillLabel } from "./PillLabel";

export function HeadlineCard() {
  return (
    <div className="relative rounded-[26px] bg-[#0D1117] text-white p-7 sm:p-12 overflow-hidden shadow-card-raised border border-white/10 group">
      {/* Scanline Texture Overlay */}
      <div
        className="absolute inset-0 pointer-events-none scanline-texture opacity-30"
        aria-hidden="true"
      />

      {/* Content Stack */}
      <div className="relative z-10 flex flex-col justify-between h-full space-y-6 sm:space-y-8">
        <div>
          <PillLabel variant="dark" dot={true}>
            THE IDEA IN ONE LINE
          </PillLabel>
        </div>

        {/* The One Sentence in Large Mono Type */}
        <p className="font-mono text-[18px] sm:text-[23px] lg:text-[25px] font-medium leading-[1.4] tracking-tight text-[#34D399] border-l-2 border-[#34D399]/40 pl-4 sm:pl-6 my-2">
          A warranty claim is decided on records. Keep yours, and ask for theirs in writing.
        </p>
      </div>
    </div>
  );
}
