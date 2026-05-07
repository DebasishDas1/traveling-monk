"use client";

import { Trek } from "@/lib/treks";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import TrekItineraryCard from "@/components/trek-detail/TrekItineraryCard";

interface TrekItineraryProps {
  trek: Trek;
}

export const TrekItinerary = ({ trek }: TrekItineraryProps) => {
  return (
    <section className="space-y-20 py-12">
      {/* 🧭 Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <span className="text-saffron text-[10px] uppercase tracking-[0.5em] font-black block">
            The Daily Passage
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-forest italic tracking-tight">
            The Experience Arc
          </h2>
        </div>

        <p className="text-stone-400 font-display text-lg md:text-xl italic max-w-xs md:text-right">
          A rhythmic journey through silence and elevation.
        </p>
      </div>

      {/* 🧵 Timeline */}
      <div className="relative pl-12 md:pl-20">
        {/* 🌿 Softer Timeline Line */}
        <div className="absolute left-[35px] md:left-[58px] top-10 bottom-10 w-[2px] bg-linear-to-b from-saffron/70 via-forest/30 to-forest/60" />

        {trek.itinerary.map((day, idx) => {
          return (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="relative pb-16 md:pb-20"
            >
              {/* 📍 Marker */}
              <div
                className={cn(
                  "absolute left-[-38px] md:left-[-60px] top-2 z-20",
                  "w-14 h-14 md:w-20 md:h-20 rounded-full",
                  "bg-linear-to-b from-monk-brown-warm to-monk-dark",
                  "flex flex-col items-center justify-center",
                  "shadow-[0_12px_40px_rgba(0,0,0,0.35)]",
                  "ring-4 ring-white",
                )}
              >
                {/* Label */}
                <span className="text-[8px] md:text-[10px] tracking-[0.3em] uppercase text-white/40 leading-none mb-1">
                  Day
                </span>

                {/* 💥 Strong Number */}
                <span className="font-display text-2xl md:text-4xl font-extrabold text-white leading-none tracking-tight drop-shadow-[0_2px_6px_rgba(0,0,0,0.5)]">
                  {day.day}
                </span>
              </div>

              <TrekItineraryCard
                image={day.imageUrl}
                title={day.title}
                description={day.description}
                idx={idx}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
