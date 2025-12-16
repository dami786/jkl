"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null);

  const showToast = ({ title, message, type = "success", duration = 1000 }) => {
    const id = Date.now();
    setToast({ id, title, message, type });
    if (duration) {
      setTimeout(() => {
        setToast((current) => (current && current.id === id ? null : current));
      }, duration);
    }
  };

  const hideToast = () => setToast(null);

  // Clear on route change in future (if needed) – placeholder
  useEffect(() => {
    return () => setToast(null);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast, hideToast }}>
      {children}
      {toast && (
        <div className="pointer-events-none fixed right-4 top-20 z-50 flex max-w-xs animate-fade-in-down flex-col rounded-2xl border border-emerald-500/60 bg-slate-900/95 px-4 py-3 text-xs text-slate-100 shadow-xl shadow-emerald-500/30">
          <div className="mb-1 flex items-center justify-between gap-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-300">
              {toast.title}
            </p>
            <button
              type="button"
              className="pointer-events-auto text-slate-400 hover:text-slate-100"
              onClick={hideToast}
            >
              ×
            </button>
          </div>
          <p className="text-[11px] text-slate-200">{toast.message}</p>
        </div>
      )}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return ctx;
}


