"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import TrekCard from "./TrekCard";
import { trekData } from "@/lib/data/treks";

export const FeaturedTreks = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* 🌾 Base parchment */}
      <div className="absolute inset-0" />

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="mb-24 text-center">
          <SectionHeader
            title="Choose your trail"
            subtitle="Upcoming Experiences"
          />

          {/* subtle underline */}
          <div className="mt-6 w-16 h-px mx-auto bg-saffron/60" />
        </div>

        {/* Cards */}
        <div className="relative">
          {/* subtle background glow to separate section */}
          <div
            className="absolute inset-0 -z-10 
    bg-[radial-gradient(circle_at_center,rgba(120,90,60,0.08),transparent_70%)]"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {trekData
              .filter((t) => t.featured)
              .map((trek, index) => (
                <motion.div
                  key={trek.slug}
                  initial={{ opacity: 0, y: 60, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    delay: index * 0.1,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -6 }}
                  className="group relative will-change-transform"
                >
                  {/* soft outer glow / aura */}
                  <div
                    className="absolute inset-0 rounded-[36px] 
            bg-[radial-gradient(circle,rgba(0,0,0,0.08),transparent_70%)]
            opacity-0 group-hover:opacity-100 
            transition duration-500 blur-xl"
                  />

                  {/* slight perspective layering */}
                  <div
                    className="transform-gpu transition duration-500 
            group-hover:scale-[1.01]"
                  >
                    <TrekCard trek={trek} index={index} />
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <Link
            href="/treks"
            className="group inline-flex items-center gap-3 text-forest font-semibold uppercase tracking-[0.25em] text-xs hover:text-saffron transition-colors"
          >
            <span className="relative">
              View all treks
              <span className="absolute left-0 -bottom-1 w-0 h-px bg-saffron transition-all duration-300 group-hover:w-full" />
            </span>

            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </div>
      </div>
    </section>
  );
};
