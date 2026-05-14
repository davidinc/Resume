#!/bin/bash

# Resume Portfolio - GitHub & Vercel Setup Script

echo "🚀 Resume Portfolio Deployment Setup"
echo "===================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
  echo "📦 Initializing Git repository..."
  git init
  git add .
  git commit -m "Initial Next.js resume portfolio"
  echo "✅ Git initialized"
else
  echo "✅ Git already initialized"
fi

echo ""
echo "📋 NEXT STEPS:"
echo ""
echo "1️⃣  Push to GitHub:"
echo "   - Create a new repository at https://github.com/new"
echo "   - Copy your repository URL"
echo "   - Run:"
echo "      git remote add origin <YOUR_REPO_URL>"
echo "      git push -u origin main"
echo ""
echo "2️⃣  Deploy to Vercel:"
echo "   - Visit https://vercel.com"
echo "   - Click 'New Project'"
echo "   - Import your GitHub repository"
echo "   - Click 'Deploy'"
echo ""
echo "3️⃣  (Optional) Setup Custom Domain:"
echo "   - Buy domain at Namecheap/GoDaddy"
echo "   - Add domain in Vercel Dashboard"
echo "   - Update DNS records as instructed"
echo ""
echo "💡 Your site will be live in seconds!"
echo ""
