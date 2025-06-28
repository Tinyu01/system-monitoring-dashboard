function AlertsPanel({ alerts }) {
  return (
    <div className="glass-effect p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Active Alerts</h2>
      <ul>
        {alerts.map(alert => (
          <li key={alert.id} className="mb-2 p-2 bg-red-100 dark:bg-red-900 rounded">
            {alert.metric}: {alert.threshold}% - {alert.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AlertsPanel;