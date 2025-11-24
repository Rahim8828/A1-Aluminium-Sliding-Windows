/**
 * Coupon Data
 * Available discount coupons for the cart
 */

import { Coupon } from '@/types';

export const AVAILABLE_COUPONS: Coupon[] = [
  {
    code: 'WELCOME10',
    description: 'Get 10% off on your first booking',
    discount: 10,
    type: 'percentage',
  },
  {
    code: 'SAVE500',
    description: 'Flat ₹500 off on orders above ₹5000',
    discount: 500,
    type: 'fixed',
  },
  {
    code: 'FIRST20',
    description: 'Special 20% discount for new customers',
    discount: 20,
    type: 'percentage',
  },
  {
    code: 'MONSOON15',
    description: 'Monsoon special - 15% off on all services',
    discount: 15,
    type: 'percentage',
  },
  {
    code: 'FLAT1000',
    description: 'Get ₹1000 off on orders above ₹10000',
    discount: 1000,
    type: 'fixed',
  },
];

/**
 * Validate coupon code
 * Returns the coupon if valid, null otherwise
 */
export function validateCoupon(code: string): Coupon | null {
  const normalizedCode = code.toUpperCase().trim();
  return AVAILABLE_COUPONS.find((coupon) => coupon.code === normalizedCode) || null;
}

/**
 * Get coupon by code
 */
export function getCouponByCode(code: string): Coupon | undefined {
  const normalizedCode = code.toUpperCase().trim();
  return AVAILABLE_COUPONS.find((coupon) => coupon.code === normalizedCode);
}
