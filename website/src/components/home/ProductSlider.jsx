"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Mousewheel, A11y } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import ProductCard from "./ProductCard";

import "swiper/css";
import "swiper/css/a11y";

/**
 * Reusable premium product/solution showcase slider.
 * products: [{ id, title, image, slug, category }]
 */
export default function ProductSlider({
  products = [],
  eyebrow,
  title,
  subtitle,
  autoplayDelay = 3500,
  className = "",
}) {
  const swiperRef = useRef(null);

  if (!products?.length) return null;

  return (
    <section className={`bg-white py-16 lg:py-20 ${className}`}>
      <div className="container mx-auto px-4">
        {(eyebrow || title || subtitle) && (
          <div className="mb-10 text-center lg:mb-12">
            {eyebrow && (
              <div className="mb-2 flex items-center justify-center space-x-4">
                <span className="h-0.5 w-10 bg-primary" />
                <span className="font-semibold text-primary">{eyebrow}</span>
                <span className="h-0.5 w-10 bg-primary" />
              </div>
            )}
            {title && (
              <h2 className="mb-2 text-3xl font-bold text-secondary md:text-4xl">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mx-auto max-w-2xl text-gray-500">{subtitle}</p>
            )}
          </div>
        )}
      </div>

      <div className="relative">
        <div className="container mx-auto px-4">
          <Swiper
            modules={[Autoplay, Keyboard, Mousewheel, A11y]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            keyboard={{ enabled: true }}
            mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
            grabCursor
            loop={products.length > 3}
            autoplay={
              autoplayDelay
                ? {
                    delay: autoplayDelay,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
                : false
            }
            speed={800}
            slidesPerView={1.15}
            spaceBetween={16}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3.15, spaceBetween: 28 },
            }}
            a11y={{
              prevSlideMessage: "Previous product",
              nextSlideMessage: "Next product",
            }}
            className="py-4"
          >
            {products.map((product, index) => (
              <SwiperSlide key={product.id ?? index} className="h-auto!">
                <ProductCard product={product} priority={index < 3} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Navigation Arrows */}
        <button
          type="button"
          aria-label="Previous product"
          onClick={() => swiperRef.current?.slidePrev()}
          className="absolute left-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-secondary shadow-lg ring-1 ring-black/5 transition-all hover:bg-primary hover:text-white md:flex lg:left-6"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          type="button"
          aria-label="Next product"
          onClick={() => swiperRef.current?.slideNext()}
          className="absolute right-2 top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-white text-secondary shadow-lg ring-1 ring-black/5 transition-all hover:bg-primary hover:text-white md:flex lg:right-6"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
