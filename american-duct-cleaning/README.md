# 🔥 American Duct Cleaning - Premium Website

A modern, minimalistic duct cleaning website built with React, Vite, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Premium UI/UX** - Clean, minimalist design with premium feel
- **Smooth Animations** - Entrance animations, scroll triggers, and hover effects using Framer Motion
- **Fully Responsive** - Mobile-first design that works on all devices
- **High-Converting** - CTA-focused with contact modal
- **Fast Performance** - Vite for lightning-fast builds
- **Color-Coded Components** - Primary blue (#0A2540) + Accent orange (#F97316)

## 🏗️ Tech Stack

- **React 19** - UI library
- **Vite 8** - Ultra-fast build tool
- **Tailwind CSS 4** - Utility-first CSS
- **Framer Motion** - Smooth animations & transitions
- **Lucide React** - Beautiful icon library
- **React Hook Form** - Efficient form management

## 📂 Project Structure

```
american-duct-cleaning/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Sticky navigation with mobile menu
│   │   ├── Hero.jsx            # Hero section with animations
│   │   ├── Benefits.jsx        # Why clean air matters
│   │   ├── Services.jsx        # Service cards grid
│   │   ├── Process.jsx         # 4-step process timeline
│   │   ├── WhyChooseUs.jsx     # Trust badges & stats
│   │   ├── Testimonials.jsx    # Carousel with reviews
│   │   ├── ServiceAreas.jsx    # Service location grid
│   │   ├── CTABanner.jsx       # Urgency-driven CTA
│   │   ├── Footer.jsx          # Footer with links & contact
│   │   └── ContactModal.jsx    # Contact form modal
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS config
├── postcss.config.js           # PostCSS configuration
└── package.json                # Dependencies
```

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Branding

**Primary Color:** #0A2540 (Deep Navy Blue)
**Accent Color:** #F97316 (Vibrant Orange)
**Typography:** Inter (body), Poppins (headings)

## 📱 Sections

1. **Header** - Fixed navigation with brand logo and CTA
2. **Hero** - Eye-catching hero with trust badges
3. **Benefits** - 4 key benefits with icons
4. **Services** - Showcase of all services
5. **Process** - Step-by-step cleaning process
6. **Why Choose Us** - Trust factors and statistics
7. **Testimonials** - Rotating customer reviews carousel
8. **Service Areas** - Coverage map and cities list
9. **CTA Banner** - Final conversion push
10. **Footer** - Links, contact info, and social media
11. **Contact Modal** - Inquiry form (hidden, shows on CTA click)

## 🎬 Animations

- Page load: Fade-in + slide-up effects
- Scroll: Staggered reveals on service cards
- Hover: Scale effects, shadow lifts, color transitions
- Carousel: Smooth slide transitions on testimonials
- Buttons: Scale + shadow animations

## 📝 Forms

**Contact Form Fields:**
- Full Name (required)
- Email Address (required)
- Phone Number (required)
- Service Interest (dropdown)
- Additional Details (textarea)
- Consent checkbox

## 🔧 Customization

- Edit **colors** in `src/index.css` (CSS variables)
- Modify **content** in each component file
- Update **brand name** in Header and Footer
- Add **real testimonials** in `Testimonials.jsx`
- Update **service areas** in `ServiceAreas.jsx`
- Configure **contact form** in `ContactModal.jsx`

## 📦 Deployment

Ready for deployment to:
- **Vercel** (recommended for Next.js, but works with Vite)
- **Netlify** - Zero-config deployments
- **GitHub Pages** - Static hosting
- **AWS S3 + CloudFront** - Enterprise-grade
- **Any static hosting** - Just upload the `dist/` folder

## 📞 Contact Information

Located in `Footer.jsx`:
- Phone: (714) 555-0123
- Email: info@americanductcleaning.com
- Service Area: Orange County, CA

## 📄 License

ISC License - American Duct Cleaning © 2024

---

**Built with ❤️ using React, Tailwind CSS, and Framer Motion**

Happy cleaning! 🧹✨
