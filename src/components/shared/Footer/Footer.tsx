import Link from "next/link";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] text-white overflow-hidden border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Top Section */}
        <div className="py-24 flex flex-col lg:flex-row items-start justify-between gap-16 border-b border-white/10">
          {/* Left Content */}
          <div className="max-w-2xl">
            <p className="uppercase tracking-[0.3em] text-orange-300 text-sm mb-5">
              Ember & Table
            </p>

            <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
              Crafted Around
              <span className="block text-white/40">Fire, Flavor & Story</span>
            </h2>

            <p className="mt-8 text-white/60 text-lg leading-relaxed max-w-xl">
              A dining experience inspired by open-fire cooking, timeless
              recipes, and unforgettable evenings shared around the table.
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-5">
            <button className="group flex items-center justify-center gap-3 px-8 h-14 rounded-full bg-orange-400 text-black font-medium hover:bg-orange-300 transition-all duration-300">
              Reserve A Table
              <ArrowUpRight
                size={18}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </button>

            <p className="text-sm text-white/40 max-w-xs">
              Open daily from 11:00 AM to 11:30 PM
            </p>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 py-20">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Ember & Table</h3>

            <p className="text-white/55 leading-relaxed">
              More than a restaurant — a warm atmosphere where smoke, fire, and
              premium ingredients create memorable moments.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-medium mb-6">Navigation</h4>

            <ul className="space-y-4 text-white/55">
              {["Home", "Our Story", "Menu", "Reservations", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="/"
                      className="hover:text-orange-300 transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-medium mb-6">Contact</h4>

            <div className="space-y-5 text-white/55">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 text-orange-300" />

                <p>Dhaka, Bangladesh</p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={18} className="text-orange-300" />

                <p>+880 1XX XXX XXXX</p>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={18} className="text-orange-300" />

                <p>hello@embertable.com</p>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-medium mb-6">Follow Us</h4>

            <div className="flex items-center gap-4">
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-orange-400 hover:text-black transition-all duration-300">
                <FaInstagram size={20} />
              </button>

              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-orange-400 hover:text-black transition-all duration-300">
                <FaFacebook size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5 text-sm">
          <p className="text-white/35">
            © {new Date().getFullYear()} Ember & Table. All rights reserved.
          </p>

          <p className="uppercase tracking-[0.25em] text-orange-300 text-xs">
            Crafted With Passion
          </p>
        </div>
      </div>
    </footer>
  );
}
