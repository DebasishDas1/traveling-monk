"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

export const CTABanner = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <section
      ref={containerRef}
      className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 z-0 h-[140%] top-[-20%]"
      >
        <Image
          src="/images/cta-banner.jpg"
          alt="Mountain landscape"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest/50" />
      </motion.div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl text-white font-display italic mb-6">
            Ready to find your way?
          </h2>
          <p className="text-white/80 text-lg md:text-xl font-sans font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Join our upcoming seasonal treks and begin your journey of
            transformation. Limited spots available for small group experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              variant="saffron"
              size="lg"
              className="h-14 px-10 rounded-full font-bold uppercase tracking-widest text-sm"
            >
              Book Your Trek
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-14 px-10 rounded-full border-white text-white hover:bg-white hover:text-forest transition-colors font-bold uppercase tracking-widest text-sm"
            >
              Request Custom Trip
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
