"use client"

import Image from 'next/image'
import React, { useState } from "react";
import MADD from "../../../public/MADD.jpeg";
import Link from 'next/link'

const InfoPage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`bg-${isDarkMode ? 'gray' : 'white'}-100 text-${isDarkMode ? 'white' : 'black'} h-screen flex flex-col items-center transition-all duration-500`}>
      <button
        onClick={toggleDarkMode}
        className={`absolute top-4 right-4 p-2 bg-${isDarkMode ? 'white' : 'gray'}-800 text-${isDarkMode ? 'gray' : 'white'} hover:bg-${isDarkMode ? 'gray' : 'white'} hover:text-${isDarkMode ? 'white' : 'gray'} rounded-full transition-all duration-300`}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div className="w-full h-64 bg-indigo-500 mb-6 relative">
        <Image
          src={MADD}
          alt="Top Image"
          className="object-cover w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-4xl font-extrabold mb-4">Welcome to Our Site</h1>
          <p className="text-lg">
            Discover everything you need to know.
          </p>
        </div>
      </div>
      <section className="w-full p-8 bg-white rounded-lg shadow-lg mb-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-extrabold mb-4">About Us</h2>
          <p className="text-lg mb-4">
            Our mission is to provide you with the best information possible.
          </p>
          <a href="/learn-more" className="text-blue-500 hover:underline">
            Learn More
          </a>
        </div>
        <div>
          <Image
            src={MADD}
            alt="About Us Image"
            className="object-cover w-full h-64 rounded-lg"
          />
        </div>
      </section>
      <section className="w-full p-8 bg-gray-100 rounded-lg shadow-lg mb-6">
        <h2 className="text-3xl font-extrabold mb-4">Our Purpose</h2>
        <p className="text-lg">
          We are dedicated to making the world a better place through our work.
        </p>
      </section>

      <section className="w-full p-8 bg-white rounded-lg shadow-lg mb-6">
        <h2 className="text-3xl font-extrabold mb-4">Quotes</h2>
        <div className="text-left mt-4 space-y-4">
          <blockquote className="text-lg italic">
            "Quote 1"
          </blockquote>
          <blockquote className="text-lg italic">
            "Quote 2"
          </blockquote>
        </div>
      </section>

      <section className="w-full p-8 bg-gray-100 rounded-lg shadow-lg mb-6">
        <h2 className="text-3xl font-extrabold mb-4">Victim Assistance</h2>
        <div className="mt-4 space-y-4">
          <div className="bg-red-500 p-4 rounded-lg"> {/* Red block */}
            <button>
              <Link href="https://madd.org/victim-assistance/">
                  Click here for more Information
              </Link>
            </button>
          </div>
        </div>
      </section>

      <section className="w-full p-8 bg-gray-100 rounded-lg shadow-lg">
        <h2 className="text-3xl font-extrabold mb-4">Stay Connected</h2>
        <form className="mt-4 space-y-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 border border-gray-300 rounded-md"/>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Subscribe
          </button>

        </form>
      </section>
    </div>
  );
};

export default InfoPage;


