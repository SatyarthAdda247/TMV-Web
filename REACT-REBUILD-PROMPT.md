# 🎬 TMV Studios - React Rebuild Prompt

## 🌟 Project Vision

Create a stunning, modern React version of the TMV Studios website that brings their creative vision to life with smooth animations, exceptional performance, and a delightful user experience. This isn't just a rebuild—it's an enhancement that showcases what's possible when cutting-edge web technology meets creative storytelling.

---

## 🎯 Project Overview

**What We're Building:**
A beautiful, performant React application for TMV Studios—a creative production company specializing in animation, live action shoots, VFX, and CGI. The site should feel like a work of art itself, with smooth transitions, engaging interactions, and a portfolio that makes visitors say "wow!"

**Tagline to Embody:**
> "Everything you can imagine is real."

**Tech Stack:**
- ⚛️ React 18+ with TypeScript
- 🎨 Tailwind CSS for styling
- 🎭 Framer Motion for animations
- 🚀 Vite for blazing-fast development
- 📱 Mobile-first responsive design
- ♿ Full accessibility compliance

**Quick Start Command:**
```bash
npm create vite@latest tmv-studios -- --template react-ts
```

---

## 🎨 Design System

### Color Palette
```css
/* Primary Colors */
--tmv-white: #FFFFFF
--tmv-black: #000000
--tmv-accent: #54FF85      /* Signature bright green */
--tmv-bg-light: #F7F7F7
--tmv-bg-dark: #F4F4F4
--tmv-text-dark: #1F1F1F
--tmv-text-medium: #212121

/* Overlay & Effects */
--tmv-overlay: rgba(33, 33, 33, 0.5)
--tmv-hover-green: rgba(84, 255, 133, 0.12)
```

### Typography
```typescript
// Font Families
const fonts = {
  heading: "'Oswald', sans-serif",      // 400, 600, 700
  body: "'Open Sans', sans-serif",      // 400, 600, 700
  accent: "'Comfortaa', sans-serif",    // 400, 700
}

// Responsive Font Sizes
const textSizes = {
  hero: 'text-5xl md:text-6xl lg:text-7xl',      // 60pt desktop
  h1: 'text-4xl md:text-5xl lg:text-6xl',        // 48pt desktop
  h2: 'text-3xl md:text-4xl',                    // 38pt desktop
  h3: 'text-2xl md:text-3xl',                    // 29pt desktop
  body: 'text-base md:text-lg',                  // 13pt desktop
  small: 'text-sm',                               // 12pt
}
```

---

## 📐 Site Structure

### Pages & Routes
```typescript
const routes = [
  { path: '/', component: 'Home' },
  { path: '/portfolio', component: 'Portfolio' },
  { path: '/portfolio/animation', component: 'Animation' },
  { path: '/portfolio/live-action', component: 'LiveAction' },
  { path: '/portfolio/vfx-cgi', component: 'VfxCgi' },
  { path: '/originals', component: 'Originals' },
  { path: '/services', component: 'Services' },
  { path: '/about', component: 'About' },
]
```

### Component Architecture
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx           # Sticky nav with logo
│   │   ├── Navigation.tsx       # Desktop & mobile nav
│   │   ├── MobileMenu.tsx       # Hamburger menu
│   │   ├── Footer.tsx           # Contact info & social
│   │   └── SearchBar.tsx        # Search functionality
│   ├── ui/
│   │   ├── Button.tsx           # Reusable button component
│   │   ├── Card.tsx             # Portfolio card
│   │   ├── Modal.tsx            # Modal/dialog
│   │   ├── Spinner.tsx          # Loading states
│   │   └── Tooltip.tsx          # Hover tooltips
│   ├── sections/
│   │   ├── Hero.tsx             # Homepage hero
│   │   ├── PortfolioGrid.tsx   # Portfolio showcase
│   │   ├── ContactSection.tsx  # Contact CTA
│   │   └── ServicesList.tsx    # Services overview
│   └── animations/
│       ├── FadeIn.tsx           # Fade in on scroll
│       ├── SlideIn.tsx          # Slide animations
│       └── ParallaxImage.tsx   # Parallax effects
├── pages/
│   ├── Home.tsx
│   ├── Portfolio.tsx
│   ├── Originals.tsx
│   ├── Services.tsx
│   └── About.tsx
├── hooks/
│   ├── useScrollAnimation.ts   # Scroll-triggered animations
│   ├── useMediaQuery.ts        # Responsive breakpoints
│   └── useIntersectionObserver.ts
├── utils/
│   ├── constants.ts            # Colors, fonts, breakpoints
│   └── animations.ts           # Framer Motion variants
└── assets/
    ├── images/
    └── fonts/
