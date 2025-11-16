import React from 'react';

interface StructuredDataProps {
  data: Record<string, any>;
}

/**
 * StructuredData component for rendering JSON-LD schema markup
 * Supports LocalBusiness, Service, Review, Article, and other schema types
 */
export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
