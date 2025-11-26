# Netlify Deployment Fix Guide

## Problem Analysis
Build fail ho raha hai "Module not found" error ke saath. Yeh Next.js 16 aur Netlify compatibility issue ho sakta hai.

## Solution Steps

### Step 1: Environment Variables (CRITICAL)
Netlify dashboard mein yeh environment variables add karo:

```
NODE_VERSION=20
NPM_FLAGS=--legacy-peer-deps
NEXT_PUBLIC_SITE_URL=https://your-site.netlify.app
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
```

### Step 2: Build Settings
Netlify dashboard mein build settings verify karo:

**Build command:**
```
npm run build
```

**Publish directory:**
```
.next
```

**Functions directory:** (leave empty)

### Step 3: Deploy Settings
1. Site settings > Build & deploy > Build settings
2. Clear cache and retry deploy
3. Enable "Automatically publish" for main branch

### Step 4: Alternative Build Command (If Still Failing)
Agar abhi bhi fail ho raha hai, toh build command change karo:

```
npm install --legacy-peer-deps && npm run build
```

### Step 5: Check Node Version
Netlify console mein check karo ki Node 20 use ho raha hai:
- Deploy log mein "Node version" line dekho
- Should show: "Node v20.x.x"

## Common Issues & Fixes

### Issue 1: "Module not found: Can't resolve 'fs'"
**Fix:** Yeh server-side module hai. Next.js automatically handle karta hai. Ensure:
- `next.config.ts` mein `output` setting nahi hai
- Build command correct hai

### Issue 2: "Build command failed"
**Fix:** 
- Clear build cache: Site settings > Build & deploy > Post processing > Clear cache
- Retry deploy

### Issue 3: "Out of memory"
**Fix:**
- Add environment variable: `NODE_OPTIONS=--max-old-space-size=4096`

### Issue 4: "@netlify/plugin-nextjs" error
**Fix:**
- Plugin automatically install hota hai
- Manual installation ki zarurat nahi

## Recommended Netlify Settings

### Build Settings
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "20"
  NPM_FLAGS = "--legacy-peer-deps"
```

### Environment Variables
```
NODE_VERSION=20
NEXT_PUBLIC_SITE_URL=https://your-actual-site.netlify.app
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
```

## Testing Locally Before Deploy

```bash
# Clean install
rm -rf node_modules .next
npm install

# Test build
npm run build

# Test production
npm run start
```

Agar local build successful hai, toh Netlify par bhi hona chahiye.

## Alternative: Vercel Deployment

Agar Netlify par issues continue hain, Vercel try karo (Next.js ka official platform):

1. https://vercel.com par jao
2. GitHub se login karo
3. Import repository
4. Automatic detection hoga
5. Deploy button click karo

Vercel Next.js ke liye optimized hai aur usually zero-config mein kaam karta hai.

## Debug Steps

1. **Check Build Logs:**
   - Netlify dashboard > Deploys > Failed deploy > View logs
   - Exact error message note karo

2. **Check Dependencies:**
   ```bash
   npm list
   ```
   - Koi peer dependency warning?

3. **Check Next.js Version:**
   - Next.js 16 latest hai, kuch compatibility issues ho sakte hain
   - Consider downgrading to 15.x if needed

4. **Test Static Export:**
   - `next.config.ts` mein add karo: `output: 'export'`
   - Rebuild and redeploy

## Contact Support

Agar issue persist kare:
1. Netlify support forum: https://answers.netlify.com/
2. Share exact error message from build logs
3. Mention Next.js version 16.0.3

## Quick Fix Checklist

- [ ] Node version = 20 in environment variables
- [ ] Build command = `npm run build`
- [ ] Publish directory = `.next`
- [ ] Environment variables added
- [ ] Build cache cleared
- [ ] Local build successful
- [ ] netlify.toml file present in root
- [ ] @netlify/plugin-nextjs in netlify.toml

## Success Indicators

Build successful hone par:
- ✅ "Build script success"
- ✅ "Deploying to production"
- ✅ "Site is live"
- ✅ Green checkmark on deploy

Build time: Usually 2-4 minutes
