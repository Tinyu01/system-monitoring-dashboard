import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/Home';
import Features from './pages/Features';
import About from './pages/About';
import Contact from './pages/Contact';
import Dashboard from './components/Dashboard';
import ThemeToggle from './components/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <nav className="bg-blue-600 dark:bg-blue-800 p-2 sm:p-4 sticky top-0 z-10">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">
              <h1 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-0">System Monitor</h1>
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <a href="/" className="hover:underline text-base sm:text-lg">Home</a>
                <a href="/features" className="hover:underline text-base sm:text-lg">Features</a>
                <a href="/about" className="hover:underline text-base sm:text-lg">About</a>
                <a href="/contact" className="hover:underline text-base sm:text-lg">Contact</a>
                <ThemeToggle />
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;