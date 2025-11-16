# Design Document

## Overview

This design document outlines the technical architecture and implementation approach for the A1 Aluminium, Glass & Netting Solutions website. The website will be built as a modern, SEO-optimized Next.js application with TypeScript and Tailwind CSS, focusing on lead generation, mobile responsiveness, and excellent user experience.

### Technology Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended) or similar platform
- **Analytics**: Google Analytics 4
- **Form Handling**: React Hook Form with validation
- **Icons**: Lucide React or Heroicons
- **Image Optimization**: Next.js Image component

### Key Design Principles

1. **Mobile-First**: Design and develop for mobile devices first, then scale up
2. **SEO-Optimized**: Leverage Next.js SSR/SSG capabilities for optimal search engine visibility
3. **Performance**: Achieve Lighthouse score of 85+ through optimization techniques
4. **Conversion-Focused**: Every page should guide users toward contacting the business
5. **Accessibility**: WCAG 2.1 AA compliance for inclusive user experience

## Architecture

### Project Structure

```
a1-aluminium-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx                 # Root layout with metadata
│   │   ├── page.tsx                   # Home page
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx               # Services overview
│   │   │   ├── aluminium/
│   │   │   │   └── page.tsx
│   │   │   ├── glass/
│   │   │   │   └── page.tsx
│   │   │   └── netting/
│   │   │       └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx               # Blog listing
│   │   │   └── [slug]/
│   │   │       └── page.tsx           # Individual blog post
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts           # Contact form API
│   │   └── sitemap.xml/
│   │       └── route.ts               # Dynamic sitemap
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   └── EmergencyBanner.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ServicesOverview.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── StatsCounter.tsx
│   │   │   └── BlogPreview.tsx
│   │   ├── services/
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── ServiceDetail.tsx
│   │   │   └── ServiceFAQ.tsx
│   │   ├── contact/
│   │   │   ├── ContactForm.tsx
│   │   │   ├── WhatsAppButton.tsx
│   │   │   └── CallButton.tsx
│   │   ├── blog/
│   │   │   ├── BlogCard.tsx
│   │   │   ├── BlogPost.tsx
│   │   │   └── RelatedPosts.tsx
│   │   ├── seo/
│   │   │   ├── SEOHead.tsx
│   │   │   └── StructuredData.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── Modal.tsx
│   ├── lib/
│   │   ├── analytics.ts               # GA4 tracking utilities
│   │   ├── constants.ts               # Business info, phone numbers
│   │   └── utils.ts                   # Helper functions
│   ├── data/
│   │   ├── services.ts                # Service data
│   │   ├── testimonials.ts            # Customer testimonials
│   │   ├── blog-posts.ts              # Blog content
│   │   └── locations.ts               # Mumbai service areas
│   └── types/
│       └── index.ts                   # TypeScript interfaces
├── public/
│   ├── images/
│   │   ├── services/
│   │   ├── blog/
│   │   └── icons/
│   └── robots.txt
├── tailwind.config.ts
├── next.config.js
└── tsconfig.json
```

### Routing Strategy

Next.js App Router will be used for all pages with the following structure:

- `/` - Home page (SSG)
- `/about` - About page (SSG)
- `/services` - Services overview (SSG)
- `/services/aluminium` - Aluminium services (SSG)
- `/services/glass` - Glass services (SSG)
- `/services/netting` - Netting services (SSG)
- `/contact` - Contact page (SSG)
- `/blog` - Blog listing (SSG with ISR)
- `/blog/[slug]` - Individual blog posts (SSG with ISR)
- `/api/contact` - Contact form submission (API Route)

## Components and Interfaces

### Layout Components

#### Header Component
```typescript
interface HeaderProps {
  transparent?: boolean;
}

// Features:
// - Sticky positioning with backdrop blur
// - Desktop navigation with dropdown for services
// - Mobile hamburger menu
// - CTA buttons (Call, WhatsApp)
// - Logo with link to home
```

#### Footer Component
```typescript
interface FooterProps {
  // No props needed
}

// Sections:
// - Company info and description
// - Quick links (Home, About, Services, Contact, Blog)
// - Service links (All service categories)
// - Contact information (Phone, Email, Address, Hours)
// - Social media links
// - Trust badges and certifications
// - Copyright notice
```

