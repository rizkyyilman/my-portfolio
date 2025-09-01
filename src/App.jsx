// App.js atau file utama React
import { useState } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-4 shadow-md sticky top-0 bg-gray-800 text-white">
        <h1 className="text-2xl font-bold">Rizky Ilman</h1>
        <ul className="flex gap-6">
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>
        <button 
          onClick={() => setDarkMode(!darkMode)}
          className="px-3 py-1 rounded-lg bg-gray-700 hover:bg-gray-600"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h2 className="text-4xl font-bold mb-4">Rizky Ilman</h2>
        <p className="text-lg mb-6">Web Developer | Data Enthusiast</p>
        <a href="#contact" className="bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-600">
          Hubungi Saya
        </a>
      </section>

      {/* About */}
      <section id="about" className="px-10 py-16 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Tentang Saya</h3>
        <p>
          Saya seorang developer yang fokus pada pembuatan aplikasi web modern dengan teknologi terbaru.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="px-10 py-16 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Proyek</h3>
        <div className="space-y-6">
          <div>
            <h4 className="text-xl font-semibold">Portfolio Website</h4>
            <p>Website pribadi menggunakan React + TailwindCSS</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">E-Commerce App</h4>
            <p>Aplikasi belanja online berbasis PHP dan Database SQL</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-10 py-16 max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold mb-4">Kontak</h3>
        <p>Hubungi saya melalui:</p>
        <div className="flex gap-4 mt-4">
          <a href="mailto:email@gmail.com" className="text-blue-400 hover:underline">Email</a>
          <a href="https://linkedin.com" target="_blank" className="text-blue-400 hover:underline">LinkedIn</a>
          <a href="https://github.com" target="_blank" className="text-blue-400 hover:underline">GitHub</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-700">
        <p>© 2025 Rizky Ilman. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
