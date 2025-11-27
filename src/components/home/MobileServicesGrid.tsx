'use client';

import { MobileServiceCard } from './MobileServiceCard';

interface MobileServicesGridProps {
  onServiceClick?: (serviceId: string) => void;
}

export function MobileServicesGrid({ onServiceClick }: MobileServicesGridProps) {
  const popularServices = [
    {
      title: 'Aluminium Sliding Windows',
      image: '/aluminium-category/2-Track-sliding-Window.webp',
      rating: 4.8,
      reviews: 1250,
      startingPrice: '₹350/sqft',
      duration: '2-3 days',
      serviceId: 'aluminium-windows',
      category: 'aluminium',
    },
    {
      title: 'Glass Partitions',
      image: '/glass-category/Full-glass-partitions.webp',
      rating: 4.7,
      reviews: 890,
      startingPrice: '₹450/sqft',
      duration: '3-4 days',
      serviceId: 'glass-partitions',
      category: 'glass',
    },
    {
      title: 'Safety Netting',
      image: '/netting-category/Pigeon-netting.webp',
      rating: 4.9,
      reviews: 1500,
      startingPrice: '₹25/sqft',
      duration: '1 day',
      serviceId: 'safety-netting',
      category: 'netting',
    },
    {
      title: 'Aluminium Doors',
      image: '/aluminium-category/Single-sliding-door.webp',
      rating: 4.7,
      reviews: 680,
      startingPrice: '₹8,000',
      duration: '2-3 days',
      serviceId: 'aluminium-doors',
      category: 'aluminium',
    },
    {
      title: 'Mosquito Netting',
      image: '/netting-category/Sliding-Frame-Mosquito-Net.webp',
      rating: 4.8,
      reviews: 1800,
      startingPrice: '₹30/sqft',
      duration: '1 day',
      serviceId: 'mosquito-netting',
      category: 'netting',
    },
    {
      title: 'Office Partitions',
      image: '/aluminium-category/Office-Cabin-Sliding.webp',
      rating: 4.6,
      reviews: 520,
      startingPrice: '₹380/sqft',
      duration: '3-4 days',
      serviceId: 'aluminium-partitions',
      category: 'aluminium',
    },
  ];

  return (
    <div className="bg-gray-50 py-6 md:py-12">
      <div className="px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-4 md:mb-8">
          <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900">
            Popular Services
          </h2>
          <a
            href="/services"
            className="text-sm md:text-base text-orange-600 font-medium hover:text-orange-700"
          >
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {popularServices.map((service, index) => (
            <MobileServiceCard key={index} {...service} onServiceClick={onServiceClick} />
          ))}
        </div>
      </div>
    </div>
  );
}
