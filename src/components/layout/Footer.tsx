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
    <div className="space-y-8">
      <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C9A24A]/60">
        {title}
      </h4>

      <ul className="space-y-4">
        {links.map(({ name, href }) => (
          <li key={name}>
            <Link
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group inline-flex text-sm text-[#FAF6EF]/60 hover:text-[#FAF6EF] transition-all"
            >
              <span className="relative">
                {name}
                <span className="absolute left-0 -bottom-1 w-0 h-px bg-[#C9A24A]/40 transition-all duration-300 group-hover:w-full" />
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
    <footer className="relative overflow-hidden bg-[#1f1510] text-[#FAF6EF]">
      {/* subtle atmosphere lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,162,74,0.08),transparent_50%)]" />

      <div className="container relative mx-auto max-w-7xl px-8 pb-12 pt-32">
        <div className="mb-24 grid gap-20 lg:grid-cols-12">
          {/* Brand - 4 columns */}
          <div className="lg:col-span-4 space-y-10">
            <div className="space-y-6">
              <Link
                href="/"
                className="inline-block font-serif text-3xl italic tracking-tight text-[#FAF6EF] hover:text-[#C9A24A] transition-colors"
              >
                The Traveling Monk
              </Link>
              <p className="max-w-xs font-serif text-xl italic leading-relaxed text-[#FAF6EF]/40">
                “Walk until you find yourself.”
              </p>

              {/* Social icons */}
              <div className="flex justify-start gap-4 pt-4">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group size-12 rounded-full flex items-center justify-center bg-white/5 border border-white/10 hover:bg-[#C9A24A]/10 hover:border-[#C9A24A]/40 transition-all duration-500"
                  >
                    <Icon className="size-5 text-white/40 group-hover:text-[#C9A24A] transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Links - 4 columns */}
          <div className="lg:col-span-4 grid gap-12 sm:grid-cols-2">
            <FooterLinkGroup title="Explore" links={navLinks} />
            <FooterLinkGroup title="Connect" links={socialLinks} external />
          </div>

          {/* Newsletter - 4 columns */}
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-6">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C9A24A]/60">
                Newsletter
              </h4>

              <div className="space-y-4">
                <p className="text-lg font-serif italic text-[#FAF6EF]/60">
                  Receive our mountain journals and seasonal trek invitations.
                </p>

                <form onSubmit={handleSubmit} className="relative pt-2">
                  <div className="relative group flex items-center">
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
                      className="h-11 w-full rounded-full border-white/10 bg-white/5 px-5 pr-14 text-parchment placeholder:text-parchment/30 focus:ring-saffron/30"
                    />

                    <Button
                      type="submit"
                      size="icon"
                      disabled={isLoading || isSuccess || !email.trim()}
                      aria-label="Subscribe"
                      className="absolute right-0 size-11 rounded-full bg-saffron text-black hover:bg-saffron/90 disabled:opacity-50"
                    >
                      {isLoading ? (
                        <div className="size-4 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                      ) : (
                        <ArrowRight className="size-5" />
                      )}
                    </Button>
                  </div>

                  {isError && (
                    <p className="absolute -bottom-6 left-0 text-[10px] italic text-rose-400">
                      {error || "Something went wrong."}
                    </p>
                  )}
                </form>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#C9A24A]/60">
                Base Camp
              </h4>
              <p className="text-sm font-serif italic text-[#FAF6EF]/40">
                Based in India · Guiding expeditions through sacred Himalayan
                landscapes.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-8 border-t border-white/5 pt-12 text-[10px] font-bold uppercase tracking-[0.3em] text-[#FAF6EF]/20 md:flex-row">
          <div className="flex gap-8">
            <span>© {year ?? "—"} The Traveling Monk</span>
            <Link
              href="/privacy"
              className="hover:text-[#FAF6EF]/40 transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#FAF6EF]/40 transition-colors"
            >
              Terms
            </Link>
          </div>

          <span className="italic font-serif text-sm tracking-wide lowercase opacity-50">
            made with purpose in the Himalayas
          </span>
        </div>
      </div>
    </footer>
  );
};
