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
      {/* ===== BACKGROUND TEXTURE LAYERS ===== */}
      <div
        className="absolute inset-0 -z-10 
        bg-[radial-gradient(circle_at_top,rgba(120,90,60,0.08),transparent_60%)]"
      />

      <div
        className="absolute inset-0 -z-10 
        bg-[linear-gradient(to_bottom,rgba(255,248,235,0.9),rgba(240,228,210,0.95))]"
      />

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
                    "relative px-5 py-2 rounded-full text-[11px] uppercase tracking-[0.25em] font-serif transition-all duration-300 border overflow-hidden",

                    isActive
                      ? "bg-monk-brown-warm text-parchment border-monk-black shadow-md"
                      : "bg-transparent text-black border-black",
                  )}
                >
                  <span className="relative z-10">{filter}</span>

                  {/* ink fill hover (inactive only) */}
                  {!isActive && (
                    <span
                      className="absolute inset-0 bg-[#2B1F14] 
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
          <div className="text-center py-20 text-[#5C4A3D] font-serif">
            <p className="text-lg tracking-wide italic">
              No expeditions found in this realm…
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
