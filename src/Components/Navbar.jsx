import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-6 backdrop-blur-md bg-gradient-to-r from-black/40 to-gray-900/20">
      <div className="flex justify-between items-center w-11/12 mx-auto">
        <div className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
          Pinki Biswas
        </div>

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:flex">
          <a href="#" className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 ">
            Home
          </a>
          <a href="#about" className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 text-blue-400 bg-blue-400/10 border border-blue-400/30">About</a>
          <a href="#skills" className="hover:text-blue-400">Skills</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-blue-400 text-3xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-sm text-white text-center py-6 space-y-4 shadow-xl z-40 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}
      >
        <a href="#" onClick={closeMenu} className="block text-blue-400 hover:scale-105 transition-transform">Home</a>
        <a href="#about" onClick={closeMenu} className="block text-blue-400 hover:scale-105 transition-transform">About</a>
        <a href="#skills" onClick={closeMenu} className="block text-blue-400 hover:scale-105 transition-transform">Skills</a>
        <a href="#projects" onClick={closeMenu} className="block text-blue-400 hover:scale-105 transition-transform">Projects</a>
        <a href="#contact" onClick={closeMenu} className="block text-blue-400 hover:scale-105 transition-transform">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
