'use client';

import { useState } from 'react';
import { Calculator, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import { trackCTAClick } from '@/lib/analytics';

interface PriceRange {
  min: number;
  max: number;
}

const servicePricing: Record<string, { standard: PriceRange; premium: PriceRange }> = {
  'Aluminium Windows': {
    standard: { min: 350, max: 450 },
    premium: { min: 500, max: 650 },
  },
  'Aluminium Doors': {
    standard: { min: 400, max: 500 },
    premium: { min: 550, max: 700 },
  },
  'Sliding Doors': {
    standard: { min: 450, max: 550 },
    premium: { min: 600, max: 750 },
  },
  'Glass Partition': {
    standard: { min: 300, max: 400 },
    premium: { min: 450, max: 600 },
  },
  'Glass Railing': {
    standard: { min: 500, max: 650 },
    premium: { min: 700, max: 900 },
  },
  'Bird Netting': {
    standard: { min: 15, max: 25 },
    premium: { min: 30, max: 45 },
  },
  'Safety Netting': {
    standard: { min: 20, max: 30 },
    premium: { min: 35, max: 50 },
  },
};

export function PriceCalculator() {
  const [service, setService] = useState('');
  const [area, setArea] = useState('');
  const [quality, setQuality] = useState<'standard' | 'premium'>('standard');
  const [showEstimate, setShowEstimate] = useState(false);

  const calculatePrice = () => {
    if (!service || !area) return null;

    const pricing = servicePricing[service];
    if (!pricing) return null;

    const areaNum = parseFloat(area);
    const priceRange = pricing[quality];
    
    return {
      min: Math.round(priceRange.min * areaNum),
      max: Math.round(priceRange.max * areaNum),
    };
  };

  const handleCalculate = () => {
    if (service && area) {
      setShowEstimate(true);
      trackCTAClick('Calculate Price', 'Price Calculator', 'Estimate');
    }
  };

  const handleGetQuote = () => {
    trackCTAClick('Get Exact Quote', 'Price Calculator', 'WhatsApp');
    const estimate = calculatePrice();
    const message = `Hi! I used the price calculator and got an estimate of ₹${estimate?.min.toLocaleString('en-IN')} - ₹${estimate?.max.toLocaleString('en-IN')} for:\n\nService: ${service}\nArea: ${area} sq ft\nQuality: ${quality}\n\nI'd like to get an exact quote.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp}?text=${encodedMessage}`, '_blank');
  };

  const estimate = calculatePrice();

  return (
    <section className="py-12 md:py-24 bg-gradient-to-br from-orange-50 via-amber-50 to-blue-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Mobile Header */}
        <div className="lg:hidden mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center">
              <Calculator className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">
                Price Calculator
              </h2>
              <p className="text-xs text-gray-600">Get instant estimate</p>
            </div>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:block text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-600 to-orange-500 rounded-full mb-6 shadow-2xl animate-bounce">
            <Calculator className="w-10 h-10 text-white" />
          </div>
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-orange-100 text-orange-600 rounded-full text-sm font-semibold">
              💰 Pricing Tool
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Quick Price Estimator
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            Get an instant estimate for your project. No hidden charges, transparent pricing.
          </p>
        </div>

        <div className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl p-4 lg:p-10 border-2 border-orange-100">
          <div className="space-y-4 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-6 mb-4 lg:mb-6">
            {/* Service Selection */}
            <div>
              <label htmlFor="calc-service" className="block text-xs lg:text-sm font-semibold text-gray-700 mb-2">
                Select Service *
              </label>
              <select
                id="calc-service"
                value={service}
                onChange={(e) => {
                  setService(e.target.value);
                  setShowEstimate(false);
                }}
                className="w-full px-3 lg:px-4 py-3 text-sm lg:text-base border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
              >
                <option value="">Choose a service...</option>
                {Object.keys(servicePricing).map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Area Input */}
            <div>
              <label htmlFor="calc-area" className="block text-xs lg:text-sm font-semibold text-gray-700 mb-2">
                Area (sq ft) *
              </label>
              <input
                type="number"
                id="calc-area"
                value={area}
                onChange={(e) => {
                  setArea(e.target.value);
                  setShowEstimate(false);
                }}
                placeholder="e.g., 100"
                className="w-full px-3 lg:px-4 py-3 text-sm lg:text-base border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                min="1"
              />
            </div>
          </div>

          {/* Quality Selection */}
          <div className="mb-4 lg:mb-6">
            <label className="block text-xs lg:text-sm font-semibold text-gray-700 mb-2 lg:mb-3">
              Quality Level *
            </label>
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              <button
                type="button"
                onClick={() => {
                  setQuality('standard');
                  setShowEstimate(false);
                }}
                className={`p-3 lg:p-4 rounded-lg border-2 transition-all ${
                  quality === 'standard'
                    ? 'border-orange-600 bg-orange-50 text-orange-900'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <div className="font-semibold text-sm lg:text-base mb-1">Standard</div>
                <div className="text-xs lg:text-sm text-gray-600">Good quality</div>
              </button>
              <button
                type="button"
                onClick={() => {
                  setQuality('premium');
                  setShowEstimate(false);
                }}
                className={`p-3 lg:p-4 rounded-lg border-2 transition-all ${
                  quality === 'premium'
                    ? 'border-orange-600 bg-orange-50 text-orange-900'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
              >
                <div className="font-semibold text-sm lg:text-base mb-1">Premium</div>
                <div className="text-xs lg:text-sm text-gray-600">Best quality</div>
              </button>
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={handleCalculate}
            disabled={!service || !area}
            className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 lg:py-4 px-6 rounded-lg transition-all mb-4 lg:mb-6 text-sm lg:text-base"
          >
            Calculate Estimate
          </button>

          {/* Estimate Display */}
          {showEstimate && estimate && (
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border-2 border-green-200 animate-fadeIn">
              <div className="text-center mb-4">
                <p className="text-sm text-gray-600 mb-2">Estimated Cost</p>
                <p className="text-4xl font-bold text-gray-900">
                  ₹{estimate.min.toLocaleString('en-IN')} - ₹{estimate.max.toLocaleString('en-IN')}
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  For {area} sq ft of {service} ({quality})
                </p>
              </div>

              <div className="bg-white rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Note:</strong> This is an approximate estimate. Final price may vary based on:
                </p>
                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                  <li>• Specific design requirements</li>
                  <li>• Material selection and availability</li>
                  <li>• Installation complexity</li>
                  <li>• Location and accessibility</li>
                </ul>
              </div>

              <button
                onClick={handleGetQuote}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 group"
              >
                Get Exact Quote via WhatsApp
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          )}

          {/* Disclaimer */}
          <p className="text-xs text-gray-500 text-center mt-4">
            💡 Free site visit • No obligation • Same day response
          </p>
        </div>
      </div>
    </section>
  );
}
