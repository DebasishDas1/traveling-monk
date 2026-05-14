"use client";

import { useMemo } from "react";
import Link from "next/link";
import {
  ChevronRight,
  MessageCircle,
  RotateCcw,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { EscapeType } from "@/lib/type";
import { whatsappNumber } from "@/lib/social-links";
import { useBookingStore } from "@/stores/bookingStore";

interface EscapeBookingWidgetProps {
  escape: EscapeType;
}

export const EscapeBookingWidget = ({ escape }: EscapeBookingWidgetProps) => {
  const { openDrawer } = useBookingStore();

  const whatsappLink = useMemo(() => {
    const text = encodeURIComponent(
      `Hi, I have a question about the ${escape.name} escape`,
    );
    return `https://wa.me/${whatsappNumber}?text=${text}`;
  }, [escape.name]);

  return (
    <aside className="relative">
      <div className="sticky top-32 space-y-6">
        <div className="bg-monk-dark rounded-[2.5rem] p-8 md:p-9 shadow-2xl text-white border border-white/5 overflow-hidden relative">
          {/* Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-saffron/10 blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          {/* Price */}
          <div className="space-y-4 mb-8">
            <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold">
              Exchange for Value
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
                <div>
                  <p className="text-[9px] text-white/30 uppercase tracking-widest mb-0.5">Triple Sharing</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-2xl text-saffron">
                      ₹{escape.price.triple.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-white/20 font-light">/pp</span>
                  </div>
                </div>
                <div className="h-8 w-px bg-white/5" />
                <div>
                  <p className="text-[9px] text-white/30 uppercase tracking-widest mb-0.5">Double Sharing</p>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-2xl text-saffron">
                      ₹{escape.price.double.toLocaleString()}
                    </span>
                    <span className="text-[10px] text-white/20 font-light">/pp</span>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold">
              All inclusive · No hidden fees
            </p>
          </div>

          <div className="space-y-6">
            {/* Date */}
            <div className="space-y-3">
              <label
                className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40"
              >
                Availability
              </label>

              <div className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-sm text-white/80 italic">
                Available on Request
              </div>
            </div>

            {/* Info */}
            <div className="flex items-center gap-4 py-5 border-y border-white/5">
              <div className="size-9 rounded-full bg-saffron/10 flex items-center justify-center">
                <Users className="size-4 text-saffron" />
              </div>
              <p className="text-[11px] text-white/60 leading-relaxed font-light">
                <span className="text-white font-bold block mb-0.5">
                  Comfortable Stays
                </span>
                Standard & Deluxe options available
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-2">
              <Button
                variant="saffron"
                onClick={() => openDrawer(escape.slug)}
                className="w-full h-16 rounded-2xl text-base font-black uppercase tracking-[0.2em] shadow-[0_15px_40px_rgba(255,153,0,0.15)] hover:shadow-none transition-all group"
              >
                Inquire Now
                <ChevronRight className="size-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Link href={whatsappLink} target="_blank" className="block">
                <Button
                  variant="outline"
                  className="w-full h-16 rounded-2xl bg-monk-brown-warm text-white text-base font-black uppercase tracking-[0.2em]"
                >
                  <MessageCircle className="size-5 mr-3" />
                  WhatsApp Us
                </Button>
              </Link>
            </div>

            {/* Trust signals */}
            <div className="space-y-4 pt-6 border-t border-white/5">
              <div className="flex items-center gap-3 text-[9px] text-white/30 uppercase tracking-[0.2em] font-bold">
                <RotateCcw className="size-3.5" />
                <span>Flexible cancellation options</span>
              </div>
              <div className="flex items-center gap-3 text-[9px] text-white/30 uppercase tracking-[0.2em] font-bold">
                <ShieldCheck className="size-3.5" />
                <span>Verified Partners + Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-10 text-center space-y-4">
          <p className=" text-[10px] uppercase tracking-[0.2em] font-bold">
            Guiding Line
          </p>
          <p className="text-stone-600 font-display text-xl italic">
            +91 {whatsappNumber}
          </p>
          <div className="h-px bg-stone-100 w-12 mx-auto" />
          <p className=" text-[10px] uppercase tracking-[0.2em] font-bold">
            team@travelingmonk.in
          </p>
        </div>
      </div>
    </aside>
  );
};
