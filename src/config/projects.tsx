import type { Project } from "@/types";

// import BHFHero from "@/pages/_assets/bhf-hero.png";
import BHFHero from "@/pages/_assets/bhf-hero.mp4";
import BHFPoMatch from "@/pages/_assets/spr-storyboarder-light.png";

import { Highlight } from "@/components/ui/highlight";

export const projects: Project[] = [
  {
    title: "ERP System",
    client: "Britannica Home Fashions",
    description:
      "Here's how I single-handedly transformed entire teams, processes, and operations by building a full-cycle ERP system from the ground up while architecting an optimization powerhouse that accelerated growth.",
    wordsToHighlight: [
      "single-handedly transformed",
      "full-cycle ERP system",
      "architecting an optimization powerhouse",
      " accelerated growth",
    ],
    image: "/src/pages/_assets/spr-storyboarder-light.png",

    images: ["/projects/portfolio.jpg"],
    homepageUrl: "https://andretru2.github.io/",
    repoUrl: "",
    caseStudyUrl: "",
    features: [
      {
        featured: 1,
        title: "About",
        description:
          "BHF is a premier global provider of home goods, known for innovation and quality. Works alongside the best brans in the world such as Pendleton, UGG, etc ",
        svg: "c",
        content: (
          <p>
            Streamlining and organizing a lot of tedious
            manual work, resulting in
            <Highlight>
              generating millions of dollars in revenue
              anually
            </Highlight>
          </p>
        ),
        // content: (
        // <video
        //   style={{
        //     backgroundImage: `url(${BHFPoMatch})`,
        //     backgroundSize: "cover",
        //     backgroundPosition: "center",
        //     height: BHFPoMatch.height,
        //     // width: `calc(${BHFHero.width} + 300)px`,
        //   }}
        //   controls
        //   autoPlay
        //   className="h-full w-full rounded-3xl  "
        // />
        // ),
      },
      {
        featured: 2,
        title: "Purchase Orders",
        description: "",
        content: (
          <p>
            Streamlining and organizing a lot of tedious
            manual work, resulting in{" "}
            <Highlight>
              generating millions of dollars in revenue each
              year.
            </Highlight>
          </p>
        ),

        svg: "c",
        // content: (
        // <img
        //   style={{
        //     backgroundImage: `url(${BHFPoMatch.src})`,
        //     backgroundSize: "cover",
        //     backgroundPosition: "center",
        //     height: BHFPoMatch.height,
        //     // width: `calc(${BHFHero.width} + 300)px`,
        //   }}
        //   className="h-full w-full rounded-3xl  "
        // />
        //   <video
        //     style={{
        //       backgroundImage: `url(${BHFPoMatch.src})`,
        //       backgroundSize: "cover",
        //       backgroundPosition: "center",
        //       height: BHFPoMatch.height,
        //       filter: "grayscale(100%)", //
        //       // width: `calc(${BHFHero.width} + 300)px`,
        //     }}
        //     controls
        //     autoPlay
        //     className="h-full w-full rounded-3xl  "
        //   />
        // ),
      },
      // {
      //   featured: 3,
      //   title: "Invoices",
      //   description:
      //     "Purchase order module helps automate and organize a lot of tedious manual work, helping generate millions of dollar in revenue each year.",
      //   svg: "c",
      // },
      // {
      //   featured: 4,
      //   title: "Design System",
      //   description:
      //     "Purchase order module helps automate and organize a lot of tedious manual work, helping generate millions of dollar in revenue each year.",
      //   svg: "c",
      // },
    ],

    roles: [
      "chief-architect",
      "manager",
      "fullstack",
      "database-admin",
      "uiux",
      "frontend",
      "backend",
      "project-manager",
      "prototyper",
    ],
    tools: [
      "threejs",
      "react",
      "tailwind",
      "typescript",
      "figma",
      "nextjs",
      "c",
      "sqlserver",
      "js",
      "filemaker",
    ],
    featured: 1,
    impact: ["Increased personal brand awareness"],
    coverGradientFrom: "#4A5254",
    coverGradientTo: "#252A2F",
  },
];

function ContentBHF() {
  return (
    <div className="w-full overflow-hidden relative h-full rounded-2xl p-m text-xl md:text-4xl font-bold text-white ">
      {/* <h2>BHF</h2> */}

      <img
        style={{
          backgroundImage: `url(${BHFHero.src})`,

          backgroundSize: "cover",
          backgroundPosition: "center",

          height: BHFHero.height,
          width: `calc(${BHFHero.width} + 300)px`,
        }}
        className="h-full w-full  rounded-3xl "
      />
    </div>
  );
}
