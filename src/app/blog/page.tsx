import { Metadata } from 'next';
import BlogCard from '@/components/blog/BlogCard';
import { blogPosts, getAllCategories } from '@/data/blog-posts';

// Enable ISR - revalidate every 3600 seconds (1 hour)
export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Blog - Tips & Guides | A1 Aluminium, Glass & Netting Solutions',
  description: 'Expert tips, guides, and insights on aluminium fabrication, glass installation, and safety netting. Location-specific guides for Andheri, Bandra, Goregaon, Powai & Mumbai areas.',
  keywords: [
    'aluminium tips mumbai',
    'glass installation guide',
    'safety nets guide',
    'home improvement mumbai',
    'diy tips',
    'aluminium windows guide',
    'glass partition tips',
    'balcony safety mumbai',
    'monsoon windows mumbai',
  ],
  openGraph: {
    title: 'Blog - Tips & Guides | A1 Aluminium Solutions',
    description: 'Expert tips and guides on aluminium, glass, and netting solutions for Mumbai homes and offices.',
    type: 'website',
    url: '/blog',
  },
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogPage() {
  const categories = getAllCategories();
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4">
              Our Blog
            </h1>
            <p className="text-sm md:text-lg lg:text-xl text-orange-100">
              Expert tips, guides, and insights on aluminium, glass, and netting solutions for your home and office
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="bg-white border-b border-gray-200 sticky top-16 z-10 shadow-sm">
        <div className="container mx-auto px-4 py-3 md:py-4">
          <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
            <button className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-orange-600 text-white text-xs md:text-sm font-semibold hover:bg-orange-700 transition-colors">
              All Posts
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-gray-100 text-gray-700 text-xs md:text-sm font-semibold hover:bg-gray-200 transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {sortedPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {/* Empty State (if no posts) */}
          {sortedPosts.length === 0 && (
            <div className="text-center py-12 md:py-16">
              <p className="text-gray-500 text-base md:text-lg">No blog posts found.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-600 text-white py-8 md:py-12 lg:py-16 pb-20 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
            Need Expert Advice?
          </h2>
          <p className="text-sm md:text-lg lg:text-xl text-orange-100 mb-6 md:mb-8 max-w-2xl mx-auto">
            Our team is ready to help you with your aluminium, glass, or netting project. Get a free consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
            <a
              href="tel:+919876543210"
              className="inline-block bg-white text-orange-600 px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-gray-100 transition-colors"
            >
              Call Now
            </a>
            <a
              href="https://wa.me/919876543210"
              className="inline-block bg-green-500 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-bold text-base md:text-lg hover:bg-green-600 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
