import { useEffect, useRef } from "react";
import {
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";

/**
 *
 * @param root0
 * @param root0.value
 */

interface Props {
  value: number;
  direction?: "up" | "down";
  as?: string;
  className?: string;
  includePercentageSymbol?: boolean;
}

export default function Counter({
  value,
  direction = "up",
  as = "span",
  className,
  includePercentageSymbol = false,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(
    direction === "down" ? value : 0
  );
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [motionValue, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          let formattedText = Intl.NumberFormat(
            "en-US"
          ).format(latest.toFixed(0));
          if (includePercentageSymbol) {
            formattedText += "%"; // Append percentage symbol if required
          }
          ref.current.textContent = formattedText;
        }
      }),
    [springValue]
  );

  return <span className={className} ref={ref} />;
}
