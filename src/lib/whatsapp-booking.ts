/**
 * WhatsApp Booking Integration
 * 
 * This module provides functionality to format cart data into WhatsApp messages
 * and open WhatsApp with pre-filled booking information.
 */

import { Cart } from '@/types';
import { BUSINESS_INFO } from './constants';
import { trackBookingInitiated as trackBooking } from './analytics';

/**
 * Format cart items and totals into a WhatsApp message
 * @param cart - The cart object containing items and coupon information
 * @returns Formatted WhatsApp message string
 */
export const formatWhatsAppMessage = (cart: Cart): string => {
  // Format each cart item
  const items = cart.items
    .map(
      (item) =>
        `• ${item.serviceName} - ${item.optionName}\n  ₹${item.price.toLocaleString()} × ${item.quantity} = ₹${(item.price * item.quantity).toLocaleString()}`
    )
    .join('\n\n');

  // Calculate totals
  const subtotal = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  let discount = 0;
  if (cart.appliedCoupon) {
    if (cart.appliedCoupon.type === 'percentage') {
      discount = Math.round((subtotal * cart.appliedCoupon.discount) / 100);
    } else {
      discount = cart.appliedCoupon.discount;
    }
  }
  
  const total = Math.max(0, subtotal - discount);

  // Build the message
  let message = `🛋️ *New Booking Request*\n\n`;
  message += `📋 *Services:*\n${items}\n\n`;
  message += `💰 *Item Total:* ₹${subtotal.toLocaleString()}\n`;
  
  if (discount > 0 && cart.appliedCoupon) {
    message += `🎟️ *Discount (${cart.appliedCoupon.code}):* -₹${discount.toLocaleString()}\n`;
  }
  
  message += `💵 *Total Amount:* ₹${total.toLocaleString()}\n\n`;
  message += `📍 *Location:* [Please specify your location]\n`;
  message += `📅 *Preferred Date:* [Please specify your preferred date]\n\n`;
  message += `_I would like to confirm this booking. Please contact me to discuss the details._`;

  return message;
};

/**
 * Open WhatsApp with pre-filled booking message
 * @param cart - The cart object containing items and coupon information
 * @param phoneNumber - Optional phone number (defaults to business WhatsApp number)
 */
export const openWhatsAppBooking = (cart: Cart, phoneNumber?: string): void => {
  // Use provided phone number or default to business WhatsApp
  const whatsappNumber = phoneNumber || BUSINESS_INFO.whatsapp;
  
  // Remove any non-digit characters from phone number
  const cleanNumber = whatsappNumber.replace(/\D/g, '');
  
  // Format the message
  const message = formatWhatsAppMessage(cart);
  
  // Create WhatsApp URL with encoded message
  const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
  
  // Calculate values for analytics
  const itemCount = cart.items.length;
  const cartValue = cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  
  let discount = 0;
  if (cart.appliedCoupon) {
    if (cart.appliedCoupon.type === 'percentage') {
      discount = Math.round((cartValue * cart.appliedCoupon.discount) / 100);
    } else {
      discount = cart.appliedCoupon.discount;
    }
  }
  
  const finalValue = Math.max(0, cartValue - discount);
  
  // Track booking initiation event with comprehensive data
  trackBooking(
    itemCount,
    cartValue,
    discount,
    finalValue,
    cart.appliedCoupon?.code
  );
  
  // Open WhatsApp in new window/tab
  if (typeof window !== 'undefined') {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  }
};

/**
 * Validate cart before booking
 * @param cart - The cart object to validate
 * @returns Object with isValid flag and error message if invalid
 */
export const validateCartForBooking = (
  cart: Cart
): { isValid: boolean; error?: string } => {
  // Check if cart has items
  if (!cart.items || cart.items.length === 0) {
    return {
      isValid: false,
      error: 'Your cart is empty. Please add services before booking.',
    };
  }

  // Check if all items have valid quantities
  const hasInvalidQuantity = cart.items.some(
    (item) => item.quantity < 1 || item.quantity > 10
  );
  
  if (hasInvalidQuantity) {
    return {
      isValid: false,
      error: 'Invalid quantity detected. Please ensure all quantities are between 1 and 10.',
    };
  }

  // Check if all items have valid prices
  const hasInvalidPrice = cart.items.some((item) => item.price <= 0);
  
  if (hasInvalidPrice) {
    return {
      isValid: false,
      error: 'Invalid pricing detected. Please refresh and try again.',
    };
  }

  return { isValid: true };
};
