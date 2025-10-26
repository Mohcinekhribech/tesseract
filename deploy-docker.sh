#!/bin/bash

# Docker Compose deployment script with nginx
echo "🚀 Deploying Tesseract TaskForce with Docker Compose + Nginx..."

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker-compose -f docker-compose.prod.yml down

# Build and start all services
echo "🔨 Building and starting all services..."
docker-compose -f docker-compose.prod.yml up -d --build

# Wait for services to be ready
echo "⏳ Waiting for services to be ready..."
sleep 30

# Check container status
echo "📊 Checking container status..."
docker-compose -f docker-compose.prod.yml ps

# Test nginx configuration
echo "🧪 Testing nginx configuration..."
docker-compose -f docker-compose.prod.yml exec nginx nginx -t

# Check if services are responding
echo "✅ Testing services..."
echo "Testing app container..."
docker-compose -f docker-compose.prod.yml exec app curl -f http://localhost:3000 && echo "✅ App is running"

echo "Testing nginx proxy..."
curl -f http://localhost && echo "✅ Nginx proxy is working"

echo "🎉 Deployment complete!"
echo "🌐 Your app is accessible at: http://87.106.10.121"
echo ""
echo "📋 Useful commands:"
echo "  View logs: docker-compose -f docker-compose.prod.yml logs -f"
echo "  View app logs: docker-compose -f docker-compose.prod.yml logs -f app"
echo "  View nginx logs: docker-compose -f docker-compose.prod.yml logs -f nginx"
echo "  Restart: docker-compose -f docker-compose.prod.yml restart"
echo "  Stop: docker-compose -f docker-compose.prod.yml down"
