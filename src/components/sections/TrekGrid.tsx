"use client";

import { useState, useMemo } from "react";
import TrekCard from "./TrekCard";
import { motion, AnimatePresence } from "framer-motion";
import { trekData } from "@/lib/data/treks";
import { cn } from "@/lib/utils";

const FILTERS = [
  "All",
  "Easy",
  "Easy to Moderate",
  "Moderate",
  "Moderate to Difficult",
  "Difficult",
];

export const TrekGrid = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredTreks = useMemo(() => {
    if (activeFilter === "All") return trekData;
    return trekData.filter(
      (trek) =>
        trek.difficulty === activeFilter ||
        trek.tier === activeFilter ||
        trek.region === activeFilter ||
        trek.duration.includes(activeFilter),
    );
  }, [activeFilter]);

  return (
    <div className="relative w-full">
      {/* ===== FILTER BAR ===== */}
      <div className="w-full mb-10">
        <div className="mx-auto max-w-5xl px-4">
          <div
            className="relative flex flex-wrap gap-3 items-center justify-center 
      py-6 px-5"
          >
            {FILTERS.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    "group relative px-5 py-2 rounded-full text-[11px] uppercase tracking-[0.25em] transition-all duration-300 border overflow-hidden ",

                    isActive
                      ? "bg-monk-brown-warm text-parchment shadow-lg bg-earth-mid"
                      : "text-earth-deep shadow-lg shadow-earth-deep",
                  )}
                >
                  {/* text */}
                  <span className="relative z-10">{filter}</span>

                  {/* ink fill hover */}
                  {!isActive && (
                    <span
                      className="absolute inset-0 bg-(--color-primary) 
                translate-y-full group-hover:translate-y-0 
                transition-transform duration-300"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ===== GRID ===== */}
      <div className="relative container mx-auto px-6 lg:px-12 pb-16">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatePresence mode="popLayout">
            {filteredTreks.map((trek, index) => (
              <TrekCard key={trek.slug} trek={trek} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ===== EMPTY STATE (STYLED) ===== */}
        {filteredTreks.length === 0 && (
          <section className="flex items-center justify-center h-[50vh] md:h-[60vh]">
            <h1 className="font-display  text-6xl md:text-8xl text-monk-brown-deep">
              Coming Soon ...
            </h1>
          </section>
        )}
      </div>
    </div>
  );
};
