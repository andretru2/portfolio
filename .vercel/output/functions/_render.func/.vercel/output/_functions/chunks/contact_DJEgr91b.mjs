import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { useRef, useEffect } from 'react';
import { useScroll, useTransform, AnimatePresence, motion, useMotionValue, useAnimationFrame, useMotionTemplate, useSpring, useInView } from 'framer-motion';
import { c as cn, T as Tools, a as $$Icon, b as $$ContactMe } from './layout_B0xaM10r.mjs';
import { p as createComponent, q as renderTemplate, t as maybeRenderHead, u as addAttribute, x as renderSlot, v as createAstro, s as renderComponent } from './astro/server_BE4fpZxS.mjs';
import 'clsx';
/* empty css                         */

const staggerContainer = (
  staggerChildren,
  delayChildren
) => {
  return {
    hidden: {
      opacity: 0,
      y: 10,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: staggerChildren || 0.3,
        delayChildren: delayChildren || 0.2,
      },
    },
  };
};

function Section({
  title,
  parallax,
  children,
  idName,
  backgroundColor = "bgColor",
  className,
  minHeight = "100svh",
  padding = "both",
  margin = "both",
  skipRoundCorners = false
}) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"]
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["0svh", minHeight]
  );
  return /* @__PURE__ */ jsx(AnimatePresence, { children: /* @__PURE__ */ jsxs(
    motion.section,
    {
      variants: staggerContainer(0.4, 0.5),
      initial: backgroundColor === "hero" ? "" : "hidden",
      whileInView: "show",
      id: idName,
      style: {
        minHeight,
        y: parallax ? y : ""
      },
      viewport: { once: true },
      className: cn(
        className,
        "relative z-20 shadow-3xl shadow-white",
        padding === "both" && "py-5xl",
        padding === "top" && "pt-5xl",
        padding === "bottom" && "pb-5xl",
        padding === "none" && "py-0",
        margin === "both" && "my-0",
        margin === "top" && "mt-xl",
        margin === "bottom" && "mb-xl",
        margin === "none" && "my-0",
        !skipRoundCorners && "rounded-t-[4rem] sm:rounded-t-[6rem] rouned-b-[4rem] sm:rounded-b-[6rem] border-y-1 border-t border-accent/30 stroke-[0.1] hover:stroke-[0.15]",
        backgroundColor === "bgColor" && "bg-bgColor",
        backgroundColor === "bgColorHero" && "bg-bgColorHero",
        backgroundColor === "hero" && "bg-bgColorHero",
        backgroundColor === "accent" && "bg-accent",
        // backgroundColor === "accent" &&
        //   "[background-image]:[conic-gradient(from_123deg_at_50%_50%,oklch(20%_0.2_160)_-40%,oklch(20%_0.4_160)_143%)]",
        backgroundColor === "aurora" && "[--white-gradient:repeating-linear-gradient(100deg,oklch(95%_0.05_0)_0%,oklch(95%_0.05_0)_7%,var(--transparent)_10%,var(--transparent)_12%,oklch(95%_0.05_0)_16%)] [--dark-gradient:repeating-linear-gradient(100deg,oklch(5%_0.05_0)_0%,oklch(5%_0.05_0)_7%,var(--transparent)_10%,var(--transparent)_12%,oklch(5%_0.05_0)_16%)] [--aurora:repeating-linear-gradient(100deg,oklch(60%_0.25_210)_10%,oklch(70%_0.2_230)_15%,oklch(60%_0.3_240)_20%,oklch(80%_0.1_270)_25%,oklch(50%_0.2_250)_30%)] [background-image:var(--white-gradient),var(--aurora)] dark:[background-image:var(--dark-gradient),var(--aurora)] [background-size:300%,_200%] [background-position:50%_50%,50%_50%] filter blur-[10px] invert dark:invert-0 after:content-[''] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] after:dark:[background-image:var(--dark-gradient),var(--aurora)] after:[background-size:200%,_100%] after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference pointer-events-none absolute -inset-[10px] opacity-20"
      ),
      children: [
        title && /* @__PURE__ */ jsx(
          motion.h6,
          {
            className: cn(
              "p-0 px-s text-sm tracking-wider font-bold w-max rounded-xl mb-3xl",
              backgroundColor === "accent" ? "text-white bg-bgColor" : "text-black bg-accent"
            ),
            children: title
          }
        ),
        children
      ]
    }
  ) });
}

function MovingBorderWrapper({
  borderRadius = "0.75rem",
  children,
  as: Component = "button",
  containerClassName,
  borderClassName,
  duration,
  className,
  ...otherProps
}) {
  return /* @__PURE__ */ jsxs(
    Component,
    {
      className: cn(
        "bg-transparent relative text-base md:text-l  h-10 w-max p-[1px] overflow-hidden cursor-default",
        containerClassName
      ),
      style: {
        borderRadius
      },
      ...otherProps,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "absolute inset-0",
            style: {
              borderRadius: `calc(${borderRadius} * 0.96)`
            },
            children: /* @__PURE__ */ jsx(MovingBorder, { duration, rx: "30%", ry: "30%", children: /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(
                  "h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--green-500)_40%,transparent_60%)]",
                  borderClassName
                )
              }
            ) })
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full  antialiased px-s py-xs",
              // "relative bg-teal-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased",
              className
            ),
            style: {
              borderRadius: `calc(${borderRadius} * 0.96)`
            },
            children
          }
        )
      ]
    }
  );
}
const MovingBorder = ({
  children,
  duration = 2e3,
  rx,
  ry,
  ...otherProps
}) => {
  const pathRef = useRef();
  const progress = useMotionValue(0);
  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set(time * pxPerMillisecond % length);
    }
  });
  const x = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(
    progress,
    (val) => pathRef.current?.getPointAtLength(val).y
  );
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        preserveAspectRatio: "none",
        className: "absolute h-full w-full",
        width: "100%",
        height: "100%",
        ...otherProps,
        children: /* @__PURE__ */ jsx(
          "rect",
          {
            fill: "none",
            width: "100%",
            height: "100%",
            rx,
            ry,
            ref: pathRef
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform
        },
        children
      }
    )
  ] });
};

