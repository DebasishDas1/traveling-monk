"use client";

import { useState, useId } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { whatsappLink } from "@/lib/utils";

// ─── WhatsApp SVG (no icon library dep) ───────────────────────────────────
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// ─── Social links ──────────────────────────────────────────────────────────
const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/thetravelingmonk",
    icon: ArrowRight,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@thetravelingmonk",
    icon: ArrowRight,
  },
  {
    label: "WhatsApp Community",
    href: whatsappLink,
    icon: WhatsAppIcon,
  },
];

// ─── Component ─────────────────────────────────────────────────────────────
export const JoinForm = () => {
  const emailId = useId();
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");

    try {
      // TODO: replace with your Resend / ConvertKit / API endpoint
      await new Promise((res) => setTimeout(res, 1200)); // simulate API
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="join"
      className="relative py-32 bg-forest overflow-hidden"
      aria-labelledby="join-heading"
    >
      {/* Decorative top fade */}
      <div
        aria-hidden="true"
        className="absolute top-0 inset-x-0 h-24 bg-linear-to-b from-parchment/10 to-transparent"
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-saffron/5 blur-[120px]" />
      </div>

      <div className="container mx-auto max-w-3xl px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow */}
          <p className="text-saffron text-[11px] font-bold uppercase tracking-[0.28em] mb-6">
            Join the Tribe
          </p>

          {/* Heading */}
          <h2
            id="join-heading"
            className="font-display text-5xl md:text-7xl text-white mb-6 leading-[1.05]"
          >
            Become a <em className="italic text-saffron">Traveling Monk.</em>
          </h2>

          <p className="text-white/55 text-base md:text-lg font-sans leading-relaxed mb-12 max-w-xl mx-auto">
            Subscribe to our monthly dispatch from the mountains — stories, gear
            guides, and early access to limited treks. No spam, ever.
          </p>

          {/* Email form */}
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-saffron/10 border border-saffron/30 rounded-2xl px-8 py-6 text-saffron font-display italic text-xl"
            >
              Welcome to the tribe. Your trail awaits. 🏔️
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
              noValidate
            >
              <label htmlFor={emailId} className="sr-only">
                Email address
              </label>
              <input
                id={emailId}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={status === "loading"}
                className="flex-1 bg-white/5 border border-white/10 rounded-full px-7 py-4 text-white placeholder:text-white/35 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron/50 transition-all disabled:opacity-50"
              />
              <Button
                type="submit"
                variant="saffron"
                disabled={status === "loading"}
                className="rounded-full px-8 py-4 h-auto font-bold uppercase tracking-widest text-sm shadow-lg shadow-saffron/20 disabled:opacity-70 group"
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <span className="size-4 rounded-full border-2 border-monk-dark/30 border-t-monk-dark animate-spin" />
                    Joining…
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    Join Now
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                )}
              </Button>
            </form>
          )}

          {status === "error" && (
            <p className="mt-3 text-red-400 text-sm" role="alert">
              Something went wrong. Please try again or email us directly.
            </p>
          )}

          {/* Divider */}
          <div className="mt-16 flex items-center gap-6 justify-center">
            <div className="h-px flex-1 bg-white/8 max-w-[80px]" />
            <span className="text-white/30 text-xs uppercase tracking-widest">
              or find us on
            </span>
            <div className="h-px flex-1 bg-white/8 max-w-[80px]" />
          </div>

          {/* Social icons */}
          <div className="mt-8 flex items-center justify-center gap-5">
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

          {/* WhatsApp CTA */}
          <div className="mt-12 pt-10 border-t border-white/8">
            <p className="text-white/40 text-sm font-sans mb-4">
              Want to talk to a human first?
            </p>
            <Button
              variant="outline"
              asChild
              className="rounded-full border-white/20 text-white hover:bg-white/8 hover:border-white/40"
            >
              <a
                href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20join%20the%20Monk%20Tribe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="size-4 mr-2 text-green-400" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
