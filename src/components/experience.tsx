import React from 'react';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact, FaNodeJs, FaGitAlt, FaWordpress, FaAws } from "react-icons/fa";
import { SiTypescript } from 'react-icons/si';
import { BiLogoTailwindCss } from "react-icons/bi";
import { motion } from 'framer-motion';
import IconComponent from './IconComponent'; // Import the IconComponent

const Experience: React.FC = () => {
  const skills = [
    { name: 'JavaScript', icon: IoLogoJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React', icon: FaReact },
    { name: 'Node.js', icon: FaNodeJs },
    { name: 'Tailwind CSS', icon: BiLogoTailwindCss },
    { name: 'Git', icon: FaGitAlt },
    { name: 'Wordpress', icon: FaWordpress },
    { name: 'AWS', icon: FaAws }, // Keeping FaAws as requested
  ];

  return (
    <div className="min-h-screen bg-[#003161] text-white py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#003161] to-[#0056b3] opacity-50 animate-pulse"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-kalnia mb-12 text-center md:text-left">
          EXPERIENCE & EDUCATION
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Experience Section */}
          <div className="space-y-8 min-h-[300px]">
            <h3 className="text-2xl font-kalnia text-[#98DED9] mb-6">Experience</h3>
            {/* Experience Item 1 */}
            <div className="border-l-2 border-[#98DED9] pl-6 pb-8 relative transition-transform duration-300 hover:scale-105">
              <div className="absolute w-4 h-4 bg-[#98DED9] rounded-full -left-2 top-0"></div>
              <h4 className="text-xl font-bold font-joan">Software Developer</h4>
              <p className="text-[#98DED9] font-joan">Mridanga Media | 2024 - 2025</p>
              <p className="mt-2 font-joan">
                At Mridanga Media, I deliver high-quality software solutions to global clients using diverse tech stacks, demonstrating exceptional adaptability and technical expertise while consistently enhancing client revenue streams.
              </p>
            </div>
            {/* Experience Item 2 */}
            <div className="border-l-2 border-[#98DED9] pl-6 pb-8 relative transition-transform duration-300 hover:scale-105">
              <div className="absolute w-4 h-4 bg-[#98DED9] rounded-full -left-2 top-0"></div>
              <h4 className="text-xl font-bold font-joan">Freelancer</h4>
              <p className="text-[#98DED9] font-joan">Present</p>
              <p className="mt-2 font-joan">
                Versatile developer bridging technical expertise with exceptional client management. I transform complex concepts into accessible solutions, adapting seamlessly to evolving requirements while guiding businesses through digital transformation with precision and confidence.
              </p>
            </div>
          </div>
          {/* Education Section */}
          <div className="space-y-8 min-h-[300px]">
            <h3 className="text-2xl font-kalnia text-[#98DED9] mb-6">Education</h3>
            {/* Education Item 1 */}
            <div className="border-l-2 border-[#98DED9] pl-6 pb-8 relative transition-transform duration-300 hover:scale-105">
              <div className="absolute w-4 h-4 bg-[#98DED9] rounded-full -left-2 top-0"></div>
              <h4 className="text-xl font-bold font-joan">High School</h4>
              <p className="text-[#98DED9] font-joan">Sairam Vidyalaya Madipakkam, Chennai | 2018 - 2020</p>
              <p className="mt-2 font-joan">
                Non-medical with Computer Science helped me develop a strong foundation in programming and problem-solving.
              </p>
            </div>
            {/* Education Item 2 */}
            <div className="border-l-2 border-[#98DED9] pl-6 pb-8 relative transition-transform duration-300 hover:scale-105">
              <div className="absolute w-4 h-4 bg-[#98DED9] rounded-full -left-2 top-0"></div>
              <h4 className="text-xl font-bold font-joan">Bachelor's in Computer Science</h4>
              <p className="text-[#98DED9] font-joan">Lovely Professional University, Phagwara | 2020 - 2024</p>
              <p className="mt-2 font-joan">
                Software developer integrating technical expertise in programming, data structures, and software development with interdisciplinary studies in Moral Philosophy, Work Ethics, Japanese Language, and Android Development, demonstrating balanced professional and personal growth through systematic pursuit of knowledge and skills.
              </p>
            </div>
          </div>
        </div>
        {/* Skills Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-kalnia text-[#98DED9] mb-6">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* Skill Items */}
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-[#004080] p-3 rounded-md text-center font-joan flex flex-col items-center justify-center transition-transform duration-300 hover:bg-[#0056b3] hover:scale-110 hover:text-[#98DED9]"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <div className="text-3xl mb-2">
                  <IconComponent icon={skill.icon} className="text-3xl" />
                </div>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;