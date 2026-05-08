import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Plan Your Himalayan Trek | The Traveling Monk",
  description:
    "Have questions about our treks or need help planning your next Himalayan adventure? Contact The Traveling Monk team via WhatsApp, email, or our enquiry form.",
  alternates: {
    canonical: "/contact",
  },
  keywords: [
    "contact traveling monk",
    "trekking enquiry india",
    "plan himalayan trek",
    "trekking company contact number",
    "himalayan trek booking",
  ],
  openGraph: {
    title: "Contact The Traveling Monk | Start Your Journey",
    description:
      "Ready for the mountains? Get in touch with our expert guides to plan your transformational trekking experience.",
    images: [
      {
        url: "/images/contact/contact-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Contact The Traveling Monk",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
