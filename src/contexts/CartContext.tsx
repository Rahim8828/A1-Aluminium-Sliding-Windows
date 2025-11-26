'use client';

/**
 * Cart Context
 * Provides cart state management and actions throughout the application
 */

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Cart, CartItem, CartState } from '@/types';
import { saveCart, loadCart, clearCart as clearStoredCart } from '@/lib/cart-storage';
import { trackAddToCart, trackRemoveFromCart, trackCouponApply } from '@/lib/analytics';

const CART_VERSION = 1;

// Initial cart state
const initialCart: Cart = {
  items: [],
  version: CART_VERSION,
};

// Create context
const CartContext = createContext<CartState | undefined>(undefined);

/**
 * Cart Provider Component
 */
export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart>(initialCart);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = loadCart();
    if (savedCart) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCart(savedCart);
    }
    setIsInitialized(true);
  }, []);

  // Save cart to localStorage whenever it changes (after initialization)
  useEffect(() => {
    if (isInitialized) {
      saveCart(cart);
    }
  }, [cart, isInitialized]);

  /**
   * Add item to cart or update quantity if already exists
   */
  const addItem = useCallback((item: CartItem) => {
    setCart((prev) => {
      const existingIndex = prev.items.findIndex(
        (i) => i.serviceId === item.serviceId && i.optionId === item.optionId
      );

      if (existingIndex >= 0) {
        // Item exists, update quantity
        const newItems = [...prev.items];
        const newQuantity = newItems[existingIndex].quantity + item.quantity;
        // Cap at maximum of 10
        newItems[existingIndex].quantity = Math.min(newQuantity, 10);
        
        // Track the quantity added
        trackAddToCart(
          item.serviceId,
          item.serviceName,
          item.optionName,
          item.price,
          item.quantity
        );
        
        return { ...prev, items: newItems };
      }

      // New item, add to cart
      trackAddToCart(
        item.serviceId,
        item.serviceName,
        item.optionName,
        item.price,
        item.quantity
      );
      
      return { ...prev, items: [...prev.items, { ...item, quantity: Math.min(item.quantity, 10) }] };
    });
  }, []);

  /**
   * Update quantity of an existing cart item
   */
  const updateQuantity = useCallback((serviceId: string, optionId: string, quantity: number) => {
    setCart((prev) => {
      const existingIndex = prev.items.findIndex(
        (i) => i.serviceId === serviceId && i.optionId === optionId
      );

      if (existingIndex < 0) return prev;

      // Ensure quantity is between 1 and 10
      const newQuantity = Math.max(1, Math.min(quantity, 10));

      const newItems = [...prev.items];
      newItems[existingIndex].quantity = newQuantity;

      return { ...prev, items: newItems };
    });
  }, []);

  /**
   * Remove item from cart
   */
  const removeItem = useCallback((serviceId: string, optionId: string) => {
    setCart((prev) => {
      // Find the item to track before removing
      const itemToRemove = prev.items.find(
        (item) => item.serviceId === serviceId && item.optionId === optionId
      );
      
      if (itemToRemove) {
        trackRemoveFromCart(
          itemToRemove.serviceId,
          itemToRemove.serviceName,
          itemToRemove.optionName,
          itemToRemove.price,
          itemToRemove.quantity
        );
      }
      
      return {
        ...prev,
        items: prev.items.filter(
          (item) => !(item.serviceId === serviceId && item.optionId === optionId)
        ),
      };
    });
  }, []);

  /**
   * Apply coupon code to cart
   * Returns true if coupon was applied successfully
   */
  const applyCoupon = useCallback((code: string): boolean => {
    // This is a placeholder - in a real app, you'd validate against a coupon database
    // For now, we'll accept any code and apply a 10% discount
    const validCoupons: Record<string, { discount: number; type: 'percentage' | 'fixed' }> = {
      'WELCOME10': { discount: 10, type: 'percentage' },
      'SAVE500': { discount: 500, type: 'fixed' },
      'FIRST20': { discount: 20, type: 'percentage' },
    };

    const coupon = validCoupons[code.toUpperCase()];
    
    if (coupon) {
      setCart((prev) => {
        // Calculate discount amount for tracking
        const subtotal = prev.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
        const discountAmount = coupon.type === 'percentage' 
          ? Math.round((subtotal * coupon.discount) / 100)
          : coupon.discount;
        
        // Track coupon application
        trackCouponApply(code.toUpperCase(), discountAmount, coupon.type);
        
        return {
          ...prev,
          appliedCoupon: {
            code: code.toUpperCase(),
            discount: coupon.discount,
            type: coupon.type,
          },
        };
      });
      return true;
    }

    return false;
  }, []);

  /**
   * Remove applied coupon
   */
  const removeCoupon = useCallback(() => {
    setCart((prev) => ({
      ...prev,
      appliedCoupon: undefined,
    }));
  }, []);

  /**
   * Clear all items from cart
   */
  const clearCart = useCallback(() => {
    setCart(initialCart);
    clearStoredCart();
  }, []);

  /**
   * Calculate subtotal (before discount)
   */
  const getSubtotal = useCallback((): number => {
    return cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cart.items]);

  /**
   * Calculate discount amount
   */
  const getDiscount = useCallback((): number => {
    if (!cart.appliedCoupon) return 0;

    const subtotal = getSubtotal();
    
    if (cart.appliedCoupon.type === 'percentage') {
      return Math.round((subtotal * cart.appliedCoupon.discount) / 100);
    }
    
    return cart.appliedCoupon.discount;
  }, [cart.appliedCoupon, getSubtotal]);

  /**
   * Calculate total (after discount)
   */
  const getTotal = useCallback((): number => {
    const subtotal = getSubtotal();
    const discount = getDiscount();
    return Math.max(0, subtotal - discount);
  }, [getSubtotal, getDiscount]);

  /**
   * Get total number of items in cart
   */
  const getItemCount = useCallback((): number => {
    return cart.items.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart.items]);

  const value: CartState = {
    cart,
    addItem,
    updateQuantity,
    removeItem,
    applyCoupon,
    removeCoupon,
    clearCart,
    getTotal,
    getSubtotal,
    getDiscount,
    getItemCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

/**
 * Hook to access cart context
 * Must be used within CartProvider
 */
export function useCart(): CartState {
  const context = useContext(CartContext);
  
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  
  return context;
}
