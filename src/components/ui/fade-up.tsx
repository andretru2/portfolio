"use client";
import { motion } from "framer-motion";

export function FadeUpStagger() {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="self-center"
      whileInView="show"
      // viewport={{ once: true }}
      viewport={{ once: true }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <motion.h3
        initial="hidden"
        animate="show"
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-white"
      >
        testtt
      </motion.h3>
      <motion.h4
        initial="hidden"
        animate="show"
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-white"
      >
        xs
      </motion.h4>
      <motion.h4
        initial="hidden"
        animate="show"
        variants={FADE_UP_ANIMATION_VARIANTS}
        className="text-white"
      >
        xxxxs
      </motion.h4>
    </motion.div>
  );
}
