import { Location } from '@/types';

export const locations: Location[] = [
  {
    name: 'Andheri',
    slug: 'andheri',
    description:
      'Serving Andheri East and West with premium aluminium, glass, and netting solutions. Quick response time and professional service for residential and commercial properties.',
    coordinates: {
      lat: 19.1136,
      lng: 72.8697,
    },
    servicesAvailable: [
      'aluminium-windows',
      'aluminium-doors',
      'glass-partitions',
      'safety-nets',
      'bird-netting',
    ],
  },
  {
    name: 'Bandra',
    slug: 'bandra',
    description:
      'Premium aluminium and glass solutions in Bandra East and West. Specializing in modern designs for upscale residential and commercial spaces.',
    coordinates: {
      lat: 19.0596,
      lng: 72.8295,
    },
    servicesAvailable: [
      'aluminium-windows',
      'aluminium-doors',
      'glass-partitions',
      'glass-doors',
      'shower-enclosures',
      'glass-railings',
      'safety-nets',
    ],
  },
  {
    name: 'Goregaon',
    slug: 'goregaon',
    description:
      'Comprehensive aluminium fabrication and glass installation services in Goregaon East and West. Trusted by hundreds of satisfied customers.',
    coordinates: {
      lat: 19.1663,
      lng: 72.8526,
    },
    servicesAvailable: [
      'aluminium-windows',
      'aluminium-doors',
      'aluminium-partitions',
      'glass-partitions',
      'safety-nets',
      'bird-netting',
      'anti-monkey-nets',
    ],
  },
  {
    name: 'Jogeshwari',
    slug: 'jogeshwari',
    description:
      'Expert aluminium and glass services in Jogeshwari East and West. Fast installation and competitive pricing for all types of projects.',
    coordinates: {
      lat: 19.1354,
      lng: 72.8512,
    },
    servicesAvailable: [
      'aluminium-windows',
      'aluminium-doors',
      'aluminium-sliding-systems',
      'glass-partitions',
      'safety-nets',
      'bird-netting',
    ],
  },
  {
    name: 'Powai',
    slug: 'powai',
    description:
      'High-quality aluminium, glass, and safety netting solutions for Powai residents. Specializing in modern apartment complexes and premium homes.',
    coordinates: {
      lat: 19.1176,
      lng: 72.9060,
    },
    servicesAvailable: [
      'aluminium-windows',
      'aluminium-doors',
      'glass-partitions',
      'glass-doors',
      'shower-enclosures',
      'glass-railings',
      'safety-nets',
      'bird-netting',
    ],
  },
  {
    name: 'Malad',
    slug: 'malad',
    description:
      'Reliable aluminium and glass services in Malad East and West. Professional installation with warranty and after-sales support.',
    coordinates: {
      lat: 19.1864,
      lng: 72.8493,
    },
    servicesAvailable: [
      'aluminium-windows',
      'aluminium-doors',
      'aluminium-partitions',
      'glass-partitions',
      'safety-nets',
      'bird-netting',
      'anti-monkey-nets',
    ],
  },
  {
    name: 'Kandivali',
    slug: 'kandivali',
    description:
      'Complete range of aluminium fabrication, glass work, and safety netting in Kandivali East and West. Quality workmanship guaranteed.',
    coordinates: {
      lat: 19.2074,
      lng: 72.8479,
    },
    servicesAvailable: [
      'aluminium-windows',
      'aluminium-doors',
      'aluminium-sliding-systems',
      'glass-partitions',
      'safety-nets',
      'bird-netting',
      'anti-monkey-nets',
      'sports-nets',
    ],
  },
  {
    name: 'Borivali',
    slug: 'borivali',
    description:
      'Trusted aluminium, glass, and netting services in Borivali East and West. Serving residential societies and commercial establishments.',
    coordinates: {
      lat: 19.2304,
      lng: 72.8570,
    },
    servicesAvailable: [
      'aluminium-windows',
      'aluminium-doors',
      'aluminium-partitions',
      'glass-partitions',
      'safety-nets',
      'bird-netting',
      'anti-monkey-nets',
    ],
  },
  {
    name: 'Santacruz',
    slug: 'santacruz',
    description:
      'Premium aluminium and glass solutions in Santacruz East and West. Expert craftsmanship for residential and commercial projects.',
    coordinates: {
      lat: 19.0812,
      lng: 72.8420,
    },
    servicesAvailable: [
      'aluminium-windows',
      'aluminium-doors',
      'glass-partitions',
      'glass-doors',
      'shower-enclosures',
      'glass-railings',
      'safety-nets',
    ],
  },
  {
    name: 'Vile Parle',
    slug: 'vile-parle',
    description:
      'Professional aluminium fabrication and glass installation in Vile Parle East and West. Quick turnaround and excellent customer service.',
    coordinates: {
      lat: 19.1009,
      lng: 72.8448,
    },
    servicesAvailable: [
      'aluminium-windows',
      'aluminium-doors',
      'aluminium-partitions',
      'glass-partitions',
      'glass-doors',
      'safety-nets',
      'bird-netting',
    ],
  },
  {
    name: 'Dahisar',
    slug: 'dahisar',
    description:
      'Comprehensive aluminium, glass, and safety solutions in Dahisar East and West. Affordable pricing without compromising on quality.',
    coordinates: {
      lat: 19.2544,
      lng: 72.8625,
    },
    servicesAvailable: [
      'aluminium-windows',
      'aluminium-doors',
      'safety-nets',
      'bird-netting',
      'anti-monkey-nets',
    ],
  },
  {
    name: 'Chembur',
    slug: 'chembur',
    description:
      'Quality aluminium and glass services in Chembur. Experienced team delivering excellent results for homes and offices.',
    coordinates: {
      lat: 19.0622,
      lng: 72.8990,
    },
    servicesAvailable: [
      'aluminium-windows',
      'aluminium-doors',
      'glass-partitions',
      'glass-doors',
      'safety-nets',
      'bird-netting',
    ],
  },
];

// Helper functions
export const getLocationBySlug = (slug: string): Location | undefined => {
  return locations.find((location) => location.slug === slug);
};

export const getLocationsByService = (serviceId: string): Location[] => {
  return locations.filter((location) =>
    location.servicesAvailable.includes(serviceId)
  );
};

export const getAllLocationNames = (): string[] => {
  return locations.map((location) => location.name);
};

export const getLocationsByArea = (searchTerm: string): Location[] => {
  const term = searchTerm.toLowerCase();
  return locations.filter((location) =>
    location.name.toLowerCase().includes(term)
  );
};
