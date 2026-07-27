"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

/**
 * Premium showcase card — image-led, bottom gradient, title bottom-left.
 * product: { id, title, image, slug, category }
 */
export default function ProductCard({ product, priority = false }) {
  const { title, image, slug, category } = product;

  return (
    <Link
      href={slug || "#"}
      className="group relative block h-[380px] w-full overflow-hidden rounded-[28px] bg-gray-200 shadow-md shadow-black/5 transition-all duration-300 ease-out will-change-transform hover:-translate-y-2 hover:scale-[1.03] hover:shadow-2xl hover:shadow-black/20 sm:h-[420px] lg:h-[460px]"
    >
      <Image
        src={image}
        alt={title}
        fill
        sizes="(max-width: 640px) 85vw, (max-width: 1024px) 45vw, 30vw"
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
      />

      {/* Bottom gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-colors duration-300 group-hover:from-black/95 group-hover:via-black/40" />

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-6 transition-transform duration-300 ease-out group-hover:-translate-y-1.5 md:p-7">
        <div className="min-w-0">
          {category && (
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/70">
              {category}
            </span>
          )}
          <h3 className="line-clamp-2 text-xl font-bold leading-tight text-white md:text-2xl">
            {title}
          </h3>
        </div>

        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur-sm transition-all duration-300 group-hover:bg-primary group-hover:ring-primary">
          <ArrowUpRight className="h-5 w-5 text-white transition-transform duration-300 group-hover:rotate-45" />
        </span>
      </div>
    </Link>
  );
}
