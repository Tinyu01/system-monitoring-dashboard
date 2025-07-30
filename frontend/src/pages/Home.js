import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import React from 'react';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-900 dark:to-blue-900 flex flex-col justify-between">
      <main className="container mx-auto p-4 sm:p-8 flex-1 flex flex-col items-center">
        <div className="text-center mb-12">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 glass-effect p-4 rounded-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            System Monitor
          </motion.h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 glass-effect p-4 rounded-lg">
            A comprehensive web-based platform to monitor and manage system performance and infrastructure.
          </p>
          <Link 
            to="/dashboard" 
            className="bg-blue-600 dark:bg-blue-800 text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            Explore the Dashboard
          </Link>
        </div>

        <section className="my-8 sm:my-10 md:my-12 w-full">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-center">Key Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <motion.div 
              className="glass-effect p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-2">Real-Time Metrics</h3>
              <p className="text-gray-700 dark:text-gray-300">Dynamic visualizations with up-to-the-minute updates.</p>
            </motion.div>
            <motion.div 
              className="glass-effect p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-2">Custom Alerts</h3>
              <p className="text-gray-700 dark:text-gray-300">Personalized alerts for critical system health issues.</p>
            </motion.div>
            <motion.div 
              className="glass-effect p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-bold mb-2">AI Anomaly Detection</h3>
              <p className="text-gray-700 dark:text-gray-300">Proactively identify unusual patterns with AI.</p>
            </motion.div>
          </div>
        </section>

        <section className="my-8 sm:my-10 md:my-12 w-full text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4">About Us</h2>
          <p className="glass-effect p-4 rounded-lg text-base sm:text-lg md:text-xl mb-4">
            Built by Masingita Maluleke for ALX Portfolio Project. A tool for IT teams to monitor systems with real-time insights and customization.
          </p>
          <a href="https://github.com/yourusername/system-monitor" className="text-blue-300 hover:underline">
            Visit our GitHub
          </a>
        </section>

        <div className="flex flex-col items-center justify-center my-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-blue-700 dark:text-blue-300">Welcome to the System Monitoring Dashboard</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-200 mb-6">
            Monitor your system metrics, resources, and alerts in real time.
          </p>
          <a
            href="/dashboard"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            Go to Dashboard
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Home;