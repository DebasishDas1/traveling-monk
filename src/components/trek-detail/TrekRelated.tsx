import { trekData } from "@/lib/data/treks";
import TrekCard from "@/components/sections/TrekCard";

interface TrekRelatedProps {
  currentTrekSlug: string;
}

export const TrekRelated = ({ currentTrekSlug }: TrekRelatedProps) => {
  const otherTreks = trekData
    .filter((t) => t.slug !== currentTrekSlug)
    .slice(0, 2);

  if (otherTreks.length === 0) return null;

  return (
    <section className="relative py-16 md:py-24 space-y-14">
      {/* soft background wash */}
      <div className="absolute inset-0 -z-10 bg-[#FAF6EF]" />

      {/* subtle top glow */}
      <div
        className="absolute inset-0 -z-10 
        bg-[radial-gradient(circle_at_top,rgba(120,90,60,0.06),transparent_70%)]"
      />

      {/* HEADER */}
      <div className="flex items-center gap-6">
        <h2 className="font-serif text-3xl md:text-4xl italic text-[#2B1F14] shrink-0">
          Other Paths
        </h2>

        <div className="h-px bg-[#E2D3BE] grow" />
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
        {otherTreks.map((trek, i) => (
          <div key={trek.slug} className="group relative">
            {/* soft hover aura */}
            <div
              className="absolute inset-0 rounded-[2.5rem] 
              bg-[radial-gradient(circle,rgba(0,0,0,0.06),transparent_70%)]
              opacity-0 group-hover:opacity-100 blur-xl transition duration-500"
            />

            {/* lift layer */}
            <div className="relative transition-transform duration-500 group-hover:-translate-y-1">
              <TrekCard trek={trek} index={i} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
