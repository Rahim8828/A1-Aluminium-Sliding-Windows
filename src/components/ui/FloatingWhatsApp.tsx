'use client';

import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  const phoneNumber = '918828663585';
  const defaultMessage = 'Hi! I would like to know more about your services.';

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* WhatsApp Button - Aligned with Activity Feed */}
      <button
        onClick={handleWhatsAppClick}
        className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-50 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 active:bg-green-800 text-white rounded-full p-3 md:p-5 shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group touch-manipulation"
        aria-label="Chat on WhatsApp"
        style={{ 
          WebkitTapHighlightColor: 'transparent',
          minWidth: '52px',
          minHeight: '52px'
        }}
      >
        <MessageCircle className="w-6 h-6 md:w-9 md:h-9" strokeWidth={2.5} />
        
        {/* Pulse Effect */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75 pointer-events-none" />
        
        {/* Online Indicator */}
        <span className="absolute top-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full animate-pulse" />
        
        {/* Desktop Tooltip */}
        <span className="hidden md:block absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-sm px-4 py-3 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl pointer-events-none">
          <span className="font-semibold">💬 Chat with us on WhatsApp</span>
          <br />
          <span className="text-xs text-gray-300">Quick response • Available 24/7</span>
        </span>
      </button>
    </>
  );
}
