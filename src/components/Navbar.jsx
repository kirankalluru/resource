import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-indigo-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://cdn.dribbble.com/users/2898/screenshots/4655773/resource-identity.gif"
            alt="Logo"
            className="h-10 w-15 rounded-full"
          />
          <span className="text-3xl text-gray-100 font-bold">Resource</span>
        </div>

        {/* Hamburger Menu */}
        <button
          className="sm:hidden flex items-center text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`sm:flex sm:space-x-6 text-lg ${
            isOpen ? 'block top-16' : 'hidden'
          } sm:block absolute sm:relative left-0 w-full sm:w-auto bg-indigo-500 sm:bg-transparent text-center sm:text-left`}
        >
          <li className="border-b sm:border-none border-gray-700 py-2 sm:py-0">
            <a href="#" className="hover:text-blue-100 block sm:inline">
              Home
            </a>
          </li>
          <li className="border-b sm:border-none border-gray-700 py-2 sm:py-0">
            <a href="#" className="hover:text-blue-300 block sm:inline">
              About
            </a>
          </li>
          <li className="border-b sm:border-none border-gray-700 py-2 sm:py-0">
            <a href="#" className="hover:text-blue-300 block sm:inline">
              Services
            </a>
          </li>
          <li className="py-2 sm:py-0">
            <a href="#" className="hover:text-blue-300 block sm:inline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
