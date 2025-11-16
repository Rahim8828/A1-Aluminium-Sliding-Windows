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
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About {BUSINESS_INFO.name}
            </h1>
            <p className="text-xl md:text-2xl text-orange-100 mb-8">
              {BUSINESS_INFO.tagline}
            </p>
            <p className="text-lg text-orange-50">
              Serving Mumbai with excellence since{' '}
              {new Date().getFullYear() - BUSINESS_INFO.stats.yearsOfExperience}
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
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
            <div className="relative h-96 md:h-full min-h-[400px] rounded-lg overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-700/20" />
              <Image
                src="/images/about-company.jpg"
                alt="A1 Aluminium, Glass & Netting Solutions team providing professional installation services in Mumbai"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StatsCounter />
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose A1 Aluminium?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here&apos;s what sets us apart from the competition
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {whyChooseUs.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white p-4 rounded-lg border border-gray-200"
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Areas We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Providing quality services across Mumbai
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            {BUSINESS_INFO.serviceAreas.map((area, index) => (
              <div
                key={index}
                className="bg-orange-50 border border-orange-200 rounded-lg p-4 text-center hover:bg-orange-100 transition-colors duration-300"
              >
                <span className="text-gray-800 font-medium">{area}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">
              Don&apos;t see your area listed? Contact us to check availability!
            </p>
            <Link
              href="/contact"
              className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-orange-100 mb-8">
            Get a free consultation and quote today. Our experts are ready to help
            you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
          <div className="mt-8 flex items-center justify-center gap-2 text-orange-100">
            <Phone className="w-5 h-5" />
            <span>
              Call us: {BUSINESS_INFO.phone.display} | Available{' '}
              {BUSINESS_INFO.hours.weekdays}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
