'use client';

import { MessageCircle } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import { trackWhatsAppClick } from '@/lib/analytics';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  position?: 'fixed' | 'inline';
  className?: string;
}

export default function WhatsAppButton({
  phoneNumber = BUSINESS_INFO.whatsapp,
  message = 'Hi! I would like to inquire about your services.',
  position = 'fixed',
  className = '',
}: WhatsAppButtonProps) {
  const handleClick = () => {
    // Track WhatsApp click event
    trackWhatsAppClick(position === 'fixed' ? 'Floating Button' : 'Inline Button');

    // Format WhatsApp URL with pre-filled message
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const baseClasses =
    'flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95';

  const positionClasses =
    position === 'fixed'
      ? 'fixed bottom-6 right-6 w-14 h-14 md:w-16 md:h-16 z-50'
      : 'px-6 py-3';

  return (
    <button
      onClick={handleClick}
      className={`${baseClasses} ${positionClasses} ${className}`}
      aria-label="Contact us on WhatsApp"
      type="button"
    >
      <MessageCircle className={position === 'fixed' ? 'w-6 h-6 md:w-7 md:h-7' : 'w-5 h-5'} />
      {position === 'inline' && <span>WhatsApp</span>}
    </button>
  );
}
