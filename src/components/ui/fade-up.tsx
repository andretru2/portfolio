import { cn } from "@/utils/cn";
import { motion } from "framer-motion";
import React from "react";
import { staggerContainer } from "@/utils/motion";

interface ChildProps {
  children: React.ReactNode;
  className?: string;
  as?:
    | "div"
    | "article"
    | "section"
    | "aside"
    | "nav"
    | "header"
    | "footer";
}

interface Props {
  children: React.ReactElement<ChildProps>[];
  stagger?: number;
  delay?: number;
}

export function FadeUpStagger({
  children,
  stagger = 0.3,
  delay = 0.4,
}: Props) {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" },
    },
  };

  const renderChild = (
    child: React.ReactElement<ChildProps>,
    index: number
  ) => {
    const { children, className, as = "div" } = child.props;
    const MotionComponent = motion[as];

    return (
      <MotionComponent
        key={`child${index + 1}`}
        variants={FADE_UP_ANIMATION_VARIANTS}
        className={cn(className)}
      >
        {React.cloneElement(child, {
          children: `${children}${index + 1}`,
        })}
      </MotionComponent>
    );
  };

  return (
    <motion.article
      initial="hidden"
      className="flex flex-col gap-xl container mx-auto relative"
      viewport={{ once: true }}
      whileInView="show"
      variants={staggerContainer(stagger, delay)}
    >
      {React.Children.map(children, renderChild)}
    </motion.article>
  );
}
