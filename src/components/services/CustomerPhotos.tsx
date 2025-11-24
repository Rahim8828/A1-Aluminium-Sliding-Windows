'use client';

/**
 * Customer Photos Component
 * Displays customer project photos to build trust and showcase real work
 */

import Image from 'next/image';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface CustomerPhoto {
  id: string;
  image: string;
  customerName: string;
  location: string;
  service: string;
  date: string;
}

interface CustomerPhotosProps {
  photos?: CustomerPhoto[];
  title?: string;
}

// Default customer photos
const DEFAULT_PHOTOS: CustomerPhoto[] = [
  {
    id: '1',
    image: '/images/services/aluminium-windows-1.jpg',
    customerName: 'Rajesh K.',
    location: 'Andheri West',
    service: 'Aluminium Windows',
    date: 'Nov 2024'
  },
  {
    id: '2',
    image: '/images/services/glass-partitions-1.jpg',
    customerName: 'Priya S.',
    location: 'Bandra',
    service: 'Glass Partitions',
    date: 'Oct 2024'
  },
  {
    id: '3',
    image: '/images/services/safety-nets-1.jpg',
    customerName: 'Amit M.',
    location: 'Goregaon',
    service: 'Safety Nets',
    date: 'Nov 2024'
  },
  {
    id: '4',
    image: '/images/services/aluminium-doors-1.jpg',
    customerName: 'Sneha P.',
    location: 'Powai',
    service: 'Aluminium Doors',
    date: 'Oct 2024'
  },
  {
    id: '5',
    image: '/images/services/glass-railings-1.jpg',
    customerName: 'Vikram R.',
    location: 'Jogeshwari',
    service: 'Glass Railings',
    date: 'Sep 2024'
  },
  {
    id: '6',
    image: '/images/services/aluminium-sliding-1.jpg',
    customerName: 'Meera D.',
    location: 'Andheri East',
    service: 'Sliding Windows',
    date: 'Nov 2024'
  }
];

export default function CustomerPhotos({
  photos = DEFAULT_PHOTOS,
  title = "Real Projects from Happy Customers"
}: CustomerPhotosProps) {
  const [selectedPhoto, setSelectedPhoto] = useState<CustomerPhoto | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (photo: CustomerPhoto, index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhoto(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : photos.length - 1;
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex < photos.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedPhoto(photos[newIndex]);
  };

  if (!photos || photos.length === 0) return null;

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See the quality of our work through photos shared by our satisfied customers across Mumbai
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => openLightbox(photo, index)}
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
              aria-label={`View photo from ${photo.customerName} in ${photo.location}`}
            >
              <Image
                src={photo.image}
                alt={`${photo.service} project by ${photo.customerName} in ${photo.location}`}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <p className="text-xs font-semibold truncate">{photo.customerName}</p>
                  <p className="text-[10px] text-gray-200 truncate">{photo.location}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600">
            ⭐ Join {photos.length}+ happy customers who trusted us with their projects
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close photo viewer"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-10 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-10 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Next photo"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={selectedPhoto.image}
                alt={`${selectedPhoto.service} project by ${selectedPhoto.customerName}`}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-contain"
                priority
              />
            </div>

            {/* Photo Info */}
            <div className="mt-4 bg-white/10 backdrop-blur-sm rounded-lg p-4 text-white">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-bold text-lg mb-1">{selectedPhoto.service}</h3>
                  <p className="text-sm text-gray-200">
                    Customer: {selectedPhoto.customerName} • {selectedPhoto.location}
                  </p>
                </div>
                <div className="text-right text-sm text-gray-300">
                  {selectedPhoto.date}
                </div>
              </div>
            </div>

            {/* Counter */}
            <div className="mt-2 text-center text-white text-sm">
              {currentIndex + 1} / {photos.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
