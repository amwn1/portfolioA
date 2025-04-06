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
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-transform flex justify-center items-center">
            <div className="h-48 w-48 relative">
                <img 
                    src={imageUrl} 
                    alt={alt}
                    className="absolute inset-0 w-full h-full object-contain"
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;