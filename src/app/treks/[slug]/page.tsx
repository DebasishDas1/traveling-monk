import { Metadata } from "next";
import { notFound } from "next/navigation";

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
  const title = `${trek.name} | ${trek.region} | The Traveling Monk`;
  const metaDescription = trek.description.slice(0, 155).trim() + "…";

  return {
    title,
    description: metaDescription,
    keywords: [
      trek.name,
      `${trek.name} trek`,
      `${trek.name} itinerary`,
      `${trek.name} price`,
      `${trek.region} treks`,
      `${trek.difficulty} himalayan trek`,
      `${trek.duration} trek india`,
      "trekking company india",
      "the traveling monk",
    ],
    alternates: {
      canonical: `/treks/${slug}`,
    },
    openGraph: {
      title: `${trek.name} Trek | ${trek.region} | The Traveling Monk`,
      description: metaDescription,
      type: "article",
      url: `https://thetravelingmonk.in/treks/${slug}`,
      images: [
        {
          url: trek.gallery[0],
          width: 1200,
          height: 630,
          alt: `${trek.name} trek in ${trek.region}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${trek.name} Trek | ${trek.region}`,
      description: metaDescription,
      images: [trek.gallery[0]],
    },
  };
}

const ONE_YEAR_FROM_BUILD = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)
  .toISOString()
  .split("T")[0];

function buildJsonLd(trek: (typeof trekData)[number]) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TouristTrip",
        "@id": `https://thetravelingmonk.in/treks/${trek.slug}#trip`,
        name: trek.name,
        description: trek.description,
        image: trek.gallery,
        touristType: "Adventure",
        itinerary: trek.itinerary.map((day) => ({
          "@type": "TouristAttraction",
          name: day.title,
          description: day.description,
        })),
        offers: {
          "@type": "Offer",
          price: trek.priceFrom,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          url: `https://thetravelingmonk.in/treks/${trek.slug}`,
        },
        provider: {
          "@type": "TravelAgency",
          name: "The Traveling Monk",
          url: "https://thetravelingmonk.in",
        },
        location: {
          "@type": "TouristDestination",
          name: trek.region,
          containedInPlace: {
            "@type": "Country",
            name: "India",
          },
        },
      },
      {
        "@type": "Product",
        "@id": `https://thetravelingmonk.in/treks/${trek.slug}#product`,
        name: `${trek.name} Trek Package`,
        description: trek.tagline,
        image: trek.gallery[0],
        brand: {
          "@type": "Brand",
          name: "The Traveling Monk",
        },
        offers: {
          "@type": "Offer",
          price: trek.priceFrom,
          priceCurrency: "INR",
          availability: "https://schema.org/InStock",
          priceValidUntil: ONE_YEAR_FROM_BUILD,
          url: `https://thetravelingmonk.in/treks/${trek.slug}`,
        },
        ...(trek.testimonials.length > 0 && {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue:
              trek.testimonials.reduce((sum, t) => sum + t.rating, 0) /
              trek.testimonials.length,
            reviewCount: trek.testimonials.length,
            bestRating: 5,
            worstRating: 1,
          },
          review: trek.testimonials.map((t) => ({
            "@type": "Review",
            author: { "@type": "Person", name: t.name },
            reviewRating: {
              "@type": "Rating",
              ratingValue: t.rating,
              bestRating: 5,
            },
            reviewBody: t.quote,
          })),
        }),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://thetravelingmonk.in",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Treks",
            item: "https://thetravelingmonk.in/treks",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: trek.name,
            item: `https://thetravelingmonk.in/treks/${trek.slug}`,
          },
        ],
      },
      // Node 4: FAQPage — if you ever add an FAQ section to TrekDetail,
      // structured FAQ data unlocks accordion-style rich results in SERPs.
      // Uncomment and populate with real questions from the page.
      // {
      //   "@type": "FAQPage",
      //   mainEntity: [
      //     {
      //       "@type": "Question",
      //       name: `What is the difficulty level of ${trek.name}?`,
      //       acceptedAnswer: {
      //         "@type": "Answer",
      //         text: `${trek.name} is rated ${trek.difficulty}...`,
      //       },
      //     },
      //   ],
      // },
    ],
  };
}

// --- Main Page ---
export default async function TrekDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const trek = trekData.find((t) => t.slug === slug);

  if (!trek) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-parchment pb-32">
      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd(trek)) }}
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
          {/* Main content column */}
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

          {/* Sticky booking widget */}
          <div className="sticky top-32 xl:pt-8 hidden lg:block">
            <TrekBookingWidget trek={trek} />
          </div>
        </div>
      </div>

      <MobileReserveBar trek={trek} />
    </main>
  );
}
