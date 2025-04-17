// src/App.tsx
import React from "react";
import "./App.css";
import "./index.css";
import Landingpage from "./components/landingpage"; // Import the Header component here
import AboutMe from "./components/aboutme";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Landingpage />
      <AboutMe />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;