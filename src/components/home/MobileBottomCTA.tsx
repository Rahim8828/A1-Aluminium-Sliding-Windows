'use client';

import { Phone, MessageCircle } from 'lucide-react';

export function MobileBottomCTA() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-40 safe-area-bottom">
      <div className="px-4 py-3 flex gap-3">
        <a
          href="tel:+918828663585"
          className="flex-1 flex items-center justify-center gap-2 bg-orange-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors active:scale-95"
        >
          <Phone className="w-5 h-5" />
          <span>Call Now</span>
        </a>
        <a
          href="https://wa.me/918828663585?text=Hi, I'm interested in your services"
          className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors active:scale-95"
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}
