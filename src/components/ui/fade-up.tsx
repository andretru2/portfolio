import { cn } from "@/utils/cn";
import { motion } from "framer-motion";

export function FadeUpStagger({
  slotOne,
  slotTwo,
  slotThree,
  slotFour,
}) {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" },
    },
  };
  return (
    <motion.article
      initial="hidden"
      // animate="show"
      className="flex flex-col gap-xl container mx-auto relative"
      viewport={{ once: false }}
      whileInView="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.3,
            delayChildren: 0.4,
          },
        },
      }}
    >
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
        {slotOne}
      </motion.div>
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
        {slotTwo}
      </motion.div>
      <motion.div variants={FADE_UP_ANIMATION_VARIANTS}>
        {slotThree}
      </motion.div>
    </motion.article>
  );
}
