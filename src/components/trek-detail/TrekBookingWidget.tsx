"use client";

import Link from "next/link";
import {
  ChevronRight,
  MessageCircle,
  RotateCcw,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Trek } from "@/lib/treks";
import { useUiStore } from "@/stores/uiStore";

interface TrekBookingWidgetProps {
  trek: Trek;
}

export const TrekBookingWidget = ({ trek }: TrekBookingWidgetProps) => {
  const { openBookingDrawer } = useUiStore();

  return (
    <aside className="relative">
      <div className="sticky top-32 space-y-8">
        <div className="bg-monk-dark rounded-[2.5rem] p-10 shadow-2xl text-white border border-white/5 overflow-hidden relative">
          {/* 🕯️ Decorative Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-saffron/10 blur-[80px] -translate-y-1/2 translate-x-1/2" />

          <div className="space-y-3 mb-10">
            <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold">
              Exchange for Value
            </p>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-6xl text-saffron tracking-tighter">
                ₹{trek.priceFrom.toLocaleString()}
              </span>
              <span className="text-white/40 text-sm font-light">/ person</span>
            </div>
            <p className="text-white/30 text-[10px] uppercase tracking-widest font-bold">
              All inclusive · No hidden fees
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <label className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40">
                Departing On
              </label>
              <select className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all appearance-none cursor-pointer">
                {trek.availableDates.map((d) => (
                  <option key={d.date} className="bg-monk-dark text-white">
                    {d.date} — {d.spots} spots left
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center gap-4 py-6 border-y border-white/5">
              <div className="size-10 rounded-full bg-saffron/10 flex items-center justify-center">
                <Users className="size-5 text-saffron" />
              </div>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                <span className="text-white font-bold block mb-0.5">
                  Limited Gathering
                </span>
                Small group guarantee (Max {trek.maxGroupSize})
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <Button
                variant="saffron"
                onClick={openBookingDrawer}
                className="w-full h-20 rounded-2xl text-lg font-black uppercase tracking-[0.2em] shadow-[0_15px_40px_rgba(255,153,0,0.2)] hover:shadow-none transition-all group"
              >
                Reserve Spot
                <ChevronRight className="size-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Link
                href={`https://wa.me/919876543210?text=Hi, I have a question about the ${trek.name} trek`}
                target="_blank"
                className="block"
              >
                <Button
                  variant="outline"
                  className="w-full h-20 rounded-2xl border-white/10 text-white hover:bg-white/5 text-lg font-black uppercase tracking-[0.2em]"
                >
                  <MessageCircle className="size-6 mr-3" /> Ask a Question
                </Button>
              </Link>
            </div>

            <div className="space-y-4 pt-6 border-t border-white/5">
              <div className="flex items-center gap-3 text-[9px] text-white/30 uppercase tracking-[0.2em] font-bold">
                <RotateCcw className="size-3.5" />
                <span>Free cancellation up to 30 days</span>
              </div>
              <div className="flex items-center gap-3 text-[9px] text-white/30 uppercase tracking-[0.2em] font-bold">
                <ShieldCheck className="size-3.5" />
                <span>Certified guides + Insurance included</span>
              </div>
            </div>

            {trek.spotsLeft < 5 && (
              <div className="mt-8 flex items-center gap-3 px-5 py-3 bg-rose-500/10 border border-rose-500/20 rounded-xl">
                <div className="size-2 rounded-full bg-rose-500 animate-pulse" />
                <span className="text-[10px] text-rose-500 font-bold uppercase tracking-[0.2em]">
                  Urgency: Only {trek.spotsLeft} spots remaining
                </span>
              </div>
            )}
          </div>
        </div>

        {/* 🏮 Footer Support */}
        <div className="px-10 text-center space-y-4">
          <p className="text-stone-400 text-[10px] uppercase tracking-[0.2em] leading-relaxed font-bold">
            Guiding Line
          </p>
          <p className="text-stone-600 font-display text-xl italic">
            +91 98765 43210
          </p>
          <div className="h-px bg-stone-100 w-12 mx-auto" />
          <p className="text-stone-400 text-[10px] uppercase tracking-[0.2em] font-bold">
            hello@travelingmonk.com
          </p>
        </div>
      </div>
    </aside>
  );
};
