from flask import Blueprint, jsonify, request

bp = Blueprint('reports', __name__, url_prefix='/api/reports')

@bp.route('/', methods=['GET'])
def get_reports():
    period = request.args.get('period', '24h')
    # Mock report generation
    report = {'period': period, 'metrics': {'cpu': 75, 'memory': 60}}
    return jsonify({'status': 'success', 'data': report}), 200