"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getImageSrc } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { instagramLink } from "@/lib/social-links";

// ─── Data ──────────────────────────────────────────────────────────────────
const POSTS = [
  "1SoeZqZMyyZmKLtKC81I1JGnAZ1NbEkkj",
  "1WPG-U0x79knaJmJEnRgyNGANubWFpWuH",
  "1ROr217G7M-_aPKRtSakwUKwQ0XQOyfw0",
  "1yu3WywBjxAkho8EgQN_4-uqTZuZffFEP",
  "1tSAzDU056BMH0dxO8nx4agwTLjNivCMq",
]
  .filter(Boolean)
  .map((id) => ({
    src: getImageSrc(`https://drive.google.com/file/d/${id}/view`),
    alt: "Travel moment",
  }));

// ─── Component ─────────────────────────────────────────────────────────────
export const InstagramStrip = () => {
  return (
    <section className="py-16 bg-parchment-texture">
      {/* Header */}
      <div className="container mx-auto max-w-6xl px-4 mb-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <ArrowRight className="size-4 text-monk-muted" />
          <span className="text-monk-muted text-[10px] font-semibold uppercase tracking-[0.25em]">
            @thetravelingmonk
          </span>
        </div>

        <Link
          href={instagramLink}
          target="_blank"
          className="text-forest/60 hover:text-saffron transition text-[10px] font-semibold uppercase tracking-[0.2em]"
        >
          <span className="border-b border-transparent hover:border-saffron pb-0.5">
            View all →
          </span>
        </Link>
      </div>

      {/* Carousel */}
      <div className="relative px-4 md:px-20">
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-3">
            {POSTS.map((post, i) => (
              <CarouselItem
                key={i}
                className="
                  pl-3
                  basis-[75%]     /* mobile: 1.3 cards peek */
                  sm:basis-[55%]  /* small tablets */
                  md:basis-[40%]  /* 2 cards */
                  lg:basis-[30%]  /* 3 cards */
                  xl:basis-[24%]  /* slightly smaller on big screens */
                "
              >
                <Link
                  href={instagramLink}
                  target="_blank"
                  className="group block"
                >
                  <div className="relative aspect-4/5 rounded-2xl overflow-hidden bg-black/5 shadow-sm transition-all duration-500 group-hover:shadow-lg">
                    <Image
                      src={post.src}
                      alt={post.alt}
                      fill
                      sizes="
                        (max-width: 640px) 70vw,
                        (max-width: 1024px) 40vw,
                        (max-width: 1280px) 30vw,
                        20vw
                      "
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Soft premium overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                    {/* Icon */}
                    <ArrowRight className="absolute inset-0 m-auto size-5 text-white opacity-0 group-hover:opacity-100 transition duration-300" />

                    {/* Border glow */}
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-black/5 group-hover:ring-white/20 transition" />
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Controls */}
          <CarouselPrevious className="hidden lg:flex -left-3 scale-90" />
          <CarouselNext className="hidden lg:flex -right-3 scale-90" />
        </Carousel>
      </div>
    </section>
  );
};
