"use client";

import { useEffect, useState, useRef } from "react";
import { useInView, animate } from "framer-motion";
import { cn } from "@/lib/utils";
import { trekData } from "@/lib/data/treks";

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
        duration: 2.5,
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
        "py-16 px-6 text-center group",
      )}
    >
      {/* Organic divider */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 h-16 w-px bg-linear-to-b from-transparent via-[#CBB79C]/40 to-transparent hidden md:block group-first:hidden" />

      {/* Number */}
      <div className="text-5xl md:text-7xl text-[#2B1F14] tracking-tight">
        {count}
        <span className="text-[#C9A24A] ml-1">{suffix}</span>
      </div>

      {/* Label */}
      <div className="mt-4 text-[11px] uppercase tracking-[0.3em] text-[#8C6B4A] font-semibold">
        {label}
      </div>
    </div>
  );
};

export const StatsStrip = () => {
  return (
    <section className="relative py-12 z-20">
      {/* Background wash */}
      <div className="absolute inset-0 backdrop-blur-md" />

      <div className="relative container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4">
          <StatItem value={127} label="Treks Completed" suffix="+" />
          <StatItem value={1799} label="Lives Changed" suffix="+" />
          <StatItem value={trekData.length} label="Mountain Ranges" />
          <StatItem value={4.5} label="Avg. Rating" />
        </div>
      </div>
    </section>
  );
};
