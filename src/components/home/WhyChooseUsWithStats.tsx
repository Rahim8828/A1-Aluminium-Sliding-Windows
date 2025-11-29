'use client';

import { useEffect, useRef, useState } from 'react';
import { Award, BadgeCheck, Shield, Wrench, Users, Briefcase, Clock } from 'lucide-react';

interface ValueProposition {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface Stat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
  icon: React.ReactNode;
}

const valuePropositions: ValueProposition[] = [
  {
    id: 'quality',
    title: 'Premium Quality Materials',
    description:
      'We use only the highest grade materials from trusted suppliers, ensuring durability and longevity for all our installations.',
    icon: <BadgeCheck className="w-8 h-8" />,
  },
  {
    id: 'team',
    title: 'Expert Installation Team',
    description:
      'Our skilled technicians are trained professionals who ensure precise installation and attention to every detail.',
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: 'warranty',
    title: 'Comprehensive Warranty',
    description:
      'All our work comes with industry-leading warranties. We stand behind our craftsmanship and materials with confidence.',
    icon: <Shield className="w-8 h-8" />,
  },
  {
    id: 'service-areas',
    title: 'Wide Service Coverage',
    description:
      'Serving all major areas across Mumbai including Andheri, Bandra, Goregaon, Powai, and surrounding localities.',
    icon: <Wrench className="w-8 h-8" />,
  },
];

const stats: Stat[] = [
  {
    id: 'experience',
    label: 'Years of Experience',
    value: 15,
    suffix: '+',
    icon: <Award className="w-8 h-8" />,
  },
  {
    id: 'projects',
    label: 'Projects Completed',
    value: 5000,
    suffix: '+',
    icon: <Briefcase className="w-8 h-8" />,
  },
  {
    id: 'customers',
    label: 'Happy Customers',
    value: 4500,
    suffix: '+',
    icon: <Users className="w-8 h-8" />,
  },
  {
    id: 'support',
    label: 'Support Available',
    value: 24,
    suffix: '/7',
    icon: <Clock className="w-8 h-8" />,
  },
];

export function WhyChooseUsWithStats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden">
      {/* Stats Section - Orange Background */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-800 py-8 md:py-10 relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Title */}
          <div className="text-center mb-5 md:mb-6">
            <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white mb-1.5 px-4">
              Why 5000+ Customers Trust Us
            </h2>
            <p className="text-xs md:text-sm text-orange-100 max-w-2xl mx-auto px-4">
              Proven track record of excellence in aluminium, glass, and netting solutions
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <StatItem
                key={stat.id}
                stat={stat}
                isVisible={isVisible}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section - White Background */}
      <div className="bg-white py-8 md:py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Value Propositions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {valuePropositions.map((proposition, index) => (
              <div
                key={proposition.id}
                className="group"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                }}
              >
                <div className="flex flex-col items-center text-center p-3 md:p-4 rounded-lg transition-all duration-300 hover:bg-orange-50 hover:shadow-md">
                  {/* Icon */}
                  <div className="mb-2 md:mb-3 p-2.5 md:p-3 bg-orange-100 rounded-full text-orange-600 transition-all duration-300 group-hover:bg-orange-600 group-hover:text-white group-hover:scale-110">
                    {proposition.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-sm md:text-base font-bold text-gray-900 mb-1.5 md:mb-2">
                    {proposition.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    {proposition.description}
                  </p>
                </div>
              </div>
            ))}
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

interface StatItemProps {
  stat: Stat;
  isVisible: boolean;
  delay: number;
}

function StatItem({ stat, isVisible, delay }: StatItemProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = stat.value / steps;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        currentStep++;
        if (currentStep <= steps) {
          setCount(Math.min(Math.round(increment * currentStep), stat.value));
        } else {
          clearInterval(interval);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, stat.value, delay]);

  return (
    <div className="text-center group">
      {/* Icon */}
      <div className="flex justify-center mb-2">
        <div className="p-2.5 bg-white/10 rounded-full text-white group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
          {stat.icon}
        </div>
      </div>

      {/* Counter */}
      <div className="text-2xl md:text-3xl font-bold text-white mb-0.5">
        {count.toLocaleString()}
        {stat.suffix && <span className="text-orange-200">{stat.suffix}</span>}
      </div>

      {/* Label */}
      <div className="text-[10px] md:text-xs text-orange-100 font-medium">
        {stat.label}
      </div>
    </div>
  );
}
