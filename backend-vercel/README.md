# System Monitoring Dashboard Backend (Vercel)

This directory contains the backend API adapted for deployment on Vercel's serverless platform. The backend provides endpoints for system metrics collection, monitoring data aggregation, and integration with Prometheus and Grafana.

## 🏗️ Architecture Overview

This backend is designed for serverless deployment on Vercel, utilizing:
- **Serverless Functions**: API endpoints deployed as individual functions
- **Edge Runtime**: Fast, globally distributed execution
- **Managed Database**: Vercel Postgres for production data persistence
- **External Monitoring**: Integration with hosted Prometheus and Grafana instances

## 📋 Prerequisites

- Node.js 18+ or Python 3.9+ (depending on your implementation)
- Vercel CLI (`npm i -g vercel`)
- Git repository for deployment
- External Prometheus and Grafana instances (see [Hosting Options](#hosting-options))

## 🚀 Quick Start

### 1. Install Dependencies

```bash
# For Python backend
pip install -r requirements.txt

# For Node.js backend (if applicable)
npm install
```

### 2. Environment Configuration

Copy the example environment file and configure your variables:

```bash
cp .env.example .env
```

**Required Environment Variables:**

```env
# Database Configuration
DATABASE_URI=postgresql://username:password@host:port/database
# For development: sqlite:////tmp/metrics.db

# Monitoring Services
PROMETHEUS_URL=https://your-prometheus-instance.com
GRAFANA_URL=https://your-grafana-instance.com

# API Configuration
CORS_ORIGINS=https://your-frontend-domain.vercel.app
API_SECRET_KEY=your-secret-key-here

# Optional: Authentication
JWT_SECRET=your-jwt-secret
ADMIN_USERNAME=admin
ADMIN_PASSWORD=secure-password
```

### 3. Local Development

Test the backend locally before deployment:

```bash
# Python with Gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 api.index:app

# Or with Flask development server
python api/index.py

# Verify endpoints
curl http://localhost:5000/api/health
curl http://localhost:5000/api/metrics
```

### 4. Deploy to Vercel

#### Option A: Vercel CLI

```bash
# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow prompts to configure project
# Set environment variables when prompted
```

#### Option B: GitHub Integration

1. Push your code to a GitHub repository
2. Connect repository to Vercel dashboard
3. Configure environment variables in project settings
4. Deploy automatically on push

## 🗄️ Database Setup

### Development (SQLite)

For local testing, SQLite stores data in `/tmp/metrics.db`:

```python
DATABASE_URI=sqlite:////tmp/metrics.db
```

### Production (Vercel Postgres)

1. **Create Vercel Postgres Database:**
   ```bash
   vercel storage create postgres
   ```

2. **Get Connection String:**
   - Navigate to Vercel Dashboard → Storage → Your Database
   - Copy the connection string
   - Add to environment variables

3. **Database Schema:**
   ```sql
   -- Auto-generated tables for metrics storage
   CREATE TABLE metrics (
       id SERIAL PRIMARY KEY,
       timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       metric_name VARCHAR(100) NOT NULL,
       value FLOAT NOT NULL,
       labels JSONB,
       source VARCHAR(50)
   );

   CREATE INDEX idx_metrics_timestamp ON metrics(timestamp);
   CREATE INDEX idx_metrics_name ON metrics(metric_name);
   ```

## 🔧 API Endpoints

### Health Check
```
GET /api/health
Response: {"status": "healthy", "timestamp": "2025-07-01T10:00:00Z"}
```

### Metrics Collection
```
GET /api/metrics
Query Parameters:
  - start_time: ISO timestamp
  - end_time: ISO timestamp
  - metric_name: Filter by specific metric
  - limit: Number of results (default: 100)

Response: {
  "metrics": [...],
  "total": 150,
  "pagination": {...}
}
```

### System Status
```
GET /api/status
Response: {
  "database": "connected",
  "prometheus": "accessible",
  "grafana": "accessible",
  "uptime": "2h 30m"
}
```

### Data Ingestion
```
POST /api/ingest
Body: {
  "metrics": [
    {
      "name": "cpu_usage",
      "value": 85.5,
      "timestamp": "2025-07-01T10:00:00Z",
      "labels": {"host": "web-01"}
    }
  ]
}
```

## 🌐 External Service Integration

### Hosting Options

#### Prometheus
- **Grafana Cloud Prometheus**: Managed service with free tier
- **AWS Managed Prometheus**: Scalable, serverless Prometheus
- **Self-hosted**: VPS or dedicated server with Docker
- **DigitalOcean App Platform**: Container-based hosting

#### Grafana
- **Grafana Cloud**: Free tier available, easy setup
- **Self-hosted**: Docker container on VPS
- **AWS/GCP/Azure**: Marketplace deployments

### Configuration Examples

**Docker Compose for Self-hosting:**
```yaml
version: '3.8'
services:
  prometheus:
    image: prom/prometheus:latest
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml
    
  grafana:
    image: grafana/grafana:latest
    ports:
      - "3000:3000"
    environment:
      - GF_SECURITY_ADMIN_PASSWORD=admin
```

## 📱 Frontend Integration

Update your frontend to use the deployed backend URL:

```javascript
// useMetrics.js or similar
const API_BASE_URL = 'https://your-backend.vercel.app';

export const useMetrics = () => {
  const [metrics, setMetrics] = useState([]);
  
  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/metrics`);
        const data = await response.json();
        setMetrics(data.metrics);
      } catch (error) {
        console.error('Failed to fetch metrics:', error);
      }
    };
    
    fetchMetrics();
    const interval = setInterval(fetchMetrics, 30000); // Poll every 30s
    
    return () => clearInterval(interval);
  }, []);
  
  return { metrics };
};
```

## 🔒 Security Considerations

### Environment Variables
- Never commit `.env` files to version control
- Use Vercel's environment variable interface for production
- Rotate secrets regularly

### CORS Configuration
```python
# app/__init__.py
from flask_cors import CORS

