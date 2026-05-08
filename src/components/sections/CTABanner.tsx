import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const CTABanner = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
      {/* 🌄 Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/CTABanner_pic.jpg"
          alt="Mountain landscape"
          fill
          sizes="100vw"
          quality={60}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-forest/50" />
      </div>

      {/* ✍️ Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div>
          <h2 className="text-4xl md:text-6xl text-white font-display italic mb-6">
            Ready to find your way?
          </h2>

          <p className="text-white/80 text-lg md:text-xl font-sans font-light max-w-2xl mx-auto mb-10 leading-relaxed">
            Join our upcoming seasonal treks and begin your journey of transformation. Limited spots available for small group experiences.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/treks">
              <Button
                variant="saffron"
                size="lg"
                className="h-14 px-10 rounded-full font-bold uppercase tracking-widest text-sm focus-visible:ring-2 focus-visible:ring-white"
              >
                Book Your Trek
              </Button>
            </Link>

            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="h-14 px-10 rounded-full font-bold uppercase tracking-widest text-sm focus-visible:ring-2 focus-visible:ring-white"
              >
                Request Custom Trip
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
