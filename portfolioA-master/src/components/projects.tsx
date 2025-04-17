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
  description: string;
  rating: number;
  testimonial: string;  // New property for testimonial text
}

const ProjectCard: React.FC<{ imageUrl: string; alt: string }> = ({ imageUrl, alt }) => {
  return (
    <div
      className="bg-white shadow-md overflow-hidden flex justify-center items-center border-2 border-solid border-black transition-transform duration-500"
      style={{ width: "15rem", height: "16rem" }}
    >
      <img
        src={imageUrl}
        alt={alt}
        className="max-h-32 max-w-32 object-contain"
      />
    </div>
  );
};

////////////////////////////////////////
// Overlay Component (Detail View)
////////////////////////////////////////
interface OverlayProps {
  project: ProjectProps;
  initialRect: DOMRect;
  onClose: () => void;
}

const TileOverlay: React.FC<OverlayProps> = ({ project, initialRect, onClose }) => {
  // Animate the container from the tile's bounding rect to a final size
  // that can accommodate the tile + large title side by side, and then the
  // description, testimonial, rating, etc. below, all left-aligned.
  const [containerStyle, setContainerStyle] = useState<React.CSSProperties>({
    position: "fixed",
    top: initialRect.top,
    left: initialRect.left,
    width: initialRect.width,
    height: initialRect.height,
    transition: "all 600ms ease",
    zIndex: 110,
  });

  const [showTitle, setShowTitle] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    // Animate the container from its initial position to the final layout
    const timer1 = setTimeout(() => {
      setContainerStyle((prev) => ({
        ...prev,
        top: "2rem",
        left: "2rem",
        width: "50rem", // Enough space for tile + 7xl title side by side
        height: "auto", // Let the height grow to fit the content
      }));
    }, 50);

    // Fade in the title first
    const titleTimer = setTimeout(() => {
      setShowTitle(true);
    }, 600);

    // Fade in the rest of the details afterward
    const detailsTimer = setTimeout(() => {
      setShowDetails(true);
    }, 900);

    return () => {
      clearTimeout(timer1);
      clearTimeout(titleTimer);
      clearTimeout(detailsTimer);
    };
  }, [initialRect]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#000B58",
        transition: "background-color 600ms ease",
        zIndex: 100,
        overflowY: "auto",
      }}
    >
      <div style={containerStyle} className="p-4 flex flex-col items-start gap-6">
        {/* First row: tile (with white border) + big title side by side */}
        <div className="flex items-start gap-6 w-full">
          <div className="border-2 border-white">
            <ProjectCard imageUrl={project.imageUrl} alt={project.alt} />
          </div>
          <h1
            className="text-7xl font-kalnia text-white self-center whitespace-nowrap"
            style={{
              opacity: showTitle ? 1 : 0,
              transition: "opacity 500ms ease-in-out",
            }}
          >
            {project.alt}
          </h1>
        </div>

        {/* Second row: description, testimonial, rating, etc., left-aligned below */}
        <div
          className={`transition-opacity duration-500 ease-in-out ${
            showDetails ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Description (Joan font) */}
          <p className="mt-4 text-xl font-joan text-white">{project.description}</p>
          {/* Testimonial using project-specific testimonial */}
          <p className="mt-4 text-lg font-joan italic text-white">
            "{project.testimonial}"
          </p>
          {/* Rating + Stars */}
          <div className="mt-4">
            <span className="text-2xl text-white">
              Rating: {project.rating.toFixed(1)}/5
            </span>
            <div className="flex items-center gap-1 mt-2">
              {renderStars(project.rating)}
            </div>
          </div>
          {/* Visit Site button */}
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-8 py-3 bg-[#000B58] text-white font-kalnia border-2 border-white transition-all duration-300 hover:scale-105 hover:bg-[#98DED9] hover:border-[#98DED9] hover:text-black"
          >
            Visit Site
          </a>
        </div>
      </div>

      {/* Close button: top-right corner, red hover */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 px-4 py-2 bg-white text-[#000B58] font-kalnia border-2 border-[#000B58] transition-transform duration-300 hover:scale-105 hover:bg-red-600 hover:text-white"
      >
        Close
      </button>
    </div>
  );
};

////////////////////////////////////////
// Helper Function to Render Star Icons
////////////////////////////////////////
const renderStars = (rating: number) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <span key={`full-${i}`} className="text-yellow-400 text-2xl">
        ★
      </span>
    );
  }
  if (hasHalf) {
    stars.push(
      <span key="half" className="text-yellow-400 text-2xl">
        ⯪
      </span>
    );
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(
      <span key={`empty-${i}`} className="text-yellow-400 text-2xl">
        ☆
      </span>
    );
  }
  return stars;
};

////////////////////////////////////////
// Main Projects Component (Grid View)
////////////////////////////////////////
const Projects: React.FC = () => {
  // We rearranged the projects so that:
  //  index=0 => One Profit (top-left)
  //  index=1 => Tech City Mobile (top-right)
  //  index=2 => Govardhan Retreat Centre (bottom-left)
  //  index=3 => Vihe Publications (bottom-right)
  const projects: ProjectProps[] = [
    {
      imageUrl: oneprofitlogo,
      alt: "One Profit",
      link: "https://www.oneprofit.in",
      buttonSide: "left",
      description:
        "One Profit specializes in profit-driven strategies that leverage the latest technology trends. Their expert team delivers solutions that maximize efficiency and ensure sustainable growth in a dynamic marketplace.",
      rating: 4.4,
      testimonial: "One Profit's strategies have significantly boosted our efficiency and growth.",
    },
    {
      imageUrl: techcitymobilelogo,
      alt: "Tech City Mobile",
      link: "https://techcitymobile.ca",
      buttonSide: "right",
      description:
        "Tech City Mobile offers seamless connectivity, innovative mobile solutions, and a user-friendly interface that adapts to modern technology demands. Their approach to integrating advanced features sets them apart in the competitive telecom market.",
      rating: 4.3,
      testimonial: "Tech City Mobile transformed our business communication with their innovative solutions!",
    },
    {
      imageUrl: grclogo,
      alt: "Govardhan Retreat Centre",
      link: "https://govardhanretreatcenter.com",
      buttonSide: "left",
      description:
        "Govardhan Retreat Centre is a spiritual sanctuary focused on healthy living, sustainability, and personal growth. Surrounded by natural beauty, it offers a rejuvenating experience through yoga, organic farming, and holistic well-being.",
      rating: 4.7,
      testimonial: "My stay at Govardhan Retreat Centre was an incredible spiritual and rejuvenating experience!",
    },
    {
      imageUrl: vihelogo,
      alt: "Vihe Publications",
      link: "https://vihepublications.com/en/",
      buttonSide: "right",
      description:
        "Vihe Publications provides a wealth of spiritual and educational resources, combining authentic scriptural wisdom with modern presentation. Their dedication to quality and accessibility has made them a global resource for seekers and practitioners.",
      rating: 4.7,
      testimonial: "Vihe Publications truly revolutionized our understanding of spiritual studies.",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<{
    project: ProjectProps;
    rect: DOMRect;
  } | null>(null);

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