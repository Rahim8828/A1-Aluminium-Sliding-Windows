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
      <div className="min-h-screen">
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

        {/* Mobile Bottom Sticky CTA - Only on Mobile */}
        <div className="lg:hidden">
          <MobileBottomCTA />
        </div>
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
        <div className="fixed bottom-24 lg:bottom-8 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fade-in">
          ✓ {addedItemName} added to cart
        </div>
      )}
    </>
  );
}
