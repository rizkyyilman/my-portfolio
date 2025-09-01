import { useState } from "react";
import { navLinks } from "../data/data";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${darkMode ? "bg-gray-800" : "bg-white"} fixed w-full shadow-md z-50`}>
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold">Rizky Ilman</h1>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="hover:text-blue-500 transition"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        {/* Mobile button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className={`md:hidden flex flex-col items-center py-4 ${darkMode ? "bg-gray-800" : "bg-white"}`}>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="py-2 hover:text-blue-500"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => {
              setDarkMode(!darkMode);
              setIsOpen(false);
            }}
            className="mt-2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      )}
    </nav>
  );
}
