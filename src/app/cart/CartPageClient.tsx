'use client';

/**
 * Cart Page Client Component
 * Displays shopping cart with items, coupon section, and summary
 * Handles WhatsApp booking integration
 */

import { useEffect } from 'react';
import Link from 'next/link';
import { ShoppingCart, ArrowLeft, Package } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import CartItem from '@/components/cart/CartItem';
import CouponSection from '@/components/cart/CouponSection';
import CartSummary from '@/components/cart/CartSummary';
import { openWhatsAppBooking, validateCartForBooking } from '@/lib/whatsapp-booking';
import { trackCartView } from '@/lib/analytics';

export default function CartPageClient() {
  const { cart, updateQuantity, removeItem, getTotal, getItemCount } = useCart();

  const isEmpty = cart.items.length === 0;

  // Track cart view when component mounts or cart changes
  useEffect(() => {
    if (!isEmpty) {
      trackCartView(getItemCount(), getTotal());
    }
  }, [isEmpty, getItemCount, getTotal]);

  /**
   * Handle Book Now - Open WhatsApp with pre-filled message
   */
  const handleBookNow = () => {
    // Validate cart before booking
    const validation = validateCartForBooking(cart);
    
    if (!validation.isValid) {
      alert(validation.error);
      return;
    }

    // Open WhatsApp with booking details
    openWhatsAppBooking(cart);
  };

  /**
   * Handle quantity change for cart item
   */
  const handleQuantityChange = (serviceId: string, optionId: string, quantity: number) => {
    updateQuantity(serviceId, optionId, quantity);
  };

  /**
   * Handle remove item from cart
   */
  const handleRemoveItem = (serviceId: string, optionId: string) => {
    removeItem(serviceId, optionId);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 md:py-12 pb-28 md:pb-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Continue Shopping
          </Link>
          <div className="flex items-center gap-2 md:gap-3">
            <ShoppingCart className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900">
              Shopping Cart
            </h1>
          </div>
          {!isEmpty && (
            <p className="text-sm md:text-base text-gray-600 mt-2">
              {cart.items.length} {cart.items.length === 1 ? 'item' : 'items'} in your cart
            </p>
          )}
        </div>

        {/* Empty Cart State */}
        {isEmpty && (
          <div className="bg-white rounded-lg border border-gray-200 p-8 md:p-12 text-center">
            <div className="max-w-md mx-auto">
              <Package className="w-16 h-16 md:w-20 md:h-20 text-gray-300 mx-auto mb-4" />
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
                Your cart is empty
              </h2>
              <p className="text-sm md:text-base text-gray-600 mb-6">
                Looks like you haven&apos;t added any services yet. Browse our services and add them to your cart.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-orange-600 text-white px-6 md:px-8 py-3 md:py-3.5 text-sm md:text-base rounded-lg font-semibold hover:bg-orange-700 transition-colors min-h-[48px] touch-manipulation"
              >
                Browse Services
              </Link>
            </div>
          </div>
        )}

        {/* Cart Content */}
        {!isEmpty && (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Cart Items and Coupon */}
            <div className="lg:col-span-2 space-y-6">
              {/* Cart Items */}
              <div className="space-y-4">
                {cart.items.map((item) => (
                  <CartItem
                    key={`${item.serviceId}-${item.optionId}`}
                    item={item}
                    onQuantityChange={handleQuantityChange}
                    onRemove={handleRemoveItem}
                  />
                ))}
              </div>

              {/* Coupon Section */}
              <CouponSection />

              {/* Continue Shopping Button - Mobile */}
              <div className="lg:hidden">
                <Link
                  href="/services"
                  className="block w-full text-center bg-white text-orange-600 border-2 border-orange-600 px-6 py-3.5 rounded-lg font-semibold hover:bg-orange-50 transition-colors min-h-[48px] flex items-center justify-center touch-manipulation"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>

            {/* Right Column - Cart Summary */}
            <div className="lg:col-span-1">
              <CartSummary onBookNow={handleBookNow} />
            </div>
          </div>
        )}

        {/* Additional Info */}
        {!isEmpty && (
          <div className="mt-6 md:mt-8 bg-blue-50 border border-blue-200 rounded-lg p-4 md:p-6">
            <h3 className="text-sm md:text-base font-semibold text-blue-900 mb-2">
              📱 What happens next?
            </h3>
            <ul className="text-xs md:text-sm text-blue-800 space-y-1.5 md:space-y-2">
              <li>• Click &quot;Book Now via WhatsApp&quot; to send your booking request</li>
              <li>• Our team will confirm availability and finalize details</li>
              <li>• We&apos;ll schedule your service at your preferred time</li>
              <li>• Payment can be made after service completion</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
