import { solutions } from "@/data/menuItems";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, ChevronRightCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import seoFriendlySlug from "@/lib/seoFriendlySlug";

const page = () => {
  const sols = solutions.flatMap((cat) =>
    cat?.subCategories.map((subCat) => {
      return {
        category: cat.category,
        categoryUrl: cat.categoryUrl,
        subCategory: subCat.subCategory,
        subCategoryUrl: subCat.subCategoryUrl,
        subCategoryImage: subCat.subCategoryImage
      };
    })
  );
  // console.log(sol)

  return (
    <>
      <div className="text-center mb-12 mt-12">
        <div className="flex items-center justify-center space-x-2 mb-2">
          <span className="h-0.5 w-5 bg-primary"></span>
          <span className="text-primary font-semibold">Discover Our</span>
          <span className="h-0.5 w-5 bg-primary"></span>
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold text-secondary mb-2">
          Best Solutions
        </h1>
        {/* <p className="text-gray-500 max-w-2xl mx-auto">
          Dcidunt eget semper nec quam. Sed hendrerit. acfelis Nunc egestas
          augue atpellentesque laoreet
        </p> */}
      </div>

      <div className="container grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-10 lg:mb-20">
        {sols.map((sol, index) => {
          return (
            <Card
              className="group relative w-full max-w-sm overflow-hidden rounded-sm border-0 shadow-sm. transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col gap-4 pt-0 mb-4"
              key={index}
            >
              {/* Product Image */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                {/* {console.log("Image URL:",  image)} */}
                {sol?.subCategoryImage !== undefined ? (
                <Image
                  src={sol?.subCategoryImage}
                  alt={sol?.subCategory}
                  fill
                  sizes="400"
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <Image
                  src={`/images/placeholder.jpeg`}
                  alt={sol?.subCategoryImage || 'image title'}
                  fill
                  sizes="400"
                  className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105 py-0"
                />
              )}
              </div>

              <CardContent className="pt-0">
                {/* Product Info */}
                <div className="mb-3">
                  <h3 className="line-clamp-1 text-lg font-semibold tracking-tight">
                    {sol?.subCategory}
                  </h3>
                </div>

                {/* Add to Cart Button */}
                <Button className="w-full gap-2" size="sm" asChild>
                  <Link
                    href={`/solutions/${seoFriendlySlug(
                      sol.categoryUrl
                    )}/${seoFriendlySlug(sol.subCategoryUrl)}`}
                  >
                    Read More
                    <ChevronRightCircleIcon />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default page;
