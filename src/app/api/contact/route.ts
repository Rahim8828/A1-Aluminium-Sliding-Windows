import { NextRequest, NextResponse } from 'next/server';
import { ContactFormData } from '@/types';

// Rate limiting configuration
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 3; // 3 requests per minute per IP

// In-memory rate limiting store (use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of rateLimitStore.entries()) {
    if (now > value.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, 60 * 1000); // Clean up every minute

/**
 * Get client IP address from request
 */
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  
  if (realIP) {
    return realIP;
  }
  
  return 'unknown';
}

/**
 * Check rate limit for IP address
 */
function checkRateLimit(ip: string): { allowed: boolean; remaining: number } {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    // Create new record
    rateLimitStore.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - 1 };
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return { allowed: false, remaining: 0 };
  }

  // Increment count
  record.count++;
  rateLimitStore.set(ip, record);
  
  return { allowed: true, remaining: MAX_REQUESTS_PER_WINDOW - record.count };
}

/**
 * Validate contact form data
 */
function validateFormData(data: unknown): {
  valid: boolean;
  errors: string[];
  sanitizedData?: ContactFormData;
} {
  // Type guard to check if data is an object
  if (!data || typeof data !== 'object') {
    return { valid: false, errors: ['Invalid data format'] };
  }
  
  const formData = data as Record<string, unknown>;
  const errors: string[] = [];

  // Validate name
  if (!formData.name || typeof formData.name !== 'string') {
    errors.push('Name is required');
  } else if (formData.name.trim().length < 2) {
    errors.push('Name must be at least 2 characters');
  } else if (formData.name.length > 100) {
    errors.push('Name must be less than 100 characters');
  }

  // Validate phone
  if (!formData.phone || typeof formData.phone !== 'string') {
    errors.push('Phone number is required');
  } else if (!/^[6-9]\d{9}$/.test(formData.phone.trim())) {
    errors.push('Please enter a valid 10-digit Indian phone number');
  }

  // Validate email
  if (!formData.email || typeof formData.email !== 'string') {
    errors.push('Email is required');
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
    errors.push('Please enter a valid email address');
  } else if (formData.email.length > 255) {
    errors.push('Email must be less than 255 characters');
  }

  // Validate service type
  if (!formData.serviceType || typeof formData.serviceType !== 'string') {
    errors.push('Service type is required');
  } else if (formData.serviceType.trim().length === 0) {
    errors.push('Please select a service type');
  }

  // Validate message
  if (!formData.message || typeof formData.message !== 'string') {
    errors.push('Message is required');
  } else if (formData.message.trim().length < 10) {
    errors.push('Message must be at least 10 characters');
  } else if (formData.message.length > 2000) {
    errors.push('Message must be less than 2000 characters');
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  // Return sanitized data
  const sanitizedData: ContactFormData = {
    name: (formData.name as string).trim(),
    phone: (formData.phone as string).trim(),
    email: (formData.email as string).trim().toLowerCase(),
    serviceType: (formData.serviceType as string).trim(),
    message: (formData.message as string).trim(),
  };

  return { valid: true, errors: [], sanitizedData };
}

/**
 * Send notification via webhook or email service
 */
async function sendNotification(data: ContactFormData): Promise<void> {
  const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL;
  
  if (!webhookUrl) {
    console.warn('CONTACT_FORM_WEBHOOK_URL not configured. Skipping notification.');
    return;
  }

  try {
    const payload = {
      timestamp: new Date().toISOString(),
      formData: data,
      subject: `New Contact Form Submission - ${data.serviceType}`,
      text: `
New contact form submission received:

Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}
Service Type: ${data.serviceType}

Message:
${data.message}

---
Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      `.trim(),
    };

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error(`Webhook failed with status: ${response.status}`);
    }

    console.log('Notification sent successfully');
  } catch (error) {
    console.error('Failed to send notification:', error);
    // Don't throw error - we don't want to fail the form submission if notification fails
  }
}

/**
 * POST handler for contact form submissions
 */
export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const clientIP = getClientIP(request);

    // Check rate limit
    const { allowed, remaining } = checkRateLimit(clientIP);
    
    if (!allowed) {
      return NextResponse.json(
        {
          success: false,
          error: {
            message: 'Too many requests. Please try again later.',
            code: 'RATE_LIMIT_EXCEEDED',
          },
        },
        {
          status: 429,
          headers: {
            'X-RateLimit-Limit': MAX_REQUESTS_PER_WINDOW.toString(),
            'X-RateLimit-Remaining': '0',
            'Retry-After': '60',
          },
        }
      );
    }

    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        {
          success: false,
          error: {
            message: 'Invalid JSON in request body',
            code: 'INVALID_JSON',
          },
        },
        { status: 400 }
      );
    }

    // Validate form data
    const validation = validateFormData(body);
    
    if (!validation.valid) {
      return NextResponse.json(
        {
          success: false,
          error: {
            message: 'Validation failed',
            code: 'VALIDATION_ERROR',
            details: validation.errors,
          },
        },
        { status: 400 }
      );
    }

    // Send notification (async, don't wait)
    sendNotification(validation.sanitizedData!).catch((err) => {
      console.error('Notification error:', err);
    });

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully',
      },
      {
        status: 200,
        headers: {
          'X-RateLimit-Limit': MAX_REQUESTS_PER_WINDOW.toString(),
          'X-RateLimit-Remaining': remaining.toString(),
        },
      }
    );
  } catch (error) {
    console.error('Contact form API error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: {
          message: 'Internal server error. Please try again later.',
          code: 'INTERNAL_ERROR',
        },
      },
      { status: 500 }
    );
  }
}

/**
 * OPTIONS handler for CORS preflight
 */
export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        'Allow': 'POST, OPTIONS',
      },
    }
  );
}
