import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URI', 'sqlite:////tmp/metrics.db')  # /tmp for Vercel’s writable filesystem
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    PROMETHEUS_URL = os.getenv('PROMETHEUS_URL', 'https://your-prometheus-service.com')
    GRAFANA_URL = os.getenv('GRAFANA_URL', 'https://your-grafana-service.com')