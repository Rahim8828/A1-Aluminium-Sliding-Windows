# Contact Form API

This API endpoint handles contact form submissions with validation, rate limiting, and webhook integration.

## Endpoint

```
POST /api/contact
```

## Request Body

```json
{
  "name": "John Doe",
  "phone": "9876543210",
  "email": "john@example.com",
  "serviceType": "aluminium",
  "message": "I need aluminium windows for my home"
}
```

### Field Validation

- **name**: Required, 2-100 characters
- **phone**: Required, valid 10-digit Indian phone number (starts with 6-9)
- **email**: Required, valid email format, max 255 characters
- **serviceType**: Required, non-empty string
- **message**: Required, 10-2000 characters

## Response Format

### Success Response (200)

```json
{
  "success": true,
  "message": "Form submitted successfully"
}
```

Headers:
- `X-RateLimit-Limit`: Maximum requests allowed per window
- `X-RateLimit-Remaining`: Remaining requests in current window

### Validation Error (400)

```json
{
  "success": false,
  "error": {
    "message": "Validation failed",
    "code": "VALIDATION_ERROR",
    "details": [
      "Name is required",
      "Please enter a valid email address"
    ]
  }
}
```

### Rate Limit Error (429)

```json
{
  "success": false,
  "error": {
    "message": "Too many requests. Please try again later.",
    "code": "RATE_LIMIT_EXCEEDED"
  }
}
```

Headers:
- `X-RateLimit-Limit`: Maximum requests allowed per window
- `X-RateLimit-Remaining`: 0
- `Retry-After`: Seconds until rate limit resets

### Server Error (500)

```json
{
  "success": false,
  "error": {
    "message": "Internal server error. Please try again later.",
    "code": "INTERNAL_ERROR"
  }
}
```

## Rate Limiting

- **Window**: 60 seconds (1 minute)
- **Max Requests**: 3 per IP address per window
- **Storage**: In-memory (consider Redis for production)

## Webhook Integration

Configure the `CONTACT_FORM_WEBHOOK_URL` environment variable to receive notifications when forms are submitted.

### Webhook Payload

```json
{
  "timestamp": "2024-01-15T10:30:00.000Z",
  "formData": {
    "name": "John Doe",
    "phone": "9876543210",
    "email": "john@example.com",
    "serviceType": "aluminium",
    "message": "I need aluminium windows for my home"
  },
  "subject": "New Contact Form Submission - aluminium",
  "text": "New contact form submission received:\n\nName: John Doe\nPhone: 9876543210\nEmail: john@example.com\nService Type: aluminium\n\nMessage:\nI need aluminium windows for my home\n\n---\nSubmitted at: 1/15/2024, 4:00:00 PM"
}
```

### Supported Webhook Services

- **Zapier**: Create a webhook trigger and use the catch hook URL
- **Make.com**: Create a webhook module and use the webhook URL
- **Custom Endpoint**: Any endpoint that accepts POST requests with JSON payload
- **Email Services**: SendGrid, Mailgun, AWS SES (requires custom integration)

## Security Features

1. **Input Validation**: All fields are validated and sanitized
2. **Rate Limiting**: Prevents spam and abuse
3. **Error Handling**: Graceful error responses without exposing internals
4. **CORS**: Supports OPTIONS preflight requests
5. **Type Safety**: Full TypeScript type checking

## Testing

### Using cURL

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "phone": "9876543210",
    "email": "test@example.com",
    "serviceType": "aluminium",
    "message": "This is a test message for the contact form"
  }'
```

### Using JavaScript

```javascript
const response = await fetch('/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: 'Test User',
    phone: '9876543210',
    email: 'test@example.com',
    serviceType: 'aluminium',
    message: 'This is a test message',
  }),
});

const data = await response.json();
console.log(data);
```

## Production Considerations

1. **Rate Limiting**: Replace in-memory store with Redis for distributed systems
2. **Logging**: Add structured logging for monitoring and debugging
3. **Monitoring**: Track submission rates, errors, and webhook failures
4. **Database**: Store submissions in a database for record-keeping
5. **Email Service**: Integrate with a proper email service provider
6. **Spam Protection**: Consider adding CAPTCHA or honeypot fields
7. **Data Retention**: Implement data retention policies for GDPR compliance

## Environment Variables

```env
# Required for webhook notifications
CONTACT_FORM_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/xxxxx/xxxxx/
```

## Error Codes

- `RATE_LIMIT_EXCEEDED`: Too many requests from the same IP
- `INVALID_JSON`: Request body is not valid JSON
- `VALIDATION_ERROR`: One or more fields failed validation
- `INTERNAL_ERROR`: Unexpected server error
