import Image from "next/image";
import { TrekGrid } from "@/components/sections/TrekGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Himalayan Treks 2025–26 | Beginner to Advanced | The Traveling Monk",
  description:
    "Explore curated Himalayan treks in Himachal Pradesh and Uttarakhand. Beginner, intermediate, and advanced expeditions — Kheerganga, Hampta Pass, Triund, Bali Pass & more.",
  alternates: {
    canonical: "/treks",
  },
  keywords: [
    "himalayan treks india",
    "himachal pradesh trekking packages",
    "uttarakhand treks",
    "beginner treks himalayas",
    "trekking company india",
    "kheerganga trek",
    "hampta pass trek",
    "triund trek",
  ],
  openGraph: {
    title: "Himalayan Treks | The Traveling Monk",
    description:
      "Curated seasonal treks through the Himalayas. Beginner to advanced. Book your next expedition.",
    images: [
      {
        url: "/images/treks/treks-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Himalayan trekking trails — The Traveling Monk",
      },
    ],
  },
};

export default function TreksPage() {
  return (
    <main className="min-h-screen bg-parchment">
      {/* Hero Header ──────────────────────────────────────────────────── */}
      <section
        className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden"
        aria-label="Treks page hero"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/treks/treks-hero.jpg"
            alt="Himalayan mountain trekking landscape — browse all treks"
            fill
            priority
            quality={75}
            sizes="(max-width: 768px) 768px, (max-width: 1440px) 1440px, 1920px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-forest/50" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-display italic text-6xl md:text-8xl text-white leading-[1.1] mb-6 drop-shadow-2xl">
            <span className="sr-only">Himalayan Treks — </span>
            Find your trail.
          </h1>

          <p className="font-sans font-light text-white/80 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
            Curated Himalayan trekking expeditions in Himachal Pradesh and
            Uttarakhand — beginner to advanced, year-round.
          </p>
        </div>
      </section>

      {/* Filter Bar & Trek Grid (Client Component) ───────────────────── */}
      <TrekGrid />

      {/* Decorative footer gradient */}
      <div className="h-40 bg-linear-to-b from-parchment to-monk-beige/30" />
    </main>
  );
}
