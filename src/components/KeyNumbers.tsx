import React from "react";

export function KeyNumbers() {
  const stats = [
    {
      number: "15",
      caption: "15 steps in the checklist.",
      isHot: false,
    },
    {
      number: "4",
      caption: "4 records to keep before anything goes wrong.",
      isHot: false,
    },
    {
      number: "1",
      caption: "1 rule: if it is not in writing, it did not happen.",
      isHot: true,
    },
  ];

  return (
    <section id="key-numbers" className="py-16 sm:py-24 bg-white border-b border-[#E7EAEF]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-10">
        {/* Stat Grid (per DESIGN.md: cells joined by 1px hairline gaps inside one rounded card) */}
        <div className="bg-[#E7EAEF] p-[1px] rounded-[18px] overflow-hidden shadow-card-resting">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px]">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-7 sm:p-9 flex flex-col justify-between transition-colors ${
                  stat.isHot
                    ? "bg-[#EEFAF5]/50 hover:bg-[#EEFAF5]"
                    : "bg-white hover:bg-[#FBFCFD]"
                }`}
              >
                <div>
                  {/* Big Tabular Number */}
                  <div
                    className={`stat-tnum text-[48px] sm:text-[56px] font-extrabold leading-none tracking-[-0.035em] mb-4 ${
                      stat.isHot ? "text-[#087A58]" : "text-[#0D1117]"
                    }`}
                  >
                    {stat.number}
                  </div>

                  {/* Caption from content.txt */}
                  <div className="text-[17px] sm:text-[18px] font-bold text-[#0D1117] leading-snug">
                    {stat.caption}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
