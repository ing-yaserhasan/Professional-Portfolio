# 🌟 Yaser Hasan - Professional Portfolio

A modern, multilingual portfolio website built with React 19, TypeScript, and Tailwind CSS.

![Portfolio Preview](./preview.jpg)

## ✨ Features

### 🎨 **Design & UX**
- ✅ Modern Glassmorphism UI
- ✅ Dark Mode Support
- ✅ Smooth Animations & Transitions
- ✅ Fully Responsive (Mobile, Tablet, Desktop)
- ✅ Accessibility Compliant (WCAG 2.1)

### 🌍 **Multilingual**
- 🇬🇧 English
- 🇩🇪 German (Deutsch)
- 🇸🇦 Arabic (العربية) with RTL Support
- 🇹🇷 Turkish (Türkçe)

### 🚀 **Technical**
- ⚡ React 19 with TypeScript
- 🎨 Tailwind CSS
- 📦 Vite for blazing-fast builds
- 🔍 SEO Optimized with Schema.org markup
- 📊 Google Analytics Integration
- 🛡️ Error Boundary for graceful error handling
- ⏳ Loading States & Skeletons

### 📄 **Pages**
- 🏠 Home (About, Experience, Skills, Contact)
- 💼 Portfolio (Timeline, Projects, Tech Stack)

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yaserhasan/portfolio.git

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173`

---

## 📂 Project Structure

```
portfolio/
├── components/          # React components
│   ├── ErrorBoundary.tsx
│   ├── LoadingSpinner.tsx
│   ├── Hero.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Contact.tsx
│   ├── PortfolioPage.tsx
│   └── LanguageSelector.tsx
├── utils/              # Utility functions
│   └── analytics.ts
├── types.ts            # TypeScript type definitions
├── constants.ts        # Translations & content
├── App.tsx             # Main app component
├── index.tsx           # Entry point
└── index.html          # HTML template
```

---

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

### Environment Variables

Create a `.env.local` file with:

```env
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
VITE_SITE_URL=https://yaserhasan.com
VITE_FORMSPREE_ID=xxxxx
```

See `.env.example` for all available options.

---

## 🎨 Customization

### Update Content

Edit `constants.ts` to change:
- Personal information
- Experience & skills
- Portfolio projects
- Contact details

### Change Colors

Modify Tailwind config in `index.html`:

```javascript
tailwind.config = {
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',    // Blue
        secondary: '#14b8a6',  // Teal
      }
    }
  }
}
```

### Add Languages

1. Add language code to `types.ts`:
```typescript
export type Language = 'en' | 'de' | 'ar' | 'tr' | 'fr';
```

2. Add translations to `constants.ts`:
```typescript
export const TRANSLATIONS: Translations = {
  // ... existing
  fr: {
    // French translations
  }
}
```

---

## 📊 Analytics

The portfolio uses Google Analytics for tracking:

- Page views
- Button clicks
- Language changes
- Section views (scroll spy)
- Form submissions
- Performance metrics

Analytics functions are in `utils/analytics.ts`.

---

## 🔍 SEO

### Features
- ✅ Meta tags (title, description, keywords)
- ✅ Open Graph tags (Facebook, LinkedIn)
- ✅ Twitter Card tags
- ✅ Schema.org structured data
- ✅ Canonical URLs
- ✅ XML Sitemap
- ✅ Robots.txt

### Generate Sitemap

```bash
npm run sitemap
```

---

## 📱 PWA Support

The portfolio can be installed as a Progressive Web App:

- Works offline
- Add to home screen
- Push notifications (optional)

PWA configuration in `vite.config.ts`.

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages

```bash
npm run build
npm run deploy
```

---

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm run test:coverage
```

---

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Yaser Hasan**
- Email: ing.yaserhasan@gmail.com
- Location: Vienna, Austria
- Portfolio: [yaserhasan.com](https://yaserhasan.com)

---

## 🙏 Acknowledgments

- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
- [Vite](https://vitejs.dev/)

---

## 📈 Roadmap

- [ ] Blog section
- [ ] Case studies
- [ ] Testimonials
- [ ] Contact form with backend
- [ ] Project filtering
- [ ] Light/Dark mode toggle
- [ ] More language options

---

## 🐛 Bug Reports & Feature Requests

Please use [GitHub Issues](https://github.com/yaserhasan/portfolio/issues) to report bugs or request features.

---

## 💬 Support

For support, email ing.yaserhasan@gmail.com or create an issue on GitHub.

---

Made with ❤️ by Yaser Hasan
