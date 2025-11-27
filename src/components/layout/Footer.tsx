'use client';

import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
} from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS, SERVICE_CATEGORIES, TRUST_BADGES } from '@/lib/constants';
import { trackPhoneClick } from '@/lib/analytics';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pt-0 pb-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Company Info with Logo */}
          <div>
            <div className="mb-3 md:mb-4 pt-4 md:pt-0">
              <img 
                src="/website-images/A1_favicon.svg" 
                alt="A1 Aluminium Logo" 
                className="h-12 w-12 md:h-16 md:w-16 object-contain"
              />
            </div>
            <p className="text-xs md:text-sm mb-3 md:mb-4 leading-relaxed">{BUSINESS_INFO.description}</p>
            <div className="flex gap-2 md:gap-3" role="list" aria-label="Social media links">
              <a
                href={BUSINESS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gray-800 hover:bg-orange-500 rounded-full transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
              </a>
              <a
                href={BUSINESS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gray-800 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 rounded-full transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-pink-500"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
              </a>
              <a
                href={BUSINESS_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-400 rounded-full transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-label="Visit our Twitter page"
              >
                <Twitter className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
              </a>
              <a
                href={BUSINESS_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gray-800 hover:bg-blue-600 rounded-full transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-600"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
              </a>
              <a
                href={BUSINESS_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gray-800 hover:bg-red-600 rounded-full transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-red-600"
                aria-label="Visit our YouTube channel"
              >
                <Youtube className="w-4 h-4 md:w-5 md:h-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-orange-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {SERVICE_CATEGORIES.map((category) => (
                <li key={category.id}>
                  <Link
                    href={category.href}
                    className="text-sm hover:text-orange-500 transition-colors"
                  >
                    {category.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="space-y-1">
                  <a
                    href={`tel:${BUSINESS_INFO.phone.primary}`}
                    onClick={() => trackPhoneClick(BUSINESS_INFO.phone.primary, 'Footer')}
                    className="text-sm hover:text-orange-500 transition-colors block font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-1"
                    aria-label={`Call primary phone number ${BUSINESS_INFO.phone.display}`}
                  >
                    📞 {BUSINESS_INFO.phone.display}
                  </a>
                  {BUSINESS_INFO.phone.secondary && (
                    <a
                      href={`tel:${BUSINESS_INFO.phone.secondary}`}
                      onClick={() => trackPhoneClick(BUSINESS_INFO.phone.secondary, 'Footer')}
                      className="text-sm hover:text-orange-500 transition-colors block focus:outline-none focus:ring-2 focus:ring-orange-500 rounded px-1"
                      aria-label={`Call secondary phone number ${BUSINESS_INFO.phone.secondary}`}
                    >
                      📞 {BUSINESS_INFO.phone.secondary}
                    </a>
                  )}
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href={`mailto:${BUSINESS_INFO.email.primary}`}
                  className="text-sm hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                  aria-label={`Send email to ${BUSINESS_INFO.email.primary}`}
                >
                  {BUSINESS_INFO.email.primary}
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <address className="text-sm not-italic">{BUSINESS_INFO.address.full}</address>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <div className="text-sm">
                  <p className="font-semibold mb-1">Business Hours:</p>
                  <p>{BUSINESS_INFO.hours.display}</p>
                  <p className="text-xs text-gray-400 mt-1">{BUSINESS_INFO.hours.emergency}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-800">
          <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-2 md:gap-6">
            {TRUST_BADGES.map((badge) => (
              <div
                key={badge}
                className="flex items-center space-x-2 px-3 md:px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-xs md:text-sm font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-800">
          <h4 className="text-white text-center text-sm md:text-lg font-semibold mb-3 md:mb-4">
            📍 Service Areas in Mumbai
          </h4>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {BUSINESS_INFO.serviceAreas.map((area) => (
              <span
                key={area}
                className="text-xs md:text-sm px-2 md:px-3 py-1 bg-gray-800 rounded-full hover:bg-orange-500 hover:text-white transition-all cursor-default"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-3 pb-16 lg:pb-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0">
            <p className="text-xs md:text-sm text-gray-400 text-center md:text-left">
              © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
              <span className="hidden md:inline"> | Made with ❤️ in Mumbai</span>
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
              <Link
                href="/privacy-policy"
                className="text-xs md:text-sm text-gray-400 hover:text-orange-500 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-xs md:text-sm text-gray-400 hover:text-orange-500 transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap.xml"
                className="text-xs md:text-sm text-gray-400 hover:text-orange-500 transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
