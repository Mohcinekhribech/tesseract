@echo off
REM Server deployment script for Tesseract TaskForce
REM Run this script on your Windows server

echo 🚀 Deploying Tesseract TaskForce to server...

REM Stop existing containers
echo 🛑 Stopping existing containers...
docker-compose -f docker-compose.prod.yml down

REM Build and start containers
echo 🔨 Building and starting containers...
docker-compose -f docker-compose.prod.yml up -d --build

REM Wait for containers to be ready
echo ⏳ Waiting for containers to be ready...
timeout /t 30 /nobreak

REM Check if containers are running
echo 📊 Checking container status...
docker-compose -f docker-compose.prod.yml ps

echo 🎉 Deployment complete!
echo 🌐 Your app should be accessible at: http://87.106.10.121
echo.
echo 📋 Useful commands:
echo   View logs: docker-compose -f docker-compose.prod.yml logs -f
echo   Restart: docker-compose -f docker-compose.prod.yml restart
echo   Stop: docker-compose -f docker-compose.prod.yml down

pause
