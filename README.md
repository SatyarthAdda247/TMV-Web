# TMV Studios Website

> **Everything you can imagine is real.**

A modern, high-performance portfolio website for TMV Studios - a creative production company specializing in Animation, Live Action, VFX, and CGI.

![TMV Studios](src/assets/hero-original.jpg)

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:3000`

---

## 📦 Tech Stack

- **Framework**: React 19 + TypeScript
- **Router**: TanStack Router (file-based)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **UI Components**: Radix UI
- **Build Tool**: Vite 7
- **Deployment**: Vercel

---

## 🎯 Features

- ✨ Modern, responsive design
- 🎬 Portfolio showcase with filtering
- 🎭 Smooth animations and transitions
- ♿ WCAG 2.1 AA accessibility compliant
- 🚀 Optimized for performance (Lighthouse 95+)
- 📱 Mobile-first responsive design
- 🔍 SEO optimized
- 🎨 Dark theme with TMV brand colors

---

## 📁 Project Structure

```
src/
├── assets/              # Images and static files
│   ├── hero-original.jpg
│   ├── footer-bg.jpg
│   ├── logo.jpg
│   └── cat-*.jpg
├── components/
│   ├── layout/          # Header, Footer, Navigation
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── ui/              # Reusable UI components
│   ├── CategoryPage.tsx
│   ├── ContactForm.tsx
│   ├── SectionReveal.tsx
│   └── VideoModal.tsx
├── hooks/
│   └── use-mobile.tsx
├── lib/
│   ├── projects.ts      # Portfolio data
│   └── utils.ts
└── routes/              # File-based routing
    ├── __root.tsx
    ├── index.tsx        # Homepage
    ├── portfolio.tsx
    ├── portfolio_.animation.tsx
    ├── portfolio_.live-action.tsx
    ├── portfolio_.vfx-cgi.tsx
    ├── originals.tsx
    ├── services.tsx
    ├── about.tsx
    ├── privacy.tsx
    └── terms.tsx
```

---

## 🎨 Design System

### Colors
```css
--primary: #54FF85      /* TMV Green */
--background: #0D0D0D   /* Dark */
--foreground: #FFFFFF   /* White */
--muted: #666666        /* Gray */
```

### Typography
- **Display**: Oswald (Headings)
- **Accent**: Comfortaa (Labels)
- **Body**: Open Sans (Text)

### Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or connect your GitHub repository to Vercel for automatic deployments.

**Build Settings:**
- Framework: Vite
- Build Command: `npm run build`
- Output Directory: `.output/public`

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed instructions.

---

## 📊 Performance

### Lighthouse Scores (Target)
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Core Web Vitals
- LCP: < 2.5s ✅
- FID: < 100ms ✅
- CLS: < 0.1 ✅

---

## 📝 Available Scripts

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run build:vercel     # Build for Vercel deployment
npm run preview          # Preview production build
npm run lint             # Run ESLint
npm run format           # Format code with Prettier
```

---

## 🎬 Portfolio Categories

### Animation
Hand-drawn frames, character design, 2D/3D animation, motion graphics

### Live Action
Documentary, commercial, fashion films, product shoots

### VFX & CGI
Photoreal CGI, visual effects, compositing, environment art

---

## 📞 Contact

**Email**: [raman@themadvirus.com](mailto:raman@themadvirus.com)  
**Phone**: [+91 844 751 4242](tel:+918447514242)  
**LinkedIn**: [TMV Studios](https://in.linkedin.com/company/themadvirus)

---

## 📄 Documentation

- [Deployment Guide](DEPLOYMENT.md) - Complete deployment instructions
- [Optimization Report](OPTIMIZATION-REPORT.md) - Performance analysis
- [TRD Summary](../TRD-Summary.md) - Technical requirements
- [PRD Summary](../PRD-Summary.md) - Product requirements

---

## 🔧 Configuration Files

- `vercel.json` - Vercel deployment config
- `vite.config.ts` - Vite build config
- `tailwind.config.js` - Tailwind CSS config
- `tsconfig.json` - TypeScript config
- `package.json` - Dependencies and scripts

---

## 🎯 Roadmap

### Phase 1: Launch (Current)
- [x] Core website structure
- [x] Portfolio showcase
- [x] Responsive design
- [x] SEO optimization
- [x] Vercel deployment

### Phase 2: Enhancement
- [ ] Real project images
- [ ] Contact form backend
- [ ] Google Analytics
- [ ] Blog section
- [ ] Case studies

### Phase 3: Advanced
- [ ] CMS integration
- [ ] Multi-language support
- [ ] Client portal
- [ ] Advanced analytics
- [ ] A/B testing

---

## 🤝 Contributing

This is a private project for TMV Studios. For inquiries, contact the development team.

---

## 📜 License

© 2026 TMV Studios. All rights reserved.

---

## 🙏 Acknowledgments

- Design inspired by modern creative studios
- Built with love and attention to detail
- Optimized for performance and accessibility

---

**Status**: ✅ Production Ready  
**Version**: 1.0.0  
**Last Updated**: April 2026

---

*Everything you can imagine is real.* ✨
