import React from "react";

function Footer() {
  return (
    <footer className="w-full bg-blue-600 dark:bg-blue-800 text-white py-6 mt-12 shadow-inner">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-4">
        <div className="text-center sm:text-left mb-2 sm:mb-0">
          <span className="font-bold">System Monitor</span> &copy; {new Date().getFullYear()} Masingita Maluleke
        </div>
        <div className="flex gap-4">
          <a href="https://github.com/Tinyu01" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/thefreelancer201/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          <a href="https://x.com/TheFreelancer20" target="_blank" rel="noopener noreferrer" className="hover:underline">Twitter</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
