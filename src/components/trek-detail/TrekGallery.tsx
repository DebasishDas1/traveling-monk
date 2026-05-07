import Image from "next/image";
import { Camera } from "lucide-react";
import type { TrekType } from "@/lib/type";

interface TrekGalleryProps {
  trek: TrekType;
}

export const TrekGallery = ({ trek }: TrekGalleryProps) => {
  return (
    <section className="space-y-16 py-12 md:py-20">
      <div className="flex items-center gap-6">
        <h2 className="font-display text-4xl md:text-5xl text-forest italic shrink-0">
          Captured Stillness
        </h2>
        <div className="h-px bg-stone-200 grow" />
        <Camera className="size-6 text-stone-300 hidden md:block" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 h-auto md:h-[600px]">
        {/* Large Feature Photo */}
        <div className="md:col-span-8 relative h-[400px] md:h-full rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] group cursor-pointer bg-stone-900">
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=85&w=1600"
            alt="Atmospheric mountain view"
            fill
            className="object-cover transition-transform duration-[15s] ease-out group-hover:scale-110"
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
          <div className="absolute bottom-8 left-8 md:bottom-10 md:left-10">
            <p className="text-white font-display text-3xl md:text-4xl italic [text-shadow:0_4px_24px_rgb(0_0_0/60%)]">
              The Infinite Ridgeline
            </p>
            <p className="text-white/90 text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold mt-2 [text-shadow:0_2px_8px_rgb(0_0_0/80%)]">
              Himalayan Range
            </p>
          </div>
        </div>

        {/* Smaller Photos Column */}
        <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6 h-full">
          <div className="relative h-[250px] md:h-auto rounded-[2rem] overflow-hidden shadow-lg group cursor-pointer bg-stone-900">
            <Image
              src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=800"
              alt="Trek detail"
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-[10s] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
          </div>

          <div className="relative h-[250px] md:h-auto rounded-[2rem] overflow-hidden shadow-lg group cursor-pointer bg-stone-900">
            <Image
              src="https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&q=80&w=800"
              alt="Trek detail"
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className="object-cover transition-transform duration-[10s] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
          </div>
        </div>
      </div>
    </section>
  );
};
