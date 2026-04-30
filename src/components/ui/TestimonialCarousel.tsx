"use client";

import SectionHeader from "@/components/sections/SectionHeader";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const TestimonialCarousel = ({
  testimonials,
}: {
  testimonials: Testimonial[];
}) => {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  if (!testimonials?.length) return null;

  const length = testimonials.length;
  const isSingle = length <= 1;

  const next = useCallback(() => {
    setActive((p) => (p + 1) % length);
  }, [length]);

  useEffect(() => {
    if (isPaused || isSingle) return;
    const interval = setInterval(next, 7000);
    return () => clearInterval(interval);
  }, [isPaused, next, isSingle]);

  return (
    <section
      className="relative py-32 px-6 overflow-hidden bg-parchment"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Section Header */}
      <div className="text-center mb-16">
        <SectionHeader title="Returned. Changed." subtitle="What Monks Say" />
      </div>

      {/* Single Card */}
      <div className="max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-parchment-light border border-monk-brown-deep/10 rounded-3xl p-10 md:p-14 shadow-sm"
          >
            {/* Large opening quote mark */}
            <span
              className="block font-display text-saffron leading-none select-none mb-6"
              style={{ fontSize: "4rem", lineHeight: 1 }}
              aria-hidden="true"
            >
              "
            </span>

            {/* Quote body */}
            <p className="font-serif italic text-xl md:text-2xl text-monk-dark leading-relaxed mb-10">
              {testimonials[active].quote}
            </p>

            {/* Author */}
            <div className="flex items-center gap-4 pt-6 border-t border-monk-brown-deep/10">
              <div className="space-y-0.5">
                <p className="font-sans font-bold text-sm uppercase tracking-widest text-monk-dark">
                  {testimonials[active].name}
                </p>
                <p className="font-sans text-xs text-monk-muted tracking-wide">
                  {testimonials[active].designation}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dot Navigation */}
        {!isSingle && (
          <div className="flex items-center justify-center gap-3 mt-10">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  idx === active
                    ? "w-6 h-2 bg-saffron"
                    : "w-2 h-2 bg-monk-brown-deep/20 hover:bg-monk-brown-deep/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
