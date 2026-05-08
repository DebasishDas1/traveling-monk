"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const Hero = () => {
  return (
    <section className="relative h-dvh w-full overflow-hidden flex items-center justify-center">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/treks/hero-pic.jpg"
          alt="The Traveling Monk — trek through sacred Himalayan landscapes"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          quality={80}
          className="object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-forest/40" />
      </div>
      <div className="relative z-10 container max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1,
              },
            },
          }}
          className="flex flex-col items-center"
        >
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center bg-saffron/20 text-saffron border border-saffron/30 rounded-full px-4 py-1.5 text-xs tracking-[0.2em] uppercase font-bold mb-8"
          >
            Premium Treks · Transformational Travel
          </motion.div>
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display italic text-6xl md:text-8xl text-white leading-[1.1] mb-6 drop-shadow-lg"
          >
            Walk until you
            <br />
            find yourself.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-sans font-light text-white/75 text-lg md:text-xl max-w-md mb-10 leading-relaxed"
          >
            Curated journeys through the world's most sacred landscapes,
            designed to challenge the body and quiet the mind.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="/treks">
              <Button
                variant="saffron"
                size="lg"
                className="min-w-[180px] h-12 rounded-full font-bold uppercase tracking-widest"
              >
                Explore Treks →
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                size="lg"
                className="min-w-[180px] h-12 rounded-full border-white font-bold uppercase tracking-widest"
              >
                Our Story
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center"
        style={{ animation: "fadeIn 1s ease 1s both" }}
      >
        <div className="w-px h-12 bg-white/40 overflow-hidden">
          <div className="w-full h-full bg-saffron animate-scroll-pulse" />
        </div>
        <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] mt-3 font-medium">
          Scroll
        </span>
      </div>
    </section>
  );
};
