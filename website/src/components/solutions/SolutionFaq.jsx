"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SolutionCard } from "./SolutionBlocks";

// Same behaviour as the old SolutionsFaq (answer is only rendered while its question is open),
// with the card look of the redesigned FAQ sections.
export default function SolutionFaq({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <SolutionCard>
      <h2>FAQ</h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => {
          const open = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-xl border border-gray-200 shadow-md transition-shadow ${
                open ? "bg-white shadow-lg" : "bg-gray-100"
              }`}
            >
              <button
                type="button"
                aria-expanded={open}
                onClick={() => setOpenIndex(open ? null : index)}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-base font-semibold text-gray-900 md:text-lg">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[#d63438] transition-transform ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open && (
                <p className="px-6 pb-6 leading-relaxed text-gray-700">{faq.answer}</p>
              )}
            </div>
          );
        })}
      </div>
    </SolutionCard>
  );
}
