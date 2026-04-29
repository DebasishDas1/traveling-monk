"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useUiStore } from "@/stores/uiStore";
import { cn } from "@/lib/utils";

export const Hero = () => {
  const setNavScrolled = useUiStore((state) => state.setNavScrolled);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 50) {
      setNavScrolled(true);
    } else {
      setNavScrolled(false);
    }
  });

  return (
    <section className="relative h-dvh w-full overflow-hidden flex items-center justify-center">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/treks/hero-pic.jpg"
          alt="The Traveling Monk Hero"
          fill
          priority
          className="object-cover animate-ken-burns"
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-forest/40" />
      </div>

      {/* Content Stack */}
      <div className="relative z-10 container max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Eyebrow Pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="inline-flex items-center bg-saffron/20 text-saffron border border-saffron/30 rounded-full px-4 py-1.5 text-xs tracking-[0.2em] uppercase font-bold mb-8 backdrop-blur-sm"
          >
            Premium Treks · Transformational Travel
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-display italic text-6xl md:text-8xl text-white leading-[1.1] mb-6 drop-shadow-lg"
          >
            Walk until you
            <br />
            find yourself.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-sans font-light text-white/75 text-lg md:text-xl max-w-md mb-10 leading-relaxed"
          >
            Curated journeys through the world's most sacred landscapes,
            designed to challenge the body and quiet the mind.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              variant="saffron"
              size="lg"
              className="min-w-[180px] h-12 rounded-full font-bold uppercase tracking-widest"
            >
              Explore Treks →
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="min-w-[180px] h-12 rounded-full border-white font-bold uppercase tracking-widest"
            >
              Our Story
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-px h-12 bg-white/40 overflow-hidden">
          <div className="w-full h-full bg-saffron animate-scroll-pulse" />
        </div>
        <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] mt-3 font-medium">
          Scroll
        </span>
      </motion.div>
    </section>
  );
};
