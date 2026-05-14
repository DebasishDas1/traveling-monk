import { Metadata } from "next";
import { HeroSection } from "./_components/HeroSection";
import { ContactOptions } from "./_components/ContactOptions";
import { LeadForm } from "./_components/LeadForm";
import { FaqAccordion } from "./_components/FaqAccordion";

export const metadata: Metadata = {
  title: "Contact Us | The Traveling Monk",
  description:
    "Have questions about our treks or escapes? Get in touch with The Traveling Monk team for bookings, custom itineraries, and expert Himalayan travel advice.",
};

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
