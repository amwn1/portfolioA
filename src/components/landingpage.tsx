// src/components/landingpage.tsx
import React from "react";
import profileImage from "../resources/images/profile.png";

const Landingpage: React.FC = () => {
  return (
    <>
      {/* Hover effect CSS */}
      <style>{`
        .custom-button {
          position: relative;
          overflow: hidden;
          transition: transform 300ms ease, color 300ms ease, border-color 300ms ease, background-color 300ms ease;
          --slide-duration: 0ms;
        }
        .custom-button:hover {
          --slide-duration: 300ms;
        }
        .custom-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: white;
          z-index: -1;
          transition: transform var(--slide-duration) ease-in;
        }
        .custom-button-left::before {
          transform: translateX(-100%);
        }
        .custom-button-right::before {
          transform: translateX(100%);
        }
        .custom-button:hover::before {
          transform: translateX(0);
        }
        .custom-button:hover {
          color: black !important;
          background-color: white !important;
          border: 2px solid black !important;
          font-family: "kalnia", sans-serif !important;
          transform: scale(1.05);
        }
      `}</style>

      <div className="h-screen flex flex-col lg:flex-row items-center justify-center bg-gradient-to-r from-[#000B58] to-[#003161] text-white overflow-hidden">
        {/* Left Column */}
        <div className="p-8 lg:w-1/2 lg:pl-40">
          <h2 className="text-4xl uppercase mb-8 lg:mb-32 font-kalnia">
            Developer
          </h2>
          <h1 className="text-8xl mb-2 font-kalnia">AMAN</h1>
          <h1 className="text-8xl mb-8 font-kalnia">MALIK</h1>

          {/* Primary Buttons */}
          <div className="flex mt-4 space-x-4">
            {/* scroll to #about */}
            <a href="#about">
              <button
                className="bg-[#98DED9] text-black px-4 py-1 rounded-md w-32 font-inter custom-button custom-button-left"
              >
                About Me
              </button>
            </a>

            {/* download CV */}
            <a
              href="/CV_aman.pdf"
              download
              className="border border-white px-4 py-1 rounded-md w-32 text-center font-inter custom-button custom-button-right"
            >
              CV
            </a>
          </div>

          {/* Secondary Links */}
          <div className="mt-8 space-y-4">
            {/* download resume */}
            <a
              href="/resume.pdf"
              download
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

            {/* scroll to #experience */}
            <a
              href="#experience"
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
                Experience
              </span>
            </a>

            {/* scroll to #projects */}
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

            {/* scroll to #contact */}
            <a
              href="#contact"
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
                Contact
              </span>
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 flex bg-[#003161] justify-center">
          <img
            src={profileImage}
            alt="Profile"
            className="w-3/4 lg:w-full object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default Landingpage;
