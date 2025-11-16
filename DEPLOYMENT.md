# Deployment Guide

This guide covers deploying the A1 Aluminium, Glass & Netting Solutions website to production.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Deployment Platforms](#deployment-platforms)
- [Vercel Deployment (Recommended)](#vercel-deployment-recommended)
- [Other Platforms](#other-platforms)
- [Post-Deployment Checklist](#post-deployment-checklist)
- [Monitoring and Maintenance](#monitoring-and-maintenance)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before deploying, ensure you have:

- Node.js 18.x or higher installed
- All environment variables configured
- Google Analytics tracking ID
- Contact form webhook URL (optional but recommended)
- Domain name configured (if using custom domain)

## Environment Variables

### Required Environment Variables

Create a `.env.local` file (for local development) or configure these in your deployment platform:

```bash
# Google Analytics (Required for tracking)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact Information (Required)
NEXT_PUBLIC_PHONE_NUMBER=+91XXXXXXXXXX
NEXT_PUBLIC_WHATSAPP_NUMBER=+91XXXXXXXXXX
NEXT_PUBLIC_EMAIL=info@a1aluminium.com

# Contact Form Webhook (Optional but recommended)
CONTACT_FORM_WEBHOOK_URL=https://hooks.zapier.com/hooks/catch/xxxxx/xxxxx/
```

### Environment Variable Details

#### `NEXT_PUBLIC_GA_ID`
- **Purpose**: Google Analytics 4 tracking ID
- **Format**: `G-XXXXXXXXXX`
- **How to get**: 
  1. Go to [Google Analytics](https://analytics.google.com/)
  2. Create a new GA4 property
  3. Copy the Measurement ID (starts with G-)
- **Required**: Yes (for analytics tracking)

#### `NEXT_PUBLIC_PHONE_NUMBER`
- **Purpose**: Primary business phone number for click-to-call
- **Format**: `+91XXXXXXXXXX` (include country code)
- **Required**: Yes

#### `NEXT_PUBLIC_WHATSAPP_NUMBER`
- **Purpose**: WhatsApp business number
- **Format**: `+91XXXXXXXXXX` (include country code, no spaces or dashes)
- **Required**: Yes

#### `NEXT_PUBLIC_EMAIL`
- **Purpose**: Business email address
- **Format**: `email@domain.com`
- **Required**: Yes

#### `CONTACT_FORM_WEBHOOK_URL`
- **Purpose**: Endpoint to receive contact form submissions
- **Format**: Full HTTPS URL
- **Options**:
  - Zapier webhook
  - Make.com webhook
  - Custom API endpoint
  - Email service (SendGrid, Mailgun, etc.)
- **Required**: Optional (forms will still validate without it)

## Deployment Platforms

### Vercel Deployment (Recommended)

Vercel is the recommended platform as it's built by the creators of Next.js and offers:
- Automatic deployments from Git
- Preview deployments for pull requests
- Edge network for fast global delivery
- Automatic HTTPS
- Easy environment variable management
- Zero configuration needed

#### Step-by-Step Vercel Deployment

1. **Install Vercel CLI** (optional, for CLI deployment)
   ```bash
   npm install -g vercel
   ```

2. **Deploy via Vercel Dashboard** (Recommended)
   
   a. Go to [vercel.com](https://vercel.com) and sign up/login
   
   b. Click "Add New Project"
   
   c. Import your Git repository (GitHub, GitLab, or Bitbucket)
   
   d. Configure project:
      - Framework Preset: Next.js (auto-detected)
      - Root Directory: `./` (leave as default)
      - Build Command: `npm run build` (auto-detected)
      - Output Directory: `.next` (auto-detected)
   
   e. Add Environment Variables:
      - Click "Environment Variables"
      - Add each variable from the list above
      - Select which environments (Production, Preview, Development)
   
   f. Click "Deploy"

3. **Deploy via CLI** (Alternative)
   ```bash
   # Login to Vercel
   vercel login
   
   # Deploy to production
   vercel --prod
   ```

4. **Configure Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed
   - Vercel will automatically provision SSL certificate

#### Vercel Environment Variables Setup

In Vercel Dashboard:
1. Go to Project Settings → Environment Variables
2. Add each variable:
   - Name: `NEXT_PUBLIC_GA_ID`
   - Value: Your GA tracking ID
   - Environments: Production, Preview, Development
3. Repeat for all variables
4. Redeploy if already deployed

### Other Platforms

#### Netlify

1. Connect your Git repository
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
3. Add environment variables in Site Settings → Environment Variables
4. Deploy

#### AWS Amplify

1. Connect your Git repository
2. Build settings are auto-detected
3. Add environment variables in App Settings → Environment Variables
4. Deploy

#### Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package*.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Set environment variables for build
ARG NEXT_PUBLIC_GA_ID
ARG NEXT_PUBLIC_PHONE_NUMBER
ARG NEXT_PUBLIC_WHATSAPP_NUMBER
ARG NEXT_PUBLIC_EMAIL

ENV NEXT_PUBLIC_GA_ID=$NEXT_PUBLIC_GA_ID
ENV NEXT_PUBLIC_PHONE_NUMBER=$NEXT_PUBLIC_PHONE_NUMBER
ENV NEXT_PUBLIC_WHATSAPP_NUMBER=$NEXT_PUBLIC_WHATSAPP_NUMBER
ENV NEXT_PUBLIC_EMAIL=$NEXT_PUBLIC_EMAIL

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t a1-aluminium-website .
docker run -p 3000:3000 a1-aluminium-website
```

## Build and Test Locally

Before deploying, test the production build locally:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Start production server
npm start
```

Visit `http://localhost:3000` to verify everything works.

## Post-Deployment Checklist

After deploying, verify the following:

### Functionality Checks
- [ ] All pages load correctly
- [ ] Navigation works (header, footer, mobile nav)
- [ ] Contact form submits successfully
- [ ] Phone number click-to-call works
- [ ] WhatsApp button opens WhatsApp with correct number
- [ ] Images load and are optimized
- [ ] Blog posts display correctly
- [ ] Service pages show all content

### SEO Checks
- [ ] Meta tags are present on all pages
- [ ] Open Graph tags work (test with [OpenGraph.xyz](https://www.opengraph.xyz/))
- [ ] Sitemap is accessible at `/sitemap.xml`
- [ ] Robots.txt is accessible at `/robots.txt`
- [ ] Structured data validates (use [Google Rich Results Test](https://search.google.com/test/rich-results))
- [ ] Submit sitemap to Google Search Console

### Performance Checks
- [ ] Run Lighthouse audit (target: 85+ score)
- [ ] Check Core Web Vitals
- [ ] Verify images are in WebP/AVIF format
- [ ] Test on mobile devices
- [ ] Test on slow 3G connection

### Analytics Checks
- [ ] Google Analytics is tracking pageviews
- [ ] Event tracking works (phone clicks, WhatsApp clicks, form submissions)
- [ ] Real-time data shows in GA dashboard

### Security Checks
- [ ] HTTPS is enabled
- [ ] Security headers are present (check with [SecurityHeaders.com](https://securityheaders.com/))
- [ ] No sensitive data in client-side code
- [ ] Environment variables are not exposed

## Monitoring and Maintenance

### Google Analytics Setup

1. **Set up Goals/Conversions**:
   - Contact form submission
   - Phone number clicks
   - WhatsApp button clicks
   - Service page visits

2. **Create Custom Reports**:
   - Traffic by service category
   - Conversion funnel analysis
   - Mobile vs desktop performance

3. **Set up Alerts**:
   - Traffic drops
   - Conversion rate changes
   - Error rate increases

### Google Search Console

1. **Submit Sitemap**:
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Add property for your domain
   - Submit sitemap: `https://yourdomain.com/sitemap.xml`

2. **Monitor**:
   - Index coverage
   - Search performance
   - Mobile usability
   - Core Web Vitals

### Performance Monitoring

Use Vercel Analytics (if on Vercel) or set up:
- [Sentry](https://sentry.io/) for error tracking
- [LogRocket](https://logrocket.com/) for session replay
- [Hotjar](https://www.hotjar.com/) for heatmaps

### Regular Maintenance

- **Weekly**: Check analytics for anomalies
- **Monthly**: Review and update blog content
- **Quarterly**: Run full Lighthouse audit
- **Annually**: Review and update service information

## Troubleshooting

### Build Fails

**Error**: `Module not found` or dependency errors
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
npm run build
```

**Error**: TypeScript errors
```bash
# Check for type errors
npm run type-check
```

### Environment Variables Not Working

- Ensure variables start with `NEXT_PUBLIC_` for client-side access
- Restart dev server after adding new variables
- Redeploy on Vercel after adding variables
- Check variable names match exactly (case-sensitive)

### Images Not Loading

- Verify images are in `public/images/` directory
- Check image paths are correct (relative to public)
- Ensure image formats are supported (jpg, png, webp, avif)
- Check Next.js Image component is used correctly

### Analytics Not Tracking

- Verify `NEXT_PUBLIC_GA_ID` is set correctly
- Check browser console for errors
- Ensure ad blockers are disabled for testing
- Wait 24-48 hours for data to appear in GA

### Contact Form Not Submitting

- Check `CONTACT_FORM_WEBHOOK_URL` is set (if using webhook)
- Verify webhook endpoint is accessible
- Check browser console for errors
- Test API route directly: `POST /api/contact`

### Performance Issues

- Run Lighthouse audit to identify issues
- Check image sizes and formats
- Verify code splitting is working
- Check for unnecessary re-renders
- Review bundle size with `npm run analyze` (if configured)

## Rollback Procedure

### Vercel Rollback

1. Go to Deployments tab in Vercel dashboard
2. Find the last working deployment
3. Click "..." menu → "Promote to Production"

### Git Rollback

```bash
# Revert to previous commit
git revert HEAD
git push origin main

# Or reset to specific commit
git reset --hard <commit-hash>
git push origin main --force
```

## Support and Resources

- **Next.js Documentation**: https://nextjs.org/docs
- **Vercel Documentation**: https://vercel.com/docs
- **Google Analytics Help**: https://support.google.com/analytics
- **Google Search Console Help**: https://support.google.com/webmasters

## Security Best Practices

1. **Never commit `.env.local` or `.env` files**
   - Already in `.gitignore`
   - Use platform environment variables

2. **Keep dependencies updated**
   ```bash
   npm audit
   npm update
   ```

3. **Review security headers**
   - Use [SecurityHeaders.com](https://securityheaders.com/)
   - Ensure all headers are present

4. **Monitor for vulnerabilities**
   - Enable Dependabot on GitHub
   - Review security alerts

5. **Use HTTPS only**
   - Automatic on Vercel
   - Configure on other platforms

## Performance Optimization Tips

1. **Image Optimization**
   - Use Next.js Image component
   - Provide width and height
   - Use appropriate formats (WebP, AVIF)

2. **Code Splitting**
   - Use dynamic imports for heavy components
   - Lazy load below-the-fold content

3. **Caching**
   - Leverage ISR for blog posts
   - Use appropriate cache headers

4. **Bundle Size**
   - Analyze bundle with `@next/bundle-analyzer`
   - Remove unused dependencies
   - Use tree-shaking

## Conclusion

This deployment guide covers the essential steps to deploy and maintain the A1 Aluminium website. For additional help, refer to the Next.js and Vercel documentation, or contact your development team.

**Quick Start**: For fastest deployment, use Vercel with the dashboard method. It requires minimal configuration and provides the best developer experience.
