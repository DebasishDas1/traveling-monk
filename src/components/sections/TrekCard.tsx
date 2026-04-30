import { Trek } from "@/lib/treks";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users, Mountain } from "lucide-react";

const TrekCard = ({ trek, index }: { trek: Trek; index: number }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      whileHover={{ scale: 1.03 }}
      className="group"
    >
      <Link href={`/treks/${trek.slug}`} className="block">
        <div className="relative rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition-all duration-500">
          {/* 🖼 IMAGE */}
          <div className="relative aspect-3/4">
            <Image
              src={trek.image}
              alt={trek.name}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover scale-110 group-hover:scale-125 transition duration-1200 ease-out"
            />

            {/* 🔥 HARD OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-transparent" />

            {/* 🧭 TOP BAR */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
              <span className="bg-saffron text-black text-xs px-4 py-1 font-bold tracking-widest rounded-full shadow-lg">
                {trek.difficulty}
              </span>

              <span className="bg-black/60 text-white text-xs px-3 py-1 rounded-full backdrop-blur">
                {trek.duration}
              </span>
            </div>

            {/* 💥 MAIN TEXT BLOCK */}
            <div className="absolute bottom-0 left-0 right-0 p-6">
              {/* TITLE */}
              <h3 className="text-white text-3xl md:text-4xl font-extrabold leading-[1.1] drop-shadow-xl">
                {trek.name}
              </h3>

              {/* TAGLINE */}
              <p className="text-white/80 text-sm mt-2 max-w-sm">
                {trek.tagline}
              </p>

              {/* INFO */}
              <div className="flex gap-4 text-white/70 text-xs mt-4">
                <span className="flex items-center gap-1">
                  <Mountain className="size-3" /> {trek.altitude}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="size-3" /> {trek.maxGroupSize}
                </span>
              </div>

              {/* ⚡ PRICE + CTA BAR */}
              <div className="mt-5 flex items-center justify-between">
                <span className="text-saffron text-2xl font-extrabold tracking-tight">
                  ₹{trek.priceFrom.toLocaleString()}
                </span>

                <span className="bg-saffron text-black px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-full flex items-center gap-2 group-hover:gap-3 transition-all">
                  Explore <ArrowRight className="size-4" />
                </span>
              </div>

              {/* 🚨 URGENCY */}
              {trek.spotsLeft < 5 && (
                <div className="mt-3 text-[11px] text-red-400 font-bold uppercase tracking-widest animate-pulse">
                  Only {trek.spotsLeft} spots left
                </div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default TrekCard;
