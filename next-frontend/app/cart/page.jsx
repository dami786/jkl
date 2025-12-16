 "use client";

import { useRouter } from "next/navigation";
import { useCart } from "../../components/CartContext";

export default function CartPage() {
  const { items, removeFromCart, clearCart } = useCart();
  const router = useRouter();

  const isEmpty = items.length === 0;

  const totalAmount = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="mx-auto max-w-3xl px-4 pb-10 pt-8">
      <h1 className="text-xl font-semibold text-slate-50">Your Cart</h1>

      {isEmpty ? (
        <div className="mt-4 rounded-2xl border border-dashed border-slate-700 bg-slate-900/60 px-5 py-6 text-sm text-slate-300">
          <p>Your cart is empty.</p>
          <p className="mt-1 text-xs text-slate-500">
            Browse lights on the home or catalog page and add them to your cart.
          </p>
        </div>
      ) : (
        <div className="mt-4 space-y-3">
          <div className="rounded-2xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-xs text-slate-300">
            <div className="divide-y divide-slate-800">
              {items.map((item) => (
                <div
                  key={item.slug}
                  className="flex items-center justify-between gap-3 py-2"
                >
                  <div className="flex items-center gap-3">
                    {/* Product image */}
                    {item.image && (
                      <div className="relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-lg border border-slate-700 bg-slate-800">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <div>
                      <p className="text-sm text-slate-100">{item.name}</p>
                      <p className="text-[11px] text-slate-500">
                        Qty {item.qty} • Rs {item.price.toLocaleString()}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="text-[11px] text-emerald-300 hover:text-emerald-200"
                    onClick={() => removeFromCart(item.slug)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            <div className="mt-3 border-t border-slate-800 pt-3">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Total</span>
                <span className="text-base font-semibold text-emerald-300">
                  Rs {totalAmount.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="w-full rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-emerald-400"
            onClick={() => router.push("/checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
}


