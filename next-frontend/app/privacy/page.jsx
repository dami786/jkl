export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 pb-10 pt-8 text-sm text-slate-200">
      <h1 className="text-xl font-semibold text-slate-50">Privacy Policy</h1>
      <p className="mt-2 text-xs text-slate-400">
        How Ecolight handles your contact details and browsing information.
      </p>

      <div className="mt-5 space-y-4 text-xs leading-relaxed text-slate-300">
        <section>
          <h2 className="text-sm font-semibold text-slate-100">
            1. Information We Collect
          </h2>
          <p className="mt-1">
            When you place an order or submit a contact form we collect basic
            details such as your name, phone number, email and address to
            respond and fulfill your request.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-slate-100">
            2. How We Use Your Data
          </h2>
          <p className="mt-1">
            Your information is only used to communicate with you about your
            orders, queries and to improve our products and services. We do not
            sell your personal data to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-sm font-semibold text-slate-100">
            3. Contact
          </h2>
          <p className="mt-1">
            For any privacy related questions you can reach out using the
            contact form on the website.
          </p>
        </section>
      </div>
    </div>
  );
}


