"use client";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const accordionData = [
  { title: "First Item", content: "This is the content of the first item." },
  { title: "Second Item", content: "This is the content of the second item." },
  { title: "Third Item", content: "This is the content of the third item." },
];

export default function FaqDropdown({productFaq}) {
  return (
    <Accordion type="single" collapsible className="w-full cursor-pointer">
      {productFaq.map((item, idx) => (
        <AccordionItem key={idx} value={`item-${idx}`} className="border-b mb-4. bg-transparent">
          <AccordionTrigger className="text-lg font-medium bg-gray-100. px-4. py-2 hover:bg-gray-200. transition">
            {item.column1}
          </AccordionTrigger>
          <AccordionContent className="px-4 py-2 animate__animated animate__fadeIn">
            {item.column2}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
