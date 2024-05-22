"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { Separator } from "@/components/ui/separator";
import { HighlightWords } from "@/components/ui/highlight-words";
import { BhfLogos } from "./bhf/bhf-brand-logos";

import { type ProjectFeature } from "@/types";

let interval: any;

export function ProjectCardStack({
  features,
}: ProjectFeature[]) {
  const CARD_OFFSET = 10;
  const SCALE_FACTOR = 0.06;
  const DURATION = 5;
  const [cards, setCards] =
    useState<ProjectFeature[]>(features);

  useEffect(() => {
    const interval = setInterval(() => {
      setCards((prevCards) => {
        const newArray = [...prevCards];
        newArray.unshift(newArray.pop()!);
        return newArray;
      });
    }, DURATION * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          className="absolute p-m gap-4 bg-black  w-full h-full rounded-3xl shadow-xl border border-white/30  dark:shadow-white/[0.05] flex flex-col"
          style={{ transformOrigin: "top center" }}
          animate={{
            top: index * -CARD_OFFSET,
            scale: 1 - index * SCALE_FACTOR,
            zIndex: cards.length - index,
          }}
        >
          <Card
            title={card.title}
            description={card.description}
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
    <div className="flex flex-col justify-between gap-m">
      <div className="flex flex-row justify-between">
        <h6 className="text-textColor/60">{title}</h6>
        {/* <svg>{card.svg}</svg> */}
      </div>
      <Separator />
      {wordsToHighlight ? (
        <HighlightWords
          text={description}
          highlightWords={wordsToHighlight}
        />
      ) : (
        <p>{description}</p>
      )}
    </div>
  );
}
