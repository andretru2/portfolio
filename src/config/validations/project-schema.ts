import { z } from "zod";
import type { Tool } from "@/types";
import astro from "@/icons/astro.svg";
import figma from "@/icons/figma.svg";
import c from "@/icons/c.svg";
import github from "@/icons/github.svg";
import linkedin from "@/icons/linkedin.svg";
import nextjs from "@/icons/nextjs.svg";
import react from "@/icons/react.svg";
import sqlserver from "@/icons/sqlserver.svg";
import tailwind from "@/icons/tailwind.svg";
import typescript from "@/icons/typescript.svg";
import js from "@/icons/js.svg";
import prisma from "@/icons/prisma.svg";
import drizzle from "@/icons/drizzle.svg";
import postgresql from "@/icons/postgresql.svg";
import filemaker from "@/icons/filemaker.svg";
import threejs from "@/icons/threejs.svg";

// export const Tools = new Map([
//   ["astro", "Astro"],
//   ["figma", "Figma"],
//   ["mdx", "MDX"],
//   ["nextjs", "NEXTjs"],
//   ["react", "React"],
//   ["tailwind", "Tailwind"],
//   ["typescript", "TypeScript"],
//   ["prisma", "Prisma ORM"],
//   ["drizzle", "Drizzle ORM"],
//   ["postgresql", "Postgre SQL"],
//   ["sqlserver", "SQL Server"],
// ] as const);

export const Tools: Tool[] = [
  {
    key: "astro",
    name: "Astro",
    color: "--color-sky",
    icon: astro,
  },
  {
    key: "threejs",
    name: "Three JS",
    color: "--color-sky",
    icon: threejs,
  },
  {
    key: "figma",
    name: "Figma",
    color: "--color-green",
    icon: figma,
  },
  {
    key: "mdx",
    name: "MDX",
    color: "--color-blue",
    icon: "mdx",
  },
  {
    key: "nextjs",
    name: "NEXT.js",
    color: "--color-dusk",
    icon: nextjs,
  },
  {
    key: "react",
    name: "React",
    color: "--color-purple",
    icon: react,
  },
  {
    key: "tailwind",
    name: "Tailwind",
    color: "--color-pink",
    icon: tailwind,
  },
  {
    key: "typescript",
    name: "TypeScript",
    color: "--color-red",
    icon: typescript,
  },
  {
    key: "prisma",
    name: "Prisma ORM",
    color: "--color-orange",
    icon: prisma,
  },
  {
    key: "drizzle",
    name: "Drizzle ORM",
    color: "--color-yellow",
    icon: drizzle,
  },
  {
    key: "postgresql",
    name: "PostgreSQL",
    color: "--color-green",
    icon: postgresql,
  },
  {
    key: "sqlserver",
    name: "SQL Server",
    color: "--color-blue",
    icon: sqlserver,
  },

  {
    key: "c",
    name: "C#",
    color: "--color-blue",
    icon: c,
  },
  {
    key: "js",
    name: "Javascript",
    color: "--color-blue",
    icon: js,
  },
  {
    key: "filemaker",
    name: "FileMaker",
    color: "--color-blue",
    icon: filemaker,
  },
] as const;

const toolKeys = Object.keys(Tools);

export const Roles = new Map([
  ["prototyper", "Prototyper"],
  ["architect", "Architect"],
  ["frontend", "Frontend"],
  ["backend", "Backend"],
  ["fullstack", "Full Stack "],
  ["uiux", "UI/UX Designer"],
  ["art-direction", "Art Direction"],
  ["motion-design", "Motion Design"],
  ["project-manager", "Project Manager"],
  ["system-architect", "System Architect"],
  ["database-admin", "Database Admin"],
  ["lead-dev", "Lead Developer"],
  ["chief-architect", "Chief Architect"],
] as const);

export const projectFeatureSchema = z.object({
  featured: z.number().optional(),
  title: z.string(),
  description: z.string(),
  svg: z.string().optional(),
  content: z.any().optional(),
});

export const projectFeaturesSchema = z.array(
  projectFeatureSchema
);

export const projectSchema = z.object({
  title: z.string().min(1),
  client: z.string().min(1),
  description: z.any().optional(),
  wordsToHighlight: z.array(z.string()).optional(),
  // image: z.string(),
  // images: z.array(z.string()).default([]).optional(),
  homepageUrl: z.string().url().optional(),
  repoUrl: z.string().url().optional(),
  caseStudyUrl: z.string().url().optional(),
  features: projectFeaturesSchema,
  roles: z.array(
    z.enum(
      Array.from(Roles.keys()) as [string, ...string[]]
    )
  ),
  tools: z.array(
    z.enum(Array.from(toolKeys) as [string, ...string[]])
  ),

  featured: z.number().optional(),
  impact: z.array(z.string()).optional(),
  // coverGradientFrom: z
  //   .string()
  //   .optional()
  //   .default("#4A5254"),
  // coverGradientTo: z.string().optional().default("#252A2F"),
});
