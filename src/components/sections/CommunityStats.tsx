"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Users, Mountain, Route, Heart } from "lucide-react";

// ─── Types ─────────────────────────────────────────────────────────────────
interface Stat {
  icon: React.ElementType;
  label: string;
  value: number;
  display: string; // e.g. "2,500+" — shown after count-up
  suffix: string;
  prefix?: string;
  accent: "saffron" | "parchment";
}

const stats: Stat[] = [
  {
    icon: Users,
    label: "Members in Tribe",
    value: 2500,
    display: "2,500+",
    suffix: "+",
    accent: "saffron",
  },
  {
    icon: Mountain,
    label: "Summits Reached",
    value: 420,
    display: "420",
    suffix: "",
    accent: "parchment",
  },
  {
    icon: Route,
    label: "Miles Trekked",
    value: 15800,
    display: "15,800",
    suffix: "",
    accent: "saffron",
  },
  {
    icon: Heart,
    label: "Lives Transformed",
    value: 100,
    display: "100%",
    suffix: "%",
    accent: "parchment",
  },
];

// ─── Single stat with count-up ─────────────────────────────────────────────
const StatItem = ({ stat, index }: { stat: Stat; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, stat.value, {
      duration: 2.2,
      ease: "easeOut",
      onUpdate: (v) => setCount(Math.floor(v)),
      onComplete: () => setDone(true),
    });
    return () => controls.stop();
  }, [isInView, stat.value]);

  const isSaffron = stat.accent === "saffron";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.12,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group flex flex-col items-center text-center px-6 py-12 relative"
    >
      {/* Vertical divider — hidden on first item */}
      {index > 0 && (
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-16 w-px bg-linear-to-b from-transparent via-white/10 to-transparent" />
      )}

      {/* Icon container */}
      <div
        className={`
          mb-6 p-4 rounded-2xl border transition-all duration-500
          group-hover:scale-110
          ${
            isSaffron
              ? "bg-saffron/10 border-saffron/20 group-hover:bg-saffron/20"
              : "bg-white/5 border-white/10 group-hover:bg-white/10"
          }
        `}
      >
        <stat.icon
          className={`size-7 ${isSaffron ? "text-saffron" : "text-parchment"}`}
          aria-hidden="true"
        />
      </div>

      {/* Count-up number */}
      <p
        className={`font-display text-5xl md:text-6xl font-semibold tracking-tight mb-2 ${
          isSaffron ? "text-saffron" : "text-parchment"
        }`}
        aria-label={stat.display}
      >
        {done
          ? stat.display
          : `${stat.prefix ?? ""}${count.toLocaleString()}${stat.suffix}`}
      </p>

      {/* Label */}
      <p className="text-white/50 text-[11px] uppercase tracking-[0.22em] font-bold">
        {stat.label}
      </p>
    </motion.div>
  );
};

// ─── Section ───────────────────────────────────────────────────────────────
export const CommunityStats = () => (
  <section
    className="relative py-4 bg-forest overflow-hidden"
    aria-label="Community statistics"
  >
    {/* Ambient glows — forest-safe colours */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-saffron/8 blur-[100px]" />
      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 rounded-full bg-parchment/5 blur-[100px]" />
    </div>

    <div className="container mx-auto max-w-7xl px-4 relative z-10">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, i) => (
          <StatItem key={stat.label} stat={stat} index={i} />
        ))}
      </div>
    </div>
  </section>
);
