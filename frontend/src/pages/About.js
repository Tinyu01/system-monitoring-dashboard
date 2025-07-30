import Footer from '../components/Footer';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-900 dark:to-blue-900 flex flex-col justify-between">
      <main className="container mx-auto p-4 sm:p-8 flex-1 flex flex-col items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">About Us</h1>
        <div className="glass-effect p-4 sm:p-6 rounded-lg">
          <p className="text-base sm:text-lg md:text-xl">
            The System Monitor was inspired by the need for a unified platform that helps IT teams and DevOps professionals efficiently monitor and manage their systems. Built by Masingita Maluleke for ALX School.
          </p>
          <a href="https://github.com/yourusername/system-monitor" className="text-blue-300 hover:underline">
            GitHub Repository
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default About;