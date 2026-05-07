import Image from "next/image";
import { ArrowRight, Mountain, Clock } from "lucide-react";
import { getImageSrc } from "@/lib/utils";

interface TrekItineraryCardProps {
  image?: string;
  title: string;
  description: string;
  idx: number;

  from?: string;
  to?: string;
  altitude?: string; // e.g. "+800m" or "-500m"
  duration?: string; // e.g. "5-6 hrs"
}

const TrekItineraryCard = ({
  image,
  title,
  description,
  idx,
  from,
  to,
  altitude,
  duration,
}: TrekItineraryCardProps) => {
  const imageSrc = getImageSrc(image);

  return (
    <div className="rounded-2xl md:rounded-[2rem] overflow-hidden bg-white border border-stone-100 shadow-sm">
      {/* 🖼️ Image */}
      <div className="relative w-full h-[180px] md:h-[240px] bg-stone-100">
        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 700px"
            priority={idx === 0}
            loading={idx === 0 ? "eager" : "lazy"}
            className="object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full bg-stone-200">
            <Image
              src="/dark-logo.png"
              alt="The Traveling Monk"
              width={100}
              height={100}
              className="opacity-70"
            />
          </div>
        )}
      </div>

      {/* 📜 Content */}
      <div className="px-5 md:px-8 py-6 md:py-8 space-y-5">
        {/* Title */}
        <h3 className="font-display text-xl md:text-2xl text-forest italic leading-snug">
          {title}
        </h3>

        {/* Route (From → To) */}
        {(from || to) && (
          <div className="flex items-center gap-2 text-xs md:text-sm text-stone-500 font-medium">
            <span>{from}</span>
            <ArrowRight className="size-3 opacity-60" />
            <span>{to}</span>
          </div>
        )}

        {/* Description */}
        <p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-xl">
          {description}
        </p>

        {/* 📊 Info Row */}
        <div className="flex flex-wrap items-center gap-4 pt-2 text-xs md:text-sm text-stone-500">
          {altitude && (
            <div className="flex items-center gap-1.5">
              <Mountain className="size-4 opacity-60" />
              <span
                className={
                  altitude?.startsWith("+")
                    ? "text-emerald-600"
                    : "text-rose-500"
                }
              >
                {altitude}
              </span>
            </div>
          )}

          {duration && (
            <div className="flex items-center gap-1.5">
              <Clock className="size-4 opacity-60" />
              <span>{duration}</span>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="h-px w-8 bg-saffron/40" />
      </div>
    </div>
  );
};

export default TrekItineraryCard;
