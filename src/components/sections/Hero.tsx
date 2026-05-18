"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="relative h-dvh w-full overflow-hidden flex items-center justify-center">
      {/* Background Image Wrapper */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/treks/hero-pic.jpg"
          alt="The Traveling Monk"
          fill
          priority
          fetchPriority="high"
          sizes="(max-width: 1920px) 100vw, 1920px"
          quality={60}
          className="object-cover scale-105"
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-linear-to-t from-[#1f1510]/80 via-[#1f1510]/30 to-transparent" />
        <div className="absolute inset-0 bg-[#7a5a3a]/20 mix-blend-multiply" />
      </div>

      <div className="relative z-10 container max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center px-5 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-10">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#EADBC8] font-semibold">
              Premium Himalayan Expeditions
            </span>
          </div>

          <h1 className="font-serif italic text-6xl md:text-9xl text-white leading-[1.05] mb-8 drop-shadow-2xl">
            Walk until you
            <br />
            find yourself.
          </h1>

          <p className="font-serif text-[#FAF6EF]/80 text-lg md:text-2xl max-w-2xl mb-12 leading-relaxed italic">
            Curated journeys through the world&apos;s most sacred landscapes,
            designed to challenge the body and quiet the mind.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5">
            <Link href="/treks">
              <Button
                className="min-w-50 h-14 rounded-full bg-[#FAF6EF] text-[#2B1F14] hover:bg-white transition-all
                text-xs uppercase tracking-[0.3em] font-bold shadow-xl"
              >
                Explore Paths
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                className="min-w-50 h-14 rounded-full bg-monk-stone text-white hover:bg-white/10 transition-all
                text-xs uppercase tracking-[0.3em] font-bold"
              >
                Our Story
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-px h-16 bg-linear-to-b from-white/0 via-white/40 to-white/0" />
        <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] mt-4 font-medium">
          Scroll
        </span>
      </motion.div>
    </section>
  );
};
