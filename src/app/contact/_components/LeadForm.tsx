"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { trekData } from "@/lib/data/treks";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  trek: z.string().min(1),
  timing: z.string().min(1),
  groupSize: z.string().min(1),
  message: z.string().max(500).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function LeadForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, reset, control } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const userName = useWatch({ control, name: "name" });

  const onSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSuccess(true);
    reset();
    setIsSubmitting(false);
  };

  const inputBase =
    "w-full rounded-xl px-4 py-3 text-sm bg-[#F6F1E8] border border-[#E2D3BD] text-[var(--color-primary)] placeholder:text-[#8A7A68] focus:outline-none focus:border-[var(--color-saffron-light)] transition";

  const labelBase = "text-[10px] uppercase tracking-[0.35em] text-[#8A7A68]";

  return (
    <section className="py-32 px-6 bg-monk-brown-deep">
      <div className="max-w-3xl mx-auto">
        {/* Card */}
        <div
          className="relative rounded-[36px] p-10 md:p-14 
          bg-[#F3EDE3]
          border border-[#E0D0BA]
          shadow-[0_25px_60px_rgba(0,0,0,0.2)]"
        >
          {/* subtle glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(201,162,74,0.08),transparent_70%)] pointer-events-none" />

          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-10"
              >
                {/* Header */}
                <div className="text-center space-y-4">
                  <h2 className="  text-4xl text-[var(--color-primary)]">Plan your trek</h2>
                  <p className="text-[#6B5A4A] text-sm">
                    Tell us a little about your journey.
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Row 1 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className={labelBase}>Name</label>
                      <input {...register("name")} className={inputBase} />
                    </div>

                    <div className="space-y-2">
                      <label className={labelBase}>Email</label>
                      <input {...register("email")} className={inputBase} />
                    </div>
                  </div>

                  {/* Row 2 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className={labelBase}>Phone</label>
                      <input {...register("phone")} className={inputBase} />
                    </div>

                    <div className="space-y-2">
                      <label className={labelBase}>Trek</label>
                      <select {...register("trek")} className={inputBase}>
                        <option value="">Select trek</option>
                        {trekData.map((t) => (
                          <option key={t.slug}>{t.name}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3 */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className={labelBase}>Timing</label>
                      <select {...register("timing")} className={inputBase}>
                        <option value="">Select</option>
                        <option>Next month</option>
                        <option>1–3 months</option>
                        <option>3–6 months</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className={labelBase}>Group size</label>
                      <select {...register("groupSize")} className={inputBase}>
                        <option value="">Select</option>
                        <option>Solo</option>
                        <option>2–3</option>
                        <option>4–6</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className={labelBase}>Message</label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      className={cn(inputBase, "resize-none")}
                    />
                  </div>

                  {/* CTA */}
                  <Button
                    disabled={isSubmitting}
                    className="w-full h-14 rounded-full text-xs tracking-[0.3em] uppercase
                    bg-monk-brown-deep text-white
                    hover:text-saffron"
                  >
                    {isSubmitting ? "Sending..." : "Begin journey"}
                  </Button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16 space-y-6"
              >
                <div className="size-20 rounded-full border border-[var(--color-saffron-light)] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="size-10 text-[var(--color-saffron-light)]" />
                </div>

                <h2 className="  text-3xl text-[var(--color-primary)]">
                  Thank you{userName ? `, ${userName}` : ""}.
                </h2>

                <p className="text-[#6B5A4A] text-sm">
                  We’ll reach out soon. Until then, the mountains wait quietly.
                </p>

                <Button
                  variant="outline"
                  onClick={() => setIsSuccess(false)}
                  className="rounded-full px-8 text-xs tracking-widest"
                >
                  Send another
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
