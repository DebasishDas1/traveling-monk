"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trek } from "@/lib/trek-utils";
import { useUiStore } from "@/stores/uiStore";
import { useBookingStore } from "@/stores/bookingStore";
import { cn } from "@/lib/utils";

interface TrekCardProps {
  trek: Trek;
  variant?: "default" | "compact" | "featured";
}

export const TrekCard = ({ trek, variant = "default" }: TrekCardProps) => {
  const openBookingDrawer = useUiStore((state) => state.openBookingDrawer);
  const selectTrek = useBookingStore((state) => state.selectTrek);

  const handleClick = () => {
    selectTrek(trek.slug);
    openBookingDrawer();
  };

  const difficultyColor = {
    Easy: "bg-green-500/10 text-green-600 border-green-500/20",
    Moderate: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    Hard: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    Extreme: "bg-red-500/10 text-red-600 border-red-500/20",
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full group cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative aspect-4/5 overflow-hidden rounded-4xl mb-6">
        <Image
          src={trek.image}
          alt={trek.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Tier Badge */}
        <div className="absolute top-4 right-4">
          <Badge className="bg-saffron text-forest border-none px-3 py-1 text-[10px] uppercase tracking-widest font-bold rounded-sm shadow-lg">
            {trek.tier === "Standard" ? "Weekend" : trek.tier}
          </Badge>
        </div>
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="space-y-4">
        <h3 className="font-display text-3xl text-forest leading-tight">
          {trek.name}
        </h3>

        <div className="flex items-center gap-3 text-[11px] text-monk-muted uppercase tracking-[0.2em] font-bold">
          <span>{trek.duration}</span>
          <span className="w-1 h-1 rounded-full bg-monk-muted/30" />
          <span>{trek.altitude}</span>
          <span className="w-1 h-1 rounded-full bg-monk-muted/30" />
          <span>{trek.groupSize}</span>
        </div>

        <div className="flex flex-col gap-3 pt-2">
          <div className="flex items-baseline gap-2">
            <span className="text-monk-muted text-xs font-bold uppercase tracking-widest">
              From
            </span>
            <span className="text-saffron font-display text-3xl">
              ₹{trek.price.toLocaleString()}
            </span>
          </div>

          <div className="flex items-center gap-2 text-forest font-bold uppercase tracking-widest text-[10px] group-hover:text-saffron transition-colors">
            Explore trek <span className="text-lg">→</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
