'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { MobileHeroSection } from '../components/home/MobileHeroSection';
import { MobileServicesGrid } from '../components/home/MobileServicesGrid';
import { MobileTrustSection } from '../components/home/MobileTrustSection';
import { MobileBottomCTA } from '../components/home/MobileBottomCTA';
import ServiceDetailModal from '@/components/services/ServiceDetailModal';
import { services } from '@/data/services';
import { useCart } from '@/contexts/CartContext';

// Dynamic imports for below-the-fold components
const WhyChooseUsWithStats = dynamic(() => import('../components/home/WhyChooseUsWithStats').then(mod => ({ default: mod.WhyChooseUsWithStats })), {
  loading: () => <div className="h-96 animate-pulse bg-orange-600" />,
});

const ProjectsGallery = dynamic(() => import('../components/home/ProjectsGallery').then(mod => ({ default: mod.ProjectsGallery })), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});

const Testimonials = dynamic(() => import('../components/home/Testimonials').then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});

const FAQSection = dynamic(() => import('../components/home/FAQSection').then(mod => ({ default: mod.FAQSection })), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});

const PriceCalculator = dynamic(() => import('../components/home/PriceCalculator').then(mod => ({ default: mod.PriceCalculator })), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />,
});

const FinalCTA = dynamic(() => import('../components/home/FinalCTA').then(mod => ({ default: mod.FinalCTA })), {
  loading: () => <div className="h-64 animate-pulse bg-gray-100" />,
});

export default function HomePageClient() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  const [addedItemName, setAddedItemName] = useState('');
  const { addItem } = useCart();

  const selectedService = selectedServiceId 
    ? services.find(s => s.id === selectedServiceId) 
    : null;

  const handleServiceClick = (serviceId: string) => {
    setSelectedServiceId(serviceId);
  };

  const handleCloseModal = () => {
    setSelectedServiceId(null);
  };

  const handleAddToCart = (serviceId: string, optionId: string, quantity: number) => {
    const service = services.find(s => s.id === serviceId);
    if (!service) return;

    const option = service.options.find(opt => opt.id === optionId);
    if (!option) return;

    addItem({
      serviceId: service.id,
      serviceName: service.title,
      optionId: optionId,
      optionName: option.name,
      price: option.price,
      quantity,
      image: option.image || service.images[0] || '',
    });

    setAddedItemName(option.name);
    setShowSuccessToast(true);
    setTimeout(() => setShowSuccessToast(false), 3000);
    handleCloseModal();
  };

  return (
    <>
      <div className="min-h-screen pb-24 md:pb-0">
        {/* Hero Section - Same for Mobile & Desktop */}
        <MobileHeroSection onServiceClick={handleServiceClick} />

        {/* Popular Services Grid - Same for Mobile & Desktop */}
        <MobileServicesGrid onServiceClick={handleServiceClick} />

        {/* Trust Section */}
        <MobileTrustSection />

        {/* Why Choose Us with Stats */}
        <WhyChooseUsWithStats />

        {/* Recent Projects Gallery */}
        <ProjectsGallery />

        {/* Price Calculator */}
        <PriceCalculator />

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQSection />

        {/* Final CTA Section */}
        <FinalCTA />

        {/* Mobile Bottom Sticky CTA - Removed as it conflicts with MobileNav */}
        {/* MobileBottomCTA was causing overlap with bottom navigation */}
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          isOpen={!!selectedServiceId}
          onClose={handleCloseModal}
          onAddToCart={handleAddToCart}
        />
      )}

      {/* Success Toast */}
      {showSuccessToast && (
        <div className="fixed bottom-[140px] md:bottom-8 left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 z-[65] animate-fade-in">
          <div className="bg-green-600 text-white px-4 py-3 md:px-6 md:py-4 rounded-xl shadow-2xl flex items-center gap-3 max-w-md mx-auto">
            <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-sm mb-0.5">Added to Cart!</p>
              <p className="text-xs text-green-100 truncate">{addedItemName}</p>
            </div>
            <button
              onClick={() => window.location.href = '/cart'}
              className="flex-shrink-0 px-3 py-1.5 bg-white text-green-600 rounded-lg text-xs font-semibold hover:bg-green-50 active:bg-green-100 transition-colors touch-manipulation"
            >
              View Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
}
