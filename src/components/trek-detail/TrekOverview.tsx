import { Mountain, Users, Calendar, MapPin, Compass, Wind } from "lucide-react";
import { Trek } from "@/lib/treks";

interface TrekOverviewProps {
  trek: Trek;
}

export const TrekOverview = ({ trek }: TrekOverviewProps) => {
  return (
    <section className="space-y-16">
      {/* 🏔️ Core Stats Grid - Minimalist Premium */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 py-10 md:py-12 border-y border-stone-200/60 bg-white/30 backdrop-blur-sm rounded-[2rem] px-6 md:px-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-saffron">
            <Mountain className="size-4" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-black">Altitude</span>
          </div>
          <p className="font-display text-2xl text-forest italic">{trek.altitude}</p>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-saffron">
            <Compass className="size-4" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-black">Difficulty</span>
          </div>
          <p className="font-display text-2xl text-forest italic">{trek.difficulty}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-saffron">
            <Users className="size-4" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-black">Group Size</span>
          </div>
          <p className="font-display text-2xl text-forest italic">Max {trek.maxGroupSize}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2 text-saffron">
            <Calendar className="size-4" />
            <span className="text-[10px] uppercase tracking-[0.2em] font-black">Next Date</span>
          </div>
          <p className="font-display text-2xl text-forest italic">{trek.nextDate}</p>
        </div>
      </div>

      <div className="grid md:grid-cols-[1fr_300px] gap-16">
        {/* 📖 The Narrative */}
        <div className="space-y-10">
          <div className="space-y-4">
             <span className="text-saffron text-[10px] uppercase tracking-[0.5em] font-black block">The Calling</span>
             <h2 className="font-display text-4xl md:text-5xl text-forest italic leading-tight">
               Ancient trails, <br /> modern awakening.
             </h2>
          </div>
          
          <div className="space-y-8 text-lg text-stone-600 leading-relaxed font-sans font-light">
            {trek.description.split("\n\n").map((para, i) => (
              <p key={i} className="first-letter:text-5xl first-letter:font-display first-letter:italic first-letter:float-left first-letter:mr-3 first-letter:text-forest first-letter:mt-1">
                {para}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-6">
            {trek.highlights.map((highlight) => (
              <span
                key={highlight}
                className="px-6 py-2.5 rounded-2xl bg-white border border-stone-100 text-monk-brown-deep text-xs font-bold tracking-widest uppercase shadow-sm hover:shadow-md transition-shadow cursor-default"
              >
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* 🌿 Atmosphere Details */}
        <div className="space-y-10 bg-forest/5 p-8 rounded-[2.5rem] border border-forest/10 self-start">
           <div className="space-y-6">
              <h4 className="font-display text-xl text-forest italic border-b border-forest/10 pb-4">Vibe & Spirit</h4>
              
              <div className="space-y-6">
                 <div className="flex gap-4">
                    <div className="size-10 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                       <Wind className="size-5 text-forest" />
                    </div>
                    <div>
                       <p className="text-xs font-black uppercase tracking-widest text-forest">Air Clarity</p>
                       <p className="text-sm text-stone-500 font-light mt-1">High-altitude alpine freshness with hints of pine and cedar.</p>
                    </div>
                 </div>

                 <div className="flex gap-4">
                    <div className="size-10 rounded-full bg-forest/10 flex items-center justify-center shrink-0">
                       <MapPin className="size-5 text-forest" />
                    </div>
                    <div>
                       <p className="text-xs font-black uppercase tracking-widest text-forest">Region</p>
                       <p className="text-sm text-stone-500 font-light mt-1">{trek.region}, Upper Himalayas</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};
