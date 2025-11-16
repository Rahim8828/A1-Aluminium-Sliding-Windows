'use client';

import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { trackPhoneClick } from '@/lib/analytics';

interface CallButtonProps {
  phoneNumber?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  showIcon?: boolean;
  showText?: boolean;
}

export default function CallButton({
  phoneNumber = BUSINESS_INFO.phone.primary,
  variant = 'primary',
  size = 'md',
  className = '',
  showIcon = true,
  showText = true,
}: CallButtonProps) {
  const handleClick = () => {
    // Track phone click event
    trackPhoneClick(phoneNumber, 'Call Button');
  };

  const variantClasses = {
    primary:
      'bg-orange-600 hover:bg-orange-700 text-white shadow-md hover:shadow-lg',
    secondary:
      'bg-orange-500 hover:bg-orange-600 text-white shadow-md hover:shadow-lg',
    outline:
      'bg-transparent border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white',
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-5 py-3 text-base',
    lg: 'px-6 py-4 text-lg',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <a
      href={`tel:${phoneNumber}`}
      onClick={handleClick}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 hover:scale-105 active:scale-95',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      aria-label={`Call us at ${phoneNumber}`}
    >
      {showIcon && <Phone className={iconSizes[size]} />}
      {showText && <span>Call Now</span>}
    </a>
  );
}
