/**
 * Cart Storage Utilities
 * Handles localStorage operations for cart persistence with versioning
 */

import { Cart } from '@/types';

const CART_STORAGE_KEY = 'a1-aluminium-cart';
const CART_VERSION = 1;

interface StoredCart extends Cart {
  timestamp: number;
}

/**
 * Save cart to localStorage with version and timestamp
 */
export const saveCart = (cart: Cart): void => {
  if (typeof window === 'undefined') return;

  try {
    const cartData: StoredCart = {
      ...cart,
      timestamp: Date.now(),
    };
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartData));
  } catch (error) {
    console.error('Failed to save cart to localStorage:', error);
  }
};

/**
 * Load cart from localStorage with version validation
 * Returns null if cart doesn't exist or version mismatch
 */
export const loadCart = (): Cart | null => {
  if (typeof window === 'undefined') return null;

  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (!stored) return null;

    const cartData: StoredCart = JSON.parse(stored);

    // Check version compatibility
    if (cartData.version !== CART_VERSION) {
      console.warn('Cart version mismatch, clearing old cart');
      clearCart();
      return null;
    }

    // Return cart without timestamp
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { timestamp, ...cart } = cartData;
    return cart;
  } catch (error) {
    console.error('Failed to load cart from localStorage:', error);
    return null;
  }
};

/**
 * Clear cart from localStorage
 */
export const clearCart = (): void => {
  if (typeof window === 'undefined') return;

  try {
    localStorage.removeItem(CART_STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear cart from localStorage:', error);
  }
};

/**
 * Check if cart exists in localStorage
 */
export const hasStoredCart = (): boolean => {
  if (typeof window === 'undefined') return false;

  try {
    return localStorage.getItem(CART_STORAGE_KEY) !== null;
  } catch {
    return false;
  }
};
