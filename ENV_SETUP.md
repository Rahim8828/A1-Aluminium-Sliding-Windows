# Environment Variables Setup Guide

Quick reference for setting up environment variables for the A1 Aluminium website.

## Local Development

1. Copy the example file:
   ```bash
   cp .env.example .env.local
   ```

2. Edit `.env.local` with your actual values:
   ```bash
   # Google Analytics
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

   # Contact Information
   NEXT_PUBLIC_PHONE_NUMBER=+919876543210
   NEXT_PUBLIC_WHATSAPP_NUMBER=+919876543210
   NEXT_PUBLIC_EMAIL=info@a1aluminium.com

   # Contact Form Webhook (Optional)
   CONTACT_FORM_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/xxxxx/xxxxx/
   ```

3. Restart your development server:
   ```bash
   npm run dev
   ```

## Production Deployment

### Vercel

1. Go to your project in Vercel Dashboard
2. Navigate to Settings → Environment Variables
3. Add each variable:

| Variable Name | Example Value | Environment |
|--------------|---------------|-------------|
| `NEXT_PUBLIC_GA_ID` | `G-ABC123XYZ` | Production, Preview, Development |
| `NEXT_PUBLIC_PHONE_NUMBER` | `+919876543210` | Production, Preview, Development |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | `+919876543210` | Production, Preview, Development |
| `NEXT_PUBLIC_EMAIL` | `info@a1aluminium.com` | Production, Preview, Development |
| `CONTACT_FORM_WEBHOOK_URL` | `https://hooks.zapier.com/...` | Production, Preview |

4. Redeploy your application

### Other Platforms

#### Netlify
- Go to Site Settings → Environment Variables
- Add each variable with its value

#### AWS Amplify
- Go to App Settings → Environment Variables
- Add each variable with its value

#### Docker
Pass as build arguments:
```bash
docker build \
  --build-arg NEXT_PUBLIC_GA_ID=G-ABC123XYZ \
  --build-arg NEXT_PUBLIC_PHONE_NUMBER=+919876543210 \
  --build-arg NEXT_PUBLIC_WHATSAPP_NUMBER=+919876543210 \
  --build-arg NEXT_PUBLIC_EMAIL=info@a1aluminium.com \
  -t a1-aluminium-website .
```

## Variable Details

### NEXT_PUBLIC_GA_ID
- **Required**: Yes
- **Format**: `G-XXXXXXXXXX`
- **Purpose**: Google Analytics 4 tracking
- **How to get**:
  1. Create GA4 property at https://analytics.google.com/
  2. Copy the Measurement ID (starts with "G-")

### NEXT_PUBLIC_PHONE_NUMBER
- **Required**: Yes
- **Format**: `+91XXXXXXXXXX` (with country code, no spaces)
- **Purpose**: Click-to-call functionality
- **Example**: `+919876543210`

### NEXT_PUBLIC_WHATSAPP_NUMBER
- **Required**: Yes
- **Format**: `+91XXXXXXXXXX` (with country code, no spaces)
- **Purpose**: WhatsApp button functionality
- **Example**: `+919876543210`
- **Note**: Must be a WhatsApp Business number

### NEXT_PUBLIC_EMAIL
- **Required**: Yes
- **Format**: `email@domain.com`
- **Purpose**: Display business email
- **Example**: `info@a1aluminium.com`

### CONTACT_FORM_WEBHOOK_URL
- **Required**: No (optional)
- **Format**: Full HTTPS URL
- **Purpose**: Receive contact form submissions
- **Options**:
  - **Zapier**: Create a webhook at https://zapier.com/
  - **Make.com**: Create a webhook at https://make.com/
  - **Custom API**: Your own endpoint
  - **Email Services**: SendGrid, Mailgun, etc.

## Setting Up Contact Form Webhook

### Option 1: Zapier (Recommended for non-developers)

1. Sign up at https://zapier.com/
2. Create a new Zap
3. Choose "Webhooks by Zapier" as trigger
4. Select "Catch Hook"
5. Copy the webhook URL
6. Add to `CONTACT_FORM_WEBHOOK_URL`
7. Configure action (e.g., send email, add to Google Sheets)

### Option 2: Make.com

1. Sign up at https://make.com/
2. Create a new scenario
3. Add "Webhooks" module
4. Choose "Custom webhook"
5. Copy the webhook URL
6. Add to `CONTACT_FORM_WEBHOOK_URL`
7. Add modules to process the data

### Option 3: Custom API

Create your own endpoint that accepts POST requests with this payload:
```json
{
  "name": "John Doe",
  "phone": "+919876543210",
  "email": "john@example.com",
  "serviceType": "Aluminium Windows",
  "message": "I need a quote for aluminium windows"
}
```

## Verification

After setting up environment variables:

1. **Check they're loaded**:
   ```javascript
   // In browser console
   console.log(process.env.NEXT_PUBLIC_GA_ID);
   ```

2. **Test functionality**:
   - Click phone number → Should initiate call
   - Click WhatsApp button → Should open WhatsApp
   - Submit contact form → Should send to webhook
   - Check Google Analytics → Should track pageviews

3. **Common Issues**:
   - Variables not loading? Restart dev server
   - Still not working? Check variable names (case-sensitive)
   - Production not working? Redeploy after adding variables

## Security Notes

- ✅ Variables starting with `NEXT_PUBLIC_` are safe to expose (client-side)
- ❌ Never commit `.env.local` or `.env` files to Git
- ✅ Use platform environment variables for production
- ❌ Don't include sensitive API keys in `NEXT_PUBLIC_` variables
- ✅ The `.gitignore` file already excludes `.env*` files

## Quick Test

Run this command to verify your setup:
```bash
npm run build
```

If successful, all environment variables are correctly configured.

## Need Help?

- Check the full [DEPLOYMENT.md](./DEPLOYMENT.md) guide
- Review [Next.js Environment Variables docs](https://nextjs.org/docs/basic-features/environment-variables)
- Contact your development team
