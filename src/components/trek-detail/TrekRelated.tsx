import { trekData } from "@/lib/data/treks";
import TrekCard from "@/components/sections/TrekCard";

interface TrekRelatedProps {
  currentTrekSlug: string;
}

export const TrekRelated = ({ currentTrekSlug }: TrekRelatedProps) => {
  // Get 2 other treks to display
  const otherTreks = trekData
    .filter((t) => t.slug !== currentTrekSlug)
    .slice(0, 2);

  if (otherTreks.length === 0) return null;

  return (
    <section className="space-y-12 py-12">
      <div className="flex items-center gap-6">
        <h2 className="font-display text-4xl text-forest italic shrink-0">
          Other Paths
        </h2>
        <div className="h-px bg-stone-200 grow" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {otherTreks.map((trek, i) => (
          <TrekCard key={trek.slug} trek={trek} index={i} />
        ))}
      </div>
    </section>
  );
};
