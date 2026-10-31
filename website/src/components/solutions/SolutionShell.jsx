import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ContactPopupTrigger from "@/components/forms/ContactPopupTrigger";

// Page frame for every /solutions/** page: hero banner (with the enquiry popup button), a light grey
// page with the content cards, and an optional "Related Pages" band at the bottom.
//
// related: [{ href, tag, label }] - internal links shown in the bottom band (the old sidebar's
// "All Services" list is gone, so every page should link to a few of its neighbours here).
export default function SolutionShell({
  heroSrc,
  heroAlt,
  title,
  intro,
  ctaLabel = "Request a Quote",
  related,
  children,
}) {
  return (
    <div>
      {/* Hero */}
      <header
        id="hero"
        className="relative flex min-h-80 overflow-hidden bg-gray-950 md:min-h-[460px]"
      >
        <Image
          src={heroSrc}
          alt={heroAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-r from-gray-950/90 via-gray-950/70 to-gray-950/20" />
        <div className="container relative z-10 flex w-full max-w-7xl flex-col justify-center py-14 text-white md:py-20">
          <h1 className="mb-5 max-w-3xl text-3xl font-bold md:text-5xl">{title}</h1>
          {intro && (
            <p className="mb-8 hidden max-w-3xl text-base text-white/85 md:block md:text-xl">
              {intro}
            </p>
          )}
          <div className="flex flex-wrap gap-3">
            <ContactPopupTrigger
              title={ctaLabel}
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-[#d63438] transition-colors hover:bg-gray-100"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </ContactPopupTrigger>
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="bg-gray-100 py-12 md:py-16">
        <div className="container max-w-7xl space-y-8">{children}</div>
      </div>

      {/* Related pages */}
      {related?.length > 0 && (
        <section id="related-pages" className="bg-white py-16 md:py-20">
          <div className="container max-w-7xl">
            <h2 className="mb-8 border-l-4 border-[#d63438] pl-4 text-2xl font-bold leading-tight text-gray-900 md:text-[32px]">
              Related Pages
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-center justify-between gap-4 rounded-xl border border-gray-200 bg-gray-100 px-5 py-4 shadow-md transition-all hover:border-[#d63438]/50 hover:shadow-lg"
                >
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-[#b82d31]">
                      {item.tag}
                    </span>
                    <span className="mt-1 block font-semibold text-gray-900">{item.label}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-[#d63438] transition-transform group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
