// Core type definitions for A1 Aluminium website

export interface Service {
  id: string;
  slug: string;
  category: 'aluminium' | 'glass' | 'netting';
  title: string;
  shortDescription: string;
  fullDescription: string;
  benefits: string[];
  useCases: string[];
  images: string[];
  pricing: {
    type: 'fixed' | 'quote' | 'range';
    min?: number;
    max?: number;
    unit?: string;
  };
  faqs: FAQItem[];
  relatedServices: string[];
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
