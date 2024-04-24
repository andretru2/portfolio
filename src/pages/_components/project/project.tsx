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

import React, {
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { cn } from "@/utils/cn";
import { MovingBorderWrapper } from "@/components/ui/moving-border";

import BHFHero from "@/pages/_assets/bhf-hero-original.webp";
import { projects } from "@/config/projects";
import { CardStack } from "@/components/ui/card-stack";
// import { distance } from "@popmotion/popcorn";

// import * as THREE from "three";

import {
  Canvas,
  useThree,
  useFrame,
} from "@react-three/fiber";
import { useRef, useLayoutEffect } from "react";

import { degreesToRadians, progress, mix } from "popmotion";
import { Highlight } from "@/components/ui/highlight";

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
    const [isAnimating, setIsAnimating] =
      useState<boolean>(false);
    // const [completedAnimations, setCompletedAnimations] =
    //   useState(0);

    const [ref, bounds] = useMeasure();
    const { width, height } = bounds;
    const totalItems = items.length;

    const middle = width / 2;
    const range = middle / 2;
    const min = middle - range;
    const max = middle + range;

    // const initialX = Math.random() * 400;

    const BOTTOM = 60;
    const itemWidth = 60; // Assuming each item has a width of 50px
    const gap = 10;

    // Use the useEffect hook to check if all animations are complete
    // useEffect(() => {
    //   if (completedAnimations === totalItems) {
    //     setIsAnimating(false);
    //   }
    // }, [completedAnimations, totalItems]);

    // console.log(completedAnimations, isAnimating);
    return (
      <div
        ref={ref}
        className={cn(
          " [perspective:1000px]",
          isAnimating && "backdrop-blur-sm",

          className
        )}
      >
        <AnimatePresence>
          {items.map((item, index) => {
            const delay = (totalItems - index) * 0.2; // Delay based on index and total items

            const variants = {
              initial: {
                opacity: 0.5,
                y: -600, //cambiar para el scorllY?
              },
              animate: {
                // x: Math.floor(
                //   Math.random() * (max - min) + min
                // ),
                // x: Math.random() * (width - 100),
                x: Math.random() * (width - 100),

                y: height - BOTTOM,
                opacity: 1,

                transition: {
                  duration: 4,
                  ease: "easeOut",
                  delay,
                  // onComplete: () => {
                  //   // Check if all animations are complete
                  //   if (index === totalItems - 1) {
                  //     setIsAnimating(false); // Set to false when the last animation completes
                  //   }
                  // },
                },
              },
            };
            // index === totalItems - 1 &&
            //   setIsAnimating(false);

            return (
              <motion.div
                drag
                dragElastic={1}
                dragConstraints={{
                  left: 0,
                  right: width,
                  top: 0,
                  bottom: height,
                }}
                key={item}
                variants={variants}
                initial="initial"
                animate="animate"
                layout
                style={{
                  rotate:
                    index % 2 ? Math.random() * 20 : 0,
                }}
                className=" flex absolute w-max rounded-full items-center justify-center px-m py-s bg-accent-3 shadow-textColor/60 shadow-sm "
                // onAnimationComplete={() =>
                //   setCompletedAnimations((prev) => prev + 1)
                // }
              >
                <FallboxItem item={item} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    );
  }
  function FallboxItem({ item }: { item: string }) {
    return <span>{item}</span>;
  }
  return (
    <Fallbox
      // items={roles.slice(0, 3)}
      items={roles}
      className="absolute  h-[170%]  w-full"
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

        <ProjectFeatures features={features} />

        {/* <ProjectFeatures
          features={features}
          activeFeature={activeFeature}
          moveSelectedFeatureToTop={
            moveSelectedFeatureToTop
          }
        /> */}

        {/* <ProjectTools tools={tools} /> */}
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
  <MovingBorderWrapper className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800">
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
      "grid grid-cols-8 md:grid-cols-12 mt-12 md:row-span-12 gap-m  w-full h-full md:max-h-[70dvh] bg-dotted ",
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
      className={`w-full col-span-8 md:col-span-8 md:row-span-12 ${className}`}
    >
      <CardContent>
        <motion.img
          whileHover={{
            // scale: 1.15,
            // backgroundColor: "#FFCC4D",
            filter: "grayscale(0%)",
          }}
          src={BHFHero.src}
          alt="BHF Hero"
          style={{
            objectFit: "cover",
            height: "100%",
            width: "100%",
            filter: "grayscale(100%)",
            borderRadius: "1rem", // Adjust as needed
          }}
        />
        {/* <video
          autoPlay={isHovered}
          loop
          muted
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="h-full w-full"
        >
          <source src={BHFHero} type="video/mp4" />
        </video> */}
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
}: {
  features: ProjectFeature[];
}) {
  // const items = [
  //   {
  //     id: 1,
  //     name: "name",
  //     designation: "designation",
  //     content: "content",
  //   },
  //   {
  //     id: 2,
  //     name: "test",
  //     designation: "designation",
  //     content: "content",
  //   },
  //   {
  //     id: 3,
  //     name: "pos",
  //     designation: "designation",
  //     content: "content",
  //   },
  // ];

  const items = [
    {
      id: "1",
      title: "Purchase Orders",
      description: "",
      designation: "designation",
      content: "ss",

      // content: (
      //   <p>
      //     Streamlining and organizing a lot of tedious
      //     manual work, resulting in{" "}
      //     <Highlight>
      //       generating millions of dollars in revenue each
      //       year.
      //     </Highlight>
      //   </p>
      // ),
    },
    {
      id: "2",
      title: "About",
      description: "",
      designation: "designation",
      content: "xx",

      // content: (
      //   <p>
      //     xxxork, resulting in{" "}
      //     <p>
      //       generating millions of dollars in revenue each
      //       year.
      //     </p>
      //   </p>
      // ),
    },
    {
      id: "3",
      title: "pos",
      designation: "designation",
      content: "content",
    },
  ];

  console.log(features);
  return (
    <Card className="col-span-8 md:col-span-4 md:row-span-6 w-full h-full">
      {/* <CardHeader>
        <CardTitle>Features</CardTitle>
      </CardHeader> */}
      <CardContent className=" flex items-center justify-center top-4">
        <div>
          <CardStack items={features} />
          {/* <CardStack items={items} /> */}
        </div>
      </CardContent>
    </Card>
  );

  {
    /* <CardStack
            items={[
              {
                id: 1,
                name: "name",
                designation: "designation",
                content: "content",
              },
              {
                id: 2,
                name: "test",
                designation: "designation",
                content: "content",
              },
              {
                id: 3,
                name: "pos",
                designation: "designation",
                content: "content",
              },
            ]}
          /> */
  }
}
// function ProjectFeatures({
//   features,
//   activeFeature,
//   offset = -12,
//   scaleFactor = 0.06,
//   moveSelectedFeatureToTop,
// }: {
//   features: ProjectFeature[];
//   activeFeature: ProjectFeature;
//   offset?: number;
//   scaleFactor?: number;
//   moveSelectedFeatureToTop: (idx: number) => void;
// }) {
//   const [cards, setCards] =
//     useState<ProjectFeature[]>(features);
//   const [hovering, setHovering] = useState(false);

//   function FeatureStack() {
//     return (
//       <div className="relative col-span-3 row-span-6 group  [perspective:1000px] overflow-auto sm:overflow-visible no-visible-scrollbar">
//         {features.map((feature, index) => (
//           <motion.div
//             layout
//             layoutId={feature.title}
//             key={feature.title}
//             className="absolute h-full w-full rounded-3xl shadow-xl border-white-[0.1] shadow-white-[0.05] flex flex-col justify-between "
//             style={{
//               transformOrigin: "right right", // Adjusted for horizontal stacking
//               transformStyle: "preserve-3d", // Add this to enable 3D transforms
//               backfaceVisibility: "hidden", // Add this to hide the backface of the cards
//               border:
//                 index === 0 ? "2px solid red" : "none",
//             }}
//             animate={{
//               left: index * -offset, // Adjusted to position cards horizontally
//               scale: 1 - index * scaleFactor, // Adjusted to decrease scale for cards that are behind
//               zIndex: features.length - index, // Ensures the top card has the highest zIndex
//             }}
//           >
//             <Card className="relative w-full h-full">
//               <CardHeader className="flex flex-row items-center align-text-bottom justify-between">
//                 <CardTitle className="">
//                   {feature.title}
//                 </CardTitle>
//                 <CardSvg>{feature.svg}</CardSvg>
//               </CardHeader>

//               <CardContent className="space-y-m">
//                 <Separator />
//                 <p>{feature.description}</p>
//               </CardContent>

//               <CardNavigators
//                 onPrev={() =>
//                   moveSelectedFeatureToTop(index - 1)
//                 }
//                 onNext={() =>
//                   moveSelectedFeatureToTop(index + 1)
//                 }
//               />
//             </Card>
//           </motion.div>
//         ))}
//       </div>
//     );
//   }

//   function FadeInCard() {
//     return (
//       <div className="relative w-full h-full">
//         {features.map((feature, idx) => (
//           <motion.div
//             layout
//             key={feature.title}
//             layoutId={feature.title}
//             style={{
//               scale: 1 - idx * 0.1,
//               top: hovering ? idx * -50 : 0,
//               zIndex: -idx,
//               opacity: idx < 3 ? 1 - idx * 0.1 : 0,
//             }}
//             animate={{
//               y:
//                 feature.title === activeFeature.title
//                   ? [0, 40, 0]
//                   : 0,
//             }}
//             className={cn(
//               "w-full h-full absolute top-0 left-0"
//             )}
//           >
//             <Card className="relative w-full h-full ">
//               <CardHeader className="flex flex-row items-center align-text-bottom justify-between">
//                 <CardTitle className="">
//                   {feature.title}
//                   {/* About */}
//                 </CardTitle>
//                 <CardSvg>{feature.svg}</CardSvg>
//               </CardHeader>

//               <CardContent className="space-y-m">
//                 <Separator />
//                 <p>{feature.description}</p>
//               </CardContent>

//               <CardNavigators
//                 number={idx}
//                 onPrev={() =>
//                   moveSelectedFeatureToTop(idx - 1)
//                 }
//                 onNext={() =>
//                   moveSelectedFeatureToTop(idx + 1)
//                 }
//               />
//             </Card>
//           </motion.div>
//         ))}
//       </div>
//     );
//   }

//   return <FeatureStack />;
//   return (
//     <div className="relative col-span-3 row-span-6 group isolate">
//       <CardGlow />
//       {/* <Card className="relative "> */}
//       {cards.map((card, index) => (
//         <motion.div
//           layout
//           layoutId={card.title}
//           key={card.title}
//           className="absolute  h-full w-full  rounded-3xl   shadow-xl   border-white-[0.1]   shadow-white-[0.05] flex flex-col justify-between"
//           style={{
//             transformOrigin: "top center",
//           }}
//           animate={{
//             left: index * -offset,
//             scale: 1 - index * scaleFactor, // decrease scale for cards that are behind
//             zIndex: cards.length - index, // decrease z-index for the cards that are behind
//           }}
//         >
//           <FadeInCard />
//         </motion.div>
//       ))}
//       {/* </Card> */}
//     </div>
//   );
// }

// function ProjectFeatures({
//   features: propFeatures,
//   activeFeature,
//   offset,
//   scaleFactor,
// }: {
//   features: ProjectFeature[];
//   activeFeature: ProjectFeature;
//   offset?: number;
//   scaleFactor?: number;
// }) {
//   let interval: any;

//   console.log(offset, scaleFactor);
//   const CARD_OFFSET = offset || 10;
//   const SCALE_FACTOR = scaleFactor || 0.06;
//   const [features, setFeatures] =
//     useState<ProjectFeature[]>(propFeatures);

//   useEffect(() => {
//     startFlipping();

//     return () => clearInterval(interval);
//   }, []);

//   const startFlipping = () => {
//     interval = setInterval(() => {
//       setFeatures((prev) => {
//         const newArray = [...prev]; // create a copy of the array
//         newArray.unshift(newArray.pop()!); // move the last element to the front
//         return newArray;
//       });
//     }, 5000);
//   };

//   return (
//     <Card className="col-span-8 bg-none md:col-span-3 md:row-span-6 min-h-full ">
//       <CardHeader className="flex flex-row items-center justify-center ">
//         <CardTitle className=" text-accent-2">
//           Features
//         </CardTitle>
//         {/* <CardSvg>{feature.svg}</CardSvg> */}
//       </CardHeader>
//       <CardContent className="relative overflow-visible     no-visible-scrollbar">
//         <div className="relative  h-60 w-60 md:h-60 md:w-96">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               className=" absolute bg-black  h-60 w-60 rounded-3xl p-s shadow-xl border border-white/[0.1]   shadow-white/[0.05] flex flex-col justify-between"
//               style={{
//                 transformOrigin: "top center",
//               }}
//               animate={{
//                 top: index * -CARD_OFFSET,
//                 // scale: 1 - index * scaleFactor, // decrease scale for cards that are behind
//                 scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
//                 zIndex: features.length - index, //  decrease z-index for the cards that are behind
//               }}
//             >
//               <div className="font-normal text-neutral-700 dark:text-neutral-200">
//                 {feature.title}
//               </div>
//               <div>
//                 <p className="text-neutral-500 font-medium dark:text-white">
//                   {feature.svg}
//                 </p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// function ProjectFeatures({ features }: { features: string[]}) {

//   return (
//     <Card className="relative col-span-3 row-span-6 ">
//       <CardHeader>
//         <CardTitle>Features</CardTitle>
//         <CardSvg></CardSvg>
//       </CardHeader>
//       <CardContent className="absolute inset-0">
//         <CardStack items={features} />

//         {features.map((feature, index) => (
//           <span key={index}>{feature}</span>
//         ))}
//       </CardContent>
//     </Card>
//   );
// }

// ProjectFeatures.displayName = "ProjectFeatures";

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
    <Card className="relative col-span-8 md:col-span-3 w-full h-full md:row-span-6 ">
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
