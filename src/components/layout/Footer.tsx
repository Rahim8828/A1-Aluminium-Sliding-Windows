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
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold font-heading mb-4">
              A1 <span className="text-orange-500">Aluminium</span>
            </h3>
            <p className="text-sm mb-4">{BUSINESS_INFO.description}</p>
            <div className="flex space-x-4" role="list" aria-label="Social media links">
              <a
                href={BUSINESS_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] min-w-[44px] flex items-center justify-center hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                aria-label="Visit our Facebook page"
              >
                <Facebook className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href={BUSINESS_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] min-w-[44px] flex items-center justify-center hover:text-pink-500 transition-colors focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                aria-label="Visit our Instagram page"
              >
                <Instagram className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href={BUSINESS_INFO.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] min-w-[44px] flex items-center justify-center hover:text-orange-400 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                aria-label="Visit our Twitter page"
              >
                <Twitter className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href={BUSINESS_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] min-w-[44px] flex items-center justify-center hover:text-orange-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-600 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                aria-label="Visit our LinkedIn page"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </a>
              <a
                href={BUSINESS_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] min-w-[44px] flex items-center justify-center hover:text-red-500 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                aria-label="Visit our YouTube channel"
              >
                <Youtube className="w-5 h-5" aria-hidden="true" />
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
                <div>
                  <a
                    href={`tel:${BUSINESS_INFO.phone.primary}`}
                    onClick={() => trackPhoneClick(BUSINESS_INFO.phone.primary, 'Footer')}
                    className="text-sm hover:text-orange-500 transition-colors block focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                    aria-label={`Call primary phone number ${BUSINESS_INFO.phone.display}`}
                  >
                    {BUSINESS_INFO.phone.display}
                  </a>
                  <a
                    href={`tel:${BUSINESS_INFO.phone.secondary}`}
                    onClick={() => trackPhoneClick(BUSINESS_INFO.phone.secondary, 'Footer')}
                    className="text-sm hover:text-orange-500 transition-colors block focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
                    aria-label={`Call secondary phone number ${BUSINESS_INFO.phone.secondary}`}
                  >
                    {BUSINESS_INFO.phone.secondary}
                  </a>
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
                  <p>Mon-Fri: {BUSINESS_INFO.hours.weekdays}</p>
                  <p>Sat: {BUSINESS_INFO.hours.saturday}</p>
                  <p>Sun: {BUSINESS_INFO.hours.sunday}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap justify-center gap-6">
            {TRUST_BADGES.map((badge) => (
              <div
                key={badge}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-lg"
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-sm font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-8 pt-8 border-t border-gray-800">
          <h4 className="text-white text-center text-lg font-semibold mb-4">
            Service Areas in Mumbai
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {BUSINESS_INFO.serviceAreas.map((area) => (
              <span
                key={area}
                className="text-sm px-3 py-1 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-400 hover:text-orange-500 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-gray-400 hover:text-orange-500 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
