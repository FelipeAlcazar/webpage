import React, { useState, useEffect, useRef } from 'react';
import './index.css';
import GradualSpacing from "./components/magicui/gradual-spacing";
import WordPullUp from "./components/ui/word-pull-up";
import ShineBorder from "./components/ui/shine-border";
import { Dock, DockIcon } from "./components/ui/dock";
import { FaGithub, FaLinkedin, FaFileAlt, FaArrowUp } from 'react-icons/fa';
import BlurFade from "./components/ui/blur-fade";
import { CardContainer, CardBody, CardItem } from "./components/ui/3d-card";
import { BackgroundBeams } from "./components/ui/background-beams";
import { Timeline } from "./components/ui/timeline";
import TechnologyFilter from "./components/ui/technology-filter";
import { technologies, projects, timelineData } from "./data";
import { filterProjectsByTechnologies, calculateAge } from "./lib/utils";

const App: React.FC = () => {
  const [showArrow, setShowArrow] = useState<boolean>(false);
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([]);
  const dockRef = useRef<HTMLDivElement>(null);

  const filteredProjects = filterProjectsByTechnologies(projects, selectedTechnologies);

  const handleGithubClick = (): void => {
    window.open('https://github.com/FelipeAlcazar', '_blank');
  };

  const handleLinkedInClick = (): void => {
    window.open('https://www.linkedin.com/in/felipealc%C3%A1zarg%C3%B3mez/', '_blank');
  };

  const handlePortfolioClick = (): void => {
    window.open(`${process.env.PUBLIC_URL}/Curriculum%20Vitae%20(Espa%C3%B1ol).pdf`, '_blank');
  };

  const handleFilterChange = (newSelectedTechnologies: string[]): void => {
    setSelectedTechnologies(newSelectedTechnologies);
  };

  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = (): void => {
      const dockElement = dockRef.current;
      const footerElement = document.querySelector('footer');
      
      if (dockElement && footerElement) {
        const footerRect = footerElement.getBoundingClientRect();

        if (footerRect.top < window.innerHeight) {
          dockElement.style.opacity = '0';
          dockElement.style.transition = 'opacity 0.5s ease'; 
          dockElement.style.pointerEvents = 'none';
        } else {
          dockElement.style.opacity = '1'; 
          dockElement.style.pointerEvents = 'auto';
        }
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    const handleScroll = (): void => {
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

  const age = calculateAge('2001-06-28');

  return (
    <div className="App h-full">
      <ShineBorder className="relative z-10 p-4 w-full h-screen flex justify-center items-center" borderWidth={3} color="#ff0000">
        <BackgroundBeams className="absolute inset-0 z-0" />
        <div className="relative z-10 flex flex-col justify-center items-center min-h-full">
          <div className="flex-grow flex flex-col justify-center items-center lg:flex-row">
            <div className="flex flex-col lg:flex-row items-center">
            <GradualSpacing 
              textSegments={[{ text: "Hola, soy ", className: "text-black opacity-75" }]}
              delayMultiple={0.08}
              duration={0.5}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl select-none leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-loose"
            />
            <WordPullUp
              words="Felipe Alcázar"
              className="text-red-500 text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl select-none leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-loose mt-4 lg:mt-0 lg:ml-2 font-semibold italic opacity-75"
            />
            </div>
          </div>
          {showArrow && (
            <FaArrowUp 
              className="text-4xl cursor-pointer animate-bounce fixed bottom-4 right-4 text-black" 
              onClick={scrollToTop} 
            />
          )}
          <Dock ref={dockRef} className="fixed bottom-0 left-0 right-0 mx-auto mb-4">
            <DockIcon className="bg-black" onClick={handleGithubClick} title="GitHub">
              <FaGithub className="text-white" size={24} />
            </DockIcon>
            <DockIcon className="bg-blue-500" onClick={handleLinkedInClick} title="LinkedIn">
              <FaLinkedin className="text-white" size={24} />
            </DockIcon>
            <DockIcon className="bg-red-500" onClick={handlePortfolioClick} title="Portfolio">
              <FaFileAlt className="text-white" size={24} />
            </DockIcon>
          </Dock>
        </div>
      </ShineBorder>
      <section className="relative min-h-screen flex flex-col justify-center bg-gray-100 overflow-hidden m-0 p-4 sm:p-6 xl:p-12">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <BlurFade inView={true} delay={0.2}>
            <div className="text-center lg:text-left lg:w-3/4 p-4 lg:p-8 lg:my-4">
            <p className="text-2xl lg:text-3xl text-black">
              Mi nombre es <span className="text-red-500 font-semibold italic">Felipe Alcázar Gómez</span>.<br/><br/>
              Tengo <span className="text-red-500 font-semibold italic">{age} años</span>, vivo en Ciudad Real y soy <span className="text-red-500 font-semibold italic">Ingeniero Informático</span>.<br/><br/>
              Destaco por mi <span className="text-red-500 font-semibold italic">proactividad</span>, por estar siempre listo para trabajar en <span className="text-red-500 font-semibold italic">equipo</span> como se debe, con un especial gusto personal por el <span className="text-red-500 font-semibold italic">desarrollo web</span>.<br/><br/>
              Aquí podrás encontrar toda la información sobre mi <span className="text-red-500 font-semibold italic">formación</span> académica, <span className="text-red-500 font-semibold italic">experiencia</span> profesional y <span className="text-red-500 font-semibold italic">proyectos</span> personales.<br/><br/>
              ¡Espero que te guste!
            </p>
          </div>
            </BlurFade>
            <BlurFade inView={true} delay={0.2}>
            <div className="w-full max-w-xs lg:max-w-none lg:w-96 xl:w-[400px]">
              <img
                src={`${process.env.PUBLIC_URL}/profilePicbio.jpg`}
                alt="Felipe Alcázar"
                className="h-auto rounded-lg shadow-lg w-full lg:w-96 xl:w-[400px]"
              />
            </div>
          </BlurFade>
          </div>
        </div>
      </section>
      <section id="projects" className="bg-gray-100 m-0 p-0">
        <TechnologyFilter
          technologies={technologies}
          selectedTechnologies={selectedTechnologies}
          onFilterChange={handleFilterChange}
        />
        <div className="flex flex-wrap justify-center items-center bg-gray-100 m-0 p-0 text-center gap-10 gap-y-0">
          {filteredProjects.map((project) => (
            <BlurFade key={project.id} inView={true} delay={0.2}>
              <CardContainer className="cursor-pointer mx-auto" containerClassName="w-full max-w-sm sm:max-w-xs lg:max-w-none">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="w-full h-full">
                  <CardBody className="bg-white shadow-lg rounded-2xl overflow-hidden">
                    <CardItem 
                      translateZ={50} 
                      title={project.title} 
                      text={project.text}
                      logos={project.technologies.map(tech => {
                        const techObj = technologies.find(t => t.name === tech || t.displayName === tech);
                        return techObj ? techObj.logo : '';
                      }).filter(logo => logo !== '')}
                      buttonText={project.buttonText}
                      buttonColor={project.buttonColor}
                      note={project.note}
                    >
                      <img src={project.image} alt={`${project.title} Logo`} className="w-full h-full object-cover rounded-2xl" />
                    </CardItem>
                  </CardBody>
                </a>
              </CardContainer>
            </BlurFade>
          ))}
          {filteredProjects.length === 0 && (
            <div className="w-full text-center">
              <p className="text-2xl text-gray-600">No se encontraron proyectos con las tecnologías seleccionadas.</p>
              <p className="text-gray-500 mt-2">Prueba a seleccionar otras tecnologías o limpia los filtros.</p>
            </div>
          )}
        </div>
      </section>
      <section id="timeline" className="relative flex flex-col justify-center bg-gray-100 overflow-hidden m-0 p-0 w-full h-full">
        <div className="w-full h-full bg-gray-100">
          <div className="flex flex-col justify-center divide-y divide-slate-200 h-full">
            <div className="w-full h-full">
              <div className="h-full">
                <Timeline data={timelineData} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-red-500 text-white py-4 mt-auto">
        <div className="container mx-auto text-center">
          <a href="mailto:felipeatle@hotmail.com" className="block mb-2 text-sm">felipeatle@hotmail.com</a>
          <p className="text-sm mb-2">+34 645 731 980</p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://github.com/FelipeAlcazar" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white" size={24} />
            </a>
            <a href="https://www.linkedin.com/in/felipealc%C3%A1zarg%C3%B3mez/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white" size={24} />
            </a>
            <a href={`${process.env.PUBLIC_URL}/Curriculum%20Vitae%20(Espa%C3%B1ol).pdf`} target="_blank" rel="noopener noreferrer">
              <FaFileAlt className="text-white" size={24} />
            </a>
          </div>
          <p className="text-sm mt-4">&copy; 2024 Felipe Alcázar Gómez. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
