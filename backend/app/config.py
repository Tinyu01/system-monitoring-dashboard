import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SQLALCHEMY_DATABASE_URI = os.getenv('DATABASE_URI', 'sqlite:///metrics.db')
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    PROMETHEUS_URL = os.getenv('PROMETHEUS_URL', 'http://localhost:9090')
    GRAFANA_URL = os.getenv('GRAFANA_URL', 'http://localhost:3001')