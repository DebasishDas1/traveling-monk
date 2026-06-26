import { PhoneCall, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { whatsappLink, whatsappNumber } from "@/lib/social-links";

export const TrekContact = () => {
  return (
    <section className="relative py-8 md:py-12 px-4 md:px-0">
      <div className="space-y-10 max-w-3xl">
        <div className="space-y-5">
          <h3 className="text-2xl md:text-4xl text-[#2B1F14]  leading-snug">
            Still have questions about this journey?
          </h3>

          <p className="text-[#5A4A3B] text-base md:text-lg leading-relaxed font-light">
            Our team is here to help you understand the trek, prepare better,
            and choose what feels right for your pace and comfort.
          </p>
        </div>

        {/* CTA */}
        <div>
          <Link href={whatsappLink} target="_blank">
            <Button
              className="h-12 px-8 rounded-full 
                text-black bg-[#FAF6EF]
                text-xs uppercase tracking-[0.2em] font-semibold
                transition-all duration-300
                hover:bg-[#2B1F14] hover:text-white"
            >
              Request a Callback
            </Button>
          </Link>
        </div>

        {/* CONTACT ROW */}
        <div className="grid md:grid-cols-2 gap-8 pt-6">
          {/* PHONE */}
          <div className="flex items-center gap-4">
            <div
              className="size-12 rounded-full bg-[#F4EEE4]
                flex items-center justify-center"
            >
              <PhoneCall className="size-5 text-[#3A2A1D]" />
            </div>

            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#8A7A68] font-semibold">
                Call Us
              </p>
              <p className="text-[#2B1F14] font-medium">{whatsappNumber}</p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-4">
            <div
              className="size-12 rounded-full bg-[#F4EEE4]
                flex items-center justify-center"
            >
              <Mail className="size-5 text-[#3A2A1D]" />
            </div>

            <div className="min-w-0">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#8A7A68] font-semibold">
                Email Us
              </p>
              <p className="text-[#2B1F14] font-medium truncate">
                www.thetravelingmonk.in
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
