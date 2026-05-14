import type { EscapeType } from "@/lib/type";
import { getImageSrc, cn } from "@/lib/utils";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";

interface EscapeHeroProps {
  escape: EscapeType;
}

export const EscapeHero = ({ escape }: EscapeHeroProps) => {
  const gallery = escape.gallery || [];
  const heroImage = getImageSrc(gallery[0], 1600);
  const sideImages = gallery
    .slice(1, 3)
    .map((url) => getImageSrc(url, 600)) // Smaller res for sides
    .filter(Boolean) as string[];

  return (
    <section className="relative pt-6 space-y-8">
      {/* ── Ancient Background Texture Overlay ── */}
      <div className="pointer-events-none absolute inset-0 bg-[url('/textures/parchment.jpg')] opacity-[0.08]" />

      {/* ── Breadcrumb ── */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-0">
        <Breadcrumb className="text-[#5B4636]/80">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/"
                className="hover:text-[#2B1F14] transition-colors"
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink
                href="/escapes"
                className="hover:text-[#2B1F14] transition-colors"
              >
                Escapes
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[#2B1F14] font-medium">
                {escape.name}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* ── Image Grid ── */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {/* ⛰️ Main Hero (Spans 8 or 9 cols) */}
          <div className="md:col-span-8 lg:col-span-9 relative aspect-video rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.35)] border border-[#2B1F14]/10 group">
            {/* Image */}
            <Image
              src={heroImage}
              alt={escape.name}
              fill
              className="object-cover scale-100 hover:scale-105 transition-transform duration-2000 ease-out"
              priority
              quality={85}
              sizes="(max-width: 1024px) 100vw, 1200px"
            />

            {/* Dark cinematic gradient */}
            <div className="absolute inset-0 bg-linear-to-t from-[#1a120b]/90 via-[#1a120b]/40 to-transparent" />

            {/* Vignette edges */}
            <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.7)]" />

            {/* Content Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 md:p-12 text-[#F5E9DA]">
              {/* Location Badge */}
              <span className="inline-flex items-center gap-2 rounded-full border border-[#C6A76A]/40 bg-[#2B1F14]/60 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm tracking-wide text-[#EAD8B1] shadow-md">
                <span className="h-2 w-2 rounded-full bg-[#C6A76A] animate-pulse" />
                {escape.location}
              </span>

              {/* Title */}
              <h1 className="mt-4 font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-[#F8F1E7] drop-shadow-lg">
                {escape.name}
              </h1>

              {/* Subtle Divider */}
              <div className="mt-4 h-px w-24 bg-linear-to-r from-[#C6A76A] to-transparent" />
            </div>
          </div>

          {/* 🖼️ Side Gallery (Spans 4 or 3 cols) */}
          <div className="md:col-span-4 lg:col-span-3 grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6">
            {sideImages.map((url, i) => (
              <div
                key={url}
                className={cn(
                  "relative overflow-hidden rounded-[2rem] md:rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.25)] group cursor-pointer",
                  "h-[25vh] md:h-full",
                )}
              >
                <Image
                  src={url}
                  alt={`${escape.name} — landscape view ${i + 1}`}
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
                    {i === 0 ? "Mountain Vista" : "Hidden Gem"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
