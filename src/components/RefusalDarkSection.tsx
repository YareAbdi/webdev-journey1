"use client";

import React from "react";
import { PillLabel } from "./PillLabel";
import { CHECKLIST_STEPS } from "@/data/content";
import { Check } from "lucide-react";

interface RefusalDarkSectionProps {
  completedSteps: number[];
  onToggleStep: (id: number) => void;
}

export function RefusalDarkSection({
  completedSteps,
  onToggleStep,
}: RefusalDarkSectionProps) {
  const refusalSteps = CHECKLIST_STEPS.filter(
    (s) => s.section === "IF THE CLAIM IS REFUSED"
  );

  return (
    <section
      id="if-the-claim-is-refused"
      className="py-20 sm:py-36 bg-[#0D1117] text-white relative overflow-hidden"
    >
      {/* Scanline Texture in background */}
      <div
        className="absolute inset-0 pointer-events-none scanline-texture opacity-15"
        aria-hidden="true"
      />

      <div className="max-w-[880px] mx-auto px-5 sm:px-10 relative z-10">
        {/* Section Header Stack (Bright Emerald label on Dark Section per DESIGN.md) */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <PillLabel variant="dark" dot={true} className="mb-4">
            IF THE CLAIM IS REFUSED
          </PillLabel>

          <h2 className="text-[32px] sm:text-[44px] lg:text-[47px] font-extrabold tracking-[-0.035em] leading-[1.06] text-white">
            IF THE CLAIM IS REFUSED
          </h2>
        </div>

        {/* 5 Refusal Steps in Inner Frosted Panels (white at 10% opacity per DESIGN.md) */}
        <div className="space-y-5 sm:space-y-6">
          {refusalSteps.map((step) => {
            const isCompleted = completedSteps.includes(step.id);
            return (
              <div
                key={step.id}
                onClick={() => onToggleStep(step.id)}
                className={`hover-lift rounded-[18px] p-7 sm:p-8 transition-all border cursor-pointer ${
                  isCompleted
                    ? "bg-white/[0.12] border-[#34D399]/50 shadow-card-raised"
                    : "bg-white/[0.06] border-white/10 hover:bg-white/[0.09]"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-6 h-6 rounded-full shrink-0 mt-0.5 flex items-center justify-center transition-all ${
                      isCompleted
                        ? "bg-[#34D399] text-[#0D1117]"
                        : "border border-white/40 group-hover:border-[#34D399]"
                    }`}
                  >
                    {isCompleted && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-[20px] sm:text-[22px] font-extrabold text-white tracking-tight mb-2">
                      {step.number}. {step.title}
                    </h3>

                    <p className="text-[16px] sm:text-[17px] text-white/80 leading-[1.72]">
                      {step.body}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
