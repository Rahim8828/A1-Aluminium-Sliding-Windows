import { Service } from '@/types';

export const services: Service[] = [
  // ALUMINIUM SERVICES
  {
    id: 'aluminium-doors',
    slug: 'aluminium-doors',
    category: 'aluminium',
    title: 'Aluminium Doors',
    shortDescription:
      'Stylish and secure aluminium doors for main entrances, balconies, office cabins, and interior spaces with customizable designs.',
    fullDescription:
      'Our aluminium doors provide the perfect blend of security, aesthetics, and functionality. From sliding doors to openable doors, office cabin doors, and partition doors, we offer a wide range of designs suitable for both residential and commercial applications. Features toughened glass combined with sturdy aluminium frames. Each door is crafted with precision and fitted with high-quality hardware.',
    rating: 4.7,
    reviewCount: 134,
    duration: '3-4 days',
    benefits: [
      'High security with multi-point locking systems',
      'Smooth operation and easy maintenance',
      'Customizable designs and sizes',
      'Weather-resistant and durable',
      'Toughened glass + aluminium combo',
      'Office cabin and partition doors available',
    ],
    useCases: [
      'Main entrance doors',
      'Balcony and terrace access',
      'Interior room partitions',
      'Office cabins and meeting rooms',
      'Shop fronts and commercial entrances',
    ],
    images: [
      '/aluminium-category/Single-sliding-door.webp',
      '/aluminium-category/Double-sliding-door.webp',
    ],
    pricing: {
      type: 'range',
      min: 480,
      max: 7449,
      unit: 'per sq ft',
    },
    options: [
      {
        id: 'alu-door-sliding-single',
        name: 'Aluminium Sliding Door',
        price: 7449,
        rating: 4.6,
        reviewCount: 56,
        estimatedTime: '3 days',
        image: '/aluminium-category/Single-sliding-door.webp',
      },
      {
        id: 'alu-door-sliding-double',
        name: 'Aluminium Openable Door',
        price: 4449,
        rating: 4.8,
        reviewCount: 42,
        estimatedTime: '3-4 days',
        image: '/aluminium-category/Double-sliding-door.webp',
      },
      {
        id: 'alu-door-cabin',
        name: 'Office Cabin Sliding Door',
        price: 650,
        rating: 4.9,
        reviewCount: 520,
        estimatedTime: '3-4 days',
        image: '/aluminium-category/Office-Cabin-Sliding.webp',
      },
      {
        id: 'alu-door-partition',
        name: 'Partition Sliding Door',
        price: 480,
        rating: 4.7,
        reviewCount: 450,
        estimatedTime: '2-3 days',
        image: '/aluminium-category/Partitions-sliding-Door.webp',
      },
    ],
    priceIncludes: [
      'Premium aluminium profiles',
      'Multi-point locking system',
      'Toughened glass panels',
      'High-quality hinges and rollers',
      'Professional installation',
      '1-year warranty',
    ],
    materials: [
      'Heavy-duty aluminium profiles',
      'Toughened safety glass',
      'Stainless steel locks',
      'Premium quality rollers',
      'Weather-resistant seals',
    ],
    processSteps: [
      {
        step: 1,
        title: 'Consultation & Measurement',
        description: 'Free site visit to measure door opening and discuss design preferences.',
      },
      {
        step: 2,
        title: 'Design Approval',
        description: 'Review and approve door design, color, and hardware options.',
      },
      {
        step: 3,
        title: 'Custom Fabrication',
        description: 'Doors are custom-made in our workshop to exact specifications.',
      },
      {
        step: 4,
        title: 'Pre-Installation Prep',
        description: 'Door frame preparation and any necessary structural adjustments.',
      },
      {
        step: 5,
        title: 'Professional Installation',
        description: 'Expert installation ensuring proper alignment and smooth operation.',
      },
      {
        step: 6,
        title: 'Final Testing',
        description: 'Complete testing of locks, operation, and sealing with warranty handover.',
      },
    ],
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
      {
        question: 'What is the installation time?',
        answer:
          'Typically 3-4 days including fabrication and installation, depending on the complexity.',
      },
    ],
    trustBadges: [
      { icon: '✓', text: 'Multi-Point Locks' },
      { icon: '✓', text: 'Custom Designs' },
      { icon: '✓', text: 'Expert Installation' },
      { icon: '✓', text: 'Lifetime Support' },
    ],
    relatedServices: ['aluminium-window-sliding', 'aluminium-doors'],
  },

  // GLASS SERVICES


  // NETTING SERVICES

  // NEW ALUMINIUM SERVICES
  {
    id: 'aluminium-window-sliding',
    slug: 'aluminium-window-sliding',
    category: 'aluminium',
    title: 'Aluminium Window Sliding',
    shortDescription:
      'Sliding windows with wheel repair service, soundproof options available.',
    fullDescription:
      'Premium aluminium sliding windows with professional installation and repair services. Includes sliding window wheel repair for smooth operation and soundproof glass options for noise reduction. High-quality profiles for enhanced durability and security.',
    rating: 4.8,
    reviewCount: 1800,
    duration: '2-3 days',
    benefits: [
      'Sliding window installation',
      'Wheel repair service',
      'Soundproof glass options',
      'Heavy-gauge for extra strength',
      'Smooth sliding operation',
      'Weather-proof sealing',
    ],
    useCases: [
      'Residential apartments',
      'Villas and bungalows',
      'Office spaces',
      'Hotels and resorts',
      'Hospitals and clinics',
    ],
    images: [
      '/aluminium-category/2-Track-sliding-Window.webp',
      '/aluminium-category/3-Track-sliding-Window..webp',
    ],
    pricing: {
      type: 'range',
      min: 350,
      max: 669,
      unit: 'per sq ft',
    },
    options: [
      {
        id: 'alu-slide-3track',
        name: 'Sliding Window Wheel Repair',
        price: 480,
        rating: 4.8,
        reviewCount: 520,
        estimatedTime: '2-3 days',
        image: '/aluminium-category/3-Track-sliding-Window..webp',
      },
      {
        id: 'alu-slide-4track',
        name: 'Sliding Window',
        price: 350,
        rating: 4.8,
        reviewCount: 380,
        estimatedTime: '3 days',
        image: '/aluminium-category/4-Track-Window.webp',
      },
      {
        id: 'alu-slide-soundproof',
        name: 'Soundproof Sliding Window',
        price: 669,
        rating: 4.9,
        reviewCount: 160,
        estimatedTime: '3-4 days',
        image: '/aluminium-category/Soundoroof-Window.webp',
      },
    ],
    priceIncludes: [
      'High-grade aluminium profiles',
      'Toughened glass',
      'Premium hardware and rollers',
      'Weather-proof sealing',
      'Professional installation',
      '1-year warranty',
    ],
    materials: ['Aluminium 6063-T5', 'Toughened glass', 'SS hardware', 'EPDM seals'],
    processSteps: [
      { step: 1, title: 'Site Measurement', description: 'Accurate measurements taken' },
      { step: 2, title: 'Design Selection', description: 'Choose track configuration' },
      { step: 3, title: 'Fabrication', description: 'Custom fabrication in workshop' },
      { step: 4, title: 'Installation', description: 'Professional fitting' },
    ],
    faqs: [
      { question: 'What is the difference between 2-track and 3-track?', answer: '2-track allows 50% opening, 3-track allows 66% opening, and 4-track allows 75% opening for better ventilation.' },
      { question: 'Can I add mesh later?', answer: 'Yes, mesh can be added to existing sliding windows.' },
    ],
    trustBadges: [
      { icon: '✓', text: 'Multiple Track Options' },
      { icon: '✓', text: 'Mesh Available' },
      { icon: '✓', text: 'Soundproof Options' },
      { icon: '✓', text: '1-Year Warranty' },
    ],
    relatedServices: ['aluminium-doors', 'aluminium-partitions'],
  },
  {
    id: 'aluminium-partition-work',
    slug: 'aluminium-partition-work',
    category: 'aluminium',
    title: 'Aluminium Partition Work',
    shortDescription:
      'Office partitions, shop partitions, interior room dividers with transparent, frosted, or acrylic panels.',
    fullDescription:
      'Professional aluminium partition solutions for offices, shops, and interior spaces. Choose from transparent glass, frosted glass, or acrylic panels based on privacy needs. Modular design allows easy reconfiguration and expansion.',
    rating: 4.9,
    reviewCount: 2200,
    duration: '4-5 days',
    benefits: [
      'Office partitions',
      'Shop partitions',
      'Interior room dividers',
      'Transparent, frosted, or acrylic panels',
      'Modular and reconfigurable',
      'Professional finish',
    ],
    useCases: [
      'Corporate offices',
      'Retail shops',
      'Showrooms',
      'Clinics and hospitals',
      'Co-working spaces',
    ],
    images: [
      '/aluminium-category/Office-partitions.webp',
      '/aluminium-category/Solid-panel-partitions.webp',
    ],
    pricing: {
      type: 'range',
      min: 349,
      max: 349,
      unit: 'per sq ft',
    },
    options: [
      {
        id: 'alu-part-office',
        name: 'Aluminium Office Partition',
        price: 349,
        rating: 4.9,
        reviewCount: 890,
        estimatedTime: '4 days',
        image: '/aluminium-category/Office-partitions.webp',
      },
      {
        id: 'alu-part-acrylic',
        name: 'Aluminium Cabin Partition',
        price: 349,
        rating: 4.7,
        reviewCount: 330,
        estimatedTime: '3 days',
        image: '/aluminium-category/Solid-panel-partitions.webp',
      },
    ],
    priceIncludes: [
      'Aluminium frame system',
      'Glass/acrylic panels',
      'Door integration if needed',
      'Hardware and fittings',
      'Installation',
      '1-year warranty',
    ],
    materials: ['Aluminium profiles', 'Glass/Acrylic panels', 'Hardware', 'Sealing strips'],
    processSteps: [
      { step: 1, title: 'Space Planning', description: 'Layout design and planning' },
      { step: 2, title: 'Material Selection', description: 'Choose panel type' },
      { step: 3, title: 'Fabrication', description: 'Custom fabrication' },
      { step: 4, title: 'Installation', description: 'On-site installation' },
    ],
    faqs: [
      { question: 'Can partitions be relocated?', answer: 'Yes, our modular system allows easy relocation.' },
      { question: 'What panel options are available?', answer: 'Transparent glass, frosted glass, and acrylic panels.' },
    ],
    trustBadges: [
      { icon: '✓', text: 'Modular Design' },
      { icon: '✓', text: 'Multiple Panel Options' },
      { icon: '✓', text: 'Professional Finish' },
      { icon: '✓', text: 'Easy Reconfiguration' },
    ],
    relatedServices: ['aluminium-door-sliding', 'aluminium-partition-work'],
  },

  
  // NEW NETTING SERVICES
  {
    id: 'bird-control-netting',
    slug: 'bird-control-netting',
    category: 'netting',
    title: 'Bird Control Netting',
    shortDescription:
      'Bird netting and invisible grill for complete bird and safety protection.',
    fullDescription:
      'Professional bird control solutions to keep pigeons and other birds away from your property. Includes bird netting (highest demand) and invisible grill for safety. Humane and effective bird deterrent systems.',
    rating: 4.8,
    reviewCount: 2800,
    duration: '1-2 days',
    benefits: [
      'Bird netting (most popular)',
      'Invisible grill for safety',
      'Humane bird control',
      'Long-lasting protection',
      'UV-resistant materials',
      'Nearly invisible design',
    ],
    useCases: [
      'Balconies and terraces',
      'AC outdoor units',
      'Building facades',
      'Warehouses',
      'Solar panels',
    ],
    images: [
      '/netting-category/Pigeon-netting.webp',
      '/netting-category/Transparent-bird-net.webp',
    ],
    pricing: {
      type: 'range',
      min: 18,
      max: 40,
      unit: 'per sq ft',
    },
    options: [
      {
        id: 'bird-pigeon',
        name: 'Bird Net',
        price: 49,
        rating: 4.9,
        reviewCount: 1500,
        estimatedTime: '1 day',
        image: '/netting-category/Pigeon-netting.webp',
      },

      {
        id: 'bird-invisible-grill',
        name: 'Invisible Grill',
        price: 109,
        rating: 4.9,
        reviewCount: 200,
        estimatedTime: '1-2 days',
        image: '/netting-category/Transparent-bird-net.webp',
      },
    ],
    priceIncludes: [
      'Bird netting material',
      'Installation accessories',
      'Professional installation',
      'Cleaning before installation',
      'Warranty coverage',
    ],
    materials: ['HDPE bird net', 'Transparent nylon', 'Stainless steel spikes', 'UV-resistant', 'Weatherproof'],
    processSteps: [
      { step: 1, title: 'Assessment', description: 'Bird problem assessment' },
      { step: 2, title: 'Solution Design', description: 'Choose appropriate method' },
      { step: 3, title: 'Installation', description: 'Professional installation' },
      { step: 4, title: 'Testing', description: 'Verify effectiveness' },
    ],
    faqs: [
      { question: 'Will it harm birds?', answer: 'No, our solutions are humane and only deter birds from landing.' },
      { question: 'How long does it last?', answer: 'Our bird nets last 5-7 years with proper maintenance.' },
    ],
    trustBadges: [
      { icon: '✓', text: 'Humane Solution' },
      { icon: '✓', text: 'Transparent Options' },
      { icon: '✓', text: 'Long Lasting' },
      { icon: '✓', text: 'Effective Protection' },
    ],
    relatedServices: ['pest-control-netting', 'safety-nets'],
  },


  {
    id: 'pest-control-netting',
    slug: 'pest-control-netting',
    category: 'netting',
    title: 'Mosquito Netting',
    shortDescription:
      'Window mosquito nets and folding nets for insect-free living.',
    fullDescription:
      'Premium mosquito netting solutions to keep insects out while allowing fresh air circulation. Includes window mosquito nets and folding nets. Enjoy fresh air without mosquitoes and insects.',
    rating: 4.9,
    reviewCount: 3500,
    duration: '1 day',
    benefits: [
      'Window mosquito net',
      'Folding net',
      'Fresh air circulation',
      'Easy to use',
      'Durable materials',
      'Easy maintenance',
    ],
    useCases: [
      'Residential windows',
      'Sliding doors',
      'Balcony doors',
      'Kitchen windows',
      'Bedroom windows',
    ],
    images: [
      '/netting-category/Window-mosquito-net.webp',
      '/netting-category/Sliding-Frame-Mosquito-Net.webp',
    ],
    pricing: {
      type: 'range',
      min: 80,
      max: 350,
      unit: 'per window',
    },
    options: [
      {
        id: 'pest-window',
        name: 'Window Mosquito Net',
        price: 79,
        rating: 4.9,
        reviewCount: 1800,
        estimatedTime: '1 day',
        image: '/netting-category/Window-mosquito-net.webp',
      },
      {
        id: 'pest-sliding',
        name: 'Folding Net',
        price: 179,
        rating: 4.9,
        reviewCount: 980,
        estimatedTime: '1 day',
        image: '/netting-category/Sliding-Frame-Mosquito-Net.webp',
      },

    ],
    priceIncludes: [
      'Mosquito net material',
      'Aluminium/PVC frame',
      'Installation hardware',
      'Professional installation',
      'Easy removal for cleaning',
      '1-year warranty',
    ],
    materials: ['Fiberglass mesh', 'Aluminium frame', 'PVC frame', 'Pleated fabric', 'Roller mechanism'],
    processSteps: [
      { step: 1, title: 'Measurement', description: 'Window/door measurements' },
      { step: 2, title: 'Frame Selection', description: 'Choose frame type' },
      { step: 3, title: 'Fabrication', description: 'Custom frame making' },
      { step: 4, title: 'Installation', description: 'Quick installation' },
    ],
    faqs: [
      { question: 'Can it be removed for cleaning?', answer: 'Yes, all our mosquito nets are easily removable.' },
      { question: 'Does it block air flow?', answer: 'No, our mesh allows 80% air flow while blocking insects.' },
    ],
    trustBadges: [
      { icon: '✓', text: 'Mosquito Protection' },
      { icon: '✓', text: 'Easy to Clean' },
      { icon: '✓', text: 'Premium Options' },
      { icon: '✓', text: 'Quick Installation' },
    ],
    relatedServices: ['bird-control-netting', 'safety-nets'],
  },

  // NEW GLASS SERVICES
  {
    id: 'toughened-glass-work',
    slug: 'toughened-glass-work',
    category: 'glass',
    title: 'Toughened Glass',
    shortDescription:
      'Shower glass partitions, balcony railing glass, office partitions, shopfront glass, staircase railing.',
    fullDescription:
      'Premium toughened (tempered) glass work for residential and commercial applications. Includes shower glass partitions, balcony railing glass, office partitions, shopfront glass, and staircase railing. 5x stronger than regular glass with safety features.',
    rating: 4.9,
    reviewCount: 2100,
    duration: '3-5 days',
    benefits: [
      'Shower glass partitions',
      'Balcony railing glass',
      'Office partitions',
      'Shopfront glass',
      'Staircase railing glass',
      '5x stronger than regular glass',
    ],
    useCases: [
      'Bathrooms and showers',
      'Balconies and terraces',
      'Office spaces',
      'Retail shops',
      'Staircases',
    ],
    images: [
      '/glass-category/Toughened-glass.webp',
      '/glass-category/Full-glass-partitions.webp',
    ],
    pricing: {
      type: 'range',
      min: 550,
      max: 650,
      unit: 'per sq ft',
    },
    options: [
      {
        id: 'tough-shower',
        name: 'Shower Glass (Openable)',
        price: 550,
        rating: 4.9,
        reviewCount: 680,
        estimatedTime: '3 days',
        image: '/glass-category/Toughened-glass.webp',
      },
      {
        id: 'tough-balcony',
        name: 'Shower Glass (Sliding)',
        price: 650,
        rating: 4.9,
        reviewCount: 520,
        estimatedTime: '4 days',
        image: '/glass-category/Balcony-railing-glass.webp',
      },
    ],
    priceIncludes: [
      'Toughened glass 10mm/12mm',
      'Hardware and fittings',
      'Professional installation',
      'Safety certification',
      'Polishing and finishing',
      '2-year warranty',
    ],
    materials: ['Toughened glass', 'SS hardware', 'Patch fittings', 'Channels', 'Sealants'],
    processSteps: [
      { step: 1, title: 'Measurement', description: 'Precise measurements' },
      { step: 2, title: 'Glass Cutting', description: 'Custom glass cutting' },
      { step: 3, title: 'Toughening', description: 'Heat treatment process' },
      { step: 4, title: 'Installation', description: 'Professional fitting' },
    ],
    faqs: [
      { question: 'What is toughened glass?', answer: 'Toughened glass is heat-treated to be 5x stronger and safer than regular glass.' },
      { question: 'Is it safe for bathrooms?', answer: 'Yes, toughened glass is perfect for wet areas and shower partitions.' },
    ],
    trustBadges: [
      { icon: '✓', text: '5x Stronger' },
      { icon: '✓', text: 'Safety Certified' },
      { icon: '✓', text: 'Multiple Applications' },
      { icon: '✓', text: '2-Year Warranty' },
    ],
    relatedServices: ['shower-glass-partition', 'glass-railing'],
  },

  {
    id: 'office-glass-partition',
    slug: 'office-glass-partition',
    category: 'glass',
    title: 'Office Glass Partition',
    shortDescription:
      'Professional office glass partitions for startups, corporate offices, co-working spaces, and cabin partitions.',
    fullDescription:
      'Modern office glass partition solutions for commercial spaces. Perfect for startups, corporate offices, co-working spaces, and cabin partitions. Creates open yet defined workspaces with professional aesthetics. Available in clear, frosted, and tinted options.',
    rating: 4.9,
    reviewCount: 2450,
    duration: '5-7 days',
    benefits: [
      'Startup office partitions',
      'Corporate office partitions',
      'Co-working space partitions',
      'Cabin partitions',
      'Professional aesthetics',
      'Sound insulation options',
    ],
    useCases: [
      'Startups',
      'Corporate offices',
      'Co-working spaces',
      'Meeting rooms',
      'Executive cabins',
    ],
    images: [
      '/glass-category/Full-glass-partitions.webp',
      '/glass-category/Half-glass-partitions.webp',
    ],
    pricing: {
      type: 'range',
      min: 280,
      max: 350,
      unit: 'per sq ft',
    },
    options: [
      {
        id: 'office-clear',
        name: 'Glass Partition',
        price: 280,
        rating: 4.9,
        reviewCount: 1100,
        estimatedTime: '5 days',
        image: '/glass-category/Full-glass-partitions.webp',
      },
      {
        id: 'office-frosted',
        name: 'Glass Door Partition',
        price: 350,
        rating: 4.9,
        reviewCount: 890,
        estimatedTime: '5-6 days',
        image: '/glass-category/Half-glass-partitions.webp',
      },
    ],
    priceIncludes: [
      'Toughened glass',
      'Aluminium frame system',
      'Door integration',
      'Hardware and locks',
      'Installation',
      '2-year warranty',
    ],
    materials: ['Toughened glass', 'Aluminium profiles', 'Hardware', 'Locks', 'Seals'],
    processSteps: [
      { step: 1, title: 'Space Planning', description: 'Office layout design' },
      { step: 2, title: 'Design Selection', description: 'Choose glass type' },
      { step: 3, title: 'Fabrication', description: 'Custom fabrication' },
      { step: 4, title: 'Installation', description: 'Professional installation' },
    ],
    faqs: [
      { question: 'Can partitions be relocated?', answer: 'Yes, our modular system allows easy relocation.' },
      { question: 'Do you provide frosted glass?', answer: 'Yes, we offer clear, frosted, and tinted glass options.' },
    ],
    trustBadges: [
      { icon: '✓', text: 'Professional Grade' },
      { icon: '✓', text: 'Modular System' },
      { icon: '✓', text: 'Multiple Options' },
      { icon: '✓', text: 'Sound Insulation' },
    ],
    relatedServices: ['toughened-glass-work', 'glass-door-sliding'],
  },
  {
    id: 'glass-door-sliding',
    slug: 'glass-door-sliding',
    category: 'glass',
    title: 'Glass Door',
    shortDescription:
      'Hinged glass door, floor spring door, sliding passage door for modern interiors and offices.',
    fullDescription:
      'Premium glass door systems for residential and commercial spaces. Includes hinged glass doors, floor spring doors, and sliding passage doors. Modern hardware and smooth operation. Perfect for contemporary interiors.',
    rating: 4.8,
    reviewCount: 1920,
    duration: '3-4 days',
    benefits: [
      'Hinged glass door',
      'Floor spring door',
      'Sliding passage door',
      'Modern hardware',
      'Smooth operation',
      'Space-saving design',
    ],
    useCases: [
      'Office entrances',
      'Interior doors',
      'Balcony doors',
      'Shop fronts',
      'Conference rooms',
    ],
    images: [
      '/glass-category/Glass-facade-sliding.webp',
      '/glass-category/Toughened-glass.webp',
    ],
    pricing: {
      type: 'range',
      min: 480,
      max: 629,
      unit: 'per door',
    },
    options: [
      {
        id: 'door-toughened',
        name: 'Glass Door (Hinged)',
        price: 480,
        rating: 4.8,
        reviewCount: 780,
        estimatedTime: '3 days',
        image: '/glass-category/Toughened-glass.webp',
      },
      {
        id: 'door-sliding',
        name: 'Glass Door (Floor Spring)',
        price: 629,
        rating: 4.8,
        reviewCount: 520,
        estimatedTime: '4 days',
        image: '/glass-category/Glass-facade-sliding.webp',
      },
      {
        id: 'door-passage',
        name: 'Glass Sliding Door (Passage)',
        price: 490,
        rating: 4.8,
        reviewCount: 350,
        estimatedTime: '3 days',
        image: '/glass-category/Glass-facade-sliding.webp',
      },
    ],
    priceIncludes: [
      'Toughened glass 10mm/12mm',
      'Premium hardware',
      'Hinges/patch fittings',
      'Handles and locks',
      'Installation',
      '2-year warranty',
    ],
    materials: ['Toughened glass', 'Patch fittings', 'Hinges', 'Handles', 'Floor spring'],
    processSteps: [
      { step: 1, title: 'Measurement', description: 'Door opening measurements' },
      { step: 2, title: 'Hardware Selection', description: 'Choose fittings' },
      { step: 3, title: 'Glass Cutting', description: 'Custom glass cutting' },
      { step: 4, title: 'Installation', description: 'Professional installation' },
    ],
    faqs: [
      { question: 'What is patch fitting?', answer: 'Patch fitting is frameless door system with glass-to-glass hinges.' },
      { question: 'Can sliding doors be automated?', answer: 'Yes, we can install automatic sliding door systems.' },
    ],
    trustBadges: [
      { icon: '✓', text: 'Premium Hardware' },
      { icon: '✓', text: 'Smooth Operation' },
      { icon: '✓', text: 'Modern Design' },
      { icon: '✓', text: 'Durable' },
    ],
    relatedServices: ['toughened-glass-work', 'office-glass-partition'],
  },

  {
    id: 'mirror-work',
    slug: 'mirror-work',
    category: 'glass',
    title: 'Mirror Work',
    shortDescription:
      'LED dressing mirror, plane mirror, touch LED mirror, LED dressing bulb mirror, wall panel mirror for homes and commercial spaces.',
    fullDescription:
      'Professional mirror installation services for residential and commercial spaces. Includes LED dressing mirrors, plane mirrors, touch LED mirrors, LED dressing bulb mirrors, and wall panel mirrors. High-quality silver-coated mirrors with safety backing. Custom sizes and shapes available.',
    rating: 4.8,
    reviewCount: 1580,
    duration: '1-2 days',
    benefits: [
      'LED dressing mirror',
      'Plane mirror',
      'Touch LED mirror',
      'LED dressing bulb mirror',
      'Wall panel mirror',
      'Custom sizes',
    ],
    useCases: [
      'Bedrooms and dressing rooms',
      'Gyms and fitness centers',
      'Dance studios',
      'Salons and spas',
      'Retail showrooms',
    ],
    images: [
      '/glass-category/Dressing-Mirror.webp',
      '/glass-category/Full-wall-mirror.webp',
      '/glass-category/Gym-mirror.webp',
      '/glass-category/Dance-studio-mirror.webp',
    ],
    pricing: {
      type: 'range',
      min: 120,
      max: 790,
      unit: 'per sq ft',
    },
    options: [
      {
        id: 'mirror-dressing',
        name: 'LED Dressing Mirror',
        price: 650,
        rating: 4.8,
        reviewCount: 680,
        estimatedTime: '1 day',
        image: '/glass-category/Dressing-Mirror.webp',
      },
      {
        id: 'mirror-wall',
        name: 'Plane Mirror',
        price: 150,
        rating: 4.9,
        reviewCount: 520,
        estimatedTime: '2 days',
        image: '/glass-category/Full-wall-mirror.webp',
      },
      {
        id: 'mirror-gym',
        name: 'Touch LED Mirror',
        price: 650,
        rating: 4.8,
        reviewCount: 280,
        estimatedTime: '1-2 days',
        image: '/glass-category/Gym-mirror.webp',
      },
      {
        id: 'mirror-dance',
        name: 'LED Dressing Bulb Mirror',
        price: 790,
        rating: 4.9,
        reviewCount: 100,
        estimatedTime: '2 days',
        image: '/glass-category/Dance-studio-mirror.webp',
      },
      {
        id: 'mirror-panel',
        name: 'Wall Panel Mirror',
        price: 470,
        rating: 4.8,
        reviewCount: 150,
        estimatedTime: '1-2 days',
        image: '/glass-category/Full-wall-mirror.webp',
      },
    ],
    priceIncludes: [
      'High-quality silver mirror',
      'Safety backing',
      'Beveled edges (optional)',
      'Mounting hardware',
      'Installation',
      '1-year warranty',
    ],
    materials: ['Silver-coated mirror', 'Safety backing', 'Mounting brackets', 'Adhesives', 'Edge polishing'],
    processSteps: [
      { step: 1, title: 'Measurement', description: 'Wall measurements' },
      { step: 2, title: 'Mirror Cutting', description: 'Custom cutting' },
      { step: 3, title: 'Edge Finishing', description: 'Polishing and beveling' },
      { step: 4, title: 'Installation', description: 'Professional installation' },
    ],
    faqs: [
      { question: 'Do you provide safety backing?', answer: 'Yes, all our mirrors come with safety backing to prevent shattering.' },
      { question: 'Can you do custom shapes?', answer: 'Yes, we can cut mirrors in custom shapes and sizes.' },
    ],
    trustBadges: [
      { icon: '✓', text: 'High Quality' },
      { icon: '✓', text: 'Safety Backing' },
      { icon: '✓', text: 'Custom Sizes' },
      { icon: '✓', text: 'Professional Installation' },
    ],
    relatedServices: ['backpainted-glass-acrylic', 'toughened-glass-work'],
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
