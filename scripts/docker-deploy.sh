#!/bin/bash

# Production deployment script for Tesseract TaskForce

echo "🚀 Deploying Tesseract TaskForce to production..."

# Set production environment
export NODE_ENV=production

# Build the production image
echo "🔨 Building production image..."
docker build -t tesseract-taskforce:latest .

# Tag for registry (replace with your registry)
echo "🏷️  Tagging image..."
docker tag tesseract-taskforce:latest your-registry/tesseract-taskforce:latest

# Push to registry (uncomment when ready)
# echo "📤 Pushing to registry..."
# docker push your-registry/tesseract-taskforce:latest

echo "✅ Production build complete!"
echo "🐳 Image: tesseract-taskforce:latest"
echo ""
echo "To run in production:"
echo "docker run -p 3000:3000 --env-file .env tesseract-taskforce:latest"
