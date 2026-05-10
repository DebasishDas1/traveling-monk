import { Star } from "lucide-react";
import type { TrekType } from "@/lib/type";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TrekTestimonialsProps {
  trek: TrekType;
}

export const TrekTestimonials = ({ trek }: TrekTestimonialsProps) => {
  return (
    <section className="space-y-16 py-20">
      {/* Header */}
      <div className="text-center space-y-4">
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-saffron">
          Voices of the Path
        </span>
        <h2 className="font-display text-4xl md:text-5xl text-forest italic">
          Reflections from Fellow Monks
        </h2>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {trek.testimonials.map((t, i) => {
          const initial = t.name?.charAt(0)?.toUpperCase() ?? "?";

          return (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-md p-10 rounded-[2.5rem] shadow-sm border border-stone-100 space-y-8 hover:shadow-xl transition-all duration-500"
            >
              {/* ⭐ Stars */}
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star
                    key={s}
                    className="size-3.5 fill-saffron text-saffron"
                  />
                ))}
              </div>

              {/* 💬 Quote */}
              <p className="text-stone-700 italic leading-relaxed font-display text-2xl">
                “{t.quote}”
              </p>

              {/* 👤 User */}
              <div className="flex items-center gap-5 pt-6 border-t border-stone-50">
                <Avatar className="size-14 ring-4 ring-parchment-light">
                  <AvatarImage src={t.image} alt={t.name} />
                  <AvatarFallback className="bg-linear-to-br from-saffron/20 to-forest/20 text-forest font-bold">
                    {initial}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <p className="font-bold text-forest text-lg">{t.name}</p>
                  <p className="text-xs uppercase tracking-widest font-bold">
                    {t.city}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
