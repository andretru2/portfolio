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
    <div className="w-full h-s rounded-lg overflow-hidden bg-white my-2">
      {header && (
        <span className="absolute  opacity-80  top-[0.8rem] text-xs">
          {header}
        </span>
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
