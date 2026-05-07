import { getImageSrc } from "@/lib/utils";
import Image from "next/image";
import { Metadata } from "next";
import { Award, MessageCircle, ShieldCheck } from "lucide-react";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Story | The Traveling Monk",
  description:
    "Learn about the philosophy and the people behind the mission to find the monk in all of us.",
  alternates: {
    canonical: "/about",
  },
};

const guides = [
  {
    name: "Debasish Das",
    role: "Lead Expedition Guide",
    exp: "5+ Years",
    certs: "IMF Certified, WFA Advanced",
    quote:
      "The mountain doesn't care about your ego. It only cares about your breath.",
    image: "/images/about/founder-2.png",
  },
  {
    name: "Subarna Banik",
    role: "Wilderness Specialist",
    exp: "8 Years",
    certs: "NOLS Mountaineering, Yoga Alliance",
    quote: "True strength is found in the moments between the climb.",
    image: "/images/about/founder-3.jpeg",
  },
  {
    name: "Saikat Saha",
    role: "Safety & Logistics",
    exp: "12 Years",
    certs: "HMI Basic & Advance, Rescue Specialist",
    quote: "Safety is not just a protocol; it's a state of mind.",
    image: "/images/about/founder-4.jpeg",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-parchment">
      {/* 1. HERO */}
      <section className="relative h-[65vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/about-hero.jpg"
            alt="Mountains"
            fill
            priority
            sizes="100vw"
            quality={85}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display italic text-6xl md:text-9xl text-white leading-tight drop-shadow-2xl">
            The monk in all of us.
          </h1>
        </div>
      </section>

      {/* 2. FOUNDER STORY */}
      <section className="py-24 md:py-32 px-6">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="relative">
            <div className="aspect-4/5 rounded-[2.5rem] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.2)] relative z-10">
              <Image
                src="/images/about/founder-1.png"
                alt="Founder Portrait"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Saffron accent border */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-saffron/40 rounded-[2.5rem] z-0" />
          </div>

          <div className="space-y-10">
            <h2 className="font-display italic text-4xl md:text-5xl text-forest leading-tight">
              "I started this because..."
            </h2>
            <div className="space-y-8 text-lg md:text-xl text-stone-600 leading-[1.8] font-sans font-light tracking-wide">
              <p>
                A decade ago, I was lost in the hum of the city. My calendar was
                full, but my life felt empty. I was chasing metrics and
                milestones that didn't matter, suffering from a deep, urban
                burnout that no weekend vacation could cure. I had forgotten
                what it felt like to be truly present.
              </p>
              <p>
                The turning point came on a solitary trek in the Upper
                Himalayas. Exhausted, freezing, and miles from the nearest
                signal, I found a silence so profound it was deafening. In that
                discomfort, something shifted. I wasn't just walking a trail; I
                was walking back to myself.
              </p>
              <p>
                The Traveling Monk is my mission to share that space with you.
                We don't just organize treks; we create environments for
                transformation. Our goal is to help you disconnect from the
                noise so you can finally hear the monk that has been waiting
                inside you all along.
              </p>
            </div>
            <div className="pt-6 border-t border-stone-100">
              <p className="font-display italic text-3xl text-forest tracking-wide">
                — Akash Mukherjee
              </p>
              <p className="text-[10px] uppercase tracking-[0.3em] text-stone-400 mt-3 font-bold">
                Founder, The Traveling Monk
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PHILOSOPHY */}
      <section className="bg-monk-dark py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-saffron/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest/20 blur-[120px]" />

        <div className="container mx-auto max-w-6xl relative z-10">
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

      {/* 4. THE TEAM */}
      <section className="py-32 px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <span className="text-stone-400 text-[10px] uppercase tracking-[0.5em] font-bold block mb-4">
              Our Custodians
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-forest italic">
              Stewards of the Stillness
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {guides.map((guide) => (
              <div key={guide.name} className="group">
                <div className="relative aspect-3/4 rounded-[2.5rem] overflow-hidden shadow-xl mb-8">
                  <Image
                    src={guide.image}
                    alt={guide.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-forest/90 via-forest/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  <div className="absolute bottom-8 left-8 right-8 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                    <p className="text-white text-base italic font-serif leading-relaxed">
                      “{guide.quote}”
                    </p>
                  </div>
                </div>
                <div className="space-y-4 px-2">
                  <div>
                    <h4 className="font-display text-2xl text-forest">
                      {guide.name}
                    </h4>
                    <p className="text-[10px] uppercase tracking-[0.25em] text-saffron font-bold mt-1">
                      {guide.role}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-4 pt-2 border-t border-stone-100">
                    <span className="flex items-center gap-2 text-[10px] text-stone-400 uppercase tracking-widest font-bold">
                      <Award className="size-3.5 text-saffron" /> {guide.exp}
                    </span>
                    <span className="flex items-center gap-2 text-[10px] text-stone-400 uppercase tracking-widest font-bold">
                      <ShieldCheck className="size-3.5 text-saffron" />{" "}
                      {guide.certs}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BY THE NUMBERS */}
      <div className="py-20 border-y border-stone-100">
        <StatsStrip />
      </div>

      {/* 6. COMMUNITY CTA */}
      <section className="py-32 px-6">
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
                      alt="community"
                      fill
                      sizes="25vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-forest/70 z-1" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-10">
              <h2 className="font-display text-5xl md:text-7xl text-white italic">
                Join 600+ Monks
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
