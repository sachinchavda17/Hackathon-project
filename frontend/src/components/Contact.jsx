import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-blue-700 mb-8">
          Get in Touch
        </h2>

        <div className="mt-10 max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-xl">
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
            <textarea
              placeholder="Your Message"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              rows="6"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-3 px-4 rounded-lg transition duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Follow Us
          </h3>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 transition duration-300 transform hover:scale-110"
            >
              <FaFacebookF className="text-4xl" />
            </a>
            <a
              href="#"
              className="text-blue-400 hover:text-blue-600 transition duration-300 transform hover:scale-110"
            >
              <FaTwitter className="text-4xl" />
            </a>
            <a
              href="#"
              className="text-pink-500 hover:text-pink-700 transition duration-300 transform hover:scale-110"
            >
              <FaInstagram className="text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
