"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { products } from "../data/products";

export default function PopularSlider() {
  const [index, setIndex] = useState(0);

  const items = useMemo(
    () =>
      products.map((p, i) => ({
        ...p,
        rank: i + 1
      })),
    []
  );

  const current = items[index] || items[0];

  const next = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (!items.length) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(id);
  }, [items.length]);

  if (!current) return null;

  return (
    <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/80 px-5 py-6">
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
            Popular Right Now
          </p>
          <h2 className="mt-1 text-2xl font-semibold text-slate-50 md:text-3xl">
            Most loved Ecolight products
          </h2>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <button
            type="button"
            onClick={prev}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 bg-slate-900 hover:border-emerald-400"
          >
            ‹
          </button>
          <button
            type="button"
            onClick={next}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 bg-slate-900 hover:border-emerald-400"
          >
            ›
          </button>
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-[1.3fr,1fr] md:items-center">
        <div className="flex items-center gap-4">
          <div className="relative h-32 w-32 overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={current.image}
              alt={current.name}
              className="h-full w-full object-cover"
            />
            <span className="absolute left-2 top-2 rounded-full bg-slate-950/80 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
              #{current.rank} Popular
            </span>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-emerald-300/80">
              {current.category}
            </p>
            <Link href={`/product/${current.slug}`}>
              <h3 className="mt-1 text-sm font-semibold text-slate-50 hover:text-emerald-300">
                {current.name}
              </h3>
            </Link>
            <p className="mt-1 line-clamp-2 text-xs text-slate-400">
              {current.description}
            </p>
            <div className="mt-2 flex items-center gap-2 text-sm">
              <span className="font-semibold text-emerald-300">
                Rs {current.price.toLocaleString()}
              </span>
              {current.compareAt && (
                <span className="text-xs text-slate-500 line-through">
                  Rs {current.compareAt.toLocaleString()}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="space-y-2 text-xs text-slate-300">
          <p>
            Customers who light up their lounges and bedrooms love this product
            for its balance of design and warmth.
          </p>
          <ul className="space-y-1 text-[11px] text-slate-400">
            <li>• Perfect for modern, minimal interiors.</li>
            <li>• Easy installation with included mounting kit.</li>
            <li>• Energy efficient LED technology.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}


