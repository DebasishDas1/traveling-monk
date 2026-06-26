"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Send, MessageSquareHeart, CheckCircle2, Star } from "lucide-react";
import { Input } from "@/components/ui/input";

export const PremiumFeedback = () => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedback.trim() || rating === 0) return;

    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, rating, feedback }),
      });

      if (!res.ok) {
        throw new Error("Failed to submit feedback");
      }

      setIsSubmitted(true);
      setFeedback("");
      setName("");
      setRating(0);

      // Reset after 4 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative py-24 bg-monk-dark overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-saffron/5 rounded-full blur-[120px] opacity-70" />
      </div>

      <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
              <MessageSquareHeart className="size-4 text-saffron" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-white/70">
                Shape The Journey
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-white leading-tight mb-6">
              We value your <br />
              <span className="text-saffron ">experience.</span>
            </h2>

            <p className="text-white/60 font-sans text-lg md:text-xl leading-relaxed mb-8">
              Whether you've walked with us or are just planning your first
              trek, your thoughts help us curate better trails and deeper
              connections.
            </p>

            <div className="flex items-center gap-4 text-sm text-white/40">
              <span className="flex items-center gap-2">
                <span className="relative flex size-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full size-2 bg-green-500"></span>
                </span>
                Reading all feedback
              </span>
            </div>
          </motion.div>

          {/* Right Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            {/* Glassmorphic Card */}
            <div className="relative p-8 md:p-10 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-center justify-center text-center py-12 min-h-[260px]"
                  >
                    <div className="size-16 rounded-full bg-saffron/20 text-saffron flex items-center justify-center mb-6">
                      <CheckCircle2 className="size-8" />
                    </div>
                    <h3 className="text-2xl font-display text-white mb-2">
                      Thank You!
                    </h3>
                    <p className="text-white/60">Your voice helps us grow.</p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <form
                      onSubmit={handleSubmit}
                      className="flex flex-col gap-6"
                    >
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm text-white/70 font-medium px-1"
                        >
                          Your Name{" "}
                          <span className="text-white/40 font-normal">
                            (Optional)
                          </span>
                        </label>
                        <Input
                          id="name"
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="How should we call you?"
                          className="w-full bg-black/20 border-white/10 rounded-xl px-4 h-12 text-white placeholder:text-white/30 focus-visible:ring-saffron/50 focus-visible:border-transparent transition-all"
                        />
                      </div>

                      <div className="space-y-3">
                        <label
                          htmlFor="feedback"
                          className="text-sm text-white/70 font-medium px-1"
                        >
                          Your thoughts
                        </label>
                        <Textarea
                          id="feedback"
                          value={feedback}
                          onChange={(e) => setFeedback(e.target.value)}
                          placeholder="Tell us what you loved, or how we can improve..."
                          rows={4}
                          className="w-full bg-black/20 border-white/10 rounded-2xl p-4 text-white placeholder:text-white/30 focus-visible:ring-saffron/50 focus-visible:border-transparent transition-all resize-none text-base"
                        />
                      </div>

                      {/* Rating System */}
                      <div className="space-y-3">
                        <label className="text-sm text-white/70 font-medium px-1 flex items-center justify-between">
                          <span>How was your experience?</span>
                          {rating > 0 && (
                            <span className="text-saffron text-xs">
                              {rating}/5 Stars
                            </span>
                          )}
                        </label>
                        <div className="flex items-center gap-2 px-1">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              key={star}
                              type="button"
                              onClick={() => setRating(star)}
                              onMouseEnter={() => setHoveredRating(star)}
                              onMouseLeave={() => setHoveredRating(0)}
                              className="focus:outline-none transition-transform hover:scale-110"
                            >
                              <Star
                                className={`size-8 transition-colors ${
                                  (hoveredRating || rating) >= star
                                    ? "fill-saffron text-saffron drop-shadow-[0_0_8px_rgba(255,153,51,0.5)]"
                                    : "text-white/20 hover:text-white/40"
                                }`}
                              />
                            </button>
                          ))}
                        </div>
                      </div>

                      {error && (
                        <p className="text-red-400 text-sm px-1">{error}</p>
                      )}

                      <Button
                        type="submit"
                        variant="saffron"
                        disabled={
                          isSubmitting || !feedback.trim() || rating === 0
                        }
                        className="w-full rounded-xl h-14 font-bold uppercase tracking-widest text-xs shadow-lg shadow-saffron/20 group relative overflow-hidden disabled:opacity-50"
                      >
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          {isSubmitting ? (
                            "Sending..."
                          ) : (
                            <>
                              Send Feedback
                              <Send className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                            </>
                          )}
                        </span>
                        {/* Hover Gradient Effect */}
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                      </Button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Decorative Corner accents */}
            <div className="absolute -top-px -left-px size-6 border-t-2 border-l-2 border-saffron/50 rounded-tl-[2rem]" />
            <div className="absolute -bottom-px -right-px size-6 border-b-2 border-r-2 border-saffron/50 rounded-br-[2rem]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
