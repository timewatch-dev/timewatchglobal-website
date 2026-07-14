"use client";
import React, { useState } from "react";
import {
  ChevronDown,
  ChevronRight,
} from "lucide-react";

const SolutionsFaq = ({faqs}) => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };


  return (
    <section className="p mb-20 mt-10">
      <div className="">
        <div className="mb-2">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
           FAQ
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-sm border border-gray-200"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-gray-900">
                  {faq.question}
                </span>
                {openFaq === index ? (
                  <ChevronDown
                    className="w-5 h-5"
                    style={{ color: "#d63438" }}
                  />
                ) : (
                  <ChevronRight
                    className="w-5 h-5"
                    style={{ color: "#6d6f72" }}
                  />
                )}
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsFaq;
