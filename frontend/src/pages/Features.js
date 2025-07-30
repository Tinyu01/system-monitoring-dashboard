function Features() {
  return (
    <div className="container mx-auto p-4 sm:p-6 md:p-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
        Features
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="glass-effect p-6 rounded-lg">
          <h2 className="text-2xl font-semibold">Real-Time Metrics</h2>
          <p>Monitor system performance with live data updates.</p>
        </div>
        <div className="glass-effect p-6 rounded-lg">
          <h2 className="text-2xl font-semibold">Custom Alerts</h2>
          <p>Set thresholds to get notified of potential issues.</p>
        </div>
        <div className="glass-effect p-6 rounded-lg">
          <h2 className="text-2xl font-semibold">AI Anomaly Detection</h2>
          <p>Detect unusual patterns using machine learning.</p>
        </div>
        <div className="glass-effect p-6 rounded-lg">
          <h2 className="text-2xl font-semibold">AR Visualization</h2>
          <p>View metrics in 3D using augmented reality.</p>
        </div>
      </div>
    </div>
  );
}

export default Features;