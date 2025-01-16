import React, { useState, useEffect, useRef } from 'react';
import './index.css'; // Ensure this import is present
import GradualSpacing from "./components/magicui/gradual-spacing";
import WordPullUp from "./components/ui/word-pull-up"; // Import WordPullUp
import ShineBorder from "./components/ui/shine-border"; // Import ShineBorder
import { Dock, DockIcon } from "./components/ui/dock"; // Import Dock and DockIcon
import { FaGithub, FaBriefcase, FaLinkedin, FaFileAlt, FaArrowUp } from 'react-icons/fa'; // Import GitHub, Portfolio, LinkedIn, Document, and Arrow Up icons
import BlurFade from "./components/ui/blur-fade"; // Import BlurFade
import { CardContainer, CardBody, CardItem } from "./components/ui/3d-card"; // Import 3dcard components
import { BackgroundBeams } from "./components/ui/background-beams"; // Adjust the path as necessary
import { Timeline } from "./components/ui/timeline"; // Import Timeline component

function App() {
  const [showArrow, setShowArrow] = useState(false);
  const dockRef = useRef(null);

  const timelineData = [
    {
      title: "🎓 Bachillerato",
      content: (
        <>
          <div className="relative">
            <time className="block sm:absolute sm:left-0 sm:translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Jul 2019</time>
            <div className="text-xl font-bold text-slate-900 mt-8 sm:mt-0 sm:ml-24">Bachillerato en Ciencias Sociales y Humanidades</div>
          </div>
          <div className="text-slate-500 italic sm:ml-24">1 de septiembre de 2017 - 1 de julio de 2019</div>
        </>
      ),
    },
    {
      title: "🇬🇧 Certificación oficial en Inglés",
      content: (
        <>
          <div className="relative">
            <time className="block sm:absolute sm:left-0 sm:translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Nov 2020</time>
            <div className="text-xl font-bold text-slate-900 mt-8 sm:mt-0 sm:ml-24">Certificación en lengua inglesa ISE III - CEFR Nivel C1</div>
          </div>
          <div className="text-slate-500 italic sm:ml-24">2 de noviembre de 2020</div>
        </>
      ),
    },
    {
      title: "🖥️ Ciclo Formativo",
      content: (
        <>
          <div className="relative">
            <time className="block sm:absolute sm:left-0 sm:translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Jun 2021</time>
            <div className="text-xl font-bold text-slate-900 mt-8 sm:mt-0 sm:ml-24">Ciclo Formativo de Grado Superior en Desarrollo de Aplicaciones Multiplataforma</div>
          </div>
          <div className="text-slate-500 italic sm:ml-24">1 de septiembre de 2019 - 1 de junio de 2021</div>
        </>
      ),
    },
    {
      title: "💼 Prácticas Profesionales",
      content: (
        <>
          <div className="relative">
            <time className="block sm:absolute sm:left-0 sm:translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">Jun 2021</time>
            <div className="text-xl font-bold text-slate-900 mt-8 sm:mt-0 sm:ml-24">Prácticas profesionales en DIMAX Soluciones Integrales S.L.</div>
          </div>
          <div className="text-slate-500 italic sm:ml-24">Prácticas profesionales en DIMAX Soluciones Integrales S.L., Ciudad Real, España. Participación en el desarrollo de páginas web con WordPress, programación IoT en C++ con placas Arduino, y estudio de investigación de software ERP.</div>
          <div className="text-slate-500 italic sm:ml-24">7 de abril de 2021 - 18 de junio de 2021</div>
        </>
      ),
    },
    {
      title: "🧑‍💻 Grado en Ingeniería Informática",
      content: (
        <>
          <div className="relative">
            <time className="block sm:absolute sm:left-0 sm:translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">HOY</time>
            <div className="text-xl font-bold text-slate-900 mt-8 sm:mt-0 sm:ml-24">Grado en Ingeniería Informática por la Escuela Superior de Informática de UCLM - Cursando 4º curso</div>
          </div>
          <div className="text-slate-500 italic sm:ml-24">1 de septiembre de 2021 - Actualidad</div>
        </>
      ),
    },
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const dockElement = dockRef.current;
      const footerElement = document.querySelector('footer');
      const footerRect = footerElement.getBoundingClientRect();

      if (footerRect.top < window.innerHeight) {
        dockElement.style.opacity = '0';
        dockElement.style.transition = 'opacity 0.5s ease'; 
        dockElement.style.pointerEvents = 'none';
      } else {
        dockElement.style.opacity = '1'; 
        dockElement.style.pointerEvents = 'auto';
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
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
      <ShineBorder className="relative z-10 p-4 w-full h-screen flex justify-center items-center" borderWidth={3} color="#ff0000">
        <BackgroundBeams className="absolute inset-0 z-0" /> {/* Add this line */}
        <div className="relative z-10 flex flex-col justify-center items-center min-h-full">
          <div className="flex-grow flex flex-col justify-center items-center lg:flex-row">
            <div className="flex flex-col lg:flex-row items-center">
            <GradualSpacing 
              textSegments={[{ text: "Hola, soy ", className: "text-black opacity-75" }]} // Add opacity-75 class
              delayMultiple={0.08}
              duration={0.5}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl select-none leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-loose"
            />
            <WordPullUp
              words="Felipe Alcázar"
              className="text-red-500 text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl select-none leading-tight sm:leading-snug md:leading-normal lg:leading-relaxed xl:leading-loose mt-4 lg:mt-0 lg:ml-2 font-semibold italic opacity-75" // Add opacity-75 class
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
                <img src={`${process.env.PUBLIC_URL}/profilePicbio.jpg`} alt="Felipe Alcázar" className="h-auto rounded-lg shadow-lg w-full lg:w-auto" />
              </div>
            </BlurFade>
          </div>
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

<section id="projects" className="flex flex-wrap justify-center items-center bg-gray-100 m-0 p-0 text-center gap-10 gap-y-0">
    <BlurFade inView={true} delay={0.2}>
  <CardContainer className="cursor-pointer mx-auto" containerClassName="w-full max-w-sm sm:max-w-xs lg:max-w-none">
    <a href="https://github.com/FelipeAlcazar/NTTDataDB-Prototype" target="_blank" rel="noopener noreferrer" className="w-full h-full">
      <CardBody className="bg-white shadow-lg rounded-2xl overflow-hidden">
        <CardItem 
          translateZ={50} 
          title="PostTopia - NTTData" 
          text="Prototipo de Red Social para la segunda edición de NTT Data Digital Builders, con la colaboración de la Escuela Superior de Informática de Ciudad Real."
          logos={[
            `${process.env.PUBLIC_URL}/vscode.svg`,
            `${process.env.PUBLIC_URL}/react.svg`,
            `${process.env.PUBLIC_URL}/typescript.svg`,
            `${process.env.PUBLIC_URL}/javascript.svg`
          ]}
          note="Este proyecto contribuyó a ser galardonado con el PRIMER PREMIO en la competición, valorado en 1000€."

        >
          <img src={`${process.env.PUBLIC_URL}/posttopia.png`} alt="NTTDataDB Prototype Logo" className="w-full h-full object-cover rounded-2xl" />
        </CardItem>
      </CardBody>
    </a>
  </CardContainer>
</BlurFade>
        <BlurFade inView={true} delay={0.2}>
    <CardContainer className="cursor-pointer mx-auto" containerClassName="w-full max-w-sm sm:max-w-xs lg:max-w-none">
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
    <CardContainer className="cursor-pointer mx-auto" containerClassName="w-full max-w-sm sm:max-w-xs lg:max-w-none">
      <a href={`${process.env.PUBLIC_URL}/NoteTopia.pdf`} target="_blank" rel="noopener noreferrer" className="w-full h-full">
        <CardBody className="bg-white shadow-lg rounded-2xl overflow-hidden">
          <CardItem 
            translateZ={50} 
            title="NoteTopia" 
            text="NoteTopia es una aplicación web basada en la creación y compartición de notas de forma colaborativa inspirada en Notion."
            logos={[
              `${process.env.PUBLIC_URL}/vscode.svg`,
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
  <CardContainer className="cursor-pointer mx-auto" containerClassName="w-full max-w-sm sm:max-w-xs lg:max-w-none">
    <a href="https://github.com/FelipeAlcazar/GSI-LittleERP" target="_blank" rel="noopener noreferrer" className="w-full h-full">
      <CardBody className="bg-white shadow-lg rounded-2xl overflow-hidden">
        <CardItem 
          translateZ={50} 
          title="LittleERP" 
          text="Aplicación ligera de Planificación de Recursos Empresariales (ERP) diseñada para gestionar y optimizar los procesos empresariales."
          logos={[
            `${process.env.PUBLIC_URL}/visual-studio.svg`,
            `${process.env.PUBLIC_URL}/csharp.svg`,
            `${process.env.PUBLIC_URL}/sqlite.svg`,
            `${process.env.PUBLIC_URL}/windows.svg`
          ]}
        >
          <img src={`${process.env.PUBLIC_URL}/logoLittleERP.png`} alt="LittleERP Logo" className="w-full h-full object-cover rounded-2xl" />
        </CardItem>
      </CardBody>
    </a>
  </CardContainer>
</BlurFade>
  <BlurFade inView={true} delay={0.2}>
  <CardContainer className="cursor-pointer mx-auto" containerClassName="w-full max-w-sm sm:max-w-xs lg:max-w-none">
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

<BlurFade inView={true} delay={0.2}>
  <CardContainer className="cursor-pointer mx-auto" containerClassName="w-full max-w-sm sm:max-w-xs lg:max-w-none">
    <a href="https://github.com/FelipeAlcazar/MulSurv" target="_blank" rel="noopener noreferrer" className="w-full h-full">
      <CardBody className="bg-white shadow-lg rounded-2xl overflow-hidden">
        <CardItem 
          translateZ={50} 
          title="MulSurv" 
          text="MulSurv es un juego inspirado en Vampire Survivors con modos de juego para un jugador y multijugador. Presenta un estilo pixel-like con personajes inspirados en elementos multimedia."
          logos={[
            `${process.env.PUBLIC_URL}/vscode.svg`,
            `${process.env.PUBLIC_URL}/python.svg`,
          ]}
        >
          <img src={`${process.env.PUBLIC_URL}/MultSurv-Logo.png`} alt="MultSurv Logo" className="w-full h-full object-cover rounded-2xl" />
        </CardItem>
      </CardBody>
    </a>
  </CardContainer>
</BlurFade>
<BlurFade inView={true} delay={0.2}>
  <CardContainer className="cursor-pointer mx-auto" containerClassName="w-full max-w-sm sm:max-w-xs lg:max-w-none">
    <a href="https://github.com/FelipeAlcazar/webpage" target="_blank" rel="noopener noreferrer" className="w-full h-full">
      <CardBody className="bg-white shadow-lg rounded-2xl overflow-hidden">
        <CardItem 
          translateZ={50} 
          title="Página Web Personal" 
          text="Este proyecto es la propia página que estás visitando. Está construida con React y Tailwind CSS para una experiencia dinámica, responsive y visualmente atractiva."
          logos={[
            `${process.env.PUBLIC_URL}/vscode.svg`,
            `${process.env.PUBLIC_URL}/react.svg`,
            `${process.env.PUBLIC_URL}/nodejs.svg`,
            `${process.env.PUBLIC_URL}/tailwindcss.svg`,
            `${process.env.PUBLIC_URL}/javascript.svg`,
          ]}
        >
          <img src={`${process.env.PUBLIC_URL}/webpage-logo.png`} alt="Página Web Personal Logo" className="w-full h-full object-cover rounded-2xl" />
        </CardItem>
      </CardBody>
    </a>
  </CardContainer>
</BlurFade>

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
}

export default App;