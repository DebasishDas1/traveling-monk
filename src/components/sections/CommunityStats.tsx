"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Mountain, Route, Heart } from "lucide-react";

const stats = [
  {
    icon: Users,
    label: "Members in Tribe",
    value: "2,500+",
    color: "text-saffron",
  },
  {
    icon: Mountain,
    label: "Summits Reached",
    value: "420",
    color: "text-parchment",
  },
  {
    icon: Route,
    label: "Miles Trekked",
    value: "15,800",
    color: "text-saffron",
  },
  {
    icon: Heart,
    label: "Lives Transformed",
    value: "100%",
    color: "text-parchment",
  },
];

export const CommunityStats = () => {
  return (
    <section className="py-24 bg-forest relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-saffron blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-parchment blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="flex flex-col items-center text-center group"
            >
              <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:bg-white/10`}>
                <stat.icon className={`size-8 ${stat.color}`} />
              </div>
              <h3 className="font-display text-4xl md:text-5xl text-white mb-2 tracking-tight">
                {stat.value}
              </h3>
              <p className="text-monk-muted text-xs uppercase tracking-[0.2em] font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
