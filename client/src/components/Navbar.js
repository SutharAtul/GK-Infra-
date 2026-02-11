import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md">

      <div className="max-w-7xl mx-auto flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-yellow-400"
        >
          GK INFRA
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium items-center">

          <li>
            <Link to="/" className="hover:text-yellow-400">
              Home
            </Link>
          </li>

          <li>
            <Link to="/services" className="hover:text-yellow-400">
              Services
            </Link>
          </li>

          <li>
            <Link to="/projects" className="hover:text-yellow-400">
              Projects
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-yellow-400">
              Contact
            </Link>
          </li>

          {/* Quote Button */}
          <li>
            <Link
              to="/contact"
              className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600 transition"
            >
              Get Quote
            </Link>
          </li>

        </ul>

        {/* Mobile Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl focus:outline-none"
        >
          ☰
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-gray-800 rounded-lg p-4 space-y-4">

          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-400"
          >
            Home
          </Link>

          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-400"
          >
            Services
          </Link>

          <Link
            to="/projects"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-400"
          >
            Projects
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-yellow-400"
          >
            Contact
          </Link>

          {/* Quote Button Mobile */}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block bg-yellow-500 text-black text-center py-2 rounded hover:bg-yellow-600"
          >
            Get Quote
          </Link>

        </div>
      )}

    </nav>
  );
}
