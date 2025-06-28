function ResourceView({ resources }) {
  return (
    <div className="glass-effect p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Resource Utilization</h2>
      <ul>
        {resources.map((resource, index) => (
          <li key={index} className="mb-2">
            CPU: {resource.cpu}% | Memory: {resource.memory}% | Disk: {resource.disk}%
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ResourceView;