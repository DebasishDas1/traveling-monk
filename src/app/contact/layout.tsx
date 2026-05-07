import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get in Touch | Contact The Traveling Monk",
  description: "Have questions about our treks? Reach out to our team via WhatsApp, email, or our contact form. We're here to help you find your path.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
