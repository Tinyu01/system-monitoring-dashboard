from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from .config import Config

db = SQLAlchemy()

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    # Initialize extensions
    db.init_app(app)
    CORS(app, resources={r"/api/*": {"origins": ["https://system-monitoring-dashboard-one.vercel.app/", "http://localhost:3000"]}})
    
    # Register blueprints
    from .routes import metrics, alerts, resources, reports
    app.register_blueprint(metrics.bp)
    app.register_blueprint(alerts.bp)
    app.register_blueprint(resources.bp)
    app.register_blueprint(reports.bp)
    
    return app