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
    <section className="bg-forest py-32 px-6">
      <div className="container mx-auto max-w-4xl text-center">
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
                  <span className="text-saffron text-8xl font-display leading-none select-none">
                    "
                  </span>
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={
                      current === index ? { opacity: 1, y: 0 } : { opacity: 0 }
                    }
                    transition={{ duration: 0.8 }}
                    className="-mt-8"
                  >
                    <blockquote className="font-display italic text-3xl md:text-4xl text-white/90 leading-snug mb-10">
                      {t.quote}
                    </blockquote>
                    <div>
                      <cite className="not-italic text-saffron font-bold uppercase tracking-[0.2em] text-sm">
                        {t.author}
                      </cite>
                      <div className="text-white/40 text-xs uppercase tracking-widest mt-1">
                        {t.role}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Indicators */}
        <div className="flex justify-center gap-3 mt-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index)}
              className={`size-2 rounded-full transition-all duration-300 ${
                current === index ? "bg-saffron w-8" : "bg-white/20"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
