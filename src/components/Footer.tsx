import React from "react";

export function Footer() {
  return (
    <footer className="bg-[#F7F8FA] border-t border-[#E7EAEF] py-16 text-[#5B6472] print:hidden">
      <div className="max-w-[880px] mx-auto px-5 sm:px-10">
        <div className="flex flex-col items-start space-y-6">
          <p className="text-[14px] sm:text-[15px] leading-[1.72] text-[#363C47]">
            Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country&apos;s consumer rules.
          </p>

          <div className="pt-6 border-t border-[#E7EAEF] w-full flex items-center justify-between">
            <span className="font-extrabold text-[15px] text-[#0D1117]">
              CLAIM READY
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
