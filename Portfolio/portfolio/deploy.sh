#!/bin/bash

echo "🚀 Portfolio Deployment Script"
echo "=============================="

# Check if build exists
if [ ! -d "build" ]; then
    echo "❌ Build folder not found. Running build first..."
    npm run build
fi

echo "✅ Build folder found!"

echo ""
echo "📋 Deployment Options:"
echo "1. Test locally with serve"
echo "2. Deploy to Netlify (recommended)"
echo "3. Deploy to Vercel"
echo "4. Deploy to GitHub Pages"
echo "5. Deploy to Firebase Hosting"
echo ""

read -p "Choose an option (1-5): " choice

case $choice in
    1)
        echo "🌐 Starting local server..."
        serve -s build -l 3000
        ;;
    2)
        echo "📤 Deploying to Netlify..."
        echo "Please follow these steps:"
        echo "1. Go to https://netlify.com"
        echo "2. Sign up/login with GitHub"
        echo "3. Click 'New site from Git'"
        echo "4. Connect your repository"
        echo "5. Set build command: npm run build"
        echo "6. Set publish directory: build"
        echo "7. Click 'Deploy site'"
        ;;
    3)
        echo "📤 Deploying to Vercel..."
        echo "Please follow these steps:"
        echo "1. Go to https://vercel.com"
        echo "2. Sign up/login with GitHub"
        echo "3. Click 'New Project'"
        echo "4. Import your repository"
        echo "5. Click 'Deploy'"
        ;;
    4)
        echo "📤 Deploying to GitHub Pages..."
        if ! command -v gh-pages &> /dev/null; then
            echo "Installing gh-pages..."
            npm install --save-dev gh-pages
        fi
        npm run deploy
        ;;
    5)
        echo "📤 Deploying to Firebase..."
        echo "Please follow these steps:"
        echo "1. Install Firebase CLI: npm install -g firebase-tools"
        echo "2. Login: firebase login"
        echo "3. Initialize: firebase init hosting"
        echo "4. Deploy: firebase deploy"
        ;;
    *)
        echo "❌ Invalid option. Please run the script again."
        ;;
esac 