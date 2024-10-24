import React, { useState, useEffect } from 'react';
import './index.css'; // Ensure this import is present
import GradualSpacing from "./components/magicui/gradual-spacing";
import WordPullUp from "./components/ui/word-pull-up"; // Import WordPullUp
import ShineBorder from "./components/ui/shine-border"; // Import ShineBorder
import { Dock, DockIcon } from "./components/ui/dock"; // Import Dock and DockIcon
import { FaGithub, FaBriefcase, FaLinkedin, FaFileAlt, FaArrowUp } from 'react-icons/fa'; // Import GitHub, Portfolio, LinkedIn, Document, and Arrow Up icons

function App() {
  const [showArrow, setShowArrow] = useState(false);

  const handleGithubClick = () => {
    window.open('https://github.com/FelipeAlcazar', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/felipealc%C3%A1zarg%C3%B3mez/', '_blank');
  };

  const handlePortfolioClick = () => {
    window.open(`${process.env.PUBLIC_URL}/Curriculum%20Vitae%20(Espa%C3%B1ol).pdf`, '_blank'); // Open the PDF file in a new tab
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <ShineBorder className="relative z-10 p-4 w-full h-screen flex justify-center items-center" borderWidth={3} color="#ff0000"> {/* Add ShineBorder component */}
        <div className="relative z-10 flex flex-col justify-center items-center min-h-full">
          <div className="flex-grow flex flex-col justify-center items-center lg:flex-row">
            <div className="flex flex-col lg:flex-row items-center">
              <GradualSpacing 
                textSegments={[{ text: "Hola, soy ", className: "text-black" }]}
                delayMultiple={0.08}
                duration={0.5}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl select-none leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-loose" // Increased font sizes for lower resolutions
              />
              <WordPullUp
                words="Felipe Alcázar"
                className="text-red-500 text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl select-none leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-loose mt-4 lg:mt-0 lg:ml-2 font-semibold italic" // Increased font sizes for lower resolutions
              />
            </div>
          </div>
          {showArrow && (
            <FaArrowUp 
              className="text-4xl cursor-pointer animate-bounce fixed bottom-4 right-4 text-black" 
              onClick={scrollToTop} 
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
      </ShineBorder>
      <section id="next-section" className="min-h-screen flex justify-center items-center bg-gray-100">
        <h2 className="text-4xl text-black">More Content Here</h2>
      </section>
    </div>
  );
}

export default App;