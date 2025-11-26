# Netlify Deployment Guide

## Prerequisites
- GitHub account
- Netlify account (free tier works)
- Your code pushed to GitHub

## Method 1: Deploy via Netlify Dashboard (Easiest)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Connect to Netlify
1. Go to https://app.netlify.com/
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub" and authorize Netlify
4. Select your repository

### Step 3: Configure Build Settings
Netlify will auto-detect Next.js. Verify these settings:
- **Build command:** `npm run build`
- **Publish directory:** `.next`
- **Node version:** 18 or higher

### Step 4: Add Environment Variables (if any)
In Netlify dashboard:
- Go to Site settings → Environment variables
- Add any required variables from your `.env.local`

### Step 5: Deploy
- Click "Deploy site"
- Wait 2-3 minutes for build to complete
- Your site will be live at `https://random-name.netlify.app`

### Step 6: Custom Domain (Optional)
- Go to Domain settings
- Add your custom domain
- Follow DNS configuration instructions

---

## Method 2: Deploy via Netlify CLI

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Login to Netlify
```bash
netlify login
```

### Step 3: Initialize Site
```bash
netlify init
```

Follow the prompts:
- Create & configure a new site
- Choose your team
- Enter site name (or leave blank for random)

### Step 4: Deploy
```bash
# Deploy to draft URL for testing
netlify deploy

# Deploy to production
netlify deploy --prod
```

---

## Method 3: Manual Deploy (Quick Test)

### Step 1: Build the Project
```bash
npm run build
```

### Step 2: Deploy via Netlify Drop
1. Go to https://app.netlify.com/drop
2. Drag and drop your `.next` folder
3. Site will be live instantly

---

## Important Notes

### 1. Next.js Plugin
The `netlify.toml` file includes the Next.js plugin which handles:
- Server-side rendering (SSR)
- API routes
- Image optimization
- Incremental Static Regeneration (ISR)

### 2. Environment Variables
If you have environment variables in `.env.local`, add them in Netlify:
```
Site settings → Environment variables → Add variable
```

### 3. Build Settings
Your `netlify.toml` is already configured with:
- Build command: `npm run build`
- Publish directory: `.next`
- Next.js plugin enabled

### 4. Continuous Deployment
Once connected to GitHub:
- Every push to `main` branch auto-deploys
- Pull requests get preview deployments
- Rollback to previous versions anytime

---

## Troubleshooting

### Build Fails
```bash
# Check build locally first
npm run build

# Check for TypeScript errors
npm run type-check

# Check for linting errors
npm run lint
```

### Images Not Loading
- Ensure images are in `public/` folder
- Check image paths start with `/` (e.g., `/images/logo.png`)
- Verify image files are committed to Git

### API Routes Not Working
- Ensure API routes are in `src/app/api/` directory
- Check Netlify Functions are enabled
- Verify Next.js plugin is installed

### Environment Variables
- Add all `.env.local` variables to Netlify dashboard
- Restart deployment after adding variables
- Use `NEXT_PUBLIC_` prefix for client-side variables

---

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages are accessible
- [ ] Images display properly
- [ ] Forms work (contact form)
- [ ] API routes function
- [ ] Mobile responsive
- [ ] SEO meta tags present
- [ ] Analytics tracking works
- [ ] Custom domain configured (if applicable)

---

## Useful Commands

```bash
# Check deployment status
netlify status

# View site logs
netlify logs

# Open site in browser
netlify open

# Open admin dashboard
netlify open:admin

# List all sites
netlify sites:list
```

---

## Support

- Netlify Docs: https://docs.netlify.com/
- Next.js on Netlify: https://docs.netlify.com/frameworks/next-js/
- Community Forum: https://answers.netlify.com/
