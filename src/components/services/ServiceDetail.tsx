'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Service } from '@/types';
import Button from '@/components/ui/Button';
import { Check, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

export interface ServiceDetailProps {
  service: Service;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ service }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  const handleCallClick = () => {
    window.location.href = `tel:${BUSINESS_INFO.phone.primary}`;
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi, I'm interested in ${service.title}. Please provide more details.`
    );
    window.open(
      `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${message}`,
      '_blank'
    );
  };

  return (
    <div className="space-y-12">
      {/* Image Gallery Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Main Image */}
        <div className="space-y-4">
          <div className="relative h-96 w-full overflow-hidden rounded-lg bg-gray-100">
            <Image
              src={service.images[selectedImage] || '/website-images/placeholder-service.jpg'}
              alt={`${service.title} - Professional installation example ${selectedImage + 1} in Mumbai`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              quality={90}
              priority
            />
          </div>

          {/* Thumbnail Gallery */}
          {service.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {service.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-20 w-full overflow-hidden rounded-md transition-all ${
                    selectedImage === index
                      ? 'ring-2 ring-orange-600 ring-offset-2'
                      : 'opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${service.title} thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="100px"
                    quality={75}
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Service Info & CTA */}
        <div className="space-y-6">
          <div>
            <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium capitalize mb-4">
              {service.category}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {service.title}
            </h1>
            <p className="text-lg text-gray-600">
              {service.fullDescription}
            </p>
          </div>

          {/* Pricing */}
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-sm font-medium text-gray-500 mb-2">Pricing</h3>
            {service.pricing.type === 'quote' ? (
              <p className="text-2xl font-bold text-orange-600">Request a Quote</p>
            ) : service.pricing.type === 'range' ? (
              <div>
                <p className="text-3xl font-bold text-gray-900">
                  ₹{service.pricing.min} - ₹{service.pricing.max}
                </p>
                {service.pricing.unit && (
                  <p className="text-sm text-gray-500 mt-1">{service.pricing.unit}</p>
                )}
              </div>
            ) : (
              <div>
                <p className="text-3xl font-bold text-gray-900">
                  ₹{service.pricing.min}
                </p>
                {service.pricing.unit && (
                  <p className="text-sm text-gray-500 mt-1">{service.pricing.unit}</p>
                )}
              </div>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={handleCallClick}
              className="flex-1"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={handleWhatsAppClick}
              className="flex-1"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </div>

          <p className="text-sm text-gray-500 text-center">
            Get a free consultation and quote for your project
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Key Benefits
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {service.benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-orange-300 hover:shadow-md transition-all"
            >
              <div className="flex-shrink-0 w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mt-0.5">
                <Check className="w-4 h-4 text-orange-600" />
              </div>
              <p className="text-gray-700">{benefit}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases Section */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          Perfect For
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {service.useCases.map((useCase, index) => (
            <div
              key={index}
              className="p-4 bg-gradient-to-br from-orange-50 to-white rounded-lg border border-orange-100"
            >
              <p className="text-gray-800 font-medium">{useCase}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 rounded-xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-3">
          Ready to Get Started?
        </h3>
        <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
          Contact us today for a free consultation and quote. Our experts are ready to help you with your {service.title.toLowerCase()} needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="secondary"
            size="lg"
            onClick={handleCallClick}
          >
            <Phone className="w-5 h-5 mr-2" />
            {BUSINESS_INFO.phone.display}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={handleWhatsAppClick}
            className="bg-white text-orange-600 hover:bg-orange-50 border-white"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Chat on WhatsApp
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
