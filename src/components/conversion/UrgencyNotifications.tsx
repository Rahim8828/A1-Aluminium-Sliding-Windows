'use client';

import { useEffect, useState } from 'react';
import { X, Users, CheckCircle, Clock } from 'lucide-react';

interface UrgencyNotification {
  id: string;
  message: string;
  type: 'info' | 'success';
  icon?: 'users' | 'check' | 'clock';
}

const NOTIFICATIONS: UrgencyNotification[] = [
  {
    id: '1',
    message: '3 customers contacted us today from Andheri',
    type: 'success',
    icon: 'users'
  },
  {
    id: '2',
    message: 'Someone just requested a quote for Aluminium Windows',
    type: 'info',
    icon: 'check'
  },
  {
    id: '3',
    message: 'Limited slots available this week in Bandra area',
    type: 'info',
    icon: 'clock'
  },
  {
    id: '4',
    message: '5 projects completed this month in Goregaon',
    type: 'success',
    icon: 'check'
  },
  {
    id: '5',
    message: '2 customers from Powai viewing this page',
    type: 'info',
    icon: 'users'
  }
];

export default function UrgencyNotifications() {
  const [currentNotification, setCurrentNotification] = useState<UrgencyNotification | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [notificationIndex, setNotificationIndex] = useState(0);

  useEffect(() => {
    // Show first notification after 10 seconds
    const initialTimer = setTimeout(() => {
      showNotification(0);
    }, 10000);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    // Auto-hide after 6 seconds
    const hideTimer = setTimeout(() => {
      hideNotification();
    }, 6000);

    return () => clearTimeout(hideTimer);
  }, [isVisible]);

  const showNotification = (index: number) => {
    const notification = NOTIFICATIONS[index % NOTIFICATIONS.length];
    setCurrentNotification(notification);
    setIsVisible(true);

    // Schedule next notification (30-45 seconds later)
    const nextDelay = 30000 + Math.random() * 15000;
    setTimeout(() => {
      const nextIndex = (index + 1) % NOTIFICATIONS.length;
      setNotificationIndex(nextIndex);
      showNotification(nextIndex);
    }, nextDelay + 6000); // Add display duration
  };

  const hideNotification = () => {
    setIsVisible(false);
  };

  const getIcon = (iconType?: string) => {
    switch (iconType) {
      case 'users':
        return <Users className="w-5 h-5" />;
      case 'check':
        return <CheckCircle className="w-5 h-5" />;
      case 'clock':
        return <Clock className="w-5 h-5" />;
      default:
        return <CheckCircle className="w-5 h-5" />;
    }
  };

  if (!currentNotification || !isVisible) return null;

  const bgColor = currentNotification.type === 'success' 
    ? 'bg-green-50 border-green-200' 
    : 'bg-orange-50 border-orange-200';
  
  const textColor = currentNotification.type === 'success'
    ? 'text-green-800'
    : 'text-orange-800';
  
  const iconColor = currentNotification.type === 'success'
    ? 'text-green-600'
    : 'text-orange-600';

  return (
    <div 
      className={`fixed bottom-24 md:bottom-8 left-4 right-4 md:left-auto md:right-8 z-40 animate-slide-up`}
      role="alert"
      aria-live="polite"
    >
      <div className={`${bgColor} border rounded-lg shadow-lg p-4 max-w-sm backdrop-blur-sm`}>
        <div className="flex items-start gap-3">
          <div className={`${iconColor} flex-shrink-0 mt-0.5`}>
            {getIcon(currentNotification.icon)}
          </div>
          
          <div className="flex-1 min-w-0">
            <p className={`${textColor} text-sm font-medium`}>
              {currentNotification.message}
            </p>
          </div>

          <button
            onClick={hideNotification}
            className={`${textColor} hover:opacity-70 transition-opacity flex-shrink-0`}
            aria-label="Dismiss notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
