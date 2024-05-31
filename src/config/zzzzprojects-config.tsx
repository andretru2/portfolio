import type { Project } from "@/types";

// import BHFHero from "@/pages/_assets/bhf-hero.png";
import BHFHero from "@/pages/_assets/bhf-hero.mp4";

import { Highlight } from "@/components/ui/highlight";
import BhfAbout from "@/pages/_assets/bhf-hero.mp4";
import BhfFeatures from "@/pages/_assets/bhf-hero.mp4";
import BhfMore from "@/pages/_assets/bhf-hero.mp4";
// import { BhfBrandLogosWrapper } from "@/pages/_components/project/bhf/brand-logos-wrapper";

export const projects: Project[] = [
  {
    featured: 1,
    title: "ERP System",
    client: "Britannica Home Fashions",
    description:
      "Here's how I single-handedly built a full-cycle ERP system from the ground up, architecting an optimization powerhouse that accelerated growth and transformed teams, processes, and operations. ",
    // "Here's how I single-handedly built an  transformed entire teams, processes, and operations by building a full-cycle ERP system from the ground up while architecting an optimization powerhouse that accelerated growth.",
    wordsToHighlight: [
      "single-handedly transformed",
      "full-cycle ERP system",
      "architecting an optimization powerhouse",
      " accelerated growth",
    ],

    homepageUrl: "https://andretru2.github.io/",
    repoUrl: "",
    caseStudyUrl: "",
    hero: [
      {
        section: "About",
        media: BhfAbout,
      },
      {
        section: "Features",
        media: BhfFeatures,
      },
      {
        section: "More",
        media: BhfMore,
      },
    ],
    features: [
      {
        section: "About",
        featured: 1,
        title: "BHF",
        description:
          "A premier global provider of home goods, known for innovation and quality, this multi-million dollar company was established over 50 years ago in New York City.",
        wordsToHighlight: [
          "premier global provider",
          "innovation and quality",
          "multi-million dollar company",
          "established over 50 years ago",
        ],
      },
      {
        section: "About",
        featured: 2,
        title: "Best of the world Brands",
        description: "BHF works with top brands ",
        wordsToHighlight: [
          "UGG",
          "Pendleton",
          "innovation and quality",
          "multi-million dollar company",
          "established over 50 years ago",
        ],
        // content: <BhfBrandLogosWrapper />,
        // content: ProjectHeroBhfLogos,
      },
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
