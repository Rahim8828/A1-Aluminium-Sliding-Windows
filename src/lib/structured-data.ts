import { BUSINESS_INFO } from './constants';

/**
 * Generate LocalBusiness schema for the business
 */
export function generateLocalBusinessSchema() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://a1aluminium.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${siteUrl}/#organization`,
    name: BUSINESS_INFO.name,
    image: `${siteUrl}/images/logo.png`,
    description: BUSINESS_INFO.description,
    url: siteUrl,
    telephone: BUSINESS_INFO.phone.primary,
    email: BUSINESS_INFO.email.primary,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.postalCode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 19.1136,
      longitude: 72.8697,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '19:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '17:00',
      },
    ],
    areaServed: BUSINESS_INFO.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
      containedInPlace: {
        '@type': 'City',
        name: 'Mumbai',
      },
    })),
    sameAs: [
      BUSINESS_INFO.social.facebook,
      BUSINESS_INFO.social.instagram,
      BUSINESS_INFO.social.twitter,
      BUSINESS_INFO.social.linkedin,
      BUSINESS_INFO.social.youtube,
    ],
  };
}

/**
 * Generate Service schema for a specific service
 */
export function generateServiceSchema(service: {
  name: string;
  description: string;
  serviceType: string;
  url: string;
  areaServed?: string[];
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://a1aluminium.com';

  // Generate areaServed based on provided areas or default to Mumbai
  const areaServedSchema = service.areaServed
    ? service.areaServed.map((area) => ({
        '@type': 'City' as const,
        name: area,
        containedInPlace: {
          '@type': 'City' as const,
          name: 'Mumbai',
        },
      }))
    : {
        '@type': 'City' as const,
        name: 'Mumbai',
        containedInPlace: {
          '@type': 'State' as const,
          name: 'Maharashtra',
        },
      };

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    serviceType: service.serviceType,
    provider: {
      '@type': 'LocalBusiness',
      name: BUSINESS_INFO.name,
      '@id': `${siteUrl}/#organization`,
    },
    areaServed: areaServedSchema,
    url: `${siteUrl}${service.url}`,
  };
}

/**
 * Generate Article schema for blog posts
 */
export function generateArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://a1aluminium.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image.startsWith('http') ? article.image : `${siteUrl}${article.image}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_INFO.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/images/logo.png`,
      },
    },
    url: `${siteUrl}${article.url}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}${article.url}`,
    },
  };
}

/**
 * Generate Review schema for testimonials
 */
export function generateReviewSchema(review: {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://a1aluminium.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'LocalBusiness',
      name: BUSINESS_INFO.name,
      '@id': `${siteUrl}/#organization`,
    },
    author: {
      '@type': 'Person',
      name: review.author,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
  };
}

/**
 * Generate BreadcrumbList schema for navigation
 */
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://a1aluminium.com';

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: `${siteUrl}${crumb.url}`,
    })),
  };
}