CORS(app, origins=[
    "https://your-frontend.vercel.app",
    "http://localhost:3000"  # Development only
])
```

### Rate Limiting
```python
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

limiter = Limiter(
    app,
    key_func=get_remote_address,
    default_limits=["100 per hour"]
)
```

## 📊 Monitoring and Observability

### Vercel Analytics
Enable Vercel Analytics for function performance monitoring:

```json
{
  "functions": {
    "api/**/*.py": {
      "memory": 512,
      "maxDuration": 30
    }
  }
}
```

### Custom Metrics
```python
import time
from functools import wraps

def track_execution_time(f):
    @wraps(f)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = f(*args, **kwargs)
        duration = time.time() - start
        # Log to your monitoring system
        return result
    return wrapper
```

## 🧪 Testing

### Local Testing
```bash
# Unit tests
python -m pytest tests/

# Integration tests with test database
DATABASE_URI=sqlite:///test.db python -m pytest tests/integration/

# Load testing
pip install locust
locust -f tests/load_test.py --host=http://localhost:5000
```

### Production Health Checks
```bash
# Basic health check
curl https://your-backend.vercel.app/api/health

# Metrics endpoint
curl "https://your-backend.vercel.app/api/metrics?limit=10"
```

## 🚀 Deployment Checklist

- [ ] Environment variables configured in Vercel dashboard
- [ ] Database connection tested and schema created
- [ ] Prometheus instance accessible and configured
- [ ] Grafana instance set up with dashboards
- [ ] CORS origins updated for production frontend URL
- [ ] API endpoints tested in production
- [ ] Monitoring and alerting configured
- [ ] Documentation updated with production URLs

## 🛠️ Troubleshooting

### Common Issues

**Database Connection Errors:**
```bash
# Check connection string format
# Ensure database is accessible from Vercel's IP ranges
# Verify credentials and network security groups
```

**CORS Issues:**
```python
# Add frontend domain to CORS_ORIGINS
# Check protocol (http vs https)
# Verify subdomain configuration
```

**Function Timeouts:**
```json
// vercel.json
{
  "functions": {
    "api/**/*.py": {
      "maxDuration": 60
    }
  }
}
```

### Debug Mode
```python
# Enable detailed logging
import logging
logging.basicConfig(level=logging.DEBUG)
```

## 📚 Additional Resources

- [Vercel Postgres Documentation](https://vercel.com/docs/storage/vercel-postgres)
- [Serverless Functions Guide](https://vercel.com/docs/functions/serverless-functions)
- [Prometheus Configuration](https://prometheus.io/docs/prometheus/latest/configuration/configuration/)
- [Grafana Provisioning](https://grafana.com/docs/grafana/latest/administration/provisioning/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Need Help?** 
- Check the [troubleshooting section](#troubleshooting) above
- Review Vercel's [support documentation](https://vercel.com/support)
- Open an issue in the repository for project-specific questions