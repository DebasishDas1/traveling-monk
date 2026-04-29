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
      <div className="container mx-auto max-w-7xl relative z-10 text-center">
        <div className="mb-24">
          <SectionHeader title="The Monk Method" subtitle="The Process" />
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-8">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px border-t border-dashed border-monk-muted/30 z-0" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              {/* Number Circle */}
              <div className="size-20 rounded-full bg-saffron flex items-center justify-center text-forest font-display text-3xl mb-10 shadow-lg ring-8 ring-parchment/30">
                {index + 1}
              </div>

              <h3 className="font-display text-2xl text-forest mb-4">
                {step.title}
              </h3>
              <p className="font-sans font-medium text-monk-muted text-[13px] leading-relaxed max-w-[200px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
