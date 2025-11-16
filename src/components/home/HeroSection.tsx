'use client';

import Image from 'next/image';
import { Phone, MessageCircle } from 'lucide-react';
import Button from '@/components/ui/Button';
import { BUSINESS_INFO } from '@/lib/constants';
import { trackCTAClick, trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  backgroundImage?: string;
}

export function HeroSection({
  headline = 'Premium Aluminium, Glass & Netting Solutions in Mumbai',
  subheadline = 'Transform your space with expert fabrication and installation services. Trusted by thousands of customers across Mumbai for over 15 years.',
  backgroundImage,
}: HeroSectionProps) {
  const handleCallClick = () => {
    trackCTAClick('Call Now', 'Hero Section', 'Phone Call');
    trackPhoneClick(BUSINESS_INFO.phone.primary, 'Hero Section');
    window.location.href = `tel:${BUSINESS_INFO.phone.primary}`;
  };

  const handleWhatsAppClick = () => {
    trackCTAClick('WhatsApp Us', 'Hero Section', 'WhatsApp');
    trackWhatsAppClick('Hero Section');
    const message = encodeURIComponent('Hi, I would like to know more about your services.');
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        {backgroundImage ? (
          <>
            <Image
              src={backgroundImage}
              alt="A1 Aluminium, Glass & Netting Solutions - Professional services in Mumbai"
              fill
              priority
              className="object-cover"
              quality={85}
              sizes="100vw"
            />
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-blue-800 to-orange-950" />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-4xl">
          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {headline}
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 md:mb-10 max-w-3xl leading-relaxed">
            {subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="primary"
              size="lg"
              onClick={handleCallClick}
              className="group"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Call Now
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={handleWhatsAppClick}
              className="group"
            >
              <MessageCircle className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              WhatsApp Us
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap gap-6 md:gap-8 text-white">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm md:text-base">Available 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm md:text-base">Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm md:text-base">Same Day Service</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
    </section>
  );
}
