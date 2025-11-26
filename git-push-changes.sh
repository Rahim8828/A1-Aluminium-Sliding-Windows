#!/bin/bash

# Git Push Script for A1 Aluminium Website Changes
# Run this script to commit and push all changes

echo "🚀 Starting Git Push Process..."
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "❌ Git repository not found. Initializing..."
    git init
    echo "✅ Git initialized"
fi

# Check git status
echo "📊 Checking current status..."
git status
echo ""

# Add all changes
echo "➕ Adding all changes..."
git add .
echo "✅ All changes staged"
echo ""

# Create commit with detailed message
echo "💾 Creating commit..."
git commit -m "feat: Major UI/UX improvements and bug fixes

✨ New Features:
- Added Live Activity Feed with real-time notifications
- Added Interactive Price Calculator
- Added Projects Gallery with filtering
- Added FAQ Section with accordion
- Enhanced WhatsApp Float Button with tooltips
- Added Trust Badges section

🐛 Bug Fixes:
- Fixed header overlap issues
- Fixed hydration errors in UrgencyBanner
- Fixed WhatsApp and Activity Feed overlap on mobile
- Removed Sticky Quote Button (redundant)
- Removed Urgency Banner
- Fixed service cards to show real images instead of gradients

🎨 UI Improvements:
- Made Products page mobile-friendly and compact
- Made Home page hero section more compact
- Improved service category cards with real images
- Better mobile responsiveness across all pages
- Reduced padding and text sizes for mobile
- Enhanced color scheme and visual hierarchy

📱 Mobile Optimizations:
- Compact layouts for mobile devices
- Full-width buttons on mobile
- Better spacing and touch targets
- Improved readability on small screens

🔧 Technical Improvements:
- Fixed z-index hierarchy
- Improved component structure
- Better code organization
- Clean lint (0 errors, 0 warnings)
- Successful build (24/24 routes)

📝 Documentation:
- Added comprehensive documentation files
- Updated implementation guides
- Created fix summaries"

echo "✅ Commit created"
echo ""

# Show commit details
echo "📋 Commit Details:"
git log -1 --stat
echo ""

# Push to remote (you'll need to set up remote first)
echo "🌐 Ready to push to remote..."
echo ""
echo "⚠️  Before pushing, make sure you have:"
echo "   1. Set up your git remote: git remote add origin <your-repo-url>"
echo "   2. Set up your credentials"
echo ""
echo "To push, run: git push origin main"
echo "(or git push origin master, depending on your branch name)"
echo ""
echo "✅ Script completed!"
