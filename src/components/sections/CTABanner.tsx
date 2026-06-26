import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const CTABanner = () => {
  return (
    <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden">
      {/* 🌄 Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/CTABanner_pic.jpg"
          alt="Himalayan landscape"
          fill
          sizes="(max-width: 1920px) 100vw, 1920px"
          className="object-cover scale-105"
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-linear-to-t from-(--color-monk-dark)/90 via-(--color-monk-dark)/40 to-transparent" />
        <div className="absolute inset-0 bg-(--color-monk-muted)/25 mix-blend-multiply" />
      </div>

      {/* ✍️ Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-4xl">
        <div className="space-y-10">
          <h2 className="text-5xl md:text-8xl text-white   leading-tight drop-shadow-2xl">
            Ready to find your path?
          </h2>

          <p className="text-white/80 text-lg md:text-2xl   max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Join our upcoming seasonal treks and begin your journey of
            transformation. Small groups. Deep silence.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-6">
            <Link href="/treks">
              <Button
                className="h-14 px-12 rounded-full text-saffron
                uppercase tracking-[0.3em] font-bold bg-transparent border-saffron"
              >
                Book Your Expedition
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                className="h-14 px-12 rounded-full text-black
                uppercase tracking-[0.3em] font-bold"
              >
                Custom Inquiries
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
