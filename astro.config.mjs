import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import icon from "astro-icon";
// import vercel from "@astrojs/vercel/serverless";
import vercel from "@astrojs/vercel/static";

import lenis from "astro-lenis";

// https://astro.build/config
export default defineConfig({
  // ...
  integrations: [tailwind(), react(), icon(), lenis()],
  // output: "server",
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  imageService: true,
});
