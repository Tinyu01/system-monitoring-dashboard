# System Monitoring Dashboard Backend

This is the backend component of the System Monitoring Dashboard project. The backend is responsible for handling API requests, managing system metrics, alerts, resources, and generating reports.

## Project Structure

- **src/**: Contains the main application code.
  - **app.py**: The entry point for the backend application.
  - **routes/**: Contains route definitions for various functionalities.
    - **metrics.py**: Routes related to system metrics.
    - **alerts.py**: Routes for managing alerts.
    - **resources.py**: Routes for resource management.
    - **reports.py**: Routes for generating reports.
  - **models/**: Contains data models.
    - **system_metrics.py**: Data model for system metrics.
  - **services/**: Contains services for external interactions.
    - **prometheus_service.py**: Service for interacting with Prometheus.
    - **grafana_service.py**: Service for interacting with Grafana.
    - **ai_anomaly_service.py**: Service for AI-based anomaly detection.
  - **config.py**: Configuration settings for the backend application.
- **tests/**: Contains unit tests for the application.
  - **test_metrics.py**: Unit tests for metrics routes.
  - **test_alerts.py**: Unit tests for alerts routes.

## Installation

To install the required dependencies, run:

```
pip install -r requirements.txt
```

## Running the Application

To start the backend application, use the following command:

```
python src/app.py
```

## Testing

To run the tests, use:

```
pytest
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.