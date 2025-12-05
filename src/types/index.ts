// Core type definitions for A1 Aluminium website

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  image?: string;
}

export interface TrustBadge {
  icon: string;
  text: string;
}

export interface Service {
  id: string;
  slug: string;
  category: 'aluminium' | 'glass' | 'netting';
  title: string;
  shortDescription: string;
  fullDescription: string;
  rating: number;
  reviewCount: number;
  duration: string;
  benefits: string[];
  useCases: string[];
  images: string[];
  pricing: {
    type: 'fixed' | 'quote' | 'range';
    min?: number;
    max?: number;
    unit?: string;
  };
  options: ServiceOption[];
  priceIncludes: string[];
  materials: string[];
  processSteps: ProcessStep[];
  faqs: FAQItem[];
  trustBadges: TrustBadge[];
  relatedServices: string[];
  visitingCharge?: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  date: string;
  author: string;
  readTime: number;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  service?: string;
}

export interface Location {
  name: string;
  slug: string;
  description: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  servicesAvailable: string[];
}

export interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
}

// Cart-related types
export interface ServiceOption {
  id: string;
  name: string;
  price: number;
  rating: number;
  reviewCount: number;
  estimatedTime: string;
  image?: string;
}

export interface CartItem {
  serviceId: string;
  serviceName: string;
  optionId: string;
  optionName: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Coupon {
  code: string;
  description: string;
  discount: number;
  type: 'percentage' | 'fixed';
}

export interface Cart {
  items: CartItem[];
  appliedCoupon?: {
    code: string;
    discount: number;
    type: 'percentage' | 'fixed';
  };
  version: number;
}

export interface CartState {
  cart: Cart;
  addItem: (item: CartItem) => void;
  updateQuantity: (serviceId: string, optionId: string, quantity: number) => void;
  removeItem: (serviceId: string, optionId: string) => void;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
  clearCart: () => void;
  getTotal: () => number;
  getSubtotal: () => number;
  getDiscount: () => number;
  getItemCount: () => number;
}
