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
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: 2.8,
          ease: [0.22, 1, 0.36, 1],
        },
        opacity: { duration: 0.6 },
      },
    },
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto py-32">
      {/* ✍️ SVG Stroke */}
      <div className="absolute inset-0">
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 600"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full h-full"
        >
          <motion.path
            d="M 950 90 
               C 1250 300, 1050 480, 600 520
               C 250 520, 150 480, 150 300
               C 150 120, 350 80, 600 80
               C 850 80, 950 180, 950 180"
            fill="none"
            strokeWidth="14"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            // variants={draw}
            className="text-saffron opacity-90"
            style={{
              filter: "drop-shadow(0 8px 20px rgba(255,153,0,0.25))",
            }}
          />
        </motion.svg>
      </div>

      {/* 🧘 Content */}
      <div className="relative z-10 text-center flex flex-col items-center justify-center">
        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-display text-forest tracking-tight leading-[1.05]
                     drop-shadow-[0_4px_20px_rgba(0,0,0,0.15)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="mt-6 text-base md:text-lg text-forest/60 max-w-xl leading-relaxed
                       drop-shadow-[0_2px_10px_rgba(0,0,0,0.1)]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}

export { HandWrittenTitle };
