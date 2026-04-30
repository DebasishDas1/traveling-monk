"use client";

import { motion } from "framer-motion";
import { getFeaturedTreks } from "@/lib/trek-utils";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import TrekCard from "./TrekCard";

export const FeaturedTreks = () => {
  const treks = getFeaturedTreks();

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {treks.map((trek, index) => (
            <motion.div
              key={trek.slug}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: index * 0.08,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="will-change-transform"
            >
              <TrekCard trek={trek} index={index} />
            </motion.div>
          ))}
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
