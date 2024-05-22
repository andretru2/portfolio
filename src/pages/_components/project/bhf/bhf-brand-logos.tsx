import { motion } from "framer-motion";
import { div } from "three/examples/jsm/nodes/Nodes.js";

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
  hidden: { opacity: 0, y: -24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: "easeIn",

      // repeat: "infinity",
    },
  },
};

export function BhfBrandLogos({ logos }: Props) {
  // const [selected, setSelected ] =

  const ROWS = 2;
  const ITEMS_PER_ROW = 4;
  const pageSize = 4;

  return Array.from({ length: ROWS }).map((row, num) => {
    const pageNum = num + 1;

    const start =
      pageSize === Number.POSITIVE_INFINITY
        ? 0
        : (pageNum - 1) * pageSize; // currentPage is 1-indexed
    const end = Math.min(start + pageSize, logos.length);

    return (
      <motion.div
        key={num}
        variants={container}
        initial="hidden"
        animate="show"
        data-id={num}
        className="grid grid-flow-col gap-m place-content-center "
      >
        {logos.slice(start, end).map((logo, i) => (
          <Logo logo={logo} key={i} />
        ))}
      </motion.div>
    );
  });
}

// return Array.from({ length: ROWS }, (_, i) => (
//   <motion.div
//     key={i}
//     variants={container}
//     initial="hidden"
//     animate="show"
//     data-id={i}
//     className="grid grid-flow-col gap-m place-content-center "
//   >
//     {...logos
//       .slice(i * ITEMS_PER_ROW, ITEMS_PER_ROW)
//       .map((logo, i) => <Logo logo={logo} key={i} />)}
//   </motion.div>
// ));
// }

function Logo({ logo }: { logo: string }) {
  return (
    <motion.svg
      variants={item}
      dangerouslySetInnerHTML={{ __html: logo }}
      className="max-w-16 max-h-8 fill-white "
    />
  );
}
