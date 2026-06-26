import { MapPin, Calendar, Truck, Sparkles } from "lucide-react";
import type { EscapeType } from "@/lib/type";
import { cn } from "@/lib/utils";

interface EscapeOverviewProps {
  escape: EscapeType;
}

export const EscapeOverview = ({ escape }: EscapeOverviewProps) => {
  return (
    <section className="space-y-16">
      {/* 🏔️ Core Stats Grid - Minimalist Premium */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 py-10 md:py-12 border-y border-stone-200/60 bg-white/30 backdrop-blur-sm rounded-[2rem] px-6 md:px-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-saffron">
            <Calendar className="size-4" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-black">
              Duration
            </span>
          </div>
          <p className="font-display text-2xl text-forest ">
            {escape.duration}
          </p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-saffron">
            <Truck className="size-4" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-black">
              Pickup Point
            </span>
          </div>
          <p className="font-display text-2xl text-forest ">{escape.pickup}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-saffron">
            <MapPin className="size-4" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-black">
              Region
            </span>
          </div>
          <p className="font-display text-2xl text-forest ">
            {escape.location.split(",")[0]}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr_300px] gap-16">
        {/* 📖 The Narrative */}
        <div className="space-y-10">
          <div className="space-y-4">
            <span className="text-saffron text-[10px] uppercase tracking-[0.5em] font-black block">
              The Experience
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-forest  leading-tight">
              A journey beyond <br /> the ordinary.
            </h2>
          </div>

          <div className="space-y-8 text-lg text-stone-600 leading-relaxed font-sans font-light">
            {escape.description.split("\n\n").map((para, i) => (
              <p
                key={i}
                className={cn(
                  i === 0 &&
                    "first-letter:text-6xl first-letter:font-display first-letter: first-letter:float-left first-letter:mr-3 first-letter:text-forest first-letter:mt-1",
                )}
              >
                {para}
              </p>
            ))}
          </div>

          {/* Highlights Section */}
          <h2 className="font-display text-4xl md:text-5xl text-forest ">
            Escape Highlights
          </h2>

          <div className="flex flex-wrap gap-3 pt-3">
            {escape.highlights.map((highlight) => (
              <span
                key={highlight}
                className="px-6 py-2.5 rounded-2xl bg-monk-brown-warm text-white text-xs font-bold tracking-widest uppercase shadow-sm hover:shadow-md transition-shadow cursor-default"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* 🌿 Atmosphere Details */}
        <div className="space-y-10 bg-forest/5 p-8 rounded-[2.5rem] border border-forest/10 self-start">
          <div className="space-y-6">
            <h4 className="font-display text-xl text-forest  border-b border-forest/10 pb-4">
              Soul & Spirit
            </h4>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="size-10 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                  <Sparkles className="size-5 text-forest" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-forest">
                    The Vibe
                  </p>
                  <p className="text-sm text-stone-500 font-light mt-1">
                    Relaxed, exploratory, and deeply immersive nature
                    connection.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="size-10 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                  <MapPin className="size-5 text-forest" />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-widest text-forest">
                    Location
                  </p>
                  <p className="text-sm text-stone-500 font-light mt-1">
                    {escape.location}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
