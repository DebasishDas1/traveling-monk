import { Metadata } from "next";
import { notFound } from "next/navigation";
import { trekData } from "@/lib/treks";
import { TrekHero } from "@/components/trek-detail/TrekHero";
import { TrekOverview } from "@/components/trek-detail/TrekOverview";
import { TrekItinerary } from "@/components/trek-detail/TrekItinerary";
import { TrekInclusions } from "@/components/trek-detail/TrekInclusions";
import { TrekGallery } from "@/components/trek-detail/TrekGallery";
import { TrekTestimonials } from "@/components/trek-detail/TrekTestimonials";
import { TrekBookingWidget } from "@/components/trek-detail/TrekBookingWidget";
import { MobileReserveBar } from "@/components/trek-detail/MobileReserveBar";
import { TrekContact } from "@/components/trek-detail/TrekContact";
import { TrekRelated } from "@/components/trek-detail/TrekRelated";

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

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const trek = trekData.find((t) => t.slug === slug);
  if (!trek) return { title: "Trek Not Found" };

  return {
    title: `${trek.name} | The Traveling Monk`,
    description: trek.tagline,
    openGraph: {
      title: `${trek.name} Trek | The Traveling Monk`,
      description: trek.tagline,
      images: [
        {
          url: trek.image,
          width: 1200,
          height: 630,
          alt: trek.name,
        },
      ],
    },
  };
}

// --- Main Page ---
export default async function TrekDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const trek = trekData.find((t) => t.slug === slug);
  if (!trek) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["Product", "Event"],
    name: trek.name,
    description: trek.description,
    image: trek.image,
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
    startDate: trek.nextDate,
  };

  return (
    <main className="min-h-screen bg-parchment pb-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Hero & Visuals - Grand edge-to-edge feel */}
      <div className="w-full pt-14 md:pt-16 pb-8 md:pb-16">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8">
          <TrekHero trek={trek} />
        </div>
      </div>

      {/* Main Content & Sidebar Container */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-12 xl:gap-20 items-start">
          {/* ⛰️ Main Content Area */}
          <div className="space-y-24 md:space-y-32 xl:pr-4 min-w-0">
            {/* 2. Core Information */}
            <div className="pt-8 border-t border-stone-200/50">
              <TrekOverview trek={trek} />
            </div>

            {/* 3. The Path (Itinerary) */}
            <TrekItinerary trek={trek} />

            {/* 4. Practical Details */}
            <TrekInclusions />

            {/* 5. Atmosphere Gallery */}
            <TrekGallery trek={trek} />

            {/* 6. Community Feedback */}
            <TrekTestimonials trek={trek} />

            {/* 7. Contact / Ask a Monk */}
            <TrekContact />

            {/* 8. Other Treks */}
            <TrekRelated currentTrekSlug={trek.slug} />
          </div>

          {/* 💳 Conversion Widget (Sticky Sidebar) */}
          <div className="sticky top-32 xl:pt-8 hidden lg:block">
            <TrekBookingWidget trek={trek} />
          </div>
        </div>
      </div>

      {/* 📱 Mobile Reserve Bar */}
      <MobileReserveBar trek={trek} />
    </main>
  );
}
