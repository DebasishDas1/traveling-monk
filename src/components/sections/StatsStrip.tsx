"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, animate } from "framer-motion";
import { cn } from "@/lib/utils";

const StatItem = ({
  value,
  label,
  suffix = "",
}: {
  value: number;
  label: string;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (latest) =>
          setCount(
            Math.floor(latest) === latest ? latest : Number(latest.toFixed(1)),
          ),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <div
      ref={ref}
      className={cn(
        "relative flex flex-col items-center justify-center",
        "py-14 px-6 text-center",
      )}
    >
      {/* ✨ Subtle divider */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-px bg-linear-to-b from-transparent via-forest/20 to-transparent first:hidden" />

      {/* 🔢 Number */}
      <div className="font-display text-5xl md:text-7xl font-semibold text-forest tracking-tight">
        {count}
        <span className="text-saffron ml-1">{suffix}</span>
      </div>

      {/* 🏷 Label */}
      <div className="mt-3 text-sm md:text-base text-forest/60 tracking-wide">
        {label}
      </div>
    </div>
  );
};

export const StatsStrip = () => {
  return (
    <section className="relative py-10">
      {/* 🌾 Background layers */}
      <div className="absolute inset-0 backdrop-blur-xl" />

      {/* Content */}
      <div className="relative container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <StatItem value={47} label="Treks Completed" suffix="+" />
          <StatItem value={600} label="Lives Changed" suffix="+" />
          <StatItem value={12} label="Mountain Ranges" />
          <StatItem value={4.9} label="Avg. Rating" />
        </div>
      </div>
    </section>
  );
};
