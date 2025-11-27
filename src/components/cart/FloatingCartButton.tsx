'use client';

/**
 * Floating Cart Button Component
 * Fixed position button showing cart summary
 * Positioned above mobile navigation
 */

import { ShoppingCart } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import { useEffect, useState } from 'react';

export default function FloatingCartButton() {
  const router = useRouter();
  const pathname = usePathname();
  const { getItemCount, getTotal } = useCart();
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const itemCount = getItemCount();
    const shouldBeVisible = itemCount > 0;

    if (shouldBeVisible !== isVisible) {
      if (shouldBeVisible) {
        // Show with animation
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setIsVisible(true);
        setTimeout(() => setIsAnimating(true), 10);
      } else {
        // Hide with animation
        setIsAnimating(false);
        setTimeout(() => setIsVisible(false), 300);
      }
    }
  }, [getItemCount, isVisible]);

  const handleClick = () => {
    router.push('/cart');
  };

  if (!isVisible) return null;

  const itemCount = getItemCount();
  const total = getTotal();

  // Hide on cart page and when BookingSummaryBar is visible
  if (pathname === '/cart') return null;

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-32 right-4 md:bottom-6 md:right-6 z-[55] bg-orange-600 text-white rounded-full shadow-lg hover:bg-orange-700 transition-all duration-300 ${
        isAnimating ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
      aria-label={`View cart with ${itemCount} items, total ₹${total.toLocaleString()}`}
    >
      <div className="flex items-center space-x-3 px-4 py-3 md:px-6 md:py-4">
        <div className="relative">
          <ShoppingCart className="w-5 h-5 md:w-6 md:h-6" />
          <span className="absolute -top-2 -right-2 bg-white text-orange-600 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
            {itemCount > 9 ? '9+' : itemCount}
          </span>
        </div>
        <div className="flex flex-col items-start">
          <span className="text-xs font-medium opacity-90">
            {itemCount} {itemCount === 1 ? 'item' : 'items'}
          </span>
          <span className="text-sm font-bold">
            ₹{total.toLocaleString()}
          </span>
        </div>
      </div>
    </button>
  );
}
