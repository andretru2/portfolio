import { motion } from "framer-motion";
import { useRef } from "react";

interface Props {
  duration?: number;
  delay?: number;
  header?: string;
}

export function ProgressBar({
  duration = 10,
  delay,
  header = "About",
}: Props) {
  const ref = useRef(null);
  return (
    <div className="w-full h-[0.4rem] rounded-xl overflow-hidden bg-white my-2">
      {header && (
        <motion.span
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.8,
          }}
          transition={{
            delay: delay,
          }}
          className="absolute    top-[0.8rem] text-xs"
        >
          {header}
        </motion.span>
      )}
      <motion.div
        ref={ref}
        className="h-s bg-accent rounded-lg"
        style={{ originX: 0 }}
        initial={{ scaleX: 0 }} // Start scaled down
        animate={{ scaleX: 1 }} // Scale to full width
        transition={{
          duration: duration,
          ease: "linear",
          delay: delay,
        }} // Transition over 10 seconds
      />
    </div>
  );
}
