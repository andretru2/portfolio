"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Separator } from "@/components/ui/separator";
import { HighlightWords } from "@/components/ui/highlight-words";

import { type ProjectFeature } from "@/types";

interface Props {
  features: ProjectFeature[];
}

export function ProjectCardStack({ features }: Props) {
  const CARD_OFFSET = 10;
  const SCALE_FACTOR = 0.06;
  const DURATION = 8 / features.length;
  const [cards, setCards] =
    useState<ProjectFeature[]>(features);

  useEffect(() => {
    setCards(features);

    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, DURATION * 1000);

    return () => clearInterval(interval);
  }, [features]);

  // if (features !== cards) {
  //   setCards(features);
  // }

  return (
    <div className="relative w-full h-full">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          className="absolute p-m gap-4 bg-black  w-full h-full rounded-xl shadow-sm border border-white/30  dark:shadow-white/[0.05] flex flex-col"
          style={{ transformOrigin: "top center" }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
        >
          <Card
            section={card.section}
            title={card.title}
            description={card.description}
            // content={card.content}
            wordsToHighlight={card.wordsToHighlight}
          />
        </motion.div>
      ))}
    </div>
  );
}

function Card({
  title,
  description,
  wordsToHighlight,
}: ProjectFeature) {
  return (
    <motion.div className="flex flex-col justify-between gap-s h-max p-s overflow-hidden  ">
      <div className="flex flex-row justify-between">
        <h6 className="">{title}</h6>
        {/* <svg>{card.svg}</svg> */}
      </div>
      <Separator />

      <p>{description}</p>
      {/* <HighlightWords
        text={description}
        highlightWords={wordsToHighlight}
      /> */}
    </motion.div>
  );
}
