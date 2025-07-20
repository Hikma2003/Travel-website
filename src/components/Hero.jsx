// src/components/Hero.jsx
import React from 'react';
// Make sure this path is correct based on where you saved your hero image
import heroImage from '../assets/hero-traveler.jpg';

const Hero = () => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between py-16 px-8 md:px-16 min-h-screen overflow-hidden">
      {/* Abstract Background Element (Orange Gradient Swirl) */}
      {/* This is a simple approximation. In a real project, you'd use an SVG or more complex styling. */}
      <div className="absolute top-0 right-0 w-3/5 h-full bg-gradient-to-br from-orange-100 to-white rounded-bl-full transform translate-x-1/4 scale-125 opacity-70"></div>
      <div className="absolute -top-10 right-0 w-1/4 h-1/4 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div> {/* Placeholder for animated blob */}


      {/* Left Content - Text and Buttons */}
      <div className="w-full md:w-1/2 pr-0 md:pr-12 mb-12 md:mb-0 z-10 text-center md:text-left">
        <h3 className="text-orange-500 font-bold text-lg mb-4 uppercase tracking-wider">
          Best Destinations Around The World
        </h3>
        <h1 className="text-gray-900 text-5xl md:text-6xl font-bold leading-tight mb-6">
          Travel, <span className="text-orange-500">enjoy</span> and live a new and full life
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto md:mx-0">
          Built Wicket longer admire do barton vanity itself do in it. Preferred to sportamen it engrossed listening. Park gate sell they west hard for the.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-yellow-500 text-white px-8 py-4 rounded-md shadow-lg hover:bg-yellow-600 transition duration-300 font-semibold">
            Find out more
          </button>
          <button className="flex items-center space-x-3 text-gray-800 hover:text-gray-900 font-semibold transition-colors duration-200">
            <div className="bg-red-500 text-white p-3 rounded-full shadow-lg">
              {/* Play icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197 2.132A1 1 0 0010 14.128V9.872a1 1 0 001.555-.832l3.197 2.132c.118.079.118.271 0 .35z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span>Play Demo</span>
          </button>
        </div>
      </div>

      {/* Right Content - Image */}
      <div className="w-full md:w-1/2 flex justify-center items-center relative z-10 mt-8 md:mt-0">
        <img
          src={heroImage}
          alt="Traveler with luggage"
          className="w-full max-w-sm md:max-w-xl h-auto object-contain transform -rotate-6 md:rotate-0" /* Added a slight rotation for visual interest */
        />
        {/* You might add more abstract shapes here later */}
      </div>
    </section>
  );
};

export default Hero;