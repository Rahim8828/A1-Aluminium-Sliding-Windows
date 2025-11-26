import { Metadata } from 'next';

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

/**
 * Generate metadata for SEO optimization
 * Includes Open Graph and Twitter Card tags
 */
export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  ogImage = '/website-images/og-default.jpg',
  canonical,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
}: SEOHeadProps): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://a1aluminium.com';
  const fullTitle = title.includes('A1 Aluminium') ? title : `${title} | A1 Aluminium Solutions`;
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : undefined;
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: author ? [{ name: author }] : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: 'A1 Aluminium, Glass & Netting Solutions',
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_IN',
      type: type,
      publishedTime,
      modifiedTime,
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImageUrl],
      creator: '@a1aluminium',
    },
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };

  return metadata;
}
