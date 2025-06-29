function About() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <div className="glass-effect p-6 rounded-lg">
        <p>
          The System Monitor was inspired by the need for a unified platform that helps IT teams and DevOps professionals efficiently monitor and manage their systems. Built by Masingita Maluleke for ALX School.
        </p>
        <a href="https://github.com/yourusername/system-monitor" className="text-blue-300 hover:underline">
          GitHub Repository
        </a>
      </div>
    </div>
  );
}

export default About;