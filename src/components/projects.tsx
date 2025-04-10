import React, { useState, useRef, useEffect } from "react";
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

//////////////////////////////////////////////
// Overlay Component for Tile Animation
//////////////////////////////////////////////
interface OverlayProps {
  project: ProjectProps;
  initialRect: DOMRect;
  onClose: () => void;
}

const TileOverlay: React.FC<OverlayProps> = ({ project, initialRect, onClose }) => {
  // We store the animated style in state, initially matching the tile's position/size.
  const [animStyle, setAnimStyle] = useState<React.CSSProperties>({
    position: "fixed",
    top: initialRect.top,
    left: initialRect.left,
    width: initialRect.width,
    height: initialRect.height,
    transition: "all 700ms ease",
    zIndex: 110,
  });

  // Trigger the animation (to top left with padding) after mounting.
  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimStyle((prev) => ({
        ...prev,
        top: "2rem",
        left: "2rem",
      }));
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#000B58",
        transition: "background-color 700ms ease",
        zIndex: 100,
      }}
    >
      <div style={animStyle}>
        {/* Render the entire tile */}
        <ProjectCard imageUrl={project.imageUrl} alt={project.alt} />
      </div>
      <button
        onClick={onClose}
        style={{
          position: "fixed",
          top: "1rem",
          right: "1rem",
          padding: "0.5rem 1rem",
          background: "white",
          color: "#000B58",
          border: "2px solid #000B58",
          fontFamily: "kalnia, sans-serif",
          cursor: "pointer",
          zIndex: 120,
        }}
      >
        Close
      </button>
    </div>
  );
};

//////////////////////////////////////////////
// Main Projects Component (Grid View)
//////////////////////////////////////////////
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

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<{ project: ProjectProps; rect: DOMRect } | null>(null);
  
  // Refs to store each tile element
  const tileRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const handleMoreClick = (index: number, project: ProjectProps) => {
    const tileEl = tileRefs.current[index];
    if (tileEl) {
      const rect = tileEl.getBoundingClientRect();
      setSelectedProject({ project, rect });
    }
  };

  return (
    <>
      <section
        id="projects"
        className="py-8 bg-gray-50 min-h-screen flex justify-center items-center"
      >
        {/* Custom CSS for button hover effects */}
        <style>{`
          .custom-button {
            position: relative;
            overflow: hidden;
            transition: transform 300ms ease, color 300ms ease, border-color 300ms ease;
            --slide-duration: 0ms;
          }
          .custom-button:hover {
            --slide-duration: 300ms;
          }
          .custom-button::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: white;
            z-index: -1;
            transition: transform var(--slide-duration) ease-in;
          }
          .custom-button-left::before {
            transform: translateX(-100%);
          }
          .custom-button-right::before {
            transform: translateX(100%);
          }
          .custom-button:hover::before {
            transform: translateX(0);
          }
          .custom-button:hover {
            color: black !important;
            background-color: white !important;
            border: 2px solid black !important;
            font-family: "kalnia", sans-serif !important;
            transform: scale(1.05);
          }
        `}</style>

        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-medium font-kalnia text-right mb-8">
            My recent works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={index}
                ref={(el) => (tileRefs.current[index] = el)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`
                  relative inline-block overflow-visible transition-transform duration-500
                  ${index % 2 === 0 ? "justify-self-end md:mt-8" : "justify-self-start md:-mt-4"}
                  ${hoveredIndex !== null && hoveredIndex !== index ? "opacity-30" : "opacity-100"}
                  ${hoveredIndex === index ? "scale-105" : "scale-100"}
                `}
                style={{ width: "15rem", height: "16rem", cursor: "pointer" }}
              >
                <div className="z-10">
                  <ProjectCard imageUrl={project.imageUrl} alt={project.alt} />
                </div>
                {/* Buttons container, showing both the "Visit Site" and "More" buttons */}
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
                      className={`
                        min-w-[8rem] bg-[#000B58] text-white py-2 px-3 text-center text-base font-kalnia rounded-none
                        custom-button ${project.buttonSide === "left" ? "custom-button-left" : "custom-button-right"}
                      `}
                    >
                      Visit Site
                    </a>
                    <button
                      onClick={() => handleMoreClick(index, project)}
                      className={`
                        min-w-[8rem] bg-[#000B58] text-white py-2 px-3 text-center text-base font-kalnia rounded-none hover:cursor-pointer
                        custom-button ${project.buttonSide === "left" ? "custom-button-left" : "custom-button-right"}
                      `}
                    >
                      More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {selectedProject && (
        <TileOverlay
          project={selectedProject.project}
          initialRect={selectedProject.rect}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
};

export default Projects;
