"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getProductBySlug } from "../../data/products";
import { useCart } from "../../components/CartContext";
import { useToast } from "../../components/ToastContext";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("product");
  const product = slug ? getProductBySlug(slug) : null;
  const { items, clearCart } = useCart();

  const router = useRouter();
  const { showToast } = useToast();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Use cart items if no single product, otherwise use single product
  const checkoutItems = product ? [{ ...product, qty: 1 }] : items;
  const totalAmount = checkoutItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  // Redirect to cart if no items
  useEffect(() => {
    if (!product && items.length === 0) {
      router.push("/cart");
    }
  }, [product, items.length, router]);

  if (!product && items.length === 0) {
    return null;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !address.trim()) {
      showToast({
        title: "Missing details",
        message: "Please fill in name, phone and address to place your order."
      });
      return;
    }
    setSubmitting(true);

    // Clear cart and show success message
    clearCart();
    showToast({
      title: "Order placed",
      message: `Thanks ${name}, your order has been placed successfully!`
    });

    const orderId = "EC-" + Date.now().toString().slice(-6);
    const productSlugs = checkoutItems.map(item => item.slug).join(",");
    router.push(`/order-success?products=${productSlugs}&order=${orderId}&total=${totalAmount}`);
  };

  return (
    <div className="mx-auto max-w-xl px-4 pb-10 pt-8 text-sm text-slate-200">
      <h1 className="text-xl font-semibold text-slate-50">Checkout</h1>
      <p className="mt-1 text-xs text-slate-400">
        Enter your details below to place your order.
      </p>

      <div className="mt-4 rounded-2xl border border-slate-700 bg-slate-900/80 px-4 py-3 text-xs text-slate-100">
        <div className="mb-3 pb-3 border-b border-slate-800 space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
          {checkoutItems.map((item) => (
            <div key={item.slug} className="flex items-center gap-3">
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
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-slate-50 truncate">{item.name}</p>
                <p className="text-[11px] text-slate-400">
                  Qty {item.qty} • Rs {item.price.toLocaleString()} each
                </p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-emerald-300">
                  Rs {(item.price * item.qty).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between pt-2">
          <span className="text-slate-400">Total Amount</span>
          <span className="text-base font-semibold text-emerald-300">
            Rs {totalAmount.toLocaleString()}
          </span>
        </div>
      </div>

      <form onSubmit={onSubmit} className="mt-4 space-y-2 text-xs">
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500"
        />
        <input
          type="text"
          placeholder="Phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500"
        />
        <textarea
          rows={3}
          placeholder="Delivery address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500"
        />
        <textarea
          rows={2}
          placeholder="Notes (optional)"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500"
        />
        <button
          type="submit"
          disabled={submitting}
          className="mt-1 w-full rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {submitting ? "Placing order..." : "Place Order"}
        </button>
      </form>
    </div>
  );
}


