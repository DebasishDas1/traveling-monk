"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { faqs } from "@/lib/data/faq";

export function FaqAccordion() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-20 space-y-5">
          <h2 className=" text-4xl md:text-5xl text-[var(--color-primary)]">
            Common Questions
          </h2>
          <p className="text-[#6B5A4A] max-w-xl mx-auto text-sm leading-relaxed">
            Everything you need to know before you step into the mountains.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-5">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;

            return (
              <div
                key={idx}
                className={cn(
                  "group rounded-[24px] border transition-all duration-500 overflow-hidden",
                  isOpen
                    ? "bg-[#F3EDE3] border-[#D6C4A8]"
                    : "bg-[#F8F3EA] border-[#E6D8C3] hover:border-[var(--color-saffron-light)]/40",
                )}
              >
                {/* Question */}
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left"
                >
                  <span
                    className={cn(
                      " text-[17px] leading-relaxed transition-colors duration-300",
                      isOpen
                        ? "text-[var(--color-saffron-light)]"
                        : "text-[var(--color-primary)] group-hover:text-[var(--color-saffron-light)]",
                    )}
                  >
                    {faq.q}
                  </span>

                  <ChevronDown
                    className={cn(
                      "size-5 shrink-0 transition-all duration-300",
                      isOpen ? "rotate-180 text-[var(--color-saffron-light)]" : "text-[#8A7A68]",
                    )}
                  />
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.25 }}
                      className="px-8 pb-8"
                    >
                      {/* subtle divider */}
                      <div className="h-px w-12 bg-[#D6C4A8] mb-5" />

                      <p className="text-[#6B5A4A] text-[14px] leading-[1.9]">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
