'use client';

/**
 * Cart Icon Component
 * Displays shopping cart icon with item count badge
 * Used in the header for quick cart access
 */

import { ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import { useEffect, useState } from 'react';

export default function CartIcon() {
  const router = useRouter();
  const { getItemCount } = useCart();
  const [itemCount, setItemCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const count = getItemCount();
    if (count !== itemCount) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsAnimating(true);
      setItemCount(count);
      
      // Reset animation after it completes
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 300);

      return () => clearTimeout(timer);
    }
  }, [getItemCount, itemCount]);

  const handleClick = () => {
    router.push('/cart');
  };

  return (
    <button
      onClick={handleClick}
      className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
      aria-label={`Shopping cart with ${itemCount} items`}
    >
      <ShoppingCart className="w-6 h-6 text-gray-700" />
      
      {itemCount > 0 && (
        <span
          className={`absolute -top-1 -right-1 bg-orange-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center transition-transform ${
            isAnimating ? 'scale-125' : 'scale-100'
          }`}
          aria-label={`${itemCount} items in cart`}
        >
          {itemCount > 9 ? '9+' : itemCount}
        </span>
      )}
    </button>
  );
}
