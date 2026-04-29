import Image from "next/image";
import { TrekGrid } from "@/components/sections/TrekGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore Treks | The Traveling Monk",
  description:
    "Browse our curated seasonal treks through the Himalayas and beyond. Beginner to advanced expeditions available.",
};

export default function TreksPage() {
  return (
    <main className="min-h-screen bg-parchment">
      {/* 🏞️ Hero Header */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=2000"
            // src="/images/treks-header.jpg" // User requested path
            alt="Mountains"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-forest/50 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="font-display italic text-6xl md:text-8xl text-white leading-[1.1] mb-6 drop-shadow-2xl">
            Find your trail.
          </h1>
          <p className="font-sans font-light text-white/80 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto drop-shadow-lg">
            Every trek is designed to push you further than you thought
            possible.
          </p>
        </div>
      </section>

      {/* 🗺️ Filter Bar & Grid (Client Component) */}
      <TrekGrid />

      {/* 🏔️ Decorative Footer Element */}
      <div className="h-40 bg-linear-to-b from-parchment to-monk-beige/30" />
    </main>
  );
}
