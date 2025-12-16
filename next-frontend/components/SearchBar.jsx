"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { products } from "../data/products";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const filteredProducts = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products.slice(0, 20); // focus par pehle 20 products
    return products
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
      .slice(0, 20);
  }, [query]);

  const onSubmit = (e) => {
    e.preventDefault();
    const q = query.trim();
    setIsOpen(false);
    router.push(q ? `/catalog?q=${encodeURIComponent(q)}` : "/catalog");
  };

  return (
    <div className="relative w-full">
      <form
        onSubmit={onSubmit}
        className="flex items-center gap-1 rounded-full border border-slate-700/70 bg-slate-900 px-3 py-1.5 text-xs text-slate-300"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onBlur={() => setTimeout(() => setIsOpen(false), 150)} // click allow
          placeholder="Search lights…"
          className="flex-1 bg-transparent text-xs text-slate-100 outline-none placeholder:text-slate-500"
        />
        <button
          type="submit"
          className="ml-auto rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-semibold text-slate-950 hover:bg-emerald-400 flex-shrink-0"
        >
          Go
        </button>
      </form>

      {isOpen && filteredProducts.length > 0 && (
        <div className="absolute left-0 right-0 top-full z-50 mt-1 w-full rounded-2xl border border-slate-800 bg-slate-950/95 text-xs shadow-lg shadow-slate-900/60 md:right-0 md:w-64">
          <div className="border-b border-slate-800 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-slate-400">
            {query ? "Search results" : "All products"}
          </div>
          <ul className="max-h-72 overflow-y-auto py-1 custom-scrollbar">
            {filteredProducts.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/product/${p.slug}`}
                  className="flex items-center gap-3 px-3 py-2 hover:bg-slate-900/80"
                  onMouseDown={(e) => e.preventDefault()} // blur se pehle click
                  onClick={() => {
                    setQuery(p.name); // select par search box me naam dikhao
                    setIsOpen(false);
                  }}
                >
                  {/* Product image */}
                  {p.image && (
                    <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg border border-slate-700 bg-slate-800">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.image}
                        alt={p.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <span className="block text-sm text-slate-50 truncate">{p.name}</span>
                    <span className="text-[11px] text-slate-400">
                      {p.category} • Rs {p.price.toLocaleString()}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}