"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// ─── Data — replace with real community trek photos ─────────────────────────
// Aspect ratios are intentionally varied for a mosaic feel
const photos = [
  {
    src: "/images/community/mosaic-1.jpg",
    alt: "Summit celebration, Kedarkantha",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/images/community/mosaic-2.jpg",
    alt: "Campfire circle at base camp",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/community/mosaic-3.jpg",
    alt: "Morning trail start",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/community/mosaic-4.jpg",
    alt: "Group lunch on the trail",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/images/community/mosaic-5.jpg",
    alt: "Sunrise at high camp",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/images/community/mosaic-6.jpg",
    alt: "Valley of Flowers meadow",
    span: "col-span-1 row-span-1",
  },
];

export const PhotoMosaic = () => (
  <section
    className="py-24 bg-forest overflow-hidden"
    aria-labelledby="mosaic-heading"
  >
    <div className="container mx-auto max-w-7xl px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-6"
      >
        <div>
          <p className="text-saffron text-[11px] font-bold uppercase tracking-[0.26em] mb-3">
            From the Trail
          </p>
          <h2
            id="mosaic-heading"
            className="font-display text-4xl md:text-5xl text-white leading-tight"
          >
            Moments that live
            <br />
            <em className="text-saffron">forever.</em>
          </h2>
        </div>

        <a
          href="https://www.instagram.com/thetravelingmonk"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-white/50 hover:text-saffron transition-colors text-xs uppercase tracking-[0.2em] font-bold"
        >
          Follow on Instagram
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </motion.div>

      {/* Mosaic grid */}
      <div className="grid grid-cols-3 md:grid-cols-4 grid-rows-3 gap-3 h-[480px] md:h-[560px]">
        {photos.map((photo, i) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              delay: i * 0.08,
              duration: 0.65,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`relative overflow-hidden rounded-2xl group ${photo.span}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/30 transition-colors duration-500 flex items-end p-4">
              <p className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                {photo.alt}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
