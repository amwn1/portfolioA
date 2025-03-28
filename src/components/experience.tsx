import React from 'react';
import { IoLogoJavascript } from 'react-icons/io';
import { FaReact, FaNodeJs, FaGitAlt, FaWordpress, FaAws } from "react-icons/fa";
import { SiTypescript } from 'react-icons/si';
import { BiLogoTailwindCss } from "react-icons/bi";
import { motion } from 'framer-motion';
import IconComponent from './IconComponent';

const Experience: React.FC = () => {
  const skills = [
    {
      name: 'JavaScript',
      icon: IoLogoJavascript,
      description: 'Building interactive web applications and dynamic user interfaces.'
    },
    {
      name: 'TypeScript',
      icon: SiTypescript,
      description: 'Adding type safety to JavaScript for more robust applications.'
    },
    {
      name: 'React',
      icon: FaReact,
      description: 'Creating reusable UI components for modern web applications.'
    },
    {
      name: 'Node.js',
      icon: FaNodeJs,
      description: 'Building scalable server-side applications and APIs.'
    },
    {
      name: 'Tailwind CSS',
      icon: BiLogoTailwindCss,
      description: 'Rapidly building custom user interfaces with utility classes.'
    },
    {
      name: 'Git',
      icon: FaGitAlt,
      description: 'Version control and collaborative development workflows.'
    },
    {
      name: 'Wordpress',
      icon: FaWordpress,
      description: 'Creating and customizing content management systems.'
    },
    {
      name: 'AWS',
      icon: FaAws,
      description: 'Helps with customizing hosting and cloud infrastructure.'
    },
  ];

  return (
    <div className="min-h-screen bg-[#003161] text-white py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Skill Items */}
            {skills.map((skill, index) => (
  <motion.div
    key={index}
    className="bg-[#004080] p-4 rounded-md text-center font-joan relative transition-all duration-300 hover:bg-[#0056b3] group h-[100px] overflow-hidden"
    whileHover={{
      scale: 1.02,
      transition: {
        type: 'spring',
        stiffness: 260,
        damping: 20
      }
    }}
  >
    {/* Container with relative positioning */}
    <div className="w-full h-full relative">
      {/* Icon - centered at top by default, moves to left on hover */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 transition-all duration-400 ease-out group-hover:left-2 group-hover:translate-x-0 group-hover:top-1/2 group-hover:-translate-y-1/2">
        <IconComponent icon={skill.icon} className="text-3xl text-white group-hover:text-[#98DED9] transition-colors duration-400" />
      </div>
      
      {/* Skill name - centered, fades out on hover */}
      <div className="absolute top-12 left-0 right-0 text-center transition-opacity duration-300 ease-out group-hover:opacity-0">
        {skill.name}
      </div>
      
      {/* Description - hidden by default, appears on hover with delay */}
      <div className="absolute inset-0 flex items-center pl-14 pr-2 opacity-0 transition-opacity duration-300 ease-in-out delay-[0ms] group-hover:opacity-100 group-hover:delay-[190ms]">
        <p className="text-sm text-[#98DED9] text-left">
          {skill.description}
        </p>
      </div>
    </div>
  </motion.div>
))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;