# Netlify Deployment Guide - A1 Aluminium Website

## ❌ GALAT TARIKA
**`.next` folder ko drag & drop karna** - Yeh kaam nahi karega!

## ✅ SAHI TARIKA

### Method 1: GitHub Integration (Recommended)

#### Step 1: Netlify Dashboard
1. https://app.netlify.com par jao
2. Login karo (GitHub account se)

#### Step 2: New Site
1. **"Add new site"** button click karo
2. **"Import an existing project"** select karo

#### Step 3: Connect GitHub
1. **"Deploy with GitHub"** click karo
2. Authorize Netlify to access your GitHub
3. Repository search karo: `A1-Aluminium-Sliding-Windows`
4. Repository select karo

#### Step 4: Build Settings
Netlify automatically detect kar lega, but verify karo:

```
Build command: npm run build
Publish directory: .next
```

**Environment Variables** (agar chahiye):
- `NODE_VERSION`: 20
- `NPM_FLAGS`: --legacy-peer-deps

#### Step 5: Deploy
1. **"Deploy site"** button click karo
2. Wait for build to complete (2-5 minutes)
3. Site live ho jayegi!

---

### Method 2: Netlify CLI (Alternative)

Agar command line se deploy karna hai:

#### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

#### Step 2: Login
```bash
netlify login
```

#### Step 3: Initialize
```bash
netlify init
```

Follow the prompts:
- Create & configure a new site
- Select your team
- Site name enter karo

#### Step 4: Deploy
```bash
# Production deployment
netlify deploy --prod

# Or draft deployment (preview)
netlify deploy
```

---

### Method 3: Manual Drag & Drop (NOT Recommended for Next.js)

⚠️ **Warning**: Next.js apps ke liye drag & drop recommended nahi hai kyunki:
- Server-side rendering nahi hogi
- API routes kaam nahi karenge
- Dynamic features break ho jayenge

Agar phir bhi karna hai:

#### Step 1: Build Locally
```bash
npm run build
```

#### Step 2: Export Static Site
```bash
# Add to package.json scripts:
"export": "next export"

# Then run:
npm run export
```

#### Step 3: Drag & Drop
- `out` folder ko drag karo (NOT `.next`)
- But yeh limited functionality dega

---

## 🔧 Troubleshooting

### Build Fails
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Environment Variables Missing
Netlify dashboard mein jao:
1. Site settings
2. Build & deploy
3. Environment variables
4. Add required variables

### Images Not Loading
Check `next.config.js`:
```javascript
module.exports = {
  images: {
    unoptimized: true, // For static export
  },
}
```

---

## 📊 Current Configuration

Your `netlify.toml`:
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

This is perfect for Next.js deployment! ✅

---

## 🎯 Recommended Workflow

1. **Development**: 
   ```bash
   npm run dev
   ```

2. **Test Build Locally**:
   ```bash
   npm run build
   npm start
   ```

3. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Your message"
   git push origin main
   ```

4. **Auto-Deploy**: Netlify will automatically deploy from GitHub

---

## 🔗 Useful Links

- Netlify Dashboard: https://app.netlify.com
- Your GitHub Repo: https://github.com/Rahim8828/A1-Aluminium-Sliding-Windows
- Netlify Next.js Docs: https://docs.netlify.com/integrations/frameworks/next-js/

---

## ✅ Checklist Before Deploy

- [ ] Code pushed to GitHub
- [ ] `npm run build` works locally
- [ ] No TypeScript errors
- [ ] Environment variables configured (if needed)
- [ ] `netlify.toml` file present
- [ ] Images optimized
- [ ] API routes tested

---

## 🚀 Quick Deploy Command

If already connected to Netlify:
```bash
git push origin main
```

Netlify will automatically:
1. Detect the push
2. Run `npm install`
3. Run `npm run build`
4. Deploy to production

**Deployment time**: 2-5 minutes
**Auto-deploy**: Enabled on main branch
