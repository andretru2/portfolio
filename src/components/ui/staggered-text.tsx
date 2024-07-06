import {
  motion,
  type HTMLMotionProps,
} from "framer-motion";

interface Props extends HTMLMotionProps<any> {
  words: string;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

export function StaggeredText({
  words,
  as = "h1",
  className,
  ...rest
}: Props) {
  const letters = words.split("");
  // const MotionComponent = motion[as];

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: any) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.05, // Delay each letter's animation by 0.05 seconds
      },
    }),
  };

  return (
    <div className="flex justify-center">
      {letters.map((letter, i) => (
        <motion.h3
          key={i}
          variants={pullupVariant}
          whileInView="animate"
          initial="initial"
          // animate="animate"
          custom={i}
          className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
          {...rest}
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.h3>
      ))}
    </div>
  );
}
