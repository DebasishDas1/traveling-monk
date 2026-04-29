"use client";

import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Choose Your Path",
    description:
      "Browse our curated treks based on difficulty, duration, and the type of transformation you seek.",
  },
  {
    title: "Prepare Your Mind",
    description:
      "Receive our signature pre-trek orientation and gear guide to ensure you're ready for the journey.",
  },
  {
    title: "The Ascent",
    description:
      "Walk with our expert guides and a small group of like-minded souls through majestic landscapes.",
  },
  {
    title: "The Integration",
    description:
      "Return home with new perspectives and a community that supports your continued growth.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="relative py-32 px-6 bg-parchment-texture overflow-hidden">
      {/* Texture Overlay is handled by the class in globals.css */}

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="mb-20 text-center">
          <span className="text-saffron text-xs font-bold uppercase tracking-[0.3em] block mb-4">
            The Process
          </span>
          <h2 className="text-4xl md:text-5xl text-forest font-display italic">
            How we walk together.
          </h2>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px border-t border-dashed border-forest/20 z-0" />

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
              <div className="size-20 rounded-full bg-white border border-saffron/30 flex items-center justify-center text-saffron font-display text-2xl mb-8 shadow-sm group-hover:bg-saffron group-hover:text-white transition-colors">
                {index + 1}
              </div>

              <h3 className="font-display text-2xl text-forest mb-4">
                {step.title}
              </h3>
              <p className="font-sans font-light text-stone-600 text-sm leading-relaxed max-w-[240px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
