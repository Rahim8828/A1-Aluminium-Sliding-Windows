'use client';

import { useState, useEffect } from 'react';
import { CheckCircle, Clock } from 'lucide-react';

interface Activity {
  id: number;
  name: string;
  location: string;
  service: string;
  timeAgo: string;
  type: 'booking' | 'quote';
}

const activities: Activity[] = [
  { id: 1, name: 'Rajesh Kumar', location: 'Andheri West', service: 'Aluminium Windows', timeAgo: '2 hours ago', type: 'booking' },
  { id: 2, name: 'Priya Sharma', location: 'Bandra', service: 'Glass Partition', timeAgo: '15 minutes ago', type: 'quote' },
  { id: 3, name: 'Amit Patel', location: 'Goregaon', service: 'Safety Netting', timeAgo: '1 hour ago', type: 'booking' },
  { id: 4, name: 'Sneha Desai', location: 'Malad', service: 'Sliding Doors', timeAgo: '45 minutes ago', type: 'quote' },
  { id: 5, name: 'Vikram Singh', location: 'Powai', service: 'Glass Railing', timeAgo: '3 hours ago', type: 'booking' },
  { id: 6, name: 'Neha Gupta', location: 'Kandivali', service: 'Bird Netting', timeAgo: '30 minutes ago', type: 'quote' },
];

export function LiveActivityFeed() {
  const [currentActivity, setCurrentActivity] = useState<Activity>(activities[0]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show first notification after 5 seconds
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    // Rotate through activities every 8 seconds
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentActivity(activities[Math.floor(Math.random() * activities.length)]);
        setIsVisible(true);
      }, 500);
    }, 8000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-24 left-4 right-20 md:bottom-8 md:left-4 md:right-auto md:max-w-md z-40 transition-all duration-500 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <div className="bg-white rounded-full shadow-2xl border border-gray-200 px-4 py-2.5 flex items-center gap-3 backdrop-blur-sm bg-white/95">
        {/* Icon - Compact */}
        <div className={`flex-shrink-0 ${currentActivity.type === 'booking' ? 'text-green-600' : 'text-orange-600'}`}>
          <div className={`p-1.5 rounded-full ${currentActivity.type === 'booking' ? 'bg-green-100' : 'bg-orange-100'}`}>
            {currentActivity.type === 'booking' ? (
              <CheckCircle className="w-4 h-4" strokeWidth={2.5} />
            ) : (
              <Clock className="w-4 h-4" strokeWidth={2.5} />
            )}
          </div>
        </div>
        
        {/* Content - Single Line */}
        <div className="flex-1 min-w-0 flex items-center gap-2">
          <div className="flex items-center gap-1.5 min-w-0">
            <span className="text-xs font-semibold text-gray-900 truncate">
              {currentActivity.name}
            </span>
            <span className="text-xs text-gray-500 flex-shrink-0">from</span>
            <span className="text-xs text-gray-600 truncate">
              {currentActivity.location}
            </span>
          </div>
          <span className={`text-xs font-medium flex-shrink-0 ${currentActivity.type === 'booking' ? 'text-green-600' : 'text-orange-600'}`}>
            {currentActivity.type === 'booking' ? 'booked' : 'requested'}
          </span>
        </div>

        {/* Close Button - Compact */}
        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 text-gray-400 hover:text-gray-600 rounded-full p-1 transition-colors"
          aria-label="Dismiss notification"
        >
          <span className="text-sm">✕</span>
        </button>
      </div>
    </div>
  );
}
