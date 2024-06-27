import {
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import { useRef } from "react";

export function HeroParallax({ children }) {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0svh", "115svh"]
  );

  return (
    <motion.section
      //   ref={container}
      style={{ y }}
      className="bg-bgColorHero h-full relative min-h-[115svh] grid place-content-center gap-xl justify-center w-full min-w-7xl [perspective:1000px] overflow-hidden [&>*]:-translate-y-8 "
    >
      {children}
    </motion.section>
  );
}
