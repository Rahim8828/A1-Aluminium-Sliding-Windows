'use client';

/**
 * Cart Summary Component
 * Displays payment summary with subtotal, discount, and total
 * Includes Book Now button for WhatsApp booking
 */

import { X } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

interface CartSummaryProps {
  onBookNow: () => void;
}

export default function CartSummary({ onBookNow }: CartSummaryProps) {
  const { cart, getSubtotal, getDiscount, getTotal, removeCoupon } = useCart();

  const subtotal = getSubtotal();
  const discount = getDiscount();
  const total = getTotal();

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 md:p-6 sticky top-24">
      <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
        Order Summary
      </h2>

      {/* Subtotal */}
      <div className="space-y-3 mb-4">
        <div className="flex justify-between text-sm md:text-base text-gray-700">
          <span>Subtotal</span>
          <span className="font-medium">₹{subtotal.toLocaleString()}</span>
        </div>

        {/* Discount */}
        {discount > 0 && cart.appliedCoupon && (
          <div className="flex justify-between items-center text-green-600">
            <div className="flex items-center gap-2">
              <span>Discount</span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-medium">
                {cart.appliedCoupon.code}
              </span>
              <button
                onClick={removeCoupon}
                className="min-h-[32px] min-w-[32px] flex items-center justify-center hover:bg-green-100 rounded transition-colors touch-manipulation"
                aria-label="Remove coupon"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
            <span className="font-medium">-₹{discount.toLocaleString()}</span>
          </div>
        )}
      </div>

      {/* Total */}
      <div className="border-t border-gray-200 pt-4 mb-4 md:mb-6">
        <div className="flex justify-between items-center">
          <span className="text-base md:text-lg font-semibold text-gray-900">Total</span>
          <span className="text-xl md:text-2xl font-bold text-orange-600">
            ₹{total.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Book Now Button */}
      <button
        onClick={onBookNow}
        className="w-full bg-green-600 text-white py-3.5 md:py-4 rounded-lg font-semibold text-base md:text-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl active:scale-98 flex items-center justify-center gap-2 min-h-[52px] touch-manipulation"
        aria-label="Book now via WhatsApp"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
        Book Now via WhatsApp
      </button>

      {/* Info Text */}
      <p className="text-xs text-gray-500 text-center mt-4">
        You&apos;ll be redirected to WhatsApp to confirm your booking
      </p>
    </div>
  );
}
