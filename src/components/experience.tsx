import React, { useState } from 'react';
import { IoLogoJavascript, IoIosArrowDown } from 'react-icons/io';
import { FaReact, FaNodeJs, FaGitAlt, FaWordpress, FaAws } from 'react-icons/fa';
import { SiTypescript, SiCplusplus } from 'react-icons/si';
import { motion, AnimatePresence } from 'framer-motion';
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
      name: 'C++',
      icon: SiCplusplus,
      description: 'Writing efficient, performance-critical applications with strong memory management.'
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
      name: 'Git',
      icon: FaGitAlt,
      description: 'Version control and collaborative development workflows.'
    },
    {
      name: 'WordPress',
      icon: FaWordpress,
      description: 'Creating and customizing content management systems.'
    },
    {
      name: 'AWS',
      icon: FaAws,
      description: 'Helps with customizing hosting and cloud infrastructure.'
    },
  ];

  // Animation variants for container elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };

  // Animation variants for timeline items
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100
      }
    }
  };

  // Animation variants for the timeline dots
  const dotVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  // Experience and education data
  const experienceItems = [
    {
      id: 'exp1',
      title: "Software Developer",
      subtitle: "Mridanga Media | 2024 - 2025",
      description: "At Mridanga Media, I deliver high-quality software solutions to global clients using diverse tech stacks, demonstrating exceptional adaptability and technical expertise while consistently enhancing client revenue streams.",
      details: "• Developed and maintained web applications using React, TypeScript, and Node.js\n• Collaborated with cross-functional teams to deliver projects on time\n• Implemented responsive designs using Tailwind CSS\n• Optimized application performance and improved user experience"
    },
    {
      id: 'exp2',
      title: "Freelancer",
      subtitle: "Present",
      description: "Versatile developer bridging technical expertise with exceptional client management. I transform complex concepts into accessible solutions, adapting seamlessly to evolving requirements while guiding businesses through digital transformation with precision and confidence.",
      details: "• Built custom websites and web applications for diverse clients\n• Managed project timelines and client expectations\n• Implemented modern UI/UX designs with attention to detail\n• Provided ongoing maintenance and support for client projects"
    }
  ];

  const educationItems = [
    {
      id: 'edu1',
      title: "High School",
      subtitle: "Sairam Vidyalaya Madipakkam, Chennai | 2018 - 2020",
      description: "Non-medical with Computer Science helped me develop a strong foundation in programming and problem-solving.",
      details: "• Completed high school with a focus on Computer Science\n• Participated in programming competitions and hackathons\n• Developed foundational skills in algorithms and data structures\n• Graduated with honors and recognition for academic excellence"
    },
    {
      id: 'edu2',
      title: "Bachelor's in Computer Science",
      subtitle: "Lovely Professional University, Phagwara | 2020 - 2024",
      description: "Software developer integrating technical expertise in programming, data structures, and software development with interdisciplinary studies in Moral Philosophy, Work Ethics, Japanese Language, and Android Development, demonstrating balanced professional and personal growth through systematic pursuit of knowledge and skills.",
      details: "• Specialized in full-stack web development and mobile applications\n• Completed coursework in advanced algorithms, database systems, and software engineering\n• Participated in research projects focused on emerging technologies\n• Graduated with distinction and recognition for academic achievement"
    }
  ];

  return (
    <div className="min-h-screen bg-[#003161] text-white py-16 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl font-kalnia mb-12 text-center md:text-left"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          EXPERIENCE & EDUCATION
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          {/* Experience Section */}
          <div className="space-y-8 min-h-[300px]">
            <motion.h3
              className="text-2xl font-kalnia text-[#98DED9] mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Experience
            </motion.h3>
            <motion.div
              className="relative"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              {experienceItems.map(item => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  variants={itemVariants}
                  dotVariants={dotVariants}
                />
              ))}
            </motion.div>
          </div>
          {/* Education Section */}
          <div className="space-y-8 min-h-[300px]">
            <motion.h3
              className="text-2xl font-kalnia text-[#98DED9] mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Education
            </motion.h3>
            <motion.div
              className="relative"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
            >
              {educationItems.map(item => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  variants={itemVariants}
                  dotVariants={dotVariants}
                />
              ))}
            </motion.div>
          </div>
        </div>
        {/* Skills Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-kalnia text-[#98DED9] mb-6">Skills +</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, idx) => (
              <motion.div
                key={idx}
                className="bg-[#004080] p-4 rounded-md text-center font-joan relative transition-all duration-300 hover:bg-[#0056b3] group h-[100px] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring", damping: 12 }}
                whileHover={{ scale: 1.02, transition: { type: 'spring', stiffness: 260, damping: 20 } }}
              >
                <div className="w-full h-full relative">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 transition-all duration-400 ease-out group-hover:left-2 group-hover:translate-x-0 group-hover:top-1/2 group-hover:-translate-y-1/2">
                    <IconComponent icon={skill.icon} className="text-3xl text-white group-hover:text-[#98DED9] transition-colors duration-400" />
                  </div>
                  <div className="absolute top-12 left-0 right-0 text-center transition-opacity duration-300 ease-out group-hover:opacity-0">
                    {skill.name}
                  </div>
                  <div className="absolute inset-0 flex items-center pl-14 pr-2 opacity-0 transition-opacity duration-300 ease-in-out delay-[0ms] group-hover:opacity-100 group-hover:delay-[250ms]">
                    <p className="text-sm text-[#98DED9] text-left">{skill.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

interface TimelineItemProps {
  item: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    details: string;
  };
  variants: any;
  dotVariants: any;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, variants, dotVariants }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="pl-6 pb-8 relative"
      variants={variants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsExpanded(!isExpanded)}
      whileHover={{ x: 5, transition: { duration: 0.2 } }}
      style={{ cursor: 'pointer' }}
    >
      <motion.div 
        className="absolute left-0 top-0 w-0.5 bg-[#98DED9]"
        initial={{ height: 0 }}
        animate={{ height: isHovered ? '85%' : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ originY: 0 }}
      />
      <motion.div 
        className="absolute w-4 h-4 bg-[#98DED9] rounded-full"
        style={{ left: "-2px", top: "0", marginLeft: "-6px", zIndex: 10 }}
        variants={dotVariants}
        animate={isHovered
          ? { scale: 1.5, boxShadow: "0 0 8px 2px rgba(152, 222, 217, 0.7)" }
          : { scale: 1, boxShadow: "0 0 0px 0px rgba(152, 222, 217, 0)" }
        }
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="bg-[#004080]/30 p-4 rounded-md backdrop-blur-sm"
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      >
        <h4 className="text-xl font-bold font-joan">{item.title}</h4>
        <p className="text-[#98DED9] font-joan">{item.subtitle}</p>
        <p className="mt-2 font-joan">{item.description}</p>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 border-t border-[#98DED9]/30 pt-3"
            >
              <p className="text-sm text-white/90 font-joan whitespace-pre-line">{item.details}</p>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div className="mt-2 text-[#98DED9] flex justify-end" animate={{ opacity: isHovered ? 1 : 0.7 }}>
          <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }} className="text-lg">
            <IconComponent icon={IoIosArrowDown} className="text-lg" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
