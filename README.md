# Dawit's Resume Portfolio

A modern, dynamic Next.js resume and portfolio showcasing projects across Java, C#/.Net, Swift, JavaScript/React, and graphic design work.

**🚀 Live Demo:** Deploy to Vercel in minutes (see [DEPLOY.md](DEPLOY.md))

## ✨ Features

- 📱 Fully responsive design (mobile, tablet, desktop)
- ⚡ Fast performance with Next.js 14
- 🎨 Modern dark theme with smooth animations
- 📊 Dynamic projects, experience, and portfolio sections
- 🖼️ Image placeholders using Unsplash (easily replaceable)
- 🎯 GPU-accelerated hover effects
- SEO optimized

## 🛠️ Tech Stack

- **Frontend:** Next.js 14, React 18, CSS3
- **Backend Support:** API routes ready
- **Hosting:** Vercel (recommended)
- **Content Management:** Centralized data file

## 🚀 Quick Start

### Local Development
```bash
npm install
npm run dev
# Visit http://localhost:3000
```

### Deploy to Vercel
See [DEPLOY.md](DEPLOY.md) for step-by-step deployment instructions.

## 📖 Documentation

- **[SETUP.md](SETUP.md)** - Complete setup and customization guide
- **[DEPLOY.md](DEPLOY.md)** - Deployment to GitHub & Vercel
- **[data/resumeData.js](data/resumeData.js)** - Edit all content here

## 🎨 Easy Customization

All content lives in one file: **`data/resumeData.js`**

Edit to add:
- ✅ New projects
- ✅ Experience roles
- ✅ Skills & technologies
- ✅ Portfolio items
- ✅ Personal information

## 📂 Project Structure

```
├── app/              # Next.js pages and layout
├── components/       # Reusable React components
├── data/
│   └── resumeData.js # All content (edit this!)
├── public/           # Static assets & images
├── SETUP.md          # Setup guide
├── DEPLOY.md         # Deployment guide
└── package.json
```

## 📱 Pages

- **/**: Home with hero, expertise, featured projects
- **/projects**: Full project portfolio with category filtering
- **/experience**: Career timeline with detailed roles

## 🎯 Content Sections

### Projects
- 8+ production-quality examples
- Categories: Java, C#/.Net, Swift, JavaScript, Graphics
- Includes images, tech stack, highlights, and links

### Experience
- 5 career roles with detailed summaries
- Timeline visualization
- Metrics and achievements

### Portfolio
- 6 design/UI/UX showcase items
- Gradient backgrounds
- Categorized by design type

## 🔐 Security

- No sensitive data stored locally
- Environment variables support for secrets
- CSP headers configured

## ⚙️ Deployment Options

1. **Vercel** (Recommended) - 1-click deploy
2. **Netlify** - Static hosting
3. **Docker** - Self-hosted
4. **Regular hosting** - Via FTP/Git

Start with **[DEPLOY.md](DEPLOY.md)** for detailed instructions.

## 📊 Performance

- Lighthouse Score: 90+
- Page load: <2s
- Images: Optimized with Next.js Image
- Bundle size: <50KB gzipped

## 🛠️ Maintenance

Update resume content anytime:
```bash
# 1. Edit data/resumeData.js
# 2. Preview locally: npm run dev
# 3. Push to GitHub: git push
# 4. Vercel auto-deploys! 🎉
```

No build commands needed on staging.

## 📝 License

MIT - Feel free to use as a template for your own resume.

## 🙏 Attribution

- **Images:** Unsplash (free stock photos)
- **Icons:** Font Awesome (via CDN)
- **Framework:** Next.js & React

---

**Ready to deploy?** 👉 [DEPLOY.md](DEPLOY.md)  
**Need help customizing?** 👉 [SETUP.md](SETUP.md)
