import { useState, type ReactNode } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";

interface Props {
  children: ReactNode;
  className?: string;
}

export function Floating({ children, className }: Props) {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(
    scrollYProgress,
    "change",
    (current) => {
      // Check if current is not undefined and is a number
      if (typeof current === "number") {
        let direction =
          current! - scrollYProgress.getPrevious()!;

        direction > 0
          ? setVisible(false)
          : setVisible(true);
      }
    }
  );

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(" fixed top-10  z-[5000]", className)}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
