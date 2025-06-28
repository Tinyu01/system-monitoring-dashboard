from flask import Blueprint, jsonify
from ..services.prometheus_service import query_prometheus

bp = Blueprint('resources', __name__, url_prefix='/api/resources')

@bp.route('/', methods=['GET'])
def get_resources():
    try:
        resources = query_prometheus('resource_utilization')
        return jsonify({'status': 'success', 'data': resources}), 200
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500