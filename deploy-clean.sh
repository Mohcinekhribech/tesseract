#!/bin/bash

echo "🚀 Starting clean deployment of Tesseract TaskForce..."

# Stop any existing containers
echo "🛑 Stopping existing containers..."
docker-compose -f docker-compose.clean.yml down

# Remove old volumes (optional - uncomment if you want fresh database)
# echo "🗑️ Removing old volumes..."
# docker volume rm tesseract_postgres_data

# Create clean .env file
echo "📝 Creating .env file..."
cat > .env << 'EOF'
DATABASE_URL=postgresql://postgres:tesseract123@postgres:5432/tesseract
NEXTAUTH_SECRET=tesseract-super-secret-key-change-in-production
NEXTAUTH_URL=http://87.106.10.121
RESEND_API_KEY=re_placeholder_key_for_build
NODE_ENV=production
EOF

# Build and start all services
echo "🔨 Building and starting all services..."
docker-compose -f docker-compose.clean.yml up -d --build

# Wait for services to be ready
echo "⏳ Waiting for services to be ready..."
sleep 30

# Check container status
echo "📊 Checking container status..."
docker-compose -f docker-compose.clean.yml ps

# Check if admin was created
echo "👤 Checking admin user..."
docker-compose -f docker-compose.clean.yml exec postgres psql -U postgres -d tesseract -c "SELECT id, email, name FROM \"Admin\";"

# Test the application
echo "🧪 Testing application..."
curl -f http://localhost && echo "✅ Application is accessible"

echo "🎉 Deployment complete!"
echo "🌐 Your app is accessible at: http://87.106.10.121"
echo "👤 Admin login: admin@tesseract.com / admintesseract123"
echo ""
echo "📋 Useful commands:"
echo "  View logs: docker-compose -f docker-compose.clean.yml logs -f"
echo "  Restart: docker-compose -f docker-compose.clean.yml restart"
echo "  Stop: docker-compose -f docker-compose.clean.yml down"
