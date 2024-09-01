import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-lg font-semibold mb-4">
            &copy; {new Date().getFullYear()} HackOut Club. All rights reserved.
          </p>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-gray-200 transition duration-300">
              <FaFacebookF className="text-xl" />
            </a>
            <a href="#" className="hover:text-gray-200 transition duration-300">
              <FaTwitter className="text-xl" />
            </a>
            <a href="#" className="hover:text-gray-200 transition duration-300">
              <FaInstagram className="text-xl" />
            </a>
            <a href="#" className="hover:text-gray-200 transition duration-300">
              <FaLinkedinIn className="text-xl" />
            </a>
          </div>
          <div className="text-sm">
            <a href="#" className="hover:text-gray-200 transition duration-300 mx-3">
              Privacy Policy
            </a>
            |
            <a href="#" className="hover:text-gray-200 transition duration-300 mx-3">
              Terms of Service
            </a>
            {/* Add more footer links as needed */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
