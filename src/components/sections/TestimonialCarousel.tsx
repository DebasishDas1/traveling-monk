"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const testimonials = [
  {
    quote:
      "The silence of the mountains taught me more than years of meditation in the city. A truly transformational experience.",
    author: "Arjun Mehta",
    role: "Bali Pass 2023",
  },
  {
    quote:
      "I came for the views, but I stayed for the community. The deep conversations around the campfire changed my life.",
    author: "Sarah Jenkins",
    role: "Roopkund Trail",
  },
  {
    quote:
      "Exceptional organization. The attention to detail and the focus on safety allowed me to fully immerse in the journey.",
    author: "Vikram Singh",
    role: "Valley of Flowers",
  },
];

export const TestimonialCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Auto-play
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="bg-parchment-texture py-40 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-5xl text-center relative z-10">
        <div className="mb-20">
          <span className="text-[#8c7851] text-[10px] font-bold uppercase tracking-[0.4em] block mb-4">
            What monks say
          </span>
          <h2 className="text-5xl md:text-6xl text-forest font-display italic">
            Returned. Changed.
          </h2>
        </div>

        <div className="bg-white/40 backdrop-blur-sm border border-white/60 p-12 md:p-20 rounded-2xl shadow-xl max-w-4xl mx-auto">
          <Carousel
            setApi={setApi}
            className="w-full"
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {testimonials.map((t, index) => (
                <CarouselItem key={index}>
                  <div className="flex flex-col items-center">
                    <span className="text-saffron text-6xl font-display leading-none select-none mb-10 opacity-60">
                      "
                    </span>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={
                        current === index ? { opacity: 1, y: 0 } : { opacity: 0 }
                      }
                      transition={{ duration: 0.8 }}
                    >
                      <blockquote className="font-display italic text-2xl md:text-3xl text-forest leading-relaxed mb-12">
                        {t.quote}
                      </blockquote>
                      <div>
                        <cite className="not-italic text-forest font-bold uppercase tracking-[0.2em] text-xs">
                          {t.author}
                        </cite>
                        <div className="text-[#8c7851] text-[10px] uppercase tracking-widest mt-2 font-medium">
                          {t.role}
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
