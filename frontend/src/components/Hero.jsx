import React from "react";
import homeImage from "../assets/home.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
    id="home"
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${homeImage})` }}
    >
      {/* Inline styles for animations */}
      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .fade-in-up {
            opacity: 0;
            animation: fadeInUp 1s ease-out forwards;
          }
          .delay-1 {
            animation-delay: 0.3s;
          }
          .delay-2 {
            animation-delay: 0.6s;
          }
          .delay-3 {
            animation-delay: 0.9s;
          }
        `}
      </style>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70"></div>

      {/* Content */}
      <div className="flex items-center justify-center h-full relative z-10">
        <div className="text-center text-white px-4 sm:px-8 md:px-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 fade-in-up delay-1">
            Join HackOut Club Today!
          </h1>
          <p className="text-lg md:text-2xl mb-6 fade-in-up delay-2">
            Empower your journey with knowledge, networking, and new experiences.
          </p>
          <Link
            to="/how-to-join"
            className="inline-block bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 fade-in-up delay-3"
          >
            Join Us Now
          </Link>
        </div>
      </div>

      {/* Decorative Element: Optional */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
};

export default Hero;
