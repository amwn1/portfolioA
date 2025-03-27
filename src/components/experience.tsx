import React from 'react';

const Experience: React.FC = () => {
  return (
   
    <div className="min-h-screen bg-[#003161] text-white py-16 px-4 md:px-8 lg:px-16">
      {/* Content container with max width for larger screens */}
      <div className="max-w-6xl mx-auto">
        
        
        <h2 className="text-4xl font-kalnia mb-12 text-center md:text-left">
          EXPERIENCE & EDUCATION
        </h2>
        
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          
          {/* Experience Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-kalnia text-[#98DED9] mb-6">Experience</h3>
            
            {/* Experience Item 1 */}
            <div className="border-l-2 border-[#98DED9] pl-6 pb-8 relative">
              {/* Timeline dot */}
              <div className="absolute w-4 h-4 bg-[#98DED9] rounded-full -left-2 top-0"></div>
              <h4 className="text-xl font-bold font-joan">Software Developer</h4>
              <p className="text-[#98DED9] font-joan">Mridanga media | 2024 - 2025</p>
              <p className="mt-2 font-joan">
              At Mridanga Media, I deliver high-quality software solutions to global clients using diverse tech stacks, demonstrating exceptional adaptability and technical expertise while consistently enhancing client revenue streams.
              </p>
            </div>
            
            {/* Experience Item 2 */}
            <div className="border-l-2 border-[#98DED9] pl-6 pb-8 relative">
              <div className="absolute w-4 h-4 bg-[#98DED9] rounded-full -left-2 top-0"></div>
              <h4 className="text-xl font-bold font-joan">Freelancer</h4>
              <p className="text-[#98DED9] font-joan">Present</p>
              <p className="mt-2 font-joan">
              Versatile developer bridging technical expertise with exceptional client management. I transform complex concepts into accessible solutions, adapting seamlessly to evolving requirements while guiding businesses through digital transformation with precision and confidence.
              </p>
            </div>
          </div>
          
          {/* Education Section */}
          <div className="space-y-8">
            <h3 className="text-2xl font-kalnia text-[#98DED9] mb-6">Education</h3>
            
            {/* Education Item 1 */}
            <div className="border-l-2 border-[#98DED9] pl-6 pb-8 relative">
              <div className="absolute w-4 h-4 bg-[#98DED9] rounded-full -left-2 top-0"></div>
              <h4 className="text-xl font-bold font-joan">High School</h4>
              <p className="text-[#98DED9] font-joan">Sairam Vidyalaya Madipakkam, Chennai | 2018 - 2020</p>
              <p className="mt-2 font-joan">
              Non-medical with Computer Science helped me develop a strong foundation in programming and problem-solving
              </p>
            </div>
            
            {/* Education Item 2 */}
            <div className="border-l-2 border-[#98DED9] pl-6 pb-8 relative">
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
            {['JavaScript', 'TypeScript', 'React', 'Node.js', 'Tailwind CSS', 'Git', 'Wordpress', 'AWS',].map((skill, index) => (
              <div key={index} className="bg-[#004080] p-3 rounded-md text-center font-joan">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;