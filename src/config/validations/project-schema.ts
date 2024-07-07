import { z } from "zod";
import type { Tool } from "@/types";

// export const ToolsMap = new Map([
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
    // icon: astro,
    icon: "vscode-icons:file-type-astro",
  },
  {
    key: "threejs",
    name: "Three JS",
    color: "--color-sky",
    icon: "skill-icons:threejs-dark",
  },
  {
    key: "figma",
    name: "Figma",
    color: "--color-green",
    icon: "simple-icons:figma",
  },
  {
    key: "mdx",
    name: "MDX",

    color: "--color-blue",
    icon: "vscode-icons:file-type-mdx",
  },
  {
    key: "nextjs",
    name: "NEXT.js",
    color: "--color-dusk",
    icon: "vscode-icons:file-type-next",
  },
  {
    key: "react",
    name: "React",
    color: "--color-purple",
    icon: "flowbite:react-solid",
  },
  {
    key: "tailwind",
    name: "Tailwind",
    color: "--color-pink",
    icon: "flowbite:tailwind-solid",
  },
  {
    key: "typescript",
    name: "TypeScript",
    color: "--color-red",
    icon: "vscode-icons:file-type-typescript-official",
  },
  {
    key: "prisma",
    name: "Prisma ORM",
    color: "--color-orange",
    icon: "vscode-icons:file-type-prisma",
  },
  {
    key: "drizzle",
    name: "Drizzle ORM",
    color: "--color-yellow",
    icon: "simple-icons:drizzle",
  },
  {
    key: "postgresql",
    name: "PostgreSQL",
    color: "--color-green",
    icon: "vscode-icons:file-type-pgsql",
  },
  {
    key: "sqlserver",
    name: "SQL Server",
    color: "--color-blue",
    icon: "vscode-icons:file-type-sql",
  },

  {
    key: "c",
    name: "C#",
    color: "--color-blue",
    icon: "vscode-icons:file-type-c",
  },
  {
    key: "js",
    name: "Javascript",
    color: "--color-blue",
    icon: "vscode-icons:file-type-js-official",
  },
  {
    key: "filemaker",
    name: "FileMaker",
    color: "--color-blue",
    icon: "vscode-icons:file-type-templ",
  },

  {
    key: "docker",
    name: "Docker",
    color: "--color-blue",
    icon: "vscode-icons:file-type-docker",
  },
] as const;

const toolKeys = Object.keys(Tools);

export const Roles = new Map([
  ["prototyper", "Prototyper"],
  ["architect", "Architect"],
  ["frontend", "Frontend"],
  ["backend", "Backend"],
  ["fullstack", "FullStack Developer "],
  ["uiux", "Visual Designer"],
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
  section: z.string(),
  description: z.string(),
  wordsToHighlight: z.array(z.string()).optional(),
  // media:
  // svg: z.string().optional(),
  // content: z.any().optional(),
});

export const projectFeaturesSchema = z.array(
  projectFeatureSchema
);

export const projectSchema = z.object({
  title: z.string().min(1),
  client: z.string().min(1),
  description: z.any().optional(),
  wordsToHighlight: z.array(z.string()).optional(),
  hero: z.object({ src: z.string(), alt: z.string() }),
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
  visible: z.boolean().optional(),
  // coverGradientFrom: z
  //   .string()
  //   .optional()
  //   .default("#4A5254"),
  // coverGradientTo: z.string().optional().default("#252A2F"),
});
