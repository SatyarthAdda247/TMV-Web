#!/bin/bash

# TMV Studios - Quick Deployment Script for Cloudflare Pages
# This script helps you deploy to Cloudflare Pages quickly

set -e

echo "🚀 TMV Studios - Cloudflare Pages Deployment"
echo "=============================================="
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📦 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit: TMV Studios website"
    echo "✅ Git repository initialized"
    echo ""
fi

# Check if remote is set
if ! git remote | grep -q "origin"; then
    echo "⚠️  No Git remote found."
    echo "Please add your GitHub repository:"
    echo ""
    echo "  git remote add origin git@github.com:YOUR_USERNAME/tmv-studios.git"
    echo ""
    echo "Then run this script again."
    exit 1
fi

# Check if there are uncommitted changes
if ! git diff-index --quiet HEAD --; then
    echo "📝 Committing changes..."
    git add .
    git commit -m "Update: $(date '+%Y-%m-%d %H:%M:%S')"
    echo "✅ Changes committed"
    echo ""
fi

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push origin main
echo "✅ Pushed to GitHub"
echo ""

echo "🎉 Code is now on GitHub!"
echo ""
echo "Next steps:"
echo "1. Go to https://dash.cloudflare.com"
echo "2. Navigate to Workers & Pages"
echo "3. Click 'Create application' → 'Pages' → 'Connect to Git'"
echo "4. Select your repository"
echo "5. Configure build settings:"
echo "   - Build command: npm run build"
echo "   - Build output directory: dist/client"
echo "6. Click 'Save and Deploy'"
echo ""
echo "Your site will be live in ~2 minutes! 🚀"
echo ""
echo "For detailed instructions, see DEPLOYMENT.md"
