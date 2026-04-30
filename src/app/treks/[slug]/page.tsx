import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  MapPin,
  Clock,
  Users,
  Mountain,
  Calendar,
  CheckCircle2,
  XCircle,
  Star,
  MessageCircle,
  ShieldCheck,
  RotateCcw,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { trekData, Trek } from "@/lib/treks";
import { Button } from "@/components/ui/button";

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
          url: trek.image, // In production, this should be an absolute URL
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
      images: [trek.image],
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
      address: {
        "@type": "PostalAddress",
        addressLocality: trek.region,
        addressCountry: "IN",
      },
    },
    startDate: trek.nextDate,
    organizer: {
      "@type": "Organization",
      name: "The Traveling Monk",
      url: "https://thetravelingmonk.in",
    },
  };

  return (
    <main className="min-h-screen bg-parchment pb-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 🧭 Breadcrumb & Header */}
      <div className="container mx-auto px-6 py-8">
        <nav className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-6">
          <Link href="/" className="hover:text-saffron transition-colors">
            Home
          </Link>
          <ChevronRight className="size-3" />
          <Link href="/treks" className="hover:text-saffron transition-colors">
            Treks
          </Link>
          <ChevronRight className="size-3" />
          <span className="text-stone-600">{trek.name}</span>
        </nav>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-20">
        {/* ⛰️ LEFT COLUMN */}
        <div className="space-y-20">
          {/* 1. TREK HERO (Gallery) */}
          <section className="space-y-4">
            <div className="relative aspect-video w-full overflow-hidden rounded-3xl shadow-2xl group">
              <Image
                src={trek.image}
                alt={trek.name}
                fill
                priority={true}
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover transition-transform duration-10000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
            </div>

            <div className="grid grid-cols-4 gap-4">
              {[
                "1544735716-392fe2489ffa",
                "1465146344425-f00d5f5c8f07",
                "1501785888041-af3ef285b470",
                "1464822759023-fed622ff2c3b",
              ].map((photoId, i) => (
                <div
                  key={i}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-md cursor-pointer hover:ring-2 hover:ring-saffron transition-all"
                >
                  <Image
                    src={`https://images.unsplash.com/photo-${photoId}?auto=format&fit=crop&q=80&w=400`}
                    alt={`${trek.name} gallery ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 25vw, 15vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* 2. TREK INTRO */}
          <section className="space-y-6">
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-1 rounded-full bg-saffron/10 text-saffron text-[10px] uppercase tracking-widest font-bold border border-saffron/20">
                {trek.difficulty}
              </span>
              <span className="px-4 py-1 rounded-full bg-stone-100 text-stone-500 text-[10px] uppercase tracking-widest font-bold border border-stone-200">
                {trek.duration}
              </span>
              <span className="px-4 py-1 rounded-full bg-stone-100 text-stone-500 text-[10px] uppercase tracking-widest font-bold border border-stone-200">
                {trek.region}
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl text-forest leading-tight">
              {trek.name}
            </h1>
            <p className="font-display italic text-2xl text-stone-500">
              {trek.tagline}
            </p>

            <div className="grid grid-cols-3 gap-8 py-8 border-y border-stone-200">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-stone-400">
                  <Mountain className="size-4" />
                  <span className="text-[10px] uppercase tracking-widest">
                    Altitude
                  </span>
                </div>
                <p className="font-display text-xl text-forest">
                  {trek.altitude}
                </p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-stone-400">
                  <Users className="size-4" />
                  <span className="text-[10px] uppercase tracking-widest">
                    Group Size
                  </span>
                </div>
                <p className="font-display text-xl text-forest">
                  Max {trek.maxGroupSize}
                </p>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-stone-400">
                  <Calendar className="size-4" />
                  <span className="text-[10px] uppercase tracking-widest">
                    Next Date
                  </span>
                </div>
                <p className="font-display text-xl text-forest">
                  {trek.nextDate}
                </p>
              </div>
            </div>
          </section>

          {/* 3. OVERVIEW */}
          <section className="space-y-8">
            <h2 className="font-display text-3xl text-forest">
              What to expect
            </h2>
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed max-w-2xl">
              {trek.description.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {trek.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="px-4 py-2 rounded-lg bg-saffron/5 text-saffron text-sm border border-saffron/10"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </section>

          {/* 4. THE EXPERIENCE (Timeline) */}
          <section className="space-y-12">
            <h2 className="font-display text-3xl text-forest">
              The experience arc
            </h2>
            <div className="relative space-y-0 pl-8">
              {/* Vertical line */}
              <div className="absolute left-[15px] top-4 bottom-4 w-px border-l border-dashed border-saffron/40" />

              {trek.itinerary.map((day, idx) => (
                <div key={day.day} className="relative pb-12 last:pb-0">
                  <div className="absolute left-[-33px] top-0 size-8 rounded-full bg-saffron flex items-center justify-center text-forest font-bold text-xs shadow-lg">
                    {day.day}
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-xl text-forest font-bold">
                      {day.title}
                    </h3>
                    <p className="text-stone-500 leading-relaxed max-w-xl">
                      {day.description}
                    </p>
                  </div>
                </div>
              ))}

              {/* Closing state */}
              <div className="relative pt-8">
                <div className="absolute left-[-33px] top-8 size-8 rounded-full bg-forest flex items-center justify-center text-white font-bold text-xs shadow-lg">
                  ∞
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-3xl text-forest italic font-bold">
                    Return. Changed.
                  </h3>
                  <p className="text-stone-500 leading-relaxed max-w-xl">
                    Carry the monk mindset back to your city, your work, and
                    your life.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 5. INCLUDED / EXCLUDED */}
          <section className="grid md:grid-cols-2 gap-12 pt-12 border-t border-stone-200">
            <div className="space-y-6">
              <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-forest">
                What's included
              </h3>
              <ul className="space-y-4">
                {[
                  "Curated guide service",
                  "Nutritious meals",
                  "Comfortable stays",
                  "Safety equipment",
                  "Monk Method Journal",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-stone-600"
                  >
                    <CheckCircle2 className="size-5 text-emerald-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h3 className="text-sm uppercase tracking-[0.3em] font-bold text-stone-400">
                Not included
              </h3>
              <ul className="space-y-4">
                {[
                  "Flights to destination",
                  "Personal trekking gear",
                  "Travel insurance",
                  "Personal expenses",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-stone-400"
                  >
                    <XCircle className="size-5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 6. PHOTOS & VIDEOS */}
          <section className="space-y-8">
            <h2 className="font-display text-3xl text-forest">
              Photos & Videos
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="col-span-2 row-span-2 relative aspect-square rounded-3xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1200"
                  alt="Atmospheric mountain view"
                  fill
                  className="object-cover transition-transform duration-10000 hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600"
                  alt="trek"
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=600"
                  alt="trek"
                  fill
                  sizes="(max-width: 768px) 50vw, 20vw"
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* 7. TESTIMONIALS */}
          <section className="space-y-12">
            <h2 className="font-display text-3xl text-forest">
              Voices from the trail
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {trek.testimonials.map((t, i) => (
                <div
                  key={i}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 space-y-6"
                >
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        className="size-3 fill-saffron text-saffron"
                      />
                    ))}
                  </div>
                  <p className="text-stone-600 italic leading-relaxed font-serif">
                    “{t.quote}”
                  </p>
                  <div className="flex items-center gap-4 pt-4 border-t border-stone-50">
                    <div className="relative size-12 rounded-full overflow-hidden">
                      <Image
                        src={t.image}
                        alt={t.name}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-forest text-sm">{t.name}</p>
                      <p className="text-stone-400 text-xs uppercase tracking-widest">
                        {t.city}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* 💳 RIGHT COLUMN - Sticky Widget */}
        <aside className="relative">
          <div className="sticky top-32 space-y-6">
            <div className="bg-monk-dark rounded-[32px] p-8 shadow-2xl text-white border border-white/5 overflow-hidden relative">
              {/* Subtle background glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-saffron/10 blur-[60px] -translate-y-1/2 translate-x-1/2" />

              <div className="space-y-2 mb-8">
                <p className="text-white/60 text-[10px] uppercase tracking-[0.3em] font-bold">
                  Starting from
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-5xl text-saffron">
                    ₹{trek.priceFrom.toLocaleString()}
                  </span>
                  <span className="text-white/40 text-xs">/ person</span>
                </div>
                <p className="text-white/40 text-xs">
                  All inclusive · No hidden fees
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/40">
                    Select Date
                  </label>
                  <select className="w-full bg-white/10 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-saffron/50 transition-all">
                    {trek.availableDates.map((d) => (
                      <option key={d.date} className="bg-monk-dark text-white">
                        {d.date} ({d.spots} spots left)
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-3 py-4 border-y border-white/10">
                  <div className="size-8 rounded-full bg-saffron/20 flex items-center justify-center">
                    <Users className="size-4 text-saffron" />
                  </div>
                  <p className="text-xs text-white/70">
                    Small group guarantee (Max {trek.maxGroupSize})
                  </p>
                </div>

                <div className="space-y-4 pt-4">
                  <Button
                    variant="saffron"
                    className="w-full h-16 rounded-2xl text-base font-bold uppercase tracking-widest shadow-[0_10px_30px_rgba(255,153,0,0.3)] hover:shadow-none transition-all group"
                  >
                    Reserve Spot{" "}
                    <ChevronRight className="size-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <Link
                    href={`https://wa.me/919876543210?text=Hi, I have a question about the ${trek.name} trek`}
                    target="_blank"
                  >
                    <Button
                      variant="outline"
                      className="w-full h-16 rounded-2xl border-white/20 text-white hover:bg-white/5 text-base font-bold uppercase tracking-widest mt-4"
                    >
                      <MessageCircle className="size-5 mr-2" /> Ask a Question
                    </Button>
                  </Link>
                </div>

                <div className="space-y-4 pt-8">
                  <div className="flex items-center gap-3 text-[10px] text-white/40 uppercase tracking-[0.2em]">
                    <RotateCcw className="size-3" />
                    <span>Free cancellation up to 30 days</span>
                  </div>
                  <div className="flex items-center gap-3 text-[10px] text-white/40 uppercase tracking-[0.2em]">
                    <ShieldCheck className="size-3" />
                    <span>Certified guides + Insurance included</span>
                  </div>
                </div>

                {trek.spotsLeft < 5 && (
                  <div className="mt-8 flex items-center gap-2 px-4 py-2 bg-rose-500/10 border border-rose-500/20 rounded-lg">
                    <div className="size-2 rounded-full bg-rose-500 animate-pulse" />
                    <span className="text-[10px] text-rose-500 font-bold uppercase tracking-widest">
                      Only {trek.spotsLeft} spots remaining
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Support info */}
            <div className="px-8 text-center">
              <p className="text-stone-400 text-xs leading-relaxed">
                Need help? Call us at{" "}
                <span className="text-stone-600 font-bold">
                  +91 98765 43210
                </span>
                <br />
                or email{" "}
                <span className="text-stone-600 font-bold">
                  hello@travelingmonk.com
                </span>
              </p>
            </div>
          </div>
        </aside>
      </div>

      {/* 📱 MOBILE STICKY BAR */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 z-50 bg-white border-t border-stone-200 p-4 flex items-center justify-between shadow-[0_-10px_30px_rgba(0,0,0,0.1)]">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">
            Starting from
          </p>
          <p className="font-display text-2xl text-forest">
            ₹{trek.priceFrom.toLocaleString()}
          </p>
        </div>
        <Button
          variant="saffron"
          className="h-12 px-8 rounded-full font-bold uppercase tracking-widest text-xs"
        >
          Reserve Spot
        </Button>
      </div>
    </main>
  );
}
