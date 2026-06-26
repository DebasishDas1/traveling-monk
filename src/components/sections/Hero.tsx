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
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/5 mb-10">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white font-semibold">
              Premium Himalayan Expeditions
            </span>
          </div>

          <h1 className=" text-6xl md:text-9xl text-white leading-[1.05] mb-8 drop-shadow-2xl">
            Walk until you
            <br />
            find yourself.
          </h1>

          <p className="text-white/80 text-lg md:text-2xl max-w-2xl mb-12 leading-relaxed ">
            Curated journeys through the world&apos;s most sacred landscapes,
            designed to challenge the body and quiet the mind.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-5">
            <Link href="/treks">
              <Button className="min-w-50 h-14 rounded-full transition-all">
                Explore Paths
              </Button>
            </Link>
            <Link href="/about">
              <Button
                variant="outline"
                className="min-w-50 h-14 rounded-full transition-all"
              >
                Our Story
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
