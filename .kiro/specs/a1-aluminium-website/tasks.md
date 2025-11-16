# Implementation Plan

- [x] 1. Initialize Next.js project with TypeScript and Tailwind CSS
  - Create new Next.js 14 project with App Router
  - Configure TypeScript with strict mode
  - Set up Tailwind CSS with custom configuration
  - Configure project structure with src directory
  - Set up ESLint and Prettier for code quality
  - _Requirements: 10.3, 10.4_

- [x] 2. Set up project constants and data structures
  - Create TypeScript interfaces in `src/types/index.ts` for Service, BlogPost, Testimonial, Location, ContactFormData
  - Create `src/lib/constants.ts` with business information (phone numbers, email, address, social media links)
  - Create `src/data/services.ts` with all service data for Aluminium, Glass, and Netting categories
  - Create `src/data/testimonials.ts` with customer testimonials
  - Create `src/data/locations.ts` with Mumbai service areas
  - _Requirements: 1.4, 9.1, 9.2_

- [x] 3. Implement root layout and SEO foundation
  - Create `src/app/layout.tsx` with metadata configuration
  - Implement SEO component `src/components/seo/SEOHead.tsx` for dynamic meta tags
  - Implement StructuredData component `src/components/seo/StructuredData.tsx` for JSON-LD schemas
  - Add LocalBusiness schema to root layout
  - Configure Open Graph and Twitter Card meta tags
  - _Requirements: 6.1, 6.2, 6.5_

- [x] 4. Build core layout components
  - [x] 4.1 Create Header component with navigation
    - Implement `src/components/layout/Header.tsx` with sticky positioning
    - Add desktop navigation menu with links to Home, Services, About, Contact, Blog
    - Add services dropdown menu for Aluminium, Glass, Netting
    - Add CTA buttons (Call Now, WhatsApp) in header
    - Implement scroll-based styling changes
    - _Requirements: 1.1, 1.2_
  
  - [x] 4.2 Create mobile navigation
    - Implement `src/components/layout/MobileNav.tsx` as bottom navigation bar
    - Add icons for Home, Services, Contact, Call actions
    - Show only on screens < 768px width
    - Implement active state indication
    - _Requirements: 1.3, 5.4_
  
  - [x] 4.3 Create Footer component
    - Implement `src/components/layout/Footer.tsx` with all sections
    - Add quick links, service links, contact information
    - Add social media links
    - Add trust badges section
    - Include copyright notice
    - _Requirements: 1.5, 4.5, 8.4_
  
  - [x] 4.4 Create Emergency Banner
    - Implement `src/components/layout/EmergencyBanner.tsx`
    - Add click-to-call functionality
    - Make dismissible with session storage
    - _Requirements: 4.4_

- [x] 5. Implement reusable UI components
  - Create `src/components/ui/Button.tsx` with variants (primary, secondary, outline)
  - Create `src/components/ui/Card.tsx` for content cards
  - Create `src/components/ui/Modal.tsx` for popups
  - Ensure all buttons meet 44x44px minimum tap target size
  - Add proper ARIA labels and keyboard navigation support
  - _Requirements: 5.2, 12.3, 12.4_

- [x] 6. Build contact and CTA components
  - [x] 6.1 Create WhatsApp button
    - Implement `src/components/contact/WhatsAppButton.tsx` as sticky floating button
    - Add WhatsApp icon and click-to-WhatsApp functionality
    - Position fixed on all pages
    - Implement click tracking
    - _Requirements: 4.2, 11.3_
  
  - [x] 6.2 Create Call button
    - Implement `src/components/contact/CallButton.tsx` with click-to-call
    - Add phone icon and multiple style variants
    - Implement click tracking
    - _Requirements: 4.3, 11.2_
  
  - [x] 6.3 Create Contact Form
    - Implement `src/components/contact/ContactForm.tsx` with React Hook Form
    - Add fields: name, phone, email, service type dropdown, message
    - Implement client-side validation
    - Add error messages and success states
    - Add loading state during submission
    - _Requirements: 4.1, 12.1_

