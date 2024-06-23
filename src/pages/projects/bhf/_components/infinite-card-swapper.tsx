"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardSvg,
  CardContent,
  CardGlow,
  CardFooter,
  CardNavigators,
} from "@/components/ui/card";
import { Section } from "@/components/ui/section";

interface Props {
  features: Card[];
}

interface Card {
  title?: string;
  description?: string;
  image?: string;
}

const features = [
  {
    title: "Purchase Orders",
    description: "xxxxxxxxxxx",
  },
  {
    title: "Invoices",
    description: "xxxxxxxxxxx",
  },
  {
    title: "PO Matching",
    description: "xxxxxxxxxxx",
  },
];

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 100,
  //   duration: 5,
  bounce: 0,
};

const variantsPast = {
  initial: {
    x: 0,
    rotate: 0,
    opacity: 1,
  },
  animate: {
    x: -30,
    rotate: -30,
    opacity: 0.6,
  },
  exit: {
    x: -60,
    rotate: -60,
    opacity: 0,
  },
  transition: spring,
};

const variantsActive = {
  initial: {
    x: 30,
    rotate: 30,
    opacity: 0.6,
  },
  animate: {
    x: 0,
    rotate: 0,
    opacity: 1,
  },
  transition: spring,
};

const variantsUpcoming = {
  initial: {
    x: 30,
    rotate: 30,
    opacity: 0.6,
  },
  animate: {
    x: 60,
    rotate: 60,
    opacity: 0,
  },
  enter: {},
  transition: spring,
};

export function InfiniteCardSwapper() {
  const [past, setPast] = useState<Card[] | null>(null);
  const [active, setSActive] = useState<Card>(features[0]);
  const [upcoming, setUpcoming] =
    useState<Card[]>(features);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  return (
    <Section
      title="Features"
      idName="features"
      minHeight="120svh"
      backgroundColor="accent"
      className="  w-full flex  flex-col items-center justify-center"
    >
      <motion.div
        ref={container}
        layout
        // whileInView={{ rotate: 30 }}
        // viewport={{ once: false }}
        className=" flex flex-row gap-2xl"
      >
        {past?.map((feature, i) => {
          return (
            <FeatureCard
              key={i}
              {...feature}
              status="past"
            />
          );
        })}
        <FeatureCard {...active} />
        {upcoming?.map((feature, i) => {
          return <FeatureCard key={i} {...feature} />;
        })}
      </motion.div>
    </Section>
  );
}

function FeatureCard({
  title,
  description,
  image,
  status,
}: Card) {
  return (
    <Card
      className="bg-bgColor size-96"
      variants={variantsPast}
      initial="initial"
      // animate="animate"
      whileInView="animate"
      viewport={{ once: false }}
      layout
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {/* <CardSvg></CardSvg> */}
      </CardHeader>
      <CardContent className=" flex flex-col gap-xl items-center justify-center top-4 ">
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
