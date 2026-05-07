import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { StatsStrip } from "@/components/sections/StatsStrip";
import { dummyTestimonials } from "@/lib/data/dummyTestimonials";
import { whatsappNumber } from "@/lib/utils";

const FeaturedTreks = dynamic(
  () =>
    import("@/components/sections/FeaturedTreks").then(
      (mod) => mod.FeaturedTreks,
    ),
  {
    loading: () => <div className="h-96 animate-pulse bg-parchment/20" />,
  },
);

const HandWrittenTitle = dynamic(() =>
  import("@/components/ui/hand-writing-text").then(
    (mod) => mod.HandWrittenTitle,
  ),
);

const TestimonialCarousel = dynamic(
  () =>
    import("@/components/ui/TestimonialCarousel").then(
      (mod) => mod.TestimonialCarousel,
    ),
  {
    loading: () => <div className="h-[500px] animate-pulse bg-parchment/10" />,
  },
);

const HowItWorks = dynamic(() =>
  import("@/components/sections/HowItWorks").then((mod) => mod.HowItWorks),
);

const CTABanner = dynamic(() =>
  import("@/components/sections/CTABanner").then((mod) => mod.CTABanner),
);

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Traveling Monk",
    url: "https://thetravelingmonk.in",
    logo: "https://thetravelingmonk.in/logo.png",
    sameAs: [
      "https://www.instagram.com/thetravelingmonk.in?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      "https://www.youtube.com/@thetravelingmonk",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+91-${whatsappNumber}`,
      contactType: "customer service",
    },
  };

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* 🏔️ Above the fold: Priority loading */}
      <Hero />
      <StatsStrip />

      {/* 🗺️ Below the fold: Lazy loading */}
      <FeaturedTreks />

      <HandWrittenTitle
        title="The path"
        subtitle="is not outside. It never was."
      />

      <TestimonialCarousel testimonials={dummyTestimonials} />

      <HowItWorks />

      <CTABanner />
    </main>
  );
}
