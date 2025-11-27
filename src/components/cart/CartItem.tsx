'use client';

/**
 * Cart Item Component
 * Displays individual cart item with image, details, quantity selector, and remove button
 */

import Image from 'next/image';
import { Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '@/types';
import QuantitySelector from '@/components/ui/QuantitySelector';
import { useState } from 'react';

interface CartItemProps {
  item: CartItemType;
  onQuantityChange: (serviceId: string, optionId: string, quantity: number) => void;
  onRemove: (serviceId: string, optionId: string) => void;
}

export default function CartItem({ item, onQuantityChange, onRemove }: CartItemProps) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleQuantityChange = (quantity: number) => {
    onQuantityChange(item.serviceId, item.optionId, quantity);
  };

  const handleRemoveClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmRemove = () => {
    onRemove(item.serviceId, item.optionId);
    setShowConfirmation(false);
  };

  const handleCancelRemove = () => {
    setShowConfirmation(false);
  };

  const itemTotal = item.price * item.quantity;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-3 md:p-4 hover:shadow-md transition-shadow">
      <div className="flex gap-3 md:gap-4">
        {/* Item Image */}
        <div className="flex-shrink-0">
          <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={item.image}
              alt={item.serviceName}
              fill
              className="object-contain p-1"
              sizes="(max-width: 768px) 64px, 96px"
            />
          </div>
        </div>

        {/* Item Details */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 text-xs md:text-base line-clamp-1">
                {item.serviceName}
              </h3>
              <p className="text-[11px] md:text-sm text-gray-600 mt-0.5 md:mt-1 line-clamp-1">
                {item.optionName}
              </p>
              <p className="text-xs md:text-sm font-medium text-orange-600 mt-1">
                ₹{item.price.toLocaleString()} each
              </p>
            </div>

            {/* Remove Button */}
            <button
              onClick={handleRemoveClick}
              className="flex-shrink-0 min-h-[40px] min-w-[40px] md:min-h-[44px] md:min-w-[44px] flex items-center justify-center text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors touch-manipulation"
              aria-label="Remove item from cart"
            >
              <Trash2 className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

          {/* Quantity Selector and Total */}
          <div className="flex items-center justify-between mt-3 md:mt-4">
            <QuantitySelector
              quantity={item.quantity}
              onQuantityChange={handleQuantityChange}
              size="sm"
            />
            <div className="text-right">
              <p className="text-[10px] md:text-xs text-gray-500">Total</p>
              <p className="text-sm md:text-lg font-bold text-gray-900">
                ₹{itemTotal.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog - Mobile Optimized */}
      {showConfirmation && (
        <div className="mt-3 md:mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-xs md:text-sm text-red-800 mb-2 md:mb-3">
            Remove this item from cart?
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleConfirmRemove}
              className="flex-1 px-3 md:px-4 py-2.5 bg-red-600 text-white text-xs md:text-sm font-medium rounded-lg hover:bg-red-700 active:bg-red-800 transition-colors min-h-[44px] touch-manipulation"
            >
              Yes, Remove
            </button>
            <button
              onClick={handleCancelRemove}
              className="flex-1 px-3 md:px-4 py-2.5 bg-white text-gray-700 text-xs md:text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-50 active:bg-gray-100 transition-colors min-h-[44px] touch-manipulation"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
