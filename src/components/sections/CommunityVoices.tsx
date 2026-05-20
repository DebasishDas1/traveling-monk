"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

// ─── Types ─────────────────────────────────────────────────────────────────
interface Voice {
  name: string;
  location: string;
  quote: string;
  image: string;
  trek: string;
}

const voices: Voice[] = [
  {
    name: "Sarah Miller",
    location: "Bengaluru",
    trek: "Hampta Pass, 2024",
    quote:
      "The silence at 14,000 feet isn't empty. It's full of answers you didn't know you were looking for. The Traveling Monk didn't just show me the mountains — they showed me myself.",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Debasish Das",
    location: "Kolkata",
    trek: "Kashmir Great Lakes, 2023",
    quote:
      "I came for the views, but I stayed for the people. There's a special bond that forms when you're sharing a warm meal after a 10-hour trek. We're a tribe for life now.",
    image:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&q=80&w=800",
  },
  {
    name: "Manjuri Das",
    location: "Kolkata",
    trek: "Kedarkantha, 2025",
    quote:
      "Every step was a challenge, and every challenge was a lesson. The guides didn't just lead the way — they inspired us to find our own strength. An unforgettable transformation.",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800",
  },
];

// ─── Card ──────────────────────────────────────────────────────────────────
const VoiceCard = ({ voice, index }: { voice: Voice; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 48 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{
      delay: index * 0.14,
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1],
    }}
    className="group flex flex-col rounded-[28px] overflow-hidden border border-black/5 shadow-md hover:shadow-2xl transition-shadow duration-500 bg-white"
  >
    {/* Image */}
    <div className="relative aspect-4/5 overflow-hidden">
      <Image
        src={voice.image}
        alt={`${voice.name} on ${voice.trek}`}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        priority={index === 0}
      />

      {/* Cinematic gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/15 to-transparent" />

      {/* Quote badge */}
      <div className="absolute top-5 left-5">
        <div className="bg-white/20 backdrop-blur-md p-3 rounded-full border border-white/30">
          <Quote className="size-4 text-white fill-white" aria-hidden="true" />
        </div>
      </div>

      {/* Name + location over image */}
      <div className="absolute bottom-5 left-5 right-5">
        <p className="text-white text-xl font-semibold leading-tight drop-shadow">
          {voice.name}
        </p>
        <p className="text-white/65 text-[11px] uppercase tracking-widest font-bold mt-1">
          {voice.location} · {voice.trek}
        </p>
      </div>
    </div>

    {/* Quote body */}
    <div className="flex flex-col flex-1 p-7">
      <blockquote className="text-forest/85 text-[15px] leading-relaxed font-serif italic flex-1">
        &ldquo;{voice.quote}&rdquo;
      </blockquote>

      {/* Saffron rule + badge */}
      <div className="mt-6 pt-5 border-t border-black/5 flex items-center justify-between">
        <div className="w-8 h-0.5 bg-saffron rounded-full" />
        <span className="text-[10px] text-monk-muted uppercase tracking-widest font-bold">
          Verified Traveler
        </span>
      </div>
    </div>
  </motion.article>
);

// ─── Section ───────────────────────────────────────────────────────────────
export const CommunityVoices = () => (
  <section
    className="py-32 bg-parchment-texture"
    aria-labelledby="voices-heading"
  >
    <div className="container mx-auto max-w-7xl px-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <div className="max-w-xl">
          <p className="text-monk-muted text-[11px] font-bold uppercase tracking-[0.28em] mb-4">
            Voices of the Wild
          </p>
          <h2
            id="voices-heading"
            className="font-display text-5xl md:text-6xl text-forest leading-[1.05]"
          >
            Shared journeys,{" "}
            <em className="text-monk-brown-warm not-italic">unified souls.</em>
          </h2>
        </div>

        <p className="text-forest/60 font-sans max-w-sm text-base leading-relaxed">
          The Monk Tribe is built on stories of resilience, friendship, and the
          profound transformation that only the mountains can provide.
        </p>
      </div>

      {/* Cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {voices.map((v, i) => (
          <VoiceCard key={v.name} voice={v} index={i} />
        ))}
      </div>
    </div>
  </section>
);
