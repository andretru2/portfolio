import { z } from "zod";
import {
  projectFeatureSchema,
  projectSchema,
} from "./config/validations/project-schema";
import { aboutSchema } from "./config/validations/about-schema";

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
export type ProjectFeature = z.infer<
  typeof projectFeatureSchema
>;
// export type ToolKey = z.infer<typeof projectSchema>["tools"];
// export type Tool = z.infer<typeof projectSchema>["tools"];

export type Tool = {
  key: string;
  name: string;
  color: string;
  icon: string;
};

export type ToolKey = Pick<Tool, "key">;

export type ProjectHero = Pick<
  z.infer<typeof projectSchema>,
  "title"
>;

export type ProjectHeader = Pick<
  z.infer<typeof projectSchema>,
  "client" | "title" | "description" | "wordsToHighlight"
>;

export type ProjectCaseStudyGoto = z.infer<
  typeof projectSchema
>["caseStudyUrl"];

export type About = z.infer<typeof aboutSchema>;
