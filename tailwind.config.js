const defaultTheme = require("tailwindcss/defaultTheme");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        16: "repeat(16, minmax(0, 1fr))",
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          ...defaultTheme.fontFamily.sans,
        ],
        heading: [
          "var(--font-heading)",
          ...defaultTheme.fontFamily.mono,
        ],
        cursive: [
          "var(--font-cursive)",
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        // bgColor: "hsl(var(--theme-bg) / <alpha-value>)",
        bgColor: "oklch(14.48% 0 0 / <alpha-value>)",
        // bgColor: `oklch(var(--theme-bg-l) var(--theme-bg-c) var(--theme-bg-h) / <alpha-value>)`,

        // bgColor: "oklch(22.22% 0 0 / <alpha-value>)",
        // bgColor:
        //   "oklch(20.8% 0.011 301.53 / <alpha-value>)",
        // bgColor: "oklch(20.32% 0.1 250 / <alpha-value>)",
        // bgColorCard: "oklch(47.29% 0 0 / <alpha-value>)",
        bgColorCard:
          "oklch(37.8% 0.011 301.53 / <alpha-value>)",
        // bgColorHero: "oklch(10% 0.1 250 / <alpha-value>)",
        bgColorHero:
          // "oklch(24.06% 0.0481 250 / <alpha-value>)",
          // "oklch(31.46% 0.0869 256.35 / <alpha-value>)",
          "oklch(21.48% 0.0947 256.35 / <alpha-value>)",
        // bgColorHero: "oklch(80% 0.2 160 / 10%)",
        // bgColorHero: "oklch(14.48% 0 0 / <alpha-value>)",
        // bgColorHero:
        //   "oklch(18% 0.011 293.31 / <alpha-value>)",
        // textColor: "hsl(var(--theme-text) / <alpha-value>)",
        textColor: "oklch(100% 0 0 / <alpha-value>)",
        link: "hsl(var(--theme-link) / <alpha-value>)",
        // accent: "hsl(var(--theme-accent) / <alpha-value>)",
        // "accent-2":
        //   "hsl(var(--theme-accent-2) / <alpha-value>)",
        "accent-2":
          "oklch(61.37% 0.001 286.36 / <alpha-value>)",
        // "accent-3":
        //   "hsl(var(--theme-accent-3) / <alpha-value>)",
        "accent-3":
          "oklch(30.96% 0.011 271.04 / <alpha-value>)",
        quote: "hsl(var(--theme-quote) / <alpha-value>)",
        // accent: "oklch(81.79% 0.3 142.12 / <alpha-value>)",
        // accent: "oklch(50% 0.2 250/ <alpha-value>)",
        // accent: "oklch(70% 0.1 240/ <alpha-value>)",
        // accent: "oklch(70% 0.1 150/ <alpha-value>)",
        // accent: "oklch(60% 0.15 140/ <alpha-value>)",
        accent: "oklch(80% 0.2 160/ <alpha-value>)",

        // accent: "oklch(65% 0.2 135/ <alpha-value>)",
        // accent: "oklch(75% 0.15 145/ <alpha-value>)",
        // accent: "oklch(60% 0.25 155/ <alpha-value>)",
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
        "8xl": "12rem",
        outer: "1rem",
      },
      backgroundImage: {
        dotted: `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5 0.75C1.5 1.16421 1.16421 1.5 0.75 1.5C0.335786 1.5 0 1.16421 0 0.75C0 0.335786 0.335786 0 0.75 0C1.16421 0 1.5 0.335786 1.5 0.75Z' fill='%2339393D'/%3E%3C/svg%3E%0A");`,
        "dotted-dark": `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5 0.75C1.5 1.16421 1.16421 1.5 0.75 1.5C0.335786 1.5 0 1.16421 0 0.75C0 0.335786 0.335786 0 0.75 0C1.16421 0 1.5 0.335786 1.5 0.75Z' fill='%2339393D'/%3E%3C/svg%3E%0A");`,
        "dotted-light": `url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.5 0.75C1.5 1.16421 1.16421 1.5 0.75 1.5C0.335786 1.5 0 1.16421 0 0.75C0 0.335786 0.335786 0 0.75 0C1.16421 0 1.5 0.335786 1.5 0.75Z' fill='%23D7DDE4'/%3E%3C/svg%3E%0A");`,
        // "primary-gradient":
        //   "conic-gradient(from 0deg, hsl(170, 30%, 70%), hsl(170, 30%, 70%))",
        "blue-gradient":
          "conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg)",
        "dark-blue-gradient":
          "conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(10, 0, 85) 0deg, rgb(34, 34, 85) 67.5deg, rgb(44, 44, 74) 198.75deg, rgb(20, 20, 74) 251.25deg, rgb(54, 54, 87) 301.88deg, rgb(15, 0, 100) 360deg)",
        // "primary-gradient":
        //   "radial-gradient(circle, oklch(80% 0.2 160), oklch(80% 0.15 140))",
        "primary-gradient":
          "conic-gradient(from 230.29deg at 51.63% 52.16%, oklch(80% 0.2 160) 0deg, oklch(80% 0.15 170) 67.5deg, oklch(80% 0.12 140) 198.75deg, oklch(80% 0.18 150) 251.25deg, oklch(80% 0.14 130) 301.88deg, oklch(80% 0.18 180) 360deg);",
        "page-gradient":
          "radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3), transparent)",
        "hero-gradient":
          "radial-gradient(ellipse 50% 80% at 20% 40%,rgba(93,52,221,0.1),transparent), radial-gradient(ellipse 50% 80% at 80% 50%,rgba(120,119,198,0.15),transparent)",
        "hero-glow":
          "conic-gradient(from 230.29deg at 51.63% 52.16%, rgb(36, 0, 255) 0deg, rgb(0, 135, 255) 67.5deg, rgb(108, 39, 157) 198.75deg, rgb(24, 38, 163) 251.25deg, rgb(54, 103, 196) 301.88deg, rgb(105, 30, 255) 360deg)",
        "glow-lines":
          "linear-gradient(var(--direction),#9d9bf2 0.43%,#7877c6 14.11%,rgba(120,119,198,0) 62.95%)",
        "radial-faded":
          "radial-gradient(circle at bottom center,oklch(100% 0 145),transparent 70%)",
        "glass-gradient":
          "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.05) 100%)",
      },
      cursor: {
        draw: `url("data:image/svg+xml,%3Csvg width='19' height='19' viewBox='0 0 19 19' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M1.86423 7.57945C1.49244 7.20766 0.786025 6.62501 0.701189 6.09568L0.0150511 1.81444C-0.000827288 1.71537 -0.00415711 1.61469 0.00513756 1.51479C0.0483285 1.05053 0.296127 0.702572 0.499312 0.499375C0.70249 0.296182 1.05046 0.0483317 1.51477 0.00513481C1.61467 -0.0041595 1.71535 -0.000828594 1.81442 0.015049L6.09566 0.701187C6.65607 0.791002 7.19236 1.47725 7.57933 1.86412C11.2257 5.50952 14.8722 9.15474 18.5181 12.8006C19.1606 13.4431 19.1606 14.486 18.5182 15.1285L15.1284 18.5181C14.486 19.1605 13.4432 19.1606 12.8007 18.5182C9.158 14.8692 5.51009 11.2253 1.86423 7.57945Z' fill='white'/%3E%3Cpath d='M11.5058 15.5319L15.5341 11.5058L6.73487 2.7088L2.70877 6.7349L11.5058 15.5319Z' fill='black'/%3E%3Cpath d='M1.19437 1.62541L1.8805 5.90665L1.90984 5.87729L5.87727 1.90984L5.90663 1.8805L1.62539 1.19437C1.43133 1.21242 1.21242 1.43135 1.19437 1.62541Z' fill='black'/%3E%3Cpath d='M12.334 16.3601L16.3624 12.334L17.6736 13.6452C17.8496 13.8212 17.8496 14.1079 17.6736 14.2839L14.2839 17.6736C14.1078 17.8496 13.8212 17.8496 13.6452 17.6736L12.334 16.3601Z' fill='black'/%3E%3C/svg%3E%0A"), pointer`,
      },
      maxWidth: {
        "8xl": "90rem",
      },
      keyframes: {
        glow: {
          "0%": { "background-position": "0% 0" },
          "100%": { "background-position": "-200% 0" },
        },
        aurora: {
          to: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          from: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        planetMovement: {
          "0%": {
            transform: "translateY(0%)",
          },
          "50%": { transform: "translateY(10%)" },
          "100%": {
            transform: "translateX(-500px)",
          },
        },

        meteorEffect: {
          "0%": {
            transform: "translateZ(2000px)",
            // transform: "rotate(215deg) translateX(0)",
            opacity: "0",
          },
          "100%": {
            transform: "translateZ(0)",
            // transform: "rotate(215deg) translateX(0)",
            opacity: "1",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        fadeInUp: {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, 100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        slideIn: {
          "0%": {
            opacity: 0,
            transform: "translateY(-100%)",
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        slideOut: {
          "0%": {
            opacity: 1,
            transform: "translateY(0)",
          },
          "100%": {
            opacity: 0,
            translate: "translateY(100%)",
          },
        },
        flyInDown: {
          "0%": {
            opacity: "0",
            transform: "translate3d(0, -1500px, 0)",
            transitionTimingFunction:
              "cubic-bezier(0.215, 0.61, 0.355, 1)",
          },
          "60%": {
            opacity: "1",
            transform: "translate3d(0, 25px, 0)",
          },
          "75%": {
            transform: "translate3d(0, -10px, 0)",
          },
          "90%": {
            transform: "translate3d(0, 5px, 0)",
          },
          "100%": {
            transform: "none",
          },
        },
      },
      animation: {
        glow: "glow 2s linear infinite",
        aurora: "aurora 60s linear infinite",
        meteorEffect: "meteorEffect 5s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
        fadeInUp: "fadeInUp 1s ease-in-out 0.25s 1",
        slideIn: "slideIn 0.75s  var(--linearAnimation) ",
        slideOut: "slideOut 0.75s  var(--linearAnimation)",
        flyInDown: "flyInDown 0.6s ease-in-out 0.25s 1",
        // flyInDown:
        //   "flyInDown 0.6s ease-in-out infinite ",
      },
    },
  },
  plugins: [
    require("@martijn.cuppens/tailwindcss-fluid"),
    require("@tailwindcss/typography"),
    addVariablesForColors,
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          "animation-delay": (value) => {
            return {
              "animation-delay": value,
            };
          },
        },
        {
          values: theme("transitionDelay"),
        }
      );
    }),
  ],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [
      `--${key}`,
      val,
    ])
  );

  addBase({
    ":root": newVars,
  });
}
