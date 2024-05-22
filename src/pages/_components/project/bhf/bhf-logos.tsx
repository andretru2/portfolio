import { motion } from "framer-motion";

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
      className="grid grid-cols-5 gap-m place-content-center"
    >
      {logos.map((logo, i) => (
        <Logo logo={logo} key={i} />
      ))}
    </motion.div>
  );
}

function Logo({ logo }: { logo: string }) {
  return (
    <motion.svg
      variants={item}
      dangerouslySetInnerHTML={{ __html: logo }}
      className="max-w-16 max-h-8 fill-white "
    />
  );
}
