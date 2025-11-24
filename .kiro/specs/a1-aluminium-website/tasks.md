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

- [x] 8. Build Home page
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

- [x] 22. Implement Cart Context and State Management
  - Create `src/contexts/CartContext.tsx` with cart state provider
  - Implement cart actions: addItem, updateQuantity, removeItem, applyCoupon, clearCart
  - Create `src/hooks/useCart.ts` hook for accessing cart context
  - Create `src/hooks/useLocalStorage.ts` for persistent storage
  - Create `src/lib/cart-storage.ts` with localStorage utilities and versioning
  - Wrap root layout with CartProvider
  - _Requirements: 13.4, 15.5_

- [x] 23. Build Cart UI Components
- [x] 23.1 Create Cart Icon component
  - Implement `src/components/cart/CartIcon.tsx` with item count badge
  - Add animated badge when count changes
  - Add click handler to navigate to cart page
  - Integrate into Header component
  - _Requirements: 13.5_

- [x] 23.2 Create Floating Cart Button
  - Implement `src/components/cart/FloatingCartButton.tsx` as fixed position button
  - Show item count and total price
  - Add animated entrance/exit based on cart state
  - Position above mobile navigation
  - Add click handler to navigate to cart page
  - _Requirements: 13.5_

- [x] 23.3 Create Quantity Selector component
  - Implement `src/components/ui/QuantitySelector.tsx` with increment/decrement buttons
  - Enforce min (1) and max (10) quantity limits
  - Add disabled states for min/max reached
  - Style with proper touch targets (44x44px)
  - _Requirements: 13.3, 14.3_

- [x] 23.4 Create Cart Item component
  - Implement `src/components/cart/CartItem.tsx` for individual cart items
  - Display service image, name, option name, price
  - Integrate QuantitySelector for quantity updates
  - Add remove button with confirmation
  - _Requirements: 15.1, 15.2_

- [x] 23.5 Create Cart Summary component
  - Implement `src/components/cart/CartSummary.tsx` for payment summary
  - Display subtotal, discount, and total
  - Show applied coupon with remove option
  - Add Book Now button
  - _Requirements: 15.4_

- [x] 23.6 Create Coupon Section component
  - Implement `src/components/cart/CouponSection.tsx` with input and apply button
  - Create `src/data/coupons.ts` with available coupons
  - Add coupon validation logic
  - Show success/error messages
  - Display discount amount when applied
  - _Requirements: 15.3_

- [x] 24. Update Mobile Navigation
  - Update `src/components/layout/MobileNav.tsx` with new tab labels
  - Change "Services" to "Products" with appropriate icon
  - Update navigation items: Home, Products, Contact, Call
  - Ensure active state works correctly
  - Test on mobile devices
  - _Requirements: 17.1, 17.2, 17.3, 17.4, 17.5_

- [x] 25. Create Service Data with Options
  - Update `src/data/services.ts` with comprehensive service data
  - Add multiple ServiceOption objects for each service (1-seater, 2-seater, etc.)
  - Add processSteps array with 6 steps for each service
  - Add priceIncludes, materials, trustBadges arrays
  - Include rating, reviewCount, duration for each service and option
  - Create at least 10-15 services with full data
  - _Requirements: 18.1, 18.2, 18.3, 18.4, 18.5_

- [x] 26. Build Service Selection Components
- [x] 26.1 Create Service Grid component
  - Implement `src/components/services/ServiceGrid.tsx` with responsive grid
  - Use 4 columns on mobile, 6 on tablet, 8 on desktop
  - Display compact service cards with images and names
  - Add click handler to open service detail modal
  - Implement loading and empty states
  - _Requirements: 13.1, 20.1, 20.2, 20.3, 20.4_

- [x] 26.2 Create Service Option Card component
  - Implement `src/components/services/ServiceOptionCard.tsx`
  - Display option name, price, rating, review count, estimated time
  - Integrate QuantitySelector component
  - Add "Add to Cart" button
  - Show option image if available
  - _Requirements: 14.2, 14.3_

- [x] 26.3 Create Service Detail Modal component
  - Implement `src/components/services/ServiceDetailModal.tsx` as full-screen modal
  - Add modal header with service name, rating, duration
  - Display all service options using ServiceOptionCard
  - Add "What's Included" section with feature list
  - Add 6-step process section with step cards
  - Add FAQ accordion section
  - Add trust badges section
  - Implement close button and backdrop click to close
  - Make responsive (full-screen on mobile, centered on desktop)
  - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5_

