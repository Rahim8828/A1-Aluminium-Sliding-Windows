'use client';

import { Clock, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export function UrgencyBanner() {
  const [slotsLeft, setSlotsLeft] = useState(3);
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  // Check if dismissed on mount
  useEffect(() => {
    const checkDismissed = () => {
      setIsMounted(true);
      const dismissed = sessionStorage.getItem('urgencyBannerDismissed');
      if (dismissed) {
        setIsVisible(false);
      }
    };
    
    checkDismissed();
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    // Simulate slot countdown (optional)
    const interval = setInterval(() => {
      setSlotsLeft((prev) => (prev > 1 ? prev - 1 : 3));
    }, 300000); // Every 5 minutes

    return () => clearInterval(interval);
  }, [isMounted]);

  const handleDismiss = () => {
    setIsVisible(false);
    sessionStorage.setItem('urgencyBannerDismissed', 'true');
    // Adjust header position when banner is dismissed
    document.documentElement.style.setProperty('--banner-height', '0px');
  };

  useEffect(() => {
    if (isMounted && isVisible) {
      document.documentElement.style.setProperty('--banner-height', '48px');
    }
  }, [isVisible, isMounted]);

  // Don't render on server or if not visible
  if (!isMounted || !isVisible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 px-4 overflow-hidden shadow-lg">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
      
      <div className="container mx-auto relative z-10">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="flex items-center gap-2 md:gap-3">
            <Zap className="w-5 h-5 md:w-6 md:h-6 animate-pulse" />
            <span className="text-sm md:text-base font-bold">
              Limited Offer: Only {slotsLeft} Booking Slots Left This Week!
            </span>
          </div>
          <div className="flex items-center gap-2 text-xs md:text-sm">
            <Clock className="w-4 h-4" />
            <span>Book Now & Save 10%</span>
          </div>
          <button
            onClick={handleDismiss}
            className="text-white/80 hover:text-white ml-auto md:ml-0 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close banner"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
