import React, { useState, useEffect } from 'react';
import './index.css'; // Ensure this import is present
import GradualSpacing from "./components/magicui/gradual-spacing";
import { Dock, DockIcon } from "./components/ui/dock"; // Import Dock and DockIcon
import { FaGithub, FaBriefcase, FaLinkedin, FaFileAlt, FaArrowDown } from 'react-icons/fa'; // Import GitHub, Portfolio, LinkedIn, Document, and Arrow Down icons

function App() {
  const [showArrow, setShowArrow] = useState(true);

  const handleGithubClick = () => {
    window.open('https://github.com/FelipeAlcazar', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/felipealc%C3%A1zarg%C3%B3mez/', '_blank');
  };

  const handlePortfolioClick = () => {
    window.open(`${process.env.PUBLIC_URL}/Curriculum%20Vitae%20(Espa%C3%B1ol).pdf`, '_blank'); // Open the PDF file in a new tab
  };

  const scrollToNextSection = () => {
    document.getElementById('next-section').scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <div className="flex flex-col justify-center items-center min-h-screen relative">
        <div className="flex-grow flex flex-col justify-center items-center lg:flex-row">
          <div className="flex flex-col lg:flex-row items-center">
            <GradualSpacing 
              textSegments={[{ text: "Hola, soy ", className: "text-black" }]}
              delayMultiple={0.1}
              duration={0.5}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl select-none leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-loose" // Responsive font sizes and line heights
            />
            <GradualSpacing 
              textSegments={[{ text: "Felipe Alcázar Gómez", className: "text-red-500" }]}
              delayMultiple={0.1}
              duration={0.5}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl select-none leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-loose mt-4 lg:mt-0 lg:ml-2" // Responsive font sizes and line heights
            />
          </div>
        </div>
        {showArrow && (
          <FaArrowDown 
            className="text-4xl cursor-pointer animate-bounce fixed bottom-4 right-4 text-black" 
            onClick={scrollToNextSection} 
          />
        )}
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
      <section id="next-section" className="min-h-screen flex justify-center items-center bg-gray-100">
        <h2 className="text-4xl text-black">More Content Here</h2>
      </section>
    </div>
  );
}

export default App;