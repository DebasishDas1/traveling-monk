"use client";

import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";

// ─── Data ──────────────────────────────────────────────────────────────────
interface Tier {
  name: string;
  tagline: string;
  price: string;
  period: string;
  perks: string[];
  cta: string;
  href: string;
  featured: boolean;
}

const tiers: Tier[] = [
  {
    name: "Trail Walker",
    tagline: "Your first step into the tribe",
    price: "Free",
    period: "",
    perks: [
      "Access to Monk community WhatsApp",
      "Monthly trail newsletter",
      "Early announcements on new treks",
      "Member-only trail guides (PDF)",
    ],
    cta: "Join Free",
    href: "#join",
    featured: false,
  },
  {
    name: "Monk Tribe",
    tagline: "The full monk experience",
    price: "₹4,999",
    period: "/ year",
    perks: [
      "Everything in Trail Walker",
      "10% discount on all treks",
      "Priority booking — 48hr early access",
      "1 free gear kit per year",
      "Monthly virtual fireside chat",
      "Monk journal + welcome pack",
      "Access to alumni community app",
    ],
    cta: "Become a Monk",
    href: "#join",
    featured: true,
  },
  {
    name: "Summit Partner",
    tagline: "For corporate teams & organisations",
    price: "Custom",
    period: "",
    perks: [
      "Everything in Monk Tribe",
      "Dedicated trek coordinator",
      "Corporate leadership trek design",
      "Custom branding options",
      "Quarterly offsite planning",
      "Invoice-based billing",
    ],
    cta: "Contact Us",
    href: "/contact",
    featured: false,
  },
];

// ─── Card ──────────────────────────────────────────────────────────────────
const TierCard = ({ tier, index }: { tier: Tier; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 36 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ delay: index * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    className={cn(
      "relative flex flex-col rounded-3xl border p-8 transition-shadow duration-500",
      tier.featured
        ? "bg-forest border-saffron/50 shadow-2xl shadow-saffron/10 md:-translate-y-4 md:scale-[1.02]"
        : "bg-white/60 backdrop-blur-sm border-black/8 hover:shadow-xl",
    )}
  >
    {/* Featured badge */}
    {tier.featured && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-saffron text-monk-dark text-[10px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full shadow-lg">
        <Sparkles className="size-3" aria-hidden="true" />
        Most Popular
      </div>
    )}

    {/* Header */}
    <div className="mb-8">
      <p
        className={cn(
          "text-[10px] font-bold uppercase tracking-[0.2em] mb-2",
          tier.featured ? "text-saffron" : "text-monk-muted",
        )}
      >
        {tier.tagline}
      </p>
      <h3
        className={cn(
          "font-display text-3xl font-semibold mb-4",
          tier.featured ? "text-white" : "text-forest",
        )}
      >
        {tier.name}
      </h3>

      {/* Price */}
      <div className="flex items-baseline gap-1">
        <span
          className={cn(
            "font-display text-5xl font-semibold",
            tier.featured ? "text-saffron" : "text-forest",
          )}
        >
          {tier.price}
        </span>
        {tier.period && (
          <span
            className={cn(
              "text-sm font-sans",
              tier.featured ? "text-white/50" : "text-forest/40",
            )}
          >
            {tier.period}
          </span>
        )}
      </div>
    </div>

    {/* Perks */}
    <ul className="flex flex-col gap-3 flex-1 mb-8" role="list">
      {tier.perks.map((perk) => (
        <li key={perk} className="flex items-start gap-3">
          <span
            className={cn(
              "mt-0.5 shrink-0 size-4 rounded-full flex items-center justify-center",
              tier.featured ? "bg-saffron/20" : "bg-forest/8",
            )}
          >
            <Check
              className={cn(
                "size-2.5",
                tier.featured ? "text-saffron" : "text-forest",
              )}
              aria-hidden="true"
            />
          </span>
          <span
            className={cn(
              "text-[13px] leading-snug",
              tier.featured ? "text-white/80" : "text-forest/70",
            )}
          >
            {perk}
          </span>
        </li>
      ))}
    </ul>

    {/* CTA */}
    <Button
      variant={tier.featured ? "saffron" : "outline"}
      size="lg"
      asChild
      className={cn(
        "w-full rounded-full h-12 font-bold uppercase tracking-widest text-sm",
        !tier.featured &&
          "border-forest/30 text-forest hover:border-saffron hover:text-saffron",
      )}
    >
      <Link href={tier.href}>{tier.cta}</Link>
    </Button>
  </motion.div>
);

// ─── Section ───────────────────────────────────────────────────────────────
export const MembershipTiers = () => (
  <section
    className="relative py-32 px-6 bg-parchment-texture overflow-hidden"
    aria-labelledby="membership-heading"
  >
    {/* Subtle top border */}
    <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-saffron/30 to-transparent" />

    <div className="container mx-auto max-w-6xl relative z-10">
      {/* Header */}
      <div className="text-center mb-20">
        <p className="text-monk-muted text-[11px] font-bold uppercase tracking-[0.26em] mb-4">
          Membership
        </p>
        <h2
          id="membership-heading"
          className="font-display text-5xl md:text-6xl text-forest mb-6"
        >
          Choose your path.
        </h2>
        <p className="text-forest/55 font-sans max-w-md mx-auto text-base leading-relaxed">
          Every level of the Monk Tribe gets you closer to the mountain. Start
          free, upgrade when you&apos;re ready.
        </p>
      </div>

      {/* Tier cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {tiers.map((tier, i) => (
          <TierCard key={tier.name} tier={tier} index={i} />
        ))}
      </div>

      {/* Fine print */}
      <p className="text-center text-forest/40 text-xs font-sans mt-12">
        All memberships renew annually. Cancel anytime. GST applicable on paid
        tiers.
      </p>
    </div>
  </section>
);
