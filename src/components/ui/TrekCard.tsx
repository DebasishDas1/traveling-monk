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
      className="h-full"
    >
      <Card
        onClick={handleClick}
        className="group relative h-full overflow-hidden border-t-2 border-t-saffron rounded-xl bg-white shadow-md hover:shadow-xl transition-all cursor-pointer flex flex-col"
      >
        {/* Image Area */}
        <div className="relative aspect-3/4 overflow-hidden">
          {/* <Image
            src={trek.image}
            alt={trek.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          /> */}

          {/* Saffron Stripe Hover Effect */}
          <div className="absolute inset-x-0 bottom-0 h-12 bg-saffron translate-y-full transition-transform duration-300 group-hover:translate-y-0 flex items-center justify-center">
            <span className="text-forest font-bold text-sm uppercase tracking-widest">
              View Trek →
            </span>
          </div>

          {/* Urgency Badge */}
          {trek.spotsLeft < 4 && (
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md flex items-center gap-1.5 shadow-sm">
              <span className="size-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-tighter">
                Only {trek.spotsLeft} spots
              </span>
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="p-5 flex flex-col grow">
          <div className="flex items-center gap-2 mb-3">
            <Badge
              variant="outline"
              className={cn(
                "text-[10px] uppercase tracking-wider font-bold px-2 py-0.5",
                difficultyColor[trek.difficulty],
              )}
            >
              {trek.difficulty}
            </Badge>
            <Badge
              variant="secondary"
              className="text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 bg-forest/5 text-forest/60 border-forest/10"
            >
              {trek.tier}
            </Badge>
          </div>

          <h3 className="font-display text-2xl text-forest mb-1 leading-tight group-hover:text-saffron transition-colors">
            {trek.name}
          </h3>
          <p className="text-stone-500 text-sm font-light mb-4 line-clamp-2">
            {trek.tagline}
          </p>

          <div className="mt-auto">
            <div className="flex items-center gap-2 text-[11px] text-stone-400 uppercase tracking-widest mb-3">
              <span>{trek.duration}</span>
              <span className="size-1 rounded-full bg-stone-300" />
              <span>{trek.altitude}</span>
              <span className="size-1 rounded-full bg-stone-300" />
              <span>{trek.groupSize}</span>
            </div>

            <div className="flex items-baseline gap-1">
              <span className="text-stone-400 text-xs font-light">From</span>
              <span className="text-saffron font-display text-2xl">
                ₹{trek.price.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
