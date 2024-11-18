"use client";

import { cn } from "../../lib/utils"; 
import React, {
  createContext,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const CardContainer = ({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsMouseEntered(true);
    if (!containerRef.current) return;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    setIsMouseEntered(false);
    containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
  };

  const handleClick = () => {
    if (window.innerWidth <= 768) {
      setIsMouseEntered(!isMouseEntered);
    }
  };

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        className={cn(
          "py-20 flex items-center justify-center",
          containerClassName
        )}
        style={{
          perspective: "1000px",
        }}
      >
        <div
          ref={containerRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          className={cn(
            "flex items-center justify-center relative transition-all duration-200 ease-linear",
            className
          )}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {children}
        </div>
      </div>
    </MouseEnterContext.Provider>
  );
};

export const CardBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "h-96 w-96 xs:w-64 xs:h-64 sm:w-80 sm:h-80 md:w-72 md:h-72 lg:w-96 lg:h-96 [transform-style:preserve-3d] [&>*]:[transform-style:preserve-3d]",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardItem = ({
  as: Tag = "div",
  children,
  className,
  translateX = 0,
  translateY = 0,
  translateZ = 0,
  rotateX = 0,
  rotateY = 0,
  rotateZ = 0,
  title,
  text,
  logos = [],
  link,
  buttonText = "Ir a GitHub",
  buttonColor = "bg-blue-500",
  note,
  ...rest
}: {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  translateX?: number | string;
  translateY?: number | string;
  translateZ?: number | string;
  rotateX?: number | string;
  rotateY?: number | string;
  rotateZ?: number | string;
  title?: string;
  text?: string;
  logos?: string[];
  link?: string;
  buttonText?: string;
  buttonColor?: string;
  note?: string;
  [key: string]: any;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useMouseEnter();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    handleAnimations();
  }, [isMouseEntered, isClicked]);

  const handleAnimations = () => {
    if (!ref.current) return;
    if (isMouseEntered || isClicked) {
      ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
    } else {
      ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (window.innerWidth <= 768) {
      if (isClicked) {

      } else {
        setIsClicked(true);
      }
    } else {

    }
  };

  return (
    <Tag
      ref={ref}
      className={cn("w-full h-full transition duration-200 ease-linear relative", className)}
      onClick={handleClick}
      {...rest}
    >
      {children}
      <div
        className={cn(
          "absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white p-4 rounded-2xl transition-opacity duration-300",
          { "opacity-100 lg:opacity-0": !isMouseEntered && !isClicked, "opacity-100": isMouseEntered || isClicked }
        )}
      >
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="text-sm text-center mb-4">{text}</p>
        <p className={cn("text-sm text-center text-white font-bold py-2 px-4 rounded mb-4", buttonColor)}>
          {buttonText}
        </p>
        {note && <p className="text-xs text-center italic mt-2">{note}</p>}
      </div>
      <div
        className={cn(
          "absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 transition-opacity duration-300",
          { "opacity-100 lg:opacity-0": !isMouseEntered && !isClicked, "opacity-100": isMouseEntered || isClicked }
        )}
      >
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt="Technology Logo" className="h-6 w-6" />
        ))}
      </div>
    </Tag>
  );
};

// Create a hook to use the context
export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (context === undefined) {
    throw new Error("useMouseEnter must be used within a MouseEnterProvider");
  }
  return context;
};