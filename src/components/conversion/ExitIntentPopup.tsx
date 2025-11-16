'use client';

import { useEffect, useState } from 'react';
import { X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import { trackExitIntentDisplay, trackExitIntentAction, trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';

interface ExitIntentPopupProps {
  offer?: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function ExitIntentPopup({
  offer = "Get 15% OFF on your first project!",
  ctaText = "Call Now for Free Quote",
  ctaHref = `tel:${BUSINESS_INFO.phone.primary}`
}: ExitIntentPopupProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);
  const [timeOnSite, setTimeOnSite] = useState(0);

  useEffect(() => {
    // Check if popup has been shown in this session
    const shownInSession = sessionStorage.getItem('exitIntentShown');
    if (shownInSession) {
      setHasBeenShown(true);
      return;
    }

    // Track time on site
    const timer = setInterval(() => {
      setTimeOnSite(prev => prev + 1);
    }, 1000);

    // Exit intent detection
    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse leaves from top of viewport
      if (e.clientY <= 0 && !hasBeenShown && timeOnSite >= 30) {
        setIsVisible(true);
        setHasBeenShown(true);
        sessionStorage.setItem('exitIntentShown', 'true');
        trackExitIntentDisplay();
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearInterval(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasBeenShown, timeOnSite]);

  const handleClose = () => {
    setIsVisible(false);
    trackExitIntentAction('close');
  };

  const handleCallCTA = () => {
    trackExitIntentAction('call');
    trackPhoneClick(BUSINESS_INFO.phone.primary, 'Exit Intent Popup');
  };

  const handleWhatsAppCTA = () => {
    trackExitIntentAction('whatsapp');
    trackWhatsAppClick('Exit Intent Popup');
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-50 animate-fade-in"
        onClick={handleClose}
        aria-hidden="true"
      />
      
      {/* Popup Modal */}
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
        role="dialog"
        aria-modal="true"
        aria-labelledby="exit-intent-title"
        aria-describedby="exit-intent-description"
      >
        <div 
          className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 relative pointer-events-auto animate-scale-in"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 min-h-[44px] min-w-[44px] flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 rounded"
            aria-label="Close special offer popup"
          >
            <X className="w-6 h-6" aria-hidden="true" />
          </button>

          {/* Content */}
          <div className="text-center">
            <div className="mb-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4" aria-hidden="true">
                <Phone className="w-8 h-8 text-orange-600" />
              </div>
            </div>

            <h2 id="exit-intent-title" className="text-2xl font-bold text-gray-900 mb-3">
              Wait! Don&apos;t Miss Out
            </h2>
            
            <p className="text-lg text-orange-600 font-semibold mb-4">
              {offer}
            </p>

            <p id="exit-intent-description" className="text-gray-600 mb-6">
              Contact us now and get a free consultation for your project. 
              Our experts are ready to help you with premium aluminium, glass, 
              and netting solutions.
            </p>

            {/* CTA Button */}
            <a
              href={ctaHref}
              onClick={handleCallCTA}
              className="inline-flex items-center justify-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors w-full mb-3 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2"
              aria-label={`${ctaText} at ${BUSINESS_INFO.phone.display}`}
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {ctaText}
            </a>

            {/* Secondary CTA */}
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppCTA}
              className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors w-full focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
              aria-label="Contact us on WhatsApp"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp Us
            </a>

            <button
              onClick={handleClose}
              className="min-h-[44px] text-sm text-gray-500 hover:text-gray-700 mt-4 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded px-4"
              aria-label="Close popup and continue browsing"
            >
              No thanks, I&apos;ll browse more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
