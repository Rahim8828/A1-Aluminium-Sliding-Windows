'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Phone, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, NAV_LINKS, SERVICE_CATEGORIES } from '@/lib/constants';
import { trackCTAClick, trackPhoneClick, trackWhatsAppClick } from '@/lib/analytics';
import { CartIcon } from '@/components/cart';

interface HeaderProps {
  transparent?: boolean;
}

export default function Header({ transparent = false }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled || !transparent
      ? 'bg-white shadow-md backdrop-blur-sm'
      : 'bg-transparent'
  }`;

  const textClasses = `transition-colors duration-300 ${
    isScrolled || !transparent ? 'text-gray-900' : 'text-white'
  }`;

  const handleCallClick = () => {
    trackCTAClick('Call Now', 'Header', 'Phone Call');
    trackPhoneClick(BUSINESS_INFO.phone.primary, 'Header');
  };

  const handleWhatsAppClick = () => {
    trackCTAClick('WhatsApp', 'Header', 'WhatsApp');
    trackWhatsAppClick('Header');
  };

  return (
    <header className={headerClasses}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/A1-Logo.png" 
              alt="A1 Aluminium, Glass & Netting Solutions" 
              width={120}
              height={60}
              className="h-10 md:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              if (link.label === 'Services') {
                return (
                  <div
                    key={link.label}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center space-x-1 font-medium hover:text-orange-600 transition-colors ${textClasses}`}
                      aria-expanded={isServicesOpen}
                      aria-haspopup="true"
                      aria-label="Services menu"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setIsServicesOpen(!isServicesOpen);
                        } else if (e.key === 'Escape') {
                          setIsServicesOpen(false);
                        }
                      }}
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-4 h-4" aria-hidden="true" />
                    </button>

                    {/* Services Dropdown */}
                    {isServicesOpen && (
                      <div 
                        className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 border border-gray-100"
                        role="menu"
                        aria-label="Services submenu"
                      >
                        {SERVICE_CATEGORIES.map((category) => (
                          <Link
                            key={category.id}
                            href={category.href}
                            className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600 transition-colors focus:bg-orange-50 focus:text-orange-600"
                            role="menuitem"
                          >
                            {category.label}
                          </Link>
                        ))}
                        <div className="border-t border-gray-100 mt-2 pt-2">
                          <Link
                            href="/services"
                            className="block px-4 py-3 text-orange-600 font-medium hover:bg-orange-50 transition-colors focus:bg-orange-50"
                            role="menuitem"
                          >
                            View All Services →
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-medium hover:text-orange-600 transition-colors ${textClasses}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <CartIcon />
            <a
              href={`tel:${BUSINESS_INFO.phone.primary}`}
              onClick={handleCallClick}
              className="flex items-center space-x-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
              aria-label="Call us now"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi, I'm interested in your services`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 ${textClasses}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <nav className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => {
                if (link.label === 'Services') {
                  return (
                    <div key={link.label}>
                      <button
                        onClick={() => setIsServicesOpen(!isServicesOpen)}
                        className="flex items-center justify-between w-full text-left font-medium text-gray-900 hover:text-orange-600 transition-colors"
                        aria-expanded={isServicesOpen}
                        aria-label="Services menu"
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            isServicesOpen ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      {isServicesOpen && (
                        <div className="mt-2 ml-4 space-y-2">
                          {SERVICE_CATEGORIES.map((category) => (
                            <Link
                              key={category.id}
                              href={category.href}
                              className="block py-2 text-gray-600 hover:text-orange-600 transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {category.label}
                            </Link>
                          ))}
                          <Link
                            href="/services"
                            className="block py-2 text-orange-600 font-medium hover:text-orange-700 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            View All Services →
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="font-medium text-gray-900 hover:text-orange-600 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Mobile CTA Buttons */}
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <a
                  href={`tel:${BUSINESS_INFO.phone.primary}`}
                  onClick={handleCallClick}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors font-medium"
                  aria-label="Call us now"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </a>
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp}?text=Hi, I'm interested in your services`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                  aria-label="Contact us on WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
