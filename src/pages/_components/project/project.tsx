import type {
  Project,
  ProjectFeature,
  ProjectHero,
} from "@/types";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
  useTime,
  AnimatePresence,
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

import BHFHero from "@/pages/_assets/bhf-hero.mp4";
import { projects } from "@/config/projects";

// import * as THREE from "three";

import {
  Canvas,
  useThree,
  useFrame,
} from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";

import { degreesToRadians, progress, mix } from "popmotion";

const IMG_PADDING = 12;

//ponemos todo aca?

function useMeasure() {
  const [dimensions, setDimensions] = React.useState({
    width: null,
    height: null,
  });

  const previousObserver = React.useRef(null);

  const customRef = React.useCallback((node) => {
    if (previousObserver.current) {
      previousObserver.current.disconnect();
      previousObserver.current = null;
    }

    if (node?.nodeType === Node.ELEMENT_NODE) {
      const observer = new ResizeObserver(([entry]) => {
        if (entry && entry.borderBoxSize) {
          const { inlineSize: width, blockSize: height } =
            entry.borderBoxSize[0];

          setDimensions({ width, height });
        }
      });

      observer.observe(node);
      previousObserver.current = observer;
    }
  }, []);

  return [customRef, dimensions];
}

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

function ProjectRoles({ roles }: { roles: string[] }) {
  function Fallbox({
    items,
    className,
  }: {
    items: string[];
    className?: string;
  }) {
    const [ref, bounds] = useMeasure();

    return (
      <div
        ref={ref}
        className={cn(
          " bg-none  border-fuchsia-500 border ",
          className
        )}
      >
        <AnimatePresence>
          {items.map((item, index) => (
            <FallboxItem
              key={item}
              item={item}
              height={bounds.height}
              width={bounds.width}
            />
          ))}
        </AnimatePresence>
      </div>
    );
  }

  function FallboxItem({
    item,
    height,
    width,
  }: {
    item: string;
    height: number;
    width: number;
  }) {
    const middle = width / 2;
    const range = middle / 2;
    const min = middle - range;
    const max = middle + range;

    const initialX = 400;
    const x = Math.floor(Math.random() * (max - min) + min);
    console.log("x", width, x, middle, range, min, max);
    return (
      <motion.span
        layout
        initial={{ opacity: 0.5, y: -40, x: initialX }}
        animate={{ opacity: 1, y: height, x: x }}
        transition={{
          // duration: 0.3, // Animation duration in seconds
          delay: Math.random() * 0.8, // Delay before animation starts in seconds
          ease: "easeInOut", // Easing function
        }}
        // exit={{ opacity: 1, y: 100 }}
        style={{
          // y: "-40px",
          zIndex: -10,
          rotate: Math.random() * 60,
        }}
        className="absolute flex  w-max  rounded-full items-center justify-center px-m py-s bg-accent-3 shadow-textColor/60 shadow-sm "
      >
        {item}
      </motion.span>
    );
  }
  return (
    <Fallbox
      // items={roles.slice(0, 3)}
      items={roles}
      className="absolute top-20 h-full w-full"
    />
  );
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
    <ProjectContainer className="">
      <ProjectHeader className="relative">
        <ProjectClient> {client}</ProjectClient>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>
          {description}
        </ProjectDescription>
        <ProjectRoles roles={roles} />
      </ProjectHeader>

      <ProjectGrid className="relative">
        {/* <ProjectHero>{activeFeature.content}</ProjectHero> */}
        <ProjectHero />

        {/* <ProjectFeatures
          features={features}
          activeFeature={activeFeature}
          moveSelectedFeatureToTop={
            moveSelectedFeatureToTop
          }
        /> */}

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
      "flex flex-col gap-2xl container mx-auto bg-dotted ",
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
      " flex flex-col gap-s items-center justify-center   ",
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
      "grid grid-cols-12 mt-8 row-span-12 gap-m  w-full h-full max-h-[70dvh] bg-dotted ",
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

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      className={`w-full col-span-9 row-span-12 ${className}`}
    >
      <CardContent>
        <video
          autoPlay={isHovered}
          loop
          muted
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="h-full w-full"
        >
          <source src={BHFHero} type="video/mp4" />
        </video>
      </CardContent>
    </Card>
  );

  return (
    <div className="relative w-full col-span-9 row-span-12 ">
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
    </div>
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
  offset = -12,
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

  function FeatureStack() {
    return (
      <div className="relative col-span-3 row-span-6 group  [perspective:1000px] overflow-auto sm:overflow-visible no-visible-scrollbar">
        {features.map((feature, index) => (
          <motion.div
            layout
            layoutId={feature.title}
            key={feature.title}
            className="absolute h-full w-full rounded-3xl shadow-xl border-white-[0.1] shadow-white-[0.05] flex flex-col justify-between "
            style={{
              transformOrigin: "right right", // Adjusted for horizontal stacking
              transformStyle: "preserve-3d", // Add this to enable 3D transforms
              backfaceVisibility: "hidden", // Add this to hide the backface of the cards
              border:
                index === 0 ? "2px solid red" : "none",
            }}
            animate={{
              left: index * -offset, // Adjusted to position cards horizontally
              scale: 1 - index * scaleFactor, // Adjusted to decrease scale for cards that are behind
              zIndex: features.length - index, // Ensures the top card has the highest zIndex
            }}
          >
            <Card className="relative w-full h-full">
              <CardHeader className="flex flex-row items-center align-text-bottom justify-between">
                <CardTitle className="">
                  {feature.title}
                </CardTitle>
                <CardSvg>{feature.svg}</CardSvg>
              </CardHeader>

              <CardContent className="space-y-m">
                <Separator />
                <p>{feature.description}</p>
              </CardContent>

              <CardNavigators
                onPrev={() =>
                  moveSelectedFeatureToTop(index - 1)
                }
                onNext={() =>
                  moveSelectedFeatureToTop(index + 1)
                }
              />
            </Card>
          </motion.div>
        ))}
      </div>
    );
  }

  function FadeInCard() {
    return (
      <div className="relative w-full h-full">
        {features.map((feature, idx) => (
          <motion.div
            layout
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
      </div>
    );
  }

  return <FeatureStack />;
  return (
    <div className="relative col-span-3 row-span-6 group isolate">
      <CardGlow />
      {/* <Card className="relative "> */}
      {cards.map((card, index) => (
        <motion.div
          layout
          layoutId={card.title}
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
    </div>
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
  const color = "#111111";

  const Icosahedron = () => (
    <mesh rotation-x={0.35}>
      <icosahedronGeometry args={[1, 0]} />
      <meshBasicMaterial wireframe color={color} />
    </mesh>
  );
  const Star = ({ p }: { p: number }) => {
    // const ref = useRef<THREE.Object3D>(null);
    const ref = useRef(null);

    useLayoutEffect(() => {
      const distance = mix(2, 3.5, Math.random());
      const yAngle = mix(
        degreesToRadians(80),
        degreesToRadians(100),
        Math.random()
      );
      const xAngle = degreesToRadians(360) * p;
      ref.current!.position.setFromSphericalCoords(
        distance,
        yAngle,
        xAngle
      );
    });

    return (
      <mesh ref={ref}>
        <boxGeometry args={[0.05, 0.05, 0.05]} />
        <meshBasicMaterial wireframe color={color} />
      </mesh>
    );
  };

  function Scene({ numStars = 100 }) {
    const gl = useThree((state) => state.gl);
    const { scrollYProgress } = useScroll();
    const yAngle = useTransform(
      scrollYProgress,
      [0, 1],
      [0.001, degreesToRadians(180)]
    );
    const distance = useTransform(
      scrollYProgress,
      [0, 1],
      [10, 3]
    );
    const time = useTime();

    useFrame(({ camera }) => {
      camera.position.setFromSphericalCoords(
        distance.get(),
        yAngle.get(),
        time.get() * 0.0005
      );
      camera.updateProjectionMatrix();
      camera.lookAt(0, 0, 0);
    });

    useLayoutEffect(() => gl.setPixelRatio(0.3));

    const stars = [];
    for (let i = 0; i < numStars; i++) {
      stars.push(
        <Star key={i} p={progress(0, numStars, i)} />
      );
    }

    return (
      <>
        <Icosahedron />
        {stars}
      </>
    );
  }

  return (
    <Card className="relative col-span-3 row-span-6 ">
      <CardHeader>
        <CardTitle>Tools</CardTitle>
      </CardHeader>
      <CardContent className="absolute inset-0">
        {/* {tools.map((tool, index) => (
          <span key={index}>{tool}</span>
        ))} */}

        <Canvas gl={{ antialias: false }}>
          <Scene />
        </Canvas>
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
