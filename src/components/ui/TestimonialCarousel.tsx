"use client";

import SectionHeader from "@/components/sections/SectionHeader";
import { useState, useEffect, useCallback, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";

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

  const prev = useCallback(() => {
    setActive((p) => (p - 1 + length) % length);
  }, [length]);

  const activeTestimonial = useMemo(
    () => testimonials[active],
    [testimonials, active],
  );

  useEffect(() => {
    if (isPaused || isSingle) return;

    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [isPaused, next, isSingle]);

  return (
    <section
      className="relative py-60 overflow-hidden flex items-center flex-col"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 🏷 Title */}
      <div className="relative z-10 text-center mb-16 px-6">
        <SectionHeader
          title="Testimonials"
          subtitle="What people are saying about us"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* 🖼 Image */}
        <div className="relative h-[420px] w-full max-w-md mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.src}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={activeTestimonial.src}
                alt={activeTestimonial.name}
                fill
                priority
                className="object-cover rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 rounded-3xl bg-linear-to-t from-black/20 to-transparent" />
        </div>

        {/* ✍️ Text */}
        <div className="flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xl md:text-2xl leading-relaxed text-forest/90 font-serif italic">
                “{activeTestimonial.quote}”
              </p>

              <div className="mt-10">
                <p className="text-base font-semibold text-forest">
                  {activeTestimonial.name}
                </p>
                <p className="text-sm text-forest/60">
                  {activeTestimonial.designation}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* 🎮 Controls */}
          <div className="flex gap-4 mt-12">
            <button
              onClick={prev}
              disabled={isSingle}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-forest/20 hover:border-saffron transition disabled:opacity-40"
            >
              <ArrowLeft className="size-4 text-forest group-hover:-translate-x-1 transition" />
            </button>

            <button
              onClick={next}
              disabled={isSingle}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-forest/20 hover:border-saffron transition disabled:opacity-40"
            >
              <ArrowRight className="size-4 text-forest group-hover:translate-x-1 transition" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
