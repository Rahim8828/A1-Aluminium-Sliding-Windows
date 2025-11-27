#!/bin/bash

echo "🔍 Checking all image references..."
echo ""

# Check MobileHeroSection
echo "📱 MobileHeroSection (Browse by Category):"
grep -A 2 "image:" src/components/home/MobileHeroSection.tsx | grep "/"

echo ""
echo "📊 Verifying files exist:"
for img in "/aluminium-category/Showroom-front.webp" "/glass-category/Full-glass-partitions.webp" "/netting-category/Pigeon-netting.webp"; do
  if [ -f "public$img" ]; then
    echo "✅ public$img"
  else
    echo "❌ public$img NOT FOUND"
  fi
done

echo ""
echo "🔍 Checking all image references in codebase:"
echo ""
echo "Aluminium images:"
grep -r "aluminium-category" src/ --include="*.tsx" --include="*.ts" | wc -l
echo ""
echo "Glass images:"
grep -r "glass-category" src/ --include="*.tsx" --include="*.ts" | wc -l
echo ""
echo "Netting images:"
grep -r "netting-category" src/ --include="*.tsx" --include="*.ts" | wc -l

echo ""
echo "✅ Check complete!"
