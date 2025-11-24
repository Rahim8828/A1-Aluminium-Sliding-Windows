'use client';

/**
 * Service Detail Modal Component - Enhanced Mobile-First Design
 * Full-screen modal on mobile, centered on desktop
 * Displays service details, options, process steps, FAQs, and trust badges
 */

import { useEffect, useState } from 'react';
import { Service } from '@/types';
import { X, Star, Clock, CheckCircle, ChevronDown, ChevronUp, Minus, Plus } from 'lucide-react';

interface ServiceDetailModalProps {
  service: Service;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (serviceId: string, optionId: string, quantity: number) => void;
}

export default function ServiceDetailModal({
  service,
  isOpen,
  onClose,
  onAddToCart,
}: ServiceDetailModalProps) {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>(service.options[0]?.id || '');
  const [quantity, setQuantity] = useState(1);

  // Handle escape key and body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleAddToCart = () => {
    if (selectedOption) {
      onAddToCart(service.id, selectedOption, quantity);
    }
  };

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const selectedOptionData = service.options.find((opt) => opt.id === selectedOption);
  const totalPrice = selectedOptionData ? selectedOptionData.price * quantity : 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-0 md:p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      {/* Modal Container - Full screen on mobile, centered on desktop */}
      <div className="relative w-full h-full md:h-auto md:max-h-[90vh] md:max-w-4xl bg-white md:rounded-xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header - Sticky with improved mobile design */}
        <div className="sticky top-0 z-10 bg-gradient-to-b from-white to-gray-50 border-b border-gray-200 px-3 md:px-6 py-3 md:py-4 shadow-sm">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h2
                id="service-modal-title"
                className="text-base md:text-xl font-bold text-gray-900 mb-1.5 md:mb-2 line-clamp-2"
              >
                {service.title}
              </h2>
              <div className="flex items-center gap-2 flex-wrap text-xs">
                <div className="flex items-center gap-1 bg-yellow-50 px-2 py-0.5 rounded-full">
                  <Star className="w-3.5 h-3.5 text-yellow-500 fill-current" />
                  <span className="font-bold text-gray-900">
                    {service.rating.toFixed(1)}
                  </span>
                  <span className="text-gray-600">
                    ({(service.reviewCount / 1000).toFixed(1)}K)
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-blue-50 px-2 py-0.5 rounded-full text-blue-700">
                  <Clock className="w-3.5 h-3.5" />
                  <span className="font-medium">{service.duration}</span>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="flex-shrink-0 w-9 h-9 md:w-10 md:h-10 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-full transition-all active:scale-95"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>
        </div>

        {/* Content - Scrollable - All sections vertically */}
        <div className="flex-1 overflow-y-auto">
          <div className="px-4 md:px-6 py-6 space-y-8">
            {/* Options Section - Enhanced Mobile Design */}
            <section>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-gray-900">
                    Select Service Option
                  </h3>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {service.options.length} options
                  </span>
                </div>
                
                {/* Horizontal Scrollable Row - Image First Design */}
                <div className="relative -mx-1">
                  {/* Gradient fade on edges */}
                  <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
                  
                  <div className="overflow-x-auto scrollbar-hide px-1">
                    <div className="flex gap-3 pb-2">
                      {service.options.map((option) => (
                        <div
                          key={option.id}
                          className={`flex-shrink-0 w-40 border-2 rounded-xl overflow-hidden transition-all ${
                            selectedOption === option.id
                              ? 'border-orange-500 shadow-lg'
                              : 'border-gray-200 hover:border-orange-300 hover:shadow-sm'
                          }`}
                        >
                      {/* Option Image - Compact */}
                      <div className="relative w-full aspect-square bg-gray-100">
                        {option.image ? (
                          <img
                            src={option.image}
                            alt={option.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-gray-300">
                            <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        )}
                        {/* Selection indicator */}
                        {selectedOption === option.id && (
                          <div className="absolute top-1.5 right-1.5 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center shadow-md">
                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        )}
                      </div>

                      {/* Option Details - Compact */}
                      <div className="p-2.5">
                        {/* Name */}
                        <h4 className="font-bold text-xs text-gray-900 mb-1 line-clamp-1">
                          {option.name}
                        </h4>

                        {/* Time Duration */}
                        <div className="flex items-center gap-0.5 text-[10px] text-gray-600 mb-1.5">
                          <Clock className="w-3 h-3" />
                          <span>{option.estimatedTime}</span>
                        </div>

                        {/* Price */}
                        <div className="text-base font-bold text-gray-900 mb-2">
                          ₹{option.price.toLocaleString()}
                        </div>

                        {/* Add Button - Compact */}
                        <button
                          onClick={() => setSelectedOption(option.id)}
                          className={`w-full py-2 rounded-lg font-semibold text-xs transition-all active:scale-95 ${
                            selectedOption === option.id
                              ? 'bg-orange-500 text-white shadow-sm'
                              : 'bg-white text-orange-600 border-2 border-orange-600 hover:bg-orange-50'
                          }`}
                        >
                          {selectedOption === option.id ? 'Selected' : 'Add'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Scroll hint */}
              <div className="text-center mt-2">
                <p className="text-[10px] text-gray-400 flex items-center justify-center gap-1">
                  <span>👈</span>
                  Swipe to see all options
                  <span>👉</span>
                </p>
              </div>
            </div>

              </div>
            </section>

            {/* Overview Section - Enhanced */}
            <section>
              <div className="space-y-5">
                {/* Service Description */}
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <h3 className="text-base font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">ℹ️</span>
                    About This Service
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {service.fullDescription}
                  </p>
                </div>

                {/* What's Included */}
                {service.priceIncludes && service.priceIncludes.length > 0 && (
                  <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                    <h3 className="text-base font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      What's Included
                    </h3>
                    <ul className="space-y-2">
                      {service.priceIncludes.map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Trust Badges */}
                {service.trustBadges && service.trustBadges.length > 0 && (
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-4 border border-orange-100">
                    <h3 className="text-base font-bold text-gray-900 mb-3 text-center">
                      Why Choose Us
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {service.trustBadges.map((badge, index) => (
                        <div
                          key={index}
                          className="flex flex-col items-center text-center bg-white rounded-lg p-3 shadow-sm"
                        >
                          <div className="w-10 h-10 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center text-xl mb-1.5">
                            {badge.icon}
                          </div>
                          <span className="text-xs font-semibold text-gray-700 line-clamp-2">
                            {badge.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>

            {/* Process Section - Enhanced Mobile Design */}
            {service.processSteps && service.processSteps.length > 0 && (
              <section>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Our Process
                  </h3>
                  <div className="space-y-3">
                    {service.processSteps.map((step, index) => (
                      <div
                        key={step.step}
                        className="bg-white border border-gray-200 rounded-xl p-3 hover:border-orange-300 hover:shadow-sm transition-all"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                            {step.step}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-bold text-sm text-gray-900 mb-1">
                              {step.title}
                            </h4>
                            <p className="text-xs text-gray-600 leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                        {index < service.processSteps.length - 1 && (
                          <div className="ml-4 mt-2 mb-1 border-l-2 border-dashed border-orange-200 h-3"></div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* FAQ Section - Enhanced Mobile Design */}
            {service.faqs && service.faqs.length > 0 && (
              <section>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    Frequently Asked Questions
                  </h3>
                  <div className="space-y-2">
                    {service.faqs.map((faq, index) => (
                      <div
                        key={index}
                        className={`border rounded-xl overflow-hidden transition-all ${
                          expandedFAQ === index
                            ? 'border-orange-300 bg-orange-50 shadow-sm'
                            : 'border-gray-200 bg-white'
                        }`}
                      >
                        <button
                          onClick={() => toggleFAQ(index)}
                          className="w-full flex items-center justify-between gap-3 p-3 text-left hover:bg-orange-50/50 transition-colors active:scale-[0.99]"
                          aria-expanded={expandedFAQ === index}
                          aria-controls={`faq-answer-${index}`}
                        >
                          <span className="font-semibold text-sm text-gray-900 flex-1">
                            {faq.question}
                          </span>
                          <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors ${
                            expandedFAQ === index ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600'
                          }`}>
                            {expandedFAQ === index ? (
                              <ChevronUp className="w-4 h-4" />
                            ) : (
                              <ChevronDown className="w-4 h-4" />
                            )}
                          </div>
                        </button>
                        {expandedFAQ === index && (
                          <div
                            id={`faq-answer-${index}`}
                            className="px-3 pb-3 text-sm text-gray-700 leading-relaxed animate-in fade-in duration-200"
                          >
                            {faq.answer}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}
          </div>
        </div>

        {/* Sticky Footer - Enhanced Mobile Design */}
        {selectedOption && (
          <div className="sticky bottom-0 bg-gradient-to-t from-white via-white to-white/95 border-t-2 border-orange-200 px-3 md:px-6 py-3 shadow-2xl backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="flex-1 min-w-0">
                <div className="text-[10px] text-gray-500 uppercase tracking-wide">Total Price</div>
                <div className="text-xl md:text-2xl font-bold text-orange-600 leading-tight">
                  ₹{totalPrice.toLocaleString()}
                </div>
                <div className="text-[10px] text-gray-500">
                  {quantity} × ₹{selectedOptionData?.price.toLocaleString()}
                </div>
              </div>
              <button
                onClick={handleAddToCart}
                className="px-6 md:px-8 py-3 md:py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white text-sm md:text-base font-bold rounded-xl transition-all shadow-lg hover:shadow-xl active:scale-95 min-h-[52px] touch-manipulation flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
