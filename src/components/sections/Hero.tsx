"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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
          sizes="100vw"
          quality={60}
          className="object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-forest/40" />
      </div>
      <div className="relative z-10 container max-w-5xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center">
          <div className="inline-flex items-center bg-saffron/20 text-saffron border border-saffron/30 rounded-full px-4 py-1.5 text-xs tracking-[0.2em] uppercase font-bold mb-8">
            Premium Treks · Transformational Travel
          </div>
          <h1 className="font-display italic text-6xl md:text-8xl text-white leading-[1.1] mb-6 drop-shadow-lg">
            Walk until you
            <br />
            find yourself.
          </h1>
          <p className="font-sans font-light text-white/75 text-lg md:text-xl max-w-md mb-10 leading-relaxed">
            Curated journeys through the world's most sacred landscapes,
            designed to challenge the body and quiet the mind.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
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
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-px h-12 bg-white/20">
          <div className="w-full h-1/2 bg-saffron" />
        </div>
        <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] mt-3 font-medium">
          Scroll
        </span>
      </div>
    </section>
  );
};
