"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { Stat, type StatProps } from "@/components/ui/stat";

export interface Tab {
  title: string;
  value: string;
  content?: TabContent;
}

interface TabContent {
  header: string;
  description?: string;
  stats?: StatProps[];
  image?: string;
}

interface Props {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}

export function Tabs({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: Props) {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <div className="">
      <div
        className={cn(
          "flex flex-row   items-center justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => {
              moveSelectedTabToTop(idx);
            }}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn(
              "relative px-4 py-2 rounded-full",
              tabClassName
            )}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{
                  type: "spring",
                  bounce: 0.3,
                  duration: 0.6,
                }}
                className={cn(
                  "absolute inset-0 bg-[#9DF2D5] rounded-xl ",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block text-bgColor ">
              {tab.title}
            </span>
          </button>
        ))}
      </div>
      <FadeInDiv
        tabs={tabs}
        active={active}
        key={active.value}
        hovering={hovering}
        className={cn("mt-6xl", contentClassName)}
      />
    </div>
  );
}

function FadeInDiv({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) {
  const isActive = (tab: Tab) => {
    return tab.value === tabs[0].value;
  };
  return (
    <div className="relative w-full    ">
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: idx * -70,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.3 : 0,
          }}
          animate={{
            y: isActive(tab) ? [0, 40, 0] : 0,
          }}
          className={cn(
            "min-h-max min-w-[50svw] absolute inset-0 bg-bgColor   rounded-[3rem]  ",
            className
          )}
        >
          <TabContent
            header={tab.content?.header}
            description={tab.content?.description}
            stats={tab.content?.stats}
            image={tab.content?.image}
          />
        </motion.div>
      ))}
    </div>
  );
}

function TabContent({
  header,
  description,
  stats,
  image,
}: TabContent) {
  return (
    <div className=" p-2xl flex gap-l flex-col items-center   shadow-xl min-w-0 h-full rounded-xl ">
      <h5>{header}</h5>
      <p className="prose-p w-screen h-max ">
        {description}
      </p>
      <div className="flex flex-row gap-2xl items-center align-middle justify-start w-full  z-10 max-w-2xl mt-xl">
        {stats &&
          stats.map((statItem, index) => (
            <Stat
              key={index}
              value={statItem.value}
              label={statItem.label}
              includePercentageSymbol={
                statItem.includePercentageSymbol
              }
            />
          ))}
      </div>
      {image && (
        <motion.img
          initial={{
            y: -10,
            rotate: -2,
          }}
          animate={{
            y: 0,
            rotate: 0,
            transition: {
              type: "spring",
              damping: 50,
              stiffness: 100,
              bounce: 10,
            },
          }}
          src={image}
          alt={header}
          className="mt-xl aspect-video   rounded-xl object-cover object-left-top h-[60%]  md:h-[90%]  w-[90%]"
          loading="lazy"
          decoding="async"
          width="1000"
          height="1000"
        />
      )}
    </div>
  );
}
