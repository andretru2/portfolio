import { motion } from "framer-motion";
import React from "react";

interface Props {
  children: React.ReactNode;
}

export function Swapper({ children }: Props) {
  const animationProps = {
    initial: {
      //   scale: 0.8,
      //   color: "white",
      //   color: "text-white",
      color: "oklch(100% 0.1073 151.33)",
    },
    animate: {
      scale: 1,
      color: "oklch(80% 0.2 160",
      transition: {
        delay: 1,
        duration: 0.3,
        ease: "easeIn",
      },
    },

    style: {
      //   color: "red",
      //   size: "1.5rem",
    },
  };

  return (
    <motion.span
      {...animationProps}
      className="swapper fluid:text-7xl font-black  rounded-md py-0 px-xs mix-blend-lighten"
    >
      {children}
    </motion.span>
  );
}
