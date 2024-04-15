"use client";

import type {
  Project,
  ProjectFeature,
  ProjectHero,
} from "@/types";
// import type { ReactElement, type ReactNode } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardSvg,
  CardContent,
  CardGlow,
  //   CardParagraph,
  CardFooter,
  CardNavigators,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import React, { useState, type ReactNode } from "react";
import { cn } from "@/utils/cn";

// interface FeatureCard {
//   id: number;
//   title: string;
//   description: string;

//   svg: ReactNode;
//   content: ReactNode;
// };

const IMG_PADDING = 12;

//ponemos todo aca?
export function Project(props: Project) {
  const {
    features: propFeatures,
    title,
    description,
    client,
    tools,
  } = props;

  const [features, setFeatures] =
    useState<ProjectFeature[]>(propFeatures);
  const [activeFeature, setActiveFeature] =
    useState<ProjectFeature>(propFeatures[0]);

  //TODO: SEparate between featuredFeatures and remainingFeatures (which will be on carousel)

  console.log(
    "features",
    propFeatures,
    features,
    activeFeature
  );

  const moveSelectedFeatureToTop = (idx: number) => {
    const newFeatures = [...propFeatures];
    const selectedFeature = newFeatures.splice(idx, 1);
    newFeatures.unshift(selectedFeature[0]);
    setFeatures(newFeatures);
    setActiveFeature(newFeatures[0]);
  };

  return (
    <ProjectContainer>
      <ProjectHeader className="">
        <ProjectClient>{client}</ProjectClient>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>
          {description}
        </ProjectDescription>
      </ProjectHeader>
      <ProjectGrid>
        <ProjectHero
          title={activeFeature.title}
          content={activeFeature.content}
        />

        <ProjectFeatures
          features={features}
          activeFeature={activeFeature}
          moveSelectedFeatureToTop={
            moveSelectedFeatureToTop
          }
        />
        <ProjectTools tools={tools} />
      </ProjectGrid>
    </ProjectContainer>
  );
}

const ProjectContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-2xl", className)}
    {...props}
  />
));

ProjectContainer.displayName = "ProjectContainer";

const ProjectHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    // className={cn("flex flex-col gap-s", className)}
    className={cn(
      " flex flex-col gap-s items-center justify-center",
      className
    )}
    {...props}
  />
));

ProjectHeader.displayName = "ProjectHeader";

const ProjectClient = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      "px-2 py-1 border rounded-md border-white w-max",
      className
    )}
    {...props}
  />
));

ProjectClient.displayName = "ProjectClient";

const ProjectTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2 ref={ref} className={cn(" ", className)} {...props} />
));

ProjectTitle.displayName = "ProjectTitle";

const ProjectDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("mt-3 text-center ", className)}
    {...props}
  />
));

ProjectDescription.displayName = "ProjectDescription";

const ProjectGrid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "grid grid-cols-12 row-span-12 gap-m  w-full h-full ",
      className
    )}
    {...props}
  />
));

ProjectGrid.displayName = "ProjectGrid";

function ProjectHero({
  title,
  content,
  className,
  ...props
}: {
  title: string;
  content: ReactNode;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "col-span-9 row-span-12 flex flex-col gap-s w-full h-full",
        className
      )}
      {...props}
    >
      <CardGlow />
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
}

// const ProjectHeroImage = React.forwardRef<
//   HTMLDivElement,
//   React.HTMLAttributes<HTMLDivElement>
// >(({ imgUrl, className, ...props }, ref) => (
//   <div
//     style={{
//       backgroundImage: `url(${imgUrl})`,
//       backroundSize: "cover",
//       backgroundPosition: "center",
//       height: `calc(100vh-${IMG_PADDING * 2}px)`,
//     }}
//     ref={ref}
//     className={cn(
//       "col-span-9 flex flex-col gap-s",
//       className
//     )}
//     {...props}
//   />
// ));

// ProjectHero.displayName = "ProjectHero";

function ProjectFeatures({
  features,
  activeFeature,
  offset = 10,
  scaleFactor = 0.06,
  moveSelectedFeatureToTop,
}: {
  features: ProjectFeature[];
  activeFeature: ProjectFeature;
  offset?: number;
  scaleFactor?: number;
  moveSelectedFeatureToTop: (idx: number) => void;
}) {
  const [cards, setCards] =
    useState<ProjectFeature[]>(features);

  const [hovering, setHovering] = useState(false);

  function FadeInCard() {
    return (
      <div className="relative w-full h-full">
        {features.map((feature, idx) => (
          <motion.div
            key={feature.title}
            layoutId={feature.title}
            style={{
              scale: 1 - idx * 0.1,
              top: hovering ? idx * -50 : 0,
              zIndex: -idx,
              opacity: idx < 3 ? 1 - idx * 0.1 : 0,
            }}
            animate={{
              y:
                feature.title === activeFeature.title
                  ? [0, 40, 0]
                  : 0,
            }}
            className={cn(
              "w-full h-full absolute top-0 left-0"
            )}
          >
            <Card>
              <CardHeader className="flex justify-between">
                <CardTitle>{feature.title}</CardTitle>
                <CardSvg>{feature.svg}</CardSvg>
              </CardHeader>
              <Separator />
              <CardContent>
                <p>{feature.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <Card className="relative col-span-3 row-span-6 ">
      <CardGlow />
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          className="absolute dark:bg-black  rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white-[0.1]  shadow-black-[0.1] dark:shadow-white-[0.05] flex flex-col justify-between"
          style={{
            transformOrigin: "right center",
          }}
          animate={{
            right: index * -offset,
            scale: 1 - index * scaleFactor, // decrease scale for cards that are behind
            zIndex: cards.length - index, // decrease z-index for the cards that are behind
          }}
        >
          <FadeInCard />
        </motion.div>
      ))}
    </Card>
  );
}

ProjectFeatures.displayName = "ProjectFeatures";

const ProjectNavigator = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("project-navigator", className)}
    {...props}
  />
));

ProjectNavigator.displayName = "ProjectNavigator";

function ProjectTools({ tools }: { tools: string[] }) {
  return (
    <Card className="col-span-3 row-span-6">
      <CardHeader>
        <CardTitle>Tools</CardTitle>
      </CardHeader>
      <CardContent>
        {tools.map((tool, index) => (
          <span key={index}>{tool}</span>
        ))}
      </CardContent>
    </Card>
  );
}

const ProjectView = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={cn("project-view", className)}
    {...props}
  />
));

ProjectView.displayName = "ProjectView";
