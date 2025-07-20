// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 md:px-16 bg-white z-20 relative shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        {/* Make sure 'logo.png' is in your public folder */}
        <img src="/logo.jpg" alt="Jadoo Logo" className="h-8" />
        <span className="text-2xl font-bold text-gray-800">Jadoo</span>
      </div>

      {/* Navigation Links (Hidden on small screens, adjust for responsiveness later) */}
      <ul className="hidden md:flex space-x-8">
        <li><a href="#" className="text-gray-600 hover:text-gray-900 font-semibold transition-colors duration-200">Destinations</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900 font-semibold transition-colors duration-200">Hotels</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900 font-semibold transition-colors duration-200">Flights</a></li>
        <li><a href="#" className="text-gray-600 hover:text-gray-900 font-semibold transition-colors duration-200">Bookings</a></li>
      </ul>

      {/* Login / Sign Up */}
      <div className="hidden md:flex items-center space-x-4">
        <button className="text-gray-600 hover:text-gray-900 font-semibold transition-colors duration-200">Login</button>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300 shadow-md">Sign Up</button>
        {/* Language Selector */}
        <select className="border border-gray-300 rounded-md px-2 py-1 text-gray-700">
          <option>EN</option>
          <option>ES</option>
          <option>FR</option>
        </select>
      </div>

      {/* Mobile Menu Button (Hamburger icon - add functionality later) */}
      <div className="md:hidden">
        <button className="text-gray-800 focus:outline-none">
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;