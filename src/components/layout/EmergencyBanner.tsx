'use client';

import { useState, useEffect } from 'react';
import { Phone, X } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import { trackPhoneClick, trackCTAClick } from '@/lib/analytics';

interface EmergencyBannerProps {
  message?: string;
  phoneNumber?: string;
  dismissible?: boolean;
}

export default function EmergencyBanner({
  message = '24/7 Emergency Service Available',
  phoneNumber = BUSINESS_INFO.phone.primary,
  dismissible = true,
}: EmergencyBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const isDismissed = sessionStorage.getItem('emergencyBannerDismissed');
    if (!isDismissed) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    if (dismissible) {
      sessionStorage.setItem('emergencyBannerDismissed', 'true');
    }
  };

  const handleCallClick = () => {
    trackCTAClick('Call Now', 'Emergency Banner', 'Phone Call');
    trackPhoneClick(phoneNumber, 'Emergency Banner');
  };

  if (!isVisible) return null;

  return (
    <div 
      className="bg-red-600 text-white py-2 px-4 relative animate-slideDown"
      role="banner"
      aria-label="Emergency service notification"
    >
      <div className="container mx-auto flex items-center justify-center space-x-4">
        <Phone className="w-5 h-5 animate-pulse" aria-hidden="true" />
        <span className="text-sm md:text-base font-medium">{message}</span>
        <a
          href={`tel:${phoneNumber}`}
          onClick={handleCallClick}
          className="min-h-[44px] px-4 py-1 bg-white text-red-600 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors inline-flex items-center focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
          aria-label={`Call emergency number ${phoneNumber}`}
        >
          Call Now
        </a>
        {dismissible && (
          <button
            onClick={handleDismiss}
            className="absolute right-4 top-1/2 -translate-y-1/2 min-h-[44px] min-w-[44px] p-1 hover:bg-red-700 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-red-600"
            aria-label="Dismiss emergency banner"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        )}
      </div>
    </div>
  );
}
