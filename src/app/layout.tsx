import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { BookingDrawer } from "@/components/booking/BookingDrawer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thetravelingmonk.in"),
  title: {
    template: "%s | The Traveling Monk",
    default: "The Traveling Monk — Premium Treks & Transformational Travel",
  },
  description:
    "Premium guided trekking experiences across India. Not just trips — transformation. Small groups, certified guides, curated experiences.",
  keywords: [
    "trekking india",
    "himalayan treks",
    "premium adventure travel",
    "transformation trek",
    "guided treks india",
  ],
  authors: [{ name: "The Traveling Monk Team" }],
  creator: "The Traveling Monk",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: "The Traveling Monk",
    title: "The Traveling Monk | Transformational Trekking",
    description: "Premium guided trekking experiences across India. Transformation through nature.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Traveling Monk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Traveling Monk | Transformational Trekking",
    description: "Premium guided trekking experiences across India.",
    creator: "@travelingmonk",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
  verification: {
    google: "google-site-verification-placeholder",
  },
  alternates: {
    canonical: "/",
  },
};

export const viewport: Viewport = {
  themeColor: "#1A2E1F", // Forest color for UI
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full scroll-smooth",
        "antialiased",
        cormorant.variable,
        dmSans.variable,
      )}
    >
      <body className="min-h-full flex flex-col font-body bg-parchment text-forest">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          <main className="grow">{children}</main>
          <Footer />
          <WhatsAppFloat />
          <BookingDrawer />
        </ThemeProvider>
      </body>
    </html>
  );
}
