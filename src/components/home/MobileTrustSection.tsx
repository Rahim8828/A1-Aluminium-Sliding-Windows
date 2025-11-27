'use client';

import { Shield, Award, Users, ThumbsUp } from 'lucide-react';

export function MobileTrustSection() {
  const features = [
    {
      icon: Shield,
      title: 'Quality Assured',
      description: '100% satisfaction guarantee',
    },
    {
      icon: Award,
      title: '15+ Years',
      description: 'Industry experience',
    },
    {
      icon: Users,
      title: '5000+ Customers',
      description: 'Trust us for their homes',
    },
    {
      icon: ThumbsUp,
      title: '4.8★ Rating',
      description: 'From verified customers',
    },
  ];

  return (
    <div className="bg-white py-6 md:py-12">
      <div className="px-4 max-w-7xl mx-auto">
        <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 md:mb-8 text-center">
          Why Choose A1 Aluminium?
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-4 md:p-6 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-orange-100 rounded-full mb-2 md:mb-3">
                  <Icon className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
                </div>
                <div className="font-semibold text-sm md:text-base text-gray-900 mb-1">
                  {feature.title}
                </div>
                <div className="text-xs md:text-sm text-gray-600">
                  {feature.description}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
