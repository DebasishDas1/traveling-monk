"use client";

import { motion } from "framer-motion";
import { IconCheck } from "@/components/myIcons";

interface BookingSuccessProps {
  message?: string;
  onClose: () => void;
}

export function BookingSuccess({ message, onClose }: BookingSuccessProps) {
  return (
    <motion.div
      key="success"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-center justify-center py-10 text-center gap-6"
    >
      {/* Check circle */}
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center"
        style={{ background: "#eef7ee" }}
      >
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{ background: "#22c55e" }}
        >
          <IconCheck className="w-7 h-7 text-white" />
        </div>
      </div>

      {/* Copy */}
      <div className="space-y-2 max-w-xs">
        <h4
          className="text-[var(--color-foreground)]"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.25rem",
            fontWeight: 400,
          }}
        >
          Namaste, traveler 🙏
        </h4>
        <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-monk-muted)" }}>
          {message ??
            "Your booking request is in. Our team will reach out shortly to confirm your adventure."}
        </p>
        <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-monk-muted)" }}>
          Our team will reach out to you shortly.
        </p>
      </div>

      <button
        onClick={onClose}
        className="mt-2 px-8 h-11 rounded-xl text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
        style={{ background: "var(--color-forest)" }}
      >
        Back to the trail
      </button>
    </motion.div>
  );
}
