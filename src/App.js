import React from 'react';
import './index.css'; // Ensure this import is present
import GradualSpacing from "./components/magicui/gradual-spacing";
import { Dock, DockIcon } from "./components/ui/dock"; // Import Dock and DockIcon
import { FaGithub, FaBriefcase, FaLinkedin, FaFileAlt } from 'react-icons/fa'; // Import GitHub, Portfolio, LinkedIn, and Document icons

function App() {
  const textSegments = [
    { text: "Hola, soy ", className: "text-black" },
    { text: "Felipe Alcázar Gómez", className: "text-red-500" }
  ];

  const handleGithubClick = () => {
    window.open('https://github.com/FelipeAlcazar', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/felipealc%C3%A1zarg%C3%B3mez/', '_blank');
  };

  const handlePortfolioClick = () => {
    window.open(`${process.env.PUBLIC_URL}/Curriculum%20Vitae%20(Espa%C3%B1ol).pdf`, '_blank'); // Open the PDF file in a new tab
  };

  return (
    <div className="App flex flex-col justify-center items-center min-h-screen">
      <GradualSpacing 
        textSegments={textSegments}
        delayMultiple={0.1}
        duration={0.5}
        className="text-7xl select-none" // Ensure the font and size are applied
      />
      <Dock className="fixed bottom-0 left-0 right-0 mx-auto mb-4"> {/* Updated class name for fixed position */}
        <DockIcon className="bg-black" onClick={handleGithubClick} title="GitHub">
          <FaGithub className="text-white" size={24} /> {/* GitHub icon */}
        </DockIcon>
        <DockIcon className="bg-blue-500" onClick={handleLinkedInClick} title="LinkedIn">
          <FaLinkedin className="text-white" size={24} /> {/* LinkedIn icon */}
        </DockIcon>
        <DockIcon className="bg-red-500" onClick={handlePortfolioClick} title="Portfolio">
          <FaFileAlt className="text-white" size={24} /> {/* Document icon */}
        </DockIcon>
      </Dock>
    </div>
  );
}

export default App;