```

---

## ✨ Key Features to Implement

### 1. 🎭 Hero Section (Homepage)
```typescript
// Stunning hero with parallax background
<Hero
  backgroundImage="/hero-bg.jpg"
  overlay={true}
  overlayOpacity={0.5}
>
  <h1 className="hero-title">
    WELCOME TO TMV
  </h1>
  <h2 className="hero-subtitle">
    Everything you can imagine is real.
  </h2>
  <Button 
    variant="primary" 
    size="lg"
    href="/portfolio"
  >
    Discover More
  </Button>
</Hero>
```

**Requirements:**
- Parallax scrolling effect on background
- Smooth fade-in animation on load
- Responsive text sizing
- High-quality image with lazy loading
- Overlay with adjustable opacity

### 2. 🧭 Navigation System
```typescript
// Responsive navigation with smooth transitions
<Navigation
  logo="/tmv-logo.png"
  sticky={true}
  transparent={false}
  items={[
    { label: 'Home', href: '/', active: true },
    { 
      label: 'Portfolio', 
      href: '/portfolio',
      submenu: [
        { label: 'Animation', href: '/portfolio/animation' },
        { label: 'Live Action Shoots', href: '/portfolio/live-action' },
        { label: 'VFX and CGI', href: '/portfolio/vfx-cgi' },
      ]
    },
    { label: 'Originals', href: '/originals' },
    { label: 'Our Services', href: '/services' },
    { label: 'About Us', href: '/about' },
  ]}
/>
```

**Requirements:**
- Sticky header that appears on scroll up
- Smooth color transition on scroll
- Hamburger menu for mobile (< 768px)
- Dropdown menus with hover effects
- Active page indicator
- Search icon with expandable search bar
- Logo click returns to home

### 3. 🖼️ Portfolio Grid
```typescript
// Masonry-style portfolio with filters
<PortfolioGrid
  items={portfolioItems}
  columns={{ mobile: 1, tablet: 2, desktop: 3 }}
  gap="2rem"
  animateOnScroll={true}
  filterCategories={['All', 'Animation', 'Live Action', 'VFX', 'CGI']}
/>
```

**Requirements:**
- Masonry or grid layout
- Hover effects with overlay
- Click to open full-screen modal
- Category filtering with smooth transitions
- Lazy loading for images
- Stagger animation on scroll
- Responsive columns

### 4. 📱 Mobile Menu
```typescript
// Slide-in mobile menu with smooth animations
<MobileMenu
  isOpen={menuOpen}
  onClose={() => setMenuOpen(false)}
  items={navigationItems}
  slideFrom="left"
  overlay={true}
/>
```

**Requirements:**
- Slide-in animation from left
- Backdrop overlay with blur
- Collapsible submenus
- Close on outside click
- Smooth transitions
- Touch-friendly spacing (44px minimum)

### 5. 🎬 Contact Section (Footer)
```typescript
<Footer
  email="raman@themadvirus.com"
  phone="+91-844-751-4242"
  social={[
    { platform: 'linkedin', url: 'https://in.linkedin.com/company/themadvirus' }
  ]}
  backgroundColor="dark"
  backgroundImage="/footer-bg.jpg"
/>
```

**Requirements:**
- Background image with overlay
- Centered contact information
- Clickable email and phone
- Social media icons with hover effects
- Responsive layout
- Copyright notice

---

## 🎨 Animation Guidelines

### Framer Motion Variants
```typescript
// Fade in from bottom
export const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
}

// Stagger children
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

// Scale on hover
export const scaleOnHover = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.3 }
  }
}

