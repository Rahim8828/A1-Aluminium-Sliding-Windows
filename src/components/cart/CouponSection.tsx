'use client';

/**
 * Coupon Section Component
 * Allows users to apply discount coupons to their cart
 * Shows available coupons and validates input
 */

import { useState } from 'react';
import { Tag, Check, AlertCircle } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { AVAILABLE_COUPONS, validateCoupon } from '@/data/coupons';

export default function CouponSection() {
  const { cart, applyCoupon } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);
  const [showAvailableCoupons, setShowAvailableCoupons] = useState(false);

  const handleApplyCoupon = () => {
    const trimmedCode = couponCode.trim();
    
    if (!trimmedCode) {
      setMessage({ type: 'error', text: 'Please enter a coupon code' });
      return;
    }

    const coupon = validateCoupon(trimmedCode);
    
    if (!coupon) {
      setMessage({ type: 'error', text: 'Invalid coupon code' });
      return;
    }

    const success = applyCoupon(trimmedCode);
    
    if (success) {
      setMessage({ 
        type: 'success', 
        text: `Coupon applied! You saved ${coupon.type === 'percentage' ? `${coupon.discount}%` : `₹${coupon.discount}`}` 
      });
      setCouponCode('');
      setShowAvailableCoupons(false);
    } else {
      setMessage({ type: 'error', text: 'Failed to apply coupon' });
    }

    // Clear message after 5 seconds
    setTimeout(() => setMessage(null), 5000);
  };

  const handleQuickApply = (code: string) => {
    setCouponCode(code);
    setShowAvailableCoupons(false);
  };

  const hasAppliedCoupon = !!cart.appliedCoupon;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 md:p-4">
      <div className="flex items-center gap-2 mb-2 md:mb-3">
        <Tag className="w-4 h-4 text-orange-600" />
        <h3 className="text-xs md:text-base font-semibold text-gray-900">Apply Coupon</h3>
      </div>

      {/* Coupon Input */}
      {!hasAppliedCoupon && (
        <div className="space-y-2 md:space-y-3">
          <div className="flex gap-2">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
              placeholder="Enter code"
              className="flex-1 px-3 py-2.5 text-xs md:text-base border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all min-h-[44px]"
              aria-label="Coupon code"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleApplyCoupon();
                }
              }}
            />
            <button
              onClick={handleApplyCoupon}
              className="px-4 md:px-6 py-2.5 bg-orange-600 text-white text-xs md:text-base font-semibold rounded-lg hover:bg-orange-700 active:bg-orange-800 transition-colors whitespace-nowrap min-h-[44px] touch-manipulation"
              aria-label="Apply coupon"
            >
              Apply
            </button>
          </div>

          {/* Message */}
          {message && (
            <div
              className={`flex items-center gap-2 p-3 rounded-lg ${
                message.type === 'success'
                  ? 'bg-green-50 text-green-800 border border-green-200'
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
              role="alert"
            >
              {message.type === 'success' ? (
                <Check className="w-4 h-4 flex-shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
              )}
              <span className="text-sm">{message.text}</span>
            </div>
          )}

          {/* Available Coupons Toggle */}
          <button
            onClick={() => setShowAvailableCoupons(!showAvailableCoupons)}
            className="text-[11px] md:text-sm text-orange-600 hover:text-orange-700 font-medium transition-colors min-h-[40px] inline-flex items-center touch-manipulation"
          >
            {showAvailableCoupons ? 'Hide' : 'View'} available coupons
          </button>

          {/* Available Coupons List */}
          {showAvailableCoupons && (
            <div className="space-y-2 mt-2 md:mt-3 pt-2 md:pt-3 border-t border-gray-200">
              <p className="text-xs md:text-sm font-medium text-gray-700 mb-2">Available Coupons:</p>
              {AVAILABLE_COUPONS.map((coupon) => (
                <div
                  key={coupon.code}
                  className="flex items-center justify-between p-2 md:p-3 bg-orange-50 border border-orange-200 rounded-lg hover:bg-orange-100 active:bg-orange-100 transition-colors cursor-pointer"
                  onClick={() => handleQuickApply(coupon.code)}
                >
                  <div className="flex-1 min-w-0 pr-2">
                    <p className="font-semibold text-orange-900 text-xs md:text-sm">
                      {coupon.code}
                    </p>
                    <p className="text-[10px] md:text-xs text-orange-700 mt-0.5 md:mt-1 line-clamp-1">
                      {coupon.description}
                    </p>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleQuickApply(coupon.code);
                    }}
                    className="flex-shrink-0 px-3 py-1.5 bg-orange-600 text-white text-[10px] md:text-xs font-semibold rounded hover:bg-orange-700 active:bg-orange-800 transition-colors min-h-[36px] touch-manipulation"
                    aria-label={`Apply ${coupon.code}`}
                  >
                    Apply
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Applied Coupon Display */}
      {hasAppliedCoupon && cart.appliedCoupon && (
        <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
          <Check className="w-5 h-5 text-green-600" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-green-900">
              Coupon Applied: {cart.appliedCoupon.code}
            </p>
            <p className="text-xs text-green-700 mt-1">
              You&apos;re saving{' '}
              {cart.appliedCoupon.type === 'percentage'
                ? `${cart.appliedCoupon.discount}%`
                : `₹${cart.appliedCoupon.discount}`}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
