'use client';

import { Phone, MessageCircle, Mail } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import { trackCTAClick, trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';

export function FinalCTA() {
  const handleCallClick = () => {
    trackCTAClick('Call Now', 'Final CTA', 'Phone Call');
    trackPhoneClick(BUSINESS_INFO.phone.primary, 'Final CTA');
    window.location.href = `tel:${BUSINESS_INFO.phone.primary}`;
  };

  const handleWhatsAppClick = () => {
    trackCTAClick('WhatsApp Us', 'Final CTA', 'WhatsApp');
    trackWhatsAppClick('Final CTA');
    const message = encodeURIComponent('Hi, I would like to get a quote for your services.');
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section className="relative pt-6 pb-0 md:py-10 lg:py-12 overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-lg md:text-2xl lg:text-2xl font-bold text-white mb-2 md:mb-3">
            Ready to Transform Your Space?
          </h2>
          
          {/* Subheadling */}
          <p className="text-xs md:text-sm text-gray-300 mb-4 md:mb-6 max-w-xl mx-auto">
            Get expert consultation and a free quote for your project. Our team is ready to help.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center mb-4 md:mb-6">
            <button
              onClick={handleCallClick}
              className="group inline-flex items-center justify-center px-5 md:px-6 py-2.5 md:py-3 bg-orange-600 text-white text-xs md:text-sm font-semibold rounded-lg hover:bg-orange-700 transition-all hover:shadow-lg min-h-[40px] touch-manipulation"
            >
              <Phone className="w-4 h-4 mr-2 group-hover:animate-pulse" />
              Call Now
            </button>
            
            <button
              onClick={handleWhatsAppClick}
              className="group inline-flex items-center justify-center px-5 md:px-6 py-2.5 md:py-3 bg-green-600 text-white text-xs md:text-sm font-semibold rounded-lg hover:bg-green-700 transition-all hover:shadow-lg min-h-[40px] touch-manipulation"
            >
              <MessageCircle className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              WhatsApp Us
            </button>
            
            <a
              href="/contact"
              className="group inline-flex items-center justify-center px-5 md:px-6 py-2.5 md:py-3 bg-white text-gray-900 text-xs md:text-sm font-semibold rounded-lg hover:bg-gray-100 transition-all hover:shadow-lg min-h-[40px] touch-manipulation"
            >
              <Mail className="w-4 h-4 mr-2" />
              Contact Form
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-6 text-white/90 mb-4 md:mb-5">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-[10px] md:text-xs">Free Consultation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-[10px] md:text-xs">Quick Response</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              <span className="text-[10px] md:text-xs">No Obligation</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="pt-3 md:pt-4 border-t border-white/20">
            <p className="text-[10px] md:text-xs text-gray-400 mb-1.5 md:mb-2">Or reach us directly at</p>
            <div className="flex flex-col sm:flex-row gap-1.5 md:gap-3 justify-center items-center text-white text-[10px] md:text-xs">
              <a
                href={`tel:${BUSINESS_INFO.phone.primary}`}
                className="hover:text-orange-400 transition-colors font-medium"
              >
                📞 {BUSINESS_INFO.phone.display}
              </a>
              <span className="hidden sm:inline text-gray-600">|</span>
              <a
                href={`mailto:${BUSINESS_INFO.email.primary}`}
                className="hover:text-orange-400 transition-colors font-medium break-all"
              >
                ✉️ {BUSINESS_INFO.email.primary}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
