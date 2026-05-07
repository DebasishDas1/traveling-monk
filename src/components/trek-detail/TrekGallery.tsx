"use client";

import Image from "next/image";
import { Camera } from "lucide-react";
import type { TrekType } from "@/lib/type";
import { getImageSrc } from "@/lib/utils";

interface TrekGalleryProps {
  trek: TrekType;
}

export const TrekGallery = ({ trek }: TrekGalleryProps) => {
  const images = trek.gallery ?? [];

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
        <div className="relative w-full h-[320px] md:h-[520px] rounded-3xl overflow-hidden bg-stone-900">
          <Image
            src={getImageSrc(images[0])}
            alt="Trek view"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        {/* 🧱 Grid for remaining images */}
        {images.length > 1 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {images.slice(1).map((img, i) => (
              <div
                key={`${img}-${i}`}
                className="relative h-[180px] md:h-[220px] rounded-2xl overflow-hidden bg-stone-900"
              >
                <Image
                  src={getImageSrc(img)}
                  alt={`Trek image ${i + 2}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
