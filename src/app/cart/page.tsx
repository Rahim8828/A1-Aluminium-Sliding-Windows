import type { Metadata } from 'next';
import CartPageClient from './CartPageClient';

export const metadata: Metadata = {
  title: 'Shopping Cart | A1 Aluminium Solutions',
  description: 'Review your selected services and book via WhatsApp',
  robots: 'noindex, nofollow',
};

export default function CartPage() {
  return <CartPageClient />;
}
