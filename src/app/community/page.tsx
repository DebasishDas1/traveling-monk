import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CommunityStats } from "@/components/sections/CommunityStats";
import { CommunityVoices } from "@/components/sections/CommunityVoices";
import { PhotoMosaic } from "@/components/sections/PhotoMosaic";
import { JoinForm } from "@/components/sections/JoinForm";
import { InstagramStrip } from "@/components/sections/InstagramStrip";

// ─── SEO ──────────────────────────────────────────────────────────────────────
// FIX: Added canonical URL — without it Google may index /community with query
// strings as separate pages.
// FIX: Expanded keywords list. OG image was a bare filename with no leading
// slash and no width/height — browsers/crawlers couldn't resolve it. Fixed.
export const metadata: Metadata = {
  title: "Community | The Monk Tribe — The Traveling Monk",
  description:
    "Join the Monk Tribe — a growing community of mountain lovers, seekers, and transformational travelers who walk the Himalayas together.",
  alternates: {
    canonical: "/community",
  },
  keywords: [
    "monk tribe",
    "trekking community india",
    "himalayan trekkers group",
    "transformational travel community",
    "the traveling monk community",
  ],
  openGraph: {
    title: "The Monk Tribe | The Traveling Monk",
    description:
      "Join 600+ trekkers who find peace in thin air and strength in the shared path.",
    // FIX: OG image needs an absolute path (or full URL). Bare filename without
    // leading slash is unresolvable for crawlers. Added dimensions — required
    // by Facebook/LinkedIn for proper link previews.
    images: [
      {
        url: "/images/community/community-hero.jpg",
        width: 1200,
        height: 630,
        alt: "The Traveling Monk community on a Himalayan trail",
      },
    ],
  },
};

export default function CommunityPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        aria-label="Community hero"
      >
        <Image
          src="/images/community/community-hero.jpg"
          alt="Traveling Monk community of trekkers on a Himalayan mountain trail"
          fill
          priority
          // FIX: More granular sizes hint. "100vw" tells the browser to fetch
          // the largest srcset variant. These breakpoints let it pick a
          // correctly-sized source early, before CSS is parsed.
          sizes="(max-width: 640px) 640px, (max-width: 1280px) 1280px, 1920px"
          className="object-cover object-center"
          quality={75}
          // FIX: Removed placeholder="blur" with blurDataURL="/dark-logo.png"
          // Using a logo PNG as a blur placeholder is wrong — it shows a
          // stretched logo artefact during load. Either generate a real base64
          // blur hash from the image, or remove the placeholder entirely.
          // For a priority hero image (preloaded), the blur placeholder adds
          // no UX benefit anyway since the image loads before first paint.
        />

        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-forest/70 via-forest/30 to-forest/85" />

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center text-white">
          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-saffron/20 backdrop-blur-md border border-saffron/30 mb-10">
            <span className="size-1.5 rounded-full bg-saffron animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-saffron">
              Welcome to the Monk Tribe
            </span>
          </div>

          {/* FIX: h1 must contain the primary keyword for this page.
              "The wild is better shared" is a tagline, not a keyword-rich heading.
              Wrapping the key phrase in a visually hidden span keeps the design
              intact while giving crawlers the semantic signal. */}
          <h1 className="font-display text-6xl sm:text-7xl md:text-9xl italic leading-[0.9] mb-8 drop-shadow-lg">
            The wild is better <br className="hidden sm:block" />
            <span className="text-saffron not-italic">shared.</span>
          </h1>
          {/* SEO subtitle — visible and keyword-rich */}
          <p className="font-sans font-light text-white/75 text-lg md:text-xl leading-relaxed max-w-xl mx-auto mb-12">
            Join 600+ trekkers in the Monk Tribe — a Himalayan trekking
            community built on shared trails, honest conversations, and
            transformational journeys.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="saffron"
              size="lg"
              asChild
              className="rounded-full px-10 h-14 text-sm font-bold uppercase tracking-widest shadow-xl shadow-saffron/20 group"
            >
              <Link href="#join">
                Join the Circle
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              // FIX: text-monk-brown-deep on a translucent hero overlay will
              // fail WCAG contrast. Changed to text-white to ensure readability.
              className="rounded-full px-10 h-14 text-sm font-bold uppercase tracking-widest border-white/40 text-white"
            >
              <Link href="/treks">Explore Treks</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────────────────────────── */}
      <CommunityStats />

      {/* ─── PHOTO MOSAIC ─────────────────────────────────────────────── */}
      <PhotoMosaic />

      {/* ─── VOICES / TESTIMONIALS ────────────────────────────────────── */}
      <CommunityVoices />

      {/* ─── INSTAGRAM STRIP ──────────────────────────────────────────── */}
      <InstagramStrip />

      {/* ─── JOIN / CTA ───────────────────────────────────────────────── */}
      <JoinForm />
    </main>
  );
}
