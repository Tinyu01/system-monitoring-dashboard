from .. import db

class SystemMetric(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    timestamp = db.Column(db.DateTime, nullable=False)
    cpu_usage = db.Column(db.Float, nullable=False)
    memory_usage = db.Column(db.Float, nullable=False)
    disk_usage = db.Column(db.Float, nullable=False)
    network_traffic = db.Column(db.Float, nullable=False)