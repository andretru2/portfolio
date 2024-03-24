import { z } from "zod";

export const Tools = new Map([
  ["astro", "Astro"],
  ["figma", "Figma"],
  ["mdx", "MDX"],
  ["nextjs", "NEXTjs"],
  ["react", "React"],
  ["tailwind", "Tailwind"],
  ["typescript", "TypeScript"],
  ["prisma", "Prisma ORM"],
  ["drizzle", "Drizzle ORM"],
  ["postgresql", "Postgre SQL"],
  ["sqlserver", "SQL Server"],
] as const);

export const Roles = new Map([
  ["prototyper", "Prototyper"],
  ["architect", "Architect"],
  ["frontend", "Frontend Developer"],
  ["backend", "Backend Developer"],
  ["fullstack", "Full-Stack Developer"],
  ["developer", "Developer"],
  ["designer", "Designer"],
  ["uiux", "UI UX Designer"],
  ["art-direction", "Art Direction"],
  ["motion-design", "Motion Design"],
] as const);

export const projectSchema = z.object({
  title: z.string().min(1),
  client: z.string().min(1),
  description: z.any().optional(),
  wordsToHighlight: z.array(z.string()).optional(),
  image: z.string(),
  images: z.array(z.string()).default([]).optional(),
  homepageUrl: z.string().url().optional(),
  repoUrl: z.string().url().optional(),
  caseStudyUrl: z.string().url().optional(),
  features: z.array(z.string()).optional(),
  roles: z.array(
    z.enum(
      Array.from(Roles.keys()) as [string, ...string[]]
    )
  ),
  tools: z.array(
    z.enum(
      Array.from(Tools.keys()) as [string, ...string[]]
    )
  ),
  featured: z.number().min(1).optional(),
  impact: z.array(z.string()).optional(),
  coverGradientFrom: z
    .string()
    .optional()
    .default("#4A5254"),
  coverGradientTo: z.string().optional().default("#252A2F"),
});
