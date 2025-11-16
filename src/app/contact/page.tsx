import { Metadata } from 'next';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
} from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import { locations } from '@/data/locations';
import ContactForm from '@/components/contact/ContactForm';
import CallButton from '@/components/contact/CallButton';
import WhatsAppButton from '@/components/contact/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Contact Us - A1 Aluminium, Glass & Netting Solutions | Mumbai',
  description:
    'Get in touch with A1 Aluminium for free quotes and consultations. Call, WhatsApp, or fill our contact form. Serving Andheri, Bandra, Goregaon, Powai, Malad & all Mumbai areas. 24/7 emergency service available.',
  keywords: [
    'contact a1 aluminium',
    'aluminium services mumbai contact',
    'glass installation quote mumbai',
    'netting services inquiry',
    'free consultation mumbai',
    'aluminium contractor mumbai',
    'glass installation contact',
    'safety nets contact mumbai',
  ],
  openGraph: {
    title: 'Contact Us - A1 Aluminium, Glass & Netting Solutions',
    description:
      'Get in touch for free quotes and consultations. Available across Mumbai. Call or WhatsApp now!',
    type: 'website',
    url: '/contact',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl text-orange-100 mb-4">
              Have a question or ready to start your project? We&apos;re here to
              help!
            </p>
            <p className="text-lg text-orange-50">
              Free consultation and quotes available
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Phone */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Call Us
              </h3>
              <a
                href={`tel:${BUSINESS_INFO.phone.primary}`}
                className="text-orange-600 hover:text-orange-700 font-medium block mb-1"
              >
                {BUSINESS_INFO.phone.display}
              </a>
              {BUSINESS_INFO.phone.secondary && (
                <a
                  href={`tel:${BUSINESS_INFO.phone.secondary}`}
                  className="text-orange-600 hover:text-orange-700 font-medium block"
                >
                  {BUSINESS_INFO.phone.secondary}
                </a>
              )}
            </div>

            {/* WhatsApp */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                WhatsApp
              </h3>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-medium block"
              >
                Chat with us
              </a>
              <p className="text-sm text-gray-600 mt-1">Quick responses</p>
            </div>

            {/* Email */}
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Email Us
              </h3>
              <a
                href={`mailto:${BUSINESS_INFO.email.primary}`}
                className="text-purple-600 hover:text-purple-700 font-medium block mb-1 break-all"
              >
                {BUSINESS_INFO.email.primary}
              </a>
            </div>

            {/* Location */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Visit Us
              </h3>
              <p className="text-gray-700 text-sm">
                {BUSINESS_INFO.address.street}
              </p>
              <p className="text-gray-700 text-sm">
                {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">
                      Send Us a Message
                    </h2>
                    <p className="text-gray-600">
                      We&apos;ll respond within 24 hours
                    </p>
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Business Hours */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Business Hours
                  </h2>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">
                      Monday - Friday
                    </span>
                    <span className="text-gray-900 font-semibold">
                      {BUSINESS_INFO.hours.weekdays}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">Saturday</span>
                    <span className="text-gray-900 font-semibold">
                      {BUSINESS_INFO.hours.saturday}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-200">
                    <span className="text-gray-700 font-medium">Sunday</span>
                    <span className="text-gray-900 font-semibold">
                      {BUSINESS_INFO.hours.sunday}
                    </span>
                  </div>
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-800 font-medium text-center">
                      {BUSINESS_INFO.hours.emergency}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Prefer to Talk?
                </h3>
                <p className="text-gray-600 mb-6">
                  Get instant answers to your questions by calling or messaging us
                  directly.
                </p>
                <div className="space-y-3">
                  <CallButton
                    phoneNumber={BUSINESS_INFO.phone.primary}
                    variant="primary"
                    size="lg"
                  />
                  <WhatsAppButton
                    phoneNumber={BUSINESS_INFO.whatsapp}
                    message="Hi, I'd like to inquire about your services"
                    position="inline"
                  />
                </div>
              </div>

              {/* Why Contact Us */}
              <div className="bg-gradient-to-br from-orange-600 to-orange-800 rounded-lg shadow-lg p-8 text-white">
                <h3 className="text-xl font-bold mb-4">Why Contact Us?</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-200 mt-1">✓</span>
                    <span>Free consultation and quotes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-200 mt-1">✓</span>
                    <span>Expert advice from experienced professionals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-200 mt-1">✓</span>
                    <span>Quick response time</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-200 mt-1">✓</span>
                    <span>Transparent pricing with no hidden costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-200 mt-1">✓</span>
                    <span>Flexible scheduling to suit your needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Coverage */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Service Area Coverage
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We proudly serve customers across Mumbai with fast response times
              and quality service
            </p>
          </div>

          {/* Coverage Map/List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location) => (
              <div
                key={location.slug}
                className="bg-gray-50 border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-orange-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {location.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {location.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {location.servicesAvailable.slice(0, 3).map((service) => (
                        <span
                          key={service}
                          className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded"
                        >
                          {service.replace(/-/g, ' ')}
                        </span>
                      ))}
                      {location.servicesAvailable.length > 3 && (
                        <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                          +{location.servicesAvailable.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Coverage Info */}
          <div className="mt-12 bg-orange-50 border border-orange-200 rounded-lg p-8 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Don&apos;t See Your Area?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              We&apos;re constantly expanding our service areas. Contact us to check
              if we can serve your location. We may be able to accommodate special
              requests!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${BUSINESS_INFO.phone.primary}`}
                className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                Call to Inquire
              </a>
              <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi, I'd like to check if you serve my area`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
              >
                <MessageSquare className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <details className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                <span>How quickly can you respond to inquiries?</span>
                <span className="text-orange-600 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-600">
                We typically respond to all inquiries within 2-4 hours during
                business hours. For urgent requests, call us directly for
                immediate assistance.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                <span>Do you provide free quotes?</span>
                <span className="text-orange-600 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-600">
                Yes! We provide free, no-obligation quotes for all our services.
                Simply fill out the contact form or call us to schedule a
                consultation.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                <span>What areas do you serve?</span>
                <span className="text-orange-600 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-600">
                We serve all major areas across Mumbai including Andheri, Bandra,
                Goregaon, Jogeshwari, Powai, Malad, Kandivali, Borivali, and many
                more. Contact us to confirm service availability in your area.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                <span>Do you offer emergency services?</span>
                <span className="text-orange-600 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-600">
                Yes, we offer 24/7 emergency services for urgent repairs and
                installations. Call our emergency hotline for immediate assistance.
              </p>
            </details>

            <details className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 group">
              <summary className="font-semibold text-gray-900 cursor-pointer list-none flex justify-between items-center">
                <span>What payment methods do you accept?</span>
                <span className="text-orange-600 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-4 text-gray-600">
                We accept cash, bank transfers, UPI, and all major credit/debit
                cards. Payment terms will be discussed during the quotation
                process.
              </p>
            </details>
          </div>
        </div>
      </section>
    </div>
  );
}
