import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { dummyTestimonials } from "@/lib/data/dummyTestimonials";

const StatsStrip = dynamic(
  () =>
    import("@/components/sections/StatsStrip").then((mod) => mod.StatsStrip),
  {
    loading: () => <div className="h-40 animate-pulse bg-parchment/10" />,
  },
);

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
  return (
    <main className="min-h-screen">
      <Hero />
      <StatsStrip />
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
