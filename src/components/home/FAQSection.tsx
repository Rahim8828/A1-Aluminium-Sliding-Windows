'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: 'How much does aluminium window installation cost?',
    answer: 'Aluminium window installation typically costs between ₹350-₹650 per sq ft, depending on the type of window, quality of materials, and complexity of installation. We provide free site visits and detailed quotes with no hidden charges.',
  },
  {
    question: 'How long does installation take?',
    answer: 'Most installations are completed within 1-3 days depending on the project size. Small projects like single windows can be done in a few hours, while larger projects like complete home installations may take 2-3 days. We provide a clear timeline during the quote.',
  },
  {
    question: 'Do you provide warranty?',
    answer: 'Yes! We provide a 1-2 year warranty on all our installations, covering both materials and workmanship. Our aluminium and glass products come with manufacturer warranties as well.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major payment methods including Cash, UPI (Google Pay, PhonePe, Paytm), Bank Transfer, Credit/Debit Cards, and Cheques. We also offer flexible payment terms for larger projects.',
  },
  {
    question: 'Which areas in Mumbai do you serve?',
    answer: 'We serve all major areas in Mumbai including Andheri, Bandra, Goregaon, Malad, Kandivali, Borivali, Powai, Vikhroli, Ghatkopar, Mulund, Thane, and surrounding areas. Contact us to confirm service availability in your area.',
  },
  {
    question: 'Do you provide free consultation and site visit?',
    answer: 'Yes! We provide completely free consultation and site visits. Our experts will visit your location, take measurements, understand your requirements, and provide a detailed quote with no obligation to proceed.',
  },
  {
    question: 'What is your response time?',
    answer: 'We typically respond to inquiries within 1-2 hours during business hours. For urgent requirements, we offer same-day site visits and emergency services. Call us directly for immediate assistance.',
  },
  {
    question: 'Can I see samples before ordering?',
    answer: 'Absolutely! We can show you samples of different materials, colors, and finishes during our site visit. We also have a showroom where you can see various options and completed installations.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-semibold">
              ❓ FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 leading-relaxed">
            Got questions? We&apos;ve got answers. Find everything you need to know about our services.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-2 rounded-2xl overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? 'border-orange-400 shadow-xl bg-gradient-to-br from-orange-50 to-white'
                  : 'border-gray-200 hover:border-orange-200 bg-white hover:shadow-lg'
              }`}
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.05}s both`,
              }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className={`font-bold text-base md:text-lg pr-4 transition-colors ${
                  openIndex === index ? 'text-orange-600' : 'text-gray-900'
                }`}>
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-orange-600 text-white rotate-180'
                    : 'bg-orange-100 text-orange-600'
                }`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-700 leading-relaxed text-sm md:text-base">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
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
        `}</style>

        <div className="mt-12 md:mt-16 text-center">
          <div className="bg-gradient-to-br from-orange-600 via-orange-500 to-amber-600 rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
            
            <div className="relative z-10">
              <p className="text-xl md:text-2xl font-bold text-white mb-2">
                Still Have Questions?
              </p>
              <p className="text-white/90 mb-6 text-sm md:text-base">
                We&apos;re here to help! Get in touch with our expert team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`tel:${'+919876543210'}`}
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-bold rounded-xl hover:bg-gray-50 transition-all hover:shadow-xl hover:scale-105 min-h-[56px]"
                >
                  📞 Call Us Now
                </a>
                <a
                  href={`https://wa.me/919876543210`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-all hover:shadow-xl hover:scale-105 min-h-[56px]"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
