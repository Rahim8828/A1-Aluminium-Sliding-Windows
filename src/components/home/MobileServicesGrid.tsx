'use client';

import { MobileServiceCard } from './MobileServiceCard';

export function MobileServicesGrid() {
  const popularServices = [
    {
      title: 'Aluminium Sliding Windows',
      image: '/aluminium-category/2-Track-sliding-Window.webp',
      rating: 4.8,
      reviews: 1250,
      startingPrice: '₹350/sqft',
      duration: '2-3 days',
      href: '/services/aluminium',
    },
    {
      title: 'Glass Partitions',
      image: '/glass-category/Full glass partitions.webp',
      rating: 4.7,
      reviews: 890,
      startingPrice: '₹450/sqft',
      duration: '3-4 days',
      href: '/services/glass',
    },
    {
      title: 'Safety Netting',
      image: '/netting-category/Pigeon netting.webp',
      rating: 4.9,
      reviews: 1500,
      startingPrice: '₹25/sqft',
      duration: '1 day',
      href: '/services/netting',
    },
    {
      title: 'Aluminium Doors',
      image: '/aluminium-category/Hinged door.webp',
      rating: 4.7,
      reviews: 680,
      startingPrice: '₹8,000',
      duration: '2-3 days',
      href: '/services/aluminium',
    },
    {
      title: 'Mosquito Netting',
      image: '/netting-category/Window mosquito net.webp',
      rating: 4.8,
      reviews: 1800,
      startingPrice: '₹30/sqft',
      duration: '1 day',
      href: '/services/netting',
    },
    {
      title: 'Office Partitions',
      image: '/aluminium-category/Office-Cabin-Sliding.webp',
      rating: 4.6,
      reviews: 520,
      startingPrice: '₹380/sqft',
      duration: '3-4 days',
      href: '/services/aluminium',
    },
  ];

  return (
    <div className="lg:hidden bg-gray-50 py-4">
      <div className="px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900">
            Popular Services
          </h2>
          <a
            href="/services"
            className="text-sm text-orange-600 font-medium hover:text-orange-700"
          >
            View All
          </a>
        </div>

        <div className="space-y-3">
          {popularServices.map((service, index) => (
            <MobileServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
}
