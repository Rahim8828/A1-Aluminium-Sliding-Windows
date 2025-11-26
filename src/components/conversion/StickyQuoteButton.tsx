'use client';

import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import { trackCTAClick, trackPhoneClick } from '@/lib/analytics';

export function StickyQuoteButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    trackCTAClick('Get Quote', 'Sticky Button', 'Phone Call');
    trackPhoneClick(BUSINESS_INFO.phone.primary, 'Sticky Button');
    window.location.href = `tel:${BUSINESS_INFO.phone.primary}`;
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed top-20 right-4 z-40 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0 pointer-events-none'
      }`}
      aria-label="Get free quote"
      type="button"
    >
      <Phone className="w-5 h-5" />
      <span className="hidden sm:inline">Get Free Quote</span>
      <span className="sm:hidden">Quote</span>
    </button>
  );
}
