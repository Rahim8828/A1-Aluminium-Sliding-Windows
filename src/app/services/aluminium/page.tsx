import { Metadata } from 'next';
import { getServicesByCategory, getServiceBySlug } from '@/data/services';
import ServiceDetail from '@/components/services/ServiceDetail';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import ServiceCard from '@/components/services/ServiceCard';
import CustomerPhotos from '@/components/services/CustomerPhotos';
import { generateServiceSchema, generateBreadcrumbSchema } from '@/lib/structured-data';

// Enable ISR - revalidate every 7200 seconds (2 hours)
export const revalidate = 7200;

export const metadata: Metadata = {
  title: 'Aluminium Services in Mumbai - Windows, Doors, Partitions & More | A1 Solutions',
  description:
    'Professional aluminium fabrication services in Mumbai. Premium aluminium windows, doors, partitions, and sliding systems. Serving Andheri, Bandra, Goregaon, Powai, Malad & all Mumbai areas. Call for free quote!',
  keywords: [
    'aluminium windows mumbai',
    'aluminium doors mumbai',
    'aluminium partitions mumbai',
    'aluminium sliding systems',
    'aluminium fabrication mumbai',
    'aluminium work andheri',
    'aluminium work bandra',
    'aluminium work goregaon',
    'aluminium work powai',
    'aluminium work malad',
    'aluminium work kandivali',
    'aluminium services mumbai',
    'aluminium fabrication andheri',
    'aluminium fabrication bandra',
  ],
  openGraph: {
    title: 'Aluminium Services in Mumbai - Windows, Doors, Partitions',
    description:
      'Professional aluminium fabrication services across Mumbai. Premium quality windows, doors, partitions with expert installation. Serving all Mumbai areas.',
    type: 'website',
    url: '/services/aluminium',
  },
  alternates: {
    canonical: '/services/aluminium',
  },
};

export default function AluminiumServicesPage() {
  const aluminiumServices = getServicesByCategory('aluminium');
  
  // Get main service for detailed display (aluminium windows as primary)
  const mainService = getServiceBySlug('aluminium-windows');

  // Collect all FAQs from aluminium services
  const allFAQs = aluminiumServices.flatMap((service) => service.faqs);

  // Generate structured data with geo-targeting
  const serviceSchema = generateServiceSchema({
    name: 'Aluminium Fabrication Services',
    description:
      'Professional aluminium windows, doors, partitions, and sliding systems for residential and commercial properties in Mumbai.',
    serviceType: 'Aluminium Fabrication',
    url: '/services/aluminium',
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
    { name: 'Aluminium Services', url: '/services/aluminium' },
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
        {/* Hero Section - Mobile Optimized */}
        <section className="bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700 text-white py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="inline-block bg-white/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">
                Aluminium Solutions
              </div>
              <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 leading-tight">
                Premium Aluminium Services
              </h1>
              <p className="text-base md:text-xl lg:text-2xl text-orange-50 leading-relaxed">
                High-quality aluminium windows, doors, partitions, and sliding systems for residential and commercial spaces across Mumbai
              </p>
            </div>
          </div>
        </section>

        {/* Main Service Detail */}
        {mainService && (
          <section className="py-8 md:py-16">
            <div className="container mx-auto px-4">
              <ServiceDetail service={mainService} />
            </div>
          </section>
        )}

        {/* All Aluminium Services */}
        <section className="py-8 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-6 md:mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
                Our Aluminium Services
              </h2>
              <p className="text-sm md:text-lg text-gray-600">
                Explore our complete range of aluminium fabrication services designed for durability, style, and functionality.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {aluminiumServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Aluminium Section */}
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 md:mb-8 text-center">
                Why Choose Aluminium?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                    Durability & Longevity
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Aluminium is highly resistant to corrosion and weathering, ensuring your installations last for decades with minimal maintenance.
                  </p>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                    Modern Aesthetics
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Sleek, contemporary designs with powder-coated finishes in various colors to match any architectural style.
                  </p>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                    Energy Efficiency
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Thermal break technology provides excellent insulation, reducing energy costs and improving comfort.
                  </p>
                </div>
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">
                    Low Maintenance
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Unlike wood or steel, aluminium requires minimal upkeep and retains its appearance for years.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Photos Section */}
        <CustomerPhotos title="Real Aluminium Projects from Happy Customers" />

        {/* FAQ Section */}
        <section className="py-8 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ServiceFAQ 
                faqs={allFAQs} 
                title="Aluminium Services - Frequently Asked Questions"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
