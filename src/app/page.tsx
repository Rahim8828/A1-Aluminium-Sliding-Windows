import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { HeroSection } from '../components/home/HeroSection';
import { ServicesOverview } from '../components/home/ServicesOverview';
import StructuredData from '@/components/seo/StructuredData';
import { generateLocalBusinessSchema } from '@/lib/structured-data';
import { BUSINESS_INFO, SEO_KEYWORDS } from '@/lib/constants';

// Dynamic imports for below-the-fold components to improve initial load performance
const WhyChooseUsWithStats = dynamic(() => import('../components/home/WhyChooseUsWithStats').then(mod => ({ default: mod.WhyChooseUsWithStats })), {
  loading: () => <div className="h-96 animate-pulse bg-orange-600" />,
});

const Testimonials = dynamic(() => import('../components/home/Testimonials').then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});

const FinalCTA = dynamic(() => import('../components/home/FinalCTA').then(mod => ({ default: mod.FinalCTA })), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100" />,
});

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
        url: '/images/og-home.jpg',
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
    images: ['/images/og-home.jpg'],
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

      {/* Main Content with proper heading hierarchy */}
      <main className="min-h-screen">
        {/* Hero Section - H1 is inside this component */}
        <HeroSection />

        {/* Services Overview Section */}
        <ServicesOverview />

        {/* Why Choose Us with Stats - Merged Section */}
        <WhyChooseUsWithStats />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Final CTA Section */}
        <FinalCTA />
      </main>
    </>
  );
}
