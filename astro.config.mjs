import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";

import lenis from "astro-lenis";

// https://astro.build/config
export default defineConfig({
  // ...
  integrations: [tailwind(), react(), icon(), lenis()],
  output: "server",
  adapter: vercel({
    webAnalytics: {
      enabled: true
    },
    maxDuration: 8
  }),
  imageService: true
});