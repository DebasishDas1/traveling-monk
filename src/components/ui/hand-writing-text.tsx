"use client";

import { motion } from "framer-motion";

interface HandWrittenTitleProps {
  title?: string;
  subtitle?: string;
}

function HandWrittenTitle({
  title = "Hand Written",
  subtitle = "Optional subtitle",
}: HandWrittenTitleProps) {
  return (
    <section className="relative bg-monk-dark overflow-hidden">
      {/* Saffron glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-saffron/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-saffron/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32 text-center flex flex-col items-center">
        {/* Saffron top rule */}
        <motion.span
          className="block w-12 h-px bg-saffron/60 mb-12"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />

        {/* Quote */}
        <motion.p
          className="font-display  text-4xl md:text-6xl lg:text-7xl text-parchment-light leading-[1.15] tracking-tight"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          &ldquo;{title}
          {subtitle && (
            <>
              <br />
              <span className="text-parchment">{subtitle}</span>
            </>
          )}
          &rdquo;
        </motion.p>

        {/* Bottom label */}
        <motion.span
          className="mt-10 text-[10px] uppercase tracking-[0.35em] font-bold text-monk-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          The Monk Philosophy
        </motion.span>

        {/* Saffron bottom rule */}
        <motion.span
          className="block w-12 h-px bg-saffron/40 mt-6"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
      </div>
    </section>
  );
}

export { HandWrittenTitle };
