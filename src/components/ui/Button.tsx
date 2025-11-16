import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-lg';
    
    const variants = {
      primary: 'bg-orange-600 text-white hover:bg-orange-700 focus-visible:ring-orange-600',
      secondary: 'bg-orange-500 text-white hover:bg-orange-600 focus-visible:ring-orange-500',
      outline: 'border-2 border-orange-600 text-orange-600 hover:bg-orange-50 focus-visible:ring-orange-600',
    };
    
    const sizes = {
      sm: 'min-h-[44px] min-w-[44px] px-4 py-2 text-sm',
      md: 'min-h-[44px] min-w-[44px] px-6 py-3 text-base',
      lg: 'min-h-[48px] min-w-[48px] px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
