# TMV Studios - Cloudflare Pages Deployment Guide

## 🚀 Quick Deploy to Cloudflare Pages

This project is configured for **Cloudflare Pages** deployment using TanStack Start with the Cloudflare adapter.

### Why Cloudflare Pages?
- ✅ Already configured in this project
- ✅ Free tier with unlimited bandwidth
- ✅ Global CDN with excellent performance
- ✅ Built-in DDoS protection
- ✅ Automatic HTTPS
- ✅ Zero additional configuration needed

---

## 📋 Deployment Methods

### Option 1: Deploy via Cloudflare Dashboard (Recommended)

#### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "TMV Studios website ready for deployment"

# Add your GitHub repository
git remote add origin git@github.com:YOUR_USERNAME/tmv-studios.git

# Push to main branch
git branch -M main
git push -u origin main
```

#### Step 2: Connect to Cloudflare Pages

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Navigate to **Workers & Pages**
3. Click **Create application** → **Pages** → **Connect to Git**
4. Authorize Cloudflare to access your GitHub account
5. Select your repository

#### Step 3: Configure Build Settings

```
Framework preset: None
Build command: npm run build
Build output directory: dist/client
Root directory: (leave empty or specify if in subdirectory)
Environment variables: (none required for basic deployment)
```

#### Step 4: Deploy

- Click **Save and Deploy**
- Wait ~2 minutes for build to complete
- Your site will be live at `https://<project-name>.pages.dev`

---

### Option 2: Deploy via Wrangler CLI

```bash
# Install Wrangler globally
npm install -g wrangler

# Login to Cloudflare
wrangler login

# Build the project
npm run build

# Deploy to Cloudflare Pages
wrangler pages deploy dist/client --project-name=tmv-studios

# Your site is now live!
```

---

## 📋 Pre-Deployment Checklist

### 1. Environment Setup
```bash
# Install dependencies
npm install

# Test build locally
npm run build

# Preview production build (optional)
npm run preview
```

### 2. Verify Build Output
```bash
# After running npm run build, check:
ls -la dist/client/

# Should contain:
# - assets/ folder with JS, CSS, and images
# - .assetsignore file
```

### 3. Image Assets Verified
- ✅ All images copied from original site
- ✅ Hero image: `src/assets/hero-original.jpg`
- ✅ Footer background: `src/assets/footer-bg.jpg`
- ✅ Logo: `src/assets/logo.jpg`
- ✅ Category thumbnails: animation, live-action, vfx

### 4. Performance Optimizations Applied
- ✅ Code splitting configured
- ✅ Lazy loading for routes
- ✅ Image lazy loading
- ✅ Minification enabled
- ✅ Console logs removed in production

### 5. SEO & Meta Tags
- ✅ Meta descriptions
- ✅ Open Graph tags
- ✅ Twitter cards
- ✅ Semantic HTML
- ✅ Proper heading hierarchy

---

## 🌐 Custom Domain Setup

### Add Custom Domain in Cloudflare Pages

1. Go to your Pages project → **Custom domains**
2. Click **Set up a custom domain**
3. Enter `www.themadvirus.com`
4. Cloudflare will provide DNS records to add:

```
Type: CNAME
Name: www
Target: <your-project>.pages.dev
Proxy: Enabled (orange cloud)
```

For apex domain (`themadvirus.com`):
```
Type: CNAME
Name: @
Target: <your-project>.pages.dev
Proxy: Enabled (orange cloud)
```

### SSL Certificate
- Cloudflare automatically provisions SSL certificates
- HTTPS will be enabled immediately
- Automatic renewal

---

## 🔄 Continuous Deployment

### Automatic Deployments
- **Production**: Pushes to `main` branch automatically deploy
- **Preview**: Pull requests create preview deployments
- **Branch Deployments**: Other branches can be configured

### Branch Configuration
```bash
# Production deployment
git checkout main
git push origin main

# Preview deployment
git checkout -b feature/new-feature
git push origin feature/new-feature
# Cloudflare creates preview URL automatically
```

---

## 📊 Performance Targets

After deployment, verify these metrics:

- **Lighthouse Performance**: > 90
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔍 Post-Deployment Testing

### 1. Functionality Tests
- [ ] All routes load correctly
- [ ] Navigation works (desktop & mobile)
- [ ] Portfolio filtering works
- [ ] Contact form submits
- [ ] Video modals open
- [ ] Images load properly

