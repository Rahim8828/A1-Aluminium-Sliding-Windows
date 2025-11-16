/**
 * Google Analytics 4 Tracking Utilities
 * 
 * This module provides helper functions for tracking pageviews and events
 * with Google Analytics 4.
 */

// Google Analytics Tracking ID from environment variables
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || '';

// Check if GA is enabled
export const isGAEnabled = (): boolean => {
  return typeof window !== 'undefined' && !!GA_TRACKING_ID && typeof window.gtag === 'function';
};

/**
 * Track a pageview
 * @param url - The page URL to track
 */
export const pageview = (url: string): void => {
  if (!isGAEnabled() || !window.gtag) return;
  
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

/**
 * Track a custom event
 * @param action - The event action
 * @param category - The event category
 * @param label - The event label
 * @param value - Optional numeric value
 */
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value?: number;
}): void => {
  if (!isGAEnabled() || !window.gtag) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

/**
 * Track phone number clicks
 * @param phoneNumber - The phone number that was clicked
 * @param location - Where on the site the click occurred
 */
export const trackPhoneClick = (phoneNumber: string, location: string): void => {
  event({
    action: 'phone_click',
    category: 'Contact',
    label: `${location} - ${phoneNumber}`,
  });
};

/**
 * Track WhatsApp button clicks
 * @param location - Where on the site the click occurred
 */
export const trackWhatsAppClick = (location: string): void => {
  event({
    action: 'whatsapp_click',
    category: 'Contact',
    label: location,
  });
};

/**
 * Track contact form submissions
 * @param serviceType - The type of service requested
 * @param formLocation - Where the form was submitted from
 */
export const trackFormSubmission = (serviceType: string, formLocation: string): void => {
  event({
    action: 'form_submission',
    category: 'Lead Generation',
    label: `${formLocation} - ${serviceType}`,
    value: 1,
  });
};

/**
 * Track CTA button clicks
 * @param ctaText - The text of the CTA button
 * @param ctaLocation - Where the CTA is located
 * @param ctaDestination - Where the CTA leads to
 */
export const trackCTAClick = (
  ctaText: string,
  ctaLocation: string,
  ctaDestination: string
): void => {
  event({
    action: 'cta_click',
    category: 'Engagement',
    label: `${ctaLocation} - ${ctaText} -> ${ctaDestination}`,
  });
};

/**
 * Track service page views
 * @param serviceName - The name of the service
 */
export const trackServiceView = (serviceName: string): void => {
  event({
    action: 'service_view',
    category: 'Services',
    label: serviceName,
  });
};

/**
 * Track blog post views
 * @param postTitle - The title of the blog post
 * @param postCategory - The category of the blog post
 */
export const trackBlogView = (postTitle: string, postCategory: string): void => {
  event({
    action: 'blog_view',
    category: 'Content',
    label: `${postCategory} - ${postTitle}`,
  });
};

/**
 * Track exit intent popup displays
 */
export const trackExitIntentDisplay = (): void => {
  event({
    action: 'exit_intent_display',
    category: 'Conversion',
    label: 'Exit Intent Popup Shown',
  });
};

/**
 * Track exit intent popup conversions
 * @param action - The action taken (e.g., 'call', 'whatsapp', 'close')
 */
export const trackExitIntentAction = (action: string): void => {
  event({
    action: 'exit_intent_action',
    category: 'Conversion',
    label: action,
  });
};

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (
      command: string,
      targetId: string,
      config?: Record<string, any>
    ) => void;
    dataLayer?: any[];
  }
}
