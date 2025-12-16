import Link from "next/link";

const instaImages = [
  "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=800&q=80",
  "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
];

export default function InstagramSection() {
  return (
    <section className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/80 px-5 py-6">
      <div className="mb-3 flex items-baseline justify-between gap-2">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
            Instagram
          </p>
          <h2 className="mt-1 text-lg font-semibold text-slate-50 md:text-xl">
            See Ecolight in real spaces
          </h2>
        </div>
        <Link
          href="#"
          className="text-[11px] font-semibold text-emerald-300 hover:text-emerald-200"
        >
          @ecolight
        </Link>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {instaImages.map((src, idx) => (
          <div
            key={idx}
            className="relative aspect-square overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt={`Ecolight Instagram ${idx + 1}`}
              className="h-full w-full object-cover transition duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
}


