"use client";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import { Button } from "../ui/button";
import Link from "next/link";

const EnternceProductSection = ({ products }) => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        // Small delay ensures layout and images are ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        },50);
      }
    }
  }, []);
  return (
    <>
      {products.map((product, index) => (
        <div
          id={`${product.id}`}
          key={index}
          className={`lg:grid lg:grid-cols-2 gap-12 items-center ${
            index % 2 === 1 ? "lg:flex-row-reverse" : ""
          }`}
        >
          <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
            <div className="relative z-10 bg-gray-100 rounded-3xl p-8">
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-[#6d6f72]/20 rounded-2xl flex items-center justify-center">
                <div className="relative w-[300px] h-[250px] md:w-[600px] md:h-[450px]">
                  <Image
                    src={product.image}
                    alt={product.title}
                    title={product.title}
                    fill
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
            <h3 className="text-3xl lg:text-4xl font-bold text-[#6d6f72] mb-4 leading-tight">
              {product.title}
            </h3>

            <p className="text-md text-gray-700 mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xl font-bold text-secondary mb-3">
                Key Features
              </h4>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-gray-600 mb-2">
                Available Models:
              </h4>
              <p className="text-primary font-semibold">
                {product.models.join(", ")}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              {product.catalogueUrl !== "#" && (
                <a
                  className="bg-primary hover:bg-[#b82c30] text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center group"
                  href={product.catalogueUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Catalogue
                </a>
              )}
              <Button asChild variant={"secondary"} className={"!py-7"}>
                <Link
                  className="flex items-center"
                  href={product.link}
                  target="_blank"
                >
                  View All Products
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild className={"!py-7"}>
                <Link className="flex items-center" href={"#contact"}>
                  Enquiry Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default EnternceProductSection;
