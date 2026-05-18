"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const TransformationStory = () => {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          {/* Left Column (55%) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-saffron text-xs font-bold uppercase tracking-[0.3em] block mb-4">
                Beyond the physical
              </span>
              <h2 className="text-4xl md:text-5xl text-forest font-display mb-8 leading-tight">
                More than just a trek. <br />A return to who you are.
              </h2>

              <div className="space-y-6 text-stone-600 font-sans font-light text-lg leading-relaxed mb-10">
                <p>
                  At The Traveling Monk, we believe that the mountains are not
                  just peaks to be conquered, but mirrors that reflect our inner
                  landscape. Our journeys are designed to strip away the noise
                  of modern life.
                </p>
                <p>
                  Every step is an invitation to presence. We combine rigorous
                  physical challenge with moments of profound silence and
                  curated group dialogues, facilitating a transformation that
                  lasts long after the descent.
                </p>
              </div>

              <blockquote className="font-display italic text-saffron text-2xl md:text-3xl border-l-2 border-saffron pl-8 mb-10">
                &quot;The mountains are calling and I must go — not to see, but to
                be.&quot;
              </blockquote>

              <Button
                variant="outline"
                className="h-12 px-8 rounded-full border-forest text-forest hover:bg-forest hover:text-white transition-all font-bold uppercase tracking-widest text-xs"
              >
                Learn About Our Philosophy
              </Button>
            </motion.div>
          </div>

          {/* Right Column (45%) */}
          <div className="lg:col-span-5 relative">
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="aspect-4/5 relative rounded-lg overflow-hidden border border-saffron/20 translate-y-8"
              >
                <Image
                  src="/images/story-1.jpg"
                  alt="Meditation in mountains"
                  fill
                  quality={60}
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="aspect-4/5 relative rounded-lg overflow-hidden border border-saffron/20 -translate-y-4"
              >
                <Image
                  src="/images/story-2.jpg"
                  alt="Summit moment"
                  fill
                  quality={60}
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="aspect-4/5 relative rounded-lg overflow-hidden border border-saffron/20 -translate-y-8"
              >
                <Image
                  src="/images/story-3.jpg"
                  alt="Valley view"
                  fill
                  quality={60}
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="aspect-4/5 relative rounded-lg overflow-hidden border border-saffron/20 translate-y-4"
              >
                <Image
                  src="/images/story-4.jpg"
                  alt="Campfire conversation"
                  fill
                  quality={60}
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
