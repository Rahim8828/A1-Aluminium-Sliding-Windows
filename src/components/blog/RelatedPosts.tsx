'use client';

import { BlogPost } from '@/types';
import BlogCard from './BlogCard';

interface RelatedPostsProps {
  posts: BlogPost[];
  currentPostSlug: string;
  category?: string;
  tags?: string[];
  maxPosts?: number;
}

export default function RelatedPosts({
  posts,
  currentPostSlug,
  category,
  tags = [],
  maxPosts = 3,
}: RelatedPostsProps) {
  // Filter and score posts based on relevance
  const scoredPosts = posts
    .filter((post) => post.slug !== currentPostSlug)
    .map((post) => {
      let score = 0;

      // Same category gets highest priority
      if (category && post.category === category) {
        score += 10;
      }

      // Matching tags get points
      if (tags.length > 0) {
        const matchingTags = post.tags.filter((tag) => tags.includes(tag));
        score += matchingTags.length * 3;
      }

      return { post, score };
    })
    .sort((a, b) => {
      // Sort by score first, then by date
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return new Date(b.post.date).getTime() - new Date(a.post.date).getTime();
    })
    .slice(0, maxPosts)
    .map((item) => item.post);

  if (scoredPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-16 border-t border-gray-200">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Related Articles</h2>
        <p className="text-gray-600">
          Continue reading with these related posts
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scoredPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
