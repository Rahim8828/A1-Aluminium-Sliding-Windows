'use client';

import { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import Link from 'next/link';

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

  if (!isVisible) return null;

  return (
    <div className="fixed top-20 left-0 right-0 z-40 px-4 animate-slideDown">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-full shadow-2xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 animate-pulse" />
            <span className="text-sm md:text-base font-semibold">
              Get Free Quote in 24 Hours
            </span>
          </div>
          <Link
            href="/contact"
            className="bg-white text-orange-600 px-4 md:px-6 py-2 rounded-full font-bold text-sm md:text-base hover:bg-orange-50 transition-all hover:scale-105 min-h-[40px] flex items-center touch-manipulation"
          >
            Contact Now
          </Link>
        </div>
      </div>
    </div>
  );
}
