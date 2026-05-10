"use client";

import Image from "next/image";
import { Camera } from "lucide-react";
import type { TrekType } from "@/lib/type";
import { getImageSrc } from "@/lib/utils";

interface TrekGalleryProps {
  trek: TrekType;
}

export const TrekGallery = ({ trek }: TrekGalleryProps) => {
  // ✅ reverse images (non-mutating)
  const images = (trek.gallery ?? []).slice().reverse();

  if (images.length === 0) return null;

  return (
    <section className="space-y-12 py-12 md:py-20">
      {/* Header */}
      <div className="flex items-center gap-6">
        <h2 className="font-display text-4xl md:text-5xl text-forest italic shrink-0">
          Captured Stillness
        </h2>
        <div className="h-px bg-stone-200 grow" />
        <Camera className="size-6 text-stone-300 hidden md:block" />
      </div>

      {/* Layout */}
      <div className="grid gap-4 md:gap-6">
        {/* 🌄 Hero Image */}
        <div className="group relative w-full h-[320px] md:h-[520px] rounded-3xl overflow-hidden bg-stone-900 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
          <Image
            src={getImageSrc(images[0])}
            alt="Trek view"
            fill
            priority
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="100vw"
          />

          {/* Premium gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />
        </div>

        {/* 🧱 Grid */}
        {images.length > 1 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {images.slice(1).map((img, i) => (
              <div
                key={`${img}-${i}`}
                className="group relative h-[180px] md:h-[220px] rounded-2xl overflow-hidden bg-stone-900 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
              >
                <Image
                  src={getImageSrc(img)}
                  alt={`Trek image ${i + 2}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
                />

                {/* subtle overlay */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
