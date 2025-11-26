import { Metadata } from 'next';
import Link from 'next/link';
import { Package, ShoppingBag, Sparkles, Bell, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Products - Coming Soon | A1 Aluminium, Glass & Netting Solutions',
  description:
    'Exciting new products coming soon! A1 Aluminium will soon offer premium aluminium, glass, and netting products for direct purchase. Stay tuned for quality products at competitive prices.',
  keywords: [
    'aluminium products mumbai',
    'glass products mumbai',
    'netting products',
    'buy aluminium online',
    'glass products online',
    'a1 aluminium products',
  ],
  openGraph: {
    title: 'Products Coming Soon - A1 Aluminium',
    description: 'Exciting new products launching soon! Premium aluminium, glass, and netting products.',
    type: 'website',
    url: '/products',
  },
  alternates: {
    canonical: '/products',
  },
};

export default function ProductsPage() {
  const upcomingCategories = [
    {
      icon: Package,
      title: 'Aluminium Products',
      description: 'Premium aluminium profiles, windows, doors, and accessories',
      items: ['Window Frames', 'Door Frames', 'Profiles', 'Hardware'],
    },
    {
      icon: Sparkles,
      title: 'Glass Products',
      description: 'Toughened glass, mirrors, and glass accessories',
      items: ['Toughened Glass', 'Mirrors', 'Glass Panels', 'Accessories'],
    },
    {
      icon: ShoppingBag,
      title: 'Netting Products',
      description: 'Safety nets, bird nets, and mosquito nets',
      items: ['Safety Nets', 'Bird Nets', 'Mosquito Nets', 'Sports Nets'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-orange-50">
      {/* Hero Section - Compact */}
      <section className="relative py-12 md:py-20 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          {/* Coming Soon Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-4 animate-pulse">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            <span>Coming Soon</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Premium Products
            <br />
            <span className="text-orange-600">Launching Soon</span>
          </h1>

          <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            High-quality aluminium, glass, and netting products for direct purchase.
          </p>

          {/* Notify Me Button */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Link
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi, I'd like to be notified when products are available`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              <Bell className="w-4 h-4" />
              <span>Notify Me</span>
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors border-2 border-gray-200 text-sm md:text-base"
            >
              <span>Browse Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Upcoming Categories - Compact */}
      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
              What&apos;s Coming
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              Premium products across these categories
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {upcomingCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white to-orange-50 border-2 border-orange-200 rounded-xl p-5 md:p-6 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                    {category.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <ul className="space-y-1.5">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs md:text-sm text-gray-700">
                        <div className="w-1 h-1 bg-orange-600 rounded-full flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Wait Section - Compact */}
      <section className="py-10 md:py-12 bg-gradient-to-br from-orange-600 to-orange-800 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 md:mb-4">
            Get Our Services Now!
          </h2>
          <p className="text-sm md:text-base text-orange-100 mb-6">
            Professional installation services available right now.
          </p>
          <div className="grid grid-cols-3 gap-3 md:gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4">
              <div className="text-2xl md:text-3xl font-bold mb-1">{BUSINESS_INFO.stats.yearsOfExperience}+</div>
              <div className="text-xs md:text-sm text-orange-100">Years</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4">
              <div className="text-2xl md:text-3xl font-bold mb-1">{BUSINESS_INFO.stats.projectsCompleted.toLocaleString()}+</div>
              <div className="text-xs md:text-sm text-orange-100">Projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 md:p-4">
              <div className="text-2xl md:text-3xl font-bold mb-1">{BUSINESS_INFO.stats.happyCustomers.toLocaleString()}+</div>
              <div className="text-xs md:text-sm text-orange-100">Customers</div>
            </div>
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-white text-orange-600 hover:bg-orange-50 font-bold px-6 py-3 rounded-lg transition-colors text-sm md:text-base"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Contact Section - Compact */}
      <section className="py-10 md:py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
            Have Questions?
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-6">
            Get in touch with us today!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${BUSINESS_INFO.phone.primary}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              📞 Call Now
            </a>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm md:text-base"
            >
              📧 Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
