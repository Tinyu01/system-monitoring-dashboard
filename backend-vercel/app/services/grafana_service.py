import requests
from ..config import Config

def create_dashboard(dashboard_config):
    try:
        headers = {'Content-Type': 'application/json'}
        response = requests.post(f"{Config.GRAFANA_URL}/api/dashboards/db", json=dashboard_config, headers=headers)
        response.raise_for_status()
        return response.json()
    except Exception as e:
        raise Exception(f"Grafana dashboard creation failed: {str(e)}")