import { z } from "zod";
import { projectSchema } from "./config/project-schema";

export type SiteConfig = {
  name: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  socialLinks?: SocialLink[];
};

export type SocialLink = {
  platform: string;
  href: string;
  me?: string;
  text: string;
  icon: string;
  footerOnly?: boolean;
};

export type RequireSome<T, P extends keyof T> = Omit<T, P> &
  Required<Pick<T, P>>;

export type Project = z.infer<typeof projectSchema>;
export type Role = z.infer<typeof projectSchema>["roles"];
export type Tool = z.infer<typeof projectSchema>["tools"];

export type ProjectHero = Pick<
  z.infer<typeof projectSchema>,
  | "client"
  | "title"
  | "description"
  | "image"
  | "images"
  | "homepageUrl"
  | "features"
  | "coverGradientFrom"
  | "coverGradientTo"
>;
