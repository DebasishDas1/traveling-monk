"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mountain, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

import type { TrekType } from "@/lib/type";
import { getImageSrc } from "@/lib/utils";

const TrekCard = ({ trek, index }: { trek: TrekType; index: number }) => {
  const imageSrc = getImageSrc(trek.gallery[0], 800);

  if (!imageSrc) return null;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.4,
        delay: index * 0.04,
        ease: "easeOut",
      }}
      className="group h-full"
    >
      <Link href={`/treks/${trek.slug}`} className="block h-full">
        <div
          className="
            flex h-full flex-col overflow-hidden rounded-[32px]
            border border-(--color-parchment-dark)
            bg-linear-to-br from-[#F6F1E8] via-[#EFE6D8] to-[#E4D6C3]
            shadow-lg
            transition-[transform,box-shadow]
            duration-300
            group-hover:-translate-y-1
            group-hover:shadow-2xl
          "
        >
          {/* ===== IMAGE SECTION ===== */}
          <div className="relative h-[400px] w-full shrink-0 overflow-hidden rounded-b-[24px]">
            <Image
              src={imageSrc}
              alt={trek.name}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-1200 ease-out 
              group-hover:scale-110 group-hover:rotate-1"
            />

            {/* dark vignette for drama */}
            {/* <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" /> */}

            {/* warm ancient tint */}
            {/* <div className="absolute inset-0 bg-[#7a5a3a]/20 mix-blend-multiply" /> */}

            {/* subtle glow frame */}
            {/* <div className="absolute inset-0 rounded-b-[24px] ring-1 ring-white/10 pointer-events-none" /> */}
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col p-8 lg:p-10">
            {/* Meta */}
            <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-zinc-500">
              <span>{trek.duration}</span>
              <span>•</span>
              <span>{trek.difficulty}</span>
            </div>

            {/* Title */}
            <h3 className="font-serif text-4xl leading-none tracking-tight text-zinc-900 transition-colors duration-200 group-hover:text-amber-700">
              {trek.name}
            </h3>

            <p className="mt-3 text-base text-zinc-500">{trek.region}</p>

            {/* Stats */}
            <div className="mt-8 flex items-center gap-8 text-sm text-zinc-700">
              <div className="flex items-center gap-2">
                <Mountain className="size-4" strokeWidth={1.6} />
                <span>{trek.altitude}</span>
              </div>

              <div className="flex items-center gap-2">
                <Users className="size-4" strokeWidth={1.6} />
                <span>Max {trek.maxGroupSize}</span>
              </div>
            </div>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mt-4">
              {(trek.highlights?.length > 0
                ? trek.highlights
                : ["River camp", "Hot spring", "Forest trail"]
              )
                .slice(0, 3)
                .map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white px-3.5 py-1 rounded-full text-[12px] tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
            </div>

            {/* Description */}
            <p className="mt-8 line-clamp-3 text-[15px] leading-7 text-zinc-600">
              {trek.tagline}
            </p>

            {/* Footer */}
            <div className="mt-auto flex items-end justify-between pt-10">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-zinc-400">
                  Starting From
                </p>

                <p className="mt-2 text-4xl font-semibold tracking-tight text-zinc-900">
                  ₹{trek.priceFrom.toLocaleString()}
                </p>
              </div>

              <Button
                size="lg"
                variant="outline"
                className="group h-11 rounded-full px-5 text-sm font-medium"
              >
                Explore
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default TrekCard;
