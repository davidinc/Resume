# Deploying to Vercel

This Next.js resume portfolio is production-ready for Vercel deployment.

## Quick Setup (2 minutes)

### 1. Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial Next.js resume portfolio"

# Create a new GitHub repository at github.com/new
# Then push:
git remote add origin https://github.com/YOUR_USERNAME/resume.git
git branch -M main
git push -u origin main
```

### 2. Deploy to Vercel

**Option A: Via Vercel Dashboard (Easiest)**
1. Visit https://vercel.com
2. Click "New Project"
3. Import your GitHub repository
4. Click "Deploy" (Vercel auto-detects Next.js)
5. Your site goes live instantly at `resume-YOUR_USERNAME.vercel.app`

**Option B: Via Vercel CLI**
```bash
npm i -g vercel
vercel login
vercel
```

## Custom Domain

1. Buy a domain (Namecheap, GoDaddy, etc.)
2. In Vercel Dashboard → Settings → Domains
3. Add your custom domain
4. Update DNS records as instructed by Vercel
5. Your site is live at `yourname.com`

## Environment Variables

Add any secret keys in Vercel Dashboard → Settings → Environment Variables.

## Auto-Deployments

Every push to `main` branch automatically deploys your site. No action needed!

## Monitoring & Analytics

Access metrics at https://vercel.com/dashboard:
- Page speed
- Core Web Vitals
- Error tracking
- Deployment history

That's it! Your portfolio is now globally distributed on Vercel's CDN.
