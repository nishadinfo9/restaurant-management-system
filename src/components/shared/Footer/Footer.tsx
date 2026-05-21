import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 md:px-12 lg:px-20">
        
        {/* TOP GRID */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          
          {/* BRAND */}
          <div>
            <h2 className="text-xl font-semibold">Ember & Table</h2>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              A modern dining experience inspired by fire, flavor, and simplicity.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/80">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm text-white/60">
              {[
                { label: "Home", href: "/" },
                { label: "Menu", href: "#menu" },
                { label: "Our Story", href: "#story" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-3 text-sm font-medium text-white/80">
              Contact
            </h3>

            <div className="space-y-3 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Dhaka, Bangladesh</span>
              </div>

              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+880 1XX XXX XXXX</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>hello@embertable.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 md:flex-row">
          
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Ember & Table
          </p>

          {/* SOCIAL */}
          <div className="flex items-center gap-4 text-white/60">
            <a href="#" className="hover:text-white transition">
              <FaInstagram size={18} />
            </a>
            <a href="#" className="hover:text-white transition">
              <FaFacebook size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}