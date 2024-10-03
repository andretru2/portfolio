"use client";

import React from "react";
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
    },
  },
};

interface SafeSvgLogoProps {
  svgContent: string;
  className?: string;
}

const SafeSvgLogo = React.memo(
  ({ svgContent, className }: SafeSvgLogoProps) => {
    const SvgComponent = React.useMemo(() => {
      return React.forwardRef<
        SVGSVGElement,
        React.SVGProps<SVGSVGElement>
      >((props, ref) => (
        <svg
          {...props}
          ref={ref}
          className={cn(
            "max-w-32 max-h-24 fill-white text-white py-xs px-s relative place-self-center",
            className
          )}
          dangerouslySetInnerHTML={{ __html: svgContent }}
        />
      ));
    }, [svgContent, className]);

    return (
      <motion.div variants={item}>
        <SvgComponent />
      </motion.div>
    );
  }
);

SafeSvgLogo.displayName = "SafeSvgLogo";

function Logo({ logo }: { logo: string }) {
  return <SafeSvgLogo svgContent={logo} />;
}

export function BhfBrandLogos({
  logos,
  rows = 2,
  pageSize = 4,
  className,
}: Props) {
  return Array.from({ length: rows }).map((_, num) => {
    const pageNum = num + 1;
    const start =
      pageSize === Number.POSITIVE_INFINITY
        ? 0
        : (pageNum - 1) * pageSize;
    const end = Math.min(start + pageSize, logos.length);

    return (
      <motion.div
        key={num}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        data-id={num}
        className={cn(
          "grid grid-flow-row w-full grid-cols-4 gap-m",
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
