"use client"
import React from "react";

const AccordionItem = ({ item, index, isFirst, parentId = "bio1seFAQ" }) => {
  const [isOpen, setIsOpen] = React.useState(isFirst);
  const id = `collapse-${index}`;
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden my-2">
      <h2 className="mb-0" id={`heading-${index}`}>
        <button
          className="flex justify-between items-center w-full p-4 text-left font-semibold text-lg text-gray-800 bg-white hover:bg-gray-50 transition duration-150 cursor-pointer"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {item.question}
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${
              isOpen ? "rotate-180 text-primary" : "rotate-0 text-primary"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        className={`transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 p-4 pt-0" : "max-h-0 opacity-0"
        } overflow-hidden text-gray-600`}
      >
        <p>{item.answer}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
