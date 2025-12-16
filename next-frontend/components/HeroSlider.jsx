"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    id: 1,
    badge: "New • Ecolight Signature",
    title: "Light up your space with calm, modern lighting.",
    description:
      "Discover premium ceiling lights, wall lamps and floor lamps crafted to transform homes, cafes and studios with warm ambience.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80",
    cta: "Shop Now",
    ctaLink: "/catalog"
  },
  {
    id: 2,
    badge: "Best Seller",
    title: "Premium LED lighting for every room.",
    description:
      "Energy-efficient designs that blend seamlessly into modern interiors while providing perfect ambient lighting.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=1200&q=80",
    cta: "Explore Collection",
    ctaLink: "/catalog"
  },
  {
    id: 3,
    badge: "Featured",
    title: "Transform your home with elegant lighting.",
    description:
      "From minimalist ceiling panels to cozy bedside lamps, find the perfect lighting solution for your space.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80",
    cta: "View Products",
    ctaLink: "/catalog"
  }
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
      {/* Slides */}
      <div className="relative min-h-[500px] pb-10 md:h-[450px] md:pb-12">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex h-full flex-col gap-5 px-4 py-5 md:grid md:grid-cols-2 md:gap-8 md:px-10 md:py-10">
              {/* Image - Mobile pe pehle */}
              <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-slate-900/60 md:order-2 md:h-full md:rounded-3xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-full w-full object-cover opacity-80"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950 via-transparent to-emerald-500/30" />
              </div>
              {/* Content - Mobile pe neeche */}
              <div className="flex flex-col justify-center gap-4 overflow-visible md:order-1 md:gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
                  {slide.badge}
                </p>
                <h1 className="text-2xl font-semibold tracking-tight text-slate-50 md:text-4xl">
                  {slide.title}
                </h1>
                <p className="text-sm text-slate-300 leading-relaxed md:line-clamp-3">{slide.description}</p>
                <div className="flex flex-wrap items-center gap-2 md:gap-3">
                  <Link
                    href={slide.ctaLink}
                    className="rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-400"
                  >
                    {slide.cta}
                  </Link>
                  <Link
                    href="#bestsellers"
                    className="rounded-full border border-slate-600 px-4 py-2.5 text-sm text-slate-200 hover:border-emerald-400"
                  >
                    View Best Sellers
                  </Link>
                </div>
                <div className="mt-3 flex flex-wrap gap-3 text-xs text-slate-400 md:gap-4">
                  <span>✓ Free shipping over Rs 5,000</span>
                  <span>✓ 2-year Ecolight warranty</span>
                  <span>✓ Energy efficient LED</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 md:bottom-4">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? "w-8 bg-emerald-500"
                : "w-2 bg-slate-600 hover:bg-slate-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}

