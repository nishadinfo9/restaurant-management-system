"use client";

import Link from "next/link";
import { ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Menu", href: "#menu" },
    { label: "Foods", href: "/foods" },
    { label: "Our Story", href: "#our-story" },
    { label: "Dashboard", href: "#dashboard" },
  ];

  // 🚀 prevent background scroll when menu open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50">
      {/* Glass background */}
      <div className="absolute inset-0 border-b border-white/10 bg-black/50 backdrop-blur-xl" />

      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12 lg:px-20">
        {/* LOGO */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-wide text-white hover:opacity-80 transition"
        >
          Ember & Table
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* RIGHT ACTIONS */}
        <div className="hidden items-center gap-4 md:flex">
          <button className="rounded-full bg-orange-400 px-5 py-2 text-sm font-medium text-black transition hover:bg-orange-300 active:scale-95">
            Order Now
          </button>

          <Link
            href="/cart"
            className="relative rounded-full p-2 transition hover:bg-white/10"
          >
            <ShoppingBag size={22} />
          </Link>
        </div>

        {/* MOBILE BUTTONS */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/cart"
            className="rounded-full p-2 transition hover:bg-white/10"
          >
            <ShoppingBag size={22} />
          </Link>

          <button
            onClick={() => setIsOpen(true)}
            className="flex flex-col gap-1.5 rounded-md p-2"
          >
            <span className="h-[2px] w-6 bg-white" />
            <span className="h-[2px] w-6 bg-white/70" />
            <span className="h-[2px] w-6 bg-white/40" />
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div
        className={`fixed inset-0 z-50 bg-black/90 backdrop-blur-xl transition-opacity duration-300 md:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`absolute right-0 top-0 h-full w-4/5 max-w-sm transform bg-black/80 p-6 shadow-2xl transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* CLOSE */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 rounded-full bg-white/10 p-2 hover:bg-white/20 transition"
          >
            <X size={20} />
          </button>

          {/* LINKS */}
          <div className="mt-16 flex flex-col gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-lg text-white/80 transition hover:text-orange-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* ACTIONS */}
          <div className="mt-10 flex flex-col gap-4">
            <button className="rounded-full border border-white/15 px-5 py-3 text-sm text-white transition hover:bg-white/10">
              Book Table
            </button>

            <button className="rounded-full bg-orange-400 px-5 py-3 text-sm font-medium text-black transition hover:bg-orange-300">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
