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
    <div className="App h-full">
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
      <section className="relative min-h-screen flex flex-col justify-center bg-gray-100 overflow-hidden"> {/* Updated background class */}
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className="flex flex-col justify-center divide-y divide-slate-200 [&>*]:py-16">
            <div className="w-full max-w-3xl mx-auto">
              <div className="-my-6">
                <div className="relative pl-8 sm:pl-32 py-6 group">
                  <div className="font-medium text-red-500 mb-1 sm:mb-0">🎓 Bachillerato</div>
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-red-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Jul 2019</time>
                    <div className="text-xl font-bold text-slate-900">Bachillerato en Ciencias Sociales y Humanidades</div>
                  </div>
                  <div className="text-slate-500 italic">1 de septiembre de 2017 - 1 de julio de 2019</div>
                </div>

                <div className="relative pl-8 sm:pl-32 py-6 group">
                  <div className="font-medium text-red-500 mb-1 sm:mb-0">&#x1F1EC;&#x1F1E7; Certificación oficial en Inglés</div>
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-red-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Nov 2020</time>
                    <div className="text-xl font-bold text-slate-900">Certificación en lengua inglesa ISE III - CEFR Nivel C1</div>
                  </div>
                  <div className="text-slate-500 italic">2 de noviembre de 2020</div>
                </div>
                
                <div className="relative pl-8 sm:pl-32 py-6 group">
                  <div className="font-medium text-red-500 mb-1 sm:mb-0">🖥️ Ciclo Formativo</div>
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-red-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Jun 2021</time>
                    <div className="text-xl font-bold text-slate-900">Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Multiplataforma</div>
                  </div>
                  <div className="text-slate-500 italic">1 de septiembre de 2019 - 1 de junio de 2021</div>
                </div>
                
                <div className="relative pl-8 sm:pl-32 py-6 group">
                  <div className="font-medium text-red-500 mb-1 sm:mb-0">💼 Prácticas Profesionales</div>
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-red-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Jun 2021</time>
                    <div className="text-xl font-bold text-slate-900">Prácticas profesionales en DIMAX Soluciones Integrales S.L.</div>
                  </div>
                  <div className="text-slate-500 italic">Prácticas profesionales en DIMAX Soluciones Integrales S.L., Ciudad Real, España. Participación en el desarrollo de páginas web con WordPress, programación IoT en C++ con placas Arduino, y estudio de investigación de software ERP.</div>
                  <div className="text-slate-500 italic">7 de abril de 2021 - 18 de junio de 2021</div>
                </div>
                
                <div className="relative pl-8 sm:pl-32 py-6 group">
                  <div className="font-medium text-red-500 mb-1 sm:mb-0">🧑‍💻 Grado en Ingeniería Informática</div>
                  <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-red-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">HOY</time>
                    <div className="text-xl font-bold text-slate-900">Grado en Ingeniería Informática por la Escuela Superior de Informática de UCLM - Cursando 4º curso </div>
                  </div>
                  <div className="text-slate-500 italic">1 de septiembre de 2021 - Actualidad</div>
                </div>
              </div>                    
            </div>
          </div>
        </div>
      </section>
      <section id="next-section" className="min-h-screen flex justify-center items-center bg-gray-100">
        <h2 className="text-4xl text-black">More Content Here</h2>
      </section>
    </div>
  );
}

export default App;