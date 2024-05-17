import { motion } from "framer-motion";
import { useRef } from "react";

interface Props {
  duration?: number;
  delay?: number;
}

export function ProgressBar({
  duration = 10,
  delay,
}: Props) {
  const ref = useRef(null);
  return (
    <div className="w-full h-s rounded-lg overflow-hidden bg-white my-2">
      {/* Use a ref on the progress bar div */}
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
