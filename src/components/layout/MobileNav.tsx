'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, Briefcase, Mail, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';

export default function MobileNav() {
  const pathname = usePathname();

  const handleCallClick = () => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'phone_click', {
        event_category: 'engagement',
        event_label: 'mobile_nav_call',
      });
    }
  };

  const navItems = [
    {
      label: 'Home',
      href: '/',
      icon: Home,
    },
    {
      label: 'Services',
      href: '/services',
      icon: Briefcase,
    },
    {
      label: 'Contact',
      href: '/contact',
      icon: Mail,
    },
    {
      label: 'Call',
      href: `tel:${BUSINESS_INFO.phone.primary}`,
      icon: Phone,
      isExternal: true,
      onClick: handleCallClick,
    },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-lg md:hidden"
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          if (item.isExternal) {
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={item.onClick}
                className={`flex flex-col items-center justify-center flex-1 h-full space-y-1 transition-colors ${
                  isActive
                    ? 'text-orange-600'
                    : 'text-gray-600 hover:text-orange-600'
                }`}
                aria-label={item.label}
              >
                <Icon className="w-6 h-6" />
                <span className="text-xs font-medium">{item.label}</span>
              </a>
            );
          }

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 h-full space-y-1 transition-colors ${
                isActive
                  ? 'text-orange-600'
                  : 'text-gray-600 hover:text-orange-600'
              }`}
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
            >
              <Icon className="w-6 h-6" />
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
