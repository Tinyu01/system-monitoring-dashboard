import 'aframe';

function ARPreview({ metrics }) {
  return (
    <div className="glass-effect p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">AR Metrics Preview</h2>
      <a-scene embedded>
        <a-box position="0 0 -5" rotation="0 45 0" color="#3b82f6" scale={`${metrics[0]?.cpu_usage / 100 || 1} 1 1`}></a-box>
        <a-camera position="0 1.6 0"></a-camera>
      </a-scene>
    </div>
  );
}

export default ARPreview;