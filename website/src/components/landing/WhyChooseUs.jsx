"use client";
import React, { useState } from "react";
import { CircleCheck, CircleChevronRight, Shield } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const WhyChooseUs = ({
  title = "Why Choose TimeWatch?",
  subtitle = "Redefining workplace efficiency through innovation and trust",
  features = [],
  buttonText = "Get Started",

  footerText = "Join 5,000+ Indian businesses already using our solutions",
}) => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <div className="bg-white p-4 md:p-8 lg:p-12 rounded-2xl shadow-2xl border border-gray-100">
      {/* Heading */}
      <div className="text-center mb-10">
        <h3 className="text-3xl font-bold mb-3 text-primary">{title}</h3>
        <p className="text-lg text-gray-500 max-w-2xl mx-auto">{subtitle}</p>
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index}>
            <div
              className={`md:p-6 rounded-xl transition-all duration-300 cursor-pointer md:flex items-center space-x-4 ${
                hoveredFeature === index
                  ? "bg-red-50 ring-2 ring-red-200"
                  : "bg-white"
              }`}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
            >
              {/* Same icon for all features */}
              <div
                className={`flex-shrink-0 w-14 h-14 rounded-xl bg-primary flex items-center justify-center transition-transform duration-300 shadow-md ${
                  hoveredFeature === index ? "scale-110" : "scale-100"
                }`}
              >
                <CircleCheck size={28} color="white" />
              </div>

              <div className="flex-grow">
                <h4 className="font-bold text-gray-800 mb-1 text-xl">
                  {feature.title}
                </h4>
                <p className="text-gray-500 text-base">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12 pt-8 border-t border-gray-200">
        <Button asChild>
          <Link href={"#contact"} className="flex items-center">{buttonText}
            <CircleChevronRight/>
          </Link>
          
        </Button>
        <p className="text-gray-500 mt-3 text-sm">{footerText}</p>
      </div>
    </div>
  );
};

export default WhyChooseUs;
