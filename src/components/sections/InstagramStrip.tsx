"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// ─── Replace src values with real Instagram post images ────────────────────
const posts = [
  // { src: "/images/community/ig-1.jpg", alt: "Summit at Kedarkantha" },
  // { src: "/images/community/ig-2.jpg", alt: "Trail through the rhododendrons" },
  // { src: "/images/community/ig-3.jpg", alt: "Campfire night at 11,000ft" },
  { src: "/images/community/ig-4.jpg", alt: "Morning mist over the valley" },
];

export const InstagramStrip = () => (
  <section
    className="py-20 bg-parchment-texture overflow-hidden"
    aria-label="Instagram feed"
  >
    <div className="container mx-auto max-w-7xl px-6 mb-10 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <ArrowRight className="size-5 text-monk-muted" aria-hidden="true" />
        <span className="text-monk-muted text-[11px] font-bold uppercase tracking-[0.22em]">
          @thetravelingmonk
        </span>
      </div>
      <Link
        href={
          "https://www.instagram.com/thetravelingmonk.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        }
        target="_blank"
        rel="noopener noreferrer"
        className="text-forest/50 hover:text-saffron transition-colors text-[11px] font-bold uppercase tracking-[0.18em]"
      >
        <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-parchment/20">
          View all →
        </span>
      </Link>
    </div>

    {/* Scrollable strip */}
    <div className="flex gap-3 px-6 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
      {posts.map((post, i) => (
        <motion.a
          key={post.src}
          href="https://www.instagram.com/thetravelingmonk.in/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Instagram: ${post.alt}`}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, duration: 0.55 }}
          className="relative shrink-0 w-52 h-52 md:w-64 md:h-64 rounded-2xl overflow-hidden snap-start group"
        >
          <Image
            src={post.src}
            alt={post.alt}
            fill
            sizes="256px"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/40 transition-colors duration-400 flex items-center justify-center">
            <ArrowRight
              className="size-7 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            />
          </div>
        </motion.a>
      ))}
    </div>
  </section>
);
