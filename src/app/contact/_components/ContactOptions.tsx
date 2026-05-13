import Link from "next/link";
import { MessageCircle, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink, whatsappNumber } from "@/lib/social-links";

const cards = [
  {
    title: "WhatsApp",
    label: "Fastest response",
    desc: "Chat directly with our trek team. Replies within a few hours.",
    icon: MessageCircle,
    href: whatsappLink,
    cta: "Open chat",
    variant: "primary",
  },
  {
    title: "Email",
    label: "Detailed queries",
    desc: "hello@thetravelingmonk.in",
    icon: Mail,
    href: "mailto:hello@thetravelingmonk.in",
    cta: "Send email",
    variant: "secondary",
  },
  {
    title: "Call",
    label: "Urgent",
    desc: `+91 ${whatsappNumber}\nMon–Sat, 9am–8pm`,
    icon: Phone,
    href: `tel:${whatsappNumber}`,
    cta: "Call now",
    variant: "secondary",
  },
];

export function ContactOptions() {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20 max-w-xl mx-auto">
          <h2 className="font-serif italic text-4xl md:text-5xl text-[#2B1F14]">
            Begin the conversation
          </h2>
          <p className="text-[#6B5A4A] mt-5 text-sm leading-relaxed">
            Whether it’s a question or a quiet nudge toward the mountains, we’re
            here.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {cards.map((card, i) => {
            const Icon = card.icon;

            return (
              <div
                key={i}
                className="group rounded-[32px] p-10 text-center
                bg-[#F3EDE3]
                border border-[#E2D3BD]
                transition-all duration-500
                hover:border-[#C9A24A]/40
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
              >
                {/* Icon */}
                <div
                  className="mx-auto mb-8 size-16 rounded-full 
                  border border-[#D6C4A8]
                  flex items-center justify-center text-[#C9A24A]"
                >
                  <Icon className="size-6" />
                </div>

                {/* Label */}
                <p
                  className={`text-[10px] uppercase tracking-[0.4em] mb-3 font-medium
                  ${
                    i === 0
                      ? "text-[#5F7A61]" // subtle green
                      : i === 2
                        ? "text-[#8A5A5A]" // subtle red
                        : "text-[#8A7A68]"
                  }`}
                >
                  {card.label}
                </p>

                {/* Title */}
                <h3 className="font-serif text-2xl text-[#2B1F14] mb-4">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[#6B5A4A] text-sm leading-relaxed whitespace-pre-line mb-10">
                  {card.desc}
                </p>

                {/* CTA */}
                <Link href={card.href} className="block">
                  <Button className="h-12 uppercase tracking-wider w-full bg-monk-brown-warm text-white rounded-4xl">
                    {card.cta}
                  </Button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