### 2. Performance Tests
```bash
# Run Lighthouse audit
npx lighthouse https://your-domain.vercel.app --view

# Check bundle size
npm run build
```

### 3. Cross-Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Chrome Mobile (Android)

## 🌐 Custom Domain Setup

### Add Custom Domain in Vercel

1. Go to Project Settings → Domains
2. Add `www.themadvirus.com`
3. Configure DNS records:

```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

```
Type: A
Name: @
Value: 76.76.21.21
```

### SSL Certificate
- Vercel automatically provisions SSL certificates
- HTTPS will be enabled within minutes

## 🔄 Continuous Deployment

### Automatic Deployments
- **Production**: Pushes to `main` branch
- **Preview**: Pull requests and other branches

### Branch Configuration
```bash
# Production branch
git checkout main
git push origin main

# Preview deployment
git checkout -b feature/new-feature
git push origin feature/new-feature
```

## 📈 Analytics Setup

### Cloudflare Web Analytics (Recommended - Free)

1. Go to your Cloudflare dashboard
2. Navigate to **Analytics & Logs** → **Web Analytics**
3. Click **Add a site**
4. Copy the JavaScript snippet
5. Add to `src/routes/__root.tsx`:

```typescript
{
  tagName: 'script',
  attrs: {
    defer: true,
    src: 'https://static.cloudflareinsights.com/beacon.min.js',
    'data-cf-beacon': '{"token": "YOUR_TOKEN"}'
  }
}
```

### Google Analytics (Optional)

Add to `src/routes/__root.tsx` head section:
```typescript
{
  tagName: 'script',
  attrs: {
    async: true,
    src: 'https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX'
  }
}
```

---

## 🐛 Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf node_modules dist
npm install
npm run build
```

### Images Not Loading
- Check image paths are relative
- Verify images are in `src/assets/`
- Check import statements
- Ensure images are included in build output

### Routing Issues (404 on refresh)
- Cloudflare Pages automatically handles SPA routing
- No additional configuration needed
- If issues persist, check `_routes.json` in dist/client

### Performance Issues
```bash
# Analyze bundle
npm run build
npx vite-bundle-visualizer
```

### Deployment Fails
- Check build logs in Cloudflare dashboard
- Verify Node.js version (18.x or higher)
- Ensure all dependencies are in package.json
- Check for TypeScript errors: `npx tsc --noEmit`

---

## 📞 Contact Information

**Email**: raman@themadvirus.com  
**Phone**: +91-844-751-4242  
**LinkedIn**: [TMV Studios](https://in.linkedin.com/company/themadvirus)

## 🎯 Next Steps After Deployment

1. **Monitor Performance**
   - Enable Cloudflare Web Analytics
   - Configure error tracking (Sentry)
   - Monitor Core Web Vitals
   - Check Cloudflare Analytics dashboard

2. **SEO Optimization**
   - Submit sitemap to Google Search Console
   - Verify structured data
   - Set up Google Analytics
   - Add robots.txt if needed

3. **Content Updates**
   - Add real project images
   - Update project descriptions
   - Add client testimonials
   - Update video URLs with actual showreels

4. **Feature Enhancements**
   - Implement contact form backend (Cloudflare Workers)
   - Add blog/news section
   - Set up CMS for easy updates
   - Add case studies

---

## 📚 Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [TanStack Start Documentation](https://tanstack.com/start)
- [Vite Documentation](https://vitejs.dev/)
- [TanStack Router](https://tanstack.com/router)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 💰 Cost Estimate

### Cloudflare Pages (Free Tier)
```
Hosting: $0/month
  - Unlimited bandwidth
  - Unlimited requests
  - 500 builds/month
  - Automatic HTTPS
  - Global CDN
  - DDoS protection
```

### Additional Services (Optional)
```
Domain: ~$12/year (if not already owned)
Analytics: $0 (Cloudflare Web Analytics included)
CMS (optional): $0-$99/month
Error Tracking: $0-$26/month (Sentry)
Total: $0-$125/month
```

---

**Deployment Status**: Ready for Cloudflare Pages ✅  
**Estimated Deployment Time**: 5 minutes  
**Expected Performance**: Lighthouse Score 95+

---

*Everything you can imagine is real.* ✨

