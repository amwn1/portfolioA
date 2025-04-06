import React from 'react';
import techcitymobilelogo from "../resources/images/techcitymobilelogo.png";
import grclogo from "../resources/images/grclogo.png";
import vihelogo from "../resources/images/vihelogo.png";
import oneprofitlogo from "../resources/images/oneprofitlogo.png";

interface ProjectProps {
  imageUrl: string;
  alt: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ imageUrl, alt }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform flex justify-center items-center p-4 border-3 border-solid border-black"
      style={{ height: '16rem', width: '15rem' }} 
    >
      <div className="flex justify-center items-center h-full w-full">
        <img
          src={imageUrl}
          alt={alt}
          className="max-h-32 max-w-32 object-contain"
        />
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      imageUrl: techcitymobilelogo,
      alt: "Tech City Mobile Logo"
    },
    {
      imageUrl: grclogo,
      alt: "GR&C Logo"
    },
    {
      imageUrl: vihelogo,
      alt: "Vihe Logo"
    },
    {
      imageUrl: oneprofitlogo,
      alt: "One Profit Logo"
    }
  ];

  return (
    <section id="projects" className="py-8 bg-gray-50 min-h-screen flex justify-center items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transform transition-transform ${
                index % 2 === 0 ? 'justify-self-end' : 'justify-self-start'
              }`}
            >
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;