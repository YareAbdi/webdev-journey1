"use client";

import React, { useState } from "react";

interface CallToActionProps {
  onDownloadClick?: () => void;
}

export function CallToAction({ onDownloadClick }: CallToActionProps) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      if (navigator.share) {
        navigator.share({
          title: "CLAIM READY",
          text: "A warranty claim is decided on records. Keep yours, and ask for theirs in writing.",
          url: window.location.href,
        }).catch(() => {
          navigator.clipboard.writeText(window.location.href);
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        });
      } else {
        navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    }
  };

  return (
    <section id="call-to-action" className="py-20 sm:py-28 bg-white">
      {/* Shell Narrow: 880px as specified in DESIGN.md */}
      <div className="max-w-[880px] mx-auto px-5 sm:px-10">
        {/* Action Card 1: Download & Invoices */}
        <div className="rounded-[18px] border border-[#E7EAEF] bg-white p-7 sm:p-10 shadow-card-resting mb-8 hover-lift">
          <h3 className="text-[20px] sm:text-[24px] font-extrabold text-[#0D1117] tracking-tight mb-6">
            Download the checklist and keep it with your invoices.
          </h3>

          <button
            onClick={onDownloadClick}
            className="hover-lift inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#087A58] text-white text-[15px] font-semibold shadow-card-raised hover:bg-[#066748] focus:outline-none focus:ring-2 focus:ring-[#087A58] focus:ring-offset-2 transition-all"
          >
            Download the checklist
          </button>
        </div>

        {/* Action Card 2: Share with a Friend */}
        <div className="rounded-[18px] border border-[#E7EAEF] bg-[#FBFCFD] p-7 sm:p-10 shadow-card-resting hover-lift">
          <h3 className="text-[20px] sm:text-[24px] font-extrabold text-[#0D1117] tracking-tight mb-6">
            Share it with a friend who just bought something expensive.
          </h3>

          <button
            onClick={handleShare}
            className="inline-flex items-center justify-center px-7 py-3.5 rounded-full bg-[#0D1117] text-white text-[14px] font-semibold hover:bg-[#087A58] transition-colors focus:outline-none focus:ring-2 focus:ring-[#087A58]"
          >
            {copied ? "Link copied" : "Share"}
          </button>
        </div>
      </div>
    </section>
  );
}