// Slide in from left
export const slideInLeft = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
}
```

### Animation Principles
- ⏱️ **Timing:** 0.3s for micro-interactions, 0.6s for page transitions
- 🎯 **Easing:** Use `easeOut` for entrances, `easeInOut` for movements
- 🔄 **Scroll Animations:** Trigger at 20% viewport intersection
- 📱 **Mobile:** Reduce animation complexity on mobile devices
- ♿ **Accessibility:** Respect `prefers-reduced-motion`

---

## 🚀 Performance Requirements

### Image Optimization
```typescript
// Use next-gen formats with fallbacks
<picture>
  <source srcSet="/hero.webp" type="image/webp" />
  <source srcSet="/hero.jpg" type="image/jpeg" />
  <img 
    src="/hero.jpg" 
    alt="TMV Studios Hero"
    loading="lazy"
    decoding="async"
  />
</picture>
```

### Code Splitting
```typescript
// Lazy load routes
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Originals = lazy(() => import('./pages/Originals'))
const Services = lazy(() => import('./pages/Services'))
const About = lazy(() => import('./pages/About'))
```

### Performance Targets
- ⚡ First Contentful Paint: < 1.5s
- 🎯 Time to Interactive: < 3.5s
- 📊 Lighthouse Score: > 90
- 📱 Mobile Performance: > 85
- ♿ Accessibility Score: 100

---

## ♿ Accessibility Checklist

### Must-Haves
- ✅ Semantic HTML5 elements
- ✅ ARIA labels for interactive elements
- ✅ Keyboard navigation (Tab, Enter, Escape)
- ✅ Focus indicators (visible outline)
- ✅ Skip to main content link
- ✅ Alt text for all images
- ✅ Color contrast ratio > 4.5:1
- ✅ Responsive text sizing (no fixed px)
- ✅ Screen reader tested
- ✅ `prefers-reduced-motion` support

### Implementation Example
```typescript
// Accessible button component
<button
  className="tmv-button"
  aria-label="Discover our portfolio"
  onClick={handleClick}
  onKeyDown={(e) => e.key === 'Enter' && handleClick()}
>
  Discover More
</button>

// Skip navigation
<a 
  href="#main-content" 
  className="skip-link"
  aria-label="Skip to main content"
>
  Skip to main content
</a>
```

---

## 📱 Responsive Breakpoints

```typescript
const breakpoints = {
  mobile: '0px',      // 0 - 479px
  tablet: '480px',    // 480 - 767px
  desktop: '768px',   // 768 - 1279px
  wide: '1280px',     // 1280px+
}

// Tailwind config
module.exports = {
  theme: {
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '1280px',
    }
  }
}
```

### Mobile-First Approach
```css
/* Base styles for mobile */
.hero-title {
  font-size: 2.5rem;
  line-height: 1.2;
}

/* Tablet and up */
@media (min-width: 480px) {
  .hero-title {
    font-size: 3.5rem;
  }
}

/* Desktop and up */
@media (min-width: 768px) {
  .hero-title {
    font-size: 4.5rem;
  }
}
```

---

## 🎁 Bonus Features (Nice-to-Haves)

### 1. 🎥 Video Background
```typescript
<VideoHero
  videoSrc="/showreel.mp4"
  poster="/showreel-poster.jpg"
  autoPlay={true}
  muted={true}
  loop={true}
  overlay={true}
/>
```

### 2. 🔍 Advanced Search
```typescript
<SearchBar
  placeholder="Search portfolio..."
  suggestions={true}
  categories={['Animation', 'Live Action', 'VFX', 'CGI']}
  onSearch={handleSearch}
/>
```

### 3. 🌙 Dark Mode Toggle
```typescript
<ThemeToggle
  defaultTheme="light"
  storageKey="tmv-theme"
  icon={<MoonIcon />}
/>
```

### 4. 📧 Contact Form
```typescript
<ContactForm
  fields={['name', 'email', 'phone', 'message']}
  submitEndpoint="/api/contact"
  successMessage="Thanks! We'll be in touch soon."
  validation={true}
/>
```

### 5. 🎨 Cursor Effects
```typescript
<CustomCursor
  variant="creative"
  hoverScale={1.5}
  clickEffect="ripple"
