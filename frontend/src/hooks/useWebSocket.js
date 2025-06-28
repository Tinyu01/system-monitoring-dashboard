import { useState, useEffect } from 'react';

function useWebSocket(url) {
  const [data, setData] = useState({ metrics: [], alerts: [], resources: [] });

  const connect = () => {
    const ws = new WebSocket(url);
    ws.onmessage = (event) => {
      setData(JSON.parse(event.data));
    };
    ws.onclose = () => {
      setTimeout(connect, 1000); // Reconnect on close
    };
    return () => ws.close();
  };

  return { data, connect };
}

export default useWebSocket;