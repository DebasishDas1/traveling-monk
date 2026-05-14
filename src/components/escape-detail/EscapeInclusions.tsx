import {
  CheckCircle2,
  XCircle,
  ShieldCheck,
  Soup,
  Home,
  Map,
  Sparkles,
  Car,
  HeartPulse,
} from "lucide-react";

interface EscapeInclusionsProps {
  inclusions: string[];
  exclusions: string[];
}

export const EscapeInclusions = ({
  inclusions,
  exclusions,
}: EscapeInclusionsProps) => {
  // Map strings to icons for a better look
  const getIcon = (text: string) => {
    const t = text.toLowerCase();
    if (t.includes("stay") || t.includes("accommodation") || t.includes("hotel"))
      return <Home className="size-4" />;
    if (t.includes("breakfast") || t.includes("dinner") || t.includes("meal") || t.includes("food"))
      return <Soup className="size-4" />;
    if (t.includes("transport") || t.includes("cab") || t.includes("travel"))
      return <Car className="size-4" />;
    if (t.includes("guide") || t.includes("captain") || t.includes("support"))
      return <Map className="size-4" />;
    if (t.includes("safety") || t.includes("medical"))
      return <HeartPulse className="size-4" />;
    if (t.includes("sightseeing") || t.includes("itinerary"))
      return <Sparkles className="size-4" />;
    return <CheckCircle2 className="size-4" />;
  };

  return (
    <section className="py-16 md:py-24 px-6 md:px-10 bg-white/40 rounded-[3rem] border border-white border-b-stone-200/50 shadow-sm">
      <div className="grid md:grid-cols-2 gap-16 md:gap-20">
        {/* Included */}
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-forest text-[10px] uppercase tracking-[0.4em] font-black block">
              Provisions
            </span>
            <h3 className="font-display text-3xl text-forest italic">
              What&apos;s Included
            </h3>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {inclusions.map((item) => (
              <li key={item} className="flex items-start gap-4 group">
                <div className="size-10 rounded-2xl bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                  {getIcon(item)}
                </div>
                <div className="space-y-1">
                  <p className="font-sans text-sm font-bold text-forest tracking-wide leading-tight">
                    {item}
                  </p>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-green-600">
                    Included
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Not Included */}
        <div className="space-y-12 md:pl-12 md:border-l border-stone-100">
          <div className="space-y-4">
            <span className="text-[10px] uppercase tracking-[0.4em] font-black block">
              Responsibility
            </span>
            <h3 className="font-display text-3xl italic text-stone-600">What&apos;s Excluded</h3>
          </div>

          <ul className="space-y-6">
            {exclusions.map((item) => (
              <li key={item} className="flex items-center gap-4 group">
                <div className="size-2 rounded-full bg-red-400" />
                <span className="font-sans text-sm font-light tracking-wide text-stone-600">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