#### Mobile Navigation
```typescript
interface MobileNavProps {
  // No props needed
}

// Features:
// - Fixed bottom navigation (< 768px)
// - Icons for Home, Services, Contact, Call
// - Active state indication
// - Smooth transitions
```

#### Emergency Banner
```typescript
interface EmergencyBannerProps {
  message: string;
  phoneNumber: string;
  dismissible?: boolean;
}

// Features:
// - Prominent top banner
// - Click-to-call functionality
// - Optional dismiss button
// - Animated entrance
```

### Home Page Components

#### Hero Section
```typescript
interface HeroSectionProps {
  headline: string;
  subheadline: string;
  ctaButtons: {
    primary: { text: string; href: string };
    secondary: { text: string; href: string };
  };
  backgroundImage?: string;
}

// Features:
// - Full-width hero with background image/gradient
// - Compelling headline and subheadline
// - Primary CTA buttons (Call Now, WhatsApp)
// - Responsive typography
// - Animated entrance
```

#### Services Overview
```typescript
interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  href: string;
}

interface ServicesOverviewProps {
  services: Service[];
}

// Features:
// - Grid layout (3 columns desktop, 1 column mobile)
// - Service cards with images and descriptions
// - Hover effects
// - Links to detailed service pages
```

#### Why Choose Us
```typescript
interface ValueProposition {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface WhyChooseUsProps {
  propositions: ValueProposition[];
}

// Features:
// - Grid layout with icons
// - 4+ unique value propositions
// - Animated counters for stats
// - Responsive design
```

#### Testimonials
```typescript
interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
  service?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

// Features:
// - Carousel or grid layout
// - Star ratings
// - Customer names and locations
// - Responsive design
// - Auto-rotation option
```

#### Stats Counter
```typescript
interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

interface StatsCounterProps {
  stats: Stat[];
}

// Features:
// - Animated counting effect
// - Years of experience, projects completed, happy customers
// - Responsive grid layout
```

### Service Page Components

#### Service Detail
```typescript
interface ServiceDetailProps {
  title: string;
  description: string;
  benefits: string[];
  useCases: string[];
  images: string[];
  pricing?: {
    type: 'fixed' | 'quote';
    amount?: number;
  };
}

// Features:
// - Detailed service information
// - Image gallery
// - Benefits list
// - Use cases
// - Pricing or quote request
// - CTA buttons
```

#### Service FAQ
```typescript
interface FAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faqs: FAQItem[];
}

// Features:
// - Accordion-style FAQ
// - Expandable/collapsible items
// - Smooth animations
// - Service-specific questions
```

### Contact Components

#### Contact Form
```typescript
interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
}

interface ContactFormProps {
  onSubmit: (data: ContactFormData) => Promise<void>;
}

// Features:
// - Form validation with React Hook Form
// - Required field indicators
// - Error messages
// - Success confirmation
// - Loading states
// - Service type dropdown
```

#### WhatsApp Button
```typescript
interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  position?: 'fixed' | 'inline';
}

// Features:
// - Sticky floating button (fixed position)
// - WhatsApp icon
// - Click tracking
// - Pre-filled message option
// - Responsive sizing
```

#### Call Button
```typescript
interface CallButtonProps {
  phoneNumber: string;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

// Features:
// - Click-to-call functionality
// - Phone icon
// - Click tracking
// - Multiple style variants
```

### Blog Components

#### Blog Card
```typescript
interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  author?: string;
}

interface BlogCardProps {
  post: BlogPost;
}

// Features:
// - Thumbnail image
// - Title and excerpt
// - Category badge
// - Date display
// - Read more link
// - Hover effects
```

#### Blog Post
```typescript
interface BlogPostProps {
  post: {
    title: string;
    content: string;
    image: string;
    category: string;
    date: string;
    author?: string;
    tags?: string[];
  };
}

// Features:
// - Full blog content
// - Featured image
// - Metadata (date, category, author)
// - Social sharing buttons
// - Related posts section
// - Table of contents for long posts
```

### SEO Components

#### SEO Head
```typescript
interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

// Features:
// - Meta tags (title, description, keywords)
// - Open Graph tags
// - Twitter Card tags
// - Canonical URL
// - Robots meta
```

