import { PhoneCall, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { whatsappLink, whatsappNumber } from "@/lib/utils";

export const TrekContact = () => {
  return (
    <section className="space-y-10 md:space-y-12 py-10 md:py-12 px-4 md:px-0">
      {/* Header */}
      <div className="flex items-center gap-4 md:gap-6">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-forest italic shrink-0">
          Connect With Us
        </h2>
        <div className="h-px bg-stone-200 grow" />
      </div>

      {/* Card */}
      <div className="relative overflow-hidden bg-forest/5 border border-forest/10 rounded-3xl md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 xl:p-16">
        {/* Decorative blur */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-saffron/10 rounded-full blur-[90px]" />

        {/* Grid Layout */}
        <div className="relative z-10 grid xl:grid-cols-1 gap-10 xl:gap-16 items-center">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl sm:text-4xl xl:text-5xl text-forest italic leading-tight">
              Still have questions about this journey?
            </h3>

            <p className="text-stone-600 text-base md:text-lg xl:text-xl font-light leading-relaxed max-w-2xl">
              Our expedition leaders are here to help you prepare, answer your
              questions, and ensure this path is the right one for you.
            </p>

            {/* RIGHT SIDE (CTA) */}
            <Link href={whatsappLink} target="_blank" className="block">
              <Button
                variant="outline"
                className="h-12 md:h-14 xl:h-16 px-6 md:px-8 xl:px-10 rounded-full border-forest/20 text-forest hover:bg-forest hover:text-white transition-all uppercase tracking-widest text-xs font-bold w-full sm:w-auto shadow-sm"
              >
                Request a Call Back
              </Button>
            </Link>

            {/* Contact Row */}
            <div className="flex flex-col sm:flex-row xl:flex-row gap-6 xl:gap-10 pt-4">
              {/* Phone */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="size-12 xl:size-14 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <PhoneCall className="size-5 xl:size-6 text-forest" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] font-bold">
                    Call Us
                  </p>
                  <p className="text-base xl:text-lg text-forest font-bold tracking-wide group-hover:text-saffron transition-colors">
                    {whatsappNumber}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 group cursor-pointer min-w-[260px]">
                <div className="size-12 xl:size-14 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                  <Mail className="size-5 xl:size-6 text-forest" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] font-bold">
                    Email Us
                  </p>
                  <p className="text-base xl:text-lg text-forest font-bold tracking-wide group-hover:text-saffron transition-colors wrap-break-word">
                    www.thetravelingmonk.in
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
