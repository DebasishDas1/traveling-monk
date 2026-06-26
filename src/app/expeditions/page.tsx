import Image from "next/image";
import { Metadata } from "next";
import { ExpeditionGrid } from "@/components/sections/ExpeditionGrid";

export const metadata: Metadata = {
  title: "International Expeditions 2025–26 | The Traveling Monk",
  description:
    "Curated international expeditions across Nepal, Bhutan, Japan, Patagonia and beyond. Purposeful journeys crafted for modern explorers.",
  alternates: {
    canonical: "/expeditions",
  },
  keywords: [
    "international expeditions",
    "adventure travel",
    "Nepal expedition",
    "Bhutan tours",
    "Patagonia trekking",
    "Japan travel",
    "premium travel company india",
  ],
  openGraph: {
    title: "International Expeditions | The Traveling Monk",
    description:
      "Beyond the Himalayas lies a world of extraordinary journeys. Discover our curated international expeditions.",
    images: [
      {
        url: "/images/expeditions/hero.jpg",
        width: 1200,
        height: 630,
        alt: "International Expeditions — The Traveling Monk",
      },
    ],
  },
};

export default function ExpeditionsPage() {
  return (
    <main className="min-h-screen bg-parchment">
      {/* Hero */}
      <section
        className="relative flex h-[50vh] items-center justify-center overflow-hidden md:h-[60vh]"
        aria-label="International Expeditions"
      >
        <div className="absolute inset-0">
          <Image
            src="/images/expeditions/hero.jpg"
            alt="International mountain expedition"
            fill
            priority
            fetchPriority="high"
            quality={75}
            sizes="(max-width:768px) 768px, (max-width:1440px) 1440px, 1920px"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <h1 className="font-display mb-6 text-6xl leading-[1.05] text-white drop-shadow-2xl md:text-8xl">
            The world is waiting.
          </h1>

          <p className="mx-auto max-w-2xl text-xl font-light leading-relaxed text-white/80 md:text-2xl">
            Venture beyond borders through thoughtfully curated expeditions,
            where every destination tells a story worth living.
          </p>
        </div>
      </section>

      <ExpeditionGrid />
    </main>
  );
}