- [x] 7. Implement Home page components
  - [x] 7.1 Create Hero Section
    - Implement `src/components/home/HeroSection.tsx`
    - Add compelling headline and subheadline
    - Add primary CTA buttons (Call Now, WhatsApp)
    - Add background image with gradient overlay
    - Implement responsive typography
    - _Requirements: 2.1, 2.2_
  
  - [x] 7.2 Create Services Overview
    - Implement `src/components/home/ServicesOverview.tsx`
    - Display all three service categories with images
    - Create grid layout (3 columns desktop, 1 column mobile)
    - Add hover effects and links to service pages
    - _Requirements: 2.3_
  
  - [x] 7.3 Create Why Choose Us section
    - Implement `src/components/home/WhyChooseUs.tsx`
    - Display 4+ value propositions with icons
    - Create responsive grid layout
    - _Requirements: 2.4_
  
  - [x] 7.4 Create Testimonials component
    - Implement `src/components/home/Testimonials.tsx`
    - Display customer testimonials with names, locations, ratings
    - Implement carousel or grid layout
    - Add star rating display
    - _Requirements: 2.5_
  
  - [x] 7.5 Create Stats Counter
    - Implement `src/components/home/StatsCounter.tsx`
    - Add animated counting effect for stats
    - Display years of experience, projects completed, happy customers
    - _Requirements: 8.5_
  
  - [x] 7.6 Create Blog Preview section
    - Implement `src/components/home/BlogPreview.tsx`
    - Display latest 3 blog posts with thumbnails
    - Add links to full blog posts
    - _Requirements: 7.5_

- [ ] 8. Build Home page
  - Create `src/app/page.tsx` assembling all home components
  - Add SEO metadata optimized for main keywords
  - Implement proper heading hierarchy
  - Add LocalBusiness structured data
  - Ensure mobile responsiveness
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 5.1, 6.1_

- [x] 9. Implement Service page components
  - [x] 9.1 Create Service Card component
    - Implement `src/components/services/ServiceCard.tsx`
    - Display service image, title, description
    - Add hover effects and link to detail page
    - _Requirements: 3.1, 3.3_
  
  - [x] 9.2 Create Service Detail component
    - Implement `src/components/services/ServiceDetail.tsx`
    - Display detailed service information, benefits, use cases
    - Add image gallery
    - Add pricing or "Request Quote" CTA
    - _Requirements: 3.2, 3.4_
  
  - [x] 9.3 Create Service FAQ component
    - Implement `src/components/services/ServiceFAQ.tsx`
    - Create accordion-style FAQ
    - Implement expand/collapse functionality
    - _Requirements: 3.5_

- [x] 10. Build service pages
  - Create `src/app/services/page.tsx` for services overview
  - Create `src/app/services/aluminium/page.tsx` for Aluminium services
  - Create `src/app/services/glass/page.tsx` for Glass services
  - Create `src/app/services/netting/page.tsx` for Netting services
  - Add unique SEO metadata for each service page
  - Add Service schema structured data
  - Include service-specific FAQs
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 6.1, 6.2_

- [x] 11. Implement blog components
  - [x] 11.1 Create Blog Card component
    - Implement `src/components/blog/BlogCard.tsx`
    - Display thumbnail, title, excerpt, category, date
    - Add hover effects and read more link
    - _Requirements: 7.1_
  
  - [x] 11.2 Create Blog Post component
    - Implement `src/components/blog/BlogPost.tsx`
    - Display full blog content with formatting
    - Add featured image and metadata
    - Add social sharing buttons
    - _Requirements: 7.2_
  
  - [x] 11.3 Create Related Posts component
    - Implement `src/components/blog/RelatedPosts.tsx`
    - Display 3-4 related blog posts
    - Filter by category or tags
    - _Requirements: 7.4_

- [x] 12. Build blog pages and content
  - Create `src/data/blog-posts.ts` with initial blog content (5-10 posts)
  - Create blog posts for location-specific content (Andheri, Bandra, Goregaon, etc.)
  - Create `src/app/blog/page.tsx` for blog listing
  - Create `src/app/blog/[slug]/page.tsx` for individual posts
  - Add Article schema structured data to blog posts
  - Implement blog post categories
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 9.4_

- [x] 13. Create About and Contact pages
  - Create `src/app/about/page.tsx` with company information
  - Create `src/app/contact/page.tsx` with contact form and information
  - Add contact form integration
  - Add service area coverage section with Mumbai locations
  - Add map or area list showing coverage zones
  - _Requirements: 4.1, 4.5, 9.1, 9.5_

