import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-01 - resize - Copy.jpg';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="w-full max-w-screen-2xl mx-auto flex items-center justify-between px-4 md:px-8 py-4">
        
        {/* Logo (clickable) */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Smart Roads Logo" className="h-16 w-auto" />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-4 md:space-x-6">
          <Link
            to="/"
            className="text-base font-medium text-gray-700 hover:text-smartOrange transition"
          >
            Home
          </Link>
          <Link
            to="/features"
            className="text-base font-medium text-gray-700 hover:text-smartOrange transition"
          >
            Features & Pricing
          </Link>
          <Link
            to="/contact"
            className="text-base font-medium text-gray-700 hover:text-smartOrange transition"
          >
            Contact
          </Link>
          <button
            className="text-base font-medium bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            Dashboard Login
          </button>
          <a
            href="https://dashboard.smartroads.co.nz" // replace with real URL if known
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-medium bg-smartOrange text-white px-4 py-2 rounded hover:bg-orange-700 transition"
          >
            Sign Up
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

