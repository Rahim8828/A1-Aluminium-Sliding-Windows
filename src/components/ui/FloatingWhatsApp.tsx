'use client';

import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

export function FloatingWhatsApp() {
  const phoneNumber = '919876543210'; // Replace with actual number
  const defaultMessage = 'Hi! I would like to know more about your services.';
  const [showTooltip, setShowTooltip] = useState(false);

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* Mobile Tooltip */}
      {showTooltip && (
        <div className="fixed bottom-32 right-4 md:hidden z-40 bg-gray-900 text-white text-sm px-4 py-3 rounded-2xl shadow-2xl animate-fadeIn max-w-[200px]">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1"
            aria-label="Close tooltip"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="font-medium">💬 Chat with us!</p>
          <p className="text-xs text-gray-300 mt-1">Quick response guaranteed</p>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setShowTooltip(true)}
        className="fixed bottom-24 right-4 md:bottom-8 md:right-8 z-50 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 active:bg-green-800 text-white rounded-full p-4 md:p-5 shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group touch-manipulation"
        aria-label="Chat on WhatsApp"
        style={{ 
          WebkitTapHighlightColor: 'transparent',
          minWidth: '64px',
          minHeight: '64px'
        }}
      >
        <MessageCircle className="w-8 h-8 md:w-9 md:h-9" strokeWidth={2.5} />
        
        {/* Pulse Effect - Multiple Rings */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75 pointer-events-none" />
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-50 pointer-events-none" style={{ animationDelay: '0.5s' }} />
        
        {/* Online Indicator */}
        <span className="absolute top-1 right-1 w-4 h-4 bg-green-400 border-2 border-white rounded-full animate-pulse" />
        
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
