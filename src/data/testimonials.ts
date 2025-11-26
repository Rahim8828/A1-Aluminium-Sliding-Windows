import { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Rajesh Sharma',
    location: 'Andheri West, Mumbai',
    rating: 5,
    text: 'Excellent work on our aluminium window sliding! The team was professional, punctual, and the quality is outstanding. Our home looks modern and the windows operate smoothly. Highly recommend A1 Aluminium!',
    date: '2024-10-15',
    service: 'Aluminium Window Sliding',
  },
  {
    id: 'test-2',
    name: 'Priya Patel',
    location: 'Bandra East, Mumbai',
    rating: 5,
    text: 'We got bird control netting installed for our balcony and are so relieved now. The installation was quick and the nets are almost invisible. Great service!',
    date: '2024-10-08',
    service: 'Bird Control Netting',
  },
  {
    id: 'test-3',
    name: 'Amit Desai',
    location: 'Goregaon West, Mumbai',
    rating: 5,
    text: 'A1 Aluminium did a fantastic job with our office glass partitions. The frameless design looks sleek and professional. The team completed the work on time and within budget. Very satisfied!',
    date: '2024-09-28',
    service: 'Office Glass Partition',
  },
  {
    id: 'test-4',
    name: 'Sneha Kulkarni',
    location: 'Powai, Mumbai',
    rating: 5,
    text: 'Best decision to get aluminium sliding doors for our balcony. They operate so smoothly and look beautiful. The team was courteous and cleaned up after installation. Excellent experience!',
    date: '2024-09-20',
    service: 'Aluminium Sliding Systems',
  },
  {
    id: 'test-5',
    name: 'Vikram Mehta',
    location: 'Jogeshwari East, Mumbai',
    rating: 4,
    text: 'Very happy with the shower glass partition installation. The frameless glass looks premium and the quality is top-notch. Installation took a bit longer than expected but the result is worth it.',
    date: '2024-09-12',
    service: 'Shower Glass Partition',
  },
  {
    id: 'test-6',
    name: 'Kavita Iyer',
    location: 'Malad West, Mumbai',
    rating: 5,
    text: 'The bird netting has been a lifesaver! No more pigeon problems on our balcony. The nets are strong and barely visible. Professional installation and reasonable pricing.',
    date: '2024-08-30',
    service: 'Bird Control Netting',
  },
  {
    id: 'test-7',
    name: 'Sanjay Gupta',
    location: 'Kandivali West, Mumbai',
    rating: 5,
    text: 'Got aluminium doors and windows for our entire flat. The quality is excellent and the finish is perfect. A1 Aluminium provided great service from consultation to installation. Highly recommended!',
    date: '2024-08-22',
    service: 'Aluminium Doors',
  },
  {
    id: 'test-8',
    name: 'Neha Joshi',
    location: 'Santacruz West, Mumbai',
    rating: 5,
    text: 'Beautiful toughened glass work for our terrace! It looks modern and doesn\'t obstruct the view at all. The team was professional and the installation was done perfectly. Very pleased with the outcome.',
    date: '2024-08-15',
    service: 'Toughened Glass Work',
  },
  {
    id: 'test-9',
    name: 'Rahul Nair',
    location: 'Vile Parle East, Mumbai',
    rating: 5,
    text: 'Excellent service for our office aluminium partitions. The team understood our requirements perfectly and delivered exactly what we needed. Quality workmanship and timely completion.',
    date: '2024-08-05',
    service: 'Aluminium Partitions',
  },
  {
    id: 'test-10',
    name: 'Deepa Shah',
    location: 'Borivali West, Mumbai',
    rating: 5,
    text: 'Very satisfied with the pest control netting installed at our building. The nets are strong and provide excellent protection. Professional team and good quality materials.',
    date: '2024-07-28',
    service: 'Pest Control Netting',
  },
  {
    id: 'test-11',
    name: 'Karan Singh',
    location: 'Andheri East, Mumbai',
    rating: 5,
    text: 'A1 Aluminium installed glass door sliding system for our shop front and it looks absolutely stunning! The quality is premium and has really enhanced our store\'s appearance. Great work!',
    date: '2024-07-18',
    service: 'Glass Door & Sliding System',
  },
  {
    id: 'test-12',
    name: 'Meera Reddy',
    location: 'Bandra West, Mumbai',
    rating: 4,
    text: 'Good experience with the aluminium window sliding installation. The windows are of good quality and the team was professional. Pricing was competitive. Would recommend to others.',
    date: '2024-07-10',
    service: 'Aluminium Window Sliding',
  },
];

// Helper functions
export const getTestimonialsByService = (service: string): Testimonial[] => {
  return testimonials.filter((testimonial) => testimonial.service === service);
};

export const getRecentTestimonials = (count: number = 6): Testimonial[] => {
  return testimonials
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
};

export const getTestimonialsByRating = (
  minRating: number = 4
): Testimonial[] => {
  return testimonials.filter((testimonial) => testimonial.rating >= minRating);
};
