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
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
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

      {/* Content - Compact */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3 md:mb-4 leading-tight">
            {headline}
          </h1>

          {/* Subheadline */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-200 mb-5 md:mb-8 max-w-2xl leading-relaxed">
            {subheadline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="primary"
              size="lg"
              onClick={handleCallClick}
              className="group text-sm md:text-base"
            >
              <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:animate-pulse" />
              Call Now
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={handleWhatsAppClick}
              className="group text-sm md:text-base"
            >
              <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2 group-hover:scale-110 transition-transform" />
              WhatsApp Us
            </Button>
          </div>

          {/* Social Proof Stats - Compact */}
          <div className="mt-6 md:mt-8 flex flex-wrap gap-4 md:gap-6 text-white">
            <div className="flex items-center gap-1.5">
              <span className="text-base md:text-lg">⭐</span>
              <div>
                <div className="font-bold text-sm md:text-base">4.9/5</div>
                <div className="text-[10px] md:text-xs text-gray-300">2,500+ Reviews</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-base md:text-lg">✓</span>
              <div>
                <div className="font-bold text-lg">15+ Years</div>
                <div className="text-xs text-gray-300">Experience</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">📍</span>
              <div>
                <div className="font-bold text-lg">25+ Areas</div>
                <div className="text-xs text-gray-300">Across Mumbai</div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-6 flex flex-wrap gap-6 md:gap-8 text-white">
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
