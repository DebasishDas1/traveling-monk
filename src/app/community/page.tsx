import { Metadata } from "next";
import Image from "next/image";
import { CommunityStats } from "@/components/sections/CommunityStats";
import { CommunityVoices } from "@/components/sections/CommunityVoices";
import { Button } from "@/components/ui/button";
import { Mail, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Community | The Monk Tribe",
  description:
    "Join the Monk Tribe. A community of mountain lovers, seekers, and transformational travelers.",
};

export default function CommunityPage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/community-page.jpg"
          alt="Community Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-forest/60 via-forest/40 to-forest/80" />

        {/* Content */}
        <div className="mx-auto max-w-7xl px-6 relative z-10 text-center text-white">
          <div className="inline-block px-4 py-1.5 rounded-full bg-saffron/20 backdrop-blur-md border border-saffron/30 mb-8">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-saffron">
              Welcome to the Monk Tribe
            </span>
          </div>

          <h1 className="font-display text-6xl md:text-8xl italic leading-[0.9] mb-8">
            The wild is better <br />
            <span className="text-saffron">shared.</span>
          </h1>

          <p className="font-sans font-light text-white/80 text-xl md:text-2xl leading-relaxed max-w-2xl mx-auto mb-12">
            We are more than a trekking company. We are a collective of souls
            who find peace in the thin air and strength in the shared path.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              variant="saffron"
              size="lg"
              className="rounded-full px-10 py-8 text-lg font-bold group shadow-xl shadow-saffron/20 will-change-transform"
            >
              Join the Circle
              <ArrowRight className="ml-3 transition-transform group-hover:translate-x-1" />
            </Button>

            <div className="flex items-center gap-6">
              {[1, 2].map((_, i) => (
                <a
                  key={i}
                  href="#"
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Mail className="size-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
          <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">
            Explore Our World
          </span>
          <div className="w-px h-12 bg-linear-to-b from-saffron to-transparent animate-pulse" />
        </div>
      </section>

      {/* STATS */}
      <CommunityStats />

      {/* VOICES */}
      <CommunityVoices />

      {/* CTA */}
      <section className="py-32 bg-forest relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-5xl md:text-7xl text-white mb-8">
              Become a{" "}
              <span className="italic text-saffron">Traveling Monk</span>
            </h2>

            <p className="text-white/60 text-lg md:text-xl font-sans mb-12 leading-relaxed">
              Sign up for our monthly dispatch from the mountains. No spam, just
              stories, gear guides, and early access to limited edition treks.
            </p>

            {/* FORM */}
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="grow bg-white/5 border border-white/10 rounded-full px-8 py-5 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all"
              />

              <Button
                variant="saffron"
                className="rounded-full px-10 py-5 font-bold shadow-lg shadow-saffron/20"
              >
                Join Now
              </Button>
            </form>

            {/* SOCIAL ICONS */}
            <div className="mt-16 flex items-center justify-center gap-12 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
              {[1, 2, 3, 4].map((_, i) => (
                <Mail key={i} className="size-8 text-white cursor-pointer" />
              ))}
            </div>
          </div>
        </div>

        {/* Top Fade */}
        <div className="absolute top-0 inset-x-0 h-32 bg-linear-to-b from-parchment to-transparent opacity-10" />
      </section>
    </main>
  );
}
