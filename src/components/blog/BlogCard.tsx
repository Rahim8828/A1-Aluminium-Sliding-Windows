'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
      <Link href={`/blog/${post.slug}`} className="block flex-1 flex flex-col">
        {/* Thumbnail Image */}
        <div className="relative h-48 md:h-56 w-full overflow-hidden bg-gray-100">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={85}
          />
          {/* Category Badge */}
          <div className="absolute top-3 left-3 md:top-4 md:left-4">
            <span className="bg-orange-600 text-white text-xs md:text-sm font-semibold px-2 py-1 md:px-3 md:py-1 rounded-full shadow-lg">
              {post.category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 md:p-6 flex-1 flex flex-col">
          {/* Date and Read Time */}
          <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm text-gray-500 mb-2 md:mb-3">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-IN', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </time>
            <span>•</span>
            <span>{post.readTime} min read</span>
          </div>

          {/* Title */}
          <h3 className="text-base md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
            {post.title}
          </h3>

          {/* Excerpt */}
          <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 line-clamp-3 flex-1">{post.excerpt}</p>

          {/* Read More Link */}
          <div className="flex items-center text-orange-600 font-semibold group-hover:gap-2 transition-all text-sm md:text-base mt-auto">
            <span>Read More</span>
            <svg
              className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </Link>
    </article>
  );
}
