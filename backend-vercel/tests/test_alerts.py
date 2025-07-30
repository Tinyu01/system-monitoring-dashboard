import pytest
import sys
import os

# Add the parent directory to sys.path to import the app module
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from app import create_app

@pytest.fixture
def client():
    app = create_app()
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_get_alerts(client):
    response = client.get('/api/alerts/')
    print(f"Status code: {response.status_code}")
    print(f"Response data: {response.get_data(as_text=True)}")
    print(f"CORS headers: {response.headers.get('Access-Control-Allow-Origin')}")
    assert response.status_code == 200
    assert response.json['status'] == 'success'