import { motion, stagger } from "framer-motion";

interface Props {
  logos: string[];
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export function BhfLogos({ logos }: Props) {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-5 gap-xs place-content-center"
    >
      {logos.map((logo) => (
        <Logo src={logo.src} key={logo} />
      ))}
    </motion.div>
  );
}

function Logo({ src }: { src: string }) {
  return (
    <motion.img
      variants={item}
      src={src}
      alt="Logo"
      className="text-white bg-white aspect-video max-h-16 max-w-32"
    />
  );
}
