# TMV Studios - Deployment Options

## 🎯 Current Configuration

This project is built with **TanStack Start** and is currently configured for **Cloudflare Pages** deployment (via the `@cloudflare/vite-plugin` and `wrangler.jsonc`).

---

## ✅ Option 1: Deploy to Cloudflare Pages (Recommended - Already Configured)

### Why Cloudflare?
- ✅ Already configured in the project
- ✅ Free tier with generous limits
- ✅ Global CDN with excellent performance
- ✅ Built-in DDoS protection
- ✅ Automatic HTTPS
- ✅ Zero configuration needed

### Quick Deploy to Cloudflare

#### Method A: Via Cloudflare Dashboard (Easiest)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo>
   git push -u origin main
   ```

2. **Connect to Cloudflare Pages**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Navigate to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
   - Select your repository
   - Configure build settings:
     - **Build command**: `npm run build`
     - **Build output directory**: `dist/client`
     - **Root directory**: `1TMV NewWeb` (if in subdirectory)

3. **Deploy**
   - Click **Save and Deploy**
   - Your site will be live at `<project-name>.pages.dev` in ~2 minutes

#### Method B: Via Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Deploy
npm run build
wrangler pages deploy dist/client --project-name=tmv-studios
```

### Custom Domain on Cloudflare

1. Go to your Pages project → **Custom domains**
2. Add `www.themadvirus.com`
3. Update DNS records (Cloudflare will guide you)
4. SSL certificate is automatic

### Cost: **FREE** (Cloudflare Pages Free Tier)
- Unlimited requests
- Unlimited bandwidth
- 500 builds/month
- Perfect for this project

---

## 🔄 Option 2: Deploy to Vercel (Requires Conversion)

### Current Issue
TanStack Start with Cloudflare adapter doesn't work directly on Vercel. You need to either:
1. Convert to static export (loses SSR benefits)
2. Use Vercel adapter (requires code changes)

### Steps to Deploy on Vercel

#### Step 1: Install Vercel Adapter
```bash
npm install @tanstack/start-vercel
```

#### Step 2: Update `vite.config.ts`
```typescript
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import vercel from "@tanstack/start-vercel";

export default defineConfig({
  vite: {
    plugins: [vercel()],
  },
});
```

#### Step 3: Remove Cloudflare Configuration
```bash
npm uninstall @cloudflare/vite-plugin
rm wrangler.jsonc
```

#### Step 4: Update `vercel.json`
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".vercel/output",
  "framework": null
}
```

#### Step 5: Deploy
```bash
npm install -g vercel
vercel --prod
```

### Cost: **FREE** (Vercel Hobby Tier)
- 100GB bandwidth/month
- Unlimited deployments
- Automatic HTTPS

---

## 📊 Comparison

| Feature | Cloudflare Pages | Vercel |
|---------|------------------|--------|
| **Setup** | ✅ Already configured | ⚠️ Requires changes |
| **Free Tier** | Unlimited bandwidth | 100GB/month |
| **Build Time** | ~2 minutes | ~2 minutes |
| **Global CDN** | ✅ Yes | ✅ Yes |
| **Custom Domain** | ✅ Free | ✅ Free |
| **SSL** | ✅ Automatic | ✅ Automatic |
| **DDoS Protection** | ✅ Included | ⚠️ Pro plan |
| **Analytics** | ✅ Free | ⚠️ Paid add-on |

---

## 🚀 Recommended Approach

### **Deploy to Cloudflare Pages** (5 minutes)

This is the fastest path to production because:
1. ✅ Already configured
2. ✅ No code changes needed
3. ✅ Better free tier
4. ✅ Built-in security features
5. ✅ Excellent performance

### Quick Start

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "TMV Studios website"
git branch -M main
git remote add origin git@github.com:YOUR_USERNAME/tmv-studios.git
git push -u origin main

# 2. Go to dash.cloudflare.com
# 3. Workers & Pages → Create → Pages → Connect to Git
# 4. Select repo → Deploy

# Done! Live in 2 minutes at https://tmv-studios.pages.dev
```

---

## 🔧 Post-Deployment

### 1. Custom Domain
- Add `www.themadvirus.com` in Cloudflare Pages dashboard
- Update DNS records
- SSL is automatic

### 2. Environment Variables (if needed)
- Add in Cloudflare Pages → Settings → Environment variables
- Example: `VITE_API_URL`, `VITE_GA_ID`

### 3. Analytics
- Enable Cloudflare Web Analytics (free)
- Or add Google Analytics via environment variable

### 4. Performance Monitoring
- Cloudflare Analytics (included)
- Lighthouse CI for continuous monitoring

---

## 📞 Support

**Email**: raman@themadvirus.com  
**Phone**: +91-844-751-4242

---

## 🎯 Next Steps

1. ✅ Choose deployment platform (Cloudflare recommended)
2. ✅ Push code to GitHub
3. ✅ Connect to Cloudflare Pages
4. ✅ Deploy (2 minutes)
5. ✅ Add custom domain
6. ✅ Enable analytics
7. ✅ Monitor performance

---

**Recommendation**: Deploy to Cloudflare Pages now, it's already configured and ready to go! 🚀

