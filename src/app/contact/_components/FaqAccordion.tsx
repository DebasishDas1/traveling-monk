"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { faqs } from "@/lib/data/faq";

export function FaqAccordion() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section className="py-32 px-6 container mx-auto max-w-4xl">
      <div className="text-center mb-16 space-y-4">
        <h2 className="font-display text-4xl text-forest">
          Common Questions
        </h2>
        <p className="text-stone-500 max-w-xl mx-auto">
          Everything you need to know before you lace up your boots.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-b border-stone-200 last:border-0">
            <button
              onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              className="w-full py-6 flex items-center justify-between text-left group"
            >
              <span
                className={cn(
                  "font-sans font-medium text-lg transition-colors duration-300",
                  activeFaq === idx
                    ? "text-saffron"
                    : "text-forest group-hover:text-saffron",
                )}
              >
                {faq.q}
              </span>
              <ChevronDown
                className={cn(
                  "size-5  transition-transform duration-300",
                  activeFaq === idx && "rotate-180 text-saffron",
                )}
              />
            </button>
            <AnimatePresence>
              {activeFaq === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-8 text-stone-500 leading-relaxed font-sans">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
