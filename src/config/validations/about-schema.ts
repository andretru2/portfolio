import { z } from "zod";

const statsItemSchema = z.object({
  id: z.number(),
  value: z.string(),
  label: z.string(),
});

export const aboutSchema = z.object({
  background: z.string(),
  title: z.string(),
  description: z.any(),
  image: z.string(),
  signature: z.string(),
  stats: z.array(statsItemSchema),
  passions: z.array(z.string()),
});
