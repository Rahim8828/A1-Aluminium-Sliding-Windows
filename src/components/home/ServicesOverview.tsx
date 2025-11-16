import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Wrench, Sparkles, Shield } from 'lucide-react';
import { Card } from '@/components/ui/Card';

interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  image?: string;
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'aluminium',
    title: 'Aluminium Solutions',
    description:
      'Premium aluminium windows, doors, partitions, and sliding systems. Durable, modern, and energy-efficient solutions for your space.',
    icon: <Wrench className="w-8 h-8" />,
    href: '/services/aluminium',
    image: '/images/services/aluminium-category.jpg',
  },
  {
    id: 'glass',
    title: 'Glass Solutions',
    description:
      'Elegant glass partitions, doors, shower enclosures, and railings. Transform your space with sophisticated glass installations.',
    icon: <Sparkles className="w-8 h-8" />,
    href: '/services/glass',
    image: '/images/services/glass-category.jpg',
  },
  {
    id: 'netting',
    title: 'Netting Solutions',
    description:
      'Safety nets, bird protection, anti-monkey nets, and sports nets. Comprehensive protection for your property and loved ones.',
    icon: <Shield className="w-8 h-8" />,
    href: '/services/netting',
    image: '/images/services/netting-category.jpg',
  },
];

export function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions for all your aluminium, glass, and netting needs across Mumbai
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {serviceCategories.map((service) => (
            <Link key={service.id} href={service.href} className="group">
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                {/* Image Section */}
                <div className="relative h-48 md:h-56 bg-gradient-to-br from-orange-500 to-orange-700 overflow-hidden">
                  {service.image ? (
                    <Image
                      src={service.image}
                      alt={`${service.title} - Professional services in Mumbai`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={85}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white opacity-50">{service.icon}</div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 bg-white rounded-full p-3 shadow-lg text-orange-600 transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  
                  {/* CTA Link */}
                  <div className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700">
                    <span>Explore Services</span>
                    <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Not sure which service you need?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
          >
            Get Free Consultation
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
