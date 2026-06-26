"use client";

import { motion } from "framer-motion";

interface HandWrittenTitleProps {
  title?: string;
  subtitle?: string;
}

export function HandWrittenTitle({
  title = "Walk until you find yourself.",
  subtitle,
}: HandWrittenTitleProps) {
  return (
    <section className="relative overflow-hidden bg-[#f7f4ef]">
      <div className="mx-auto flex max-w-5xl flex-col items-center px-6 py-28 text-center md:py-36">
        <motion.span
          initial={{ opacity: 0, scaleX: 0.8 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8 h-px w-14 bg-amber-700/40"
        />

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            ease: "easeOut",
          }}
          className="max-w-4xl"
        >
          <h2 className="font-display text-4xl leading-tight tracking-tight text-zinc-900 md:text-6xl lg:text-7xl">
            “{title}”
          </h2>

          {subtitle && (
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-500 md:text-xl">
              {subtitle}
            </p>
          )}
        </motion.blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.4 }}
          className="mt-14 flex items-center gap-4"
        >
          <div className="h-px w-8 bg-zinc-300" />

          <span className="text-[11px] font-medium uppercase tracking-[0.35em] text-zinc-500">
            The Traveling Monk
          </span>

          <div className="h-px w-8 bg-zinc-300" />
        </motion.div>
      </div>
    </section>
  );
}
