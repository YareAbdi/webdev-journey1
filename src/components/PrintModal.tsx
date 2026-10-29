"use client";

import React from "react";
import { CHECKLIST_STEPS } from "@/data/content";
import { X, Check } from "lucide-react";

interface PrintModalProps {
  isOpen: boolean;
  onClose: () => void;
  completedSteps: number[];
}

export function PrintModal({
  isOpen,
  onClose,
  completedSteps,
}: PrintModalProps) {
  if (!isOpen) return null;

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0D1117]/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div className="bg-white rounded-[26px] max-w-3xl w-full max-h-[90vh] flex flex-col shadow-card-float border border-[#E7EAEF] overflow-hidden my-auto">
        {/* Modal Header */}
        <div className="px-6 py-5 border-b border-[#E7EAEF] flex items-center justify-between bg-[#F7F8FA] shrink-0">
          <div>
            <h3 className="font-extrabold text-[18px] text-[#0D1117] tracking-tight">
              CLAIM READY
            </h3>
            <p className="text-[13px] text-[#5B6472]">
              A free checklist for anyone about to file a warranty claim.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#087A58] text-white text-[13px] font-semibold hover:bg-[#066748] transition-colors shadow-sm"
            >
              Print
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white text-[#5B6472] hover:text-[#0D1117] transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Printable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-[#363C47]">
          {/* THE IDEA IN ONE LINE */}
          <div className="border border-[#B9E6D6] rounded-[18px] p-5 bg-[#EEFAF5]">
            <p className="font-mono text-[10px] text-[#065F43] font-semibold uppercase tracking-[0.16em] mb-1">
              THE IDEA IN ONE LINE
            </p>
            <p className="font-extrabold text-[16px] text-[#065F43] leading-snug">
              A warranty claim is decided on records. Keep yours, and ask for theirs in writing.
            </p>
          </div>

          {/* 15 Steps list */}
          <div className="space-y-3">
            {CHECKLIST_STEPS.map((step) => {
              const isDone = completedSteps.includes(step.id);
              return (
                <div
                  key={step.id}
                  className="flex items-start gap-3.5 p-3 rounded-[12px] bg-[#F7F8FA] border border-[#E7EAEF]"
                >
                  <div
                    className={`w-5 h-5 rounded-md border flex items-center justify-center shrink-0 mt-0.5 ${
                      isDone
                        ? "bg-[#087A58] border-[#087A58] text-white"
                        : "border-[#D6DBE3] bg-white"
                    }`}
                  >
                    {isDone && <Check className="w-3.5 h-3.5" strokeWidth={3} />}
                  </div>
                  <div className="text-[13.5px]">
                    <span className="font-extrabold text-[#0D1117]">
                      {step.number}. {step.title}
                    </span>{" "}
                    <span className="text-[#363C47]">{step.body}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Legal Note verbatim */}
          <div className="text-[12px] text-[#697382] pt-4 border-t border-[#E7EAEF]">
            Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country&apos;s consumer rules.
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-[#E7EAEF] bg-[#F7F8FA] flex items-center justify-end shrink-0">
          <button
            onClick={handlePrint}
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-[#087A58] text-white text-[13.5px] font-semibold hover:bg-[#066748] transition-colors"
          >
            Download the checklist
          </button>
        </div>
      </div>
    </div>
  );
}
