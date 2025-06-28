import { useEffect } from 'react';
import useWebSocket from '../hooks/useWebSocket';
import MetricsChart from './MetricsChart';
import AlertsPanel from './AlertsPanel';
import ResourceView from './ResourceView';
import ARPreview from './ARPreview';

function Dashboard() {
  const { data, connect } = useWebSocket('ws://localhost:5000/ws/metrics');

  useEffect(() => {
    connect();
  }, [connect]);

  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <MetricsChart data={data.metrics} />
      <AlertsPanel alerts={data.alerts} />
      <ResourceView resources={data.resources} />
      <ARPreview metrics={data.metrics} />
    </div>
  );
}

export default Dashboard;