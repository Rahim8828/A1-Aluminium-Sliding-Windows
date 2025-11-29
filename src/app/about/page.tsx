import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Award,
  Users,
  Target,
  Shield,
  Clock,
  ThumbsUp,
  CheckCircle,
  Phone,
} from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import { StatsCounter } from '@/components/home/StatsCounter';
import CallButton from '@/components/contact/CallButton';
import WhatsAppButton from '@/components/contact/WhatsAppButton';

export const metadata: Metadata = {
  title: 'About Us - A1 Aluminium, Glass & Netting Solutions | Mumbai',
  description:
    'Learn about A1 Aluminium, Glass & Netting Solutions. 15+ years of experience serving Mumbai with premium aluminium fabrication, glass installation, and safety netting services. Trusted in Andheri, Bandra, Goregaon, Powai & all Mumbai areas.',
  keywords: [
    'about a1 aluminium',
    'aluminium company mumbai',
    'glass installation company mumbai',
    'netting services mumbai',
    'experienced contractors mumbai',
    'aluminium fabrication company',
    'trusted aluminium services',
    'mumbai aluminium contractor',
  ],
  openGraph: {
    title: 'About Us - A1 Aluminium, Glass & Netting Solutions',
    description:
      '15+ years of experience serving Mumbai with premium aluminium, glass, and netting solutions. Trusted by 4500+ customers.',
    type: 'website',
    url: '/about',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description:
        'We use only premium materials and maintain the highest standards of craftsmanship in every project.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description:
        'Your satisfaction is our priority. We listen to your needs and deliver solutions that exceed expectations.',
    },
    {
      icon: Target,
      title: 'Precision & Detail',
      description:
        'Every measurement, every cut, every installation is done with meticulous attention to detail.',
    },
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description:
        'Licensed, insured, and trusted by thousands of customers across Mumbai for over 15 years.',
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description:
        'We respect your time. Projects are completed on schedule without compromising quality.',
    },
    {
      icon: ThumbsUp,
      title: 'Competitive Pricing',
      description:
        'Fair, transparent pricing with no hidden costs. Quality service at prices that fit your budget.',
    },
  ];

  const whyChooseUs = [
    'ISO Certified company with proven track record',
    '15+ years of industry experience',
    'Skilled and trained professionals',
    'Premium quality materials',
    'Competitive and transparent pricing',
    'On-time project completion',
    'Comprehensive warranty coverage',
    '24/7 emergency service available',
    'Free consultation and quotes',
    'Serving all areas across Mumbai',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
              About {BUSINESS_INFO.name}
            </h1>
            <p className="text-sm md:text-lg text-orange-100 mb-2 md:mb-4">
              {BUSINESS_INFO.tagline}
            </p>
            <p className="text-xs md:text-base text-orange-50">
              Serving Mumbai since{' '}
              {new Date().getFullYear() - BUSINESS_INFO.stats.yearsOfExperience}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-center">
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                Our Story
              </h2>
              <div className="space-y-3 text-gray-700 leading-relaxed text-sm md:text-base">
                <p>
                  Founded over {BUSINESS_INFO.stats.yearsOfExperience} years ago,
                  A1 Aluminium, Glass & Netting Solutions has grown from a small
                  local workshop to one of Mumbai&apos;s most trusted names in
                  aluminium fabrication, glass installation, and safety netting
                  services.
                </p>
                <p>
                  What started as a passion for quality craftsmanship has evolved
                  into a comprehensive service provider, completing over{' '}
                  {BUSINESS_INFO.stats.projectsCompleted.toLocaleString()}+
                  projects across residential, commercial, and industrial sectors.
                </p>
                <p>
                  Our commitment to excellence, customer satisfaction, and
                  continuous innovation has earned us the trust of thousands of
                  happy customers throughout Mumbai. We take pride in every
                  project, treating each installation as if it were for our own
                  home.
                </p>
                <p>
                  Today, with a team of {BUSINESS_INFO.stats.teamMembers}+ skilled
                  professionals, we continue to set the standard for quality and
                  service in the industry.
                </p>
              </div>
            </div>
            <div className="relative h-48 md:h-80 rounded-lg overflow-hidden shadow-xl bg-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-700/10 z-10" />
              <Image
                src="/aluminium-category/Showroom-front.webp"
                alt="A1 Aluminium, Glass & Netting Solutions - Professional installation services in Mumbai"
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-6 md:py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsCounter />
        </div>
      </section>

      {/* Our Values */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Our Core Values
            </h2>
            <p className="text-xs md:text-sm text-gray-600 max-w-xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-3 md:p-4 hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-100 rounded-lg flex items-center justify-center mb-2 md:mb-3">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-orange-600" />
                  </div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-1">
                    {value.title}
                  </h3>
                  <p className="text-[10px] md:text-xs text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Why Choose A1 Aluminium?
            </h2>
            <p className="text-xs md:text-sm text-gray-600 max-w-xl mx-auto">
              What sets us apart from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 max-w-3xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-2 bg-white p-2.5 md:p-3 rounded-lg border border-gray-200"
              >
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm text-gray-700">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              Areas We Serve
            </h2>
            <p className="text-xs md:text-sm text-gray-600 max-w-xl mx-auto">
              Providing quality services across Mumbai
            </p>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-3 max-w-4xl mx-auto">
            {BUSINESS_INFO.serviceAreas.map((area, index) => (
              <div
                key={index}
                className="bg-orange-50 border border-orange-200 rounded-lg p-2 md:p-3 text-center hover:bg-orange-100 transition-colors duration-300"
              >
                <span className="text-gray-800 font-medium text-xs md:text-sm">{area}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 md:mt-6 text-center">
            <p className="text-xs md:text-sm text-gray-600 mb-3">
              Don&apos;t see your area? Contact us!
            </p>
            <Link
              href="/contact"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-5 py-2 text-sm rounded-lg transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-12 bg-gradient-to-br from-orange-600 to-orange-800 text-white pb-24 md:pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-sm md:text-base text-orange-100 mb-4 md:mb-6">
            Get a free consultation and quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <CallButton
              phoneNumber={BUSINESS_INFO.phone.primary}
              variant="secondary"
              size="lg"
            />
            <WhatsAppButton
              phoneNumber={BUSINESS_INFO.whatsapp}
              message="Hi, I'd like to know more about your services"
              position="inline"
            />
          </div>
          <div className="mt-4 md:mt-6 flex items-center justify-center gap-2 text-orange-100 text-xs md:text-sm">
            <Phone className="w-4 h-4" />
            <span>
              {BUSINESS_INFO.phone.display}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
