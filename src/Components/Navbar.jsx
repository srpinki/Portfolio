import React, { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + 100;

      for (let id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = (id) =>
    activeSection === id
      ? "px-4 py-2 rounded-lg text-sm font-medium text-blue-400 bg-blue-400/10 border border-blue-400/30"
      : "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:scale-105 hover:text-blue-400";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 py-6 backdrop-blur-md transition-colors duration-300 ${scrolled ? 'bg-[#111827]' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center w-11/12 mx-auto">
        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
        <a href="/">Pinki Biswas</a> 
        </div>

        {/* Desktop Menu */}
        <div className="space-x-6 hidden md:flex">
          <a href="" className={getLinkClass("home")}>Home</a>
          <a href="#about" className={getLinkClass("about")}>About</a>
          <a href="#skills" className={getLinkClass("skills")}>Skills</a>
          <a href="#projects" className={getLinkClass("projects")}>Projects</a>
          <a href="#contact" className={getLinkClass("contact")}>Contact</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-blue-400 text-3xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <HiX /> : <HiMenu />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`flex flex-col md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-sm text-white text-center py-6 space-y-4 shadow-xl z-40 transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}
      >
        <a href="#" onClick={closeMenu} className={getLinkClass("home")}>Home</a>
        <a href="#about" onClick={closeMenu} className={getLinkClass("about")}>About</a>
        <a href="#skills" onClick={closeMenu} className={getLinkClass("skills")}>Skills</a>
        <a href="#projects" onClick={closeMenu} className={getLinkClass("projects")}>Projects</a>
        <a href="#contact" onClick={closeMenu} className={getLinkClass("contact")}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
