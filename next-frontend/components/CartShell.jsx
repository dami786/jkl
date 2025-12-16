"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CartProvider, useCart } from "./CartContext";
import SearchBar from "./SearchBar";
import { ToastProvider } from "./ToastContext";
import ChatBot from "./ChatBot";

function ShellInner({ children }) {
  const { totalCount } = useCart();
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
  const isSignupPage = pathname === "/signup";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Available Offers Section */}
      <div className="w-full bg-gradient-to-r from-emerald-500/10 via-slate-900 to-emerald-500/10 border-b border-emerald-500/20">
        <div className="mx-auto max-w-6xl px-3 py-2 md:px-4">
          <div className="flex flex-wrap items-center justify-center gap-2 text-[10px] text-slate-300 md:justify-between md:gap-4 md:text-[11px]">
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-emerald-400 text-xs md:text-sm">✨</span>
              <span className="whitespace-nowrap">Free Shipping on orders over Rs 5,000</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-emerald-400 text-xs md:text-sm">🎁</span>
              <span className="whitespace-nowrap">2-Year Warranty on all products</span>
            </div>
            <div className="flex items-center gap-1.5 md:gap-2">
              <span className="text-emerald-400 text-xs md:text-sm">⚡</span>
              <span className="whitespace-nowrap">Energy Efficient LED Technology</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-3 py-2.5 md:gap-6 md:px-4 md:py-3">
          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/80 text-slate-100 hover:border-emerald-400 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          <Link href="/" className="flex items-baseline gap-1.5 md:gap-2 flex-shrink-0">
            <span className="rounded-full bg-emerald-400 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-950 md:px-2 md:text-xs">
              eco
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-100 md:text-sm">
              light
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 text-sm text-slate-200/90 md:flex">
            <Link href="/" className="transition-colors hover:text-emerald-300">
              Home
            </Link>
            <Link
              href="/catalog"
              className="transition-colors hover:text-emerald-300"
            >
              Shop All
            </Link>
            <Link
              href="/catalog?category=ceiling"
              className="transition-colors hover:text-emerald-300"
            >
              Ceiling Lights
            </Link>
            <Link
              href="/catalog?category=wall"
              className="transition-colors hover:text-emerald-300"
            >
              Wall Lamps
            </Link>
            <Link
              href="/catalog?category=table"
              className="transition-colors hover:text-emerald-300"
            >
              Table Lamps
            </Link>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            {/* Desktop Search */}
            <div className="hidden md:block">
              <SearchBar />
            </div>
            {/* Mobile Search Icon */}
            <button
              type="button"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-900/80 text-slate-100 hover:border-emerald-400 hover:text-emerald-300 md:hidden"
              aria-label="Search"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <div className="hidden h-8 w-px bg-slate-700 md:block"></div>
            <div className="hidden items-center gap-1.5 md:flex md:gap-2">
              <Link
                href="/login"
                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold transition-colors md:px-3 md:text-xs ${
                  isLoginPage || (!isLoginPage && !isSignupPage)
                    ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                    : "border border-slate-700 text-slate-100 hover:border-emerald-400"
                }`}
              >
                Log in
              </Link>
              <Link
                href="/signup"
                className={`rounded-full px-2.5 py-1 text-[10px] font-semibold transition-colors md:px-3 md:text-xs ${
                  isSignupPage
                    ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                    : "border border-slate-700 text-slate-100 hover:border-emerald-400"
                }`}
              >
                Sign up
              </Link>
            </div>
            <Link
              href="/cart"
              className="relative flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-900/80 text-slate-100 hover:border-emerald-400 hover:text-emerald-300 md:h-9 md:w-9"
            >
              🛒
              {totalCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-3.5 min-w-[14px] items-center justify-center rounded-full bg-emerald-500 px-0.5 text-[9px] font-semibold text-slate-950 md:h-4 md:min-w-[16px] md:px-1 md:text-[10px]">
                  {totalCount}
                </span>
              )}
            </Link>
          </div>
        </nav>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="absolute left-0 right-0 top-full z-50 border-b border-slate-800 bg-slate-950 p-3 md:hidden">
            <SearchBar />
          </div>
        )}
      </header>

      {/* Mobile Side Menu - Outside Header */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[45] bg-slate-950/90 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          {/* Side Menu */}
          <div className="fixed left-0 top-0 z-[50] h-full w-80 max-w-[85vw] overflow-y-auto bg-slate-950 border-r border-slate-800 shadow-2xl md:hidden">
            <div className="flex flex-col p-5 min-h-full">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <Link
                  href="/"
                  className="flex items-baseline gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="rounded-full bg-emerald-400 px-2 py-0.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-950">
                    eco
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-100">
                    light
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 text-slate-400 hover:border-emerald-400 hover:text-emerald-300"
                >
                  ✕
                </button>
              </div>

              {/* Search Bar - Dropdown Style */}
              <div className="mb-6">
                <div className="rounded-lg border border-slate-800 bg-slate-900/80 p-3">
                  <SearchBar />
                </div>
              </div>

              {/* Navigation Links */}
              <div className="mb-6 space-y-1">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Pages
                </p>
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-100 hover:bg-slate-900 hover:text-emerald-300 transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="/catalog"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-100 hover:bg-slate-900 hover:text-emerald-300 transition-colors"
                >
                  Shop All
                </Link>
                  <Link
                    href="/cart"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-100 hover:bg-slate-900 hover:text-emerald-300 transition-colors"
                  >
                    Cart ({totalCount})
                  </Link>
                  <Link
                    href="/contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-100 hover:bg-slate-900 hover:text-emerald-300 transition-colors"
                  >
                    Contact
                  </Link>
                </div>

              {/* Categories */}
              <div className="mb-6 space-y-1">
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Categories
                </p>
                <Link
                  href="/catalog?category=ceiling"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-100 hover:bg-slate-900 hover:text-emerald-300 transition-colors"
                >
                  Ceiling Lights
                </Link>
                <Link
                  href="/catalog?category=wall"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-100 hover:bg-slate-900 hover:text-emerald-300 transition-colors"
                >
                  Wall Lamps
                </Link>
                <Link
                  href="/catalog?category=table"
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-100 hover:bg-slate-900 hover:text-emerald-300 transition-colors"
                >
                  Table Lamps
                </Link>
              </div>

              {/* Login/Signup */}
              <div className="mt-auto space-y-2 border-t border-slate-800 pt-4">
                <Link
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full rounded-full px-4 py-2.5 text-center text-sm font-semibold transition-colors ${
                    isLoginPage || (!isLoginPage && !isSignupPage)
                      ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                      : "border border-slate-700 text-slate-100 hover:border-emerald-400"
                  }`}
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full rounded-full px-4 py-2.5 text-center text-sm font-semibold transition-colors ${
                    isSignupPage
                      ? "bg-emerald-500 text-slate-950 hover:bg-emerald-400"
                      : "border border-slate-700 text-slate-100 hover:border-emerald-400"
                  }`}
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </>
      )}

      <main className="flex-1">{children}</main>

      <footer className="mt-8 border-t border-slate-800 bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-6 text-sm text-slate-400 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Ecolight
            </p>
            <p className="mt-2 max-w-xs text-slate-400">
              Premium, energy-efficient lighting for homes, cafes and creative
              spaces.
            </p>
          </div>
          <div className="flex gap-10">
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Shop
              </p>
              <Link href="/catalog" className="block hover:text-emerald-300">
                All Products
              </Link>
              <Link
                href="/catalog?category=ceiling"
                className="block hover:text-emerald-300"
              >
                Ceiling
              </Link>
              <Link
                href="/catalog?category=wall"
                className="block hover:text-emerald-300"
              >
                Wall
              </Link>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Support
              </p>
              <span className="block">Help Center</span>
              <Link
                href="/contact"
                className="block hover:text-emerald-300"
              >
                Contact
              </Link>
              <Link
                href="/terms"
                className="block text-slate-500 hover:text-emerald-300"
              >
                Terms &amp; Conditions
              </Link>
              <Link
                href="/privacy"
                className="block text-slate-500 hover:text-emerald-300"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-900/80 py-3 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} Ecolight. All rights reserved.
        </div>
      </footer>

      {/* AI Chatbot */}
      <ChatBot />
    </div>
  );
}

export default function CartShell({ children }) {
  return (
    <CartProvider>
      <ToastProvider>
        <ShellInner>{children}</ShellInner>
      </ToastProvider>
    </CartProvider>
  );
}


