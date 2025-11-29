'use client';

import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { getRecentTestimonials } from '@/data/testimonials';
import { Testimonial } from '@/types';

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    setTestimonials(getRecentTestimonials(6));
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  if (testimonials.length === 0) return null;

  const currentTestimonial = testimonials[currentIndex];
  const averageRating = (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1);

  return (
    <section className="py-8 md:py-12 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            What Our Customers Say
          </h2>
          <p className="text-xs md:text-sm text-gray-600 max-w-xl mx-auto">
            Hear from our satisfied customers across Mumbai
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-5 md:p-6 relative">
            {/* Quote Icon */}
            <div className="absolute top-3 right-3 md:top-4 md:right-4 text-4xl md:text-5xl text-gray-100 font-serif leading-none">
              "
            </div>

            {/* Stars */}
            <div className="flex gap-0.5 mb-3 md:mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 md:w-5 md:h-5 ${
                    i < currentTestimonial.rating
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-sm md:text-base text-gray-700 leading-relaxed mb-4 md:mb-5 relative z-10">
              "{currentTestimonial.text}"
            </p>

            {/* Customer Info */}
            <div className="border-t border-gray-200 pt-3 md:pt-4">
              <h4 className="text-base md:text-lg font-bold text-gray-900">
                {currentTestimonial.name}
              </h4>
              <p className="text-xs md:text-sm text-gray-600 mb-1">
                {currentTestimonial.location}
              </p>
              <span className="inline-block bg-orange-100 text-orange-700 text-[10px] md:text-xs px-2 py-0.5 rounded-full font-medium">
                {currentTestimonial.service}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 mt-4 md:mt-6">
            {/* Previous Button */}
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white hover:bg-orange-500 text-gray-700 hover:text-white rounded-full shadow-md transition-all active:scale-95 touch-manipulation"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all touch-manipulation ${
                    index === currentIndex
                      ? 'bg-orange-500 w-8 md:w-10'
                      : 'bg-gray-300 hover:bg-orange-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-white hover:bg-orange-500 text-gray-700 hover:text-white rounded-full shadow-md transition-all active:scale-95 touch-manipulation"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Rating Badge */}
          <div className="flex justify-center mt-4 md:mt-5">
            <div className="bg-white rounded-full shadow-md px-3 md:px-4 py-1.5 md:py-2 flex items-center gap-1.5">
              <Star className="w-4 h-4 md:w-5 md:h-5 text-yellow-400 fill-current" />
              <span className="text-sm md:text-base font-bold text-gray-900">
                {averageRating}/5
              </span>
              <span className="text-xs md:text-sm text-gray-600">
                from {testimonials.length}+ reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
