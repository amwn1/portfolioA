import React from 'react';
import techcitymobilelogo from "../resources/images/techcitymobilelogo.png";
interface ProjectProps {
  imageUrl: string;
  alt: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ imageUrl, alt }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform">
      {/* Image placeholder - replace with your actual image */}
      <div className="h-96 w-full bg-gray-200 flex items-center justify-center">
        <div className="text-center p-2">
          <p className="text-sm text-gray-500">Image Placeholder</p>
          <p className="text-xs text-gray-400">{alt}</p>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      imageUrl: "techcitymobilelogo",
      alt: "Project One Logo"
    },
    {
      imageUrl: "/path-to-image2.png",
      alt: "Project Two Logo"
    },
    {
      imageUrl: "/path-to-image3.png",
      alt: "Project Three Logo"
    },
    {
      imageUrl: "/path-to-image4.png",
      alt: "Project Four Logo"
    }
  ];

  return (
    <section id="projects" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;