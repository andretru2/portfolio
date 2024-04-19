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
import { MovingBorderWrapper } from "@/components/ui/moving-border";

import BHFHero from "@/pages/_assets/bhf-hero.png";
import { projects } from "@/config/projects";

const IMG_PADDING = 12;

//ponemos todo aca?

export function Projects() {
  return projects.map((project, i) => {
    return (
      <Project
        key={i}
        title={project.title}
        description={project.description}
        client={project.client}
        tools={project.tools}
        features={project.features}
        roles={project.roles}
      />
    );
  });
}

function Project(props: Project) {
  const {
    features: propFeatures,
    title,
    description,
    client,
    tools,
    roles,
  } = props;

  const [features, setFeatures] =
    useState<ProjectFeature[]>(propFeatures);
  const [activeFeature, setActiveFeature] =
    useState<ProjectFeature>(propFeatures[0]);
  // const [activeFeature, setActiveFeature] =
  //   useState<ProjectFeature>(projects[0].features[0]);

  //TODO: SEparate between featuredFeatures and remainingFeatures (which will be on carousel)

  const moveSelectedFeatureToTop = (idx: number) => {
    const newFeatures = [...propFeatures];
    const selectedFeature = newFeatures.splice(idx, 1);
    newFeatures.unshift(selectedFeature[0]);
    console.log("idx", idx, newFeatures);

    setFeatures(newFeatures);
    setActiveFeature(newFeatures[0]);
  };

  return (
    <ProjectContainer>
      <ProjectHeader className="">
        <ProjectClient> {client}</ProjectClient>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>
          {description}
        </ProjectDescription>
      </ProjectHeader>
      <ProjectGrid>
        {/* <CardGlow /> */}
        {/* <ProjectHero>{activeFeature.content}</ProjectHero> */}
        {/* <ProjectHero>{content}</ProjectHero> */}
        <ProjectHero>{activeFeature.content}</ProjectHero>
        {/* <ProjectHero>
          {projects[0].features[0].content}
        </ProjectHero> */}
        {/* <ProjectHero>
          <img 
            style={{
              backgroundImage: `url(${BHFHero.src})`,

              backgroundSize: "cover",
              backgroundPosition: "center",
              border: "border-transparent",

              height: BHFHero.height,
              // width: `calc(${BHFHero.width} + 300)px`,
            }}
            className="h-full w-full  rounded-3xl "
          />
        </ProjectHero> */}
        {/* <ProjectHero>{renderActiveFeature()}</ProjectHero> */}
        {/* {renderActiveFeature()} */}

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
    className={cn(
      "flex flex-col gap-2xl container mx-auto ",
      className
    )}
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
  <MovingBorderWrapper className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800">
    {props.children}
  </MovingBorderWrapper>

  // <p
  //   ref={ref}
  //   className={cn(
  //     "px-2 py-1 border rounded-md border-white w-max",
  //     className
  //   )}
  //   {...props}
  // />
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
      "grid grid-cols-12 row-span-12 gap-m  w-full h-full max-h-[70dvh] ",
      className
    )}
    {...props}
  />
));

ProjectGrid.displayName = "ProjectGrid";

// function ProjectHero({
//   children,
//   className,
// }: {
//   children: ReactNode;
//   className?: string;
// }) {
//   return (
//     <div className="relative w-full col-span-9 row-span-12 ">
//       {/* <CardGlow /> */}
//       <Card
//         className={cn(
//           " relative flex flex-col gap-s w-full min-h-[55svh]",
//           className
//         )}
//       >
//         <CardHeader>
//           {/* <CardTitle>{title}</CardTitle> */}
//         </CardHeader>
//         {/* <CardGlow /> */}
//         <CardContent>{children}</CardContent>
//       </Card>
//     </div>
//   );
// }

function ProjectHero({
  title,
  content,
  className,
  activeFeature,
  children,
  ...props
}: {
  title: string;
  content: ReactNode;
  activeFeature: ProjectFeature;
  children: ReactNode;
  className?: string;
}) {
  // console.log(activeFeature.content);
  return (
    <motion.div className="relative w-full col-span-9 row-span-12 ">
      {/* <CardGlow /> */}
      <Card
        className={cn(
          " relative flex flex-col gap-s w-full min-h-[55svh]",
          className
        )}
        {...props}
      >
        {/* <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader> */}
        {/* <CardGlow /> */}
        <CardContent>{children}</CardContent>
      </Card>
    </motion.div>
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
      <motion.div className="relative w-full h-full">
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
            <Card className="relative w-full h-full ">
              <CardHeader className="flex flex-row items-center align-text-bottom justify-between">
                <CardTitle className="">
                  {feature.title}
                  {/* About */}
                </CardTitle>
                <CardSvg>{feature.svg}</CardSvg>
              </CardHeader>

              <CardContent className="space-y-m">
                <Separator />
                <p>{feature.description}</p>
              </CardContent>

              <CardNavigators
                number={idx}
                onPrev={() =>
                  moveSelectedFeatureToTop(idx - 1)
                }
                onNext={() =>
                  moveSelectedFeatureToTop(idx + 1)
                }
              />
            </Card>
          </motion.div>
        ))}
      </motion.div>
    );
  }
  console.log(cards);

  return (
    <motion.div className="relative col-span-3 row-span-6 group isolate">
      <CardGlow />
      {/* <Card className="relative "> */}
      {cards.map((card, index) => (
        <motion.div
          layout
          // layoutId={card.title}
          key={card.title}
          className="absolute  h-full w-full  rounded-3xl   shadow-xl   border-white-[0.1]   shadow-white-[0.05] flex flex-col justify-between"
          style={{
            transformOrigin: "top center",
          }}
          animate={{
            left: index * -offset,
            scale: 1 - index * scaleFactor, // decrease scale for cards that are behind
            zIndex: cards.length - index, // decrease z-index for the cards that are behind
          }}
        >
          <FadeInCard />
        </motion.div>
      ))}
      {/* </Card> */}
    </motion.div>
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
