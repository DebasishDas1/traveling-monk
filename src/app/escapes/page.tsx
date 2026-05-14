import Image from "next/image";
import { Metadata } from "next";
import { EscapeGrid } from "@/components/sections/EscapeGrid";

export const metadata: Metadata = {
  title: "Escapes 2025–26 | The Traveling Monk",
  description:
    "Explore curated Himalayan escapes in Himachal Pradesh, Uttarakhand & more.",
  alternates: {
    canonical: "/escapes",
  },
  keywords: [
    "himalayan escapes india",
    "himachal pradesh escapes",
    "uttarakhand escapes",
    "beginner escapes himalayas",
    "travel company india",
  ],
  openGraph: {
    title: "Himalayan Escapes | The Traveling Monk",
    description:
      "Curated seasonal escapes through the Himalayas. Beginner to advanced. Book your next expedition.",
    images: [
      {
        url: "/images/treks/treks-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Himalayan escapes trails — The Traveling Monk",
      },
    ],
  },
};

export default function EscapesPage() {
  return (
    <main className="min-h-screen bg-parchment">
      {/* Hero Header ──────────────────────────────────────────────────── */}
      <section
        className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden"
        aria-label="Treks page hero"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/trip/trip-hero-pic.jpg"
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
            Rest is also a journey.
          </h1>

          <p className="font-sans font-light text-white/80 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
            Some places ask you to slow down, breathe, and arrive — not conquer.
          </p>
        </div>
      </section>
      <EscapeGrid />
    </main>
  );
}
