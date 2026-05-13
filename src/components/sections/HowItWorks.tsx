"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const steps = [
  {
    title: "Choose your trail",
    description: "Beginner, transformation, or premium — find your level",
  },
  {
    title: "We handle everything",
    description: "Safety, guides, food, stays — fully curated",
  },
  {
    title: "The journey begins",
    description: "Discomfort, community, breakthrough",
  },
  {
    title: "Return transformed",
    description: "Carry the monk mindset back home",
  },
];

export const HowItWorks = () => {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      {/* soft parchment wash */}
      <div className="absolute inset-0 -z-10" />

      <div className="container mx-auto max-w-7xl relative z-10 text-center">
        <SectionHeader title="The Monk Method" subtitle="The Process" />

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-linear-to-r from-transparent via-[#CBB79C] to-transparent opacity-40 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              {/* Number Seal */}
              <div
                className="size-24 rounded-full mb-10 flex items-center justify-center
                bg-[#F3E7D6] border border-[#E0D0BA]
                shadow-[0_10px_30px_rgba(60,45,30,0.08)]
                relative group"
              >
                {/* inner glow */}
                <div className="absolute inset-2 rounded-full border border-[#E0D0BA]/40" />

                <span className="font-serif italic text-4xl text-[#2B1F14]">
                  {index + 1}
                </span>
              </div>

              <h3 className="font-serif text-2xl text-[#2B1F14] mb-5">
                {step.title}
              </h3>
              <p className="font-serif italic text-[#6B5A4A] text-sm leading-relaxed max-w-[220px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
