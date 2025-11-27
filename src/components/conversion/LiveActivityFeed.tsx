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
      className={`fixed bottom-24 left-4 md:bottom-8 md:left-4 md:right-auto z-40 max-w-[calc(100vw-180px)] md:max-w-sm transition-all duration-500 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
      }`}
    >
      <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-100 p-4 md:p-5 flex items-start gap-3 backdrop-blur-sm bg-white/95">
        {/* Icon with animated background */}
        <div className={`flex-shrink-0 relative ${currentActivity.type === 'booking' ? 'text-green-600' : 'text-orange-600'}`}>
          <div className={`absolute inset-0 rounded-full ${currentActivity.type === 'booking' ? 'bg-green-100' : 'bg-orange-100'} animate-pulse`} />
          <div className={`relative p-2 rounded-full ${currentActivity.type === 'booking' ? 'bg-green-100' : 'bg-orange-100'}`}>
            {currentActivity.type === 'booking' ? (
              <CheckCircle className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
            ) : (
              <Clock className="w-5 h-5 md:w-6 md:h-6" strokeWidth={2.5} />
            )}
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          {/* Name and Location */}
          <p className="text-sm md:text-base font-bold text-gray-900 truncate">
            {currentActivity.name}
          </p>
          <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
            <span>📍</span>
            <span className="truncate">{currentActivity.location}</span>
          </p>
          
          {/* Action */}
          <p className="text-xs md:text-sm text-gray-700 mt-2">
            <span className={`font-semibold ${currentActivity.type === 'booking' ? 'text-green-600' : 'text-orange-600'}`}>
              {currentActivity.type === 'booking' ? '✓ Booked' : '💬 Requested quote'}
            </span>
            {' '}
            <span className="font-medium text-gray-900">{currentActivity.service}</span>
          </p>
          
          {/* Time */}
          <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {currentActivity.timeAgo}
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="flex-shrink-0 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full p-1.5 transition-colors min-h-[32px] min-w-[32px] flex items-center justify-center"
          aria-label="Dismiss notification"
        >
          <span className="text-lg">✕</span>
        </button>
      </div>
    </div>
  );
}
