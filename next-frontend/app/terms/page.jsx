export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-10 pt-8 text-sm text-slate-200">
      <h1 className="text-xl font-semibold text-slate-50">Terms & Conditions</h1>
      <p className="mt-2 text-xs text-slate-400">
        Simple overview of how Ecolight orders, payments and deliveries work.
      </p>

      <div className="mt-5 space-y-4 text-xs leading-relaxed text-slate-300">
        <section>
          <h2 className="text-sm font-semibold text-slate-100">
            1. Orders & Confirmation
          </h2>
          <p className="mt-1">
            All orders placed through the Ecolight website are treated as
            &quot;order requests&quot;. Our team will contact you on your
            provided number or email to confirm availability, pricing and
            delivery schedule before dispatch.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-slate-100">
            2. Pricing & Payments
          </h2>
          <p className="mt-1">
            Prices shown on the site are in PKR and inclusive of applicable
            taxes unless otherwise stated. Final payable amount including any
            delivery charges will be shared at the time of confirmation.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-slate-100">
            3. Returns & Exchanges
          </h2>
          <p className="mt-1">
            Products can be returned or exchanged within a limited time in case
            of manufacturing defects or wrong item delivered, subject to
            inspection. Custom or installed items may not be eligible for
            return.
          </p>
        </section>
      </div>
    </div>
  );
}


