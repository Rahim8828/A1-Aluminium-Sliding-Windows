'use client';

/**
 * Service Category Grid Component
 * Displays all service categories in a grid at the top of services page
 * Similar to the design shown in the reference images
 */

import Image from 'next/image';
import { Service } from '@/types';

interface ServiceCategoryGridProps {
  services: Service[];
  onCategoryClick?: (category: string) => void;
}

// Get unique categories with their representative service images
const getCategories = (services: Service[]) => {
  const categoryMap = new Map<string, { name: string; images: string[]; count: number }>();
  
  services.forEach((service) => {
    const existing = categoryMap.get(service.category);
    if (existing) {
      existing.count++;
      // Add more images (up to 4 for variety)
      if (existing.images.length < 4 && service.images[0]) {
        existing.images.push(service.images[0]);
      }
    } else {
      categoryMap.set(service.category, {
        name: service.category,
        images: [service.images[0] || '/images/placeholder-service.jpg'],
        count: 1,
      });
    }
  });
  
  return Array.from(categoryMap.values()).map(cat => ({
    ...cat,
    image: cat.images[0], // Use first image as primary
  }));
};

// Format category name for display
const formatCategoryName = (category: string): string => {
  const names: Record<string, string> = {
    aluminium: 'Aluminium',
    glass: 'Glass',
    netting: 'Netting',
  };
  return names[category] || category.charAt(0).toUpperCase() + category.slice(1);
};

// Get category image path
const getCategoryImage = (category: string): string => {
  const images: Record<string, string> = {
    aluminium: '/Aluminium Category Images/Showroom front.webp',
    glass: '/Glass Category Images/Full glass partitions.webp',
    netting: '/Netting Category/Pigeon netting.webp',
  };
  return images[category] || '/images/placeholder-service.jpg';
};

export default function ServiceCategoryGrid({
  services,
  onCategoryClick,
}: ServiceCategoryGridProps) {
  const categories = getCategories(services);

  return (
    <div className="mb-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 px-1">
        <h2 className="text-base md:text-lg font-bold text-gray-900 flex items-center gap-2">
          <span className="text-xl">🏷️</span>
          Browse by Category
        </h2>
        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
          {categories.length} categories
        </span>
      </div>
      
      {/* Horizontal Scrollable Row */}
      <div className="relative">
        {/* Gradient fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
        
        {/* Scrollable container */}
        <div className="overflow-x-auto scrollbar-hide -mx-1 px-1">
          <div className="flex gap-3 pb-2">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => onCategoryClick?.(category.name)}
                className="group flex-shrink-0 w-28 md:w-32 bg-white border-2 border-gray-200 rounded-xl p-3 hover:border-orange-400 hover:shadow-lg transition-all active:scale-95 touch-manipulation"
                aria-label={`View ${formatCategoryName(category.name)} services`}
              >
                {/* Category Image - Clean without icon overlay */}
                <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-2 shadow-md bg-gray-100">
                  <Image
                    src={getCategoryImage(category.name)}
                    alt={formatCategoryName(category.name)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="128px"
                  />
                  {/* Subtle dark overlay at bottom for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                
                {/* Category Info */}
                <div className="text-center">
                  <p className="text-xs md:text-sm font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-0.5 truncate">
                    {formatCategoryName(category.name)}
                  </p>
                  <p className="text-[10px] md:text-xs text-gray-600 font-medium">
                    {category.count} {category.count === 1 ? 'service' : 'services'}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Scroll hint for mobile */}
      <div className="text-center mt-2 md:hidden">
        <p className="text-[10px] text-gray-400 flex items-center justify-center gap-1">
          <span>👈</span>
          Swipe to see more
          <span>👉</span>
        </p>
      </div>
    </div>
  );
}
