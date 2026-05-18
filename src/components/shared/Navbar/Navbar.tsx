"use client";

import Link from "next/link";
import { ShoppingBag, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Menu", href: "#menu" },
    { label: "Foods", href: "/foods" },
    { label: "Our Story", href: "#our-story" },
    { label: "Dashboard", href: "#dashboard" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 text-white">
      {/* Glass background */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-xl border-b border-white/10" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-18">
          {/* LOGO */}
          <Link href="/" className="text-lg font-semibold">
            Ember & Table
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white/70 hover:text-white transition"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2 rounded-full bg-orange-400 text-black font-medium hover:bg-orange-300 transition">
              Order Now
            </button>

            <Link href="/cart" className="relative p-2">
              <ShoppingBag size={22} />

              {/* {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-orange-400 text-black text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )} */}
            </Link>
          </div>

          {/* MOBILE */}
          <div className="md:hidden flex items-center gap-4">
            <Link href="/cart" className="relative p-2">
              <ShoppingBag size={22} />

              {/* {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-orange-400 text-black text-xs flex items-center justify-center">
                  {cartCount}
                </span>
              )} */}
            </Link>

            <button
              onClick={() => setIsOpen(true)}
              className="flex flex-col gap-1.5"
            >
              <span className="w-6 h-[2px] bg-white" />
              <span className="w-6 h-[2px] bg-white/70" />
              <span className="w-6 h-[2px] bg-white/40" />
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/95 backdrop-blur-xl md:hidden z-50">
          <div className="relative px-6 py-10 space-y-8">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            >
              <X size={20} />
            </button>

            {/* NAV LINKS */}
            <div className="space-y-6 mt-10">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-lg text-white/80 hover:text-orange-300 transition"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* ACTIONS */}
            <div className="pt-8 flex flex-col gap-4">
              <button className="px-6 py-3 rounded-full border border-white/15">
                Book Table
              </button>

              <button className="px-6 py-3 rounded-full bg-orange-400 text-black">
                Order Now
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
