@echo off
REM Docker Compose deployment script with nginx
echo 🚀 Deploying Tesseract TaskForce with Docker Compose + Nginx...

REM Stop existing containers
echo 🛑 Stopping existing containers...
docker-compose -f docker-compose.prod.yml down

REM Build and start all services
echo 🔨 Building and starting all services...
docker-compose -f docker-compose.prod.yml up -d --build

REM Wait for services to be ready
echo ⏳ Waiting for services to be ready...
timeout /t 30 /nobreak

REM Check container status
echo 📊 Checking container status...
docker-compose -f docker-compose.prod.yml ps

echo 🎉 Deployment complete!
echo 🌐 Your app is accessible at: http://87.106.10.121
echo.
echo 📋 Useful commands:
echo   View logs: docker-compose -f docker-compose.prod.yml logs -f
echo   View app logs: docker-compose -f docker-compose.prod.yml logs -f app
echo   View nginx logs: docker-compose -f docker-compose.prod.yml logs -f nginx
echo   Restart: docker-compose -f docker-compose.prod.yml restart
echo   Stop: docker-compose -f docker-compose.prod.yml down

pause
