'use client';

import { useState } from 'react';
import { Search, Phone, MessageCircle, MapPin } from 'lucide-react';
import Link from 'next/link';

export function MobileHeroSection() {
  const [searchQuery, setSearchQuery] = useState('');

  const quickServices = [
    { name: 'Windows', href: '/services/aluminium', icon: '🪟' },
    { name: 'Doors', href: '/services/aluminium', icon: '🚪' },
    { name: 'Glass', href: '/services/glass', icon: '🪟' },
    { name: 'Netting', href: '/services/netting', icon: '🕸️' },
  ];

  return (
    <div className="lg:hidden bg-gradient-to-br from-orange-500 to-orange-600 text-white">
      {/* Top Bar with Location & Contact */}
      <div className="px-4 py-3 flex items-center justify-between border-b border-orange-400/30">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-medium">Mumbai</span>
        </div>
        <div className="flex gap-2">
          <a
            href="tel:+919876543210"
            className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
            aria-label="Call us"
          >
            <Phone className="w-4 h-4" />
          </a>
          <a
            href="https://wa.me/919876543210"
            className="p-2 bg-green-500 rounded-full hover:bg-green-600 transition-colors"
            aria-label="WhatsApp us"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 py-6">
        <h1 className="text-2xl font-bold mb-2">
          Home Services at Your Doorstep
        </h1>
        <p className="text-orange-100 text-sm mb-4">
          Aluminium • Glass • Safety Netting
        </p>

        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
        </div>

        {/* Quick Service Buttons */}
        <div className="grid grid-cols-4 gap-2">
          {quickServices.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center hover:bg-white/20 transition-colors"
            >
              <div className="text-2xl mb-1">{service.icon}</div>
              <div className="text-xs font-medium">{service.name}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="px-4 pb-4 flex items-center justify-around text-center">
        <div>
          <div className="text-xl font-bold">15+</div>
          <div className="text-xs text-orange-100">Years</div>
        </div>
        <div className="w-px h-8 bg-orange-400/30" />
        <div>
          <div className="text-xl font-bold">5000+</div>
          <div className="text-xs text-orange-100">Projects</div>
        </div>
        <div className="w-px h-8 bg-orange-400/30" />
        <div>
          <div className="text-xl font-bold">4.8★</div>
          <div className="text-xs text-orange-100">Rating</div>
        </div>
      </div>
    </div>
  );
}
