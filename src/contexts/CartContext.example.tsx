/**
 * Cart Context Usage Examples
 * This file demonstrates how to use the cart context in components
 */

'use client';

import { useCart } from '@/hooks/useCart';
import { CartItem } from '@/types';

/**
 * Example: Adding an item to cart
 */
export function AddToCartButton() {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    const item: CartItem = {
      serviceId: 'sofa-polish',
      serviceName: 'Sofa Polish',
      optionId: '1-seater',
      optionName: '1 Seater Sofa',
      price: 1500,
      quantity: 1,
      image: '/images/services/sofa-polish.jpg',
    };

    addItem(item);
  };

  return (
    <button onClick={handleAddToCart}>
      Add to Cart
    </button>
  );
}

/**
 * Example: Displaying cart summary
 */
export function CartSummary() {
  const { cart, getItemCount, getSubtotal, getDiscount, getTotal } = useCart();

  return (
    <div>
      <h2>Cart Summary</h2>
      <p>Items: {getItemCount()}</p>
      <p>Subtotal: ₹{getSubtotal().toLocaleString()}</p>
      {cart.appliedCoupon && (
        <p>Discount: -₹{getDiscount().toLocaleString()}</p>
      )}
      <p>Total: ₹{getTotal().toLocaleString()}</p>
    </div>
  );
}

/**
 * Example: Cart item with quantity controls
 */
export function CartItemComponent({ item }: { item: CartItem }) {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div>
      <h3>{item.serviceName} - {item.optionName}</h3>
      <p>₹{item.price.toLocaleString()}</p>
      
      <div>
        <button 
          onClick={() => updateQuantity(item.serviceId, item.optionId, item.quantity - 1)}
          disabled={item.quantity <= 1}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button 
          onClick={() => updateQuantity(item.serviceId, item.optionId, item.quantity + 1)}
          disabled={item.quantity >= 10}
        >
          +
        </button>
      </div>

      <button onClick={() => removeItem(item.serviceId, item.optionId)}>
        Remove
      </button>
    </div>
  );
}

/**
 * Example: Applying a coupon
 */
export function CouponInput() {
  const { applyCoupon, removeCoupon, cart } = useCart();
  const [code, setCode] = React.useState('');
  const [error, setError] = React.useState('');

  const handleApply = () => {
    const success = applyCoupon(code);
    if (success) {
      setCode('');
      setError('');
    } else {
      setError('Invalid coupon code');
    }
  };

  return (
    <div>
      {cart.appliedCoupon ? (
        <div>
          <p>Coupon applied: {cart.appliedCoupon.code}</p>
          <button onClick={removeCoupon}>Remove</button>
        </div>
      ) : (
        <div>
          <input
            type="text"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="Enter coupon code"
          />
          <button onClick={handleApply}>Apply</button>
          {error && <p>{error}</p>}
        </div>
      )}
    </div>
  );
}

/**
 * Example: Cart icon with badge
 */
export function CartIcon() {
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <div style={{ position: 'relative' }}>
      <span>🛒</span>
      {itemCount > 0 && (
        <span style={{
          position: 'absolute',
          top: -8,
          right: -8,
          background: 'red',
          color: 'white',
          borderRadius: '50%',
          padding: '2px 6px',
          fontSize: '12px',
        }}>
          {itemCount}
        </span>
      )}
    </div>
  );
}

// Note: This is just an example file. Import React if you want to use it:
import React from 'react';
