'use client';

/**
 * Quantity Selector Component
 * Increment/decrement buttons for quantity selection
 * Enforces min (1) and max (10) limits with proper touch targets
 */

import { Minus, Plus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  min?: number;
  max?: number;
  size?: 'sm' | 'md' | 'lg';
}

export default function QuantitySelector({
  quantity,
  onQuantityChange,
  min = 1,
  max = 10,
  size = 'md',
}: QuantitySelectorProps) {
  const handleDecrement = () => {
    if (quantity > min) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < max) {
      onQuantityChange(quantity + 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= min && value <= max) {
      onQuantityChange(value);
    }
  };

  const isMinReached = quantity <= min;
  const isMaxReached = quantity >= max;

  // Size classes for buttons (ensuring 44x44px minimum for touch targets)
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11', // 44px
    lg: 'w-12 h-12',
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  const inputSizes = {
    sm: 'w-10 text-sm',
    md: 'w-12 text-base',
    lg: 'w-14 text-lg',
  };

  return (
    <div className="flex items-center space-x-2" role="group" aria-label="Quantity selector">
      {/* Decrement Button */}
      <button
        type="button"
        onClick={handleDecrement}
        disabled={isMinReached}
        className={`${sizeClasses[size]} flex items-center justify-center rounded-lg border-2 transition-all ${
          isMinReached
            ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'border-gray-300 bg-white text-gray-700 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600 active:scale-95'
        }`}
        aria-label="Decrease quantity"
        aria-disabled={isMinReached}
      >
        <Minus className={iconSizes[size]} />
      </button>

      {/* Quantity Input */}
      <input
        type="number"
        value={quantity}
        onChange={handleInputChange}
        min={min}
        max={max}
        className={`${inputSizes[size]} h-11 text-center border-2 border-gray-300 rounded-lg focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all`}
        aria-label="Quantity"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={quantity}
      />

      {/* Increment Button */}
      <button
        type="button"
        onClick={handleIncrement}
        disabled={isMaxReached}
        className={`${sizeClasses[size]} flex items-center justify-center rounded-lg border-2 transition-all ${
          isMaxReached
            ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
            : 'border-gray-300 bg-white text-gray-700 hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600 active:scale-95'
        }`}
        aria-label="Increase quantity"
        aria-disabled={isMaxReached}
      >
        <Plus className={iconSizes[size]} />
      </button>
    </div>
  );
}
