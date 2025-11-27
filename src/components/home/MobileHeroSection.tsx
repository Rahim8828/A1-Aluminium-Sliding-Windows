'use client';

import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import Image from 'next/image';
import { services } from '@/data/services';

interface MobileHeroSectionProps {
  onServiceClick?: (serviceId: string) => void;
}

export function MobileHeroSection({ onServiceClick }: MobileHeroSectionProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showResults, setShowResults] = useState(false);

  // Search functionality
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    return services.filter(service => 
      service.title.toLowerCase().includes(query) ||
      service.shortDescription.toLowerCase().includes(query) ||
      service.category.toLowerCase().includes(query)
    ).slice(0, 5); // Limit to 5 results
  }, [searchQuery]);

  // Categories for browse section
  const categories = [
    {
      name: 'Aluminium',
      slug: 'aluminium',
      image: '/aluminium-category/Showroom-front.webp',
      count: services.filter(s => s.category === 'aluminium').length,
    },
    {
      name: 'Glass',
      slug: 'glass',
      image: '/glass-category/Full-glass-partitions.webp',
      count: services.filter(s => s.category === 'glass').length,
    },
    {
      name: 'Netting',
      slug: 'netting',
      image: '/netting-category/Pigeon-netting.webp',
      count: services.filter(s => s.category === 'netting').length,
    },
  ];

  const handleSearchFocus = () => {
    setShowResults(true);
  };

  const handleSearchBlur = () => {
    // Delay to allow click on results
    setTimeout(() => setShowResults(false), 200);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setShowResults(false);
  };

  return (
    <div className="bg-gradient-to-br from-orange-600 via-orange-500 to-orange-700 text-white">
      {/* Main Content */}
      <div className="px-4 py-6 md:py-12 max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
          Home Services at Your Doorstep
        </h1>
        <p className="text-orange-100 text-sm md:text-lg mb-4 md:mb-8">
          Aluminium • Glass • Safety Netting
        </p>

        {/* Search Bar */}
        <div className="relative mb-4 md:mb-8 max-w-2xl">
          <Search className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 w-5 h-5 md:w-6 md:h-6 text-gray-400" />
          <input
            type="text"
            placeholder="Search for services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
            className="w-full pl-11 md:pl-14 pr-10 md:pr-12 py-3 md:py-4 rounded-lg text-sm md:text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
          {searchQuery && (
            <button
              onClick={clearSearch}
              className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          )}

          {/* Search Results Dropdown */}
          {showResults && searchQuery && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-xl max-h-80 overflow-y-auto z-50">
              {searchResults.length > 0 ? (
                <div className="py-2">
                  {searchResults.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        onServiceClick?.(service.id);
                        clearSearch();
                      }}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
                    >
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                        <Image
                          src={service.images[0]}
                          alt={service.title}
                          fill
                          className="object-contain p-1"
                          sizes="48px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900 truncate">
                          {service.title}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {service.shortDescription}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              ) : (
                <div className="px-4 py-8 text-center text-gray-500">
                  <p className="text-sm">No services found</p>
                  <p className="text-xs mt-1">Try searching for windows, doors, glass, or netting</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Browse by Category */}
        <div>
          <h2 className="text-sm md:text-lg font-semibold mb-3 md:mb-6 flex items-center gap-2">
            <span>🏷️</span>
            Browse by Category
          </h2>
          
          <div className="flex gap-3 md:gap-6 overflow-x-auto md:justify-start scrollbar-hide overscroll-x-contain touch-pan-x -mx-4 px-4 pb-1">
            {categories.map((category) => (
              <a
                key={category.slug}
                href={`/services?category=${category.slug}`}
                className="flex-shrink-0 w-28 md:w-40 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-3 md:p-4 hover:bg-white/20 transition-all active:scale-95"
              >
                <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-2 bg-white/20">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 112px, 160px"
                    priority={true}
                    unoptimized={true}
                  />
                </div>
                <div className="text-center">
                  <p className="text-xs md:text-sm font-bold truncate">{category.name}</p>
                  <p className="text-[10px] md:text-xs text-orange-100">
                    {category.count} services
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
