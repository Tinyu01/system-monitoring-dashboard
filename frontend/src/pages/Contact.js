function Contact() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <div className="glass-effect p-6 rounded-lg">
        <p>Reach out to Masingita Maluleke:</p>
        <ul className="mt-4">
          <li><a href="https://linkedin.com/in/yourprofile" className="text-blue-300 hover:underline">LinkedIn</a></li>
          <li><a href="https://github.com/yourusername" className="text-blue-300 hover:underline">GitHub</a></li>
          <li><a href="https://twitter.com/yourprofile" className="text-blue-300 hover:underline">Twitter</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;