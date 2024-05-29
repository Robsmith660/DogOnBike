import React, { useState, useRef } from 'react';
import dogImage from '../Images/dog.png'; // Import your hero image

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r from-blue-500 via-purple-700 to-blue-500 text-white p-4 relative shadow-lg" ref={headerRef}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Updated the font style to something more whimsical and added a fun logo/icon */}
        <h1 className="text-2xl font-extrabold tracking-wide flex items-center">
        <img src={dogImage} alt="dog" className="h-20 w-20 mr-2" /> %DogOnBike
        </h1>
        <div className="md:hidden">
          <button 
            className="text-white hover:text-gray-300 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          {isOpen && (
            <div className="absolute top-full right-0 mt-2 bg-gray-800 rounded-md shadow-lg w-40">
              <a href="#about" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">About</a>
              <a href="#buy" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Buy</a>
              <a href="#social" className="block px-4 py-2 text-sm text-white hover:bg-gray-700">Social</a>
            </div>
          )}
        </div>
        <nav className="hidden md:flex md:space-x-6">
          <a href="#about" className="text-sm uppercase tracking-wider hover:text-gray-300">About</a>
          <a href="#buy" className="text-sm uppercase tracking-wider hover:text-gray-300">Buy</a>
          <a href="#social" className="text-sm uppercase tracking-wider hover:text-gray-300">Social</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
