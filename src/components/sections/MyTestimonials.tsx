import { Star } from "lucide-react";
import type { TestimonialType } from "@/lib/type";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface MyTestimonialsProps {
  testimonials: TestimonialType[];
}

export const MyTestimonials = ({ testimonials }: MyTestimonialsProps) => {
  return (
    <section className="relative py-28 space-y-20">
      {/* Header */}
      <div className="text-center space-y-5">
        <span className="text-[10px] uppercase tracking-[0.5em] font-bold text-[#8C6B4A]">
          Voices of the Path
        </span>

        <h2 className="font-display text-4xl md:text-5xl text-[#2B1F14] ">
          Reflections from Fellow Travellers
        </h2>

        {/* divider */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <span className="w-10 h-px bg-[#CBB79C]" />
          <span className="w-1.5 h-1.5 rounded-full bg-[#8C6B4A]" />
          <span className="w-10 h-px bg-[#CBB79C]" />
        </div>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {testimonials.map((t, i) => {
          const initial = t.name?.charAt(0)?.toUpperCase() ?? "?";

          return (
            <div
              key={i}
              className="group relative p-10 rounded-[2.5rem]
              bg-linear-to-br from-[#F7F1E6] via-[#EFE3D1] to-[#E6D3BC]
              border border-[#CBB79C]
              shadow-[0_10px_40px_rgba(60,45,30,0.12)]
              hover:shadow-[0_20px_60px_rgba(60,45,30,0.2)]
              transition-all duration-500"
            >
              {/* subtle glow on hover */}
              <div
                className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 
                bg-[radial-gradient(circle,rgba(0,0,0,0.08),transparent_70%)]
                blur-xl transition duration-500"
              />

              {/* ⭐ Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, s) => (
                  <Star
                    key={s}
                    className="size-3.5 text-[#C9A24A] fill-[#C9A24A]"
                  />
                ))}
              </div>

              {/* 💬 Quote */}
              <p className="relative text-[#3E2F22]  leading-[1.9] text-xl md:text-2xl mb-10">
                “{t.quote}”
              </p>

              {/* 👤 User */}
              <div className="flex items-center gap-5 pt-6 border-t border-[#D8C4A8]/60">
                <Avatar className="size-14 ring-2 ring-[#D8C4A8] shadow-md">
                  <AvatarImage src={t.image} alt={t.name} />
                  <AvatarFallback className="bg-[#EADBC8] text-[#2B1F14] font-bold">
                    {initial}
                  </AvatarFallback>
                </Avatar>

                <div>
                  <p className="font-bold text-[#2B1F14] text-lg tracking-wide">
                    {t.name}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-[#7A6A58]">
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
