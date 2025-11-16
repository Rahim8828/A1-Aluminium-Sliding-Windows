'use client';

import React from 'react';
import { Service } from '@/types';
import ServiceCard from '@/components/services/ServiceCard';
import { Phone, MessageCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { BUSINESS_INFO } from '@/lib/constants';

interface ServicesPageClientProps {
  aluminiumServices: Service[];
  glassServices: Service[];
  nettingServices: Service[];
}

export default function ServicesPageClient({
  aluminiumServices,
  glassServices,
  nettingServices,
}: ServicesPageClientProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8">
              Comprehensive aluminium, glass, and netting solutions for residential and commercial properties across Mumbai
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => (window.location.href = `tel:${BUSINESS_INFO.phone.primary}`)}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call {BUSINESS_INFO.phone.display}
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  window.open(
                    `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodeURIComponent(
                      'Hi, I would like to know more about your services.'
                    )}`,
                    '_blank'
                  )
                }
                className="bg-white text-orange-600 hover:bg-orange-50 border-white"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Aluminium Services Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Aluminium Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Premium quality aluminium windows, doors, partitions, and sliding systems with superior durability and modern aesthetics.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aluminiumServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Glass Services Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Glass Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Elegant glass partitions, doors, shower enclosures, and railings using toughened safety glass for modern spaces.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {glassServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Netting Services Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Netting Solutions
            </h2>
            <p className="text-lg text-gray-600">
              High-quality safety nets, bird protection nets, and sports nets to protect your family and property.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nettingServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Get a free consultation and quote for your project. Our experts are ready to help you choose the perfect solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => (window.location.href = '/contact')}
              >
                Get Free Quote
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => (window.location.href = `tel:${BUSINESS_INFO.phone.primary}`)}
                className="bg-white text-orange-600 hover:bg-orange-50 border-white"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Serving All of Mumbai
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We provide our services across Mumbai and surrounding areas
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {BUSINESS_INFO.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="px-4 py-2 bg-orange-50 text-orange-700 rounded-full text-sm font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
