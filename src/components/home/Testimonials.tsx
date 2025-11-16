'use client';

import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';
import type { Testimonial } from '@/types';

interface TestimonialsProps {
  displayCount?: number;
}

export function Testimonials({ displayCount = 6 }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayTestimonials = testimonials.slice(0, displayCount);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % displayTestimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? displayTestimonials.length - 1 : prev - 1
    );
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-orange-50 to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers across Mumbai
          </p>
        </div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {displayTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <div 
            className="relative"
            role="region"
            aria-label="Customer testimonials carousel"
            aria-live="polite"
          >
            <TestimonialCard testimonial={displayTestimonials[currentIndex]} />
            
            {/* Carousel Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={prevTestimonial}
                className="min-h-[44px] min-w-[44px] p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2"
                aria-label="Previous testimonial"
                onKeyDown={(e) => {
                  if (e.key === 'ArrowLeft') {
                    prevTestimonial();
                  }
                }}
              >
                <ChevronLeft className="w-6 h-6 text-gray-700" aria-hidden="true" />
              </button>
              
              <div className="flex gap-2" role="tablist" aria-label="Testimonial indicators">
                {displayTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 ${
                      index === currentIndex
                        ? 'bg-orange-600'
                        : 'bg-gray-300'
                    }`}
                    role="tab"
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-selected={index === currentIndex}
                    aria-controls={`testimonial-${index}`}
                  >
                    <span className={`block rounded-full ${
                      index === currentIndex ? 'w-8 h-2' : 'w-2 h-2'
                    }`} />
                  </button>
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="min-h-[44px] min-w-[44px] p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2"
                aria-label="Next testimonial"
                onKeyDown={(e) => {
                  if (e.key === 'ArrowRight') {
                    nextTestimonial();
                  }
                }}
              >
                <ChevronRight className="w-6 h-6 text-gray-700" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-md">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="font-semibold text-gray-900">4.9/5</span>
            <span className="text-gray-600">from {testimonials.length}+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <article className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 text-orange-100" aria-hidden="true">
        <Quote className="w-12 h-12" />
      </div>

      {/* Rating */}
      <div className="flex gap-1 mb-4" role="img" aria-label={`${testimonial.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < testimonial.rating
                ? 'text-yellow-400 fill-yellow-400'
                : 'text-gray-300'
            }`}
            aria-hidden="true"
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-gray-700 mb-6 leading-relaxed relative z-10">
        "{testimonial.text}"
      </p>

      {/* Customer Info */}
      <div className="border-t border-gray-100 pt-4">
        <div className="font-semibold text-gray-900">{testimonial.name}</div>
        <div className="text-sm text-gray-600">{testimonial.location}</div>
        {testimonial.service && (
          <div className="mt-2 inline-block px-3 py-1 bg-orange-50 text-orange-700 text-xs font-medium rounded-full">
            {testimonial.service}
          </div>
        )}
      </div>
    </article>
  );
}
