"use client";

import React from "react";
import { PillLabel } from "./PillLabel";
import { CHECKLIST_STEPS, ChecklistStep } from "@/data/content";
import { Check } from "lucide-react";

interface ChecklistTimelineProps {
  completedSteps: number[];
  onToggleStep: (id: number) => void;
}

export function ChecklistTimeline({
  completedSteps,
  onToggleStep,
}: ChecklistTimelineProps) {
  const stage1Steps = CHECKLIST_STEPS.filter(
    (s) => s.section === "BEFORE ANYTHING GOES WRONG"
  );
  const stage2Steps = CHECKLIST_STEPS.filter(
    (s) => s.section === "WHEN THE FAULT APPEARS"
  );
  const stage3Steps = CHECKLIST_STEPS.filter(
    (s) => s.section === "WHEN A TECHNICIAN VISITS"
  );

  const renderTimelineSection = ({
    sectionId,
    title,
    steps,
    bgClass,
  }: {
    sectionId: string;
    title: string;
    steps: ChecklistStep[];
    bgClass: string;
  }) => (
    <section id={sectionId} className={`py-20 sm:py-32 ${bgClass} border-b border-[#E7EAEF]`}>
      <div className="max-w-[880px] mx-auto px-5 sm:px-10">
        {/* Section Header Stack */}
        <div className="flex flex-col items-start mb-12 sm:mb-16">
          <PillLabel dot={true} className="mb-4">
            {title}
          </PillLabel>
          <h2 className="text-[32px] sm:text-[44px] lg:text-[47px] font-extrabold tracking-[-0.035em] leading-[1.06] text-[#0D1117]">
            {title}
          </h2>
        </div>

        {/* Timeline Rail & Steps (DESIGN.md specification: 2px hairline rail on the left, 10px emerald dots, card per event) */}
        <div className="relative pl-6 sm:pl-8">
          <div
            className="absolute left-[7px] sm:left-[9px] top-4 bottom-4 w-[2px] bg-[#E7EAEF]"
            aria-hidden="true"
          />

          <div className="space-y-6 sm:space-y-8">
            {steps.map((step) => {
              const isCompleted = completedSteps.includes(step.id);
              return (
                <div key={step.id} className="relative group">
                  {/* 10px emerald dot on rail */}
                  <button
                    onClick={() => onToggleStep(step.id)}
                    className={`absolute -left-[24px] sm:-left-[31px] top-7 w-[16px] h-[16px] rounded-full flex items-center justify-center transition-all ${
                      isCompleted
                        ? "bg-[#087A58] ring-4 ring-[#DCF3EA]"
                        : "bg-white border-2 border-[#087A58] hover:scale-125"
                    }`}
                    aria-label={`Toggle step ${step.number}`}
                  >
                    {isCompleted && (
                      <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />
                    )}
                  </button>

                  {/* Step Card (White, 1px hairline border, 18px radius, 28 to 32px padding, card shadow) */}
                  <div
                    onClick={() => onToggleStep(step.id)}
                    className={`hover-lift rounded-[18px] border transition-all p-7 sm:p-8 cursor-pointer bg-white ${
                      isCompleted
                        ? "border-[#B9E6D6] shadow-card-raised bg-[#FBFCFD]"
                        : "border-[#E7EAEF] shadow-card-resting"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isCompleted
                            ? "bg-[#087A58] border-[#087A58] text-white"
                            : "border-[#D6DBE3] bg-white group-hover:border-[#087A58]"
                        }`}
                      >
                        {isCompleted && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
                      </div>

                      <div className="flex-1">
                        <h3 className="text-[20px] sm:text-[22px] font-extrabold text-[#0D1117] tracking-tight mb-2">
                          {step.number}. {step.title}
                        </h3>
                        <p className="text-[16px] sm:text-[17px] text-[#363C47] leading-[1.72]">
                          {step.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );

  return (
    <div>
      {/* 1. BEFORE ANYTHING GOES WRONG */}
      {renderTimelineSection({
        sectionId: "before-anything-goes-wrong",
        title: "BEFORE ANYTHING GOES WRONG",
        steps: stage1Steps,
        bgClass: "bg-white",
      })}

      {/* 2. WHEN THE FAULT APPEARS */}
      {renderTimelineSection({
        sectionId: "when-the-fault-appears",
        title: "WHEN THE FAULT APPEARS",
        steps: stage2Steps,
        bgClass: "bg-[#F7F8FA]",
      })}

      {/* 3. WHEN A TECHNICIAN VISITS */}
      {renderTimelineSection({
        sectionId: "when-a-technician-visits",
        title: "WHEN A TECHNICIAN VISITS",
        steps: stage3Steps,
        bgClass: "bg-white",
      })}
    </div>
  );
}
