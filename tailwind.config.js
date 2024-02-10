const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  darkMode: "class",

  theme: {
    extend: {
      fontFamily: {
        sans: [
          "var(--font-sans)",
          ...defaultTheme.fontFamily.sans,
        ],
        heading: [
          "var(--font-heading)",
          ...defaultTheme.fontFamily.mono,
        ],
      },
      colors: {
        bgColor: "hsl(var(--theme-bg) / <alpha-value>)",
        textColor: "hsl(var(--theme-text) / <alpha-value>)",
        link: "hsl(var(--theme-link) / <alpha-value>)",
        accent: "hsl(var(--theme-accent) / <alpha-value>)",
        "accent-2":
          "hsl(var(--theme-accent-2) / <alpha-value>)",
        quote: "hsl(var(--theme-quote) / <alpha-value>)",
      },

      spacing: {
        xs: "0.25rem",
        s: "0.5rem",
        m: "1rem",
        l: "1.5rem",
        xl: "2rem",
        "2xl": "3rem",
        "3xl": "4rem",
        "4xl": "5rem",
        "5xl": "6rem",
        "6xl": "8rem",
        "7xl": "10rem",
        outer: "1rem",
      },
    },
  },
  plugins: [
    require("@martijn.cuppens/tailwindcss-fluid"),
    require("@tailwindcss/typography"),
  ],
};
