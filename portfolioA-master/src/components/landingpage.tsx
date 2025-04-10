import React from "react";
import profileImage from "../resources/images/profile.png";

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-[#000B58] to-[#003161] text-white overflow-hidden">
      <div className="p-8 lg:w-1/2 lg:pl-40">
        <h2 className="text-4xl uppercase mb-8 lg:mb-32 font-kalnia">
          Developer
        </h2>
        <h1 className="text-8xl  mb-2 font-kalnia">AMAN</h1>
        <h1 className="text-8xl  mb-8 font-kalnia">MALIK</h1>
        <div className="flex mt-4 space-x-4">
          <button className="bg-[#98DED9] text-black px-4 py-1 rounded-md w-28 font-inter">
            About Me
          </button>
          <a
            href="#"
            download
            className="border border-white px-4 py-1 rounded-md w-28 text-center font-inter"
          >
            CV
          </a>
        </div>
        <div className="mt-8 space-y-4">
          <a
            href="#resume"
            className="flex items-center space-x-3 group transition-transform duration-300 transform hover:scale-105"
          >
            <svg
              className="h-6 w-6 stroke-current text-white group-hover:text-[#98DED9] transition duration-200 ease-in-out"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
            <span className="text-xl group-hover:text-[#98DED9] transition duration-200 ease-in-out font-kaisei">
              Resume
            </span>
          </a>
          <a
            href="#education"
            className="flex items-center space-x-3 group transition-transform duration-300 transform hover:scale-105"
          >
            <svg
              className="h-6 w-6 stroke-current text-white group-hover:text-[#98DED9] transition duration-200 ease-in-out"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
            <span className="text-xl group-hover:text-[#98DED9] transition duration-200 ease-in-out font-kaisei">
              Education
            </span>
          </a>
          <a
            href="#projects"
            className="flex items-center space-x-3 group transition-transform duration-300 transform hover:scale-105"
          >
            <svg
              className="h-6 w-6 stroke-current text-white group-hover:text-[#98DED9] transition duration-200 ease-in-out"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
            </svg>
            <span className="text-xl group-hover:text-[#98DED9] transition duration-200 ease-in-out font-kaisei">
              Projects
            </span>
          </a>
        </div>
      </div>
      <div className="lg:w-1/2 flex bg-[#003161] justify-center">
        <img
          src={profileImage}
          alt="Profile"
          className="w-3/4 lg:w-full object-cover"
        />
      </div>
    </div>
  );
};

export default LandingPage;
