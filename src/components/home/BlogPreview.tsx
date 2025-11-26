import Link from 'next/link';
import Image from 'next/image';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { Card } from '@/components/ui/Card';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string;
  readTime: number;
}

// Placeholder blog posts - will be replaced with actual data from src/data/blog-posts.ts
const recentPosts: BlogPost[] = [
  {
    slug: 'aluminium-windows-guide-mumbai',
    title: 'Complete Guide to Choosing Aluminium Windows in Mumbai',
    excerpt:
      'Learn everything you need to know about selecting the perfect aluminium windows for your Mumbai home, including styles, benefits, and pricing.',
    image: '/aluminium-category/2-Track-sliding-Window.webp',
    category: 'Service Guides',
    date: '2024-10-20',
    readTime: 5,
  },
  {
    slug: 'safety-nets-child-protection',
    title: 'Why Safety Nets Are Essential for Child Protection in High-Rise Buildings',
    excerpt:
      'Discover how safety nets can protect your children and pets in Mumbai apartments, with tips on choosing the right netting solution.',
    image: '/netting-category/Industrial safety net.webp',
    category: 'Safety Tips',
    date: '2024-10-15',
    readTime: 4,
  },
  {
    slug: 'glass-partitions-office-design',
    title: 'Modern Office Design: The Benefits of Glass Partitions',
    excerpt:
      'Explore how glass partitions can transform your office space, improve productivity, and create a modern work environment.',
    image: '/glass-category/Toughened glass.webp',
    category: 'Design Ideas',
    date: '2024-10-10',
    readTime: 6,
  },
];

export function BlogPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Latest from Our Blog
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              Expert tips, guides, and insights about aluminium, glass, and netting solutions
            </p>
          </div>
          <Link
            href="/blog"
            className="mt-4 md:mt-0 inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
          >
            View All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {recentPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <Card className="h-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                {/* Image */}
                <div className="relative h-48 md:h-56 bg-gradient-to-br from-orange-400 to-orange-600 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={85}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-orange-600 text-xs font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(post.date)}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700">
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2" />
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-900 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          >
            Explore All Articles
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
