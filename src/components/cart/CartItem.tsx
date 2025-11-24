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
    <div className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
      <div className="flex gap-4">
        {/* Item Image */}
        <div className="flex-shrink-0">
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={item.image}
              alt={item.serviceName}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80px, 96px"
            />
          </div>
        </div>

        {/* Item Details */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-start gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-gray-900 text-sm md:text-base truncate">
                {item.serviceName}
              </h3>
              <p className="text-sm text-gray-600 mt-1">
                {item.optionName}
              </p>
              <p className="text-sm font-medium text-orange-600 mt-1">
                ₹{item.price.toLocaleString()} each
              </p>
            </div>

            {/* Remove Button */}
            <button
              onClick={handleRemoveClick}
              className="flex-shrink-0 min-h-[44px] min-w-[44px] flex items-center justify-center text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors touch-manipulation"
              aria-label="Remove item from cart"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>

          {/* Quantity Selector and Total */}
          <div className="flex items-center justify-between mt-4">
            <QuantitySelector
              quantity={item.quantity}
              onQuantityChange={handleQuantityChange}
              size="md"
            />
            <div className="text-right">
              <p className="text-xs text-gray-500">Total</p>
              <p className="text-base md:text-lg font-bold text-gray-900">
                ₹{itemTotal.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      {showConfirmation && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-sm text-red-800 mb-3">
            Are you sure you want to remove this item from your cart?
          </p>
          <div className="flex gap-2">
            <button
              onClick={handleConfirmRemove}
              className="flex-1 px-4 py-2.5 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors min-h-[44px] touch-manipulation"
            >
              Yes, Remove
            </button>
            <button
              onClick={handleCancelRemove}
              className="flex-1 px-4 py-2.5 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors min-h-[44px] touch-manipulation"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
