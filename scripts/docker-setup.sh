#!/bin/bash

# Docker setup script for Tesseract TaskForce

echo "🐳 Setting up Docker environment for Tesseract TaskForce..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Create environment file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp env.docker.example .env
    echo "⚠️  Please update .env file with your actual values before running the application."
fi

# Build and start the application
echo "🔨 Building and starting the application..."
docker-compose up --build -d

# Wait for database to be ready
echo "⏳ Waiting for database to be ready..."
sleep 10

# Run database migrations
echo "🗄️  Running database migrations..."
docker-compose exec app npx prisma migrate deploy

# Create admin user
echo "👤 Creating admin user..."
docker-compose exec app node script/createAdmin.js

echo "✅ Setup complete!"
echo "🌐 Application is running at: http://localhost:3000"
echo "📊 Database is running at: localhost:5432"
echo ""
echo "To view logs: docker-compose logs -f"
echo "To stop: docker-compose down"
echo "To restart: docker-compose restart"
