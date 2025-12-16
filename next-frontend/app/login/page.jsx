"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useToast } from "../../components/ToastContext";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { showToast } = useToast();
  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      showToast({
        title: "Missing details",
        message: "Please enter both email and password."
      });
      return;
    }
    showToast({
      title: "Signed in",
      message: "You are now logged in (demo only)."
    });
    router.push("/");
  };

  return (
    <div className="mx-auto max-w-sm px-4 pb-10 pt-10 text-sm text-slate-200">
      <h1 className="text-xl font-semibold text-slate-50">Log in</h1>
      <p className="mt-1 text-xs text-slate-400">
        Access your Ecolight account and orders.
      </p>

      <form onSubmit={onSubmit} className="mt-4 space-y-3 text-xs">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-100 outline-none placeholder:text-slate-500"
        />
        <button
          type="submit"
          className="mt-1 w-full rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold text-slate-950 hover:bg-emerald-400"
        >
          Log in
        </button>
      </form>
    </div>
  );
}


