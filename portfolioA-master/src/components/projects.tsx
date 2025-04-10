import React, { useRef } from "react";
import techcitymobilelogo from "../resources/images/techcitymobilelogo.png";
import grclogo from "../resources/images/grclogo.png";
import vihelogo from "../resources/images/vihelogo.png";
import oneprofitlogo from "../resources/images/oneprofitlogo.png";

interface ProjectProps {
  imageUrl: string;
  alt: string;
  link: string;
  buttonSide: "left" | "right";
}

const ProjectCard: React.FC<{ imageUrl: string; alt: string }> = ({ imageUrl, alt }) => {
  return (
    <div
      className="bg-white shadow-md overflow-hidden flex justify-center items-center border-2 border-solid border-black transition-transform duration-500"
      style={{ width: "15rem", height: "16rem" }}
    >
      <img src={imageUrl} alt={alt} className="max-h-32 max-w-32 object-contain" />
    </div>
  );
};

const Projects: React.FC = () => {
  const projects: ProjectProps[] = [
    {
      imageUrl: techcitymobilelogo,
      alt: "Tech City Mobile Logo",
      link: "https://techcitymobile.example.com",
      buttonSide: "left",
    },
    {
      imageUrl: grclogo,
      alt: "GR&C Logo",
      link: "https://grc.example.com",
      buttonSide: "right",
    },
    {
      imageUrl: vihelogo,
      alt: "Vihe Logo",
      link: "https://vihe.example.com",
      buttonSide: "left",
    },
    {
      imageUrl: oneprofitlogo,
      alt: "One Profit Logo",
      link: "https://oneprofit.example.com",
      buttonSide: "right",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  return (
    <section
      id="projects"
      className="py-8 bg-gray-50 min-h-screen flex justify-center items-center"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-medium font-kalnia text-right mb-8">
          My recent works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            // The wrapper remains exactly the size of the tile and is relative for absolute positioning.
            <div
              key={index}
              onMouseEnter={() => {
                // Clear any pending timeout
                if (timeoutRef.current) {
                  clearTimeout(timeoutRef.current);
                }
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                // Delay the resetting of hovered state by 700ms
                timeoutRef.current = setTimeout(() => {
                  setHoveredIndex(null);
                }, 700); // <-- Adjust the delay here (700ms)
              }}
              className={`
                relative inline-block overflow-visible transition-transform duration-500
                ${index % 2 === 0 ? "justify-self-end md:mt-8" : "justify-self-start md:-mt-4"}
                ${hoveredIndex !== null && hoveredIndex !== index ? "opacity-30" : "opacity-100"}
                ${hoveredIndex === index ? "scale-105" : "scale-100"}
              `}
              style={{ width: "15rem", height: "16rem" }}
            >
              {/* The tile is wrapped in a higher z-index container */}
              <div className="z-10">
                <ProjectCard imageUrl={project.imageUrl} alt={project.alt} />
              </div>

              {/* Buttons container: positioned completely outside the tile on the side */}
              <div
                className={`
                  absolute top-1/2 -translate-y-1/2 transition-opacity duration-500 ease-in-out
                  ${project.buttonSide === "left" ? "right-full" : "left-full"}
                  ${hoveredIndex === index ? "opacity-100" : "opacity-0"}
                `}
              >
                <div className="flex flex-col gap-1">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-w-[8rem] bg-[#000B58] text-white py-2 px-3 text-center text-base font-bold rounded-none"
                  >
                    Visit Site
                  </a>
                  <a
                    href="#"
                    className="min-w-[8rem] bg-[#000B58] text-white py-2 px-3 text-center text-base font-bold rounded-none"
                  >
                    More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
