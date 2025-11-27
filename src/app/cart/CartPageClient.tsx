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
  const { cart, updateQuantity, removeItem, getTotal, getDiscount, getItemCount } = useCart();

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
    <div className="min-h-screen bg-gray-50 pt-4 md:pt-12 pb-[180px] md:pb-12">
      <div className="container mx-auto px-3 md:px-4 max-w-7xl">
        {/* Header - Mobile Optimized */}
        <div className="mb-4 md:mb-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-medium mb-3 md:mb-4 transition-colors min-h-[44px] touch-manipulation"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm md:text-base">Continue Shopping</span>
          </Link>
          <div className="flex items-center gap-2 md:gap-3">
            <ShoppingCart className="w-5 h-5 md:w-8 md:h-8 text-orange-600" />
            <h1 className="text-lg md:text-2xl lg:text-3xl font-bold text-gray-900">
              Shopping Cart
            </h1>
          </div>
          {!isEmpty && (
            <p className="text-xs md:text-base text-gray-600 mt-1.5 md:mt-2">
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
          <div className="grid lg:grid-cols-3 gap-4 md:gap-8">
            {/* Left Column - Cart Items and Coupon */}
            <div className="lg:col-span-2 space-y-3 md:space-y-6">
              {/* Cart Items */}
              <div className="space-y-3 md:space-y-4">
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
            </div>

            {/* Right Column - Cart Summary (Desktop Only) */}
            <div className="hidden lg:block lg:col-span-1">
              <CartSummary onBookNow={handleBookNow} />
            </div>
          </div>
        )}

        {/* Mobile Cart Summary - Fixed at Bottom */}
        {!isEmpty && (
          <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t-2 border-gray-200 shadow-2xl z-40">
            <div className="px-3 py-3">
              {/* Price Summary */}
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-gray-200">
                <div className="flex-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xs text-gray-600">Subtotal:</span>
                    <span className="text-sm font-semibold text-gray-900">
                      ₹{cart.items.reduce((sum, item) => sum + item.price * item.quantity, 0).toLocaleString()}
                    </span>
                  </div>
                  {getDiscount() > 0 && (
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-xs text-green-600">Discount:</span>
                      <span className="text-sm font-semibold text-green-600">
                        -₹{getDiscount().toLocaleString()}
                      </span>
                    </div>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-600">Total</p>
                  <p className="text-xl font-bold text-orange-600">
                    ₹{getTotal().toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Book Now Button */}
              <button
                onClick={handleBookNow}
                className="w-full bg-green-600 text-white py-3.5 rounded-lg font-semibold hover:bg-green-700 active:bg-green-800 transition-colors shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 min-h-[52px] touch-manipulation"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                <span className="text-base">Book Now via WhatsApp</span>
              </button>
            </div>
          </div>
        )}

        {/* Additional Info - Mobile Optimized */}
        {!isEmpty && (
          <div className="mt-4 md:mt-8 bg-blue-50 border border-blue-200 rounded-lg p-3 md:p-6 mb-4">
            <h3 className="text-xs md:text-base font-semibold text-blue-900 mb-2 flex items-center gap-1.5">
              <span>📱</span>
              <span>What happens next?</span>
            </h3>
            <ul className="text-[11px] md:text-sm text-blue-800 space-y-1 md:space-y-2">
              <li>• Click &quot;Book Now&quot; to send booking via WhatsApp</li>
              <li>• Our team will confirm availability</li>
              <li>• We&apos;ll schedule at your preferred time</li>
              <li>• Payment after service completion</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
