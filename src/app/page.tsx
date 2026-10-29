"use client";

import React, { useState, useEffect } from "react";
import { Ticker } from "@/components/Ticker";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { WhoThisIsFor } from "@/components/WhoThisIsFor";
import { KeyNumbers } from "@/components/KeyNumbers";
import { ChecklistTimeline } from "@/components/ChecklistTimeline";
import { RefusalDarkSection } from "@/components/RefusalDarkSection";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";
import { PrintModal } from "@/components/PrintModal";
import { ArrowUp, Printer } from "lucide-react";

export default function Home() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Load completed steps from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("claim_ready_completed_steps");
      if (saved) {
        setCompletedSteps(JSON.parse(saved));
      }
    } catch {
      // ignore storage errors
    }
  }, []);

  // Handle scroll to top visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleStep = (id: number) => {
    setCompletedSteps((prev) => {
      const next = prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id];
      try {
        localStorage.setItem("claim_ready_completed_steps", JSON.stringify(next));
      } catch {
        // ignore storage errors
      }
      return next;
    });
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#363C47] selection:bg-[#DCF3EA] selection:text-[#065F43]">
      {/* 1. Ticker strip above header */}
      <Ticker />

      {/* 2. Sticky Header */}
      <Header onDownloadClick={() => setIsPrintModalOpen(true)} />

      <main className="flex-1">
        {/* 3. Hero Section (White) */}
        <Hero onDownloadClick={() => setIsPrintModalOpen(true)} />

        {/* 4. WHO THIS IS FOR (Mist #F7F8FA) */}
        <WhoThisIsFor />

        {/* 5. KEY NUMBERS FOR THE PAGE (White) */}
        <KeyNumbers />

        {/* 6. BEFORE ANYTHING GOES WRONG, WHEN THE FAULT APPEARS, WHEN A TECHNICIAN VISITS (Alternating White & Mist) */}
        <ChecklistTimeline
          completedSteps={completedSteps}
          onToggleStep={handleToggleStep}
        />

        {/* 7. IF THE CLAIM IS REFUSED (Dark Section #0D1117) */}
        <RefusalDarkSection
          completedSteps={completedSteps}
          onToggleStep={handleToggleStep}
        />

        {/* 8. CALL TO ACTION (White) */}
        <CallToAction onDownloadClick={() => setIsPrintModalOpen(true)} />
      </main>

      {/* 9. Footer (Mist #F7F8FA) */}
      <Footer />

      {/* Printable / Download Modal */}
      <PrintModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        completedSteps={completedSteps}
      />

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-30 flex items-center gap-3 print:hidden">
        <button
          onClick={() => setIsPrintModalOpen(true)}
          className="hover-lift p-3.5 rounded-full bg-[#087A58] text-white shadow-card-float hover:bg-[#066748] transition-all focus:outline-none focus:ring-2 focus:ring-[#087A58]"
          aria-label="Download the checklist"
          title="Download the checklist"
        >
          <Printer className="w-5 h-5" />
        </button>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="hover-lift p-3 rounded-full bg-white border border-[#E7EAEF] text-[#0D1117] shadow-card-resting hover:bg-[#F7F8FA] transition-all focus:outline-none"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}
