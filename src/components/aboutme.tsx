import React from "react";
import profileImage from "../resources/images/profile21.png"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
// skill icons
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript, SiCplusplus } from "react-icons/si";
import { FaReact, FaNodeJs, FaGitAlt, FaWordpress, FaAws,FaEllipsisH } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import IconComponent from "./IconComponent";

const skills = [
  { name: "JavaScript", icon: IoLogoJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "C++", icon: SiCplusplus },
  { name: "React", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "Tailwind CSS", icon: BiLogoTailwindCss },
  { name: "Git", icon: FaGitAlt },
  { name: "WordPress", icon: FaWordpress },
  { name: "AWS", icon: FaAws },
  { name: "And More+", icon: FaEllipsisH }
];

const AboutMe: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#000B58] flex items-center justify-center relative px-4">
      <div className="flex items-center justify-center relative max-w-5xl mx-auto">
        <div className="relative hidden md:block">
          <img
            src={profileImage}
            alt="Profile"
            className="w-[300px] md:w-[400px] lg:w-[500px] h-auto object-cover z-20 relative"
            style={{ transform: 'translateX(117px)' }}
          />
        </div>
        
        <div className="bg-[#98DED9] p-6 md:p-8 shadow-lg w-full max-w-2xl z-10 relative -ml-10 md:-ml-16 flex">
          <div className="flex-none mr-8 md:mr-32" />

          <div className="flex-1 pl-8 pr-8">
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

          <div className="flex-none flex flex-col space-y-4 pl-8">
            <h2 className="text-xl font-kalnia mb-2 text-[#000B58]">Skills</h2>
            {skills.map(({ name, icon }) => (
              <div key={name} className="flex items-center space-x-3">
                <IconComponent icon={icon} className="text-2xl text-[#000B58]" />
                <span className="font-joan text-md text-[#000B58]">{name}</span>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
