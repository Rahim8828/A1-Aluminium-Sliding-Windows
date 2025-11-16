'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Service } from '@/types';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import { ArrowRight } from 'lucide-react';

export interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <Link href={`/services/${service.slug}`} className="block group">
      <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
        {/* Service Image */}
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          <Image
            src={service.images[0] || '/images/placeholder-service.jpg'}
            alt={`${service.title} - Professional ${service.category} services in Mumbai`}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={85}
          />
          {/* Category Badge */}
          <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium capitalize">
            {service.category}
          </div>
        </div>

        {/* Service Content */}
        <CardContent className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-600 line-clamp-3">
            {service.shortDescription}
          </p>
        </CardContent>

        {/* Service Footer */}
        <CardFooter className="px-6 pb-6 pt-0">
          <div className="flex items-center justify-between w-full">
            {/* Pricing */}
            <div className="text-sm">
              {service.pricing.type === 'quote' ? (
                <span className="text-orange-600 font-semibold">Request Quote</span>
              ) : service.pricing.type === 'range' ? (
                <span className="text-gray-900 font-semibold">
                  ₹{service.pricing.min} - ₹{service.pricing.max}
                  {service.pricing.unit && (
                    <span className="text-gray-500 text-xs ml-1">
                      {service.pricing.unit}
                    </span>
                  )}
                </span>
              ) : (
                <span className="text-gray-900 font-semibold">
                  ₹{service.pricing.min}
                  {service.pricing.unit && (
                    <span className="text-gray-500 text-xs ml-1">
                      {service.pricing.unit}
                    </span>
                  )}
                </span>
              )}
            </div>

            {/* Learn More Link */}
            <div className="flex items-center text-orange-600 font-medium text-sm group-hover:gap-2 transition-all">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ServiceCard;
