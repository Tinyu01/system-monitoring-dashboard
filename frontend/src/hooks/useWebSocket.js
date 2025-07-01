import { useState, useEffect } from 'react';
import axios from 'axios';

function useMetrics(apiUrl) {
  const [data, setData] = useState({ metrics: [], alerts: [], resources: [] });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/metrics`);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching metrics:', error);
      }
    };

    fetchData(); // Initial fetch
    const interval = setInterval(fetchData, 5000); // Poll every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [apiUrl]);

  return { data };
}

export default useMetrics;