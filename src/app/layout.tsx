import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/ui/WhatsAppFloat";
import { BookingDrawer } from "@/components/booking/BookingDrawer";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { instagramLink, facebookLink, youtubeLink } from "@/lib/social-links";

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
    "spiritual travel india",
    "eco-friendly trekking",
    "the traveling monk",
  ],
  authors: [{ name: "The Traveling Monk Team" }],
  creator: "The Traveling Monk",
  publisher: "The Traveling Monk",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thetravelingmonk.in",
    siteName: "The Traveling Monk",
    title: "The Traveling Monk | Transformational Trekking",
    description:
      "Premium guided trekking experiences across India. Transformation through nature.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Traveling Monk — Premium Treks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Traveling Monk | Transformational Trekking",
    description: "Premium guided trekking experiences across India.",
    site: "@travelingmonk",
    creator: "@travelingmonk",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  verification: {
    google: "rYiyNCTRV2Io8jDL4AWE9vxH2QmQ3Yycm6e6A2BIzaY",
  },
};

export const viewport: Viewport = {
  themeColor: "#1A2E1F", // Forest color for UI
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Traveling Monk",
    url: "https://thetravelingmonk.in",
    logo: "https://thetravelingmonk.in/dark-logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-9108216171",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: "en",
    },
    sameAs: [instagramLink, facebookLink, youtubeLink],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={cn(
        "h-full scroll-smooth",
        "antialiased",
        cormorant.variable,
        dmSans.variable,
      )}
    >
      <body className="min-h-full flex flex-col font-body bg-parchment text-forest">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
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
