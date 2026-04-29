"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { trekData, Trek } from "@/lib/treks";
import { ArrowRight, MapPin, Clock, Users, Mountain } from "lucide-react";

const FILTERS = [
  "All",
  "Beginner",
  "Moderate",
  "Challenging",
  "Weekend",
  "Transformation",
  "Premium",
  "Uttarakhand",
  "Himachal",
  "South India",
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
      <div className="sticky top-20 z-40 w-full bg-parchment/95 backdrop-blur-md border-b border-saffron/20 py-6 px-6">
        <div className="container mx-auto flex flex-wrap gap-3 items-center justify-center">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={cn(
                "px-5 py-2 rounded-full text-xs uppercase tracking-widest font-medium transition-all duration-300 border",
                activeFilter === filter
                  ? "bg-saffron border-saffron text-forest shadow-md"
                  : "bg-transparent border-stone-300 text-stone-500 hover:border-saffron hover:text-saffron",
              )}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* 🏔️ Grid */}
      <div className="container mx-auto px-6 py-20">
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14"
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

const TrekCard = ({ trek, index }: { trek: Trek; index: number }) => {
  const difficultyColors = {
    Beginner: "bg-emerald-100 text-emerald-700 border-emerald-200",
    Moderate: "bg-amber-100 text-amber-700 border-amber-200",
    Challenging: "bg-rose-100 text-rose-700 border-rose-200",
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.08, duration: 0.5, ease: "easeOut" }}
      className="group"
    >
      <Link href={`/treks/${trek.slug}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-2/3 overflow-hidden rounded-2xl shadow-xl">
          <Image
            src={trek.image}
            alt={trek.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

          {/* Difficulty Badge */}
          <div
            className={cn(
              "absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold border backdrop-blur-md",
              difficultyColors[trek.difficulty],
            )}
          >
            {trek.difficulty}
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-forest/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="absolute bottom-0 inset-x-0 bg-saffron h-14 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center">
            <span className="text-forest font-bold uppercase tracking-[0.2em] text-xs flex items-center gap-2">
              View Trek <ArrowRight className="size-4" />
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="mt-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-display text-2xl text-forest group-hover:text-saffron transition-colors">
              {trek.name}
            </h3>
            <span className="text-saffron font-bold">
              ₹{trek.priceFrom.toLocaleString()}
            </span>
          </div>

          <p className="text-sm text-stone-500 font-sans mb-4">
            {trek.tagline}
          </p>

          <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-[11px] text-stone-400 uppercase tracking-widest border-t border-stone-100 pt-4">
            <span className="flex items-center gap-1.5">
              <Clock className="size-3" /> {trek.duration}
            </span>
            <span className="text-stone-200">|</span>
            <span className="flex items-center gap-1.5">
              <Mountain className="size-3" /> {trek.altitude}
            </span>
            <span className="text-stone-200">|</span>
            <span className="flex items-center gap-1.5">
              <Users className="size-3" /> Max {trek.maxGroupSize}
            </span>
          </div>

          {trek.spotsLeft < 5 && (
            <div className="mt-4 text-[10px] text-rose-600 font-bold uppercase tracking-widest animate-pulse">
              ⚠️ Only {trek.spotsLeft} spots left!
            </div>
          )}

          <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-forest group-hover:gap-3 transition-all">
            Explore <ArrowRight className="size-3 text-saffron" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
