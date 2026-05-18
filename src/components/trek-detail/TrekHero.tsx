import Image from "next/image";
import { cn, getImageSrc } from "@/lib/utils";
import type { TrekType } from "@/lib/type";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const difficultyColor: Record<string, string> = {
  Easy: "bg-emerald-500/90 text-white",
  "Easy to Moderate": "bg-emerald-500/90 text-white",
  Moderate: "bg-amber-500/90 text-white",
  "Moderate to Challenging": "bg-amber-500/90 text-white",
  Challenging: "bg-rose-600/90 text-white",
};

interface TrekHeroProps {
  trek: TrekType;
}

export const TrekHero = ({ trek }: TrekHeroProps) => {
  const gallery = trek.gallery || [];
  const heroImage = getImageSrc(gallery[0], 1600); // Higher res for big hero
  const sideImages = gallery
    .slice(1, 3)
    .map((url) => getImageSrc(url, 600)) // Smaller res for sides
    .filter(Boolean) as string[];

  return (
    <section className="space-y-6 pt-4">
      {/* ── Breadcrumb ── */}
      <Breadcrumb className="pt-4 px-4 sm:px-6 md:px-8 lg:px-0 container mx-auto max-w-7xl flex items-center justify-between">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/treks">Expeditions</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{trek.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* ── Image Grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 md:h-[82vh] md:min-h-[650px] md:max-h-[1000px]">
        {/* ⛰️ Cinematic Hero (Spans 8 or 9 cols depending on screen) */}
        <div className="md:col-span-8 lg:col-span-9 relative h-[60vh] md:h-full overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] shadow-[0_40px_100px_rgba(0,0,0,0.35)] group">
          <Image
            src={heroImage}
            alt={trek.name}
            fill
            priority
            fetchPriority="high"
            sizes="(max-width: 1024px) 100vw, (max-width: 1536px) 75vw, 1200px"
            quality={85}
            className="object-cover object-center bg-stone-900"
          />

          {/* Rich gradient — much darker at the bottom for crisp text legibility */}
          <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-black/10" />
          {/* Subtle vignette sides */}
          <div className="absolute inset-0 bg-linear-to-r from-black/40 via-transparent to-transparent" />

          {/* Bottom title block */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 md:p-16">
            <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-6">
              <span className="bg-white/10 border border-white/20 text-white px-3 py-1.5 md:px-5 md:py-2.5 rounded-full text-[9px] md:text-xs font-bold uppercase tracking-[0.25em] shadow-xl whitespace-nowrap">
                {trek.tier} Expedition
              </span>
              <span
                className={cn(
                  "px-3 py-1.5 md:px-5 md:py-2.5 rounded-full text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] shadow-xl whitespace-nowrap",
                  difficultyColor[trek.difficulty] ?? "bg-white/20 text-white",
                )}
              >
                {trek.difficulty}
              </span>
              <span className="bg-black/30 border border-white/10 text-white/90 px-3 py-1.5 md:px-5 md:py-2.5 rounded-full text-[9px] md:text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap">
                ↑ {trek.altitude}
              </span>
            </div>

            {/* Saffron accent rule */}
            <div className="w-16 md:w-20 h-[3px] bg-saffron mb-4 md:mb-8 rounded-full" />
            <div className="space-y-4 md:space-y-6">
              <h1 className="text-white font-display text-5xl md:text-8xl italic leading-[1.05] [text-shadow:0_4px_24px_rgb(0_0_0/60%)]">
                {trek.name}
              </h1>
              <p className="font-display text-saffron/90 text-xl md:text-3xl italic font-light tracking-wide [text-shadow:0_2px_12px_rgb(0_0_0/60%)]">
                {trek.tagline}
              </p>
              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-white/80 text-[11px] md:text-sm font-light tracking-[0.25em] uppercase pt-2 [text-shadow:0_2px_8px_rgb(0_0_0/80%)]">
                <span>{trek.region}</span>
                <span className="size-1 md:size-1.5 rounded-full bg-saffron/80" />
                <span>{trek.duration}</span>
                <span className="size-1 md:size-1.5 rounded-full bg-saffron/80" />
                <span>Max {trek.maxGroupSize} guests</span>
              </div>
            </div>
          </div>
        </div>

        {/* 🖼️ Side Gallery (Spans 4 or 3 cols depending on screen) */}
        <div className="md:col-span-4 lg:col-span-3 grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6">
          {sideImages.map((url, i) => (
            <div
              key={url}
              className={cn(
                "relative overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.25)] group cursor-pointer",
                "h-[30vh] md:h-full",
              )}
            >
              <Image
                src={url}
                alt={`${trek.name} — landscape view ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                quality={60}
                className="object-cover object-center bg-stone-900"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-80 transition-opacity duration-700" />

              {/* Label chip */}
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-white/90 text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold [text-shadow:0_2px_8px_rgb(0_0_0/80%)]">
                  {i === 0 ? "Trail Landscape" : "Summit Vista"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
