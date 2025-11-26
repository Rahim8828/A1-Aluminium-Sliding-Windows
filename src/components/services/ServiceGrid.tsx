'use client';

/**
 * Service Grid Component - Enhanced Version
 * Displays services in a responsive grid layout with better information display
 * 2 columns on mobile, 3 on tablet, 4-5 on desktop
 */

import Image from 'next/image';
import { Service } from '@/types';
import { Star } from 'lucide-react';

interface ServiceGridProps {
  services: Service[];
  onServiceClick: (serviceId: string) => void;
  isLoading?: boolean;
}

// Get category icon and color
const getCategoryBadge = (category: string) => {
  const badges = {
    aluminium: { label: 'Aluminium', color: 'bg-blue-100 text-blue-700' },
    glass: { label: 'Glass', color: 'bg-purple-100 text-purple-700' },
    netting: { label: 'Netting', color: 'bg-green-100 text-green-700' },
  };
  return badges[category as keyof typeof badges] || { label: category, color: 'bg-gray-100 text-gray-700' };
};

// Get price range from service options (kept for future use)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const getPriceRange = (service: Service) => {
  if (!service.options || service.options.length === 0) return null;
  
  const prices = service.options.map(opt => opt.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  
  if (minPrice === maxPrice) {
    return `₹${minPrice.toLocaleString()}`;
  }
  return `₹${minPrice.toLocaleString()} - ₹${maxPrice.toLocaleString()}`;
};

export default function ServiceGrid({
  services,
  onServiceClick,
  isLoading = false,
}: ServiceGridProps) {
  // Loading state with proper skeleton
  if (isLoading) {
    return (
      <div className="space-y-8">
        {Array.from({ length: 3 }).map((_, catIndex) => (
          <div key={catIndex} className="space-y-4">
            <div className="h-8 bg-gray-200 rounded w-32 animate-pulse" />
            <div className="space-y-4">
              {Array.from({ length: 2 }).map((_, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border-2 border-gray-200 p-4 animate-pulse"
                >
                  <div className="flex gap-4">
                    <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0" />
                    <div className="flex-1 space-y-3">
                      <div className="h-5 bg-gray-200 rounded w-3/4" />
                      <div className="h-4 bg-gray-200 rounded w-1/2" />
                      <div className="h-6 bg-gray-200 rounded w-1/3" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Empty state with CTA
  if (!services || services.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-4">
        <div className="w-32 h-32 mb-6 rounded-full bg-orange-50 flex items-center justify-center">
          <svg
            className="w-16 h-16 text-orange-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-3">
          No Services Found
        </h3>
        <p className="text-gray-600 text-center max-w-md mb-6">
          We couldn&apos;t find any services matching your criteria. Try adjusting your filters or browse all services.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors"
        >
          View All Services
        </button>
      </div>
    );
  }

  // Group services by category
  const groupedServices = services.reduce((acc, service) => {
    const category = service.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(service);
    return acc;
  }, {} as Record<string, Service[]>);

  return (
    <div className="space-y-12" role="list" aria-label="Services by category">
      {Object.entries(groupedServices).map(([category, categoryServices]) => {
        const categoryBadge = getCategoryBadge(category);
        
        return (
          <div key={category} className="space-y-6">
            {/* Category Header */}
            <div className="flex items-center gap-3">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 capitalize">
                {categoryBadge.label}
              </h2>
              <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                {categoryServices.length} {categoryServices.length === 1 ? 'service' : 'services'}
              </span>
            </div>

            {/* Service Cards */}
            <div className="space-y-3">
              {categoryServices.map((service) => {
                const minPrice = Math.min(...service.options.map(o => o.price));
                const optionsCount = service.options.length;

                return (
                  <div
                    key={service.id}
                    className="bg-white rounded-lg border border-gray-200 hover:border-orange-300 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="p-3">
                      <div className="flex gap-3">
                        {/* Service Details - LEFT SIDE */}
                        <div className="flex-1 min-w-0">
                          {/* Title */}
                          <h3 className="text-base font-bold text-gray-900 mb-1.5 line-clamp-1">
                            {service.title}
                          </h3>

                          {/* Rating and Reviews */}
                          <div className="flex items-center gap-1 mb-2">
                            <Star className="w-3.5 h-3.5 text-yellow-400 fill-current" />
                            <span className="text-xs font-bold text-gray-900">
                              {service.rating.toFixed(1)}
                            </span>
                            <span className="text-xs text-gray-600">
                              ({(service.reviewCount / 1000).toFixed(1)}K reviews)
                            </span>
                          </div>

                          {/* Price */}
                          <div className="mb-2">
                            <div className="flex items-baseline gap-1.5">
                              <span className="text-xs text-gray-600">Starts at</span>
                              <span className="text-lg font-bold text-gray-900">
                                ₹{minPrice.toLocaleString()}
                              </span>
                            </div>
                          </div>

                          {/* Key Benefits */}
                          <ul className="space-y-1 mb-2.5">
                            {service.benefits.slice(0, 2).map((benefit: string, index: number) => (
                              <li key={index} className="flex items-start gap-1.5 text-xs text-gray-700 line-clamp-1">
                                <span className="text-gray-400 flex-shrink-0">•</span>
                                <span className="line-clamp-1">{benefit}</span>
                              </li>
                            ))}
                          </ul>

                          {/* View Details Link */}
                          <button
                            onClick={() => onServiceClick(service.id)}
                            className="text-orange-600 font-semibold text-xs hover:text-orange-700 transition-colors block"
                          >
                            View details
                          </button>
                        </div>

                        {/* Service Image + Add Button - RIGHT SIDE */}
                        <div className="flex flex-col gap-2 flex-shrink-0">
                          {/* Service Image */}
                          <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-gray-100">
                            <Image
                              src={service.images[0] || '/website-images/placeholder-service.jpg'}
                              alt={service.title}
                              fill
                              sizes="80px"
                              className="object-cover"
                            />
                          </div>

                          {/* Add Button */}
                          <button
                            onClick={() => onServiceClick(service.id)}
                            className="w-20 py-2 text-orange-600 font-semibold rounded-lg hover:bg-orange-50 transition-colors border-2 border-orange-600 text-xs min-h-[36px] touch-manipulation"
                          >
                            Add
                          </button>

                          {/* Options Count */}
                          <span className="text-xs text-gray-600 text-center">
                            {optionsCount} {optionsCount === 1 ? 'option' : 'options'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
