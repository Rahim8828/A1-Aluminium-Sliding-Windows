# Analytics Implementation Guide

This document describes the Google Analytics 4 (GA4) implementation for the A1 Aluminium website.

## Overview

The analytics system tracks user interactions and conversions across the website, providing insights into:
- Page views
- Phone number clicks
- WhatsApp button clicks
- Contact form submissions
- CTA button clicks
- Exit intent popup interactions

## Setup

### 1. Environment Configuration

Add your Google Analytics tracking ID to your environment variables:

```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

The tracking ID should be added to:
- `.env.local` for local development
- Your deployment platform's environment variables for production

### 2. Google Analytics Setup

1. Create a Google Analytics 4 property at https://analytics.google.com
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Add the Measurement ID to your environment variables

## Implementation Details

### Core Files

- **`src/lib/analytics.ts`**: Core analytics functions and event tracking
- **`src/components/analytics/Analytics.tsx`**: Client component for automatic pageview tracking
- **`src/app/layout.tsx`**: Root layout with GA script injection

### Tracked Events

#### 1. Pageview Tracking
Automatically tracks all page navigation using Next.js App Router.

```typescript
pageview(url: string)
```

#### 2. Phone Click Tracking
Tracks when users click phone numbers to call.

```typescript
trackPhoneClick(phoneNumber: string, location: string)
```

**Tracked Locations:**
- Header
- Hero Section
- Footer
- Emergency Banner
- Exit Intent Popup
- Call Button component

#### 3. WhatsApp Click Tracking
Tracks when users click WhatsApp buttons.

```typescript
trackWhatsAppClick(location: string)
```

**Tracked Locations:**
- Header
- Hero Section
- Floating WhatsApp Button
- Exit Intent Popup

#### 4. Form Submission Tracking
Tracks contact form submissions with service type.

```typescript
trackFormSubmission(serviceType: string, formLocation: string)
```

**Tracked Forms:**
- Contact page form
- Service page forms (if any)

#### 5. CTA Click Tracking
Tracks all call-to-action button clicks.

```typescript
trackCTAClick(ctaText: string, ctaLocation: string, ctaDestination: string)
```

**Tracked CTAs:**
- Hero section buttons
- Header buttons
- Emergency banner buttons
- Service page CTAs

#### 6. Exit Intent Tracking
Tracks exit intent popup displays and user actions.

```typescript
trackExitIntentDisplay()
trackExitIntentAction(action: string)
```

**Tracked Actions:**
- Popup display
- Call button click
- WhatsApp button click
- Close/dismiss

## Event Structure

All events follow Google Analytics 4 event structure:

```javascript
{
  action: 'event_name',
  event_category: 'category',
  event_label: 'label',
  value: number (optional)
}
```

### Event Categories

- **Contact**: Phone clicks, WhatsApp clicks
- **Lead Generation**: Form submissions
- **Engagement**: CTA clicks
- **Conversion**: Exit intent interactions
- **Services**: Service page views
- **Content**: Blog post views

## Viewing Analytics Data

### In Google Analytics 4

1. **Real-time Reports**: View current user activity
   - Navigate to Reports > Realtime

2. **Events Report**: View all tracked events
   - Navigate to Reports > Engagement > Events

3. **Conversions**: Set up conversion events
   - Navigate to Configure > Events
   - Mark important events as conversions (e.g., form_submission, phone_click)

4. **Custom Reports**: Create custom reports
   - Navigate to Explore
   - Create custom explorations with tracked events

### Key Metrics to Monitor

1. **Lead Generation**
   - Form submissions
   - Phone clicks
   - WhatsApp clicks

2. **User Engagement**
   - Pages per session
   - Average session duration
   - Bounce rate

3. **Conversion Funnel**
   - Home page views → Service page views → Contact actions

4. **Exit Intent Performance**
   - Popup display rate
   - Conversion rate from popup

## Privacy Considerations

- No personally identifiable information (PII) is tracked
- IP anonymization is enabled by default in GA4
- Users can opt-out using browser settings or extensions
- Consider adding a cookie consent banner for GDPR compliance

## Testing

### Local Testing

1. Set `NEXT_PUBLIC_GA_ID` in `.env.local`
2. Run the development server: `npm run dev`
3. Open browser DevTools > Network tab
4. Filter for "google-analytics" or "gtag"
5. Interact with tracked elements
6. Verify events are being sent

### Production Testing

1. Deploy with GA tracking ID configured
2. Use Google Analytics DebugView:
   - Install Google Analytics Debugger extension
   - Navigate to Reports > Realtime > DebugView
   - Interact with the site
   - Verify events appear in real-time

## Troubleshooting

### Events Not Tracking

1. **Check GA_TRACKING_ID**: Ensure environment variable is set correctly
2. **Check Browser Console**: Look for JavaScript errors
3. **Check Network Tab**: Verify gtag requests are being sent
4. **Check Ad Blockers**: Disable ad blockers for testing
5. **Check GA Property**: Ensure GA4 property is active

### Build Errors

If you encounter build errors related to analytics:

1. Ensure all imports are correct
2. Check that client components are marked with `'use client'`
3. Verify TypeScript types are correct
4. Check that Suspense boundaries are in place for `useSearchParams()`

## Future Enhancements

Potential additions to the analytics system:

1. **Enhanced E-commerce Tracking**: Track quote values
2. **User ID Tracking**: Track returning users
3. **Custom Dimensions**: Add location, service type dimensions
4. **Scroll Depth Tracking**: Track how far users scroll
5. **Video Tracking**: Track video plays (if videos are added)
6. **Download Tracking**: Track PDF/brochure downloads
7. **Outbound Link Tracking**: Track clicks to external sites
8. **Form Field Tracking**: Track which fields users interact with

## Support

For issues or questions about the analytics implementation:
- Review Google Analytics 4 documentation: https://support.google.com/analytics
- Check Next.js analytics documentation: https://nextjs.org/docs/app/building-your-application/optimizing/analytics
