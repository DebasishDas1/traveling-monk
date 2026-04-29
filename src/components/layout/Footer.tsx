"use client";

import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Footer = () => {
  return (
    <footer className="bg-monk-dark text-parchment/80 pt-24 pb-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-12 mb-20">
          {/* Col 1 - Brand */}
          <div className="space-y-8">
            <Link
              href="/"
              className="font-display italic text-3xl text-saffron block"
            >
              The Traveling Monk
            </Link>
            <p className="font-display italic text-xl text-parchment/60 max-w-xs">
              "Walk until you find yourself."
            </p>
            <div className="flex gap-4">
              {[
                { icon: Phone, label: "Instagram" },
                { icon: Phone, label: "Youtube" },
                { icon: Phone, label: "Call" },
              ].map((social) => (
                <button
                  key={social.label}
                  className="size-10 rounded-full flex items-center justify-center bg-white/5 hover:bg-saffron/20 text-parchment/60 hover:text-saffron transition-all border border-white/5"
                  aria-label={social.label}
                >
                  <social.icon className="size-5" />
                </button>
              ))}
            </div>
          </div>

          {/* Col 2 - Explore */}
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
            <div className="space-y-6">
              <h4 className="text-saffron/60 text-[10px] uppercase tracking-[0.4em] font-bold">
                Explore
              </h4>
              <ul className="space-y-4">
                {[
                  "All Treks",
                  "Weekend Treks",
                  "Transformation Treks",
                  "Premium Retreats",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="/treks"
                      className="text-sm hover:text-parchment transition-colors border-b border-transparent hover:border-parchment/20 pb-0.5"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="invisible h-0 md:visible md:h-auto text-saffron/60 text-[10px] uppercase tracking-[0.4em] font-bold">
                Company
              </h4>
              <ul className="space-y-4">
                {[
                  "Corporate Offsites",
                  "About Us",
                  "Community",
                  "Sustainability",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="/about"
                      className="text-sm hover:text-parchment transition-colors border-b border-transparent hover:border-parchment/20 pb-0.5"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 3 - Contact */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h4 className="text-saffron/60 text-[10px] uppercase tracking-[0.4em] font-bold">
                Find Us
              </h4>
              <div className="space-y-2">
                <a
                  href="mailto:hello@thetravelingmonk.in"
                  className="block text-lg hover:text-saffron transition-colors"
                >
                  hello@thetravelingmonk.in
                </a>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  className="block text-parchment/60 hover:text-parchment transition-colors"
                >
                  WhatsApp Support →
                </a>
                <p className="text-sm text-parchment/40 italic pt-2">
                  Based in India · Treks across the Himalayas
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <p className="text-xs font-bold uppercase tracking-widest text-parchment/40">
                Get trek updates
              </p>
              <div className="flex gap-2">
                <Input
                  placeholder="Email address"
                  className="bg-white/5 border-white/10 text-parchment rounded-full px-5 h-11 focus:ring-saffron/30"
                />
                <Button
                  size="icon"
                  className="size-11 rounded-full bg-saffron text-forest shrink-0 hover:bg-saffron/90"
                >
                  <ArrowRight className="size-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.3em] font-bold text-parchment/20">
          <span>© 2024 The Traveling Monk</span>
          <span className="italic">Made with purpose in the mountains</span>
        </div>
      </div>
    </footer>
  );
};
