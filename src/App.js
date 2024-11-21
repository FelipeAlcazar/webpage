import React, { useState, useEffect } from 'react';
import './index.css'; // Ensure this import is present
import GradualSpacing from "./components/magicui/gradual-spacing";
import WordPullUp from "./components/ui/word-pull-up"; // Import WordPullUp
import ShineBorder from "./components/ui/shine-border"; // Import ShineBorder
import { Dock, DockIcon } from "./components/ui/dock"; // Import Dock and DockIcon
import { FaGithub, FaBriefcase, FaLinkedin, FaFileAlt, FaArrowUp } from 'react-icons/fa'; // Import GitHub, Portfolio, LinkedIn, Document, and Arrow Up icons
import BlurFade from "./components/ui/blur-fade"; // Import BlurFade
import { CardContainer, CardBody, CardItem } from "./components/ui/3d-card"; // Import 3dcard components

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

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    return age;
  };

  const age = calculateAge('2001-06-28');

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

      {/* New Section */}
      <section className="relative min-h-screen flex flex-col justify-center bg-gray-100 overflow-hidden m-0 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-4"> {/* Reduced padding */}
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <BlurFade inView={true} delay={0.2}>
              <div className="text-center lg:text-left lg:w-3/4 p-4 lg:p-8 lg:my-4">
                <p className="text-2xl lg:text-3xl text-black">
                  Te doy la bienvenida a mi página web personal. <br/> <br/>
                  Mi nombre es <br/><span className="text-red-500 font-semibold italic">Felipe Alcázar Gómez</span>.<br/><br/> 
                  Tengo <span className="text-red-500 font-semibold italic">{age} años </span> y soy de <span className="text-red-500 font-semibold italic">Ciudad Real</span>, España.<br/><br/>
                  Aquí podrás encontrar toda la información sobre mi <span className="text-red-500 font-semibold italic">formación</span> académica,  
                  <span className="text-red-500 font-semibold italic"> experiencia</span> profesional y 
                  <span className="text-red-500 font-semibold italic"> proyectos</span> personales. <br/><br/>¡Espero que te guste!
                </p>
              </div>
            </BlurFade>
            <BlurFade inView={true} delay={0.2}>
              <div className="w-full max-w-xs lg:max-w-none">
                <img src={`${process.env.PUBLIC_URL}/profilepic.jpg`} alt="Felipe Alcázar" className="h-auto rounded-lg shadow-lg w-full lg:w-auto" />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <section className="relative flex flex-col justify-center bg-gray-100 overflow-hidden m-0 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12">
  <div className="w-full max-w-6xl mx-auto">
    <div className="flex flex-col justify-center divide-y divide-slate-200">
      <div className="w-full max-w-3xl mx-auto">
        <div className="-my-6">
                <BlurFade inView={true} delay={0.2}>
                  <div className="relative pl-8 sm:pl-32 py-4 group">
                    <div className="font-medium text-red-500 mb-1 sm:mb-0">🎓 Bachillerato</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-red-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Jul 2019</time>
                      <div className="text-xl font-bold text-slate-900">Bachillerato en Ciencias Sociales y Humanidades</div>
                    </div>
                    <div className="text-slate-500 italic">1 de septiembre de 2017 - 1 de julio de 2019</div>
                  </div>
                </BlurFade>

                <BlurFade inView={true} delay={0.2}>
                  <div className="relative pl-8 sm:pl-32 py-4 group">
                    <div className="font-medium text-red-500 mb-1 sm:mb-0">&#x1F1EC;&#x1F1E7; Certificación oficial en Inglés</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-red-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Nov 2020</time>
                      <div className="text-xl font-bold text-slate-900">Certificación en lengua inglesa ISE III - CEFR Nivel C1</div>
                    </div>
                    <div className="text-slate-500 italic">2 de noviembre de 2020</div>
                  </div>
                </BlurFade>
                
                <BlurFade inView={true} delay={0.2}>
                  <div className="relative pl-8 sm:pl-32 py-4 group">
                    <div className="font-medium text-red-500 mb-1 sm:mb-0">🖥️ Ciclo Formativo</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-red-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Jun 2021</time>
                      <div className="text-xl font-bold text-slate-900">Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Multiplataforma</div>
                    </div>
                    <div className="text-slate-500 italic">1 de septiembre de 2019 - 1 de junio de 2021</div>
                  </div>
                </BlurFade>
                
                <BlurFade inView={true} delay={0.2}>
                  <div className="relative pl-8 sm:pl-32 py-4 group">
                    <div className="font-medium text-red-500 mb-1 sm:mb-0">💼 Prácticas Profesionales</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-red-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Jun 2021</time>
                      <div className="text-xl font-bold text-slate-900">Prácticas profesionales en DIMAX Soluciones Integrales S.L.</div>
                    </div>
                    <div className="text-slate-500 italic">Prácticas profesionales en DIMAX Soluciones Integrales S.L., Ciudad Real, España. Participación en el desarrollo de páginas web con WordPress, programación IoT en C++ con placas Arduino, y estudio de investigación de software ERP.</div>
                    <div className="text-slate-500 italic">7 de abril de 2021 - 18 de junio de 2021</div>
                  </div>
                </BlurFade>
                
                <BlurFade inView={true} delay={0.2}>
                  <div className="relative pl-8 sm:pl-32 py-4 group">
                    <div className="font-medium text-red-500 mb-1 sm:mb-0">🧑‍💻 Grado en Ingeniería Informática</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-red-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                      <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">HOY</time>
                      <div className="text-xl font-bold text-slate-900">Grado en Ingeniería Informática por la Escuela Superior de Informática de UCLM - Cursando 4º curso </div>
                    </div>
                    <div className="text-slate-500 italic">1 de septiembre de 2021 - Actualidad</div>
                  </div>
                </BlurFade>
              </div>                    
            </div>
          </div>
        </div>
      </section>
      <section id="next-section" className="flex flex-col lg:flex-row justify-center items-center bg-gray-100 m-0 p-4 space-y-4 lg:space-y-0 lg:space-x-8">
  <BlurFade inView={true} delay={0.2}>
    <CardContainer className="cursor-pointer" containerClassName="w-full max-w-sm sm:max-w-xs lg:max-w-none">
      <a href="https://github.com/alon159/isi-beattracker" target="_blank" rel="noopener noreferrer" className="w-full h-full">
        <CardBody className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <CardItem 
            translateZ={50} 
            title="BeatTracker" 
            text="Bot para Telegram que permite consultar eventos y conciertos de artistas mediante el API REST de TicketMaster."
            logos={[
              `${process.env.PUBLIC_URL}/vscode.svg`,
              `${process.env.PUBLIC_URL}/python.svg`,
              `${process.env.PUBLIC_URL}/docker.svg`
            ]}
          >
            <img src={`${process.env.PUBLIC_URL}/beatTracker.png`} alt="3D Card Image" className="w-full h-full object-cover rounded-2xl" />
          </CardItem>
        </CardBody>
      </a>
    </CardContainer>
  </BlurFade>
  <BlurFade inView={true} delay={0.2}>
    <CardContainer className="cursor-pointer" containerClassName="w-full max-w-sm sm:max-w-xs lg:max-w-none">
      <a href={`${process.env.PUBLIC_URL}/NoteTopia.pdf`} target="_blank" rel="noopener noreferrer" className="w-full h-full">
        <CardBody className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <CardItem 
            translateZ={50} 
            title="NoteTopia" 
            text="NoteTopia es una aplicación web basada en la creación y compartición de notas de forma colaborativa inspirada en Notion."
            logos={[
              `${process.env.PUBLIC_URL}/react.svg`,
              `${process.env.PUBLIC_URL}/nodejs.svg`,
              `${process.env.PUBLIC_URL}/express.svg`,
              `${process.env.PUBLIC_URL}/mongodb.svg`
            ]}
            buttonText="Ver Documentación"
            buttonColor="bg-red-500"
            note="Su repositorio es privado al incluir información sensible. Se incluye la documentación del proyecto."
          >
            <img src={`${process.env.PUBLIC_URL}/NoteTopia-Logo.jpg`} alt="NoteTopia Logo" className="w-full h-full object-cover rounded-2xl" />
          </CardItem>
        </CardBody>
      </a>
    </CardContainer>
  </BlurFade>

  <BlurFade inView={true} delay={0.2}>
  <CardContainer className="cursor-pointer" containerClassName="w-full max-w-sm sm:max-w-xs lg:max-w-none">
    <a href="https://github.com/Enriquesmo/IPO2_Pokemon_Pokedex" target="_blank" rel="noopener noreferrer" className="w-full h-full">
      <CardBody className="bg-white shadow-lg rounded-2xl overflow-hidden">
        <CardItem 
          translateZ={50} 
          title="IPO2 Pokémon Pokedex" 
          text="Proyecto basado en el famoso juego Pokémon con un enfoque en el diseño mediante UWP y XAML. Aquí podrás hacer uso de una pokedex así como de un pequeño sistema de combate."
          logos={[
            `${process.env.PUBLIC_URL}/visual-studio.svg`,
            `${process.env.PUBLIC_URL}/csharp.svg`,
            `${process.env.PUBLIC_URL}/windows.svg`,
          ]}
        >
          <img src={`${process.env.PUBLIC_URL}/IPO2Pokedex.png`} alt="IPO2 Pokémon Pokedex Logo" className="w-full h-full object-cover rounded-2xl" />
        </CardItem>
      </CardBody>
    </a>
  </CardContainer>
</BlurFade>
</section>
    </div>
  );
}

export default App;