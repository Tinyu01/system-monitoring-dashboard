import Footer from '../components/Footer';

function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 dark:from-gray-900 dark:to-blue-900 flex flex-col justify-between">
      <main className="container mx-auto p-4 sm:p-8 flex-1 flex flex-col items-center">
        <div className="w-full max-w-xl bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 sm:p-10 glass-effect flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-blue-300 mb-4 text-center tracking-tight">Contact</h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-200 mb-6 text-center">Let's connect! Reach out to <span className="font-semibold text-blue-600 dark:text-blue-400">Masingita Maluleke</span> for collaborations, opportunities, or just to say hi.</p>
          <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 w-full">
            <li>
              <a href="https://www.linkedin.com/in/thefreelancer201/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow transition duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.099-.021-2.516-1.535-2.516-1.537 0-1.773 1.201-1.773 2.439v4.681h-3v-9h2.881v1.233h.041c.401-.761 1.379-1.563 2.841-1.563 3.04 0 3.601 2.002 3.601 4.604v4.726z"/></svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/Tinyu01" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-900 hover:bg-gray-700 text-white font-medium shadow transition duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.218.694.825.576 4.765-1.585 8.199-6.082 8.199-11.384 0-6.627-5.373-12-12-12z"/></svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://x.com/TheFreelancer20" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-400 hover:bg-blue-500 text-white font-medium shadow transition duration-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.72 0-4.924 2.204-4.924 4.924 0 .386.044.762.127 1.124-4.09-.205-7.713-2.165-10.141-5.144-.424.729-.666 1.577-.666 2.476 0 1.708.87 3.216 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.062c0 2.385 1.697 4.374 3.95 4.827-.413.112-.849.171-1.296.171-.317 0-.626-.031-.928-.088.627 1.956 2.444 3.377 4.6 3.417-1.68 1.317-3.809 2.101-6.102 2.101-.396 0-.787-.023-1.175-.069 2.179 1.397 4.768 2.215 7.557 2.215 9.054 0 14.009-7.504 14.009-14.009 0-.213-.005-.426-.014-.637.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                Twitter
              </a>
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;