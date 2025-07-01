from app import create_app
from wsgiref.handlers import CGIHandler

app = create_app()

def handler(request):
    """Vercel serverless function handler"""
    return CGIHandler().run(app)