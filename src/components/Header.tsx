"use client";

import React from "react";

interface HeaderProps {
  onDownloadClick?: () => void;
}

export function Header({ onDownloadClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full h-[72px] bg-white/92 backdrop-blur-md border-b border-[#E7EAEF] transition-all print:hidden">
      <div className="max-w-[1180px] h-full mx-auto px-4 sm:px-10 flex items-center justify-between gap-3 sm:gap-6 flex-nowrap">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 shrink-0 focus:outline-none focus:ring-2 focus:ring-[#087A58] rounded-full p-1 -m-1"
          aria-label="CLAIM READY"
        >
          <div className="w-8 h-8 rounded-full bg-[#087A58] flex items-center justify-center text-white font-extrabold text-[13px] shrink-0">
            CR
          </div>
          <span className="font-extrabold text-[16px] sm:text-[18px] tracking-tight text-[#0D1117] leading-none whitespace-nowrap">
            CLAIM READY
          </span>
        </a>

        {/* Two Links: "The 15 steps" and "Key numbers" */}
        <nav className="flex items-center gap-3 sm:gap-7 shrink-0" aria-label="Main Navigation">
          <a
            href="#before-anything-goes-wrong"
            className="text-[13px] sm:text-[14px] font-semibold text-[#363C47] hover:text-[#087A58] transition-colors whitespace-nowrap"
          >
            The 15 steps
          </a>
          <a
            href="#key-numbers"
            className="text-[13px] sm:text-[14px] font-semibold text-[#363C47] hover:text-[#087A58] transition-colors whitespace-nowrap"
          >
            Key numbers
          </a>
        </nav>

        {/* Download Button */}
        <div className="shrink-0">
          <button
            onClick={onDownloadClick}
            className="inline-flex items-center justify-center px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0D1117] text-white text-[12.5px] sm:text-[13.5px] font-medium transition-colors duration-200 hover:bg-[#087A58] focus:outline-none focus:ring-2 focus:ring-[#087A58] shadow-sm whitespace-nowrap"
          >
            Download
          </button>
        </div>
      </div>
    </header>
  );
}
