import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-blue-600 p-4 fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl cursor-pointer">
          <Link to={"/"}>HackOut Club</Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link to="#about" className="text-white hover:text-gray-200">
            About
          </Link>
          <Link to="#why-join" className="text-white hover:text-gray-200">
            Why Join
          </Link>
          <Link to="#events" className="text-white hover:text-gray-200">
            Events
          </Link>
          <Link to="#testimonials" className="text-white hover:text-gray-200">
            Testimonials
          </Link>
          <Link to="#how-to-join" className="text-white hover:text-gray-200">
            How to Join
          </Link>
          <Link to="#contact" className="text-white hover:text-gray-200">
            Contact
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 bg-blue-700 transition-transform duration-300 ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-white text-2xl"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>
        <div className="flex flex-col items-center space-y-4 mt-12">
          <Link to="/" className="text-white text-xl hover:text-gray-200" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="#about" className="text-white text-xl hover:text-gray-200" onClick={toggleMenu}>
            About
          </Link>
          <Link to="#why-join" className="text-white text-xl hover:text-gray-200" onClick={toggleMenu}>
            Why Join
          </Link>
          <Link to="#events" className="text-white text-xl hover:text-gray-200" onClick={toggleMenu}>
            Events
          </Link>
          <Link to="#testimonials" className="text-white text-xl hover:text-gray-200" onClick={toggleMenu}>
            Testimonials
          </Link>
          <Link to="#how-to-join" className="text-white text-xl hover:text-gray-200" onClick={toggleMenu}>
            How to Join
          </Link>
          <Link to="#contact" className="text-white text-xl hover:text-gray-200" onClick={toggleMenu}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
