import { type SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Andres Trujillo - Senior Frontend Developer",
  title: "",
  description: ".",
  image: {
    src: "/social.svg",
    alt: "logo",
  },
  socialLinks: [
    {
      platform: "github",
      href: "https://github.com/andretru2",
      text: "Go to my GitHub repo",
      icon: "social/github",
    },
    {
      platform: "Figma",
      href: "https://www.figma.com/@Hamish",
      text: "Go to my Figma profile",
      icon: "social/figma",
    },
    {
      platform: "twitter",
      href: "https://x.com/andretru22",
      me: "https://x.com/andretru22",
      text: "Follow me on Twitter",
      icon: "social/x",
    },
  ],
};

// Used to generate links in both the Header & Footer.
export const menuLinks: Array<{
  title: string;
  path: string;
}> = [
  {
    title: "projects",
    path: "#projects",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Impact",
    path: "#impact",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];
