import { HeroSection } from "./_components/HeroSection";
import { ContactOptions } from "./_components/ContactOptions";
import { LeadForm } from "./_components/LeadForm";
import { FaqAccordion } from "./_components/FaqAccordion";

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ContactOptions />
      <LeadForm />
      <FaqAccordion />
    </main>
  );
}
