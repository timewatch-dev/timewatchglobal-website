"use client";

import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import { useProductCatStore } from "../store/useProductCatStore";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye, ChevronRightCircleIcon, Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import seoFriendlySlug from "@/lib/seoFriendlySlug";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProductCatSlider({ categorySlug }) {
  const {
    getProductsByCategorySlug,
    productsByCategory,
    loading,
    error,
  } = useProductCatStore();

  useEffect(() => {
    if (categorySlug) getProductsByCategorySlug(categorySlug);
  }, [categorySlug]);

  if (loading) {
    return (
      <div className="flex justify-center py-20">
        <Loader2 className="h-10 w-10 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-red-600 py-10">{error}</p>;
  }

  if (!productsByCategory?.length) {
    return (
      <p className="text-center py-10 text-muted-foreground">
        No products found.
      </p>
    );
  }

  return (
    <div className="relative product-cat-card">
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4500 }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="py-10"
      >
        {productsByCategory.map((item) => {
          const p = item.product;
          if (!p) return null;

          const categorySlug = p.categorySlug;
          const subCategorySlug = p.subCategorySlug;

          return (
            <SwiperSlide key={p.productSlug}>
              <Card className="group relative w-full overflow-hidden rounded-sm border-0 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 py-0">
                
                {/* IMAGE */}
                <div className="relative h-56 bg-gray-100 overflow-hidden">
                  {/* {
                    console.log(`https://timewatchindia.com${p.productImage} `)
                  } */}
                  <Image
                    src={`https://timewatchindia.com${p.productImage}`}
                    alt={p.productName}
                    fill
                    sizes="400"
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* EYE BUTTON */}
                  <div className="absolute right-3 top-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="h-10 w-10 rounded-full bg-primary"
                      asChild
                    >
                      <Link
                        href={`/products/${seoFriendlySlug(
                          categorySlug
                        )}/${seoFriendlySlug(
                          subCategorySlug
                        )}/${seoFriendlySlug(p.productName)}`}
                      >
                        <Eye className="h-5 w-5 text-white" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* CONTENT */}
                <CardContent className="p-4">
                  <h3 className="line-clamp-1 text-lg font-semibold">
                    {p.productName}
                  </h3>

                  <p className="line-clamp-2 text-sm text-muted-foreground mt-1">
                    {p.description}
                  </p>

                  <Button className="w-full mt-4 gap-2" size="sm" asChild>
                    <Link
                      href={`/products/${seoFriendlySlug(
                        categorySlug
                      )}/${seoFriendlySlug(
                        subCategorySlug
                      )}/${seoFriendlySlug(p.productName)}`}
                    >
                      Read More
                      <ChevronRightCircleIcon className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
