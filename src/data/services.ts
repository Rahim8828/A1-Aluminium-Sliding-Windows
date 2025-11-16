import { Service } from '@/types';

export const services: Service[] = [
  // ALUMINIUM SERVICES
  {
    id: 'aluminium-windows',
    slug: 'aluminium-windows',
    category: 'aluminium',
    title: 'Aluminium Windows',
    shortDescription:
      'Premium quality aluminium windows with superior durability and modern aesthetics for residential and commercial spaces.',
    fullDescription:
      'Our aluminium windows combine strength, style, and energy efficiency. Manufactured using high-grade aluminium profiles, these windows offer excellent thermal insulation, weather resistance, and require minimal maintenance. Available in sliding, casement, and fixed configurations with powder-coated finishes in various colors.',
    benefits: [
      'Corrosion-resistant and long-lasting',
      'Low maintenance requirements',
      'Energy-efficient thermal insulation',
      'Sleek modern design',
      'Available in multiple colors and finishes',
      'Weather-proof and dust-proof sealing',
    ],
    useCases: [
      'Residential apartments and villas',
      'Commercial offices and showrooms',
      'Hotels and hospitality spaces',
      'Educational institutions',
      'Healthcare facilities',
    ],
    images: [
      '/images/services/aluminium-windows-1.jpg',
      '/images/services/aluminium-windows-2.jpg',
      '/images/services/aluminium-windows-3.jpg',
    ],
    pricing: {
      type: 'range',
      min: 350,
      max: 800,
      unit: 'per sq ft',
    },
    faqs: [
      {
        question: 'How long do aluminium windows last?',
        answer:
          'With proper maintenance, aluminium windows can last 20-30 years or more. They are highly durable and resistant to corrosion.',
      },
      {
        question: 'Are aluminium windows energy efficient?',
        answer:
          'Yes, modern aluminium windows with thermal breaks provide excellent insulation and can significantly reduce energy costs.',
      },
      {
        question: 'What colors are available?',
        answer:
          'We offer powder-coated finishes in white, black, bronze, silver, and custom colors to match your interior design.',
      },
    ],
    relatedServices: ['aluminium-doors', 'aluminium-partitions'],
  },
  {
    id: 'aluminium-doors',
    slug: 'aluminium-doors',
    category: 'aluminium',
    title: 'Aluminium Doors',
    shortDescription:
      'Stylish and secure aluminium doors for main entrances, balconies, and interior spaces with customizable designs.',
    fullDescription:
      'Our aluminium doors provide the perfect blend of security, aesthetics, and functionality. From sliding doors to hinged and folding options, we offer a wide range of designs suitable for both residential and commercial applications. Each door is crafted with precision and fitted with high-quality hardware.',
    benefits: [
      'High security with multi-point locking systems',
      'Smooth operation and easy maintenance',
      'Customizable designs and sizes',
      'Weather-resistant and durable',
      'Sound insulation properties',
      'Fire-resistant options available',
    ],
    useCases: [
      'Main entrance doors',
      'Balcony and terrace access',
      'Interior room partitions',
      'Office cabins and meeting rooms',
      'Shop fronts and commercial entrances',
    ],
    images: [
      '/images/services/aluminium-doors-1.jpg',
      '/images/services/aluminium-doors-2.jpg',
    ],
    pricing: {
      type: 'range',
      min: 400,
      max: 1200,
      unit: 'per sq ft',
    },
    faqs: [
      {
        question: 'Can aluminium doors be customized?',
        answer:
          'Yes, we offer fully customizable designs including size, color, glass type, and hardware options.',
      },
      {
        question: 'Are aluminium doors secure?',
        answer:
          'Absolutely. Our doors come with multi-point locking systems and can be fitted with additional security features.',
      },
    ],
    relatedServices: ['aluminium-windows', 'aluminium-sliding-systems'],
  },
  {
    id: 'aluminium-partitions',
    slug: 'aluminium-partitions',
    category: 'aluminium',
    title: 'Aluminium Partitions',
    shortDescription:
      'Modern aluminium partition systems for offices and homes, creating functional spaces with elegant designs.',
    fullDescription:
      'Transform your space with our versatile aluminium partition systems. Perfect for creating separate work areas, meeting rooms, or dividing large spaces, our partitions offer flexibility, sound insulation, and a professional appearance. Available with glass, solid panels, or combination designs.',
    benefits: [
      'Quick and clean installation',
      'Flexible and reconfigurable layouts',
      'Sound insulation for privacy',
      'Professional and modern appearance',
      'Maximizes natural light with glass options',
      'Cost-effective space management',
    ],
    useCases: [
      'Office cabins and workstations',
      'Conference and meeting rooms',
      'Retail store sections',
      'Hospital and clinic divisions',
      'Home office spaces',
    ],
    images: ['/images/services/aluminium-partitions-1.jpg'],
    pricing: {
      type: 'range',
      min: 300,
      max: 700,
      unit: 'per sq ft',
    },
    faqs: [
      {
        question: 'Can partitions be relocated?',
        answer:
          'Yes, our aluminium partition systems are designed to be demountable and can be relocated as your needs change.',
      },
      {
        question: 'What glass options are available?',
        answer:
          'We offer clear, frosted, tinted, and decorative glass options for partitions.',
      },
    ],
    relatedServices: ['glass-partitions', 'aluminium-doors'],
  },
  {
    id: 'aluminium-sliding-systems',
    slug: 'aluminium-sliding-systems',
    category: 'aluminium',
    title: 'Aluminium Sliding Systems',
    shortDescription:
      'Space-saving sliding window and door systems with smooth operation and contemporary design.',
    fullDescription:
      'Our premium sliding systems offer effortless operation and space optimization. Featuring high-quality rollers and tracks, these systems provide years of smooth, quiet performance. Ideal for balconies, terraces, and areas where space is at a premium.',
    benefits: [
      'Space-saving design',
      'Smooth and quiet operation',
      'Large glass areas for maximum light',
      'Easy to clean and maintain',
      'Weather-sealed for protection',
      'Available in 2, 3, or 4 track configurations',
    ],
    useCases: [
      'Balcony enclosures',
      'Terrace access',
      'Patio doors',
      'Room dividers',
      'Wardrobe doors',
    ],
    images: ['/images/services/aluminium-sliding-1.jpg'],
    pricing: {
      type: 'range',
      min: 380,
      max: 900,
      unit: 'per sq ft',
    },
    faqs: [
      {
        question: 'How many tracks can be installed?',
        answer:
          'We offer 2-track, 3-track, and 4-track sliding systems depending on your space and requirements.',
      },
    ],
    relatedServices: ['aluminium-windows', 'aluminium-doors'],
  },

  // GLASS SERVICES
  {
    id: 'glass-partitions',
    slug: 'glass-partitions',
    category: 'glass',
    title: 'Glass Partitions',
    shortDescription:
      'Elegant frameless and framed glass partitions for modern offices and homes, maximizing light and space.',
    fullDescription:
      'Create sophisticated, light-filled spaces with our glass partition solutions. Available in frameless, semi-framed, and fully framed options, our partitions use toughened safety glass for durability and security. Perfect for modern offices, homes, and commercial spaces.',
    benefits: [
      'Maximizes natural light flow',
      'Creates open, spacious feel',
      'Sound insulation options available',
      'Easy to clean and maintain',
      'Toughened safety glass',
      'Customizable with frosted or tinted glass',
    ],
    useCases: [
      'Office meeting rooms',
      'Manager cabins',
      'Bathroom enclosures',
      'Living room dividers',
      'Retail display areas',
    ],
    images: ['/images/services/glass-partitions-1.jpg'],
    pricing: {
      type: 'range',
      min: 450,
      max: 1000,
      unit: 'per sq ft',
    },
    faqs: [
      {
        question: 'Is toughened glass safe?',
        answer:
          'Yes, toughened glass is 4-5 times stronger than regular glass and shatters into small, harmless pieces if broken.',
      },
      {
        question: 'Can I get frosted glass for privacy?',
        answer:
          'Absolutely. We offer frosted, sandblasted, and decorative film options for privacy.',
      },
    ],
    relatedServices: ['aluminium-partitions', 'glass-doors'],
  },
  {
    id: 'glass-doors',
    slug: 'glass-doors',
    category: 'glass',
    title: 'Glass Doors',
    shortDescription:
      'Premium frameless and framed glass doors for entrances, offices, and bathrooms with modern aesthetics.',
    fullDescription:
      'Our glass door solutions combine elegance with functionality. From frameless shower doors to office entrance doors, we offer a range of options using high-quality toughened glass and premium hardware. Each installation is customized to your specific requirements.',
    benefits: [
      'Contemporary and elegant design',
      'Toughened safety glass',
      'Premium quality hardware',
      'Easy maintenance',
      'Variety of glass finishes',
      'Professional installation',
    ],
    useCases: [
      'Office entrances',
      'Bathroom shower enclosures',
      'Interior room doors',
      'Shop fronts',
      'Hotel and restaurant entrances',
    ],
    images: ['/images/services/glass-doors-1.jpg'],
    pricing: {
      type: 'range',
      min: 500,
      max: 1500,
      unit: 'per door',
    },
    faqs: [
      {
        question: 'What thickness of glass is used?',
        answer:
          'We typically use 10mm or 12mm toughened glass for doors, depending on the size and application.',
      },
    ],
    relatedServices: ['glass-partitions', 'shower-enclosures'],
  },
  {
    id: 'shower-enclosures',
    slug: 'shower-enclosures',
    category: 'glass',
    title: 'Shower Enclosures',
    shortDescription:
      'Custom frameless and semi-framed shower enclosures with toughened glass for modern bathrooms.',
    fullDescription:
      'Transform your bathroom with our premium shower enclosures. Available in frameless, semi-framed, and framed designs, our enclosures use high-quality toughened glass and corrosion-resistant hardware. Custom-made to fit your bathroom perfectly.',
    benefits: [
      'Custom-fit to your bathroom',
      'Toughened safety glass',
      'Water-tight sealing',
      'Easy to clean',
      'Corrosion-resistant hardware',
      'Modern and elegant appearance',
    ],
    useCases: [
      'Residential bathrooms',
      'Hotel bathrooms',
      'Gym and spa facilities',
      'Premium apartments',
    ],
    images: ['/images/services/shower-enclosures-1.jpg'],
    pricing: {
      type: 'range',
      min: 8000,
      max: 25000,
      unit: 'per enclosure',
    },
    faqs: [
      {
        question: 'How long does installation take?',
        answer:
          'Typically 2-4 hours depending on the complexity of the design.',
      },
      {
        question: 'Is the glass easy to clean?',
        answer:
          'Yes, we can apply protective coating that makes cleaning easier and prevents water stains.',
      },
    ],
    relatedServices: ['glass-doors', 'glass-partitions'],
  },
  {
    id: 'glass-railings',
    slug: 'glass-railings',
    category: 'glass',
    title: 'Glass Railings',
    shortDescription:
      'Stylish and safe glass railing systems for balconies, staircases, and terraces with unobstructed views.',
    fullDescription:
      'Our glass railing systems provide safety without compromising views. Using toughened or laminated glass with stainless steel or aluminium channels, these railings are perfect for balconies, staircases, and pool areas. Compliant with safety standards.',
    benefits: [
      'Unobstructed views',
      'Modern and elegant design',
      'High safety standards',
      'Weather-resistant',
      'Low maintenance',
      'Increases property value',
    ],
    useCases: [
      'Balcony railings',
      'Staircase railings',
      'Terrace and rooftop areas',
      'Pool deck railings',
      'Mezzanine floors',
    ],
    images: ['/images/services/glass-railings-1.jpg'],
    pricing: {
      type: 'range',
      min: 600,
      max: 1200,
      unit: 'per running ft',
    },
    faqs: [
      {
        question: 'Is glass railing safe for children?',
        answer:
          'Yes, we use toughened or laminated glass that meets safety standards and can withstand significant impact.',
      },
    ],
    relatedServices: ['glass-partitions', 'aluminium-railings'],
  },

  // NETTING SERVICES
  {
    id: 'safety-nets',
    slug: 'safety-nets',
    category: 'netting',
    title: 'Safety Nets',
    shortDescription:
      'High-quality safety nets for balconies, windows, and terraces to protect children and pets.',
    fullDescription:
      'Our safety nets provide peace of mind for families with children and pets. Made from high-strength, UV-resistant materials, these nets are virtually invisible from a distance while providing robust protection. Professional installation ensures secure fitting.',
    benefits: [
      'Child and pet safety',
      'UV-resistant and weatherproof',
      'Nearly invisible from distance',
      'High tensile strength',
      'Easy maintenance',
      'Does not obstruct views',
    ],
    useCases: [
      'Balcony safety',
      'Window protection',
      'Terrace enclosures',
      'Staircase safety',
      'Duct area covering',
    ],
    images: ['/images/services/safety-nets-1.jpg'],
    pricing: {
      type: 'range',
      min: 25,
      max: 50,
      unit: 'per sq ft',
    },
    faqs: [
      {
        question: 'How long do safety nets last?',
        answer:
          'Our UV-resistant nets typically last 5-7 years with proper maintenance.',
      },
      {
        question: 'Are the nets visible?',
        answer:
          'The nets are designed to be nearly invisible from a distance while providing strong protection.',
      },
    ],
    relatedServices: ['bird-netting', 'anti-monkey-nets'],
  },
  {
    id: 'bird-netting',
    slug: 'bird-netting',
    category: 'netting',
    title: 'Bird Protection Nets',
    shortDescription:
      'Effective bird netting solutions to prevent pigeons and other birds from nesting in your property.',
    fullDescription:
      'Keep your property clean and bird-free with our specialized bird protection nets. These nets prevent pigeons and other birds from entering balconies, AC ducts, and other areas without harming them. Made from durable, weather-resistant materials.',
    benefits: [
      'Prevents bird nesting and droppings',
      'Humane bird control solution',
      'Weather and UV resistant',
      'Long-lasting durability',
      'Maintains property cleanliness',
      'Reduces health hazards',
    ],
    useCases: [
      'Balcony bird protection',
      'AC duct covering',
      'Terrace areas',
      'Building facades',
      'Warehouse openings',
    ],
    images: ['/images/services/bird-netting-1.jpg'],
    pricing: {
      type: 'range',
      min: 20,
      max: 40,
      unit: 'per sq ft',
    },
    faqs: [
      {
        question: 'Will the nets harm birds?',
        answer:
          'No, our nets are designed to humanely prevent birds from entering without causing harm.',
      },
      {
        question: 'What areas can be covered?',
        answer:
          'We can cover balconies, terraces, AC ducts, and any open areas where birds nest.',
      },
    ],
    relatedServices: ['safety-nets', 'anti-monkey-nets'],
  },
  {
    id: 'anti-monkey-nets',
    slug: 'anti-monkey-nets',
    category: 'netting',
    title: 'Anti-Monkey Nets',
    shortDescription:
      'Strong and durable nets to prevent monkey intrusion in residential and commercial properties.',
    fullDescription:
      'Protect your property from monkey intrusion with our heavy-duty anti-monkey nets. These extra-strong nets are specifically designed to withstand the strength and intelligence of monkeys while maintaining visibility and airflow.',
    benefits: [
      'Extra-strong construction',
      'Prevents monkey entry',
      'Weather-resistant',
      'Maintains ventilation',
      'Long-lasting durability',
      'Professional installation',
    ],
    useCases: [
      'Residential balconies',
      'Terrace areas',
      'Garden enclosures',
      'Building perimeters',
      'Agricultural areas',
    ],
    images: ['/images/services/anti-monkey-nets-1.jpg'],
    pricing: {
      type: 'range',
      min: 35,
      max: 60,
      unit: 'per sq ft',
    },
    faqs: [
      {
        question: 'How strong are these nets?',
        answer:
          'Our anti-monkey nets are made from high-tensile materials that can withstand significant force.',
      },
    ],
    relatedServices: ['safety-nets', 'bird-netting'],
  },
  {
    id: 'sports-nets',
    slug: 'sports-nets',
    category: 'netting',
    title: 'Sports & Cricket Nets',
    shortDescription:
      'Professional-grade sports nets for cricket practice, football, and other sports facilities.',
    fullDescription:
      'Set up your own practice area with our professional sports nets. Ideal for cricket practice, football, and other sports, these nets are made from high-quality materials that can withstand repeated impact. Available in various sizes and configurations.',
    benefits: [
      'Professional-grade quality',
      'Impact-resistant',
      'UV and weather resistant',
      'Custom sizes available',
      'Easy installation',
      'Durable construction',
    ],
    useCases: [
      'Cricket practice nets',
      'Football goal nets',
      'Terrace sports areas',
      'School sports facilities',
      'Community sports grounds',
    ],
    images: ['/images/services/sports-nets-1.jpg'],
    pricing: {
      type: 'quote',
    },
    faqs: [
      {
        question: 'Can nets be customized for specific sports?',
        answer:
          'Yes, we can customize net size, mesh size, and configuration for different sports.',
      },
    ],
    relatedServices: ['safety-nets'],
  },
];

// Helper functions to filter services
export const getServicesByCategory = (
  category: 'aluminium' | 'glass' | 'netting'
): Service[] => {
  return services.filter((service) => service.category === category);
};

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((service) => service.slug === slug);
};

export const getRelatedServices = (serviceId: string): Service[] => {
  const service = services.find((s) => s.id === serviceId);
  if (!service) return [];

  return services.filter((s) => service.relatedServices.includes(s.id));
};
