import {
  CheckCircle2,
  ShieldCheck,
  Soup,
  Home,
  Map,
  HeartPulse,
  Sparkles,
} from "lucide-react";

interface TrekInclusionsProps {
  inclusions?: string[];
  exclusions?: string[];
}

export const TrekInclusions = ({ 
  inclusions: propsInclusions, 
  exclusions: propsExclusions 
}: TrekInclusionsProps) => {
  const defaultInclusions = [
    { text: "Expert Monk Guides", icon: <Map className="size-4" /> },
    { text: "Mindfulness Workshops", icon: <Sparkles className="size-4" /> },
    { text: "Traditional Mountain Stays", icon: <Home className="size-4" /> },
    { text: "Local Satvik Meals", icon: <Soup className="size-4" /> },
    {
      text: "Safety & Medical Support",
      icon: <HeartPulse className="size-4" />,
    },
    { text: "Trek Equipment", icon: <ShieldCheck className="size-4" /> },
  ];

  const defaultExclusions = [
    "Travel to Base Camp",
    "Personal Gear",
    "Insurance",
    "Emergency Evacuation",
    "Personal Expenses",
    "GST Charges",
  ];

  const inclusions = propsInclusions 
    ? propsInclusions.map(text => ({ text, icon: <CheckCircle2 className="size-4" /> }))
    : defaultInclusions;

  const exclusions = propsExclusions || defaultExclusions;

  return (
    <section className="py-24 px-10 bg-white/40 rounded-[3rem] border border-white border-b-stone-200/50 shadow-sm">
      <div className="grid md:grid-cols-2 gap-20">
        {/* Included */}
        <div className="space-y-12">
          <div className="space-y-4">
            <span className="text-forest text-[10px] uppercase tracking-[0.4em] font-black block">
              Provisions
            </span>
            <h3 className="font-display text-3xl text-forest italic">
              The path provides.
            </h3>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {inclusions.map((item) => (
              <li key={item.text} className="flex items-start gap-4 group">
                <div className="size-10 rounded-2xl bg-green-100 flex items-center justify-center text-green-700">
                  {item.icon}
                </div>
                <div className="space-y-1">
                  <p className="font-sans text-sm font-bold text-forest tracking-wide">
                    {item.text}
                  </p>
                  <p className="text-[10px]  uppercase tracking-widest font-bold">
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
            <h3 className="font-display text-3xl italic">Self-reliance.</h3>
          </div>

          <ul className="space-y-6">
            {exclusions.map((item) => (
              <li key={item} className="flex items-center gap-4 group">
                <div className="size-2 rounded-full bg-red-400" />
                <span className="font-sans text-sm font-light tracking-wide">
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
