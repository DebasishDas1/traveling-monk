import Image from "next/image";

export function HeroSection() {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact/contact-hero.jpg"
          alt="Contact Hero"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          quality={60}
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-forest/60" />
      </div>
      <div className="relative z-10 text-center px-6">
        <h1 className="font-display italic text-5xl md:text-7xl text-white drop-shadow-2xl">
          Let&apos;s talk.
        </h1>
      </div>
    </section>
  );
}
