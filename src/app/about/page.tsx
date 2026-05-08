import { getImageSrc } from "@/lib/utils";
import Image from "next/image";
import { Metadata } from "next";
import { Award, MessageCircle, ShieldCheck } from "lucide-react";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Story | The Traveling Monk",
  description:
    "Meet the IMF-certified guides and philosophy behind The Traveling Monk — a Himalayan trekking company built on transformation, community, and the silence of the mountains.",
  alternates: {
    canonical: "/about",
  },
  keywords: [
    "about the traveling monk",
    "himalayan trekking guides india",
    "IMF certified trek guide",
    "transformational trekking company",
    "akash mukherjee traveling monk",
  ],
  openGraph: {
    title: "Our Story | The Traveling Monk",
    description:
      "IMF-certified guides. A decade in the Himalayas. One mission: to help you find the monk inside.",
    images: [
      {
        url: "/images/about/about-hero.jpg",
        width: 1200,
        height: 630,
        alt: "The Traveling Monk guides in the Himalayas",
      },
    ],
  },
};

const founders = [
  {
    name: "Akash Mukherjee",
    role: "Experience Lead",
    intro:
      "Started as a trekker dealing with burnout. After years in the Himalayas, now designs journeys that are simple, safe, and meaningful.",
    image: "/images/about/founder-1.png",
    exp: "10+ Years",
    certs: "IMF Certified",
    treks: "150+ Treks Led",
    responsibility: "Designing your overall trek experience",
  },
  {
    name: "Debasish Das",
    role: "Operations & Routes",
    intro:
      "Plans routes and handles logistics so your trek runs smoothly. Focused on clarity, timing, and consistency.",
    image: "/images/about/founder-2.png",
    exp: "5+ Years",
    certs: "WFA Advanced",
    treks: "100+ Treks Led",
    responsibility: "Planning routes and managing logistics",
  },
  {
    name: "Subarna Banik",
    role: "Wellbeing & Pace",
    intro:
      "Keeps the journey balanced. Helps you manage pace, breathing, and mental comfort during the trek.",
    image: "/images/about/founder-3.jpeg",
    exp: "8+ Years",
    certs: "NOLS, Yoga Alliance",
    treks: "120+ Treks Led",
    responsibility: "Group comfort and mental well-being",
  },
  {
    name: "Saikat Saha",
    role: "Safety Lead",
    intro:
      "10+ years in high-altitude trekking. Handles safety, terrain decisions, and emergency response.",
    image: "/images/about/founder-4.jpeg",
    exp: "12+ Years",
    certs: "HMI Advanced, Rescue",
    treks: "200+ Treks Led",
    responsibility: "On-ground safety and emergency decisions",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-parchment">
      {/* 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/about-hero.jpg"
            alt="Himalayan mountain landscape — The Traveling Monk about page"
            fill
            priority
            sizes="100vw"
            quality={60}
            className="object-cover"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center px-6">
          <p className="sr-only">
            About The Traveling Monk — our story, philosophy, and team
          </p>
          <h1 className="font-display italic text-6xl md:text-9xl text-white leading-tight drop-shadow-2xl">
            The monk in all of us.
          </h1>
        </div>
      </section>

      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* HEADER */}
          <div className="text-center max-w-2xl mx-auto mb-24">
            <h2 className="font-display text-5xl md:text-6xl italic text-forest">
              We started as trekkers, just like you
            </h2>
            <p className="text-stone-500 mt-6 text-lg leading-relaxed">
              No experts. No gurus. Just people who kept coming back to the
              mountains until it became a way of life.
            </p>
          </div>

          {/* FOUNDERS */}
          <div className="space-y-24">
            {founders.map((f, i) => {
              const reverse = i % 2 !== 0;

              return (
                <div
                  key={f.name}
                  className={`grid md:grid-cols-2 gap-16 items-center ${
                    reverse ? "md:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* IMAGE */}
                  <div className="relative">
                    <div className="relative aspect-4/5 rounded-3xl overflow-hidden">
                      <Image
                        src={f.image}
                        alt={f.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover rounded-[2.5rem]"
                      />
                    </div>

                    {/* VERIFIED BADGE */}
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-[10px] font-bold shadow">
                      Verified Guide
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-display text-3xl text-forest">
                        {f.name}
                      </h3>
                      <p className="text-xs uppercase tracking-widest text-saffron mt-2 font-bold">
                        {f.role}
                      </p>
                    </div>

                    {/* INTRO */}
                    <p className="text-stone-600 leading-relaxed text-base">
                      {f.intro}
                    </p>

                    {/* RESPONSIBILITY */}
                    <p className="text-sm text-stone-500 italic">
                      Responsible for: {f.responsibility}
                    </p>

                    <div className="w-12 h-px bg-stone-200" />

                    {/* TRUST STATS */}
                    <div className="flex flex-wrap gap-3">
                      <span className="text-[10px] px-3 py-1 rounded-full bg-stone-100 font-bold">
                        {f.exp}
                      </span>
                      <span className="text-[10px] px-3 py-1 rounded-full bg-stone-100 font-bold">
                        {f.certs}
                      </span>
                      <span className="text-[10px] px-3 py-1 rounded-full bg-stone-100 font-bold">
                        {f.treks}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* FOOTNOTE TRUST */}
          <div className="text-center mt-32 max-w-xl mx-auto">
            <p className="text-stone-500 text-sm leading-relaxed">
              Small teams. Certified guides. Years of experience in the
              Himalayas. We keep things simple, safe, and well-organized so you
              can focus on the journey.
            </p>
          </div>
        </div>
      </section>

      {/* 3. THE PHILOSOPHY ───────────────────────────────────────────── */}
      <section
        className="bg-monk-dark py-32 px-6 relative overflow-hidden"
        // FIX: aria-label helps screen readers and is a minor crawl signal.
        aria-label="Our trekking philosophy"
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-saffron/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest/20 blur-[120px]" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="sr-only">Our Philosophy</h2>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                num: "01",
                title: "Discomfort is the door",
                desc: "We grow where we are challenged. The steep climb and the cold nights are not obstacles; they are the path to your breakthrough.",
              },
              {
                num: "02",
                title: "Community is the path",
                desc: "Shared silence is more powerful than solitary speech. We walk together to remind ourselves that we are never truly alone.",
              },
              {
                num: "03",
                title: "Silence is the teacher",
                desc: "The mountains speak in a language of stillness. We teach you to listen until the noise of the world fades away.",
              },
            ].map((pillar) => (
              <div
                key={pillar.num}
                className="relative p-12 rounded-[2rem] bg-white/3 border border-white/5 hover:border-saffron/20 transition-all duration-700"
              >
                <div className="font-display text-7xl text-saffron opacity-10 mb-6">
                  {pillar.num}
                </div>
                <h3 className="font-display text-2xl text-saffron mb-4">
                  {pillar.title}
                </h3>
                <p className="text-white/50 leading-relaxed font-sans font-light text-sm">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BY THE NUMBERS ───────────────────────────────────────────── */}
      <div className="py-10">
        <StatsStrip />
      </div>

      {/* 5. COMMUNITY CTA ────────────────────────────────────────────── */}
      <section className="py-32 px-6" aria-label="Join our community">
        <div className="container mx-auto max-w-6xl">
          <div className="relative rounded-[3rem] overflow-hidden bg-forest p-12 md:p-24 text-center shadow-2xl">
            <div className="absolute inset-0 z-0 opacity-20 grayscale">
              <div className="grid grid-cols-4 h-full w-full">
                {[
                  "1464822759023-fed622ff2c3b",
                  "1531233108376-7873d97c9c11",
                  "1500648767791-00dcc994a43e",
                  "1534528741775-53994a69daeb",
                  "1599566150163-29194dcaad36",
                  "1492562080023-ab3db95bfbce",
                  "1544005313-94ddf0286df2",
                  "1507003211169-0a1dd7228f2d",
                ].map((id, index) => (
                  <div key={index} className="relative h-full w-full">
                    <Image
                      src={getImageSrc(
                        `https://images.unsplash.com/photo-${id}`,
                      )}
                      alt=""
                      role="presentation"
                      fill
                      loading="lazy"
                      sizes="25vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-forest/70 z-1" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-10">
              {/* FIX: h2 keyword added. "Join 600+ Monks" has no search value. */}
              <h2 className="font-display text-5xl md:text-7xl text-white italic">
                Join 600+ Himalayan Trekkers
              </h2>
              <p className="text-white/70 text-lg md:text-xl font-light leading-[1.8]">
                Our community doesn't end with the trek. Join our private
                WhatsApp space for seasonal meetups, mental health circles, and
                early access to expeditions.
              </p>
              <div className="pt-6">
                <Button
                  variant="saffron"
                  size="lg"
                  className="h-16 px-12 rounded-full font-bold uppercase tracking-[0.2em] text-xs shadow-xl hover:scale-105 transition-all"
                >
                  <MessageCircle className="size-5 mr-3" /> Connect to Sangha
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
