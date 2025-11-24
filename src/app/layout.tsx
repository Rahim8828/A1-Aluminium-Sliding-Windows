import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Script from "next/script";
import dynamic from "next/dynamic";
import "./globals.css";
import StructuredData from "@/components/seo/StructuredData";
import { generateLocalBusinessSchema } from "@/lib/structured-data";
import { BUSINESS_INFO, SEO_KEYWORDS } from "@/lib/constants";
import Header from "@/components/layout/Header";
import { GA_TRACKING_ID } from "@/lib/analytics";
import { CartProvider } from "@/contexts/CartContext";

// Dynamic imports for non-critical layout components
// Footer can be SSR'd as it's not interactive
const Footer = dynamic(() => import("@/components/layout/Footer"));

// Client-side only components for better performance
const MobileNav = dynamic(() => import("@/components/layout/MobileNav"));

const EmergencyBanner = dynamic(() => import("@/components/layout/EmergencyBanner"));

const Analytics = dynamic(() => import("@/components/analytics/Analytics"));

const BookingSummaryBar = dynamic(() => import("@/components/cart/BookingSummaryBar"));

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Root metadata configuration
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://a1aluminium.com'),
  title: {
    default: `${BUSINESS_INFO.name} | ${BUSINESS_INFO.tagline}`,
    template: `%s | ${BUSINESS_INFO.name}`,
  },
  description: BUSINESS_INFO.description,
  keywords: [
    ...SEO_KEYWORDS.primary,
    'mumbai aluminium services',
    'glass installation',
    'safety netting',
    'aluminium fabrication',
    ...SEO_KEYWORDS.locations.map(loc => `${loc} aluminium services`),
  ],
  authors: [{ name: BUSINESS_INFO.name }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: BUSINESS_INFO.name,
    title: `${BUSINESS_INFO.name} | ${BUSINESS_INFO.tagline}`,
    description: BUSINESS_INFO.description,
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: BUSINESS_INFO.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS_INFO.name} | ${BUSINESS_INFO.tagline}`,
    description: BUSINESS_INFO.description,
    images: ['/images/og-default.jpg'],
    creator: '@a1aluminium',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <StructuredData data={localBusinessSchema} />
      </head>
      <body className="font-sans antialiased">
        <CartProvider>
          {/* Skip to main content link for keyboard navigation */}
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>
          
          {/* Google Analytics */}
          {GA_TRACKING_ID && (
            <>
              <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `,
                }}
              />
            </>
          )}
          
          <Analytics />
          <Header />
          <main id="main-content" className="min-h-screen pt-16 md:pt-20 pb-20 md:pb-0">
            {children}
          </main>
          <Footer />
          <BookingSummaryBar />
          <MobileNav />
        </CartProvider>
      </body>
    </html>
  );
}
