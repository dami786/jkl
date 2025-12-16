 "use client";

import Link from "next/link";
import { useCart } from "./CartContext";
import { useToast } from "./ToastContext";
import { useRouter } from "next/navigation";

const dummyImage =
  "https://images.pexels.com/photos/3736521/pexels-photo-3736521.jpeg?auto=compress&cs=tinysrgb&w=600";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const router = useRouter();

  return (
    <div className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/60 shadow-sm transition hover:border-emerald-400/70 hover:shadow-emerald-500/20">
      <div className="relative">
        <Link href={`/product/${product.slug}`} className="block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={product.image || dummyImage}
            alt={product.name}
            className="h-56 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          />
          {product.badge && (
            <span className="absolute left-3 top-3 rounded-full bg-emerald-500 px-2 py-0.5 text-xs font-semibold text-slate-950">
              {product.badge}
            </span>
          )}
        </Link>
        {/* Hover action bar */}
        <div className="pointer-events-none absolute inset-x-2 bottom-2 flex translate-y-4 items-center justify-between gap-2 rounded-full bg-slate-950/90 px-2 py-1 opacity-0 shadow-lg shadow-black/60 transition duration-200 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            type="button"
            className="pointer-events-auto rounded-full bg-emerald-500 px-3 py-1 text-[11px] font-semibold text-slate-950 hover:bg-emerald-400"
            onClick={() => {
              router.push(`/checkout?product=${product.slug}`);
            }}
          >
            Buy Now
          </button>
          <button
            type="button"
            className="pointer-events-auto rounded-full border border-slate-600 px-3 py-1 text-[11px] font-semibold text-slate-100 hover:border-emerald-400"
            onClick={() => {
              addToCart(product);
              showToast({
                title: "Added to cart",
                message: `"${product.name}" has been added to your cart.`
              });
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 px-4 py-3">
        <div>
          <p className="text-xs uppercase tracking-[0.18em] text-emerald-300/80">
            {product.category}
          </p>
          <Link href={`/product/${product.slug}`}>
            <h3 className="mt-1 text-sm font-semibold text-slate-50 line-clamp-1 hover:text-emerald-300">
              {product.name}
            </h3>
          </Link>
        </div>
        <p className="line-clamp-2 text-xs text-slate-400">
          {product.description}
        </p>
        <div className="mt-auto flex items-center justify-between pt-1">
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-emerald-300">
              Rs {product.price.toLocaleString()}
            </span>
            {product.compareAt && (
              <span className="text-xs text-slate-500 line-through">
                Rs {product.compareAt.toLocaleString()}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


