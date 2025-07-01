import requests
from ..config import Config

def query_prometheus(query):
    try:
        response = requests.get(f"{Config.PROMETHEUS_URL}/api/v1/query", params={'query': query})
        response.raise_for_status()
        return response.json()['data']['result']
    except Exception as e:
        raise Exception(f"Prometheus query failed: {str(e)}")