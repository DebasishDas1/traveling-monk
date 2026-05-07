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
    <div className="w-full">
      {/* 🧭 Filter Bar */}
      <div className="w-full">
        <div className="mx-auto">
          <div
            className="top-6 z-40 relative flex flex-wrap gap-3 items-center justify-center py-3 px-4
          rounded-b-3xl
          backdrop-blur-xl
          bg-parchment/20

          before:absolute before:top-0 before:left-0 before:right-0 before:h-1/2
          before:pointer-events-none
          supports-backdrop-filter:bg-parchment/40
          "
          >
            {FILTERS.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 border",
                  activeFilter === filter
                    ? "bg-saffron border-saffron text-forest shadow-md"
                    : "bg-transparent border-forest text-forest hover:border-monk-brown-warm hover:text-monk-brown-warm",
                )}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 🏔️ Grid */}
      <div className="relative container mx-auto px-6 py-20">
        <motion.div
          layout
          className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14"
        >
          <AnimatePresence mode="popLayout">
            {filteredTreks.map((trek, index) => (
              <TrekCard key={trek.slug} trek={trek} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
