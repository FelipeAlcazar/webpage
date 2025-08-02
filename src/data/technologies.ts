import { Technology } from '../types';

export const technologies: Technology[] = [
  { name: 'React', logo: `${process.env.PUBLIC_URL}/react.svg`, displayName: 'React' },
  { name: 'TypeScript', logo: `${process.env.PUBLIC_URL}/typescript.svg`, displayName: 'TypeScript' },
  { name: 'JavaScript', logo: `${process.env.PUBLIC_URL}/javascript.svg`, displayName: 'JavaScript' },
  { name: 'Python', logo: `${process.env.PUBLIC_URL}/python.svg`, displayName: 'Python' },
  { name: 'Node.js', logo: `${process.env.PUBLIC_URL}/nodejs.svg`, displayName: 'Node.js' },
  { name: 'Express', logo: `${process.env.PUBLIC_URL}/express.svg`, displayName: 'Express' },
  { name: 'MongoDB', logo: `${process.env.PUBLIC_URL}/mongodb.svg`, displayName: 'MongoDB' },
  { name: 'C#', logo: `${process.env.PUBLIC_URL}/csharp.svg`, displayName: 'C#' },
  { name: 'Visual Studio', logo: `${process.env.PUBLIC_URL}/visual-studio.svg`, displayName: 'Visual Studio' },
  { name: 'VS Code', logo: `${process.env.PUBLIC_URL}/vscode.svg`, displayName: 'VS Code' },
  { name: 'SQLite', logo: `${process.env.PUBLIC_URL}/sqlite.svg`, displayName: 'SQLite' },
  { name: 'Docker', logo: `${process.env.PUBLIC_URL}/docker.svg`, displayName: 'Docker' },
  { name: 'Tailwind CSS', logo: `${process.env.PUBLIC_URL}/tailwindcss.svg`, displayName: 'Tailwind CSS' },
  { name: 'Windows', logo: `${process.env.PUBLIC_URL}/windows.svg`, displayName: 'Windows' },
];
