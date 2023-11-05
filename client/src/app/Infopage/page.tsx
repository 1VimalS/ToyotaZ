"use client"

import Image from 'next/image'
import React, { useState, useEffect } from "react";
import MADD from "../../../public/MADD.jpeg";
import Link from 'next/link'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const InfoPage: React.FC = () => {
  const [response, setResponse] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {

    // Define a function to call the GPT API with the list of second elements
    const callGPTAPI = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/chat-with-gpt', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ user_input: "You are a driving instructor and advisor. You have just seen a report of a example driver and saw some notable things. You are to give driving feedback, and advice on how to help the person improve their driving in the future In this report you have seen the following things: 1) They exceeded the speed limit for a few seconds. 2) They lane drifted a couple of times in their drive....Remember to also give general advice too." }),
        });

        const data = await response.json();

        setResponse(data.chat_response);
        setIsLoading(false);
      } catch (error) {
        console.error("GPT API Error:", error);
      }
    };

    callGPTAPI();
  }, []);

  return (
    <div>
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
        <h1 className="text-4xl font-extrabold mb-4">Personal Assistant</h1>
        <p className="text-lg">
          Ask me anything
        </p>
      </div>
    </div>
    <section className="w-full p-8 bg-white rounded-lg shadow-lg mb-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
      </div>
      <div>
      </div>
    </section>
    <section className="w-full p-8 bg-white rounded-lg shadow-lg mb-6">
      <h2 className="text-3xl font-extrabold mb-4">Driving Advice</h2>
      {isLoading ? (
        <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
      ) : response ? (
        <p className='text-lg'>{response}</p>
      ) : null}
      <div className="text-left mt-4 space-y-4">
        <blockquote className="text-lg italic">
          
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
  </div>
  );
};

export default InfoPage;