#### Structured Data
```typescript
interface StructuredDataProps {
  type: 'LocalBusiness' | 'Service' | 'Review' | 'Article';
  data: any;
}

// Features:
// - JSON-LD schema markup
// - LocalBusiness schema
// - Service schema
// - Review schema
// - Article schema for blog posts
```

## Data Models

### Service Data Structure
```typescript
interface Service {
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
```

### Blog Post Data Structure
```typescript
interface BlogPost {
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
```

### Location Data Structure
```typescript
interface Location {
  name: string;
  slug: string;
  description: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  servicesAvailable: string[];
}
```

### Contact Form Submission
```typescript
interface ContactSubmission {
  name: string;
  phone: string;
  email: string;
  serviceType: string;
  message: string;
  timestamp: Date;
  source: string; // 'contact-page', 'service-page', etc.
}
```

## Error Handling

### Form Validation
- Client-side validation using React Hook Form
- Real-time field validation
- Clear error messages below fields
- Prevent submission with invalid data
- Server-side validation in API routes

### API Error Handling
```typescript
// API Response Structure
interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    message: string;
    code: string;
  };
}

// Error handling in API routes
try {
  // Process request
  return NextResponse.json({ success: true, data: result });
} catch (error) {
  return NextResponse.json(
    { success: false, error: { message: 'Error message', code: 'ERROR_CODE' } },
    { status: 500 }
  );
}
```

### User-Facing Error Messages
- Network errors: "Unable to connect. Please check your internet connection."
- Form submission errors: "Failed to send message. Please try again or call us directly."
- 404 errors: Custom 404 page with navigation back to home
- 500 errors: Custom error page with contact information

## Testing Strategy

### Unit Testing
- Test utility functions in `lib/` directory
- Test form validation logic
- Test data transformation functions
- Use Jest and React Testing Library

### Component Testing
- Test individual components in isolation
- Test component props and rendering
- Test user interactions (clicks, form inputs)
- Test accessibility features

### Integration Testing
- Test page rendering with all components
- Test form submission flow
- Test navigation between pages
- Test API routes

### E2E Testing
- Test critical user journeys:
  - Home page → Service page → Contact form submission
  - Blog listing → Blog post reading
  - Mobile navigation flow
- Use Playwright or Cypress

### Performance Testing
- Lighthouse CI in deployment pipeline
- Monitor Core Web Vitals
- Test on various devices and network conditions
- Ensure performance score ≥ 85

### Accessibility Testing
- Automated testing with axe-core
- Manual keyboard navigation testing
- Screen reader testing
- Color contrast validation

## SEO Implementation

### Meta Tags Strategy
Each page will have unique, optimized meta tags:

```typescript
// Example for Aluminium Services page
{
  title: "Aluminium Fabrication Services in Mumbai | A1 Aluminium Solutions",
  description: "Professional aluminium fabrication, windows, doors & partitions in Mumbai. Serving Andheri, Bandra, Goregaon. Call for free quote!",
  keywords: ["aluminium fabrication mumbai", "aluminium windows", "aluminium doors"]
}
```

### Structured Data Implementation

#### LocalBusiness Schema
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "A1 Aluminium, Glass & Netting Solutions",
  "image": "https://example.com/logo.png",
  "description": "Professional aluminium, glass, and netting services in Mumbai",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Address]",
    "addressLocality": "Mumbai",
    "addressRegion": "Maharashtra",
    "postalCode": "[Postal Code]",
    "addressCountry": "IN"
  },
  "telephone": "[Phone Number]",
  "priceRange": "₹₹",
  "areaServed": [
    "Andheri", "Bandra", "Goregaon", "Jogeshwari", "Powai"
  ]
}
```

#### Service Schema
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Aluminium Fabrication",
  "provider": {
    "@type": "LocalBusiness",
    "name": "A1 Aluminium Solutions"
  },
  "areaServed": {
    "@type": "City",
    "name": "Mumbai"
  }
}
```

### Sitemap Generation
Dynamic sitemap.xml generated from all pages:
- Static pages (home, about, contact, services)
- Dynamic service pages
- Blog posts
- Priority and change frequency settings

### Robots.txt
```
User-agent: *
Allow: /
Disallow: /api/

Sitemap: https://example.com/sitemap.xml
```

