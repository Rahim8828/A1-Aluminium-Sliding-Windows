'use client';

import { useState } from 'react';
import { Phone, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import { trackCTAClick, trackWhatsAppClick } from '@/lib/analytics';

export function QuickQuoteForm() {
  const [formData, setFormData] = useState({
    service: '',
    area: '',
    phone: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track form submission
    trackCTAClick('Quick Quote Form', 'Hero Section', 'WhatsApp');
    trackWhatsAppClick('Quick Quote Form');

    // Format WhatsApp message
    const message = `Hi! I need a quote for:\n\nService: ${formData.service || 'Not specified'}\nArea: ${formData.area || 'Not specified'} sq ft\nPhone: ${formData.phone}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Reset form
    setFormData({ service: '', area: '', phone: '' });
  };

  return (
    <div className="bg-white rounded-lg shadow-xl p-6 max-w-md">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Get Instant Quote</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
            Select Service
          </label>
          <select
            id="service"
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            required
          >
            <option value="">Choose a service...</option>
            <option value="Aluminium Windows">Aluminium Windows</option>
            <option value="Aluminium Doors">Aluminium Doors</option>
            <option value="Glass Partition">Glass Partition</option>
            <option value="Glass Railing">Glass Railing</option>
            <option value="Bird Netting">Bird Netting</option>
            <option value="Safety Netting">Safety Netting</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">
            Area (sq ft) - Optional
          </label>
          <input
            type="number"
            id="area"
            value={formData.area}
            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
            placeholder="e.g., 100"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            min="1"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="Your phone number"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            required
            pattern="[0-9]{10}"
            title="Please enter a valid 10-digit phone number"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 group"
        >
          <Phone className="w-5 h-5" />
          Get Quote via WhatsApp
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>

      <p className="text-xs text-gray-500 mt-3 text-center">
        Free consultation • No obligation • Quick response
      </p>
    </div>
  );
}
