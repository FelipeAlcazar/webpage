export interface Technology {
  name: string;
  logo: string;
  displayName?: string;
  usageCount?: number; // For 'Más usado' sorting
};

export interface Project {
  id: string;
  title: string;
  text: string;
  image: string;
  link: string;
  technologies: string[];
  buttonText?: string;
  buttonColor?: string;
  note?: string;
}

export interface TimelineItem {
  title: string;
  content: React.ReactNode;
}

export interface TechnologyFilterProps {
  technologies: Technology[];
  selectedTechnologies: string[];
  onFilterChange: (selectedTechnologies: string[]) => void;
  className?: string;
}
