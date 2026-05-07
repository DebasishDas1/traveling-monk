import { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";

import { trekData } from "@/lib/data/treks";

import { TrekHero } from "@/components/trek-detail/TrekHero";
import { TrekOverview } from "@/components/trek-detail/TrekOverview";
import { TrekItinerary } from "@/components/trek-detail/TrekItinerary";
import { TrekInclusions } from "@/components/trek-detail/TrekInclusions";
import { TrekGallery } from "@/components/trek-detail/TrekGallery";
import { TrekTestimonials } from "@/components/trek-detail/TrekTestimonials";
import { TrekBookingWidget } from "@/components/trek-detail/TrekBookingWidget";
import { TrekContact } from "@/components/trek-detail/TrekContact";
import { TrekRelated } from "@/components/trek-detail/TrekRelated";
import { MobileReserveBar } from "@/components/trek-detail/MobileReserveBar";

// --- Types ---
interface PageProps {
  params: Promise<{ slug: string }>;
}

// --- Static Generation ---
export async function generateStaticParams() {
  return trekData.map((trek) => ({
    slug: trek.slug,
  }));
}

// --- SEO Metadata ---
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const trek = trekData.find((t) => t.slug === slug);

  if (!trek) {
    return { title: "Trek Not Found" };
  }

  return {
    title: `${trek.name} | The Traveling Monk`,
    description: trek.tagline,
    keywords: [
      `${trek.name}`,
      `${trek.name} trek`,
      `${trek.region} treks`,
      "trekking india",
      "premium treks",
    ],
    openGraph: {
      title: `${trek.name} Trek | The Traveling Monk`,
      description: trek.tagline,
      images: [
        {
          url: trek.gallery[0],
          width: 1200,
          height: 630,
          alt: trek.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${trek.name} Trek | The Traveling Monk`,
      description: trek.tagline,
      images: [trek.gallery[0]],
    },
    alternates: {
      canonical: `/treks/${slug}`,
    },
  };
}

// --- Main Page ---
export default async function TrekDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const trek = trekData.find((t) => t.slug === slug);

  if (!trek) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Product", "Event"],
    name: trek.name,
    description: trek.description,
    image: trek.gallery[0],
    offers: {
      "@type": "Offer",
      price: trek.priceFrom,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
    },
    location: {
      "@type": "Place",
      name: trek.region,
    },
    ...(trek.nextDate !== "Available on request" && {
      startDate: trek.nextDate,
    }),
  };

  return (
    <main className="min-h-screen bg-parchment pb-32">
      {/* ✅ JSON-LD */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <div className="w-full pt-14 md:pt-16 pb-8 md:pb-16">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8">
          <TrekHero trek={trek} />
        </div>
      </div>

      {/* Layout */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-[1400px] relative">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-12 xl:gap-20 items-start">
          <div className="space-y-24 md:space-y-32 xl:pr-4 min-w-0">
            <div className="pt-8 border-t border-stone-200/50">
              <TrekOverview trek={trek} />
            </div>

            <TrekItinerary trek={trek} />
            <TrekInclusions />
            <TrekGallery trek={trek} />
            <TrekTestimonials trek={trek} />
            <TrekContact />
            <TrekRelated currentTrekSlug={trek.slug} />
          </div>

          {/* Sticky fix needs relative parent */}
          <div className="sticky top-32 xl:pt-8 hidden lg:block">
            <TrekBookingWidget trek={trek} />
          </div>
        </div>
      </div>

      <MobileReserveBar trek={trek} />
    </main>
  );
}