/>
```

---

## 📦 Package.json Setup

```json
{
  "name": "tmv-studios",
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx",
    "format": "prettier --write \"src/**/*.{ts,tsx,css}\""
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "framer-motion": "^10.16.0",
    "clsx": "^2.0.0",
    "react-intersection-observer": "^9.5.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.2.0",
    "typescript": "^5.3.0",
    "vite": "^5.0.0",
    "tailwindcss": "^3.3.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "eslint": "^8.55.0",
    "prettier": "^3.1.0"
  }
}
```

---

## 🎯 Development Workflow

### Phase 1: Foundation (Week 1)
- ✅ Set up Vite + React + TypeScript
- ✅ Configure Tailwind CSS
- ✅ Set up routing with React Router
- ✅ Create design system (colors, fonts, components)
- ✅ Build layout components (Header, Footer, Navigation)

### Phase 2: Core Pages (Week 2)
- ✅ Homepage with hero section
- ✅ Portfolio page with grid
- ✅ About page
- ✅ Services page
- ✅ Implement mobile menu

### Phase 3: Animations & Polish (Week 3)
- ✅ Add Framer Motion animations
- ✅ Implement scroll effects
- ✅ Add hover interactions
- ✅ Optimize images
- ✅ Test accessibility

### Phase 4: Testing & Deployment (Week 4)
- ✅ Cross-browser testing
- ✅ Mobile responsiveness testing
- ✅ Performance optimization
- ✅ SEO optimization
- ✅ Deploy to production

---

## 🚀 Quick Start Guide

```bash
# 1. Create project
npm create vite@latest tmv-studios -- --template react-ts
cd tmv-studios

# 2. Install dependencies
npm install react-router-dom framer-motion clsx react-intersection-observer

# 3. Install Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 4. Install Google Fonts
# Add to index.html:
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;600;700&family=Open+Sans:wght@400;600;700&family=Comfortaa:wght@400;700&display=swap" rel="stylesheet">

# 5. Start development server
npm run dev

# 6. Open browser
# Navigate to http://localhost:5173
```

---

## 💡 Pro Tips

### 1. Component Reusability
Create a robust component library with variants:
```typescript
<Button variant="primary" size="lg" />
<Button variant="secondary" size="md" />
<Button variant="ghost" size="sm" />
```

### 2. Custom Hooks
Extract common logic into reusable hooks:
```typescript
const { ref, inView } = useInView({ threshold: 0.2 })
const isMobile = useMediaQuery('(max-width: 768px)')
const { scrollY } = useScroll()
```

### 3. TypeScript Types
Define clear interfaces for props:
```typescript
interface HeroProps {
  title: string
  subtitle: string
  backgroundImage: string
  ctaText?: string
  ctaLink?: string
}
```

### 4. Performance Monitoring
```typescript
// Add performance tracking
import { reportWebVitals } from './reportWebVitals'
reportWebVitals(console.log)
```

---

## 🎨 Design Inspiration

**Visual Style:**
- Clean, modern, minimalist
- Bold typography with generous whitespace
- High-quality imagery with subtle overlays
- Smooth, purposeful animations
- Professional yet creative aesthetic

**Reference Sites:**
- Awwwards.com winners
- Behance creative portfolios
- Modern agency websites
- Apple's product pages (for polish)

---

## 📞 Contact Information to Display

```typescript
const contactInfo = {
  email: 'raman@themadvirus.com',
  phone: '+91-844-751-4242',
  social: {
    linkedin: 'https://in.linkedin.com/company/themadvirus'
  },
  tagline: 'Everything you can imagine is real.'
}
```

---

## 🎉 Final Touches

### Before Launch Checklist
- [ ] All images optimized (WebP + fallbacks)
- [ ] Fonts loaded efficiently
- [ ] Meta tags for SEO
- [ ] Open Graph tags for social sharing
- [ ] Favicon and app icons
- [ ] 404 page designed
- [ ] Loading states for all async operations
- [ ] Error boundaries implemented
- [ ] Analytics integrated
- [ ] Performance tested (Lighthouse)
- [ ] Accessibility tested (WAVE, axe)
- [ ] Cross-browser tested
- [ ] Mobile tested on real devices

---

## 🌟 The TMV Spirit

Remember: This website represents a creative studio where imagination becomes reality. Every interaction should feel intentional, every animation should have purpose, and every detail should reflect the quality of work TMV Studios produces. Make it beautiful, make it fast, make it accessible, and most importantly—make it memorable.

**Let's build something amazing! 🚀✨**

---

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Web Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [React Router Docs](https://reactrouter.com)

---

**Happy Coding! May your components be reusable and your animations be smooth! 🎬✨**
