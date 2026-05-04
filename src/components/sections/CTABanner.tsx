"use client";

import { useRef, useMemo } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const CTABanner = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // 🧠 Respect user's motion preference
  const shouldReduceMotion = useReducedMotion();

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? ["0%", "0%"] : ["-20%", "20%"],
  );

  // 🧠 Static content memo (tiny optimization)
  const content = useMemo(
    () => ({
      title: "Ready to find your way?",
      description:
        "Join our upcoming seasonal treks and begin your journey of transformation. Limited spots available for small group experiences.",
    }),
    [],
  );

  return (
    <section
      ref={containerRef}
      className="relative isolate h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden"
    >
      {/* 🌄 Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0 h-[140%] top-[-20%] will-change-transform"
        style={{ y }}
      >
        <Image
          src="/CTABanner_pic.jpg"
          alt="Mountain landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest/50" />
      </motion.div>

      {/* ✍️ Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.95 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-6xl text-white font-display italic mb-6">
            {content.title}
          </h2>

          <p className="text-white/80 text-lg md:text-xl font-sans font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            {content.description}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/treks">
              <Button
                variant="saffron"
                size="lg"
                className="h-14 px-10 rounded-full font-bold uppercase tracking-widest text-sm focus-visible:ring-2 focus-visible:ring-white"
              >
                Book Your Trek
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-10 rounded-full font-bold uppercase tracking-widest text-sm focus-visible:ring-2 focus-visible:ring-white"
              >
                Request Custom Trip
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
