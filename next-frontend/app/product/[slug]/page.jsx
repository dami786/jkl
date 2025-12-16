 "use client";

import ProductCard from "../../../components/ProductCard";
import ProductReviews from "../../../components/ProductReviews";
import { getProductBySlug } from "../../../data/products";
import { useCart } from "../../../components/CartContext";
import { useToast } from "../../../components/ToastContext";
import { useRouter } from "next/navigation";

export default function ProductPage({ params }) {
  const product = getProductBySlug(params.slug);
  const { addToCart } = useCart();
  const { showToast } = useToast();
  const router = useRouter();

  if (!product) {
    return (
      <div className="mx-auto max-w-3xl px-4 pb-10 pt-8">
        <p className="text-sm text-slate-300">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 pb-10 pt-8">
      <div className="grid gap-8 md:grid-cols-2">
        {/* Main detail card can reuse ProductCard layout partially */}
        <div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-4">
          <ProductCard product={product} />
        </div>
        <div className="flex flex-col gap-3 text-sm text-slate-200">
          <h1 className="text-2xl font-semibold text-slate-50">
            {product.name}
          </h1>
          <p className="text-xs uppercase tracking-[0.18em] text-emerald-300/80">
            {product.category}
          </p>
          <p className="mt-2 text-sm text-slate-300">{product.description}</p>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-xl font-semibold text-emerald-300">
              Rs {product.price.toLocaleString()}
            </span>
            {product.compareAt && (
              <span className="text-sm text-slate-500 line-through">
                Rs {product.compareAt.toLocaleString()}
              </span>
            )}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            <button
              type="button"
              className="rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-400"
              onClick={() => {
                router.push(`/checkout?product=${product.slug}`);
              }}
            >
              Buy Now
            </button>
            <button
              type="button"
              className="rounded-full border border-slate-600 px-5 py-2 text-sm font-semibold text-slate-100 hover:border-emerald-400"
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
      </div>

      {/* Reviews Section */}
      <ProductReviews productSlug={product.slug} />
    </div>
  );
}


