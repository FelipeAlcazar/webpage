"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import { cn } from "../../lib/utils"; 
import React from "react";

interface TextSegment {
  text: string;
  className?: string;
}

interface GradualSpacingProps {
  textSegments: TextSegment[];
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string; // Add className prop
}

const GradualSpacing: React.FC<GradualSpacingProps> = ({
  textSegments,
  duration = 0.8, // Slower animation duration
  delayMultiple = 0.3, // Slower delay between characters
  framerProps = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  },
  className, // Destructure className prop
}) => {
  return (
    <div className={cn("flex justify-center items-center space-x-1", className)}> {/* Apply className here */}
      <AnimatePresence>
        {textSegments.map((segment, segmentIndex) =>
          segment.text.split("").map((char, charIndex) => (
            <motion.span
              key={`${segmentIndex}-${charIndex}`}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={framerProps}
              transition={{ duration, delay: (segmentIndex + charIndex) * delayMultiple }}
              className={cn("drop-shadow-sm inline-block", segment.className)}
            >
              {char === " " ? <span>&nbsp;</span> : char}
            </motion.span>
          ))
        )}
      </AnimatePresence>
    </div>
  );
};

export default GradualSpacing;