import { Metadata } from 'next';
import StructuredData from '@/components/seo/StructuredData';
import { generateLocalBusinessSchema } from '@/lib/structured-data';
import { BUSINESS_INFO, SEO_KEYWORDS } from '@/lib/constants';
import HomePageClient from './HomePageClient';

// SEO Metadata optimized for main keywords
export const metadata: Metadata = {
  title: `${BUSINESS_INFO.name} | Premium Aluminium, Glass & Safety Solutions in Mumbai`,
  description:
    'Leading provider of aluminium fabrication, glass installation, and safety netting services in Mumbai. Serving Andheri, Bandra, Goregaon & more. 15+ years experience. Call for free quote!',
  keywords: [
    ...SEO_KEYWORDS.primary,
    'aluminium fabrication',
    'glass installation',
    'safety netting',
    'aluminium windows',
    'aluminium doors',
    'glass partition',
    'bird netting',
    'mumbai',
    ...SEO_KEYWORDS.locations.map((loc) => `${loc} aluminium services`),
  ],
  openGraph: {
    title: `${BUSINESS_INFO.name} | Premium Aluminium, Glass & Safety Solutions`,
    description:
      'Professional aluminium fabrication, glass installation, and safety netting services across Mumbai. Quality workmanship, competitive pricing.',
    url: '/',
    siteName: BUSINESS_INFO.name,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/website-images/og-home.jpg',
        width: 1200,
        height: 630,
        alt: `${BUSINESS_INFO.name} - Aluminium, Glass & Netting Solutions`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${BUSINESS_INFO.name} | Premium Solutions in Mumbai`,
    description:
      'Professional aluminium fabrication, glass installation, and safety netting services across Mumbai.',
    images: ['/website-images/og-home.jpg'],
  },
  alternates: {
    canonical: '/',
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
};

export default function Home() {
  // Generate LocalBusiness structured data
  const localBusinessSchema = generateLocalBusinessSchema();

  return (
    <>
      {/* Structured Data for SEO */}
      <StructuredData data={localBusinessSchema} />

      {/* Client Component with Modal State */}
      <HomePageClient />
    </>
  );
}
