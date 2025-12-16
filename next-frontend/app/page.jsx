import Link from "next/link";
import ProductCard from "../components/ProductCard";
import PopularSlider from "../components/PopularSlider";
import InstagramSection from "../components/InstagramSection";
import HeroSlider from "../components/HeroSlider";
import CustomerReviewsSection from "../components/CustomerReviewsSection";
import { products } from "../data/products";

export default function HomePage() {
  const bestSellers = products;

  return (
    <div className="mx-auto max-w-6xl px-4 pb-10 pt-6">
      {/* Hero slider section */}
      <HeroSlider />

      {/* Category strip similar to scentsation collections */}
      <section className="mt-6 text-xs text-slate-100">
        <div className="mb-3 flex items-baseline justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-50 md:text-2xl">
              Shop by Category
            </h2>
            <p className="text-[11px] text-slate-400 md:text-xs">
              Quickly browse ceiling, wall, table and outdoor lighting.
            </p>
          </div>
        </div>
        <div className="grid gap-3 md:grid-cols-4">
          <Link
            href="/catalog?category=ceiling"
            className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 hover:border-emerald-400"
          >
            <span className="text-sm font-semibold md:text-base">
              Ceiling Lights
            </span>
            <span className="mt-1 text-[11px] text-slate-400 md:text-xs">
              Panels, chandeliers & spotlights
            </span>
          </Link>
          <Link
            href="/catalog?category=wall"
            className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 hover:border-emerald-400"
          >
            <span className="text-sm font-semibold md:text-base">
              Wall Lamps
            </span>
            <span className="mt-1 text-[11px] text-slate-400 md:text-xs">
              Bedroom & hallway ambience
            </span>
          </Link>
          <Link
            href="/catalog?category=table"
            className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 hover:border-emerald-400"
          >
            <span className="text-sm font-semibold md:text-base">
              Table Lamps
            </span>
            <span className="mt-1 text-[11px] text-slate-400 md:text-xs">
              Work desks & side tables
            </span>
          </Link>
          <Link
            href="/catalog?category=outdoor"
            className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 px-4 py-3 hover:border-emerald-400"
          >
            <span className="text-sm font-semibold md:text-base">Outdoor</span>
            <span className="mt-1 text-[11px] text-slate-400 md:text-xs">
              Garden & facade lighting
            </span>
          </Link>
        </div>
      </section>

      {/* Best sellers grid */}
      <section id="bestsellers" className="mt-8">
        <div className="mb-4 flex items-baseline justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-slate-50 md:text-3xl">
              Best Sellers
            </h2>
            <p className="text-sm text-slate-400">
              Customer favourite lights that sell out fast.
            </p>
          </div>
          <Link
            href="/catalog"
            className="text-xs font-semibold text-emerald-300 hover:text-emerald-200"
          >
            View all
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {bestSellers.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* Popular slider */}
      <PopularSlider />

      {/* About + Contact section */}
      <section className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
            About Ecolight
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-slate-50 md:text-3xl">
            Crafted lighting for modern Pakistani homes and spaces.
          </h2>
          <p className="mt-3 text-sm text-slate-300">
            Ecolight focuses on clean, minimal designs with warm LED light that
            feels premium but stays energy efficient. From feature ceilings to
            cozy bedside lamps, each piece is made to blend into your interior
            and still stand out.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li>• Carefully curated designs for lounges, bedrooms and cafes.</li>
            <li>• Local support and easy replacement policies.</li>
            <li>• 2-year warranty on all Ecolight fixtures.</li>
          </ul>
        </div>
        <div className="grid gap-4 md:grid-rows-[auto,1fr]">
          <div className="relative h-32 overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/60">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80"
              alt="Showroom"
              className="h-full w-full object-cover opacity-80"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-slate-950 via-transparent to-emerald-500/40" />
          </div>
          <div className="flex flex-col justify-center rounded-3xl border border-slate-800 bg-slate-900/80 p-5 text-sm text-slate-200">
            <h3 className="text-base font-semibold text-slate-50">
              Need help with your lighting?
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              Share your room photos and measurements and our team will suggest
              the right Ecolight fixtures for you.
            </p>
            <button className="mt-4 w-full rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 shadow-md shadow-emerald-500/30 hover:bg-emerald-400">
              Talk to a lighting expert
            </button>
          </div>
        </div>
      </section>

      {/* Instagram feed section */}
      <InstagramSection />

      {/* Customer Reviews Section */}
      <CustomerReviewsSection />

      {/* Why Ecolight section */}
      <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/80 px-5 py-6">
        <div className="mb-3">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
            Why Ecolight
          </p>
          <h2 className="mt-1 text-lg font-semibold text-slate-50 md:text-xl">
            Designed for modern interiors, built for everyday use.
          </h2>
        </div>
        <div className="grid gap-4 text-xs text-slate-300 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Perfect ambience
            </p>
            <p className="mt-1">
              Carefully tuned colour temperatures so bedrooms feel cozy and work
              areas stay sharp without harsh light.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Easy installation
            </p>
            <p className="mt-1">
              Most products include simple mounting kits and clear guidance so
              your electrician can install quickly.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Local support
            </p>
            <p className="mt-1">
              Warranty-backed products with responsive local support for
              replacements and queries.
            </p>
          </div>
        </div>
      </section>

      {/* Simple FAQ section */}
      <section className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/80 px-5 py-6 text-xs text-slate-300">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
          FAQ
        </p>
        <h2 className="mt-1 text-lg font-semibold text-slate-50 md:text-xl">
          Questions about orders and delivery
        </h2>
        <div className="mt-3 space-y-3">
          <div>
            <p className="font-semibold text-slate-100">
              How do I confirm my order?
            </p>
            <p className="mt-1 text-slate-400">
              Place an order on the website and our team will call or message
              you to confirm before dispatch.
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-100">
              Do you offer cash on delivery?
            </p>
            <p className="mt-1 text-slate-400">
              Yes, COD is available in most major cities in Pakistan. Our team
              will confirm availability for your area.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}


