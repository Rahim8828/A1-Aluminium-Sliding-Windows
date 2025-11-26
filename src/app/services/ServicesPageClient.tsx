'use client';

/**
 * Services Page Client Component
 * Displays services in a grid layout with modal for service details
 * Integrates with cart context for adding items
 */

import React, { useState } from 'react';
import { Service, CartItem } from '@/types';
import ServiceGrid from '@/components/services/ServiceGrid';
import ServiceCategoryGrid from '@/components/services/ServiceCategoryGrid';
import ServiceDetailModal from '@/components/services/ServiceDetailModal';
import { Phone } from 'lucide-react';
import Button from '@/components/ui/Button';
import { BUSINESS_INFO } from '@/lib/constants';
import { useCart } from '@/contexts/CartContext';
import { event as trackEvent } from '@/lib/analytics';

interface ServicesPageClientProps {
  aluminiumServices: Service[];
  glassServices: Service[];
  nettingServices: Service[];
}

type CategoryFilter = 'all' | 'aluminium' | 'glass' | 'netting';
type SortOption = 'popular' | 'price-low' | 'price-high' | 'rating';

export default function ServicesPageClient({
  aluminiumServices,
  glassServices,
  nettingServices,
}: ServicesPageClientProps) {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [searchQuery] = useState('');
  const [sortBy] = useState<SortOption>('popular');
  const { addItem } = useCart();

  // Combine all services
  const allServices = [...aluminiumServices, ...glassServices, ...nettingServices];

  // Get filtered and sorted services
  const getFilteredServices = (): Service[] => {
    let filtered: Service[] = [];

    // Filter by category
    switch (categoryFilter) {
      case 'aluminium':
        filtered = aluminiumServices;
        break;
      case 'glass':
        filtered = glassServices;
        break;
      case 'netting':
        filtered = nettingServices;
        break;
      default:
        filtered = allServices;
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (service) =>
          service.title.toLowerCase().includes(query) ||
          service.shortDescription.toLowerCase().includes(query) ||
          service.category.toLowerCase().includes(query)
      );
    }

    // Sort services
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.reviewCount - a.reviewCount;
        case 'rating':
          return b.rating - a.rating;
        case 'price-low':
          const aMinPrice = Math.min(...a.options.map((o) => o.price));
          const bMinPrice = Math.min(...b.options.map((o) => o.price));
          return aMinPrice - bMinPrice;
        case 'price-high':
          const aMaxPrice = Math.max(...a.options.map((o) => o.price));
          const bMaxPrice = Math.max(...b.options.map((o) => o.price));
          return bMaxPrice - aMaxPrice;
        default:
          return 0;
      }
    });

    return sorted;
  };

  const filteredServices = getFilteredServices();

  // Find selected service
  const selectedService = selectedServiceId
    ? allServices.find((s) => s.id === selectedServiceId)
    : null;

  // Handle service click - open modal
  const handleServiceClick = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    
    // Track service view
    const service = allServices.find((s) => s.id === serviceId);
    if (service) {
      trackEvent({
        action: 'view_service',
        category: 'services',
        label: service.title,
      });
    }
  };

  // Handle modal close
  const handleCloseModal = () => {
    setSelectedServiceId(null);
  };

  // Handle add to cart from modal
  const handleAddToCart = (serviceId: string, optionId: string, quantity: number) => {
    const service = allServices.find((s) => s.id === serviceId);
    const option = service?.options.find((o) => o.id === optionId);

    if (!service || !option) return;

    const cartItem: CartItem = {
      serviceId: service.id,
      serviceName: service.title,
      optionId: option.id,
      optionName: option.name,
      price: option.price,
      quantity,
      image: option.image || service.images[0] || '/website-images/placeholder-service.jpg',
    };

    addItem(cartItem);

    // Track add to cart event
    trackEvent({
      action: 'add_to_cart',
      category: 'ecommerce',
      label: `${service.title} - ${option.name}`,
      value: option.price * quantity,
    });
  };

  // Handle category filter change
  const handleCategoryChange = (category: CategoryFilter) => {
    setCategoryFilter(category);
    
    // Track filter event
    trackEvent({
      action: 'filter_services',
      category: 'services',
      label: category,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Services Grid Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          {/* Service Category Grid - Top Overview */}
          <ServiceCategoryGrid
            services={allServices}
            onCategoryClick={(category) => handleCategoryChange(category as CategoryFilter)}
          />

          {/* Service Grid */}
          <ServiceGrid
            services={filteredServices}
            onServiceClick={handleServiceClick}
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-orange-600 to-orange-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white px-4">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xs md:text-sm lg:text-base text-orange-100 mb-4 md:mb-6">
              Add services to your cart and book via WhatsApp. Our experts are ready to help you choose the perfect solution.
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
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
              Serving All of Mumbai
            </h2>
            <p className="text-xs md:text-sm text-gray-600 mb-4 md:mb-6">
              We provide our services across Mumbai and surrounding areas
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:gap-3">
              {BUSINESS_INFO.serviceAreas.map((area) => (
                <span
                  key={area}
                  className="px-3 py-1.5 md:px-4 md:py-2 bg-orange-50 text-orange-700 rounded-full text-xs md:text-sm font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          isOpen={!!selectedService}
          onClose={handleCloseModal}
          onAddToCart={handleAddToCart}
        />
      )}
    </div>
  );
}
