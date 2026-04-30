"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

const voices = [
  {
    name: "Sarah Miller",
    location: "Hampta Pass, 2024",
    quote:
      "The silence at 14,000 feet isn't empty. It's full of answers you didn't know you were looking for. The Traveling Monk didn't just show me the mountains; they showed me myself.",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800",
    color: "bg-forest/40",
  },
  {
    name: "David Kumar",
    location: "Kashmir Great Lakes, 2023",
    quote:
      "I came for the views, but I stayed for the people. There's a special bond that forms when you're sharing a warm meal after a 10-hour trek. We're a tribe for life now.",
    image:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&q=80&w=800",
    color: "bg-monk-brown-deep/40",
  },
  {
    name: "Elena Rodriguez",
    location: "Annapurna Base Camp, 2025",
    quote:
      "Every step was a challenge, and every challenge was a lesson. The guides didn't just lead the way; they inspired us to find our own strength. An unforgettable transformation.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
    color: "bg-saffron/20",
  },
];

export const CommunityVoices = () => {
  return (
    <section className="py-32 bg-parchment-texture">
      <div className="container mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-forest text-sm font-bold uppercase tracking-[0.3em] mb-4">
              Voices of the Wild
            </h2>
            <h3 className="font-display text-5xl md:text-6xl text-forest leading-[1.1]">
              Shared Journeys, <br />
              <span className="italic text-monk-brown-warm">
                Unified Souls.
              </span>
            </h3>
          </div>

          <p className="text-forest/70 font-sans max-w-md text-lg leading-relaxed mb-2">
            The Monk Tribe is built on stories of resilience, friendship, and
            the profound transformation that only nature can provide.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {voices.map((voice, i) => (
            <motion.article
              key={voice.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                delay: i * 0.12,
                duration: 0.7,
                ease: "easeOut",
              }}
              className="group"
            >
              <Card className="h-full rounded-[28px] overflow-hidden border border-black/5 shadow-lg hover:shadow-2xl transition-all duration-500 bg-white flex flex-col">
                {/* 🖼 IMAGE */}
                <div className="relative aspect-4/5 overflow-hidden">
                  <Image
                    src={voice.image}
                    alt={voice.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-110 transition duration-1200 ease-out"
                    priority={i === 0}
                  />

                  {/* Strong cinematic overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Quote icon */}
                  <div className="absolute top-5 left-5">
                    <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30 shadow">
                      <Quote className="size-5 text-white fill-white" />
                    </div>
                  </div>

                  {/* Name over image */}
                  <div className="absolute bottom-5 left-5 right-5">
                    <h4 className="text-white text-xl font-semibold leading-tight drop-shadow-lg">
                      {voice.name}
                    </h4>
                    <p className="text-white/70 text-[11px] uppercase tracking-widest font-bold mt-1">
                      {voice.location}
                    </p>
                  </div>
                </div>

                {/* 📄 CONTENT */}
                <div className="p-7 flex flex-col flex-1">
                  <p className="text-forest text-[16px] leading-relaxed font-serif italic">
                    “{voice.quote}”
                  </p>

                  <div className="flex-1" />

                  {/* subtle divider */}
                  <div className="w-10 h-[2px] bg-saffron mt-6 mb-3 opacity-70" />

                  <span className="text-[11px] text-monk-muted uppercase tracking-widest font-bold">
                    Verified Traveler
                  </span>
                </div>
              </Card>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
