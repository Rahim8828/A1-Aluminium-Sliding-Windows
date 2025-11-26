'use client';

import { Award, Users, Clock, Shield, CheckCircle, Star } from 'lucide-react';

const badges = [
  {
    icon: Clock,
    title: '15+ Years',
    subtitle: 'Industry Experience',
    description: 'Trusted expertise since 2009',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    icon: Users,
    title: '5,000+',
    subtitle: 'Happy Customers',
    description: 'Across Mumbai & Thane',
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
  {
    icon: Award,
    title: 'ISI Certified',
    subtitle: 'Premium Quality',
    description: 'Certified materials only',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  {
    icon: Shield,
    title: '2-Year',
    subtitle: 'Warranty',
    description: 'Full coverage guarantee',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
];

const additionalFeatures = [
  { icon: CheckCircle, text: 'Free Site Visit' },
  { icon: CheckCircle, text: 'Same Day Response' },
  { icon: CheckCircle, text: 'Expert Installation' },
  { icon: Star, text: '4.9/5 Rating' },
];

export function TrustBadges() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-gray-50 via-orange-50 to-blue-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Why Choose A1 Aluminium?
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Your trusted partner for quality installations
          </p>
        </div>

        {/* Main Badges Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className={`group relative flex flex-col items-center text-center p-5 md:p-6 bg-white rounded-2xl border-2 ${badge.borderColor} shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                {/* Glow Effect on Hover */}
                <div className={`absolute inset-0 ${badge.bgColor} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`${badge.bgColor} ${badge.color} p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                  <Icon className="w-7 h-7 md:w-9 md:h-9" />
                </div>
                
                {/* Title */}
                <div className="text-2xl md:text-3xl font-bold text-gray-900 mb-1 relative z-10">
                  {badge.title}
                </div>
                
                {/* Subtitle */}
                <div className="text-sm md:text-base font-semibold text-gray-700 mb-2 relative z-10">
                  {badge.subtitle}
                </div>
                
                {/* Description */}
                <div className="text-xs md:text-sm text-gray-500 relative z-10">
                  {badge.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Features Bar */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-200">
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
            {additionalFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-2 group"
                  style={{
                    animation: `fadeIn 0.6s ease-out ${0.4 + index * 0.1}s both`,
                  }}
                >
                  <Icon className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform" />
                  <span className="text-sm md:text-base font-medium text-gray-700 group-hover:text-orange-600 transition-colors">
                    {feature.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}
