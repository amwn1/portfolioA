import React from "react";
import profileImage from "../resources/images/profile21.png"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

const AboutMe: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#000B58] flex items-center justify-center relative px-4">
      {/* Container for Image and Content */}
      <div className="flex items-center justify-center relative max-w-5xl mx-auto">
        {/* Image */}
        <div className="relative hidden md:block">
          <img
            src={profileImage}
            alt="Profile"
            className="w-[300px] md:w-[400px] lg:w-[500px] h-auto object-cover z-20 relative"
            style={{ transform: 'translateX(117px)' }}
          />
        </div>
        
        {/* Content Box */}
        <div className="bg-[#98DED9] p-6 md:p-8 shadow-lg w-full max-w-2xl z-10 relative -ml-10 md:-ml-16 flex">
          {/* Example Text */}
          <div className="flex-none mr-8 md:mr-32">
            {/* This div is intentionally left blank for spacing */}
          </div>
          {/* About Me Content */}
          <div className="flex-1 w-full pl-8 pr-8">
            <h1 className="text-3xl font-kalnia mb-6">ABOUT ME</h1>
            <p className="text-md font-joan">
              I am a dedicated software developer with a knack for creating efficient and scalable solutions. My expertise spans both front-end and back-end technologies, allowing me to deliver comprehensive and user-friendly applications. I thrive in collaborative environments, leveraging agile methodologies to enhance team productivity and drive innovation. My commitment to continuous learning ensures I stay ahead of industry trends, bringing the latest insights to every project. With a focus on quality and performance, I am passionate about building software that not only meets but exceeds expectations. Let's connect to explore how I can contribute to your next groundbreaking project.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com" className="text-white">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://www.instagram.com" className="text-white">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="https://www.github.com" className="text-white">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