const $$Astro$1 = createAstro();
const $$InfiniteLoopSlider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$InfiniteLoopSlider;
  const { duration, reverse = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute({
    "--duration": `${duration}ms`,
    "--direction": reverse ? "reverse" : "normal"
  }, "style")} data-astro-cid-ithgoeje> <div class="animate-children" data-astro-cid-ithgoeje> ${renderSlot($$result, $$slots["default"])}${renderSlot($$result, $$slots["default"])}${renderSlot($$result, $$slots["default"])}${renderSlot($$result, $$slots["default"])} </div> </div> `;
}, "/Users/atrujillo/at/src/components/ui/Infinite-loop-slider.astro", void 0);

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
function shuffle(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const $$Astro = createAstro();
const $$ProjectTools = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectTools;
  const {
    toolKeys,
    transparent = false,
    rows = 2,
    perRow = 20
  } = Astro2.props;
  const tools = shuffle(
    toolKeys.map((toolKey) => {
      return Tools.find((tool) => tool.key === toolKey);
    })
  );
  return renderTemplate`${maybeRenderHead()}<div class="relative h-full flex shrink-0 flex-col gap-m items-center justify-center overflow-hidden" data-astro-cid-2mdeh4hv> ${[...new Array(rows)].map((row, i) => {
    return renderTemplate`${renderComponent($$result, "InfiniteLoopSlider", $$InfiniteLoopSlider, { "duration": random(43e3, 45e3), "reverse": i % 2 == 0, "data-astro-cid-2mdeh4hv": true }, { "default": ($$result2) => renderTemplate`${tools.slice(0, perRow).map((tool) => renderTemplate`<div${addAttribute(tool?.name, "aria-label")}${addAttribute(tool?.name, "title")}${addAttribute([
      "p-s rounded-xl ml-xs z-10  shadow-sm border   shadow-white/[0.05] border-accent/40",
      transparent ? "bg-transparet" : "bg-bgColor"
    ], "class:list")} data-astro-cid-2mdeh4hv> ${renderComponent($$result2, "Icon", $$Icon, { "name": tool?.icon, "class": "size-8 text-textColor   ", "data-astro-cid-2mdeh4hv": true })} </div>`)}` })}`;
  })} <!-- <div class="fade"></div> --> </div> `;
}, "/Users/atrujillo/at/src/pages/_components/project/project-tools.astro", void 0);

const Highlight = ({
  children,
  className
}) => {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: cn(
        "font-semibold underline underline-offset-2 decoration-accent  text-textColor   px-1 py-0.5",
        className
      ),
      children
    }
  );
};

function Counter({
  value,
  direction = "up",
  as = "span",
  className,
  includePercentageSymbol = false
}) {
  const ref = useRef(null);
  const motionValue = useMotionValue(
    direction === "down" ? value : 0
  );
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100
  });
  const isInView = useInView(ref, {
    once: true,
    margin: "-100px"
  });
  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [motionValue, isInView]);
  useEffect(
    () => springValue.on("change", (latest) => {
      if (ref.current) {
        let formattedText = Intl.NumberFormat(
          "en-US"
        ).format(latest.toFixed(0));
        if (includePercentageSymbol) {
          formattedText += "%";
        }
        ref.current.textContent = formattedText;
      }
    }),
    [springValue]
  );
  return /* @__PURE__ */ jsx("span", { className, ref });
}

function Stat({
  label,
  value,
  includePercentageSymbol
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-xs items-center *:text-center", children: [
    typeof value === "number" ? /* @__PURE__ */ jsx(
      Counter,
      {
        value,
        className: "text-lg sm:text-4xl font-bold text-accent",
        includePercentageSymbol
      }
    ) : /* @__PURE__ */ jsx("h5", { className: "text-lg sm:text-4xl text-accent", children: value }),
    /* @__PURE__ */ jsx("span", { className: "text-sm sm:text-base font-light opacity-80 ", children: label })
  ] });
}

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", Section, { "client:visible": true, "idName": "contact", "title": "Contact", "backgroundColor": "accent", "minHeight": "50svh", "className": "flex flex-col  items-center  h-full  ", "client:component-hydration": "visible", "client:component-path": "@/components/ui/section", "client:component-export": "Section" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col items-center *:text-left gap-xl *:text-bgColor max-w-sm mx-auto sm:max-w-2xl px-l sm:px-0"> <!-- <StaggeredText
      words="Interested in Working Together?"
      as="h3"
    /> --> <h3>Interested in Working Together?</h3> <p>
If you're looking for a dedicated and skilled
      developer to join your team or contribute to your
      project, I'd be thrilled to explore the opportunity.
      Send me a message, and let's discuss how my expertise
      can help you achieve your objectives.
</p> </div> ${renderComponent($$result2, "ContactMe", $$ContactMe, { "className": "mt-2xl", "inverse": true })}  ` })}`;
}, "/Users/atrujillo/at/src/pages/_components/contact.astro", void 0);

export { $$ProjectTools as $, Highlight as H, MovingBorderWrapper as M, Section as S, Stat as a, $$Contact as b, staggerContainer as s };
