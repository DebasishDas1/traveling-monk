"use client";

import { useMemo, useState, useEffect } from "react";
import Link from "next/link";
import {
  ChevronRight,
  MessageCircle,
  RotateCcw,
  ShieldCheck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { TrekType } from "@/lib/type";
import { useUiStore } from "@/stores/uiStore";
import { whatsappNumber } from "@/lib/utils";

interface TrekBookingWidgetProps {
  trek: TrekType;
}

export const TrekBookingWidget = ({ trek }: TrekBookingWidgetProps) => {
  const { openBookingDrawer } = useUiStore();

  const [selectedDate, setSelectedDate] = useState<string>("");

  useEffect(() => {
    if (trek.availableDates?.length) {
      setSelectedDate(trek.availableDates[0].date);
    }
  }, [trek]);

  const whatsappLink = useMemo(() => {
    const text = encodeURIComponent(
      `Hi, I have a question about the ${trek.name} trek`,
    );
    return `https://wa.me/${whatsappNumber}?text=${text}`;
  }, [trek.name]);

  return (
    <aside className="relative">
      <div className="sticky top-32 space-y-6">
        <div className="bg-monk-dark rounded-[2.5rem] p-8 md:p-9 shadow-2xl text-white border border-white/5 overflow-hidden relative">
          {/* Glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-saffron/10 blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          {/* Price */}
          <div className="space-y-2 mb-8">
            <p className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-bold">
              Exchange for Value
            </p>
            <div className="flex items-baseline gap-2">
              <span className="font-display text-5xl text-saffron tracking-tighter">
                ₹{trek.priceFrom.toLocaleString()}
              </span>
              <span className="text-white/40 text-xs font-light">/ person</span>
            </div>
            <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold">
              All inclusive · No hidden fees
            </p>
          </div>

          <div className="space-y-6">
            {/* Date */}
            <div className="space-y-3">
              <label
                htmlFor="trek-date"
                className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/40"
              >
                Departing On
              </label>

              <select
                id="trek-date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-4 py-3.5 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all appearance-none cursor-pointer"
              >
                {trek.availableDates.map((d) => (
                  <option
                    key={d.date}
                    value={d.date}
                    className="bg-monk-dark text-white"
                  >
                    {d.date} — {d.spots} spots left
                  </option>
                ))}
              </select>
            </div>

            {/* Group size */}
            <div className="flex items-center gap-4 py-5 border-y border-white/5">
              <div className="size-9 rounded-full bg-saffron/10 flex items-center justify-center">
                <Users className="size-4 text-saffron" />
              </div>
              <p className="text-[11px] text-white/60 leading-relaxed font-light">
                <span className="text-white font-bold block mb-0.5">
                  Limited Gathering
                </span>
                Small group guarantee (Max {trek.maxGroupSize})
              </p>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-2">
              <Button
                variant="saffron"
                onClick={() => openBookingDrawer(trek.slug)}
                className="w-full h-16 rounded-2xl text-base font-black uppercase tracking-[0.2em] shadow-[0_15px_40px_rgba(255,153,0,0.15)] hover:shadow-none transition-all group"
              >
                Reserve Spot
                <ChevronRight className="size-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Link href={whatsappLink} target="_blank" className="block">
                <Button
                  variant="outline"
                  className="w-full h-16 rounded-2xl bg-monk-brown-warm text-white text-base font-black uppercase tracking-[0.2em]"
                >
                  <MessageCircle className="size-5 mr-3" />
                  Ask a Question
                </Button>
              </Link>
            </div>

            {/* Trust signals */}
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

            {/* Urgency */}
            {trek.spotsLeft < 5 && (
              <div className="mt-8 flex items-center gap-3 px-5 py-3 bg-rose-500/10 border border-rose-500/20 rounded-xl">
                <div className="size-2 rounded-full bg-rose-500 animate-pulse" />
                <span className="text-[10px] text-rose-500 font-bold uppercase tracking-[0.2em]">
                  Only {trek.spotsLeft} spots remaining
                </span>
              </div>
            )}
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
