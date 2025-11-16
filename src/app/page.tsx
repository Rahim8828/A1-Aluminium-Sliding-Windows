import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { HeroSection } from '../components/home/HeroSection';
import { ServicesOverview } from '../components/home/ServicesOverview';
import StructuredData from '@/components/seo/StructuredData';
import { generateLocalBusinessSchema } from '@/lib/structured-data';
import { BUSINESS_INFO, SEO_KEYWORDS } from '@/lib/constants';

// Dynamic imports for below-the-fold components to improve initial load performance
const WhyChooseUs = dynamic(() => import('../components/home/WhyChooseUs').then(mod => ({ default: mod.WhyChooseUs })), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});

const Testimonials = dynamic(() => import('../components/home/Testimonials').then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});

const StatsCounter = dynamic(() => import('../components/home/StatsCounter').then(mod => ({ default: mod.StatsCounter })), {
  loading: () => <div className="h-64 animate-pulse bg-orange-600" />,
});

const BlogPreview = dynamic(() => import('../components/home/BlogPreview').then(mod => ({ default: mod.BlogPreview })), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
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
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Our Services
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Comprehensive aluminium, glass, and netting solutions for residential and
                commercial properties across Mumbai
              </p>
            </div>
            <ServicesOverview />
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Why Choose A1 Aluminium?
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Experience the difference with Mumbai&apos;s trusted aluminium, glass, and
                netting experts
              </p>
            </div>
            <WhyChooseUs />
          </div>
        </section>

        {/* Stats Counter Section */}
        <section className="bg-orange-600 py-16 md:py-20">
          <div className="container mx-auto px-4">
            <StatsCounter />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                What Our Customers Say
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Don&apos;t just take our word for it - hear from our satisfied customers
                across Mumbai
              </p>
            </div>
            <Testimonials />
          </div>
        </section>

        {/* Blog Preview Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                Latest from Our Blog
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-gray-600">
                Tips, guides, and insights about aluminium, glass, and netting solutions
              </p>
            </div>
            <BlogPreview />
          </div>
        </section>
      </main>
    </>
  );
}
