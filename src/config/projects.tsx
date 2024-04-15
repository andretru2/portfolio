import type { Project } from "@/types";

import BHFHero from "@/pages/_assets/bhf-hero.png";

const IMG_PADDING = 12;

export const projects: Project[] = [
  {
    title: "ERP System",
    client: "Britannica Home Fashions",
    description:
      "Here's how I single-handedly transformed entire teams, processes, and operations by building a full-cycle ERP system from the ground up while architecting an optimization powerhouse that accelerated growth.",
    image: "/src/pages/_assets/spr-storyboarder-light.png",
    wordsToHighlight: [
      "single-handedly transformed",
      "full-cycle ERP system",
      "architecting an optimization powerhouse",
      " accelerated growth",
    ],

    images: ["/projects/portfolio.jpg"],
    homepageUrl: "https://andretru2.github.io/",
    repoUrl: "",
    caseStudyUrl: "",
    features: [
      {
        featured: 1,
        title: "Britannica Home Fashions",
        description:
          "BHF, established in 1974 in New York City, is a premier global provider of home goods, known for innovation and quality. ",
        svg: "c",
        content: (
          <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
            <h2>BHF</h2>

            <img
              style={{
                backgroundImage: `url(${BHFHero})`,
                // backgroundImage: BHFHero,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: `calc(100vh-${IMG_PADDING * 2}px)`,
              }}
              className=""
            />
          </div>
        ),
      },
      {
        featured: 2,
        title: "Purchase Orders",
        description:
          "Purchase order module helps automate and organize a lot of tedious manual work, helping generate millions of dollar in revenue each year.",
        svg: "c",
      },
    ],

    roles: [
      "chief-architect",
      "fullstack",
      "database-admin",
      "uiux",
      "frontend",
      "backend",
      "project-manager",
      "prototyper",
    ],
    tools: [
      "react",
      "tailwind",
      "typescript",
      "figma",
      "nextjs",
      "c",
      "sqlserver",
    ],
    featured: 1,
    impact: ["Increased personal brand awareness"],
    coverGradientFrom: "#4A5254",
    coverGradientTo: "#252A2F",
  },
];
