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
  title: 'Safety Netting Services in Mumbai - Bird Nets, Safety Nets, Anti-Monkey Nets | A1 Solutions',
  description:
    'Professional safety netting services in Mumbai. Child safety nets, bird protection nets, anti-monkey nets, and sports nets. UV-resistant, durable installation. Serving Andheri, Bandra, Goregaon, Powai, Malad & all Mumbai areas. Call for free quote!',
  keywords: [
    'safety nets mumbai',
    'bird netting mumbai',
    'anti-monkey nets mumbai',
    'balcony safety nets mumbai',
    'pigeon nets mumbai',
    'child safety nets mumbai',
    'cricket nets mumbai',
    'safety nets andheri',
    'safety nets bandra',
    'safety nets goregaon',
    'safety nets powai',
    'bird netting andheri',
    'bird netting bandra',
    'balcony protection mumbai',
  ],
  openGraph: {
    title: 'Safety Netting Services in Mumbai - Bird Nets, Safety Nets',
    description:
      'Professional safety netting services across Mumbai. Protect your family and property with high-quality, UV-resistant nets. Serving all Mumbai areas.',
    type: 'website',
    url: '/services/netting',
  },
  alternates: {
    canonical: '/services/netting',
  },
};

export default function NettingServicesPage() {
  const nettingServices = getServicesByCategory('netting');
  
  // Get main service for detailed display (safety nets as primary)
  const mainService = getServiceBySlug('safety-nets');

  // Collect all FAQs from netting services
  const allFAQs = nettingServices.flatMap((service) => service.faqs);

  // Generate structured data with geo-targeting
  const serviceSchema = generateServiceSchema({
    name: 'Safety Netting Services',
    description:
      'Professional safety nets, bird protection nets, anti-monkey nets, and sports nets for residential and commercial properties in Mumbai.',
    serviceType: 'Safety Netting',
    url: '/services/netting',
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
    { name: 'Netting Services', url: '/services/netting' },
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
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <div className="inline-block bg-orange-500 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Netting Solutions
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Safety Netting Services
              </h1>
              <p className="text-xl md:text-2xl text-orange-100">
                High-quality safety nets, bird protection nets, and sports nets to protect your family, property, and create safe play areas across Mumbai
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

        {/* All Netting Services */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Netting Services
              </h2>
              <p className="text-lg text-gray-600">
                Explore our complete range of safety netting solutions designed to protect your loved ones and property.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nettingServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Our Nets Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Why Choose Our Safety Nets?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Child & Pet Safety
                  </h3>
                  <p className="text-gray-600">
                    Protect your children and pets from falls with our high-strength safety nets designed specifically for balconies and windows.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    UV-Resistant Materials
                  </h3>
                  <p className="text-gray-600">
                    Our nets are made from UV-resistant materials that withstand harsh sunlight and weather conditions for years.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Nearly Invisible
                  </h3>
                  <p className="text-gray-600">
                    Designed to be nearly invisible from a distance, our nets provide protection without obstructing your views.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    High Tensile Strength
                  </h3>
                  <p className="text-gray-600">
                    Made from high-quality materials with excellent tensile strength to withstand significant force and impact.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Professional Installation
                  </h3>
                  <p className="text-gray-600">
                    Our experienced team ensures secure, professional installation with proper tensioning and fixing for maximum safety.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Humane Bird Control
                  </h3>
                  <p className="text-gray-600">
                    Our bird nets prevent nesting and droppings without harming birds, providing a humane solution to bird problems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Common Applications Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Common Applications
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 bg-orange-50 rounded-lg">
                  <div className="text-4xl mb-3">🏢</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Balconies
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Protect children and pets from falls
                  </p>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-lg">
                  <div className="text-4xl mb-3">🪟</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Windows
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Safety for high-rise apartments
                  </p>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-lg">
                  <div className="text-4xl mb-3">🏠</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Terraces
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Bird protection and safety
                  </p>
                </div>
                <div className="text-center p-6 bg-orange-50 rounded-lg">
                  <div className="text-4xl mb-3">❄️</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    AC Ducts
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Prevent bird nesting
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Safety Tips Section */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
                Safety Net Maintenance Tips
              </h2>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-3">1.</span>
                    <p className="text-gray-700">
                      <strong>Regular Inspection:</strong> Check nets every 3-6 months for any signs of wear, tears, or loose fittings.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-3">2.</span>
                    <p className="text-gray-700">
                      <strong>Clean Periodically:</strong> Gently clean with water to remove dust and debris that can accumulate over time.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-3">3.</span>
                    <p className="text-gray-700">
                      <strong>Check Tension:</strong> Ensure nets remain properly tensioned for maximum effectiveness and safety.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-3">4.</span>
                    <p className="text-gray-700">
                      <strong>Immediate Repairs:</strong> Contact us immediately if you notice any damage or loose sections.
                    </p>
                  </li>
                  <li className="flex items-start">
                    <span className="text-orange-600 font-bold mr-3">5.</span>
                    <p className="text-gray-700">
                      <strong>Replacement Timeline:</strong> UV-resistant nets typically last 5-7 years with proper maintenance.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Photos Section */}
        <CustomerPhotos title="Real Netting Projects from Happy Customers" />

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <ServiceFAQ 
                faqs={allFAQs} 
                title="Netting Services - Frequently Asked Questions"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
