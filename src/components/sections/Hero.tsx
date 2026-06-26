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
          sizes="100vw"
          className="object-cover"
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-linear-to-t from-[var(--color-monk-dark)]/80 via-[var(--color-monk-dark)]/30 to-transparent" />
        <div className="absolute inset-0 bg-[var(--color-monk-muted)]/20 mix-blend-multiply" />
      </div>

      <div className="relative z-10 container max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/5 mb-10">
            <span className="text-[10px] uppercase tracking-[0.4em] text-white font-semibold">
              Premium Himalayan Expeditions
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl text-white leading-[1.05] mb-8 drop-shadow-2xl">
            Walk until you
            <br />
            find yourself.
          </h1>

          <p className="text-white/80 text-lg md:text-2xl max-w-2xl mb-12 leading-relaxed ">
            Curated journeys through the world&apos;s most sacred landscapes,
            designed to challenge the body and quiet the mind.
          </p>

          {/* CTA Buttons */}
          <div className="mt-2 flex flex-col gap-4 sm:flex-row">
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
