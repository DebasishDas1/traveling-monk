import { Metadata } from "next";
import { notFound } from "next/navigation";

import { escapesData } from "@/lib/data/escapes";
import { EscapeHero } from "@/components/escape-detail/EscapeHero";
import { EscapeOverview } from "@/components/escape-detail/EscapeOverview";
import { EscapeInclusions } from "@/components/escape-detail/EscapeInclusions";
import { MyItinerary } from "@/components/sections/MyItinerary";
import { MyGallery } from "@/components/sections/MyGallery";
import { MyTestimonials } from "@/components/sections/MyTestimonials";
import { MobileReserveBar } from "@/components/sections/MobileReserveBar";
import { EscapeBookingWidget } from "@/components/escape-detail/EscapeBookingWidget";

// --- Types ---
interface PageProps {
  params: Promise<{ slug: string }>;
}

// --- Helpers ---
const getEscapeBySlug = (slug: string) =>
  escapesData.find((e) => e.slug === slug);

// --- Static Params ---
export function generateStaticParams() {
  return escapesData.map(({ slug }) => ({ slug }));
}

// --- Metadata ---
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const escape = getEscapeBySlug(slug);

  if (!escape) {
    return { title: "Escape Not Found" };
  }

  const metaDescription =
    escape.description.slice(0, 155).replace(/\s+\S*$/, "") + "…";

  return {
    title: `${escape.name} | ${escape.location} | The Traveling Monk`,
    description: metaDescription,
    keywords: [
      escape.name,
      `${escape.name} trip`,
      `${escape.name} itinerary`,
      `${escape.name} price`,
      escape.location,
      "mountain escape india",
      "traveling company india",
      "the traveling monk",
    ],
    alternates: {
      canonical: `/escapes/${escape.slug}`,
    },
    openGraph: {
      title: `${escape.name} | The Traveling Monk`,
      description: metaDescription,
      type: "article",
      url: `https://thetravelingmonk.in/escapes/${escape.slug}`,
      images: [
        {
          url: escape.gallery?.[0] || "/default-og.jpg",
          width: 1200,
          height: 630,
          alt: escape.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${escape.name} | The Traveling Monk`,
      description: metaDescription,
      images: [escape.gallery?.[0] || "/default-og.jpg"],
    },
  };
}

// --- JSON-LD ---
const buildJsonLd = (escape: (typeof escapesData)[number]) => ({
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristTrip",
      name: escape.name,
      description: escape.description,
      image: escape.gallery,
      touristType: "Leisure",
      itinerary: escape.itinerary.map((day) => ({
        "@type": "TouristAttraction",
        name: day.title,
        description: day.description,
      })),
      offers: {
        "@type": "Offer",
        price: escape.price.double,
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: `https://thetravelingmonk.in/escapes/${escape.slug}`,
      },
      provider: {
        "@type": "TravelAgency",
        name: "The Traveling Monk",
        url: "https://thetravelingmonk.in",
      },
      location: {
        "@type": "TouristDestination",
        name: escape.location,
      },
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
          name: "Escapes",
          item: "https://thetravelingmonk.in/escapes",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: escape.name,
          item: `https://thetravelingmonk.in/escapes/${escape.slug}`,
        },
      ],
    },
  ],
});

// --- Page ---
export default async function EscapeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const escape = getEscapeBySlug(slug);

  if (!escape) return notFound();

  return (
    <main className="min-h-screen bg-parchment pb-32">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildJsonLd(escape)),
        }}
      />

      {/* HERO */}
      <section className="w-full pt-14 md:pt-16 pb-8 md:pb-16">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8">
          <EscapeHero escape={escape} />
        </div>
      </section>

      {/* CONTENT */}
      <section className="container mx-auto px-4 sm:px-6 md:px-8 max-w-[1400px]">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-12 xl:gap-20 items-start">
          {/* Main */}
          <div className="space-y-24 md:space-y-32 xl:pr-4">
            <div className="pt-8 border-t border-stone-200/50">
              <EscapeOverview escape={escape} />
            </div>

            <MyItinerary itinerary={escape.itinerary} />

            <EscapeInclusions
              inclusions={escape.inclusions}
              exclusions={escape.exclusions}
            />

            <MyGallery gallery={escape.gallery} />
            <MyTestimonials testimonials={escape.testimonials} />
          </div>
          {/* Sidebar */}
          <div className="sticky top-32 xl:pt-8 hidden lg:block">
            <EscapeBookingWidget escape={escape} />
          </div>
        </div>
      </section>

      <MobileReserveBar priceFrom={escape.price.double} slug={escape.slug} />
    </main>
  );
}
