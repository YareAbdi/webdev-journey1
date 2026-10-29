import React from "react";
import { PillLabel } from "./PillLabel";

export function WhoThisIsFor() {
  return (
    <section id="who-this-is-for" className="py-20 sm:py-28 bg-[#F7F8FA] border-y border-[#E7EAEF]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-10">
        <div className="flex flex-col items-start">
          <PillLabel dot={true} className="mb-4">
            WHO THIS IS FOR
          </PillLabel>
          <h2 className="text-[32px] sm:text-[44px] lg:text-[47px] font-extrabold tracking-[-0.035em] leading-[1.06] text-[#0D1117] mb-5">
            WHO THIS IS FOR
          </h2>
          <p className="text-[18px] sm:text-[20px] text-[#363C47] font-normal leading-[1.72] max-w-[62ch]">
            Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty, and who wants the claim to be decided on facts, in writing.
          </p>
        </div>
      </div>
    </section>
  );
}
