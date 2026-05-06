"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Trek } from "@/lib/treks";
import { cn } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// ─────────────────────────────────────────────────────────
// Per-trek curated gallery: hand-picked Unsplash photo IDs
// that evoke the specific landscape of each expedition.
// ─────────────────────────────────────────────────────────
const TREK_GALLERIES: Record<string, { hero: string; side: [string, string] }> =
  {
    kedarkantha: {
      // Kedarkantha: snow-draped Himalayan peaks, pine forests, winter light
      hero: "1506905925346-21bda4d32df4",
      side: ["1551632811-561732d1e306", "1464822759023-fed622ff2c3b"],
    },
    "chopta-tungnath": {
      // Chopta: misty alpine meadows, lush green ridgelines
      hero: "1455156218388-5e61287818dc",
      side: ["1470770841072-f978cf4d7821", "1519681393784-d120267933ba"],
    },
    "coorg-trek": {
      // Coorg: Western Ghats, rolling coffee estate hills, tropical mist
      hero: "1590523277543-a94d2e4eb00b",
      side: ["1592194996308-7b43878e84a6", "1586348943529-beaae6c28db9"],
    },
    "rupin-pass": {
      // Rupin Pass: dramatic waterfall, high-altitude snow crossover
      hero: "1501785888041-af3ef285b470",
      side: ["1544735716-392fe2489ffa", "1522163182402-834f871fd851"],
    },
    "valley-of-flowers": {
      // Valley of Flowers: technicolor wildflower meadows, glacial streams
      hero: "1464822759023-fed622ff2c3b",
      side: ["1506905925346-21bda4d32df4", "1470770841072-f978cf4d7821"],
    },
    "hampta-pass": {
      // Hampta Pass: the legendary contrast — lush Kullu vs arid Spiti
      hero: "1551632811-561732d1e306",
      side: ["1455156218388-5e61287818dc", "1519681393784-d120267933ba"],
    },
  };

// Fallback for any unrecognised slug
const FALLBACK_GALLERY = {
  hero: "1506905925346-21bda4d32df4",
  side: ["1551632811-561732d1e306", "1464822759023-fed622ff2c3b"] as [
    string,
    string,
  ],
};

const difficultyColor: Record<string, string> = {
  Beginner: "bg-emerald-500/90 text-white",
  Moderate: "bg-amber-500/90 text-white",
  Challenging: "bg-rose-600/90 text-white",
};

interface TrekHeroProps {
  trek: Trek;
}

export const TrekHero = ({ trek }: TrekHeroProps) => {
  const gallery = TREK_GALLERIES[trek.slug] ?? FALLBACK_GALLERY;
  const heroUrl = `https://images.unsplash.com/photo-${gallery.hero}?auto=format&fit=crop&q=85&w=1600`;
  const sideUrls = gallery.side.map(
    (id) =>
      `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=80&w=800`,
  );

  return (
    <section className="space-y-6 pt-4">
      {/* ── Breadcrumb ── */}
      <Breadcrumb className="pt-4 md:pl-2">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/treks">Expeditions</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{trek.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* ── Image Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 md:h-[82vh] md:min-h-[650px] md:max-h-[1000px]">
        {/* ⛰️ Cinematic Hero (Spans 8 or 9 cols depending on screen) */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="md:col-span-8 lg:col-span-9 relative h-[60vh] md:h-full overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.35)] group"
        >
          <Image
            src={heroUrl}
            alt={trek.name}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 75vw"
            className="object-cover object-center transition-transform duration-[14s] ease-in-out group-hover:scale-110 bg-stone-900"
          />

          {/* Rich gradient — much darker at the bottom for crisp text legibility */}
          <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-black/10" />
          {/* Subtle vignette sides */}
          <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-transparent" />

          {/* Bottom title block */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
              className="flex flex-wrap items-center gap-2 md:gap-3 mb-6"
            >
              <span className="backdrop-blur-md bg-white/10 border border-white/20 text-white px-3 py-1.5 md:px-5 md:py-2.5 rounded-full text-[9px] md:text-xs font-bold uppercase tracking-[0.25em] shadow-xl whitespace-nowrap">
                {trek.tier} Expedition
              </span>
              <span
                className={cn(
                  "px-3 py-1.5 md:px-5 md:py-2.5 rounded-full text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] shadow-xl backdrop-blur-md whitespace-nowrap",
                  difficultyColor[trek.difficulty] ?? "bg-white/20 text-white",
                )}
              >
                {trek.difficulty}
              </span>
              <span className="backdrop-blur-md bg-black/30 border border-white/10 text-white/90 px-3 py-1.5 md:px-5 md:py-2.5 rounded-full text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap">
                ↑ {trek.altitude}
              </span>
            </motion.div>

            {/* Saffron accent rule */}
            <motion.div
              initial={{ scaleX: 0, originX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.15, duration: 0.5, ease: "easeOut" }}
              className="w-16 md:w-20 h-[3px] bg-saffron mb-4 md:mb-8 rounded-full"
            />
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="space-y-4 md:space-y-6"
            >
              <h1 className="text-white font-display text-5xl md:text-8xl italic leading-[1.05] [text-shadow:0_4px_24px_rgb(0_0_0/60%)]">
                {trek.name}
              </h1>
              <p className="font-display text-saffron/90 text-xl md:text-3xl italic font-light tracking-wide [text-shadow:0_2px_12px_rgb(0_0_0/60%)]">
                {trek.tagline}
              </p>
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80 text-[11px] md:text-sm font-light tracking-[0.25em] uppercase pt-2 [text-shadow:0_2px_8px_rgb(0_0_0/80%)]">
                <span>{trek.region}</span>
                <span className="size-1 md:size-1.5 rounded-full bg-saffron/80" />
                <span>{trek.duration}</span>
                <span className="size-1 md:size-1.5 rounded-full bg-saffron/80" />
                <span>Max {trek.maxGroupSize} guests</span>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 🖼️ Side Gallery (Spans 4 or 3 cols depending on screen) */}
        <div className="md:col-span-4 lg:col-span-3 grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6">
          {sideUrls.map((url, i) => (
            <motion.div
              key={url}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.1 + i * 0.05,
                duration: 0.5,
                ease: "easeOut",
              }}
              className={cn(
                "relative overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.25)] group cursor-pointer",
                "h-[30vh] md:h-full",
              )}
            >
              <Image
                src={url}
                alt={`${trek.name} — landscape view ${i + 1}`}
                fill
                priority // Side images are also above the fold
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover object-center transition-transform duration-[10s] ease-in-out group-hover:scale-110 bg-stone-900"
              />
              {/* Dark overlay on hover */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Label chip */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-white/90 text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold [text-shadow:0_2px_8px_rgb(0_0_0/80%)]">
                  {i === 0 ? "Trail Landscape" : "Summit Vista"}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
