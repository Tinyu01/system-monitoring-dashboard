import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import React from 'react';

function Home() {
  return (
    <div className="min-h-screen bg-blue-50 dark:bg-gray-900">
      <div className="container mx-auto p-4 text-center">
        <motion.h1 
          className="text-5xl font-bold mb-4 glass-effect p-4 rounded-lg"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          System Monitor
        </motion.h1>
        <p className="text-xl mb-6 glass-effect p-4 rounded-lg">
          A comprehensive web-based platform to monitor and manage system performance and infrastructure.
        </p>
        <Link 
          to="/dashboard" 
          className="bg-blue-600 dark:bg-blue-800 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
        >
          Explore the Dashboard
        </Link>

        <section className="my-12">
          <h2 className="text-3xl font-semibold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div 
              className="glass-effect p-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold">Real-Time Metrics</h3>
              <p>Dynamic visualizations with up-to-the-minute updates.</p>
            </motion.div>
            <motion.div 
              className="glass-effect p-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold">Custom Alerts</h3>
              <p>Personalized alerts for critical system health issues.</p>
            </motion.div>
            <motion.div 
              className="glass-effect p-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold">AI Anomaly Detection</h3>
              <p>Proactively identify unusual patterns with AI.</p>
            </motion.div>
          </div>
        </section>

        <section className="my-12">
          <h2 className="text-3xl font-semibold mb-6">About Us</h2>
          <p className="glass-effect p-4 rounded-lg">
            Built by Masingita Maluleke for ALX Portfolio Project. A tool for IT teams to monitor systems with real-time insights and customization.
          </p>
          <a href="https://github.com/yourusername/system-monitor" className="text-blue-300 hover:underline">
            Visit our GitHub
          </a>
        </section>

        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <h2 className="text-4xl font-bold mb-4 text-blue-700 dark:text-blue-300">Welcome to the System Monitoring Dashboard</h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-6">
            Monitor your system metrics, resources, and alerts in real time.
          </p>
          <a
            href="/dashboard"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            Go to Dashboard
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;