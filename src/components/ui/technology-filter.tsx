"use client";




import React, { useState, useEffect } from "react";
import { cn } from "../../lib/utils";
import BlurFade from "./blur-fade";
import type { TechnologyFilterProps } from "../../types";
import { projects } from "../../data/projects";

export const TechnologyFilter: React.FC<TechnologyFilterProps> = ({
  technologies,
  selectedTechnologies,
  onFilterChange,
  className,
}) => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | 'most-used'>('most-used');

  const sortedTechnologies = React.useMemo(() => {
    if (sortOrder === 'most-used') {
      const techProjectCount: Record<string, number> = {};
      technologies.forEach(tech => {
        techProjectCount[tech.name] = projects.filter(project =>
          project.technologies.includes(tech.name)
        ).length;
      });
      return [...technologies].sort((a, b) => {
        const countDiff = (techProjectCount[b.name] || 0) - (techProjectCount[a.name] || 0);
        if (countDiff !== 0) return countDiff;
        const aName = a.displayName || a.name;
        const bName = b.displayName || b.name;
        return aName.localeCompare(bName, 'es', { sensitivity: 'base' });
      });
    }
    const sorted = [...technologies].sort((a, b) => {
      const aName = a.displayName || a.name;
      const bName = b.displayName || b.name;
      return aName.localeCompare(bName, 'es', { sensitivity: 'base' });
    });
    return sortOrder === 'asc' ? sorted : sorted.reverse();
  }, [technologies, sortOrder]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const technologiesToShow = isMobile && !showAll 
    ? sortedTechnologies.slice(0, 6)
    : sortedTechnologies;

  const toggleTechnology = (techName: string) => {
    const isSelected = selectedTechnologies.includes(techName);
    let newSelected: string[];
    
    if (isSelected) {
      newSelected = selectedTechnologies.filter(tech => tech !== techName);
    } else {
      newSelected = [...selectedTechnologies, techName];
    }
    
    onFilterChange(newSelected);
  };

  const clearAllFilters = () => {
    onFilterChange([]);
  };

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className={cn("w-full max-w-6xl mx-auto px-4 md:px-6 py-8", className)}>
      <div className="text-center mb-4">
        <div className="inline-flex items-center gap-2 text-sm justify-center w-full">
          <div className="flex bg-gray-100 rounded-xl shadow-inner p-1">
            {[
              { value: 'most-used', label: 'Más usado' },
              { value: 'asc', label: 'A-Z' },
              { value: 'desc', label: 'Z-A' },
            ].map((option, idx, arr) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setSortOrder(option.value as 'asc' | 'desc' | 'most-used')}
                className={cn(
                  "px-4 py-1 text-xs font-semibold rounded-lg transition-all duration-200 focus:outline-none",
                  sortOrder === option.value
                    ? "bg-red-500 text-white shadow-md scale-105"
                    : "bg-transparent text-gray-700 hover:bg-red-100"
                )}
                style={{ marginRight: idx !== arr.length - 1 ? 4 : 0 }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        {technologiesToShow.map((tech, idx) => {
          const isSelected = selectedTechnologies.includes(tech.name);
          return (
            <BlurFade key={tech.name} inView={true} delay={0.05 * idx}>
              <button
                onClick={() => toggleTechnology(tech.name)}
                className={cn(
                  "flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg",
                  "w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28",
                  {
                    "bg-red-500 border-red-500 shadow-lg scale-105": isSelected,
                    "bg-white border-gray-300 hover:border-red-400": !isSelected,
                  }
                )}
                title={tech.displayName || tech.name}
              >
                <img
                  src={tech.logo}
                  alt={`${tech.displayName || tech.name} logo`}
                  className={cn(
                    "w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain transition-all duration-300",
                    {
                      "filter brightness-0 invert": isSelected,
                      "": !isSelected,
                    }
                  )}
                />
                <span
                  className={cn(
                    "text-xs font-medium mt-1 transition-colors duration-300",
                    {
                      "text-white": isSelected,
                      "text-gray-700": !isSelected,
                    }
                  )}
                >
                  {tech.displayName || tech.name}
                </span>
              </button>
            </BlurFade>
          );
        })}
      </div>
      {isMobile && technologies.length > 6 && (
        <div className="text-center">
          <button
            onClick={toggleShowAll}
            className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition-colors duration-300"
          >
            {showAll ? 'Ver menos' : `Ver más (${technologies.length - 6} más)`}
          </button>
        </div>
      )}
      {selectedTechnologies.length > 0 && (
        <div className="text-center">
          <button
            onClick={clearAllFilters}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors duration-300"
          >
            Limpiar Filtros
          </button>
        </div>
      )}
    </div>
  );
};

export default TechnologyFilter;
