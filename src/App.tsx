// src/App.tsx
import React from "react";
import "./App.css";
import "./index.css";
import Landingpage from "./components/landingpage"; // Import the Header component here
import AboutMe from "./components/aboutme";
import Experience from "./components/experience";

function App() {
  return (
    <div className="App">
      <Landingpage />
      <AboutMe />
      <Experience />
    </div>
  );
}

export default App;