## Performance Optimization

### Image Optimization
- Use Next.js Image component for automatic optimization
- Lazy loading for images below the fold
- WebP format with fallbacks
- Responsive images with srcset
- Proper sizing to avoid layout shift

### Code Splitting
- Automatic code splitting by Next.js App Router
- Dynamic imports for heavy components
- Lazy load modals and popups
- Separate bundles for each route

### Caching Strategy
- Static pages: ISR with revalidation
- API responses: Cache headers
- Images: Long-term caching with versioning
- CDN caching for static assets

### Bundle Optimization
- Tree shaking unused code
- Minimize third-party dependencies
- Use lightweight alternatives where possible
- Analyze bundle size with @next/bundle-analyzer

## Conversion Optimization Features

### Exit-Intent Popup
```typescript
interface ExitIntentPopupProps {
  offer: string;
  ctaText: string;
  ctaHref: string;
}

// Triggers when:
// - Mouse moves toward browser close button
// - User has been on site for > 30 seconds
// - Not shown more than once per session
```

### Urgency Notifications
```typescript
interface UrgencyNotification {
  message: string;
  type: 'info' | 'success';
  duration: number;
}

// Examples:
// - "3 customers contacted us today from Andheri"
// - "Limited slots available this week"
// - Shows at intervals during session
```

### Comparison Table
```typescript
interface ComparisonTableProps {
  features: string[];
  competitors: {
    name: string;
    features: boolean[];
  }[];
}

// Shows advantages over competitors
// Highlights A1 Aluminium strengths
```

### Trust Signals
- Years of experience badge
- Projects completed counter
- Customer satisfaction rating
- Certifications and licenses
- Payment security badges
- Money-back guarantee (if applicable)

## Mobile Optimization

### Responsive Breakpoints
```typescript
// Tailwind CSS breakpoints
{
  'sm': '640px',   // Small devices
  'md': '768px',   // Tablets
  'lg': '1024px',  // Laptops
  'xl': '1280px',  // Desktops
  '2xl': '1536px'  // Large screens
}
```

### Touch Optimization
- Minimum tap target: 44x44px
- Adequate spacing between interactive elements
- Swipe gestures for carousels
- Pull-to-refresh disabled where appropriate
- Prevent zoom on input focus

### Mobile Navigation
- Bottom navigation bar (< 768px)
- Hamburger menu for secondary links
- Sticky header with minimal height
- Quick access to call and WhatsApp

## Analytics and Tracking

### Google Analytics 4 Setup
```typescript
// lib/analytics.ts
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

export const pageview = (url: string) => {
  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  });
};

export const event = ({ action, category, label, value }: {
  action: string;
  category: string;
  label: string;
  value?: number;
}) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
```

### Tracked Events
1. **Phone Clicks**: Track when users click phone numbers
2. **WhatsApp Clicks**: Track WhatsApp button clicks
3. **Form Submissions**: Track contact form submissions
4. **CTA Clicks**: Track all call-to-action button clicks
5. **Service Page Views**: Track which services are most viewed
6. **Blog Engagement**: Track blog post views and read time
7. **Exit Intent**: Track popup displays and conversions

### Conversion Goals
- Contact form submission
- Phone number click
- WhatsApp button click
- Service page visit
- Quote request

## Accessibility Features

### Keyboard Navigation
- All interactive elements accessible via Tab key
- Logical tab order
- Skip to main content link
- Escape key closes modals
- Arrow keys for carousels

### Screen Reader Support
- Semantic HTML elements
- ARIA labels for icon-only buttons
- ARIA live regions for dynamic content
- Alt text for all images
- Descriptive link text

### Visual Accessibility
- Color contrast ratio ≥ 4.5:1 for normal text
- Color contrast ratio ≥ 3:1 for large text
- Focus indicators on all focusable elements
- No reliance on color alone for information
- Resizable text up to 200%

### Form Accessibility
- Labels associated with inputs
- Error messages announced to screen readers
- Required fields clearly marked
- Helpful placeholder text
- Clear validation feedback

## Deployment and Hosting

### Recommended Platform: Vercel
- Automatic deployments from Git
- Preview deployments for pull requests
- Edge network for fast global delivery
- Automatic HTTPS
- Environment variable management

