"use client";

import { motion } from "framer-motion";
import { escapesData } from "@/lib/data/escapes";
import { EscapeCard } from "./EscapeCard";

export const EscapeGrid = () => {
  if (!escapesData.length) {
    return (
      <div className="flex items-center justify-center py-32 text-[#C9A24A]/40 font-serif italic">
        No journeys found…
      </div>
    );
  }

  return (
    <section className="relative px-6 md:px-10 py-20">
      {/* subtle top glow */}
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
          className="grid gap-8 grid-cols-1 md:grid-cols-1"
        >
          {escapesData.map((escape) => (
            <motion.div
              key={escape.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <EscapeCard {...escape} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
