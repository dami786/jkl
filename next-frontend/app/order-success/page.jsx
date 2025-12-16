"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getProductBySlug } from "../../data/products";

export default function OrderSuccessPage() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("product");
  const productsParam = searchParams.get("products");
  const totalAmount = searchParams.get("total");

  const product = slug ? getProductBySlug(slug) : null;
  const products = productsParam
    ? productsParam.split(",").map(s => getProductBySlug(s)).filter(Boolean)
    : product ? [product] : [];

  const orderId = searchParams.get("order") || "EC-" + Date.now().toString().slice(-6);

  return (
    <div className="mx-auto max-w-xl px-4 pb-10 pt-10">
      <div className="rounded-3xl border border-emerald-500/50 bg-slate-900/80 px-5 py-6 text-sm text-slate-100 shadow-lg shadow-emerald-500/30">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-300">
          Order Placed
        </p>
        <h1 className="mt-2 text-xl font-semibold text-slate-50">
          Thank you for your order!
        </h1>
        <p className="mt-1 text-xs text-slate-400">
          We&apos;ll contact you shortly to confirm details and delivery.
        </p>

        <div className="mt-4 rounded-2xl border border-slate-700 bg-slate-950/70 px-4 py-3 text-xs text-slate-200">
          <div className="flex items-center justify-between">
            <span className="text-slate-400">Order ID</span>
            <span className="font-semibold text-emerald-300">{orderId}</span>
          </div>
          {products.length > 0 && (
            <>
              <div className="mt-3 space-y-2 max-h-40 overflow-y-auto custom-scrollbar">
                {products.map((p) => (
                  <div key={p.slug} className="flex items-center gap-2">
                    {p.image && (
                      <div className="relative h-8 w-8 flex-shrink-0 overflow-hidden rounded border border-slate-700 bg-slate-800">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={p.image}
                          alt={p.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-100 truncate">{p.name}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-slate-800 flex items-center justify-between">
                <span className="text-slate-400">Total Amount</span>
                <span className="text-base font-semibold text-emerald-300">
                  Rs {totalAmount ? parseInt(totalAmount).toLocaleString() : (product ? product.price.toLocaleString() : "0")}
                </span>
              </div>
            </>
          )}
        </div>

        <div className="mt-4 flex flex-wrap gap-2 text-xs">
          <Link
            href="/catalog"
            className="rounded-full bg-emerald-500 px-4 py-2 font-semibold text-slate-950 hover:bg-emerald-400"
          >
            Continue Shopping
          </Link>
          <Link
            href="/cart"
            className="rounded-full border border-slate-600 px-4 py-2 font-semibold text-slate-100 hover:border-emerald-400"
          >
            View Cart
          </Link>
        </div>
      </div>
    </div>
  );
}