- [x] 14. Implement conversion optimization features
  - [x] 14.1 Create Exit-Intent Popup
    - Implement exit-intent detection logic
    - Create popup modal with special offer
    - Add session storage to show once per session
    - Trigger only after 30 seconds on site
    - _Requirements: 8.1_
  
  - [x] 14.2 Create Urgency Notifications
    - Implement notification toast component
    - Add logic to show notifications at intervals
    - Create messages like "3 customers contacted us today"
    - _Requirements: 8.2_
  
  - [x] 14.3 Create Comparison Table
    - Implement comparison table component
    - Show advantages over competitors
    - Add to About or Services page
    - _Requirements: 8.3_

- [x] 15. Implement image optimization
  - Add placeholder images to `public/images/` directory structure
  - Implement Next.js Image component throughout all pages
  - Configure lazy loading for images below the fold
  - Optimize and compress all images
  - Add proper alt text to all images
  - _Requirements: 5.3, 10.1, 10.2, 12.1_

- [x] 16. Set up API routes
  - Create `src/app/api/contact/route.ts` for contact form submissions
  - Implement form data validation
  - Add rate limiting
  - Implement email notification or webhook integration
  - Add error handling and response formatting
  - _Requirements: 4.1_

- [x] 17. Implement SEO features
  - Create `src/app/sitemap.xml/route.ts` for dynamic sitemap generation
  - Create `public/robots.txt` file
  - Add location-based keywords to all relevant pages
  - Implement geo-targeted schema markup for service areas
  - Ensure all pages have unique meta titles and descriptions
  - _Requirements: 6.1, 6.3, 6.4, 9.3_

- [x] 18. Set up analytics and tracking
  - Create `src/lib/analytics.ts` with GA4 helper functions
  - Add Google Analytics script to root layout
  - Implement pageview tracking
  - Implement event tracking for phone clicks
  - Implement event tracking for WhatsApp clicks
  - Implement event tracking for form submissions
  - Implement event tracking for CTA button clicks
  - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5_

- [x] 19. Implement accessibility features
  - Add ARIA labels to all icon-only buttons
  - Ensure keyboard navigation works for all interactive elements
  - Add skip-to-content link
  - Implement focus indicators for all focusable elements
  - Verify color contrast ratios meet WCAG standards
  - _Requirements: 12.2, 12.3, 12.4, 12.5_

- [x] 20. Optimize performance
  - Implement code splitting for route-based components
  - Configure Next.js Image optimization settings
  - Add compression in next.config.js
  - Implement ISR (Incremental Static Regeneration) for blog pages
  - Configure caching headers
  - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5_

- [x] 21. Configure deployment settings
  - Create `next.config.js` with production optimizations
  - Set up environment variables for GA tracking ID, phone numbers, email
  - Configure image domains and formats
  - Add security headers
  - Create deployment documentation
  - _Requirements: 10.4, 11.1_

- [ ]* 22. Testing and quality assurance
  - [ ]* 22.1 Run Lighthouse performance audit
    - Test on mobile and desktop
    - Ensure performance score ≥ 85
    - Verify Core Web Vitals
    - _Requirements: 10.4_
  
  - [ ]* 22.2 Test accessibility compliance
    - Run automated accessibility tests with axe-core
    - Test keyboard navigation
    - Verify ARIA labels and semantic HTML
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5_
  
  - [ ]* 22.3 Test mobile responsiveness
    - Test on various screen sizes (320px to 1920px)
    - Verify touch targets are 44x44px minimum
    - Test mobile navigation
    - Verify no horizontal scrolling
    - _Requirements: 5.1, 5.2, 5.4, 5.5_
  
  - [ ]* 22.4 Test form functionality
    - Test contact form validation
    - Test form submission flow
    - Test error handling
    - Verify success messages
    - _Requirements: 4.1_
  
  - [ ]* 22.5 Test SEO implementation
    - Verify meta tags on all pages
    - Validate structured data with Google Rich Results Test
    - Check sitemap.xml generation
    - Verify robots.txt
    - _Requirements: 6.1, 6.2, 6.3, 6.5_
  
  - [ ]* 22.6 Cross-browser testing
    - Test on Chrome, Firefox, Safari, Edge
    - Verify all features work across browsers
    - Test on iOS and Android devices
    - _Requirements: 5.1_