- [x] 27. Update Services Page with Grid and Modal
  - Update `src/app/services/page.tsx` to use ServiceGrid
  - Create `src/app/services/ServicesPageClient.tsx` as client component
  - Implement modal state management (open/close, selected service)
  - Add service filtering by category (optional)
  - Integrate with cart context for adding items
  - Add SEO metadata
  - _Requirements: 13.1, 13.2, 13.3, 13.4_

- [x] 28. Build Cart Page
  - Create `src/app/cart/page.tsx` for shopping cart
  - Display list of cart items using CartItem component
  - Add CouponSection component
  - Add CartSummary component with payment breakdown
  - Implement empty cart state with "Browse Services" link
  - Add "Continue Shopping" button
  - Ensure mobile responsiveness
  - _Requirements: 15.1, 15.2, 15.3, 15.4_

- [x] 29. Implement WhatsApp Booking Integration
  - Create `src/lib/whatsapp-booking.ts` with message formatting
  - Implement formatWhatsAppMessage function with cart items, prices, totals
  - Implement openWhatsAppBooking function to open WhatsApp with pre-filled message
  - Add analytics tracking for booking initiation
  - Integrate with Cart Summary "Book Now" button
  - Test WhatsApp link generation and message format
  - _Requirements: 16.1, 16.2, 16.3, 16.4, 16.5_

- [x] 30. Implement Booking Summary Bar
  - Create `src/components/cart/BookingSummaryBar.tsx` as sticky bottom bar
  - Show item count and total price
  - Add "View Cart" and "Book Now" buttons
  - Position above mobile navigation
  - Add slide-up animation when cart has items
  - Hide when cart is empty
  - Make responsive for mobile and desktop
  - _Requirements: 19.3_

- [x] 31. Enhance Conversion Features for Cart
  - Update `src/components/conversion/ExitIntentPopup.tsx` to show when cart has items
  - Update `src/components/conversion/UrgencyNotifications.tsx` with cart-related messages
  - Add popular service badges to ServiceGrid
  - Add customer photos section to service pages
  - Ensure trust badges display in ServiceDetailModal
  - _Requirements: 19.1, 19.2, 19.4, 19.5_

- [x] 32. Update Analytics Tracking for Cart
  - Update `src/lib/analytics.ts` with cart-specific events
  - Add trackAddToCart event
  - Add trackRemoveFromCart event
  - Add trackCartView event
  - Add trackCouponApply event
  - Add trackBookingInitiated event with cart value
  - Integrate tracking throughout cart components
  - _Requirements: 16.4_

- [ ]* 33. Testing and quality assurance
  - [ ]* 33.1 Test cart functionality
    - Test adding items to cart from service modal
    - Test quantity updates and item removal
    - Test coupon application and validation
    - Test cart persistence across page refreshes
    - Test cart clearing
    - _Requirements: 13.3, 13.4, 15.2, 15.3, 15.5_
  
  - [ ]* 33.2 Test WhatsApp booking flow
    - Test message formatting with various cart combinations
    - Test WhatsApp link opening
    - Verify message includes all cart details
    - Test with and without coupons
    - _Requirements: 16.1, 16.2, 16.3_
  
  - [ ]* 33.3 Test service modal functionality
    - Test modal opening and closing
    - Test service option selection
    - Test quantity selector
    - Test add to cart from modal
    - Test modal responsiveness
    - _Requirements: 14.1, 14.2, 14.3_
  
  - [ ]* 33.4 Test mobile navigation update
    - Verify new tab labels (Home, Products, Contact, Call)
    - Test navigation to correct pages
    - Test call functionality
    - Test active states
    - _Requirements: 17.1, 17.2, 17.3, 17.4, 17.5_
  
  - [ ]* 33.5 Test responsive grid layouts
    - Test service grid on mobile (4 columns)
    - Test service grid on tablet (6 columns)
    - Test service grid on desktop (8 columns)
    - Verify touch interactions on mobile
    - _Requirements: 20.1, 20.2, 20.3, 20.4, 20.5_
  
  - [ ]* 33.6 Run Lighthouse performance audit
    - Test on mobile and desktop
    - Ensure performance score ≥ 85
    - Verify Core Web Vitals
    - _Requirements: 10.4_
  
  - [ ]* 33.7 Test accessibility compliance
    - Run automated accessibility tests with axe-core
    - Test keyboard navigation
    - Verify ARIA labels and semantic HTML
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5_
  
  - [ ]* 33.8 Cross-browser testing
    - Test on Chrome, Firefox, Safari, Edge
    - Verify all features work across browsers
    - Test on iOS and Android devices
    - _Requirements: 5.1_
