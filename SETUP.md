# Resume Portfolio Setup Guide

## 🎯 Quick Start (Local Development)

### Prerequisites
- Node.js 16+ installed
- Git (for version control)

### Installation

```bash
# Navigate to the project
cd Resume

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000 in your browser
```

## 📝 Customizing Your Resume

All content is centralized in one file for easy updates:

**File:** `data/resumeData.js`

### Update Your Information

```javascript
// Change hero section
export const hero = {
  name: 'Your Name',
  subtitle: 'Your tagline',
  description: 'Your professional summary',
  roles: ['Role 1', 'Role 2', 'Role 3']
};

// Add new projects
export const projects = [
  {
    title: 'Project Name',
    category: 'Java',  // or C#/.Net, Swift, JavaScript, Graphics
    description: 'Project description',
    technologies: ['Tech1', 'Tech2'],
    highlights: ['Feature 1', 'Feature 2'],
    image: 'https://images.unsplash.com/...',
    live: 'https://example.com',
    repo: 'https://github.com/...'
  }
  // Add more projects...
];

// Update experience
export const experience = [
  {
    title: 'Job Title',
    company: 'Company Name',
    period: '2024 - Present',
    summary: 'What you did and accomplished...'
  }
  // Add more roles...
];
```

## 🎨 Styling & Customization

### Colors
Edit colors in `app/globals.css`:
- Primary color: `#6d8cff` (blue)
- Background: `#05060a` (dark)
- Text: `#e9edf7` (light)

### Fonts
Currently using Inter. To change:
```javascript
// In app/layout.js
import { YourFont } from 'next/font/google';
const font = YourFont({ subsets: ['latin'] });
```

### Add Your Images

Replace placeholder images:
1. Use Unsplash URLs (free, no auth needed)
2. Upload to `/public/images/` folder (create it)
3. Update image path in `data/resumeData.js`:
```javascript
image: '/images/your-image.jpg'
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

**Step 1: Push to GitHub**
```bash
git init
git add .
git commit -m "Initial resume portfolio"
git remote add origin https://github.com/YOUR_USERNAME/resume.git
git branch -M main
git push -u origin main
```

**Step 2: Deploy via Vercel**
1. Visit https://vercel.com
2. Sign up / Log in
3. Click "New Project"
4. Select your GitHub repository
5. Click "Deploy"
6. Your site is live! 🎉

**Step 3: (Optional) Add Custom Domain**
1. Buy a domain (Namecheap, GoDaddy, etc.)
2. In Vercel Dashboard → Your Project → Settings → Domains
3. Add your domain
4. Update DNS records as instructed

### Deploy Elsewhere

**Netlify:**
```bash
npm run build
# Upload 'out' folder to Netlify
```

**Docker (for other hosting):**
```bash
docker build -t resume .
docker run -p 3000:3000 resume
```

## 📊 Project Structure

```
Resume/
├── app/
│   ├── layout.js        # Root layout with navigation
│   ├── page.js          # Home page
│   ├── globals.css      # Shared styling
│   ├── projects/
│   │   └── page.js      # Projects listing
│   └── experience/
│       └── page.js      # Experience timeline
├── components/          # Reusable React components
│   ├── NavBar.js
│   ├── ProjectCard.js
│   ├── ExperienceCard.js
│   ├── PortfolioCard.js
│   └── Section.js
├── data/
│   └── resumeData.js    # All content (edit this!)
├── public/              # Static assets & images
├── package.json
└── next.config.mjs      # Next.js configuration
```

## 🔧 Production Build

```bash
# Build for production
npm run build

# Start production server
npm start

# The site runs at http://localhost:3000
```

## 📱 Responsive Design

The site is fully responsive:
- ✅ Desktop (1920px+)
- ✅ Tablet (768px - 1024px)
- ✅ Mobile (320px - 767px)

Test locally:
```bash
npm run dev
# Open DevTools (F12) → Toggle Device Toolbar
```

## 🆘 Troubleshooting

**Port 3000 already in use:**
```bash
npm run dev -- --port 3001
```

**Clear cache:**
```bash
rm -rf .next
npm run dev
```

**Update dependencies:**
```bash
npm update
npm audit fix
```

## 📚 Learn More

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Vercel Docs](https://vercel.com/docs)

---

**Need help?** Check DEPLOY.md for more deployment options or create an issue on GitHub.
