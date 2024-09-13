import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#FDF3F1] fixed w-full top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <div>
              <a href="#" className="flex items-center py-4 px-2">
                <span className="font-semibold text-lg">Brandname</span>
              </a>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            <Link to="home" smooth={true} duration={500} className="py-4 px-2 text-gray-500 font-semibold hover:text-[#b3db97] transition duration-300">Home</Link>
            <Link to="product" smooth={true} duration={500} className="py-4 px-2 text-gray-500 font-semibold hover:text-[#b3db97] transition duration-300">Product</Link>
            <Link to="pricing" smooth={true} duration={500} className="py-4 px-2 text-gray-500 font-semibold hover:text-[#b3db97] transition duration-300">Pricing</Link>
            <Link to="contact" smooth={true} duration={500} className="py-4 px-2 text-gray-500 font-semibold hover:text-[#b3db97] transition duration-300">Contact</Link>
          </div>
          <div className="hidden md:flex items-center space-x-3">
            <a href="#" className="py-2 px-4 font-medium text-[#b3db97] rounded hover:bg-[#b3db97] hover:text-white transition duration-300">Log In</a>
            <a href="#" className="py-2 px-4 font-medium text-white bg-[#b3db97] rounded hover:bg-[#b3db97] transition duration-300">JOIN US</a>
          </div>
          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
              {isOpen ? (
                <svg className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <Link to="home" smooth={true} duration={500} className="block py-2 px-4 text-sm hover:bg-[#b3db97] hover:text-white transition duration-300">Home</Link>
        <Link to="product" smooth={true} duration={500} className="block py-2 px-4 text-sm hover:bg-[#b3db97] hover:text-white transition duration-300">Product</Link>
        <Link to="pricing" smooth={true} duration={500} className="block py-2 px-4 text-sm hover:bg-[#b3db97] hover:text-white transition duration-300">Pricing</Link>
        <Link to="contact" smooth={true} duration={500} className="block py-2 px-4 text-sm hover:bg-[#b3db97] hover:text-white transition duration-300">Contact</Link>
        <a href="#" className="block py-2 px-4 text-sm hover:bg-[#b3db97] hover:text-white transition duration-300">Log In</a>
        <a href="#" className="block py-2 px-4 text-sm text-white bg-[#b3db97] hover:bg-[#b3db97] transition duration-300">JOIN US</a>
      </div>
    </nav>
  );
};

export default Navbar;
