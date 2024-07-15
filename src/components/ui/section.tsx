// "use client";

import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/utils/cn";

type BackgroundColorProps =
  | "hero"
  | "accent"
  | "bgColor"
  | "bgColorHero"
  | "aurora";

interface Props {
  title?: string;
  parallax?: boolean;
  children?: ReactNode;
  className?: string;
  idName?: string;
  padding?: "both" | "top" | "bottom" | "none";
  margin?: "both" | "top" | "bottom" | "none";
  minHeight?: string;
  backgroundColor?: BackgroundColorProps;
  skipRoundCorners?: boolean;
}

export function Section({
  title,
  parallax,
  children,
  idName,
  backgroundColor = "bgColor",
  className,
  minHeight = "100svh",
  padding = "both",
  margin = "both",
  skipRoundCorners = false,
}: Props) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0svh", minHeight]
  );

  return (
    <AnimatePresence>
      <motion.section
        variants={staggerContainer(0.4, 0.5)}
        initial={backgroundColor === "hero" ? "" : "hidden"}
        whileInView="show"
        id={idName}
        style={{
          minHeight: minHeight,
          y: parallax ? y : "",
        }}
        viewport={{ once: true }}
        className={cn(
          className,
          "relative z-20 shadow-3xl shadow-white",
          padding === "both" && "py-5xl",
          padding === "top" && "pt-5xl",
          padding === "bottom" && "pb-5xl",
          padding === "none" && "py-0",
          margin === "both" && "my-0",
          margin === "top" && "mt-xl",
          margin === "bottom" && "mb-xl",
          margin === "none" && "my-0",
          !skipRoundCorners &&
            "rounded-t-[4rem] sm:rounded-t-[6rem] rouned-b-[4rem] sm:rounded-b-[6rem] border-y-1 border-t border-accent/30 stroke-[0.1] hover:stroke-[0.15]",
          backgroundColor === "bgColor" && "bg-bgColor",
          backgroundColor === "bgColorHero" &&
            "bg-bgColorHero",
          backgroundColor === "hero" && "bg-bgColorHero",
          backgroundColor === "accent" && "bg-accent",
          // backgroundColor === "accent" &&
          //   "[background-image]:[conic-gradient(from_123deg_at_50%_50%,oklch(20%_0.2_160)_-40%,oklch(20%_0.4_160)_143%)]",
          backgroundColor === "aurora" &&
            "[--white-gradient:repeating-linear-gradient(100deg,oklch(95%_0.05_0)_0%,oklch(95%_0.05_0)_7%,var(--transparent)_10%,var(--transparent)_12%,oklch(95%_0.05_0)_16%)] [--dark-gradient:repeating-linear-gradient(100deg,oklch(5%_0.05_0)_0%,oklch(5%_0.05_0)_7%,var(--transparent)_10%,var(--transparent)_12%,oklch(5%_0.05_0)_16%)] [--aurora:repeating-linear-gradient(100deg,oklch(60%_0.25_210)_10%,oklch(70%_0.2_230)_15%,oklch(60%_0.3_240)_20%,oklch(80%_0.1_270)_25%,oklch(50%_0.2_250)_30%)] [background-image:var(--white-gradient),var(--aurora)] dark:[background-image:var(--dark-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] filter blur-[10px] invert dark:invert-0 after:content-[''] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:dark:[background-image:var(--dark-gradient),var(--aurora)] after:[background-size:200%,_100%] after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference pointer-events-none absolute -inset-[10px] opacity-20"
        )}
      >
        {/* {!skipRoundCorners && (
          <div className="rounded-t-[6rem] rounded-b-[6rem] border-y-4 border border-accent"></div>
        )} */}

        {title && (
          <motion.h6
            className={cn(
              "p-0 px-s text-sm tracking-wider font-bold w-max rounded-xl mb-3xl",
              backgroundColor === "accent"
                ? "text-white bg-bgColor"
                : "text-black bg-accent"
            )}
          >
            {title}
          </motion.h6>
        )}
        {children}
      </motion.section>
    </AnimatePresence>
  );
}
