'use client';

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
  startingPrice: string;
  popular?: boolean;
}

const serviceCategories: ServiceCategory[] = [
  {
    id: 'aluminium',
    title: 'Aluminium',
    description:
      'Premium aluminium windows, doors, partitions, and sliding systems. Durable, modern, and energy-efficient solutions for your space.',
    icon: <Wrench className="w-12 h-12" strokeWidth={2} />,
    href: '/services/aluminium',
    image: '/Aluminium Category Images/Showroom front.webp',
    startingPrice: '₹8,000',
    popular: true,
  },
  {
    id: 'glass',
    title: 'Glass',
    description:
      'Elegant glass partitions, doors, shower enclosures, and railings. Transform your space with sophisticated glass installations.',
    icon: <Sparkles className="w-12 h-12" strokeWidth={2} />,
    href: '/services/glass',
    image: '/Glass Category Images/Full glass partitions.webp',
    startingPrice: '₹12,000',
  },
  {
    id: 'netting',
    title: 'Netting',
    description:
      'Safety nets, bird protection, anti-monkey nets, and sports nets. Comprehensive protection for your property and loved ones.',
    icon: <Shield className="w-12 h-12" strokeWidth={2} />,
    href: '/services/netting',
    image: '/Netting Category/Pigeon netting.webp',
    startingPrice: '₹3,500',
  },
];

export function ServicesOverview() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
              Our Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Premium Solutions for Every Need
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 leading-relaxed">
            Comprehensive aluminium, glass, and netting solutions for residential and commercial properties across Mumbai
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {serviceCategories.map((service, index) => (
            <Link 
              key={service.id} 
              href={service.href} 
              className="group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
              }}
            >
              <Card className="h-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border-0 overflow-hidden bg-white">
                {/* Image Section with Icon Overlay */}
                <div className="relative h-48 md:h-56 overflow-hidden bg-gray-100">
                  {service.image ? (
                    <>
                      <Image
                        src={service.image}
                        alt={`${service.title} - Professional services in Mumbai`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        quality={85}
                      />
                      {/* Dark overlay for better icon visibility */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                      <div className="text-gray-400">{service.icon}</div>
                    </div>
                  )}

                  {/* Centered Icon */}
                  <div className="absolute inset-0 flex items-center justify-center z-10">
                    <div className="text-white drop-shadow-2xl group-hover:scale-125 group-hover:rotate-6 transition-all duration-500">
                      {service.icon}
                    </div>
                  </div>

                  {/* Popular Badge */}
                  {service.popular && (
                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-orange-600 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      ⭐ Popular
                    </div>
                  )}
                </div>

                {/* Content Section - Simplified like screenshot */}
                <div className="p-6 md:p-7 bg-white text-center">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Service Count */}
                  <p className="text-base md:text-lg text-gray-600 font-medium">
                    {service.id === 'aluminium' ? '8 services' : 
                     service.id === 'glass' ? '5 services' : 
                     '3 services'}
                  </p>
                  
                  {/* Hidden description - shows on hover */}
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-h-0 group-hover:max-h-40 overflow-hidden">
                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                      {service.description}
                    </p>
                    <div className="inline-flex items-center text-orange-600 text-sm font-bold">
                      <span>View All Options</span>
                      <ArrowRight className="w-5 h-5 ml-2 transition-all duration-300 group-hover:translate-x-2" />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <style jsx>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>

        {/* Bottom CTA - Enhanced */}
        <div className="text-center mt-12 md:mt-16 relative">
          <div className="bg-gradient-to-br from-orange-600 via-orange-500 to-amber-600 rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="inline-block mb-4">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold">
                  💡 Need Help Choosing?
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                Not Sure Which Service You Need?
              </h3>
              
              <p className="text-base md:text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                Get expert advice and a free quote tailored to your requirements. Our specialists will help you choose the perfect solution.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center px-8 md:px-10 py-4 md:py-5 bg-white text-orange-600 text-base md:text-lg font-bold rounded-xl hover:bg-gray-50 transition-all hover:shadow-2xl hover:scale-105 min-h-[56px] touch-manipulation"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
                
                <a
                  href="tel:+919876543210"
                  className="group inline-flex items-center px-8 md:px-10 py-4 md:py-5 bg-transparent border-2 border-white text-white text-base md:text-lg font-bold rounded-xl hover:bg-white hover:text-orange-600 transition-all hover:shadow-2xl hover:scale-105 min-h-[56px] touch-manipulation"
                >
                  📞 Call Now
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 flex flex-wrap justify-center gap-6 text-white/90 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Free Site Visit</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>No Obligation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span>Same Day Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
