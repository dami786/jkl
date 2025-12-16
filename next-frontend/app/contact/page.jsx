"use client";

import { useState } from "react";
import { useToast } from "../../components/ToastContext";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const { showToast } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      showToast({
        title: "Missing details",
        message: "Please fill in your name and phone number."
      });
      return;
    }

    setSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      showToast({
        title: "Message sent",
        message: "We'll contact you soon at " + formData.phone
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      
      setSubmitting(false);
    }, 1000);
  };

  return (
    <div className="mx-auto max-w-2xl px-4 pb-10 pt-8">
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300/80">
          Get in Touch
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-slate-50 md:text-3xl">
          Contact Support
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          Have a question or need help? Fill out the form below and our team will get back to you.
        </p>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 md:p-8">
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-xs font-semibold text-slate-300 mb-2">
              Your Name <span className="text-emerald-400">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-colors"
              placeholder="Enter your full name"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 mb-2">
              Phone Number <span className="text-emerald-400">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-colors"
              placeholder="03XX-XXXXXXX"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-colors"
              placeholder="your.email@example.com"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500/50 transition-colors resize-none"
              placeholder="Tell us how we can help you..."
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 hover:bg-emerald-400 disabled:cursor-not-allowed disabled:opacity-70 transition-colors"
            >
              {submitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-8 pt-6 border-t border-slate-800">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500 mb-3">
            Other Ways to Reach Us
          </p>
          <div className="space-y-2 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">📞</span>
              <span>Call us: <a href="tel:+923001234567" className="text-emerald-300 hover:text-emerald-200">+92 300 1234567</a></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">✉️</span>
              <span>Email: <a href="mailto:support@ecolight.com" className="text-emerald-300 hover:text-emerald-200">support@ecolight.com</a></span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400">🕒</span>
              <span>Hours: Monday - Saturday, 9 AM - 6 PM</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

