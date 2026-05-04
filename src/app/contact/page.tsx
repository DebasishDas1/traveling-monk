"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageCircle,
  Mail,
  Phone,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { trekData } from "@/lib/treks";

// --- Validation Schema ---
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(
      /^[6-9]\d{9}$/,
      "Please enter a valid 10-digit Indian mobile number",
    ),
  trek: z.string().min(1, "Please select a trek"),
  timing: z.string().min(1, "Please select your preferred timing"),
  groupSize: z.string().min(1, "Please select a group size"),
  message: z
    .string()
    .max(500, "Message cannot exceed 500 characters")
    .optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

// --- FAQ Data ---
const faqs = [
  {
    q: "Is this safe?",
    a: "Safety is our religion. Every trek is led by IMF-certified guides with Advanced Wilderness First Aid training. We carry satellite communication, oxygen cylinders, and comprehensive medical kits on all high-altitude expeditions.",
  },
  {
    q: "I've never trekked before. Can I join?",
    a: "Absolutely. We have specific 'Beginner' categorized treks like Coorg or Chopta-Tungnath that are designed for first-timers. We also provide a pre-trek fitness consultation to help you prepare.",
  },
  {
    q: "What's included in the price?",
    a: "Our pricing is all-inclusive from the base camp. It covers all meals (nutritious & fresh), high-quality camping gear, forest permits, certified guides, and even a Monk Method journal for your reflections.",
  },
  {
    q: "How do I get to the starting point?",
    a: "Once you book, we provide a detailed 'Route to the Trail' guide. For Himalayan treks, we also arrange shared transport from the nearest major city (like Dehradun or Manali) for an additional fee.",
  },
  {
    q: "What's the cancellation policy?",
    a: "We offer a 100% refund for cancellations made 30 days prior to the trek. For later cancellations, we provide 'Trail Credits' valid for one year, so your investment in adventure is never lost.",
  },
  {
    q: "Do you do custom / private treks?",
    a: "Yes. For groups of 6 or more, we can customize any of our existing routes or design a completely new itinerary tailored to your group's specific goals and pace.",
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      console.log("Form Data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const userName = watch("name");

  return (
    <main className="min-h-screen bg-parchment">
      {/* 1. HERO */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact/contact-hero.jpg"
            alt="Contact Hero"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-forest/60" />
        </div>
        <div className="relative z-10 text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display italic text-5xl md:text-7xl text-white drop-shadow-2xl"
          >
            Let's talk.
          </motion.h1>
        </div>
      </section>

      {/* 2. CONTACT OPTIONS */}
      <section className="py-24 px-6 container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8">
          {/* WhatsApp */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center text-center group hover:border-saffron transition-colors">
            <div className="size-14 rounded-full bg-saffron/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <MessageCircle className="size-7 text-saffron" />
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] uppercase tracking-widest font-bold mb-4">
              Fastest response
            </span>
            <h3 className="font-display text-xl text-forest mb-2">WhatsApp</h3>
            <p className="text-stone-500 text-sm mb-8 leading-relaxed">
              Chat directly with our trek team. Usually reply within 2 hours.
            </p>
            <Link href="https://wa.me/919876543210" className="w-full">
              <Button
                variant="outline"
                className="w-full rounded-xl border-stone-200 hover:border-saffron hover:text-saffron"
              >
                Open WhatsApp →
              </Button>
            </Link>
          </div>

          {/* Email */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center text-center group hover:border-saffron transition-colors">
            <div className="size-14 rounded-full bg-saffron/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Mail className="size-7 text-saffron" />
            </div>
            <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-500 text-[10px] uppercase tracking-widest font-bold mb-4">
              Detailed queries
            </span>
            <h3 className="font-display text-xl text-forest mb-2">Email</h3>
            <p className="text-stone-500 text-sm mb-8 leading-relaxed">
              hello@thetravelingmonk.in
            </p>
            <Link href="mailto:hello@thetravelingmonk.in" className="w-full">
              <Button
                variant="outline"
                className="w-full rounded-xl border-stone-200 hover:border-saffron hover:text-saffron"
              >
                Send an email →
              </Button>
            </Link>
          </div>

          {/* Call */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center text-center group hover:border-saffron transition-colors">
            <div className="size-14 rounded-full bg-saffron/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Phone className="size-7 text-saffron" />
            </div>
            <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-500 text-[10px] uppercase tracking-widest font-bold mb-4">
              For urgent queries
            </span>
            <h3 className="font-display text-xl text-forest mb-2">Call Us</h3>
            <p className="text-stone-500 text-sm mb-8 leading-relaxed">
              +91 98765 43210
              <br />
              Mon–Sat, 9am–8pm IST
            </p>
            <Link href="tel:+919876543210" className="w-full">
              <Button
                variant="outline"
                className="w-full rounded-xl border-stone-200 hover:border-saffron hover:text-saffron"
              >
                Call now →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. LEAD FORM */}
      <section className="py-24 px-6 bg-monk-brown-deep">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-parchment rounded-3xl shadow-xl overflow-hidden border-t-4 border-saffron">
            <div className="p-8 md:p-12">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-10"
                  >
                    <div className="text-center space-y-2">
                      <h2 className="font-display text-3xl text-forest">
                        Plan your trek
                      </h2>
                      <p className="text-stone-500 text-sm">
                        Tell us your mountain goals, and we'll help you reach
                        them.
                      </p>
                    </div>

                    <form
                      onSubmit={handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Name */}
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-stone-400">
                            Name
                          </label>
                          <input
                            {...register("name")}
                            className={cn(
                              "w-full bg-monk-bone border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all",
                              errors.name && "border-rose-500 ring-rose-500/10",
                            )}
                            placeholder="Your name"
                          />
                          {errors.name && (
                            <p className="text-[11px] text-rose-500">
                              {errors.name.message}
                            </p>
                          )}
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-stone-400">
                            Email
                          </label>
                          <input
                            {...register("email")}
                            className={cn(
                              "w-full bg-monk-bone border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all",
                              errors.email &&
                                "border-rose-500 ring-rose-500/10",
                            )}
                            placeholder="your@email.com"
                          />
                          {errors.email && (
                            <p className="text-[11px] text-rose-500">
                              {errors.email.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Phone */}
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-stone-400">
                            Phone
                          </label>
                          <input
                            {...register("phone")}
                            className={cn(
                              "w-full bg-monk-bone border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all",
                              errors.phone &&
                                "border-rose-500 ring-rose-500/10",
                            )}
                            placeholder="10-digit mobile number"
                          />
                          {errors.phone && (
                            <p className="text-[11px] text-rose-500">
                              {errors.phone.message}
                            </p>
                          )}
                        </div>

                        {/* Trek Interest */}
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-stone-400">
                            Which trek interests you?
                          </label>
                          <select
                            {...register("trek")}
                            className={cn(
                              "w-full bg-monk-bone border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all",
                              errors.trek && "border-rose-500 ring-rose-500/10",
                            )}
                          >
                            <option value="">Select a trek</option>
                            {trekData.map((t) => (
                              <option key={t.slug} value={t.name}>
                                {t.name}
                              </option>
                            ))}
                            <option value="Not sure yet">Not sure yet</option>
                          </select>
                          {errors.trek && (
                            <p className="text-[11px] text-rose-500">
                              {errors.trek.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Timing */}
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-stone-400">
                            When are you thinking?
                          </label>
                          <select
                            {...register("timing")}
                            className={cn(
                              "w-full bg-monk-bone border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all",
                              errors.timing &&
                                "border-rose-500 ring-rose-500/10",
                            )}
                          >
                            <option value="">Select timing</option>
                            <option value="Next month">Next month</option>
                            <option value="1-3 months">1–3 months</option>
                            <option value="3-6 months">3–6 months</option>
                            <option value="Just exploring">
                              Just exploring
                            </option>
                          </select>
                          {errors.timing && (
                            <p className="text-[11px] text-rose-500">
                              {errors.timing.message}
                            </p>
                          )}
                        </div>

                        {/* Group Size */}
                        <div className="space-y-2">
                          <label className="text-xs uppercase tracking-widest font-bold text-stone-400">
                            Group size
                          </label>
                          <select
                            {...register("groupSize")}
                            className={cn(
                              "w-full bg-monk-bone border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all",
                              errors.groupSize &&
                                "border-rose-500 ring-rose-500/10",
                            )}
                          >
                            <option value="">Select group size</option>
                            <option value="Solo">Solo</option>
                            <option value="2-3 people">2–3 people</option>
                            <option value="4-6 people">4–6 people</option>
                            <option value="7+ people">7+ people</option>
                            <option value="Corporate group">
                              Corporate group
                            </option>
                          </select>
                          {errors.groupSize && (
                            <p className="text-[11px] text-rose-500">
                              {errors.groupSize.message}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest font-bold text-stone-400">
                          Anything specific you want to know?
                        </label>
                        <textarea
                          {...register("message")}
                          rows={4}
                          className={cn(
                            "w-full bg-monk-bone border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all resize-none",
                            errors.message &&
                              "border-rose-500 ring-rose-500/10",
                          )}
                          placeholder="Tell us more about your experience level, health goals, or any questions..."
                        />
                        {errors.message && (
                          <p className="text-[11px] text-rose-500">
                            {errors.message.message}
                          </p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        variant="saffron"
                        disabled={isSubmitting}
                        className="w-full h-16 rounded-2xl text-base font-bold uppercase tracking-widest shadow-xl transition-all"
                      >
                        {isSubmitting ? "Sending..." : "Send enquiry →"}
                      </Button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="size-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 className="size-10 text-emerald-600" />
                    </div>
                    <h2 className="font-display italic text-4xl text-forest leading-tight">
                      Thank you, {userName}. <br /> We'll reach out within 24
                      hours.
                    </h2>
                    <p className="text-stone-500 text-lg italic">
                      Your trail is waiting.
                    </p>
                    <div className="pt-8">
                      <Button
                        variant="outline"
                        onClick={() => setIsSuccess(false)}
                        className="rounded-full px-8"
                      >
                        Send another enquiry
                      </Button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FAQ ACCORDION */}
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
                    "size-5 text-stone-400 transition-transform duration-300",
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
    </main>
  );
}
