import { motion } from "framer-motion";
import { useRef } from "react";
import { durationProjectReel } from "@/config/site";

interface Props {
  duration?: number;
  delay?: number;
  header?: string;
}

export function ProgressBar({
  duration = durationProjectReel,
  delay,
  header = "About",
}: Props) {
  const ref = useRef(null);
  return (
    <div className="w-full h-[0.4rem]  relative  overflow-hidden bg-white my-2 rounded-xl">
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
        className="h-s bg-accent  relative"
        style={{ originX: 0 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: duration,
          ease: "linear",
          delay: delay,
        }}
      />
    </div>
  );
}
