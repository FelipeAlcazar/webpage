"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

export const BackgroundBeams = React.memo(
  ({ className }: { className?: string }) => {
    const [paths, setPaths] = useState<string[]>([]);

    useEffect(() => {
      const basePaths = [
        "M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875",
        "M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843",
        "M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811",
        "M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779",
        "M-268 -317C-268 -317 -200 88 264 215C728 342 796 747 796 747",
        "M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715",
        "M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683",
        "M-184 -413C-184 -413 -116 -8 348 119C812 246 880 651 880 651",
        "M-156 -445C-156 -445 -88 -40 376 87C840 214 908 619 908 619",
        "M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587",
        "M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555",
        "M-72 -541C-72 -541 -4 -136 460 -9C924 118 992 523 992 523",
        "M-44 -573C-44 -573 24 -168 488 -41C952 86 1020 491 1020 491",
        "M-16 -605C-16 -605 52 -200 516 -73C980 54 1048 459 1048 459",
        "M12 -637C12 -637 80 -232 544 -105C1008 22 1076 427 1076 427",
        "M40 -669C40 -669 108 -264 572 -137C1036 -10 1104 395 1104 395",
        "M68 -701C68 -701 136 -296 600 -169C1064 -42 1132 363 1132 363",
        "M96 -733C96 -733 164 -328 628 -201C1092 -74 1160 331 1160 331",
        "M124 -765C124 -765 192 -360 656 -233C1120 -106 1188 299 1188 299",
        "M152 -797C152 -797 220 -392 684 -265C1148 -138 1216 267 1216 267",
        "M180 -829C180 -829 248 -424 712 -297C1176 -170 1244 235 1244 235",
        "M208 -861C208 -861 276 -456 740 -329C1204 -202 1272 203 1272 203",
        "M236 -893C236 -893 304 -488 768 -361C1232 -234 1300 171 1300 171",
        "M264 -925C264 -925 332 -520 796 -393C1260 -266 1328 139 1328 139",
        "M292 -957C292 -957 360 -552 824 -425C1288 -298 1356 107 1356 107",
        "M320 -989C320 -989 388 -584 852 -457C1316 -330 1384 75 1384 75",
        "M348 -1021C348 -1021 416 -616 880 -489C1344 -362 1412 43 1412 43",
        "M376 -1053C376 -1053 444 -648 908 -521C1372 -394 1440 11 1440 11",
      ];

      const updatePaths = () => {
        if (window.innerWidth < 768) {
          setPaths([...basePaths]);
        } else {
          setPaths(basePaths);
        }
      };

      updatePaths();
      window.addEventListener("resize", updatePaths);

      return () => {
        window.removeEventListener("resize", updatePaths);
      };
    }, []);

    return (
      <div
        className={cn(
          "absolute h-full w-full inset-0 [mask-size:40px] [mask-repeat:no-repeat] flex items-center justify-center",
          className
        )}
      >
        <svg
          className="z-0 h-full w-full pointer-events-none absolute"
          width="100%"
          height="100%"
          viewBox="0 0 696 316"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M-380 -189C-380 -189 -312 216 152 343C616 470 684 875 684 875M-352 -221C-352 -221 -284 184 180 311C644 438 712 843 712 843M-324 -253C-324 -253 -256 152 208 279C672 406 740 811 740 811M-296 -285C-296 -285 -228 120 236 247C700 374 768 779 768 779M-268 -317C-268 -317 -200 88 264 215C728 342 796 747 796 747M-240 -349C-240 -349 -172 56 292 183C756 310 824 715 824 715M-212 -381C-212 -381 -144 24 320 151C784 278 852 683 852 683M-184 -413C-184 -413 -116 -8 348 119C812 246 880 651 880 651M-156 -445C-156 -445 -88 -40 376 87C840 214 908 619 908 619M-128 -477C-128 -477 -60 -72 404 55C868 182 936 587 936 587M-100 -509C-100 -509 -32 -104 432 23C896 150 964 555 964 555M-72 -541C-72 -541 -4 -136 460 -9C924 118 992 523 992 523M-44 -573C-44 -573 24 -168 488 -41C952 86 1020 491 1020 491M-16 -605C-16 -605 52 -200 516 -73C980 54 1048 459 1048 459M12 -637C12 -637 80 -232 544 -105C1008 22 1076 427 1076 427"
            stroke="url(#paint0_radial_242_278)"
            strokeOpacity="0.2"
            strokeWidth="1"
          ></path>

          {paths.map((path, index) => (
            <motion.path
              key={`path-` + index}
              d={path}
              stroke={`url(#linearGradient-${index})`}
              strokeOpacity="0.8"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.2,
              }}
            ></motion.path>
          ))}
          <defs>
            {paths.map((path, index) => (
              <linearGradient
                id={`linearGradient-${index}`}
                key={`gradient-${index}`}
                x1="0%"
                x2="100%"
                y1="0%"
                y2="100%"
              >
                <stop stopColor="#FF0000" stopOpacity="0.4"></stop>
                <stop stopColor="#FF0000"></stop>
                <stop offset="32.5%" stopColor="#FFFFFF"></stop>
                <stop offset="100%" stopColor="#FF6347" stopOpacity="0.4"></stop>
              </linearGradient>
            ))}

            <radialGradient
              id="paint0_radial_242_278"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"
            >
              <stop offset="0.0666667" stopColor="var(--neutral-300)"></stop>
              <stop offset="0.243243" stopColor="var(--neutral-300)"></stop>
              <stop offset="0.43594" stopColor="white" stopOpacity="0"></stop>
            </radialGradient>
          </defs>
        </svg>
      </div>
    );
  }
);

BackgroundBeams.displayName = "BackgroundBeams";