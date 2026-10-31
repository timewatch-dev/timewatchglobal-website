import { solutions } from "@/data/menuItems";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import seoFriendlySlug from "@/lib/seoFriendlySlug";

export const metadata = {
  title: "Security & Workforce Solutions | TimeWatch",
  description: "TimeWatch solutions for attendance and payroll, access control, entrance automation, visitor management, security screening and parking.",
  alternates: { canonical: "/solutions" },
};

const page = () => {
  const sols = solutions.flatMap((cat) =>
    cat?.subCategories.map((subCat) => {
      return {
        category: cat.category,
        categoryUrl: cat.categoryUrl,
        subCategory: subCat.subCategory,
        subCategoryUrl: subCat.subCategoryUrl,
        subCategoryImage: subCat.subCategoryImage,
      };
    })
  );

  return (
    <div>
      {/* Intro band */}
      <header className="bg-gray-950 py-14 text-white md:py-20">
        <div className="container max-w-7xl">
          <div className="mb-4 flex items-center space-x-2">
            <span className="h-0.5 w-5 bg-[#d63438]"></span>
            <span className="font-semibold text-[#ff6b6f]">Discover Our</span>
          </div>
          <h1 className="mb-5 max-w-3xl text-3xl font-bold md:text-5xl">Best Solutions</h1>
        </div>
      </header>

      {/* Solution cards */}
      <div className="bg-gray-100 py-12 md:py-16">
        <div className="container grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sols.map((sol, index) => {
            const hasImage = sol?.subCategoryImage !== undefined;
            const alt = hasImage ? sol?.subCategory : sol?.subCategoryImage || "image title";
            return (
              <div
                key={index}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 overflow-hidden bg-gray-100">
                  <Image
                    src={hasImage ? sol.subCategoryImage : "/images/placeholder.jpeg"}
                    alt={alt}
                    fill
                    sizes="400"
                    className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                      hasImage ? "object-cover" : "object-contain"
                    }`}
                  />
                </div>
                <div className="flex flex-1 flex-col gap-4 p-5">
                  <h3 className="text-lg font-semibold leading-snug text-gray-900">
                    {sol?.subCategory}
                  </h3>
                  <Link
                    href={`/solutions/${seoFriendlySlug(sol.categoryUrl)}/${seoFriendlySlug(
                      sol.subCategoryUrl
                    )}`}
                    className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-[#d63438] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#b82d31]"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default page;
