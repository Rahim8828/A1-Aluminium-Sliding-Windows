'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Home, Wrench, ShoppingBag, ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

export default function MobileNav() {
  const pathname = usePathname();
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  const navItems = [
    {
      label: 'Home',
      href: '/',
      icon: Home,
    },
    {
      label: 'Services',
      href: '/services',
      icon: Wrench,
    },
    {
      label: 'Products',
      href: '/products',
      icon: ShoppingBag,
    },
    {
      label: 'Cart',
      href: '/cart',
      icon: ShoppingCart,
      badge: itemCount,
    },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg md:hidden safe-area-bottom overflow-hidden"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
      aria-label="Mobile navigation"
    >
      <div className="flex items-center justify-around min-h-[64px] overflow-x-hidden">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href || 
            (item.href === '/services' && pathname?.startsWith('/services')) ||
            (item.href === '/products' && pathname?.startsWith('/products'));

          return (
            <Link
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center flex-1 min-h-[64px] py-2 px-1 transition-colors relative touch-manipulation ${
                isActive
                  ? 'text-orange-600'
                  : 'text-gray-600 active:text-orange-600'
              }`}
              aria-label={item.label}
              aria-current={isActive ? 'page' : undefined}
            >
              {/* Active Indicator */}
              {isActive && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-orange-600 rounded-b-full" />
              )}

              {/* Icon with Badge */}
              <div className="relative mb-1">
                <Icon className="w-5 h-5" />
                {item.badge !== undefined && item.badge > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-orange-600 text-white text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                    {item.badge > 9 ? '9+' : item.badge}
                  </span>
                )}
              </div>

              <span className="text-[10px] font-medium leading-tight">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
