"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-parchment">
      <div className="flex flex-col items-center">
        {/* Simple fast pulse */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.4,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeOut",
          }}
          className="mb-4"
        >
          <svg
            viewBox="0 0 100 100"
            className="w-16 h-16 text-forest fill-current"
          >
            <path d="M50 10 L90 90 L10 90 Z" />
          </svg>
        </motion.div>

        {/* Minimal text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="text-sm text-forest/70"
        >
          Loading...
        </motion.p>
      </div>
    </div>
  );
}
