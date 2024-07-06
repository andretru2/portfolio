import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const NoiseText = ({ children }: Props) => {
  // Define the animation variants
  // const variants = {
  //   initial: { "--lines": "0.0001px" },
  //   animate: {
  //     "--lines": "0.00012px",
  //     transition: { duration: 2 },
  //   }, // Simulate the animation effect
  // };

  return (
    <AnimatePresence>
      {/* Wrap the content in a motion component */}
      <motion.h1
        initial="initial"
        animate="animate"
        // variants={variants}
        style={{
          display: "inline-block",
          WebkitMaskImage:
            "repeating-radial-gradient(circle at center, #000, var(--lines), #000, 0, #0000, calc(var(--lines) * 2), #0000 0)",
          maskImage:
            "repeating-radial-gradient(circle at center, #000, var(--lines), #000, 0, #0000, calc(var(--lines) * 2), #0000 0)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundImage:
            "linear-gradient(to right, oklch(82% 0.25 158), oklch(95% 0.15 100))",
          // "@media (prefersColorScheme: light)": {
          //   backgroundImage:
          //     "linear-gradient(to right var(--space), black, gray)",
          // },
        }}
      >
        {children}
      </motion.h1>
    </AnimatePresence>
  );
};
