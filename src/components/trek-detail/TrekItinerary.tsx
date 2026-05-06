"use client";

import { Trek } from "@/lib/treks";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Sun, Moon, Cloud, Sunrise, Sunset } from "lucide-react";

interface TrekItineraryProps {
  trek: Trek;
}

const getIcon = (idx: number) => {
  const icons = [<Sunrise />, <Sun />, <Sunset />, <Moon />, <Cloud />];
  return icons[idx % icons.length];
};

export const TrekItinerary = ({ trek }: TrekItineraryProps) => {
  return (
    <section className="space-y-20 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <span className="text-saffron text-[10px] uppercase tracking-[0.5em] font-black block">
            The Daily Passage
          </span>
          <h2 className="font-display text-5xl text-forest italic leading-tight tracking-tight">
            The Experience Arc
          </h2>
        </div>
        <p className="text-stone-400 font-display text-xl italic max-w-xs md:text-right">
          A rhythmic journey through silence and elevation.
        </p>
      </div>

      <div className="relative space-y-0 pl-14 md:pl-20">
        {/* 📜 The Path Line - Custom Gradient */}
        <div className="absolute left-[27px] md:left-[39px] top-10 bottom-10 w-[2px] bg-linear-to-b from-saffron via-forest/40 to-forest" />

        {trek.itinerary.map((day, idx) => (
          <motion.div
            key={day.day}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: idx * 0.1 }}
            className="relative pb-24 last:pb-0 group"
          >
            {/* 📍 Stylized Point */}
            <div
              className={cn(
                "absolute left-[-47px] md:left-[-62px] top-0 size-12 md:size-16 rounded-full",
                "bg-white border-2 border-stone-100 flex flex-col items-center justify-center",
                "text-forest shadow-xl transition-all duration-500 group-hover:border-saffron group-hover:scale-110",
              )}
            >
              <span className="text-[10px] font-black uppercase tracking-widest text-saffron/60 leading-none mb-1">
                Day
              </span>
              <span className="font-display text-xl md:text-2xl font-bold leading-none">
                {day.day}
              </span>
            </div>

            {/* ☁️ Small Atmospheric Icon */}
            <div className="absolute left-[-80px] md:left-[-110px] top-4 text-stone-200 group-hover:text-saffron/20 transition-colors duration-500">
              {getIcon(idx)}
            </div>

            <div className="space-y-4 bg-white/40 p-8 md:p-10 rounded-[3rem] border border-transparent group-hover:border-stone-100 group-hover:bg-white transition-all duration-500">
              <h3 className="font-display text-3xl text-forest italic font-bold tracking-tight">
                {day.title}
              </h3>
              <p className="text-stone-500 leading-relaxed max-w-2xl font-sans font-light text-lg">
                {day.description}
              </p>

              {/* Subtle line indicator */}
              <div className="h-px w-12 bg-saffron/30 group-hover:w-24 transition-all duration-700" />
            </div>
          </motion.div>
        ))}

        {/* 🏔️ The Culmination */}
        <div className="relative pt-12">
          <div className="absolute left-[-47px] md:left-[-62px] top-12 size-12 md:size-16 rounded-full bg-forest flex items-center justify-center text-white shadow-2xl ring-8 ring-white">
            <span className="font-display text-3xl italic font-bold">∞</span>
          </div>
          <div className="space-y-4 pl-10 md:pl-0">
            <h3 className="font-display text-4xl text-forest italic font-bold tracking-tight">
              Return. Changed.
            </h3>
            <p className="text-stone-400 leading-relaxed max-w-xl font-sans font-light text-xl italic">
              "The mountain does not move; it is we who are transformed."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
