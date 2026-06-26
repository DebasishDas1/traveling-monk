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
    <main className="min-h-screen">
      {/* Hero Header */}
      <section
        className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden"
        aria-label="Treks page hero"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/treks/treks-hero.jpg"
            alt="Himalayan mountain trekking landscape"
            fill
            priority
            fetchPriority="high"
            quality={75}
            sizes="100vw"
            className="object-cover scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#1f1510]/80 via-[#1f1510]/30 to-transparent" />
          <div className="absolute inset-0 bg-[#7a5a3a]/20 mix-blend-multiply" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mt-12">
          <h1 className="  text-6xl md:text-8xl text-white leading-tight mb-6">
            <span className="sr-only">Himalayan Treks — </span>
            Find your trail.
          </h1>

          <p className=" text-white/80 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto drop-shadow-md">
            Curated Himalayan trekking expeditions in Himachal Pradesh and
            Uttarakhand — beginner to advanced.
          </p>
        </div>
      </section>

      {/* Filter Bar & Trek Grid (Client Component) */}
      <TrekGrid />
    </main>
  );
}
