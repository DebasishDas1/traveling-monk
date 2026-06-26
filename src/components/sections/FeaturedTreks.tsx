"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import TrekCard from "./TrekCard";
import { trekData } from "@/lib/data/treks";
import { Button } from "../ui/button";

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
        <Link href="/treks" className="flex justify-center mt-10">
          <Button variant="ghost" size="lg">
            Explore more paths
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </section>
  );
};
