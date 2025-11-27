# Netlify Image Loading Fix

## Problem
Images show nahi ho rahi hain Netlify deployment par.

## Root Causes & Solutions

### Issue 1: Image Paths
Next.js mein images ko `/` se start karna chahiye, not `./`

#### ✅ Correct:
```tsx
<Image src="/aluminium-category/2-Track-sliding-Window.webp" />
```

#### ❌ Wrong:
```tsx
<Image src="./aluminium-category/2-Track-sliding-Window.webp" />
<Image src="aluminium-category/2-Track-sliding-Window.webp" />
```

### Issue 2: Next.js Image Optimization
Netlify ke saath Next.js Image component properly configure hona chahiye.

#### Solution Applied:
Updated `next.config.ts`:
```typescript
images: {
  formats: ['image/webp', 'image/avif'],
  unoptimized: false, // Netlify plugin handles optimization
  loader: 'default',
  // ... other settings
}
```

### Issue 3: Static File Serving
Netlify ko explicitly batana padta hai ki static files kaise serve karni hain.

#### Solution Applied:
Updated `netlify.toml` with proper headers:
```toml
[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/*.webp"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
    Content-Type = "image/webp"
```

---

## Quick Fix Steps

### Step 1: Verify Image Paths
Check that all images use absolute paths starting with `/`:

```bash
# Search for incorrect image paths
grep -r "src=\"\\./" src/
grep -r "src=\"[^/]" src/ | grep -v "http"
```

### Step 2: Check Public Folder Structure
```
public/
├── aluminium-category/
│   └── *.webp
├── glass-category/
│   └── *.webp
├── netting-category/
│   └── *.webp
└── website-images/
    └── *.jpg, *.png
```

### Step 3: Rebuild and Redeploy
```bash
# Clear cache
rm -rf .next

# Rebuild
npm run build

# Test locally
npm start

# If working, commit and push
git add .
git commit -m "fix: Configure images for Netlify deployment"
git push origin main
```

---

## Debugging on Netlify

### Check Build Logs
1. Go to Netlify Dashboard
2. Click on your site
3. Go to "Deploys"
4. Click on latest deploy
5. Check "Deploy log"

Look for:
- ✅ Build successful
- ✅ `@netlify/plugin-nextjs` installed
- ✅ No image optimization errors

### Check Deploy Preview
1. Open deployed site
2. Right-click on missing image
3. "Inspect Element"
4. Check Console for errors
5. Check Network tab for 404s

### Common Error Messages:

#### Error: "Failed to load resource: 404"
**Solution**: Image path is wrong
```tsx
// Fix the path
<Image src="/aluminium-category/image.webp" alt="..." />
```

#### Error: "Image optimization using Next.js' default loader is not compatible with `output: 'export'`"
**Solution**: Remove `output: 'export'` from next.config.ts or set `unoptimized: true`

#### Error: "Invalid src prop"
**Solution**: Ensure src starts with `/` or is a full URL

---

## Environment-Specific Configuration

### For Netlify (Current Setup)
```typescript
// next.config.ts
images: {
  unoptimized: false, // Let Netlify plugin handle it
  loader: 'default',
}
```

### For Static Export (Alternative)
```typescript
// next.config.ts
output: 'export',
images: {
  unoptimized: true, // Required for static export
}
```

---

## Testing Checklist

### Local Testing
- [ ] `npm run build` successful
- [ ] `npm start` shows images correctly
- [ ] No console errors
- [ ] All image formats loading (webp, png, jpg)

### Netlify Testing
- [ ] Build successful on Netlify
- [ ] Deploy preview shows images
- [ ] Production site shows images
- [ ] Images load on mobile
- [ ] Images load on different browsers

---

## Image Path Reference

All images should be referenced from `public/` folder:

```tsx
// Aluminium Category
<Image src="/aluminium-category/2-Track-sliding-Window.webp" />

// Glass Category
<Image src="/glass-category/Full-glass-partitions.webp" />

// Netting Category
<Image src="/netting-category/Pigeon-netting.webp" />

// Website Images
<Image src="/website-images/logo.png" />
<Image src="/A1-Logo.png" />
```

---

## Netlify Plugin Configuration

The `@netlify/plugin-nextjs` automatically:
- ✅ Handles Next.js Image optimization
- ✅ Serves static files from `public/`
- ✅ Configures proper caching headers
- ✅ Handles API routes
- ✅ Manages redirects

No additional configuration needed!

---

## If Images Still Not Loading

### Option 1: Enable Unoptimized Images (Quick Fix)
```typescript
// next.config.ts
images: {
  unoptimized: true, // Disable Next.js image optimization
}
```

Then rebuild and redeploy.

### Option 2: Use Static Export
```typescript
// next.config.ts
output: 'export',
images: {
  unoptimized: true,
}
```

Then:
```bash
npm run build
# Drag & drop the 'out' folder to Netlify
```

### Option 3: Check Netlify Build Settings
In Netlify Dashboard:
1. Site settings
2. Build & deploy
3. Build settings
4. Verify:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 20

---

## Files Modified

1. ✅ `netlify.toml` - Added image headers
2. ✅ `next.config.ts` - Configured image loader
3. ✅ All image paths use `/` prefix

---

## Next Steps

1. **Commit changes**:
   ```bash
   git add netlify.toml next.config.ts
   git commit -m "fix: Configure images for Netlify deployment"
   git push origin main
   ```

2. **Wait for Netlify auto-deploy** (2-5 minutes)

3. **Check deployed site** - Images should now load!

4. **If still not working**:
   - Check Netlify build logs
   - Verify image paths in browser console
   - Try Option 1 (unoptimized images)

---

## Support

If images still not loading after all fixes:
1. Share Netlify deploy log
2. Share browser console errors
3. Share specific image URL that's failing
