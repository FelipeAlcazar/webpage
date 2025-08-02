import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { Project } from '../types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const filterProjectsByTechnologies = (
  projects: Project[], 
  selectedTechnologies: string[]
): Project[] => {
  if (selectedTechnologies.length === 0) {
    return projects;
  }
  return projects.filter(project => 
    selectedTechnologies.some(tech => project.technologies.includes(tech))
  );
};

export const calculateAge = (birthDate: string): number => {
  const today = new Date();
  const birthDateObj = new Date(birthDate);
  let age = today.getFullYear() - birthDateObj.getFullYear();
  const monthDifference = today.getMonth() - birthDateObj.getMonth();
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
    age--;
  }
  return age;
};
