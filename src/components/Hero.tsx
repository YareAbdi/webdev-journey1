import React from "react";
import { PillLabel } from "./PillLabel";
import { HeadlineCard } from "./HeadlineCard";

interface HeroProps {
  onDownloadClick?: () => void;
}

export function Hero({ onDownloadClick }: HeroProps) {
  return (
    <section id="overview" className="relative pt-12 pb-20 sm:pt-20 sm:pb-32 bg-white">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column (55% width on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <PillLabel dot={true} className="mb-4">
              CLAIM READY
            </PillLabel>

            {/* Headline Display */}
            <h1 className="text-[38px] sm:text-[52px] lg:text-[60px] font-extrabold tracking-[-0.035em] leading-[1.06] text-[#0D1117] mb-5 text-balance">
              CLAIM READY
            </h1>

            {/* Lead Paragraph */}
            <p className="text-[18px] sm:text-[20px] text-[#5B6472] font-normal leading-[1.72] max-w-[62ch] mb-8">
              A free checklist for anyone about to file a warranty claim.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onDownloadClick}
                className="hover-lift inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#087A58] text-white text-[15px] font-semibold shadow-card-raised hover:bg-[#066748] focus:outline-none focus:ring-2 focus:ring-[#087A58] focus:ring-offset-2 transition-all"
              >
                Download the checklist
              </button>

              <a
                href="#before-anything-goes-wrong"
                className="hover-lift inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-white border border-[#E7EAEF] text-[#0D1117] text-[15px] font-semibold hover:bg-[#F7F8FA] focus:outline-none focus:ring-2 focus:ring-[#087A58] transition-all"
              >
                15 steps in the checklist
              </a>
            </div>
          </div>

          {/* Right Column (45% width on desktop) -> Headline Card */}
          <div className="lg:col-span-5 w-full">
            <HeadlineCard />
          </div>
        </div>
      </div>
    </section>
  );
}
