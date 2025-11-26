# Netlify Deployment Guide - A1 Aluminium Website

## ✅ Important: .next Folder ke Baare Mein

**`.next` folder ko manually upload NAHI karna hai!**

- ✅ `.next` folder `.gitignore` mein hai (correct)
- ✅ Netlify automatically build karega
- ✅ Tumhara source code already GitHub par push ho gaya hai

---

## Netlify Deployment Steps

### Step 1: Netlify Account Setup
1. https://app.netlify.com/ par jao
2. GitHub se login karo
3. "Add new site" > "Import an existing project" click karo

### Step 2: Repository Connect
1. "GitHub" select karo
2. Repository search karo: `Rahim8828/A1-Aluminium-Sliding-Windows`
3. Repository select karo

### Step 3: Build Settings (Auto-detected)
Netlify automatically detect karega, but verify karo:

```
Build command: npm run build
Publish directory: .next
```

Yeh settings already `netlify.toml` mein configured hain!

### Step 4: Environment Variables
Deploy karne se pehle yeh environment variables add karo:

**Required:**
- `NEXT_PUBLIC_SITE_URL` = `https://your-site-name.netlify.app` (baad mein update kar sakte ho)
- `NEXT_PUBLIC_WHATSAPP_NUMBER` = `919876543210` (apna number daalo)

**Optional (for analytics):**
- `NEXT_PUBLIC_GA_ID` = Your Google Analytics ID (agar use karna hai)

**Kaise add karein:**
1. Site settings > Environment variables
2. "Add a variable" click karo
3. Key-value pairs add karo

### Step 5: Deploy
1. "Deploy site" button click karo
2. Netlify automatically:
   - Code pull karega
   - Dependencies install karega (`npm install`)
   - Build run karega (`npm run build`)
   - `.next` folder create karega
   - Site deploy karega

### Step 6: Build Process (Automatic)
Netlify console mein tumhe yeh dikhega:
```
1. Installing dependencies
2. Running build command
3. Deploying to production
```

Build time: ~2-3 minutes

---

## Post-Deployment

### Custom Domain Setup (Optional)
1. Site settings > Domain management
2. "Add custom domain" click karo
3. Apna domain add karo (e.g., a1aluminium.com)
4. DNS settings update karo

### SSL Certificate
- Netlify automatically free SSL certificate provide karega
- HTTPS automatically enable hoga

### Site URL Update
Deploy hone ke baad:
1. Apna Netlify URL copy karo (e.g., `https://a1-aluminium.netlify.app`)
2. Environment variables mein `NEXT_PUBLIC_SITE_URL` update karo
3. Redeploy karo (automatic trigger hoga)

---

## Troubleshooting

### Build Failed?
Check karo:
- Node version (18 required - already set in netlify.toml)
- Environment variables properly set hain
- Build logs mein error message dekho

### Site Not Loading?
- Clear browser cache
- Check Netlify deploy logs
- Verify environment variables

### WhatsApp Not Working?
- `NEXT_PUBLIC_WHATSAPP_NUMBER` format check karo: `919876543210`
- Country code include karo (91 for India)
- No spaces, no + sign

---

## Quick Commands (For Reference)

### Local Testing
```bash
npm run build    # Production build test
npm run start    # Test production build locally
npm run dev      # Development mode
```

### Check Build Output
```bash
ls -la .next     # Build folder check (local only)
```

---

## Summary

✅ **Tumhara kaam:**
1. Netlify par jao
2. GitHub repo connect karo
3. Environment variables add karo
4. Deploy button click karo

❌ **Tumhe yeh NAHI karna:**
- `.next` folder manually upload
- Build files manually create
- FTP/manual file upload

Netlify sab automatically handle karega! 🚀
