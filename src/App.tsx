// src/App.tsx
import React from "react";
import "./App.css";
import "./index.css";
import Landingpage from "./components/landingpage";
import AboutMe from "./components/aboutme";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <div className="App">
      <Landingpage />

      {/* these ids match the hrefs in Landingpage */}
      <div id="about"><AboutMe /></div>
      <div id="experience"><Experience /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}

export default App;
