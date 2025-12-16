import ProductCard from "../../components/ProductCard";
import { products } from "../../data/products";

export default function CatalogPage({ searchParams }) {
  const q = (searchParams?.q || "").toLowerCase();
  const filtered = products.filter((p) => {
    if (!q) return true;
    return (
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q)
    );
  });

  return (
    <div className="mx-auto max-w-6xl px-4 pb-10 pt-6">
      <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold text-slate-50 md:text-3xl">
            All Lights
          </h1>
          <p className="text-sm text-slate-400">
            Browse the full Ecolight collection.
          </p>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className="mt-6 text-sm text-slate-300">
          No products matched your search.
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {filtered.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}


