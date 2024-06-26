"use client";

import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
} from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { useRef, type ReactNode } from "react";
import { cn } from "@/utils/cn";

type backgroundColorProps =
  | "hero"
  | "accent"
  | "bgColor"
  | "bgColorHero"
  | "aurora";

interface Props {
  title?: string;
  parallax?: boolean;
  // parallaxHeight?: string;
  children?: ReactNode;
  className?: string;
  idName?: string;
  padding?: "both" | "top" | "bottom" | "none";
  margin?: "both" | "top" | "bottom" | "none";
  minHeight?: string;
  backgroundOverlayOpacity?: number;
  backgroundElement?: string;
  backgroundColor?: backgroundColorProps;
  skipRoundCorners?: boolean;
}

export function Section({
  title,
  parallax,
  // parallaxHeight,
  children,
  idName,
  backgroundOverlayOpacity = 0.9,
  backgroundElement,
  backgroundColor = "bgColor",
  className,
  minHeight = "100svh",
  padding = "both",
  margin = "both",
  skipRoundCorners = false,
}: Props) {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    // ["0svh", "100svh"]
    ["0svh", minHeight]
  );

  return (
    <AnimatePresence>
      <motion.section
        variants={staggerContainer(0.4, 0.5)}
        initial={backgroundColor === "hero" ? "" : "hidden"}
        // animate={{
        //   show: {
        //     opacity: 1,

        //     transition: {
        //       staggerChildren: 0.3,
        //     },
        //   },
        // }}
        whileInView="show"
        id={idName}
        style={{
          minHeight: minHeight,
          y: parallax ? y : "",
        }}
        viewport={{ once: true }}
        className={cn(
          className,
          ` h-full  relative  z-20   `,
          padding === "both" && "py-5xl",
          padding === "top" && "pt-5xl",
          padding === "bottom" && "pb-5xl",
          padding === "none" && "py-0",
          margin === "both" && "my-5xl",
          margin === "top" && "mt-5xl",
          margin === "bottom" && "mb-5xl",
          margin === "none" && "my-0"
        )}
      >
        {backgroundColor && (
          <BackgroundColor
            backgroundColor={backgroundColor}
          />
        )}

        {!!backgroundElement && (
          <div
            className={`opacity-[${backgroundOverlayOpacity}}`}
          >
            {backgroundElement}
          </div>
        )}
        {!skipRoundCorners && (
          <div
            className={`absolute  rounded-t-[8rem] -top-6xl  border-t-4 border-accent inset-0 bg-${backgroundColor} -z-20 `}
          ></div>
        )}
        {title && (
          <motion.h6
            className={cn(
              "absolute top-5 p-0 px-s  text-sm tracking-wider  font-bold w-max rounded-xl",
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

export function BackgroundColor({
  backgroundColor,
}: backgroundColorProps) {
  return (
    <div
      className={cn(
        `absolute w-dvw  -z-30 content-[" "] overflow-visible inset-0 `,
        backgroundColor === "hero" && "   bg-hero ",
        backgroundColor === "accent" && "   bg-accent/60 ",
        backgroundColor === "bgColor" &&
          "bg-bgColor aspect-square ",
        // backgroundType === "toProjects" &&
        //   "bg  bg-gradient-to-b from-bgColorHero via-bgColor/80  to-bgColor h-svh -translate-x-[45%] ",
        // backgroundType === "fromProjects" &&
        //   "bg bg-gradient-to-b  to-bgColor from-neutral-950 ",
        backgroundColor === "aurora" &&
          " [--white-gradient:repeating-linear-gradient(100deg,oklch(95%_0.05_0)_0%,oklch(95%_0.05_0)_7%,var(--transparent)_10%,var(--transparent)_12%,oklch(95%_0.05_0)_16%)] [--dark-gradient:repeating-linear-gradient(100deg,oklch(5%_0.05_0)_0%,oklch(5%_0.05_0)_7%,var(--transparent)_10%,var(--transparent)_12%,oklch(5%_0.05_0)_16%)] [--aurora:repeating-linear-gradient(100deg,oklch(60%_0.25_210)_10%,oklch(70%_0.2_230)_15%,oklch(60%_0.3_240)_20%,oklch(80%_0.1_270)_25%,oklch(50%_0.2_250)_30%)] [background-image:var(--white-gradient),var(--aurora)] dark:[background-image:var(--dark-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] filter blur-[10px] invert dark:invert-0 after:content-[''] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:dark:[background-image:var(--dark-gradient),var(--aurora)] after:[background-size:200%,_100%] after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference pointer-events-none absolute -inset-[10px] opacity-20 "
      )}
    ></div>
  );
}

function Stagger({ children }) {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

function FadeUp({ children }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,

      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -24 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        ease: "easeIn",

        // repeat: "infinity",
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      data-id={num}
      className="grid grid-flow-col gap-m place-content-center "
    >
      {logos.slice(start, end).map((logo, i) => (
        <Logo logo={logo} key={i} />
      ))}
    </motion.div>
  );
}
