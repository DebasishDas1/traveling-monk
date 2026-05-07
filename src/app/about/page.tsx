import Image from "next/image";
import { Metadata } from "next";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { Button } from "@/components/ui/button";
import { MessageCircle, Award, ShieldCheck } from "lucide-react";
import PaperCut from "@/components/layout/PaperCut";

export const metadata: Metadata = {
  title: "Our Story | The Traveling Monk",
  description:
    "Learn about the philosophy and the people behind the mission to find the monk in all of us.",
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
    image: "/images/about/founder-4.jpeg",
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
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/about-hero.jpg"
            alt="Contact Hero"
            fill
            priority
            sizes="100vw"
            quality={60}
            placeholder="blur"
            blurDataURL="/dark-logo.png"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-forest/60" />

          {/* <PaperCut color="#dbc8ac" /> */}
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display italic text-6xl md:text-8xl text-white leading-tight drop-shadow-2xl">
            The monk in all of us.
          </h1>
        </div>
      </section>

      {/* 2. FOUNDER STORY */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="aspect-4/5 rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <Image
                src="/images/about/founder-1.png"
                alt="Founder Portrait"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Saffron accent border */}
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-saffron rounded-3xl z-0" />
          </div>

          <div className="space-y-8">
            <h2 className="font-display italic text-4xl text-forest">
              "I started this because..."
            </h2>
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-sans font-light">
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
                was walking back to myself. I realized that we don't need more
                entertainment; we need more space.
              </p>
              <p>
                The Traveling Monk is my mission to share that space with you.
                We don't just organize treks; we create environments for
                transformation. Our goal is to help you disconnect from the
                noise so you can finally hear the monk that has been waiting
                inside you all along.
              </p>
            </div>
            <div className="pt-4">
              <p className="font-display italic text-3xl text-forest tracking-wide">
                — Akash Mukherjee
              </p>
              <p className="text-xs uppercase tracking-widest text-stone-400 mt-2 font-bold">
                Founder, The Traveling Monk
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PHILOSOPHY */}
      <section className="bg-monk-dark py-32 px-6 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-saffron/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest/20 blur-[120px]" />

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-3 gap-12">
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
                className="relative p-10 rounded-3xl bg-white/5 border border-white/10 group hover:bg-white/8 transition-all duration-500"
              >
                <div className="absolute top-6 right-8 font-display text-8xl text-saffron opacity-20 pointer-events-none select-none">
                  {pillar.num}
                </div>
                <h3 className="font-display text-2xl text-saffron mb-4 relative z-10">
                  {pillar.title}
                </h3>
                <p className="text-white/60 leading-relaxed font-sans font-light relative z-10">
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
          <div className="mb-16 text-center">
            <span className="text-stone-400 text-[10px] uppercase tracking-[0.4em] font-bold block mb-4">
              Our Custodians
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-forest">
              The people who will get you there.
            </h2>
          </div>

          <div className="flex overflow-x-auto pb-12 gap-8 snap-x no-scrollbar md:grid md:grid-cols-3 md:overflow-visible">
            {guides.map((guide) => (
              <div key={guide.name} className="min-w-[300px] snap-center group">
                <div className="relative aspect-3/4 rounded-2xl overflow-hidden shadow-xl mb-6">
                  <Image
                    src={guide.image}
                    alt={guide.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-forest/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-6 left-6 right-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white text-sm italic font-serif leading-relaxed">
                      “{guide.quote}”
                    </p>
                  </div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-display text-xl text-forest">
                    {guide.name}
                  </h4>
                  <p className="text-[10px] uppercase tracking-widest text-saffron font-bold">
                    {guide.role}
                  </p>
                  <div className="flex flex-wrap gap-y-1 gap-x-3 pt-2">
                    <span className="flex items-center gap-1.5 text-[10px] text-stone-400 uppercase tracking-widest">
                      <Award className="size-3" /> {guide.exp}
                    </span>
                    <span className="flex items-center gap-1.5 text-[10px] text-stone-400 uppercase tracking-widest">
                      <ShieldCheck className="size-3" /> {guide.certs}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BY THE NUMBERS */}
      <div className="py-12 border-y border-stone-100">
        <StatsStrip />
      </div>

      {/* 6. COMMUNITY CTA */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="relative rounded-[40px] overflow-hidden bg-forest p-12 md:p-24 text-center">
            {/* Background Mosaic / Collage (Blurred) */}
            <div className="absolute inset-0 z-0 opacity-20 grayscale blur-sm">
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
                      src={`https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=40&w=400`}
                      alt="community"
                      fill
                      sizes="25vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-0 bg-forest/60 z-1" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <h2 className="font-display text-5xl md:text-7xl text-white">
                Join 600+ Monks
              </h2>
              <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed">
                Our community doesn't end with the trek. Join our private
                WhatsApp space for seasonal meetups, mental health circles, and
                early access to expeditions.
              </p>
              <div className="pt-6">
                <Button
                  variant="saffron"
                  size="lg"
                  className="h-16 px-12 rounded-full font-bold uppercase tracking-widest text-sm shadow-xl hover:scale-105 transition-all"
                >
                  <MessageCircle className="size-5 mr-3" /> Join
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
