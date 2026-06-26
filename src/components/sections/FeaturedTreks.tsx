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
      {/* ambient background wash */}
      <div className="absolute inset-0 -z-10" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <SectionHeader
          title="Choose your trail"
          subtitle="Upcoming Experiences"
        />

        {/* Cards */}
        <div className="relative">
          {/* subtle background glow to separate section */}
          <div
            className="absolute inset-0 -z-10 
            bg-[radial-gradient(circle_at_center,rgba(120,90,60,0.06),transparent_70%)]"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
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
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={{ y: -8 }}
                  className="group relative will-change-transform"
                >
                  {/* soft outer aura */}
                  <div
                    className="absolute inset-0 rounded-[40px] 
                    bg-[radial-gradient(circle,rgba(0,0,0,0.06),transparent_70%)]
                    opacity-0 group-hover:opacity-100 
                    transition duration-700 blur-2xl"
                  />

                  {/* perspective lift */}
                  <div className="transform-gpu transition duration-700 group-hover:scale-[1.01]">
                    <TrekCard trek={trek} index={index} />
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-28 text-center">
          <Link
            href="/treks"
            className="group inline-flex items-center gap-4 text-[#2B1F14] font-bold  tracking-[0.2em] text-sm hover:text-[#8C6B4A] transition-all"
          >
            <span className="relative">
              Explore more paths
              <span className="absolute left-0 -bottom-2 w-0 h-px bg-[#CBB79C] transition-all duration-500 group-hover:w-full" />
            </span>

            <div className="size-10 rounded-full border border-[#CBB79C] flex items-center justify-center group-hover:bg-[#FAF6EF] transition-all">
              <ArrowRight className="size-4 transition-transform duration-500 group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};
