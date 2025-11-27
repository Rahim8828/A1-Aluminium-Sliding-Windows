'use client';

/**
 * Service Option Card Component
 * Displays individual service option with pricing, rating, and quantity selector
 */

import Image from 'next/image';
import { ServiceOption } from '@/types';
import QuantitySelector from '@/components/ui/QuantitySelector';
import { Clock, Star, Users } from 'lucide-react';
import { useState } from 'react';

interface ServiceOptionCardProps {
  option: ServiceOption;
  onAddToCart: (optionId: string, quantity: number) => void;
  defaultQuantity?: number;
}

export default function ServiceOptionCard({
  option,
  onAddToCart,
  defaultQuantity = 1,
}: ServiceOptionCardProps) {
  const [quantity, setQuantity] = useState(defaultQuantity);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    try {
      await onAddToCart(option.id, quantity);
      // Reset quantity after adding
      setTimeout(() => {
        setIsAdding(false);
      }, 500);
    } catch {
      setIsAdding(false);
    }
  };

  return (
    <div className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors">
      <div className="flex gap-4">
        {/* Option Image (if available) */}
        {option.image && (
          <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
            <Image
              src={option.image}
              alt={option.name}
              fill
              sizes="96px"
              className="object-contain p-1"
            />
          </div>
        )}

        {/* Option Details */}
        <div className="flex-1 min-w-0">
          {/* Option Name */}
          <h4 className="text-lg font-semibold text-gray-900 mb-2">
            {option.name}
          </h4>

          {/* Rating and Reviews */}
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-current" />
              <span className="text-sm font-medium text-gray-900">
                {option.rating.toFixed(1)}
              </span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <Users className="w-4 h-4" />
              <span className="text-sm">
                {option.reviewCount} reviews
              </span>
            </div>
            <div className="flex items-center gap-1 text-gray-600">
              <Clock className="w-4 h-4" />
              <span className="text-sm">{option.estimatedTime}</span>
            </div>
          </div>

          {/* Price */}
          <div className="mb-3">
            <span className="text-2xl font-bold text-orange-600">
              ₹{option.price.toLocaleString()}
            </span>
            <span className="text-sm text-gray-600 ml-1">per unit</span>
          </div>
        </div>
      </div>

      {/* Quantity Selector and Add to Cart Button */}
      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-200">
        <div className="flex-shrink-0">
          <QuantitySelector
            quantity={quantity}
            onQuantityChange={setQuantity}
            min={1}
            max={10}
            size="md"
          />
        </div>

        <button
          onClick={handleAddToCart}
          disabled={isAdding}
          className="flex-1 min-h-[44px] bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 active:scale-95 disabled:cursor-not-allowed"
          aria-label={`Add ${quantity} ${option.name} to cart`}
        >
          {isAdding ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              Adding...
            </span>
          ) : (
            'Add to Cart'
          )}
        </button>
      </div>
    </div>
  );
}
