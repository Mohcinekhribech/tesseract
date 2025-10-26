#!/bin/bash

# Server deployment script for Tesseract TaskForce
# Run this script on your server (87.106.10.121)

echo "🚀 Deploying Tesseract TaskForce to server..."

# Update system packages
echo "📦 Updating system packages..."
sudo apt update && sudo apt upgrade -y

# Install Docker if not already installed
if ! command -v docker &> /dev/null; then
    echo "🐳 Installing Docker..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sudo sh get-docker.sh
    sudo usermod -aG docker $USER
    rm get-docker.sh
fi

# Install Docker Compose if not already installed
if ! command -v docker-compose &> /dev/null; then
    echo "🐳 Installing Docker Compose..."
    sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
fi

# Install nginx if not already installed
if ! command -v nginx &> /dev/null; then
    echo "🌐 Installing nginx..."
    sudo apt install nginx -y
fi

# Stop existing containers
echo "🛑 Stopping existing containers..."
docker-compose -f docker-compose.prod.yml down

# Build and start containers
echo "🔨 Building and starting containers..."
docker-compose -f docker-compose.prod.yml up -d --build

# Wait for containers to be ready
echo "⏳ Waiting for containers to be ready..."
sleep 30

# Check if containers are running
echo "📊 Checking container status..."
docker-compose -f docker-compose.prod.yml ps

# Configure nginx
echo "🌐 Configuring nginx..."
sudo cp nginx.conf /etc/nginx/sites-available/tesseract
sudo ln -sf /etc/nginx/sites-available/tesseract /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test nginx configuration
sudo nginx -t

# Restart nginx
sudo systemctl restart nginx
sudo systemctl enable nginx

# Check if services are running
echo "✅ Checking services..."
curl -f http://127.0.0.1:3000 && echo "✅ App is running"
sudo systemctl status nginx --no-pager -l

echo "🎉 Deployment complete!"
echo "🌐 Your app should be accessible at: http://87.106.10.121"
echo ""
echo "📋 Useful commands:"
echo "  View logs: docker-compose -f docker-compose.prod.yml logs -f"
echo "  Restart: docker-compose -f docker-compose.prod.yml restart"
echo "  Stop: docker-compose -f docker-compose.prod.yml down"
