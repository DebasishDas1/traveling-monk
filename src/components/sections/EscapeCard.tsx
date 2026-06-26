"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { EscapeType } from "@/lib/type";
import { getImageSrc } from "@/lib/utils";

export const EscapeCard = ({
  slug,
  name,
  gallery,
  description,
  location,
  duration,
  price,
  highlights,
}: EscapeType) => {
  const imageSrc = getImageSrc(gallery[0], 800);
  return (
    <Link href={`/escapes/${slug}`} className="group block">
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.35 }}
        className="
          overflow-hidden rounded-[32px]
          border border-saffron-light/15
          bg-[#F7F1E8]
          shadow-[0_10px_40px_rgba(0,0,0,0.06)]
          transition-all duration-500
          hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)]
        "
      >
        {/* IMAGE */}
        <div className="relative aspect-4/3 overflow-hidden">
          <Image
            src={imageSrc}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="
              object-cover
              transition-transform duration-700
              group-hover:scale-105
            "
          />

          {/* gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent" />

          {/* floating explore */}
          <div
            className="
              absolute right-5 top-5
              flex items-center gap-2
              rounded-full
              bg-white/90
              px-4 py-2
              text-xs font-medium tracking-[0.2em]
              text-[#2A1F16]
              opacity-0 backdrop-blur-md
              transition-all duration-500
              group-hover:translate-y-0
              group-hover:opacity-100
            "
          >
            EXPLORE
            <ArrowUpRight size={14} />
          </div>
        </div>

        {/* CONTENT */}
        <div className="space-y-6 p-6 md:p-7">
          {/* top pills */}
          <div className="flex flex-wrap gap-3">
            <span
              className="
                rounded-full border border-saffron-light/20
                px-4 py-2
                text-xs font-medium uppercase tracking-[0.25em]
                text-[#6A5643]
              "
            >
              {duration}
            </span>

            <span
              className="
                rounded-full border border-saffron-light/20
                px-4 py-2
                text-xs font-medium uppercase tracking-[0.25em]
                text-[#6A5643]
              "
            >
              Mountain Escape
            </span>
          </div>

          {/* title */}
          <div>
            <h3
              className="
                text-3xl font-semibold tracking-tight
                text-[#2A1F16]
              "
            >
              {name}
            </h3>

            <p className="mt-2 text-lg  text-[#7A6857]">{location}</p>
          </div>

          {/* highlights */}
          <div className="flex flex-wrap gap-3">
            {highlights.slice(0, 3).map((item) => (
              <span
                key={item}
                className="
                  rounded-full bg-[#EFE4D3]
                  px-4 py-2
                  text-sm  text-[#6A5643]
                "
              >
                {item}
              </span>
            ))}
          </div>

          {/* description */}
          <p className="line-clamp-3 text-[15px] leading-relaxed text-[#4B3A2F]">
            {description}
          </p>

          {/* footer */}
          <div
            className="
              flex items-end justify-between
              border-t border-saffron-light/15
              pt-6
            "
          >
            <div>
              <div className="text-4xl font-bold text-[#2A1F16]">
                ₹{price.double.toLocaleString("en-IN")}
              </div>

              <p className="mt-1 text-sm  text-[#7A6857]">per person</p>
            </div>

            <div
              className="
                rounded-full border border-[#2A1F16]/30
                px-6 py-3
                text-sm font-semibold tracking-[0.25em]
                text-[#2A1F16]
                transition-all duration-300
                group-hover:bg-[#2A1F16]
                group-hover:text-white
              "
            >
              EXPLORE
            </div>
          </div>
        </div>
      </motion.article>
    </Link>
  );
};
