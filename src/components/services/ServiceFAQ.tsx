'use client';

import React, { useState } from 'react';
import { FAQItem } from '@/types';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ServiceFAQProps {
  faqs: FAQItem[];
  title?: string;
}

const ServiceFAQ: React.FC<ServiceFAQProps> = ({ 
  faqs, 
  title = 'Frequently Asked Questions' 
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
        {title}
      </h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-lg border border-gray-200 overflow-hidden transition-all hover:border-orange-300"
          >
            {/* Question Button */}
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
              id={`faq-question-${index}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleFAQ(index);
                }
              }}
            >
              <span className="text-lg font-semibold text-gray-900 pr-4">
                {faq.question}
              </span>
              <ChevronDown
                className={cn(
                  'w-5 h-5 text-orange-600 flex-shrink-0 transition-transform duration-300',
                  openIndex === index && 'rotate-180'
                )}
                aria-hidden="true"
              />
            </button>

            {/* Answer Content */}
            <div
              id={`faq-answer-${index}`}
              className={cn(
                'overflow-hidden transition-all duration-300 ease-in-out',
                openIndex === index ? 'max-h-96' : 'max-h-0'
              )}
              role="region"
              aria-labelledby={`faq-question-${index}`}
            >
              <div className="px-5 pb-5 pt-2">
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Help Section */}
      <div className="mt-8 p-6 bg-orange-50 rounded-lg border border-orange-100">
        <p className="text-gray-700 text-center">
          <span className="font-semibold">Still have questions?</span>{' '}
          <a
            href="/contact"
            className="text-orange-600 hover:text-orange-700 underline font-medium"
          >
            Contact us
          </a>{' '}
          and our team will be happy to help you.
        </p>
      </div>
    </div>
  );
};

export default ServiceFAQ;
