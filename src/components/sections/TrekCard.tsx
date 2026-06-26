"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { TrekType } from "@/lib/type";
import { getImageSrc } from "@/lib/utils";
import { Mountain, Users } from "lucide-react";

const TrekCard = ({ trek, index }: { trek: TrekType; index: number }) => {
  const imageSrc = getImageSrc(trek.gallery[0], 800);
  if (!imageSrc) return null;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.05, duration: 0.6 }}
      whileHover={{ y: -6 }}
      className="group h-full flex flex-col"
    >
      <Link href={`/treks/${trek.slug}`} className="block h-full">
        <div
          className="relative h-full flex flex-col rounded-[32px] overflow-hidden 
        bg-linear-to-br from-[#F6F1E8] via-[#EFE6D8] to-[#E4D6C3] 
        border border-[#CBB79C]
        shadow-[0_10px_40px_rgba(60,45,30,0.15)]
        hover:shadow-[0_20px_60px_rgba(60,45,30,0.25)]
        transition-all duration-500"
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
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

            {/* warm ancient tint */}
            <div className="absolute inset-0 bg-[#7a5a3a]/20 mix-blend-multiply" />

            {/* subtle glow frame */}
            <div className="absolute inset-0 rounded-b-[24px] ring-1 ring-white/10 pointer-events-none" />
          </div>

          {/* ===== CONTENT ===== */}
          <div className="p-7 flex-1 flex flex-col">
            {/* BADGES */}
            <div className="flex flex-wrap gap-2 mb-5">
              {[trek.duration, trek.difficulty].map((item, i) => (
                <span
                  key={i}
                  className="bg-[#EADFCF] border border-[#CBB79C] 
                  text-[#4A3A2A] text-[10px] px-4 py-1.5 
                  font-bold uppercase tracking-[0.25em] 
                  rounded-full shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* TITLE */}
            <h3
              className="text-[30px] text-[#2B1F14] tracking-wide leading-[1.2] mb-1 
            group-hover:text-[#5A3E28] transition-colors"
            >
              {trek.name}
            </h3>

            {/* REGION */}
            <p className="text-[#7A6A58] text-[13px]  tracking-wide mb-6">
              {trek.region}
            </p>

            {/* INFO */}
            <div className="flex items-center gap-6 mb-5">
              <div className="flex items-center gap-2 text-[#4A3A2A]">
                <Mountain
                  className="size-[16px] text-[#8C7A6B]"
                  strokeWidth={1.5}
                />
                <span className="font-bold tracking-widest uppercase text-[10px]">
                  {trek.altitude}
                </span>
              </div>

              <div className="flex items-center gap-2 text-[#4A3A2A]">
                <Users
                  className="size-[16px] text-[#8C7A6B]"
                  strokeWidth={1.5}
                />
                <span className="font-bold tracking-widest uppercase text-[10px]">
                  Max {trek.maxGroupSize}
                </span>
              </div>
            </div>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 mb-6">
              {(trek.highlights?.length > 0
                ? trek.highlights
                : ["River camp", "Hot spring", "Forest trail"]
              )
                .slice(0, 3)
                .map((tag, i) => (
                  <span
                    key={i}
                    className="bg-[#F3ECE3] border border-[#DED0BD] 
                    text-[#5C4A3D] px-3.5 py-1 rounded-full 
                    text-[12px]  tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
            </div>

            {/* DESCRIPTION */}
            <p className="text-[#4A3A2A] text-[14px] leading-[1.8] mb-8 line-clamp-3">
              {trek.tagline}
            </p>

            {/* FOOTER */}
            <div className="flex justify-between items-end mt-auto pt-5 border-t border-dashed border-[#CBB79C]">
              <div>
                <div className="text-[30px] text-[#2B1F14] font-bold tracking-wide">
                  ₹{trek.priceFrom.toLocaleString()}
                </div>
                <div className="text-[#7A6A58]  text-[12px] mt-1">per soul</div>
              </div>

              <button
                className="relative px-6 py-2.5 rounded-full text-[11px] 
                font-bold uppercase tracking-[0.25em]
                border border-[#2B1F14] text-[#2B1F14]
                overflow-hidden"
              >
                <span className="relative z-10">Explore</span>
              </button>
            </div>
          </div>

          {/* subtle outer glow */}
          <div
            className="absolute inset-0 rounded-[32px] pointer-events-none 
          ring-1 ring-black/5 group-hover:ring-black/10 transition"
          />
        </div>
      </Link>
    </motion.div>
  );
};

export default TrekCard;
