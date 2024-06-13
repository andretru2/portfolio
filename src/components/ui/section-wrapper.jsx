import { motion } from "framer-motion";

import { staggerContainer } from "@/utils/motion";

export function SectionWrapper({
  children,
  idName = "test",
}) {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`py-3xl max-w-7xl mx-auto relative z-0`}
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>

      {children}
    </motion.section>
  );
}
