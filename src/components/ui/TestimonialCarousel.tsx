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
  testimonials = [],
}: {
  testimonials?: Testimonial[];
}) => {
  const items = testimonials;
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const length = items.length;
  const isSingle = length <= 1;

  const next = useCallback(() => {
    setActive((p) => (p + 1) % length);
  }, [length]);

  useEffect(() => {
    if (isPaused || isSingle) return;
    const interval = setInterval(next, 8000);
    return () => clearInterval(interval);
  }, [isPaused, next, isSingle]);

  if (!length) return null;

  return (
    <section
      className="relative py-32 px-6 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* ambient parchment atmosphere */}
      <div className="absolute inset-0 -z-10" />

      {/* Section Header */}
      <SectionHeader title="Returned. Changed." subtitle="What Monks Say" />

      <div className="max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="relative p-10 md:p-16 rounded-[40px]
            bg-linear-to-br from-[#F7F1E6] via-[#EFE3D1] to-[#E6D3BC]
            border border-[var(--color-parchment-dark)]
            shadow-[0_15px_60px_rgba(60,45,30,0.1)]"
          >
            {/* Opening quote seal */}
            <div
              className="mb-8  text-6xl text-[var(--color-accent)]/30 leading-none select-none"
              aria-hidden="true"
            >
              “
            </div>

            {/* Quote body */}
            <p className=" text-xl md:text-3xl text-[var(--color-primary)] leading-[1.8] mb-12">
              {testimonials[active].quote}
            </p>

            {/* Author */}
            <div className="flex items-center gap-5 pt-8 border-t border-[#D8C4A8]/60">
              <div className="space-y-1">
                <p className="font-bold text-lg text-[var(--color-primary)] tracking-wide">
                  {testimonials[active].name}
                </p>
                <p className="text-[11px] uppercase tracking-[0.3em] text-[#7A6A58]">
                  {testimonials[active].designation}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        {!isSingle && (
          <div className="flex items-center justify-center gap-4 mt-12">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className="group relative py-2 px-1"
              >
                <div
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === active
                      ? "w-8 bg-[var(--color-accent)]"
                      : "w-1.5 bg-[var(--color-parchment-dark)]/40"
                  }`}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
