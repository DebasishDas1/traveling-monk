import Link from "next/link";
import { MessageCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink, whatsappNumber } from "@/lib/social-links";

export function ContactOptions() {
  return (
    <section className="py-24 px-6 container mx-auto max-w-6xl">
      <div className="grid md:grid-cols-3 gap-8">
        {/* WhatsApp */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center text-center group hover:border-saffron transition-colors">
          <div className="size-14 rounded-full bg-saffron/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <MessageCircle className="size-7 text-saffron" />
          </div>
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-[10px] uppercase tracking-widest font-bold mb-4">
            Fastest response
          </span>
          <h3 className="font-display text-xl text-forest mb-2">WhatsApp</h3>
          <p className="text-stone-500 text-sm mb-8 leading-relaxed">
            Chat directly with our trek team. Usually reply within 2 hours.
          </p>
          <Link href={whatsappLink} className="w-full">
            <Button
              variant="outline"
              className="w-full rounded-xl border-stone-200 hover:border-saffron hover:text-saffron"
            >
              Open WhatsApp →
            </Button>
          </Link>
        </div>

        {/* Email */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center text-center group hover:border-saffron transition-colors">
          <div className="size-14 rounded-full bg-saffron/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Mail className="size-7 text-saffron" />
          </div>
          <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-500 text-[10px] uppercase tracking-widest font-bold mb-4">
            Detailed queries
          </span>
          <h3 className="font-display text-xl text-forest mb-2">Email</h3>
          <p className="text-stone-500 text-sm mb-8 leading-relaxed">
            hello@thetravelingmonk.in
          </p>
          <Link href="mailto:hello@thetravelingmonk.in" className="w-full">
            <Button
              variant="outline"
              className="w-full rounded-xl border-stone-200 hover:border-saffron hover:text-saffron"
            >
              Send an email →
            </Button>
          </Link>
        </div>

        {/* Call */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 flex flex-col items-center text-center group hover:border-saffron transition-colors">
          <div className="size-14 rounded-full bg-saffron/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Phone className="size-7 text-saffron" />
          </div>
          <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-500 text-[10px] uppercase tracking-widest font-bold mb-4">
            For urgent queries
          </span>
          <h3 className="font-display text-xl text-forest mb-2">Call Us</h3>
          <p className="text-stone-500 text-sm mb-8 leading-relaxed">
            +91 {whatsappNumber}
            <br />
            Mon–Sat, 9am–8pm IST
          </p>
          <Link href={`tel:${whatsappNumber}`} className="w-full">
            <Button
              variant="outline"
              className="w-full rounded-xl border-stone-200 hover:border-saffron hover:text-saffron"
            >
              Call now →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
