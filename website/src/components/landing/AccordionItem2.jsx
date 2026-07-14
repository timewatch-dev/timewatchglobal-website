"use client"
import React, { useState } from "react";

const AccordionItem2= ({ item, index, isFirst }) => {
  const [isOpen, setIsOpen] = useState(isFirst);
  
  return (
    <div className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors flex justify-between items-center"
      >
        <span className="font-semibold text-gray-800">{item.question}</span>
        <span className="text-2xl text-primary">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-600">{item.answer}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionItem2;
