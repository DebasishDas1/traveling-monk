"use client";

import { motion } from "framer-motion";
import { expeditionsData } from "@/lib/data/expeditions";
import { ExpeditionCard } from "./ExpeditionCard";

export const ExpeditionGrid = () => {
  if (!expeditionsData.length) {
    return (
      <div className="flex items-center justify-center py-32 text-saffron-light/40">
        No expeditions available…
      </div>
    );
  }

  return (
    <section className="relative px-6 py-20 md:px-10">
      {/* Subtle top glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,74,0.08),transparent_60%)]" />

      <div className="mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid grid-cols-1 gap-8"
        >
          {expeditionsData.map((expedition) => (
            <motion.div
              key={expedition.id}
              variants={{
                hidden: { opacity: 0, y: 32 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <ExpeditionCard {...expedition} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
