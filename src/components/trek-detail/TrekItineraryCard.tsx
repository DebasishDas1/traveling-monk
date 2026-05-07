import Image from "next/image";
import { ArrowRight, Clock, Mountain } from "lucide-react";
import { getImageSrc } from "@/lib/utils";

interface TrekItineraryCardProps {
  image?: string;

  day: number;
  title: string;
  description: string;

  from?: string;
  to?: string;

  altitude?: string;
  duration?: string;
}

const TrekItineraryCard = ({
  image,
  day,
  title,
  description,
  from,
  to,
  altitude,
  duration,
}: TrekItineraryCardProps) => {
  const imageSrc = getImageSrc(image);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-[#e7dccd] bg-[#fffdf9] shadow-[0_10px_40px_rgba(60,40,20,0.08)]">
      {/* 🖼️ Image */}
      <div className="relative h-[220px] w-full overflow-hidden bg-[#efe7dc]">
        {imageSrc ? (
          <>
            <Image
              src={imageSrc}
              alt={title}
              fill
              priority={day === 1}
              loading={day === 1 ? "eager" : "lazy"}
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover"
            />

            {/* Luxury Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-black/5 to-transparent" />
          </>
        ) : (
          <div className="flex h-full items-center justify-center bg-[#efe7dc]">
            <Image
              src="/dark-logo.png"
              alt="The Traveling Monk"
              width={90}
              height={90}
              className="opacity-40"
            />
          </div>
        )}
      </div>

      {/* 📜 Content */}
      <div className="space-y-6 px-6 py-7 md:px-8 md:py-8">
        {/* Title + Route */}
        <div className="space-y-3">
          <h3 className="font-display text-3xl italic leading-tight text-[#1f3427]">
            {title}
          </h3>

          {(from || to) && (
            <div className="flex items-center gap-3 text-sm font-medium text-[#8a7f73]">
              {from && <span>{from}</span>}

              <ArrowRight className="size-4 text-saffron/70" />

              {to && <span>{to}</span>}
            </div>
          )}
        </div>

        {/* Description */}
        <p className="text-[15px] leading-8 text-[#5f564d] md:text-base">
          {description}
        </p>

        {/* Divider */}
        <div className="h-px w-full bg-linear-to-r from-saffron/20 via-stone-200 to-transparent" />

        {/* 📊 Meta */}
        {(altitude || duration) && (
          <div className="flex flex-wrap gap-6 text-sm text-[#74695d]">
            {altitude && (
              <div className="flex items-center gap-2 rounded-full bg-[#f6f1e8] px-4 py-2">
                <Mountain className="size-4 text-saffron" />
                <span>{altitude}</span>
              </div>
            )}

            {duration && (
              <div className="flex items-center gap-2 rounded-full bg-[#f6f1e8] px-4 py-2">
                <Clock className="size-4 text-saffron" />
                <span>{duration}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TrekItineraryCard;
