"use client";

import Image from "next/image";
import { Camera } from "lucide-react";
import type { TrekType } from "@/lib/type";
import { getImageSrc } from "@/lib/utils";

interface TrekGalleryProps {
  trek: TrekType;
}

export const TrekGallery = ({ trek }: TrekGalleryProps) => {
  const images = (trek.gallery ?? []).slice().reverse();
  if (images.length === 0) return null;

  return (
    <section className="relative space-y-14 py-16 md:py-24">
      {/* ambient parchment light */}
      <div
        className="absolute inset-0 -z-10 
        bg-[radial-gradient(circle_at_top,rgba(120,90,60,0.10),transparent_70%)]"
      />

      {/* ===== HEADER ===== */}
      <div className="flex items-center gap-6">
        <h2 className="font-display text-4xl md:text-5xl italic text-[#2B1F14] shrink-0">
          Captured Stillness
        </h2>

        <div className="h-px bg-[#CBB79C] grow" />

        <Camera className="size-5 text-[#8C7A6B] hidden md:block" />
      </div>

      {/* ===== GALLERY ===== */}
      <div className="grid gap-5 md:gap-8">
        {/* 🌄 HERO */}
        <div
          className="group relative w-full h-[340px] md:h-[560px] rounded-[28px] overflow-hidden
          bg-[#2B1F14]
          shadow-[0_25px_80px_rgba(60,45,30,0.35)]"
        >
          <Image
            src={getImageSrc(images[0])}
            alt="Trek view"
            fill
            priority
            sizes="100vw"
            className="object-cover transition-transform duration-1200 ease-out 
            group-hover:scale-105 group-hover:brightness-110"
          />

          {/* cinematic overlays */}
          <div
            className="absolute inset-0 
            bg-linear-to-t from-[#1f1510]/70 via-transparent to-transparent"
          />

          <div
            className="absolute inset-0 
            bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.35))]"
          />

          {/* soft edge glow */}
          <div className="absolute inset-0 ring-1 ring-white/10 rounded-[28px]" />
        </div>

        {/* 🧱 THUMB GRID */}
        {images.length > 1 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-8">
            {images.slice(1).map((img, i) => (
              <div
                key={`${img}-${i}`}
                className="group relative h-[170px] md:h-[230px] rounded-2xl overflow-hidden
                bg-[#2B1F14]
                shadow-[0_15px_50px_rgba(60,45,30,0.25)]"
              >
                <Image
                  src={getImageSrc(img)}
                  alt={`Trek image ${i + 2}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-all duration-900 ease-out 
                  group-hover:scale-105 group-hover:brightness-110"
                />

                {/* warm tint instead of black overlay */}
                <div className="absolute inset-0 bg-[#6b4a2f]/10 group-hover:bg-transparent transition duration-500" />

                {/* subtle vignette */}
                <div
                  className="absolute inset-0 
                  bg-[radial-gradient(circle,transparent_50%,rgba(0,0,0,0.25))]"
                />

                {/* micro highlight edge */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
