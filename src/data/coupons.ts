/**
 * Coupon Data
 * Available discount coupons for the cart
 */

export interface Coupon {
  code: string;
  description: string;
  discount: number;
  type: 'percentage' | 'fixed';
  minAmount?: number;
}

export const AVAILABLE_COUPONS: Coupon[] = [
  {
    code: 'WELCOME10',
    description: 'Get 10% off on your first order',
    discount: 10,
    type: 'percentage',
  },
  {
    code: 'SAVE500',
    description: 'Flat ₹500 off on orders above ₹5000',
    discount: 500,
    type: 'fixed',
    minAmount: 5000,
  },
  {
    code: 'FIRST20',
    description: 'Get 20% off on your first booking',
    discount: 20,
    type: 'percentage',
  },
];

/**
 * Validate coupon code
 */
export const validateCoupon = (code: string): Coupon | null => {
  const coupon = AVAILABLE_COUPONS.find(
    (c) => c.code.toUpperCase() === code.toUpperCase()
  );
  return coupon || null;
};
