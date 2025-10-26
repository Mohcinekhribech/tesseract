#!/bin/bash

# Production deployment script for Tesseract TaskForce

echo "🚀 Déploiement automatique de Tesseract TaskForce..."

# Set production environment
export NODE_ENV=production

# Stop any running containers
echo "🛑 Arrêt des conteneurs existants..."
docker-compose down

# Install and configure firewall
echo "🔥 Configuration du firewall..."
sudo dnf install -y firewalld
sudo systemctl start firewalld
sudo systemctl enable firewalld
sudo firewall-cmd --permanent --add-port=3000/tcp
sudo firewall-cmd --permanent --add-port=80/tcp
sudo firewall-cmd --permanent --add-port=443/tcp
sudo firewall-cmd --reload

# Build and start production environment
echo "🔨 Construction et démarrage de l'environnement de production..."
docker-compose up --build -d

# Wait for database setup to complete
echo "⏳ Attente de la configuration de la base de données..."
sleep 30

# Check if containers are running
echo "📊 Vérification du statut des conteneurs..."
docker-compose ps

# Test the application
echo "🧪 Test de l'application..."
sleep 10
curl -I http://localhost:3000 || echo "Application not ready yet, waiting..."

echo "✅ Déploiement terminé!"
echo "🌐 Application: http://87.106.10.121:3000"
echo "📊 Base de données: localhost:5432"
echo ""
echo "Pour voir les logs: docker-compose logs -f"
echo "Pour arrêter: docker-compose down"
echo "Pour redémarrer: docker-compose restart"
