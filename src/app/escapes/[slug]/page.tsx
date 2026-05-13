import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import { escapesData } from "@/lib/data/escapes";
import { getImageSrc } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Clock,
  Bus,
  Users,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react";
import { whatsappLink } from "@/lib/social-links";

// --- Types ---
interface PageProps {
  params: Promise<{ slug: string }>;
}

// --- Static Generation (prevents the Suspense/connection error) ---
export async function generateStaticParams() {
  return escapesData.map((escape) => ({
    slug: escape.slug,
  }));
}

// --- SEO Metadata ---
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const escape = escapesData.find((e) => e.slug === slug);

  if (!escape) {
    return { title: "Escape Not Found" };
  }

  const title = `${escape.name} | ${escape.location} | The Traveling Monk`;
  const metaDescription = escape.description.slice(0, 155).trim() + "…";

  return {
    title,
    description: metaDescription,
    keywords: [
      escape.name,
      `${escape.name} trip`,
      `${escape.name} itinerary`,
      `${escape.name} price`,
      `${escape.location}`,
      "mountain escape india",
      "traveling company india",
      "the traveling monk",
    ],
    alternates: {
      canonical: `/escapes/${slug}`,
    },
    openGraph: {
      title: `${escape.name} | The Traveling Monk`,
      description: metaDescription,
      type: "article",
      url: `https://thetravelingmonk.in/escapes/${slug}`,
      images: [
        {
          url: escape.gallery[0],
          width: 1200,
          height: 630,
          alt: `${escape.name} — The Traveling Monk`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${escape.name} | The Traveling Monk`,
      description: metaDescription,
      images: [escape.gallery[0]],
    },
  };
}

// --- JSON-LD ---
function buildJsonLd(escape: (typeof escapesData)[number]) {
  return {
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
  };
}

// --- Main Page ---
export default async function EscapeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const escape = escapesData.find((e) => e.slug === slug);

  if (!escape) {
    notFound();
  }

  const heroImage = getImageSrc(escape.gallery[0], 1600);

  return (
    <main className="min-h-screen bg-parchment pb-32">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildJsonLd(escape)),
        }}
      />

      {/* ═══════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════ */}
      <section className="relative h-[60vh] md:h-[75vh] overflow-hidden">
        <Image
          src={heroImage}
          alt={escape.name}
          fill
          priority
          sizes="(max-width: 1920px) 100vw, 1920px"
          quality={60}
          className="object-cover"
        />

        {/* cinematic overlays */}
        <div className="absolute inset-0 bg-linear-to-t from-[#1f1510]/90 via-[#1f1510]/40 to-black/20" />
        <div className="absolute inset-0 bg-[#7a5a3a]/15 mix-blend-multiply" />

        {/* content */}
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="container mx-auto max-w-7xl px-6 pb-12 md:pb-20">
            {/* breadcrumb */}
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/"
                    className="text-white/60 hover:text-white text-xs uppercase tracking-[0.2em]"
                  >
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/30" />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/escapes"
                    className="text-white/60 hover:text-white text-xs uppercase tracking-[0.2em]"
                  >
                    Escapes
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="text-white/30" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-white/90 text-xs uppercase tracking-[0.2em]">
                    {escape.name}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            {/* pills */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] backdrop-blur-sm">
                {escape.duration}
              </span>
              <span className="bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.25em] backdrop-blur-sm">
                Mountain Escape
              </span>
            </div>

            {/* saffron rule */}
            <div className="w-16 h-[3px] bg-saffron mb-6 rounded-full" />

            <h1 className="text-white font-display text-5xl md:text-8xl italic leading-[1.05] mb-4 [text-shadow:0_4px_24px_rgb(0_0_0/60%)]">
              {escape.name}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm tracking-[0.15em] uppercase [text-shadow:0_2px_8px_rgb(0_0_0/80%)]">
              <span className="flex items-center gap-2">
                <MapPin className="size-4" />
                {escape.location}
              </span>
              <span className="size-1 rounded-full bg-saffron/80" />
              <span className="flex items-center gap-2">
                <Bus className="size-4" />
                Pickup: {escape.pickup}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          BODY
      ═══════════════════════════════════════════════ */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 max-w-[1400px] relative">
        <div className="grid grid-cols-1 xl:grid-cols-[1fr_400px] gap-12 xl:gap-20 items-start">
          {/* ── Main Content ── */}
          <div className="space-y-20 md:space-y-28 pt-12 md:pt-16">
            {/* OVERVIEW */}
            <section className="space-y-10">
              <div className="flex items-center gap-6">
                <h2 className="font-display text-4xl md:text-5xl italic text-[#2B1F14] shrink-0">
                  Overview
                </h2>
                <div className="h-px bg-[#CBB79C] grow" />
              </div>

              <p className="text-[#4A3A2A] text-[16px] font-serif leading-[1.9] max-w-3xl">
                {escape.description}
              </p>

              {/* quick stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { icon: Clock, label: "Duration", value: escape.duration },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: escape.location.split(",")[0],
                  },
                  { icon: Bus, label: "Pickup", value: escape.pickup },
                  { icon: Users, label: "Sharing", value: "Double / Triple" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="p-5 rounded-2xl bg-[#F7F3ED] border border-[#E2D3BD] text-center space-y-2"
                  >
                    <stat.icon className="size-5 mx-auto text-[#8C6B4A]" />
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#8C6B4A] font-bold">
                      {stat.label}
                    </p>
                    <p className="text-[#2B1F14] font-serif text-sm font-semibold">
                      {stat.value}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* HIGHLIGHTS */}
            <section className="space-y-10">
              <div className="flex items-center gap-6">
                <h2 className="font-display text-4xl md:text-5xl italic text-[#2B1F14] shrink-0">
                  Highlights
                </h2>
                <div className="h-px bg-[#CBB79C] grow" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {escape.highlights.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-[#F7F3ED] border border-[#E2D3BD] hover:border-[#C9A24A]/30 transition-colors"
                  >
                    <span className="text-[#C9A24A] font-display text-2xl italic mt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[#4A3A2A] font-serif text-[15px]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* ITINERARY */}
            <section className="space-y-10">
              <div className="flex items-center gap-6">
                <h2 className="font-display text-4xl md:text-5xl italic text-[#2B1F14] shrink-0">
                  Itinerary
                </h2>
                <div className="h-px bg-[#CBB79C] grow" />
              </div>

              <div className="space-y-6">
                {escape.itinerary.map((day, i) => (
                  <div
                    key={i}
                    className="relative pl-8 md:pl-12 pb-8 border-l-2 border-[#E2D3BD] last:border-transparent last:pb-0"
                  >
                    {/* timeline dot */}
                    <div className="absolute -left-[9px] top-1 size-4 rounded-full bg-[#C9A24A] border-2 border-parchment" />

                    <div className="space-y-3">
                      <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[#C9A24A] bg-[#C9A24A]/10 px-3 py-1 rounded-full">
                        {day.day === 0 ? "Night 0" : `Day ${day.day}`}
                      </span>

                      <h3 className="font-display text-xl md:text-2xl text-[#2B1F14] italic">
                        {day.title}
                      </h3>

                      <p className="text-[#4A3A2A] font-serif text-[14px] leading-[1.8] max-w-2xl">
                        {day.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* INCLUSIONS & EXCLUSIONS */}
            <section className="space-y-10">
              <div className="flex items-center gap-6">
                <h2 className="font-display text-4xl md:text-5xl italic text-[#2B1F14] shrink-0">
                  What&apos;s Included
                </h2>
                <div className="h-px bg-[#CBB79C] grow" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* included */}
                <div className="p-8 rounded-[28px] bg-[#F7F3ED] border border-[#E2D3BD] space-y-6">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-emerald-700">
                    ✓ Included
                  </h3>
                  <ul className="space-y-4">
                    {escape.inclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="size-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span className="text-[#4A3A2A] font-serif text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* excluded */}
                <div className="p-8 rounded-[28px] bg-[#FDF8F3] border border-[#E8D5C0] space-y-6">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-rose-700">
                    ✗ Not Included
                  </h3>
                  <ul className="space-y-4">
                    {escape.exclusions.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <XCircle className="size-4 text-rose-400 mt-0.5 shrink-0" />
                        <span className="text-[#6B5A4A] font-serif text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* CONTACT / CTA */}
            <section className="space-y-10">
              <div className="flex items-center gap-6">
                <h2 className="font-display text-4xl md:text-5xl italic text-[#2B1F14] shrink-0">
                  Get in Touch
                </h2>
                <div className="h-px bg-[#CBB79C] grow" />
              </div>

              <div className="p-10 rounded-[32px] bg-[#1f1510] text-center space-y-6">
                <p className="text-white/70 font-serif italic text-lg max-w-xl mx-auto">
                  Have questions about this escape? Our team will help you plan
                  the perfect getaway.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="tel:+919108216171">
                    <Button className="rounded-full h-12 px-8 bg-saffron text-[#1f1510] hover:bg-saffron/90 text-xs uppercase tracking-[0.25em] font-bold">
                      <Phone className="size-4 mr-2" />
                      Call Us
                    </Button>
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="rounded-full h-12 px-8 border-white/20 text-white hover:bg-white/10 text-xs uppercase tracking-[0.25em] font-bold"
                    >
                      <MessageCircle className="size-4 mr-2" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </section>
          </div>

          {/* ── Sticky Booking Sidebar ── */}
          <div className="sticky top-28 pt-12 md:pt-16 hidden lg:block">
            <div className="rounded-[32px] overflow-hidden border border-[#E2D3BD] bg-[#F7F3ED] shadow-[0_20px_60px_rgba(40,30,20,0.12)]">
              {/* header */}
              <div className="bg-[#1f1510] p-8 text-center space-y-4">
                <p className="text-[10px] uppercase tracking-[0.4em] text-[#C9A24A]/60 font-bold">
                  Starting From
                </p>
                <div className="text-white font-display text-5xl italic">
                  ₹{escape.price.double.toLocaleString("en-IN")}
                </div>
                <p className="text-white/40 text-xs italic">
                  per person · double sharing
                </p>
              </div>

              {/* body */}
              <div className="p-8 space-y-6">
                {/* pricing table */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-3 border-b border-[#E2D3BD]">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#8C6B4A] font-semibold">
                      Double Sharing
                    </span>
                    <span className="text-[#2B1F14] font-bold font-serif text-lg">
                      ₹{escape.price.double.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-[#E2D3BD]">
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#8C6B4A] font-semibold">
                      Triple Sharing
                    </span>
                    <span className="text-[#2B1F14] font-bold font-serif text-lg">
                      ₹{escape.price.triple.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                {/* quick info */}
                <div className="space-y-3 text-sm">
                  {[
                    { label: "Duration", value: escape.duration },
                    { label: "Pickup", value: escape.pickup },
                    {
                      label: "Location",
                      value: escape.location.split(",")[0],
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex justify-between text-[#4A3A2A]"
                    >
                      <span className="text-[#8C6B4A]">{item.label}</span>
                      <span className="font-serif font-medium">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA buttons */}
                <div className="space-y-3 pt-4">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button className="w-full h-14 rounded-xl bg-[#1f1510] text-white hover:bg-[#2B1F14] text-xs uppercase tracking-[0.2em] font-bold shadow-lg">
                      <MessageCircle className="size-4 mr-2" />
                      Book via WhatsApp
                    </Button>
                  </a>
                  <a href="tel:+919108216171" className="block">
                    <Button
                      variant="outline"
                      className="w-full h-12 rounded-xl border-[#CBB79C] text-[#2B1F14] hover:bg-[#EFE6D8] text-xs uppercase tracking-[0.2em] font-bold"
                    >
                      <Phone className="size-4 mr-2" />
                      Call +91 91082 16171
                    </Button>
                  </a>
                </div>

                <p className="text-center text-[10px] uppercase tracking-[0.2em] text-[#b8a48e] font-semibold pt-2">
                  Zero payment now · We call you back
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Mobile Reserve Bar ── */}
      <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden">
        <div className="bg-[#1f1510]/95 backdrop-blur-xl border-t border-white/10 px-4 py-3 flex items-center justify-between gap-4">
          <div>
            <div className="text-white font-display text-2xl italic">
              ₹{escape.price.double.toLocaleString("en-IN")}
            </div>
            <p className="text-white/40 text-[10px] uppercase tracking-[0.2em]">
              per person
            </p>
          </div>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="rounded-full h-12 px-8 bg-saffron text-[#1f1510] hover:bg-saffron/90 text-xs uppercase tracking-[0.25em] font-bold shadow-lg">
              Book Now
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </a>
        </div>
      </div>

      {/* ── Back to Escapes ── */}
      <div className="container mx-auto max-w-7xl px-6 pt-20 text-center">
        <Link
          href="/escapes"
          className="group inline-flex items-center gap-4 text-[#2B1F14] font-serif font-bold italic tracking-[0.2em] text-sm hover:text-[#8C6B4A] transition-all"
        >
          <span className="relative">
            ← Back to all escapes
            <span className="absolute left-0 -bottom-2 w-0 h-px bg-[#CBB79C] transition-all duration-500 group-hover:w-full" />
          </span>
        </Link>
      </div>
    </main>
  );
}
