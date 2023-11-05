"use client"

import Image from 'next/image'
import React, { useState } from "react";
import STATE from "../../../public/StateFarm_3D.jpg";
import Link from "next/link"
import back from "../../../public/back.png"

const InfoPage: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`bg-${isDarkMode ? 'gray' : 'white'}-100 text-${isDarkMode ? 'white' : 'black'} h-screen flex flex-col items-center transition-all duration-500`}>
          <Link href="/dashboard">
      <div className="absolute z-10 left-5 pt-[20px] w-[20px] top-4">
      <Image src={back} />
      </div>
    </Link>
      <button
        onClick={toggleDarkMode}
        className={`absolute top-4 right-4 p-2 bg-${isDarkMode ? 'white' : 'gray'}-800 text-${isDarkMode ? 'gray' : 'white'} hover:bg-${isDarkMode ? 'gray' : 'white'} hover:text-${isDarkMode ? 'white' : 'gray'} rounded-full transition-all duration-300`}
      >
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <div className="w-full h-64 bg-indigo-500 mb-6 relative">
        <Image
          src={STATE}
          alt="Top Image"
          className="object-cover w-full h-full"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-3xl font-extrabold mb-4">State Farm + <br></br> MADD</h1>
          <p className="text-lg">
            Partnering for a better future.
          </p>
        </div>
      </div>
      <section className="w-full p-8 bg-white rounded-lg shadow-lg mb-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-extrabold mb-4">About the Program</h2>
          <p className="text-lg mb-4">
          We are dedicated to reducing the number of impared driving related accidents and to do this we are partnering with Mothers Against Drunk Driving (MADD). If users choose to link thier MADD acount to thier insurance they will get policy discounts based on thier MADD safety score.
          </p>
          <a href="https://www.statefarm.com/insurance/auto" target="_blank" className="text-blue-500 hover:underline">
            Learn More
          </a>
        </div>
    </section>


      <section className="w-full p-8 bg-gray-100 rounded-lg shadow-lg">
        <h3 className="text-3xl font-extrabold mb-4">Link Account</h3>
        <form className="mt-4 space-y-4">
          <input
            type="number"
            placeholder="Account Number"
            className="w-full p-3 border border-gray-300 rounded-md"/>
        <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md"/>
            <div className="bg-red-500 p-4 rounded-lg text-center">
                <button className="text-white font-bold text-2xl">
                  Start Earning
                </button>
            </div>

        </form>
      </section>
    </div>
  );
};

export default InfoPage;