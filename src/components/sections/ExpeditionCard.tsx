"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe } from "lucide-react";
import type { ExpeditionType } from "@/lib/type";
import { getImageSrc } from "@/lib/utils";

export const ExpeditionCard = ({
  slug,
  name,
  gallery,
  description,
  country,
  duration,
  price,
  highlights,
}: ExpeditionType) => {
  const imageSrc = getImageSrc(gallery[0], 800);

  return (
    <Link href={`/expeditions/${slug}`} className="group block">
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.25 }}
        className="
          overflow-hidden rounded-[32px]
          border border-zinc-200
          bg-white
          shadow-sm
          transition-all duration-300
          hover:border-zinc-300
          hover:shadow-xl
        "
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={imageSrc}
            alt={name}
            fill
            sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

          <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 backdrop-blur">
            <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-zinc-900">
              <Globe className="size-3.5" />
              Expedition
            </div>
          </div>

          <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 opacity-0 backdrop-blur transition-all duration-300 group-hover:opacity-100">
            <ArrowUpRight className="size-4 text-zinc-900" />
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 p-7">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
              {duration}
            </span>

            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
              {country}
            </span>
          </div>

          <div>
            <h3 className="text-3xl font-semibold tracking-tight text-zinc-900">
              {name}
            </h3>

            <p className="mt-2 text-lg text-zinc-500">{country}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {highlights.slice(0, 3).map((item) => (
              <span
                key={item}
                className="rounded-full border border-zinc-200 px-3 py-1 text-sm text-zinc-600"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="line-clamp-3 text-[15px] leading-relaxed text-zinc-600">
            {description}
          </p>

          <div className="flex items-end justify-between border-t border-zinc-200 pt-6">
            <div>
              <div className="text-4xl font-bold tracking-tight text-zinc-900">
                {/* ₹{price.toLocaleString("en-IN")} */}
              </div>

              <p className="mt-1 text-sm text-zinc-500">starting per person</p>
            </div>

            <div className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 group-hover:bg-zinc-700">
              Explore
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
};
