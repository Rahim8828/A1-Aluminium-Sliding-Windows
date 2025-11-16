'use client';

import { Award, Clock, Shield, Users, Wrench, BadgeCheck } from 'lucide-react';

interface ValueProposition {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const valuePropositions: ValueProposition[] = [
  {
    id: 'experience',
    title: '15+ Years Experience',
    description:
      'Over a decade of expertise in aluminium, glass, and netting solutions across Mumbai. Trusted by thousands of satisfied customers.',
    icon: <Award className="w-8 h-8" />,
  },
  {
    id: 'quality',
    title: 'Premium Quality Materials',
    description:
      'We use only the highest grade materials from trusted suppliers, ensuring durability and longevity for all our installations.',
    icon: <BadgeCheck className="w-8 h-8" />,
  },
  {
    id: 'service',
    title: '24/7 Emergency Service',
    description:
      'Round-the-clock availability for urgent repairs and installations. We understand that emergencies don\'t wait for business hours.',
    icon: <Clock className="w-8 h-8" />,
  },
  {
    id: 'warranty',
    title: 'Comprehensive Warranty',
    description:
      'All our work comes with industry-leading warranties. We stand behind our craftsmanship and materials with confidence.',
    icon: <Shield className="w-8 h-8" />,
  },
  {
    id: 'team',
    title: 'Expert Installation Team',
    description:
      'Our skilled technicians are trained professionals who ensure precise installation and attention to every detail.',
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: 'service-areas',
    title: 'Wide Service Coverage',
    description:
      'Serving all major areas across Mumbai including Andheri, Bandra, Goregaon, Powai, and surrounding localities.',
    icon: <Wrench className="w-8 h-8" />,
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Why Choose A1 Aluminium?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to delivering excellence in every project, backed by experience, quality, and customer satisfaction
          </p>
        </div>

        {/* Value Propositions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {valuePropositions.map((proposition, index) => (
            <div
              key={proposition.id}
              className="group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:bg-orange-50 hover:shadow-lg">
                {/* Icon */}
                <div className="mb-4 p-4 bg-orange-100 rounded-full text-orange-600 transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white group-hover:scale-110">
                  {proposition.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {proposition.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {proposition.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats Bar */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                15+
              </div>
              <div className="text-gray-600 font-medium">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                5000+
              </div>
              <div className="text-gray-600 font-medium">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                98%
              </div>
              <div className="text-gray-600 font-medium">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-orange-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600 font-medium">Support Available</div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
