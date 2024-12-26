import React from "react";
import profileImage from "../resources/images/profile21.png"; // Replace with your image path

const AboutMe: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#000B58] flex items-center justify-center">
      {/* Image */}
      <div className="flex justify-center items-center">
        <img
          src={profileImage}
          alt="Profile"
          className="w-[400px] h-auto object-cover z-20"
        />
      </div>
      {/* Content Box */}
      <div className="flex justify-center items-center p-8">
        <div className="bg-[#98DED9] p-8 shadow-lg max-w-lg z-10 relative">
          <h1 className="text-3xl font-bold mb-4">ABOUT ME</h1>
          <p className="text-lg">
            I am a dedicated software developer with a knack for creating efficient and scalable solutions. My expertise spans both front-end and back-end technologies, allowing me to deliver comprehensive and user-friendly applications. I thrive in collaborative environments, leveraging agile methodologies to enhance team productivity and drive innovation. My commitment to continuous learning ensures I stay ahead of industry trends, bringing the latest insights to every project. With a focus on quality and performance, I am passionate about building software that not only meets but exceeds expectations. Let's connect to explore how I can contribute to your next groundbreaking project.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-black">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-black">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-black">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
