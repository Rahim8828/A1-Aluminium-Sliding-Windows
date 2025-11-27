'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, Clock, ArrowRight } from 'lucide-react';

interface MobileServiceCardProps {
  title: string;
  image: string;
  rating: number;
  reviews: number;
  startingPrice: string;
  duration: string;
  href: string;
}

export function MobileServiceCard({
  title,
  image,
  rating,
  reviews,
  startingPrice,
  duration,
  href,
}: MobileServiceCardProps) {
  return (
    <Link
      href={href}
      className="block bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
    >
      <div className="flex gap-3 p-3">
        {/* Image */}
        <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="96px"
          />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-sm mb-1 line-clamp-2">
            {title}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium text-gray-900">{rating}</span>
            <span className="text-xs text-gray-500">({reviews})</span>
          </div>

          {/* Price & Duration */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-gray-500">Starting at</div>
              <div className="text-sm font-bold text-orange-600">
                {startingPrice}
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <Clock className="w-3 h-3" />
              <span>{duration}</span>
            </div>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex items-center">
          <ArrowRight className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </Link>
  );
}
