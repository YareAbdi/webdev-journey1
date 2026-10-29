import React from "react";

export function Ticker() {
  const tickerItems = [
    "CLAIM READY",
    "A FREE CHECKLIST FOR ANYONE ABOUT TO FILE A WARRANTY CLAIM.",
    "A WARRANTY CLAIM IS DECIDED ON RECORDS. KEEP YOURS, AND ASK FOR THEIRS IN WRITING.",
    "15 STEPS IN THE CHECKLIST.",
    "4 RECORDS TO KEEP BEFORE ANYTHING GOES WRONG.",
    "1 RULE: IF IT IS NOT IN WRITING, IT DID NOT HAPPEN.",
    "DOWNLOAD THE CHECKLIST AND KEEP IT WITH YOUR INVOICES.",
    "SHARE IT WITH A FRIEND WHO JUST BOUGHT SOMETHING EXPENSIVE."
  ];

  return (
    <div
      className="w-full bg-[#EEFAF5] border-b border-[#B9E6D6] overflow-hidden py-2 text-[#065F43] select-none relative z-50 print:hidden"
    >
      <div className="flex animate-ticker whitespace-nowrap">
        {/* Render twice for continuous loop */}
        <div className="flex items-center gap-10 pr-10">
          {tickerItems.map((item, index) => (
            <div key={`item1-${index}`} className="flex items-center gap-10">
              <span className="font-mono text-[10px] font-medium tracking-[0.16em] uppercase">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#087A58] opacity-60" />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-10 pr-10" aria-hidden="true">
          {tickerItems.map((item, index) => (
            <div key={`item2-${index}`} className="flex items-center gap-10">
              <span className="font-mono text-[10px] font-medium tracking-[0.16em] uppercase">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#087A58] opacity-60" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
