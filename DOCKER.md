# Docker Deployment Guide for Tesseract TaskForce

This guide explains how to run and deploy the Tesseract TaskForce application using Docker.

## Prerequisites

- Docker installed on your system
- Docker Compose installed
- At least 4GB of available RAM
- 10GB of free disk space

## Quick Start

### 1. Development Environment

```bash
# Clone the repository and navigate to the project
cd tesseract

# Copy environment file
cp env.docker.example .env

# Edit the .env file with your configuration
nano .env

# Start development environment
npm run docker:dev
```

### 2. Production Environment

```bash
# Start production environment
npm run docker:prod

# Or use the setup script
npm run docker:setup
```

## Available Commands

| Command | Description |
|---------|-------------|
| `npm run docker:build` | Build the Docker image |
| `npm run docker:dev` | Start development environment |
| `npm run docker:prod` | Start production environment |
| `npm run docker:down` | Stop all containers |
| `npm run docker:logs` | View container logs |
| `npm run docker:setup` | Run complete setup script |
| `npm run docker:deploy` | Build for production deployment |

## Environment Configuration

### Required Environment Variables

Create a `.env` file with the following variables:

```env
# Database
DATABASE_URL=postgresql://postgres:postgres@postgres:5432/tesseract

# NextAuth
NEXTAUTH_SECRET=your-super-secret-key-change-this-in-production
NEXTAUTH_URL=http://localhost:3000

# Resend (for email)
RESEND_API_KEY=your-resend-api-key

# Node Environment
NODE_ENV=production
```

## Services

### Application (Port 3000)
- Next.js application
- API routes
- Admin panel

### Database (Port 5432)
- PostgreSQL database
- Persistent data storage

## Development vs Production

### Development Profile
- Hot reloading enabled
- Source code mounted as volume
- Debug logging enabled
- Accessible at `http://localhost:3001`

### Production Profile
- Optimized build
- Standalone output
- Production logging
- Accessible at `http://localhost:3000`

## Database Management

### Run Migrations
```bash
docker-compose exec app npx prisma migrate deploy
```

### Create Admin User
```bash
docker-compose exec app node script/createAdmin.js
```

### Access Database
```bash
docker-compose exec postgres psql -U postgres -d tesseract
```

## Monitoring and Logs

### View Application Logs
```bash
npm run docker:logs
```

### View Specific Service Logs
```bash
docker-compose logs -f app
docker-compose logs -f postgres
```

### Check Container Status
```bash
docker-compose ps
```

## Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```bash
   # Stop existing services
   docker-compose down
   
   # Or change ports in docker-compose.yml
   ```

2. **Database Connection Issues**
   ```bash
   # Restart database
   docker-compose restart postgres
   
   # Check database logs
   docker-compose logs postgres
   ```

3. **Build Failures**
   ```bash
   # Clean build cache
   docker system prune -a
   
   # Rebuild without cache
   docker-compose build --no-cache
   ```

### Performance Optimization

1. **Increase Memory Limits**
   ```yaml
   # In docker-compose.yml
   deploy:
     resources:
       limits:
         memory: 2G
   ```

2. **Enable Build Cache**
   ```bash
   # Use BuildKit for faster builds
   export DOCKER_BUILDKIT=1
   ```

## Production Deployment

### 1. Build Production Image
```bash
npm run docker:deploy
```

### 2. Deploy to Cloud Provider

#### AWS ECS
```bash
# Tag for ECR
docker tag tesseract-taskforce:latest your-account.dkr.ecr.region.amazonaws.com/tesseract-taskforce:latest

# Push to ECR
docker push your-account.dkr.ecr.region.amazonaws.com/tesseract-taskforce:latest
```

#### Google Cloud Run
```bash
# Build and push to GCR
gcloud builds submit --tag gcr.io/your-project/tesseract-taskforce
```

#### Azure Container Instances
```bash
# Build and push to ACR
az acr build --registry your-registry --image tesseract-taskforce .
```

### 3. Environment Variables for Production

Set these environment variables in your cloud provider:

- `DATABASE_URL`: Your production database URL
- `NEXTAUTH_SECRET`: Strong secret key
- `NEXTAUTH_URL`: Your production domain
- `RESEND_API_KEY`: Your email service API key

## Security Considerations

1. **Change Default Passwords**
   - Update database credentials
   - Use strong NEXTAUTH_SECRET

2. **Network Security**
   - Use Docker networks
   - Restrict port exposure
   - Enable SSL/TLS

3. **Data Persistence**
   - Use Docker volumes for database
   - Regular backups
   - Monitor disk usage

## Backup and Recovery

### Database Backup
```bash
# Create backup
docker-compose exec postgres pg_dump -U postgres tesseract > backup.sql

# Restore backup
docker-compose exec -T postgres psql -U postgres tesseract < backup.sql
```

### Volume Backup
```bash
# Backup volumes
docker run --rm -v tesseract_postgres_data:/data -v $(pwd):/backup alpine tar czf /backup/postgres_backup.tar.gz -C /data .
```

## Scaling

### Horizontal Scaling
```yaml
# In docker-compose.yml
services:
  app:
    deploy:
      replicas: 3
```

### Load Balancing
Use a reverse proxy like Nginx or Traefik for load balancing multiple app instances.

## Support

For issues and questions:
1. Check container logs: `npm run docker:logs`
2. Verify environment variables
3. Check database connectivity
4. Review Docker documentation
