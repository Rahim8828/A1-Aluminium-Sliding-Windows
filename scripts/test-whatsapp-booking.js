/**
 * Manual Test Script for WhatsApp Booking Integration
 * Run with: node scripts/test-whatsapp-booking.js
 */

// Mock cart data for testing
const testCart1 = {
  items: [
    {
      serviceId: 'aluminium-windows',
      serviceName: 'Aluminium Windows',
      optionId: 'standard',
      optionName: 'Standard Window (4x3 ft)',
      price: 8500,
      quantity: 2,
      image: '/images/services/window.jpg',
    },
  ],
  version: 1,
};

const testCart2 = {
  items: [
    {
      serviceId: 'glass-partition',
      serviceName: 'Glass Partition',
      optionId: 'frameless',
      optionName: 'Frameless Glass Partition',
      price: 15000,
      quantity: 1,
      image: '/images/services/glass.jpg',
    },
    {
      serviceId: 'safety-net',
      serviceName: 'Safety Netting',
      optionId: 'balcony',
      optionName: 'Balcony Safety Net',
      price: 3500,
      quantity: 2,
      image: '/images/services/net.jpg',
    },
  ],
  appliedCoupon: {
    code: 'WELCOME10',
    discount: 10,
    type: 'percentage',
  },
  version: 1,
};

// Format WhatsApp message function (copied from implementation)
function formatWhatsAppMessage(cart) {
  const items = cart.items
    .map(
      (item) =>
        `• ${item.serviceName} - ${item.optionName}\n  ₹${item.price.toLocaleString()} × ${item.quantity} = ₹${(item.price * item.quantity).toLocaleString()}`
    )
    .join('\n\n');

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
}

// Generate WhatsApp URL
function generateWhatsAppUrl(cart, phoneNumber = '+919876543210') {
  const cleanNumber = phoneNumber.replace(/\D/g, '');
  const message = formatWhatsAppMessage(cart);
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

console.log('='.repeat(80));
console.log('WhatsApp Booking Integration - Manual Test');
console.log('='.repeat(80));

console.log('\n📝 Test Case 1: Single Item Cart');
console.log('-'.repeat(80));
const message1 = formatWhatsAppMessage(testCart1);
console.log(message1);
console.log('\n🔗 WhatsApp URL:');
console.log(generateWhatsAppUrl(testCart1));

console.log('\n\n📝 Test Case 2: Multiple Items with Coupon');
console.log('-'.repeat(80));
const message2 = formatWhatsAppMessage(testCart2);
console.log(message2);
console.log('\n🔗 WhatsApp URL:');
console.log(generateWhatsAppUrl(testCart2));

console.log('\n\n✅ Test completed successfully!');
console.log('='.repeat(80));
