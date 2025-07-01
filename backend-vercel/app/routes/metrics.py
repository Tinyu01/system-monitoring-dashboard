from flask import Blueprint, jsonify
from ..services.prometheus_service import query_prometheus
from ..services.ai_anomaly_service import detect_anomalies

bp = Blueprint('metrics', __name__, url_prefix='/api/metrics')

@bp.route('/', methods=['GET'])
def get_metrics():
    try:
        metrics_data = query_prometheus('system_metrics')
        anomalies = detect_anomalies(metrics_data)  # Will return empty list
        return jsonify({
            'status': 'success',
            'data': metrics_data,
            'anomalies': anomalies
        }), 200
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500