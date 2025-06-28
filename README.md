# System Monitoring Dashboard

## Overview
The System Monitoring Dashboard is a comprehensive application designed to monitor system metrics, manage alerts, and visualize resource usage. It provides a user-friendly interface for users to interact with system data and receive real-time updates.

## Project Structure
The project is organized into several key components:

- **Backend**: Contains the server-side application built with Python. It handles API requests, processes data, and interacts with external services like Prometheus and Grafana.
- **Frontend**: A React-based client application that provides the user interface for the dashboard. It visualizes metrics, alerts, and resources.
- **Ansible**: Contains playbooks and inventory files for automating deployment and configuration of the application.
- **Config**: Configuration files for application settings.
- **Docs**: Documentation files that provide architectural insights and API specifications.

## Features
- Real-time monitoring of system metrics.
- Alert management system for critical events.
- Resource usage visualization.
- Customizable dashboard with theme toggle.
- Integration with Prometheus and Grafana for enhanced monitoring capabilities.

## Getting Started

### Prerequisites
- Python 3.x
- Node.js and npm
- Docker and Docker Compose
- Ansible

### Installation

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd system-monitoring-dashboard
   ```

2. **Backend Setup**:
   - Navigate to the backend directory:
     ```
     cd backend
     ```
   - Install dependencies:
     ```
     pip install -r requirements.txt
     ```

3. **Frontend Setup**:
   - Navigate to the frontend directory:
     ```
     cd frontend
     ```
   - Install dependencies:
     ```
     npm install
     ```

4. **Run the Application**:
   - Start the backend server:
     ```
     python src/app.py
     ```
   - Start the frontend application:
     ```
     npm start
     ```

### Deployment
For deployment, use the provided Ansible playbook located in the `ansible` directory. Update the inventory file with your server details and run the playbook to set up the environment.

### Documentation
Refer to the `docs` directory for detailed architectural documentation and API specifications.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.