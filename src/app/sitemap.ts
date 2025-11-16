import { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { blogPosts } from '@/data/blog-posts';
import { locations } from '@/data/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://a1aluminium.com';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
  ];

  // Service category pages
  const serviceCategoryPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/services/aluminium`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/glass`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/netting`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Individual service pages (if you have detail pages for each service)
  // Uncomment if you create individual service detail pages
  // const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
  //   url: `${baseUrl}/services/${service.category}/${service.slug}`,
  //   lastModified: new Date(),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.7,
  // }));

  // Blog post pages
  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // Location pages (if you create dedicated location pages in the future)
  // const locationPages: MetadataRoute.Sitemap = locations.map((location) => ({
  //   url: `${baseUrl}/locations/${location.slug}`,
  //   lastModified: new Date(),
  //   changeFrequency: 'monthly' as const,
  //   priority: 0.7,
  // }));

  return [
    ...staticPages,
    ...serviceCategoryPages,
    // ...servicePages,
    ...blogPages,
    // ...locationPages,
  ];
}
