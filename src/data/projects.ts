import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'posttopia',
    title: 'PostTopia - NTTData',
    text: 'Prototipo de Red Social para la segunda edición de NTT Data Digital Builders, con la colaboración de la Escuela Superior de Informática de Ciudad Real.',
    image: `${process.env.PUBLIC_URL}/posttopia.png`,
    link: 'https://github.com/FelipeAlcazar/NTTDataDB-Prototype',
    technologies: ['VS Code', 'React', 'TypeScript', 'JavaScript'],
    note: 'Este proyecto contribuyó a ser galardonado con el PRIMER PREMIO en la competición, valorado en 1000€.'
  },
  {
    id: 'beattracker',
    title: 'BeatTracker',
    text: 'Bot para Telegram que permite consultar eventos y conciertos de artistas mediante el API REST de TicketMaster.',
    image: `${process.env.PUBLIC_URL}/beatTracker.png`,
    link: 'https://github.com/alon159/isi-beattracker',
    technologies: ['VS Code', 'Python', 'Docker']
  },
  {
    id: 'notetopia',
    title: 'NoteTopia',
    text: 'NoteTopia es una aplicación web basada en la creación y compartición de notas de forma colaborativa inspirada en Notion.',
    image: `${process.env.PUBLIC_URL}/NoteTopia-Logo.jpg`,
    link: `${process.env.PUBLIC_URL}/NoteTopia.pdf`,
    technologies: ['VS Code', 'React', 'Node.js', 'JavaScript', 'Express', 'MongoDB'],
    buttonText: 'Ver Documentación',
    buttonColor: 'bg-red-500',
    note: 'Su repositorio es privado al incluir información sensible. Se incluye la documentación del proyecto.'
  },
  {
    id: 'littleerp',
    title: 'LittleERP',
    text: 'Aplicación ligera de Planificación de Recursos Empresariales (ERP) diseñada para gestionar y optimizar los procesos empresariales.',
    image: `${process.env.PUBLIC_URL}/logoLittleERP.png`,
    link: 'https://github.com/FelipeAlcazar/GSI-LittleERP',
    technologies: ['Visual Studio', 'C#', 'SQLite', 'Windows']
  },
  {
    id: 'pokemon-pokedex',
    title: 'IPO2 Pokémon Pokedex',
    text: 'Proyecto basado en el famoso juego Pokémon con un enfoque en el diseño mediante UWP y XAML. Aquí podrás hacer uso de una pokedex así como de un pequeño sistema de combate.',
    image: `${process.env.PUBLIC_URL}/IPO2Pokedex.png`,
    link: 'https://github.com/Enriquesmo/IPO2_Pokemon_Pokedex',
    technologies: ['Visual Studio', 'C#', 'Windows']
  },
  {
    id: 'mulsurv',
    title: 'MulSurv',
    text: 'MulSurv es un juego inspirado en Vampire Survivors con modos de juego para un jugador y multijugador. Presenta un estilo pixel-like con personajes inspirados en elementos multimedia.',
    image: `${process.env.PUBLIC_URL}/MultSurv-Logo.png`,
    link: 'https://github.com/FelipeAlcazar/MulSurv',
    technologies: ['VS Code', 'Python']
  },
  {
    id: 'webpage',
    title: 'Página Web Personal',
    text: 'Este proyecto es la propia página que estás visitando. Está construida con React y Tailwind CSS para una experiencia dinámica, responsive y visualmente atractiva.',
    image: `${process.env.PUBLIC_URL}/webpage-logo.png`,
    link: 'https://github.com/FelipeAlcazar/webpage',
    technologies: ['VS Code', 'React', 'Node.js', 'TypeScript', 'JavaScript', 'Tailwind CSS']
  }
];
