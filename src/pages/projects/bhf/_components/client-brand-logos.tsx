"use client";

import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

interface BrandLogoProps {
  className?: string;
  rows?: number;
  pageSize?: number;
}
interface Props extends BrandLogoProps {
  logos: string[];
}

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

export function BhfBrandLogos({
  logos,
  rows = 2,
  pageSize = 4,
  className,
}: Props) {
  return Array.from({ length: rows }).map((row, num) => {
    const pageNum = num + 1;

    const start =
      pageSize === Number.POSITIVE_INFINITY
        ? 0
        : (pageNum - 1) * pageSize; // currentPage is 1-indexed
    const end = Math.min(start + pageSize, logos.length);

    return (
      <motion.div
        key={num}
        variants={container}
        initial="hidden"
        // animate="show"
        whileInView={"show"}
        data-id={num}
        // viewport={}
        className={cn(
          "grid grid-flow-col  place-content-center  items-start ",

          className
        )}
      >
        {logos.slice(start, end).map((logo, i) => (
          <Logo logo={logo} key={i} />
        ))}
      </motion.div>
    );
  });
}

function Logo({ logo }: { logo: string }) {
  return (
    <motion.svg
      variants={item}
      dangerouslySetInnerHTML={{ __html: logo }}
      className="max-w-44 max-h-8 fill-white  "
    />
  );
}
