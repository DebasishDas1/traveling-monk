"use client";

import { useState, useId } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import {
  whatsappLink,
  facebookLink,
  instagramLink,
  youtubeLink,
} from "@/lib/social-links";
import {
  WhatsAppIcon,
  YouTubeIcon,
  FacebookIcon,
  InstagramIcon,
} from "@/components/myIcons";
import { useSubscribe } from "@/hooks/useSubscribe";

// ─── Social links ──────────────────────────────────────────────────────────
const socials = [
  { label: "Facebook", href: facebookLink, icon: FacebookIcon },
  { label: "Instagram", href: instagramLink, icon: InstagramIcon },
  { label: "YouTube", href: youtubeLink, icon: YouTubeIcon },
  { label: "WhatsApp Community", href: whatsappLink, icon: WhatsAppIcon },
];

// ─── Component ─────────────────────────────────────────────────────────────
export const JoinForm = () => {
  const emailId = useId();
  const [email, setEmail] = useState("");

  const { submit, reset, error, isLoading, isSuccess, isError } =
    useSubscribe();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await submit(email);

    if (res?.success) {
      setEmail("");
    }
  };

  return (
    <section
      id="join"
      className="relative py-24 md:py-32 bg-forest overflow-hidden"
      aria-labelledby="join-heading"
    >
      {/* Top fade */}
      <div className="absolute top-0 inset-x-0 h-24 bg-linear-to-b from-parchment/10 to-transparent" />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-saffron/5 blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-3xl px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          <p className="text-saffron text-[11px] font-bold uppercase tracking-[0.28em] mb-6">
            Join the Tribe
          </p>

          {/* Heading */}
          <h2
            id="join-heading"
            className="font-display text-4xl md:text-6xl text-white mb-6 leading-tight"
          >
            Become a <em className=" text-saffron">Traveling Monk.</em>
          </h2>

          <p className="text-white/60 text-sm md:text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Stories from the mountains, early access to treks, and gear guides —
            no spam, just good journeys.
          </p>

          {/* Success */}
          {isSuccess ? (
            <motion.div
              role="status"
              aria-live="polite"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-saffron/10 border border-saffron/30 rounded-2xl px-6 py-5 text-saffron font-display  text-lg"
            >
              Welcome to the tribe. Your trail awaits. 🏔️
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              noValidate
            >
              <label htmlFor={emailId} className="sr-only">
                Email address
              </label>

              <input
                id={emailId}
                name="email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (isError) reset();
                }}
                placeholder="your@email.com"
                disabled={isLoading}
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white placeholder:text-white/40 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/60 focus:border-saffron/50 focus:shadow-[0_0_0_4px_rgba(255,153,51,0.1)] transition-all disabled:opacity-50"
              />

              <Button
                type="submit"
                variant="saffron"
                disabled={isLoading || !email.trim()}
                className="rounded-full px-6 py-3 h-auto font-bold uppercase tracking-widest text-xs shadow-lg shadow-saffron/20 hover:shadow-xl hover:shadow-saffron/30 transition-all disabled:opacity-70 group"
              >
                {isLoading ? (
                  <span className="flex items-center gap-2">
                    <span className="size-4 rounded-full border-2 border-monk-dark/30 border-t-monk-dark animate-spin" />
                    Joining…
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Join
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                )}
              </Button>
            </form>
          )}

          {/* Error */}
          {isError && (
            <p className="mt-3 text-red-400 text-sm" role="alert">
              {error || "Something went wrong. Please try again."}
            </p>
          )}

          {/* Divider */}
          <div className="mt-14 flex items-center gap-4 justify-center">
            <div className="h-px flex-1 bg-white/10 max-w-[60px]" />
            <span className="text-white/30 text-[10px] uppercase tracking-widest">
              or connect
            </span>
            <div className="h-px flex-1 bg-white/10 max-w-[60px]" />
          </div>

          {/* Socials */}
          <div className="mt-6 flex items-center justify-center gap-4">
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group p-3 rounded-full bg-white/5 border border-white/10 hover:bg-saffron/15 hover:border-saffron/40 transition-all duration-300"
              >
                <Icon className="size-5 text-white/50 group-hover:text-saffron transition-colors" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
