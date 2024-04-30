import {
  useAnimation,
  useInView,
  motion,
} from "framer-motion";
import { useEffect, useRef } from "react";

export const SignatureAnimation = () => {
  const control = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px 0px",
    once: true,
  });

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    }
  }, [control, isInView]);

  const pathVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div ref={ref}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 123 42"
        style={{ width: "100%", height: "auto" }}
      >
        <motion.path
          d="M6.128 41.36L5.312 41.264H5.168C5.04 41.328 4.752 41.328..."
          fill="#FCFCFC"
          variants={pathVariants}
          initial="hidden"
          animate={control}
        />
      </motion.svg>
    </div>
  );
};
