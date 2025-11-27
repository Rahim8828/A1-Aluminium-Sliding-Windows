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
    <div className="lg:hidden bg-white py-6">
      <div className="px-4">
        <h2 className="text-lg font-bold text-gray-900 mb-4 text-center">
          Why Choose A1 Aluminium?
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-4 bg-orange-50 rounded-lg"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-2">
                  <Icon className="w-6 h-6 text-orange-600" />
                </div>
                <div className="font-semibold text-sm text-gray-900 mb-1">
                  {feature.title}
                </div>
                <div className="text-xs text-gray-600">
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
