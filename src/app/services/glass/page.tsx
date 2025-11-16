import React from 'react';
import { Metadata } from 'next';
import { getServicesByCategory, getServiceBySlug } from '@/data/services';
import ServiceDetail from '@/components/services/ServiceDetail';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import ServiceCard from '@/components/services/ServiceCard';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/structured-data';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Enable ISR - revalidate every 7200 seconds (2 hours)
export const revalidate = 7200;

export const metadata: Metadata = {
  title: 'Glass Services in Mumbai - Partitions, Doors, Shower Enclosures & Railings | A1 Solutions',
  description:
    'Professional glass installation services in Mumbai. Frameless glass partitions, doors, shower enclosures, and railings with toughened safety glass. Serving Andheri, Bandra, Goregaon, Powai, Malad & all Mumbai areas. Call for free quote!',
  keywords: [
    'glass partitions mumbai',
    'glass doors mumbai',
    'shower enclosures mumbai',
    'glass railings mumbai',
    'frameless glass mumbai',
    'toughened glass mumbai',
    'glass work andheri',
    'glass work bandra',
    'glass work goregaon',
    'glass work powai',
    'glass partition andheri',
    'glass partition bandra',
    'office glass partition mumbai',
    'bathroom glass partition',
  ],
  openGraph: {
    title: 'Glass Services in Mumbai - Partitions, Doors, Shower Enclosures',
    description:
      'Professional glass installation services across Mumbai. Elegant frameless and framed glass solutions with expert installation. Serving all Mumbai areas.',
    type: 'website',
    url: '/services/glass',
  },
  alternates: {
    canonical: '/services/glass',
  },
};

export default function GlassServicesPage() {
  const glassServices = getServicesByCategory('glass');
  
  // Get main service for detailed display (glass partitions as primary)
  const mainService = getServiceBySlug('glass-partitions');

  // Collect all FAQs from glass services
  const allFAQs = glassServices.flatMap((service) => service.faqs);

  // Generate structured data with geo-targeting
  const serviceSchema = generateServiceSchema({
    name: 'Glass Installation Services',
    description:
      'Professional glass partitions, doors, shower enclosures, and railings using toughened safety glass for residential and commercial properties in Mumbai.',
    serviceType: 'Glass Installation',
    url: '/services/glass',
    areaServed: [
      'Andheri',
      'Bandra',
      'Goregaon',
      'Jogeshwari',
      'Powai',
      'Malad',
      'Kandivali',
      'Borivali',
      'Santacruz',
      'Vile Parle',
      'Dahisar',
      'Chembur',
      'Mumbai',
    ],
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: 'Glass Services', url: '/services/glass' },
  ]);

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 py-4">
            <Link
              href="/services"
              className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Services
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="inline-block bg-orange-500 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Glass Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Premium Glass Services
              </h1>
              <p className="text-xl md:text-2xl text-orange-100">
                Elegant glass partitions, doors, shower enclosures, and railings using toughened safety glass for modern spaces across Mumbai
              </p>
            </div>
          </div>
        </section>

        {/* Main Service Detail */}
        {mainService && (
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <ServiceDetail service={mainService} />
            </div>
          </section>
        )}

        {/* All Glass Services */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Glass Services
              </h2>
              <p className="text-lg text-gray-600">
                Explore our complete range of glass installation services designed to maximize light, space, and elegance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {glassServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Glass Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Why Choose Glass Solutions?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Maximizes Natural Light
                  </h3>
                  <p className="text-gray-600">
                    Glass partitions and doors allow natural light to flow throughout your space, creating a bright and open atmosphere.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Modern & Elegant Design
                  </h3>
                  <p className="text-gray-600">
                    Frameless and semi-framed glass solutions provide a contemporary, sophisticated look that enhances any space.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Safety & Durability
                  </h3>
                  <p className="text-gray-600">
                    We use toughened safety glass that is 4-5 times stronger than regular glass, ensuring safety and longevity.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Easy Maintenance
                  </h3>
                  <p className="text-gray-600">
                    Glass surfaces are easy to clean and maintain, with optional protective coatings to prevent water stains.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Space Enhancement
                  </h3>
                  <p className="text-gray-600">
                    Glass creates an illusion of larger spaces, making rooms feel more open and spacious without physical barriers.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Customizable Options
                  </h3>
                  <p className="text-gray-600">
                    Choose from clear, frosted, tinted, or decorative glass options to match your privacy and design preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Glass Types Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Glass Types We Offer
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Toughened Glass
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Heat-treated for extra strength and safety, shatters into small harmless pieces
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Laminated Glass
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Multiple layers bonded together for enhanced security and sound insulation
                  </p>
                </div>
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Frosted Glass
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Sandblasted or acid-etched for privacy while maintaining light transmission
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ServiceFAQ 
                faqs={allFAQs} 
                title="Glass Services - Frequently Asked Questions"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
