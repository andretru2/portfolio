import {
  type SiteConfig,
  type SocialLink,
  type Project,
} from "@/types";

export const siteConfig: SiteConfig = {
  name: "Andres Trujillo - Senior Frontend Developer",
  title: "",
  description: ".",
  image: {
    src: "/social.svg",
    alt: "logo",
  },
};

export const socialLinks: SocialLink[] = [
  {
    platform: "github",
    href: "https://github.com/andretru2",
    text: "Go to my GitHub repo",
    icon: "github",
  },
  {
    platform: "figma",
    href: "https://www.figma.com/@andretru2",
    text: "Go to my Figma profile",
    icon: "figma",
  },
  {
    platform: "linkedIn",
    href: "https://www.linkedin.com/in/andres-trujillo-7321087b/",
    text: "Go to my LinkedIn profile",
    icon: "linkedin",
  },
  {
    platform: "x",
    href: "https://x.com/andretru22",
    me: "https://x.com/andretru22",
    text: "Follow me on x",
    icon: "twitter",
  },
];

// Used to generate links in both the Header & Footer.
export const navLinks: Array<{
  title: string;
  href: string;
}> = [
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Impact",
    href: "/impact",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

export const projects: Project[] = [
  {
    title: "ERP System",
    client: "Britannica Home Fashions",
    description:
      "Here's how I single-handedly transformed entire teams, processes, and operations by building a full-cycle ERP system from the ground up while architecting an optimization powerhouse that accelerated growth.",

    image: "/src/pages/_assets/spr-storyboarder-light.png",
    images: ["/projects/portfolio.jpg"],
    homepageUrl: "https://andretru2.github.io/",
    repoUrl: "",
    caseStudyUrl: "",
    features: [
      "Purchase Orders",
      "Inventory Management",
      "Sales Orders",
      "CRM",
      "Brand Development",
    ],
    roles: [
      "frontend",
      "designer",
      "uiux",
      "art-direction",
      "motion-design",
      "developer",
      "fullstack",
      "prototyper",
    ],
    tools: [
      "react",
      "tailwind",
      "typescript",
      "figma",
      "nextjs",
      "c#",
      "sqlserver",
    ],
    featured: 1,
    impact: ["Increased personal brand awareness"],
    coverGradientFrom: "#4A5254",
    coverGradientTo: "#252A2F",
  },
];
