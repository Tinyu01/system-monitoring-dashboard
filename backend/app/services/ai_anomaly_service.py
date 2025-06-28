from sklearn.ensemble import IsolationForest
import numpy as np

def detect_anomalies(metrics_data):
    # Example: Use Isolation Forest for anomaly detection
    try:
        data = np.array([[m['value'][1] for m in metrics_data]])
        model = IsolationForest(contamination=0.1)
        predictions = model.fit_predict(data)
        return [{'metric': m['metric'], 'value': m['value'], 'is_anomaly': p == -1} for m, p in zip(metrics_data, predictions)]
    except:
        return []