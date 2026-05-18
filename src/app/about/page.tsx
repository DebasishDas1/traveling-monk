import Image from "next/image";
import { Metadata } from "next";
import { MessageCircle } from "lucide-react";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Our Story | The Traveling Monk",
  description:
    "Meet the IMF-certified guides and philosophy behind The Traveling Monk — a Himalayan trekking company built on transformation, community, and the silence of the mountains.",
};

const founders = [
  {
    name: "Akash Mukherjee",
    role: "Experience Lead",
    intro:
      "Started as a trekker dealing with burnout. After years in the Himalayas, now designs journeys that are simple, safe, and meaningful.",
    image: "/images/about/founder-1.png",
    exp: "10+ Years Experience",
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
    exp: "5+ Years Experience",
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
    exp: "8+ Years Experience",
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
    exp: "12+ Years Experience",
    certs: "HMI Advanced, Rescue",
    treks: "200+ Treks Led",
    responsibility: "On-ground safety and emergency decisions",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about/about-hero.jpg"
            alt="Himalayan landscape"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={60}
            className="object-cover scale-105"
          />

          <div className="absolute inset-0 bg-linear-to-t from-[#1f1510]/80 via-[#1f1510]/30 to-transparent" />
          <div className="absolute inset-0 bg-[#7a5a3a]/20 mix-blend-multiply" />
        </div>

        <h1 className="relative z-10 font-serif italic text-6xl md:text-8xl text-white text-center px-6 leading-tight">
          Every monk has an origin story.
        </h1>
      </section>

      {/* FOUNDERS */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center max-w-2xl mx-auto mb-28">
            <h2 className="font-serif text-5xl md:text-6xl italic text-[#2B1F14]">
              We started as trekkers
            </h2>
            <p className="text-[#6B5A4A] mt-6 leading-relaxed">
              No experts. No gurus. Just people who kept returning to the
              mountains.
            </p>
          </div>

          <div className="space-y-32">
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
                    <div className="relative aspect-4/5 rounded-[32px] overflow-hidden shadow-[0_25px_80px_rgba(40,30,20,0.25)]">
                      <Image
                        src={f.image}
                        alt={f.name}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={60}
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="space-y-8">
                    <div>
                      <h3 className="font-serif text-3xl md:text-4xl text-[#2B1F14]">
                        {f.name}
                      </h3>
                      <p className="text-[11px] uppercase tracking-[0.35em] text-[#8C6B4A] mt-3 font-semibold">
                        {f.role}
                      </p>
                    </div>

                    <p className="text-[#4A3A2A] leading-[1.9] text-[15px] font-serif">
                      {f.intro}
                    </p>

                    <p className="text-[12px] italic text-[#7A6A58]">
                      Responsible for — {f.responsibility}
                    </p>

                    <div className="flex items-center gap-2">
                      <span className="w-8 h-px bg-[#CBB79C]" />
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8C6B4A]" />
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {[f.exp, f.certs, f.treks].map((item, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-4 py-1.5 rounded-full bg-[#F3ECE3] border border-[#E0D0BA] text-[#5C4A3D]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="bg-[#1f1510] py-32 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-3 gap-10">
          {[
            {
              num: "01",
              title: "Discomfort is the door",
              desc: "Growth begins where comfort ends.",
            },
            {
              num: "02",
              title: "Community is the path",
              desc: "Shared journeys create deeper connections.",
            },
            {
              num: "03",
              title: "Silence is the teacher",
              desc: "Stillness reveals what noise hides.",
            },
          ].map((p) => (
            <div
              key={p.num}
              className="relative p-12 rounded-[32px]
              bg-linear-to-br from-white/5 to-white/2
              border border-white/10
              hover:border-[#C9A24A]/30 transition-all duration-700"
            >
              <div
                className="absolute inset-0 opacity-0 hover:opacity-100 
                bg-[radial-gradient(circle,rgba(201,162,74,0.15),transparent_70%)]
                transition duration-700 blur-xl"
              />

              <div className="text-6xl text-[#C9A24A]/20 mb-6">{p.num}</div>
              <h3 className="text-xl text-[#C9A24A] mb-4 font-serif">
                {p.title}
              </h3>
              <p className="text-white/60 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="py-16">
        <StatsStrip />
      </div>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div
            className="relative rounded-[40px] overflow-hidden 
            bg-linear-to-br from-[#1f1510] via-[#2B1F14] to-[#1a120d]
            p-16 md:p-24 text-center 
            shadow-[0_40px_120px_rgba(0,0,0,0.5)]"
          >
            <div className="relative z-10 space-y-10 max-w-2xl mx-auto">
              <h2 className="font-serif text-5xl md:text-7xl text-white italic">
                Join 600+ Himalayan Trekkers
              </h2>

              <p className="text-white/70 leading-relaxed">
                The journey continues beyond the mountains. Stay connected.
              </p>

              <Button className="h-16 px-14 rounded-full uppercase tracking-[0.3em] text-xs">
                <MessageCircle className="size-5 mr-3" />
                Connect to Sangha
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