### Environment Variables
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_PHONE_NUMBER=+91XXXXXXXXXX
NEXT_PUBLIC_WHATSAPP_NUMBER=+91XXXXXXXXXX
NEXT_PUBLIC_EMAIL=info@a1aluminium.com
CONTACT_FORM_WEBHOOK_URL=https://...
```

### Build Configuration
```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['example.com'],
    formats: ['image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
};
```

## Content Strategy

### Service Pages Content
Each service page should include:
- Hero section with service name and CTA
- Detailed description (300-500 words)
- Benefits list (5-7 items)
- Use cases with examples
- Image gallery (4-6 images)
- FAQ section (5-8 questions)
- Related services
- Contact CTA

### Blog Content Categories
1. **Service Guides**: How-to articles about services
2. **DIY Tips**: Simple maintenance tips for customers
3. **Local Services**: Mumbai-specific content
4. **Industry News**: Updates about aluminium, glass, netting
5. **Case Studies**: Project showcases

### Location-Specific Content
Create content for major Mumbai areas:
- Andheri
- Bandra
- Goregaon
- Jogeshwari
- Powai
- Malad
- Kandivali
- Borivali

Each location page should include:
- Area-specific introduction
- Services available in that area
- Local landmarks/references
- Contact information
- Testimonials from that area

## Design System

### Color Palette
```typescript
// Tailwind config
colors: {
  primary: {
    50: '#f0f9ff',
    100: '#e0f2fe',
    // ... (blue shades for trust/professionalism)
    900: '#0c4a6e',
  },
  secondary: {
    // Orange/amber for CTAs and accents
  },
  neutral: {
    // Grays for text and backgrounds
  }
}
```

### Typography
```typescript
fontFamily: {
  sans: ['Inter', 'system-ui', 'sans-serif'],
  heading: ['Poppins', 'sans-serif'],
}

fontSize: {
  'xs': '0.75rem',
  'sm': '0.875rem',
  'base': '1rem',
  'lg': '1.125rem',
  'xl': '1.25rem',
  '2xl': '1.5rem',
  '3xl': '1.875rem',
  '4xl': '2.25rem',
  '5xl': '3rem',
}
```

### Spacing and Layout
- Consistent spacing scale (4px base unit)
- Maximum content width: 1280px
- Generous whitespace for readability
- Grid-based layouts

### Component Variants
- Button variants: primary, secondary, outline, ghost
- Card variants: default, elevated, bordered
- Input variants: default, error, success

## Security Considerations

### Form Security
- CSRF protection for form submissions
- Rate limiting on API routes
- Input sanitization
- Email validation
- Phone number validation

### Data Privacy
- No sensitive data stored client-side
- Secure transmission of form data
- Privacy policy page
- Cookie consent (if using cookies)
- GDPR compliance considerations

### Content Security
- Content Security Policy headers
- XSS protection
- Secure headers configuration
- HTTPS enforcement

## Future Enhancements

### Phase 2 Features (Post-Launch)
- Customer portal for quote tracking
- Online booking system
- Live chat integration
- Multi-language support (Hindi, Marathi)
- Customer review submission system
- Before/after project gallery
- Video testimonials
- Interactive cost calculator

### Analytics and Optimization
- A/B testing for CTAs
- Heatmap analysis
- User session recordings
- Conversion funnel analysis
- SEO performance monitoring

## Success Metrics

### Performance Metrics
- Lighthouse score ≥ 85
- First Contentful Paint < 1.5s
- Largest Contentful Paint < 2.5s
- Time to Interactive < 3.5s
- Cumulative Layout Shift < 0.1

### Business Metrics
- Contact form submissions per month
- Phone call clicks per month
- WhatsApp message initiations per month
- Average session duration
- Bounce rate < 60%
- Pages per session > 2

### SEO Metrics
- Organic search traffic growth
- Keyword rankings for target terms
- Backlink acquisition
- Domain authority improvement
- Local search visibility

## Conclusion

This design provides a comprehensive blueprint for building a high-performance, conversion-optimized website for A1 Aluminium, Glass & Netting Solutions. The architecture leverages Next.js capabilities for SEO and performance, while the component structure ensures maintainability and scalability. The focus on mobile responsiveness, accessibility, and user experience will help establish a strong digital presence in the competitive Mumbai market.
