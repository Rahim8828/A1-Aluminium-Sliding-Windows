import { Metadata } from 'next';
import { Suspense } from 'react';
import { services, getServicesByCategory } from '@/data/services';
import { generateServiceSchema } from '@/lib/structured-data';
import ServicesPageClient from '@/app/services/ServicesPageClient';

// Enable ISR - revalidate every 7200 seconds (2 hours)
export const revalidate = 7200;

export const metadata: Metadata = {
  title: 'Our Services - Aluminium, Glass & Netting Solutions in Mumbai | A1 Solutions',
  description:
    'Professional aluminium fabrication, glass installation, and safety netting services in Mumbai. Windows, doors, partitions, shower enclosures, safety nets & more. Serving Andheri, Bandra, Goregaon, Powai, Malad & all Mumbai areas. Free consultation!',
  keywords: [
    'aluminium services mumbai',
    'glass services mumbai',
    'netting services mumbai',
    'aluminium windows doors mumbai',
    'glass partitions mumbai',
    'safety nets mumbai',
    'bird netting mumbai',
    'shower enclosures mumbai',
    'aluminium fabrication andheri',
    'glass installation bandra',
    'safety nets goregaon',
  ],
  openGraph: {
    title: 'Our Services - Aluminium, Glass & Netting Solutions in Mumbai',
    description:
      'Professional aluminium fabrication, glass installation, and safety netting services across Mumbai. Serving all areas.',
    type: 'website',
    url: '/services',
  },
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesPage() {
  const aluminiumServices = getServicesByCategory('aluminium');
  const glassServices = getServicesByCategory('glass');
  const nettingServices = getServicesByCategory('netting');

  // Generate structured data for services overview
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: generateServiceSchema({
        name: service.title,
        description: service.shortDescription,
        serviceType: service.category,
        url: `/services/${service.slug}`,
      }),
    })),
  };

  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      <Suspense fallback={
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading services...</p>
          </div>
        </div>
      }>
        <ServicesPageClient
          aluminiumServices={aluminiumServices}
          glassServices={glassServices}
          nettingServices={nettingServices}
        />
      </Suspense>
    </>
  );
}
