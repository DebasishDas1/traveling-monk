"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { trekData } from "@/lib/data/treks";

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

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

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

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest font-bold ">
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
                        <label className="text-xs uppercase tracking-widest font-bold ">
                          Email
                        </label>
                        <input
                          {...register("email")}
                          className={cn(
                            "w-full bg-monk-bone border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all",
                            errors.email && "border-rose-500 ring-rose-500/10",
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
                        <label className="text-xs uppercase tracking-widest font-bold ">
                          Phone
                        </label>
                        <input
                          {...register("phone")}
                          className={cn(
                            "w-full bg-monk-bone border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all",
                            errors.phone && "border-rose-500 ring-rose-500/10",
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
                        <label className="text-xs uppercase tracking-widest font-bold ">
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
                        <label className="text-xs uppercase tracking-widest font-bold ">
                          When are you thinking?
                        </label>
                        <select
                          {...register("timing")}
                          className={cn(
                            "w-full bg-monk-bone border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all",
                            errors.timing && "border-rose-500 ring-rose-500/10",
                          )}
                        >
                          <option value="">Select timing</option>
                          <option value="Next month">Next month</option>
                          <option value="1-3 months">1–3 months</option>
                          <option value="3-6 months">3–6 months</option>
                          <option value="Just exploring">Just exploring</option>
                        </select>
                        {errors.timing && (
                          <p className="text-[11px] text-rose-500">
                            {errors.timing.message}
                          </p>
                        )}
                      </div>

                      {/* Group Size */}
                      <div className="space-y-2">
                        <label className="text-xs uppercase tracking-widest font-bold ">
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
                      <label className="text-xs uppercase tracking-widest font-bold ">
                        Anything specific you want to know?
                      </label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        className={cn(
                          "w-full bg-monk-bone border border-stone-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all resize-none",
                          errors.message && "border-rose-500 ring-rose-500/10",
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
  );
}
