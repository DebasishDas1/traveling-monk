"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ItineraryDayType } from "@/lib/type";
import TrekItineraryCard from "@/components/trek-detail/TrekItineraryCard";

export const MyItinerary = ({
  itinerary,
}: {
  itinerary: ItineraryDayType[];
}) => {
  return (
    <section className="relative space-y-24 py-16 md:py-24">
      {/* 🧭 Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-3">
          <span className="text-[var(--color-accent)] text-[10px] uppercase tracking-[0.5em] font-semibold block">
            The Daily Passage
          </span>

          <h2 className="font-display text-3xl md:text-5xl text-[var(--color-primary)] ">
            The Experience Arc
          </h2>
        </div>

        <p className="text-lg md:text-xl  text-[#5A4A3B] max-w-xs md:text-right">
          A rhythmic journey through silence and elevation.
        </p>
      </div>

      {/* 🧵 Timeline */}
      <div className="relative pl-10 md:pl-20">
        {/* 🌿 Soft gradient timeline line */}
        <div
          className="absolute left-[32px] md:left-[58px] top-10 bottom-10 w-px
          bg-linear-to-b from-[var(--color-parchment-dark)]/20 via-[var(--color-parchment-dark)]/60 to-[var(--color-parchment-dark)]/20"
        />

        {/* ⏳ Moving time flow dot */}
        <motion.div
          className="absolute left-[29px] md:left-[55px] top-10 w-2 h-2 rounded-full bg-[var(--color-saffron-light)]
          shadow-[0_0_18px_rgba(201,162,74,0.35)]"
          animate={{
            y: ["0%", "100%"],
            opacity: [0.25, 0.8, 0.25],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {itinerary.map((day, idx) => {
          const progress = (idx + 1) / itinerary.length;

          return (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative pb-16 md:pb-20"
              style={{
                opacity: 0.72 + progress * 0.28, // subtle time progression
              }}
            >
              {/* 📍 Day Marker (soft seal style) */}
              <div
                className={cn(
                  "absolute left-[-34px] md:left-[-58px] top-2 z-20",
                  "w-12 h-12 md:w-16 md:h-16 rounded-full",
                  "bg-[#F3E7D6] border border-[var(--color-parchment-dark)]",
                  "flex flex-col items-center justify-center",
                  "shadow-[0_8px_25px_rgba(60,45,30,0.12)]",
                )}
              >
                <span className="text-[8px] md:text-[9px] uppercase tracking-[0.25em] text-[var(--color-monk-stone)] mb-1">
                  Day
                </span>

                <span className="text-xl md:text-3xl font-bold text-[var(--color-primary)]">
                  {day.day}
                </span>
              </div>

              {/* 🏔️ Card */}
              <TrekItineraryCard
                day={day.day}
                image={day.imageUrl}
                title={day.title}
                description={day.description}
                from={day.from}
                to={day.to}
                altitude={day.altitude}
                duration={day.duration}
              />
            </motion.div>
          );
        })}
      </div>

      {/* 🌄 End marker */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative text-center space-y-5"
      >
        <div
          className="mx-auto h-2 w-2 rounded-full bg-[var(--color-saffron-light)]
          shadow-[0_0_20px_rgba(201,162,74,0.35)]"
        />

        <h3 className="text-2xl md:text-3xl  text-[var(--color-primary)]">
          The journey completes, but something remains.
        </h3>

        <p className="mx-auto max-w-md text-sm md:text-base leading-relaxed text-[#6B5A48]">
          You return to where you started — but the mountains do not leave you.
          They settle quietly within.
        </p>
      </motion.div>
    </section>
  );
};
