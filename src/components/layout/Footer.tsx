"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { navLinks } from "./Navbar";
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

const socialLinks = [
  { name: "WhatsApp", href: whatsappLink },
  { name: "Instagram", href: instagramLink },
  { name: "Facebook", href: facebookLink },
] as const;

const socials = [
  {
    label: "Facebook",
    href: facebookLink,
    icon: FacebookIcon,
  },
  {
    label: "Instagram",
    href: instagramLink,
    icon: InstagramIcon,
  },
  {
    label: "YouTube",
    href: youtubeLink,
    icon: YouTubeIcon,
  },
  {
    label: "WhatsApp Community",
    href: whatsappLink,
    icon: WhatsAppIcon,
  },
];

type FooterLinkGroupProps = {
  title: string;
  links: readonly { name: string; href: string }[];
  external?: boolean;
};

const FooterLinkGroup = ({
  title,
  links,
  external = false,
}: FooterLinkGroupProps) => {

  return (
    <div className="space-y-6">
      <h4 className="text-[10px] font-semibold uppercase tracking-[0.35em] text-saffron/70">
        {title}
      </h4>

      <ul className="space-y-3">
        {links.map(({ name, href }) => (
          <li key={name}>
            <Link
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group inline-flex text-sm text-parchment/70 hover:text-parchment"
            >
              <span className="border-b border-transparent pb-0.5 group-hover:border-parchment/20">
                {name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const Footer = () => {
  const [year, setYear] = useState<number | null>(null);
  const [email, setEmail] = useState("");

  const { submit, reset, error, isLoading, isSuccess, isError } =
    useSubscribe();

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await submit(email);

    if (res?.success) {
      setEmail("");
    }
  };

  return (
    <footer className="relative overflow-hidden bg-black text-parchment/80">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,180,80,0.06),transparent_45%)]" />

      <div className="container relative mx-auto max-w-7xl px-6 pb-12 pt-24">
        <div className="mb-20 grid gap-16 md:grid-cols-3 md:gap-12">
          {/* Brand */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Link
                href="/"
                className="inline-block font-display text-3xl italic tracking-tight text-saffron"
              >
                The Traveling Monk
              </Link>
              <p className="max-w-xs font-display text-xl italic leading-relaxed text-parchment/50">
                “Walk until you find yourself.”
                <br />
                {year ?? "—"} All rights reserved.
              </p>

              {/* Social icons */}
              <div className="flex justify-start gap-5">
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
            </div>
          </div>

          {/* Links */}
          <div className="grid gap-12 sm:grid-cols-2">
            <FooterLinkGroup title="Company" links={navLinks} />
            <FooterLinkGroup title="Socials" links={socialLinks} external />
          </div>

          {/* Contact */}
          <div className="space-y-10">
            <div className="space-y-5">
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.35em] text-saffron/70">
                Find Us
              </h4>

              <div className="space-y-3">
                <a
                  href="mailto:team@thetravelingmonk.in"
                  className="block text-lg text-parchment hover:text-saffron"
                >
                  team@thetravelingmonk.in
                </a>

                <p className="pt-2 text-sm italic leading-relaxed text-parchment/35">
                  Based in India · Treks across the Himalayas
                </p>
              </div>
            </div>

            {/* Newsletter */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <label
                htmlFor="newsletter-email"
                className="block text-[10px] font-semibold uppercase tracking-[0.35em] text-parchment/40"
              >
                {isSuccess ? "Welcome to the tribe!" : "Get trek updates"}
              </label>

              <div className="flex gap-2">
                <Input
                  id="newsletter-email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (isError) reset();
                  }}
                  placeholder={isSuccess ? "Joined!" : "Email address"}
                  disabled={isLoading || isSuccess}
                  className="h-11 rounded-full border-white/10 bg-white/5 px-5 text-parchment placeholder:text-parchment/30 focus:ring-saffron/30"
                />

                <Button
                  type="submit"
                  size="icon"
                  disabled={isLoading || isSuccess || !email.trim()}
                  aria-label="Subscribe"
                  className="size-11 shrink-0 rounded-full bg-saffron text-black hover:bg-saffron/90 disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="size-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                  ) : (
                    <ArrowRight className="size-5" />
                  )}
                </Button>
              </div>

              {isError && (
                <p className="text-[10px] italic text-rose-400">
                  {error || "Something went wrong."}
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-[10px] font-semibold uppercase tracking-[0.28em] text-parchment/20 md:flex-row">
          <span>© {year ?? "—"} The Traveling Monk</span>

          <span className="italic tracking-[0.2em] text-parchment/25">
            Made with purpose in the mountains
          </span>
        </div>
      </div>
    </footer>
  );
};
