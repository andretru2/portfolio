/* empty css                         */
import { p as createComponent, q as renderTemplate, s as renderComponent, t as maybeRenderHead, u as addAttribute, v as createAstro } from './astro/server_BE4fpZxS.mjs';
import { R as Roles, c as cn, $ as $$Layout } from './layout_CQXrL7Zc.mjs';
import { M as MovingBorderWrapper, $ as $$ProjectTools, S as Section, H as Highlight, a as Stat, b as $$Contact } from './contact_D7a8suv3.mjs';
import { $ as $$Image } from './_astro_assets_B5Mk6aYE.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { motion } from 'framer-motion';
import { useState } from 'react';

const HeroImage = "/_astro/design-system-showcase.BcWErlOC.mp4";

const HeroOverlay = new Proxy({"src":"/_astro/bhf-hero-original.DZD_13YX.webp","width":4808,"height":3194,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/atrujillo/at/src/pages/projects/bhf/_assets/bhf-hero-original.webp";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const projectRoles = [
    "chief-architect",
    "fullstack",
    "database-admin",
    "uiux",
    // "frontend",
    // "backend",
    "project-manager",
    "prototyper"
  ];
  const projectTools = [
    "react",
    "tailwind",
    "typescript",
    "figma",
    "nextjs",
    "c",
    "sqlserver",
    "js",
    "docker",
    "swagger",
    "filemaker"
  ];
  const roles = projectRoles.map((roleKey) => {
    return Roles.get(roleKey);
  });
  return renderTemplate`${renderComponent($$result, "Section", Section, { "client:visible": true, "idName": "hero", "minHeight": "220svh", "parallax": true, "skipRoundCorners": true, "margin": "none", "padding": "none", "backgroundColor": "bgColor", "className": " bg-bgColor relative flex flex-col items-center justify-center  gap-5xl p-3xl  ", "client:component-hydration": "visible", "client:component-path": "@/components/ui/section", "client:component-export": "Section" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Image", $$Image, { "src": HeroOverlay, "format": "webp", "loading": "eager", "quality": "high", "alt": "Brtiannica's home fashions hero", "class": "absolute inset-0 opacity-40 -z-10 bg-bgColor" })} ${maybeRenderHead()}<div class="flex flex-col gap-m justify-center items-center max-w-2xl"> ${renderComponent($$result2, "MovingBorderWrapper", MovingBorderWrapper, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/ui/moving-border", "client:component-export": "MovingBorderWrapper" }, { "default": ($$result3) => renderTemplate`
ERP System
` })} <h3 class="text-center">
Designing the Future of Britannica Home Fashions
</h3> <p class="text-center">
I worked as the design lead on a major iteration of
      Britannica’s home fashions internal software
      application. We took the platform in a bold new
      direction, focusing on standardized components,
      promoting consistency, and facilitating collaboration.
</p> <div class="mt-2xl flex flex-row gap-m flex-wrap items-center justify-center"> ${roles?.map((role) => renderTemplate`<span class="w-max border-2  border-accent/40 py-xs px-s rounded-xl"> ${role} </span>`)} </div> <div class="max-w-xl mt-xl"> ${renderComponent($$result2, "ProjectTools", $$ProjectTools, { "toolKeys": projectTools, "rows": 1, "perRow": 20, "transparent": true })} </div> </div> <video autoplay class="w-full h-full object-cover rounded-xl"> <source${addAttribute(HeroImage, "src")} type="video/mp4"> </video> ` })}`;
}, "/Users/atrujillo/at/src/pages/projects/bhf/_components/hero.astro", void 0);

const BHFLogo = new Proxy({"src":"/_astro/client-bhf-logo.BJPfzIhv.png","width":88,"height":121,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/atrujillo/at/src/pages/projects/bhf/_assets/client-bhf-logo.png";
							}
							
							return target[name];
						}
					});

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};
const item = {
  hidden: { opacity: 0, y: -24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: "easeIn"
      // repeat: "infinity",
    }
  }
};
function BhfBrandLogos({
  logos,
  rows = 2,
  pageSize = 4,
  className
}) {
  return Array.from({ length: rows }).map((row, num) => {
    const pageNum = num + 1;
    const start = pageSize === Number.POSITIVE_INFINITY ? 0 : (pageNum - 1) * pageSize;
    const end = Math.min(start + pageSize, logos.length);
    return /* @__PURE__ */ jsx(
      motion.div,
      {
        variants: container,
        initial: "hidden",
        whileInView: "show",
        "data-id": num,
        className: cn(
          "grid grid-flow-col  place-content-center  items-start ",
          className
        ),
        children: logos.slice(start, end).map((logo, i) => /* @__PURE__ */ jsx(Logo, { logo }, i))
      },
      num
    );
  });
}
function Logo({ logo }) {
  return /* @__PURE__ */ jsx(
    motion.svg,
    {
      variants: item,
      dangerouslySetInnerHTML: { __html: logo },
      className: "max-w-44 max-h-8 fill-white  "
    }
  );
}

const $$Astro = createAstro();
const $$ClientBrandBhfLogosWrapper = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ClientBrandBhfLogosWrapper;
  const { className, rows, pageSize } = Astro2.props;
  const logoPaths = /* #__PURE__ */ Object.assign({"/src/pages/projects/bhf/_assets/logos/bhf-logo-amazon.svg": () => import('./bhf-logo-amazon_72LvqM4Q.mjs').then(m => m["default"]),"/src/pages/projects/bhf/_assets/logos/bhf-logo-bloomingdales.svg": () => import('./bhf-logo-bloomingdales_DiX7BW1v.mjs').then(m => m["default"]),"/src/pages/projects/bhf/_assets/logos/bhf-logo-burlington.svg": () => import('./bhf-logo-burlington_DMkL7Fd3.mjs').then(m => m["default"]),"/src/pages/projects/bhf/_assets/logos/bhf-logo-costco.svg": () => import('./bhf-logo-costco_UyBSHGMq.mjs').then(m => m["default"]),"/src/pages/projects/bhf/_assets/logos/bhf-logo-kohls.svg": () => import('./bhf-logo-kohls_CW6wHvux.mjs').then(m => m["default"]),"/src/pages/projects/bhf/_assets/logos/bhf-logo-macys.svg": () => import('./bhf-logo-macys_DsldNXmv.mjs').then(m => m["default"]),"/src/pages/projects/bhf/_assets/logos/bhf-logo-nordstrom.svg": () => import('./bhf-logo-nordstrom_BxBuJQ_l.mjs').then(m => m["default"]),"/src/pages/projects/bhf/_assets/logos/bhf-logo-saks.svg": () => import('./bhf-logo-saks_CAJnx9Yt.mjs').then(m => m["default"]),"/src/pages/projects/bhf/_assets/logos/bhf-logo-target.svg": () => import('./bhf-logo-target_BoC4iizg.mjs').then(m => m["default"]),"/src/pages/projects/bhf/_assets/logos/bhf-logo-walmart.svg": () => import('./bhf-logo-walmart_fm5eQQ-O.mjs').then(m => m["default"])




});
  const logos = await Promise.all(
    Object.values(logoPaths).map(async (logoPath) => {
      return logoPath().then((rawContent) => ({
        rawContent
      }));
    })
  ).then(
    (logoObjects) => logoObjects.map(({ rawContent }) => rawContent)
  );
  return renderTemplate`${renderComponent($$result, "BhfBrandLogos", BhfBrandLogos, { "logos": logos, "client:visible": true, "className": className, "rows": rows, "pageSize": pageSize, "client:component-hydration": "visible", "client:component-path": "/Users/atrujillo/at/src/pages/projects/bhf/_components/client-brand-logos", "client:component-export": "BhfBrandLogos" })} <!-- <div class="grid grid-cols-5 gap-xl">
  {
    logos.map((logo) => (
      <svg
        set:html={logo}
        class="max-w-16 max-h-8 fill-white"
      />
    ))
  }
</div> --> <!-- <div class="grid grid-cols-5 gap-xs place-content-center">
  {
    logos.map((logo) => (
      <img
        class=" text-white bg-white aspect-video max-h-16  max-w-32"
        src={logo.src}
        alt="Logo"
      />
    ))
  }
</div> -->`;
}, "/Users/atrujillo/at/src/pages/projects/bhf/_components/client-brand-bhf-logos-wrapper.astro", void 0);

const $$Client = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", Section, { "client:visible": true, "idName": "client", "title": "Meet the Client", "backgroundColor": "bgColorHero", "className": "relative flex flex-col  items-center   ", "client:component-hydration": "visible", "client:component-path": "@/components/ui/section", "client:component-export": "Section" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-l items-center max-w-5xl mt-2xl"> ${renderComponent($$result2, "Image", $$Image, { "src": BHFLogo, "format": "webp", "loading": "eager", "quality": "high", "class": "text-left justify-self-start", "alt": "Brtiannica's home fashions hero", "class": "" })} <p class="mt-xl">
Britannica Home Fashions (BHF) is a ${renderComponent($$result2, "Highlight", Highlight, {}, { "default": ($$result3) => renderTemplate`worldwide frontrunner in home goods,` })} renowned for its diverse product lines, grappled with
      the intricacies of supply chain and order management data.
</p> <p class="">
The company’s${renderComponent($$result2, "Highlight", Highlight, {}, { "default": ($$result3) => renderTemplate`global position` })} is
      reinforced by their${renderComponent($$result2, "Highlight", Highlight, {}, { "default": ($$result3) => renderTemplate`longstanding reputation and robust collaborations
        with leading brands such as UGG, Pendleton, and
        Walmart;` })} and is supported by a ${renderComponent($$result2, "Highlight", Highlight, {}, { "default": ($$result3) => renderTemplate`network of international offices and a
        comprehensive omnichannel distribution system.
` })} </p> <div class="mt-2xl"> ${renderComponent($$result2, "ProjectHeroBhfLogos", $$ClientBrandBhfLogosWrapper, { "className": " gap-4xl p-m", "rows": 4, "pageSize": 3 })} </div> </div> ` })}`;
}, "/Users/atrujillo/at/src/pages/projects/bhf/_components/client.astro", void 0);

const $$Problem = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", Section, { "client:visible": true, "idName": "problem", "title": "The Challenge", "backgroundColor": "bgColor", "className": "flex flex-col   items-center ", "client:component-hydration": "visible", "client:component-path": "@/components/ui/section", "client:component-export": "Section" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-l"> <p> ${renderComponent($$result2, "Highlight", Highlight, {}, { "default": ($$result3) => renderTemplate`Despite its global success, BHF acknowledged the
        need to optimize operations and enhance efficiency.` })} Occasional communication gaps between departments hindered
      access to crucial information, potentially impacting production
      schedules, revenue, and reputation. The existing manual
      processes, although functional, presented opportunities
      for improvement to minimize errors and boost productivity.
</p> <p>
Leadership recognized that a more integrated internal
      system would bridge communication gaps, streamline
      inventory management, and simplify financial
      reporting. The current system required upgrades to
      enhance performance and user experience. ${renderComponent($$result2, "Highlight", Highlight, {}, { "default": ($$result3) => renderTemplate`Investing in a robust, unified system would
        position BHF for continued growth and success.` })} </p> <p>
To tackle this challenge, BHF hired me to develop a
      comprehensive ERP system from the ground up. The
      objective was to create a seamless platform that would
      improve processes, increase data accuracy, and deliver
      real-time insights. ${renderComponent($$result2, "Highlight", Highlight, {}, { "default": ($$result3) => renderTemplate`I constructed the system module by module,
        encompassing item creation, purchase orders,
        invoicing, vendor portal, DocuSign integration, API
        connections, and more.` })} By unifying these components, BHF would operate more
      efficiently, reduce errors, and make informed, data-driven
      decisions.
</p> <p>
As the system grew in complexity and scope, it became
      necessary to expand the development team to ensure
      effective maintenance and continuous improvement. ${renderComponent($$result2, "Highlight", Highlight, {}, { "default": ($$result3) => renderTemplate`I took on the role of a manager and mentor, guiding
        junior and intermediate developers as they joined
        the team.` })} This transition allowed me to oversee the system's growth,
      delegate tasks, and provide guidance to the growing development
      team.
</p> </div> ` })}`;
}, "/Users/atrujillo/at/src/pages/projects/bhf/_components/problem.astro", void 0);

const hero = new Proxy({"src":"/_astro/spr-storyboarder-dark.BuwX6fEO.png","width":1280,"height":800,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/atrujillo/at/src/pages/projects/bhf/_assets/spr-storyboarder-dark.png";
							}
							
							return target[name];
						}
					});

const pos = new Proxy({"src":"/_astro/bhf-feature-pos.CAl5uFno.webp","width":3340,"height":1528,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/atrujillo/at/src/pages/projects/bhf/_assets/bhf-feature-pos.webp";
							}
							
							return target[name];
						}
					});

const matching = new Proxy({"src":"/_astro/bhf-feature-matching.CutHSsS3.webp","width":738,"height":387,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/atrujillo/at/src/pages/projects/bhf/_assets/bhf-feature-matching.webp";
							}
							
							return target[name];
						}
					});

const designsystem = new Proxy({"src":"/_astro/bhf-feature-design-system.m7TCRNcc.webp","width":1536,"height":806,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/atrujillo/at/src/pages/projects/bhf/_assets/bhf-feature-design-system.webp";
							}
							
							return target[name];
						}
					});

function Tabs({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName
}) {
  const [active, setActive] = useState(propTabs[0]);
  const [tabs, setTabs] = useState(propTabs);
  const moveSelectedTabToTop = (idx) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };
  const [hovering, setHovering] = useState(false);
  return /* @__PURE__ */ jsxs("div", { className: "", children: [
    /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "flex flex-row   items-center justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        ),
        children: propTabs.map((tab, idx) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              moveSelectedTabToTop(idx);
            },
            onMouseEnter: () => setHovering(true),
            onMouseLeave: () => setHovering(false),
            className: cn(
              "relative px-4 py-2 rounded-full",
              tabClassName
            ),
            style: {
              transformStyle: "preserve-3d"
            },
            children: [
              active.value === tab.value && /* @__PURE__ */ jsx(
                motion.div,
                {
                  layoutId: "clickedbutton",
                  transition: {
                    type: "spring",
                    bounce: 0.3,
                    duration: 0.6
                  },
                  className: cn(
                    "absolute inset-0 bg-[#9DF2D5] rounded-xl ",
                    activeTabClassName
                  )
                }
              ),
              /* @__PURE__ */ jsx("span", { className: "relative block text-bgColor ", children: tab.title })
            ]
          },
          tab.title
        ))
      }
    ),
    /* @__PURE__ */ jsx(
      FadeInDiv,
      {
        tabs,
        active,
        hovering,
        className: cn("mt-3xl", contentClassName)
      },
      active.value
    )
  ] });
}
function FadeInDiv({
  className,
  tabs
}) {
  const isActive = (tab) => {
    return tab.value === tabs[0].value;
  };
  return /* @__PURE__ */ jsx("div", { className: "relative w-full    ", children: tabs.map((tab, idx) => /* @__PURE__ */ jsx(
    motion.div,
    {
      layoutId: tab.value,
      style: {
        scale: 1 - idx * 0.1,
        top: idx * -70,
        zIndex: -idx,
        opacity: idx < 3 ? 1 - idx * 0.3 : 0
      },
      animate: {
        y: isActive(tab) ? [0, 40, 0] : 0
      },
      className: cn(
        "min-h-max min-w-[50svw] absolute inset-0 bg-bgColor   rounded-[3rem]  ",
        className
      ),
      children: /* @__PURE__ */ jsx(
        TabContent,
        {
          header: tab.content?.header ?? "",
          description: tab.content?.description,
          stats: tab.content?.stats,
          image: tab.content?.image
        }
      )
    },
    tab.value
  )) });
}
function TabContent({
  header,
  description,
  stats,
  image
}) {
  return /* @__PURE__ */ jsxs("div", { className: " p-2xl flex gap-l flex-col items-center    min-w-0 h-full rounded-xl ", children: [
    /* @__PURE__ */ jsx("h5", { children: header }),
    /* @__PURE__ */ jsx("p", { className: "prose-p w-screen h-max ", children: description }),
    /* @__PURE__ */ jsx("div", { className: "flex flex-row gap-2xl items-center align-middle justify-start w-full  z-10 max-w-2xl mt-xl", children: stats && stats.map((statItem, index) => /* @__PURE__ */ jsx(
      Stat,
      {
        value: statItem.value,
        label: statItem.label,
        includePercentageSymbol: statItem.includePercentageSymbol
      },
      index
    )) }),
    image && /* @__PURE__ */ jsx(
      motion.img,
      {
        initial: {
          y: -10,
          rotate: -2
        },
        animate: {
          y: 0,
          rotate: 0,
          transition: {
            type: "spring",
            damping: 50,
            stiffness: 100,
            bounce: 10
          }
        },
        src: image,
        alt: header,
        className: "mt-xl aspect-video   rounded-xl object-cover object-left-top h-[60%]  md:h-[90%]  w-[90%]",
        loading: "lazy",
        decoding: "async",
        width: "1000",
        height: "1000"
      }
    )
  ] });
}

const $$Solution = createComponent(($$result, $$props, $$slots) => {
  const tabs = [
    {
      title: "Overview",
      value: "overview",
      content: {
        header: "Overview",
        description: "The purchase order module automates time-consuming tasks, improving efficiency in procurement. It eliminates errors, reduces paperwork, and accelerates the purchasing cycle. The module enables faster order processing and better inventory management. These improvements contribute to generating millions in monthly revenue.",
        stats: [
          { label: "Efficiency Increase", value: "200%" },
          { label: "Time Saved", value: "5 hours/week" },
          {
            label: "User Satisfaction",
            value: 9.8,
            includePercentageSymbol: true
          }
        ],
        image: hero.src
      }
    },
    {
      title: "Purchase Orders",
      value: "pos",
      content: {
        header: "Purchase Orders",
        description: "The purchase order module automates time-consuming tasks, improving efficiency in procurement. It eliminates errors, reduces paperwork, and accelerates the purchasing cycle. The module enables faster order processing and better inventory management. These improvements contribute to generating millions in monthly revenue.",
        stats: [
          { label: "Efficiency Increase", value: "200%" },
          { label: "Time Saved", value: "5 hours/week" },
          {
            label: "User Satisfaction",
            value: 9.8,
            includePercentageSymbol: true
          }
        ],
        image: pos.src
      }
    },
    {
      title: "Design System",
      value: "designsystem",
      content: {
        header: "Design System",
        description: "The purchase order module automates time-consuming tasks, improving efficiency in procurement. It eliminates errors, reduces paperwork, and accelerates the purchasing cycle. The module enables faster order processing and better inventory management. These improvements contribute to generating millions in monthly revenue.",
        stats: [
          { label: "Efficiency Increase", value: "200%" },
          { label: "Time Saved", value: "5 hours/week" },
          {
            label: "User Satisfaction",
            value: 9.8,
            includePercentageSymbol: true
          }
        ],
        image: designsystem.src
      }
    },
    {
      title: "Matching",
      value: "matching",
      content: {
        header: "PO Matching",
        description: "The purchase order module automates time-consuming tasks, improving efficiency in procurement. It eliminates errors, reduces paperwork, and accelerates the purchasing cycle. The module enables faster order processing and better inventory management. These improvements contribute to generating millions in monthly revenue.",
        stats: [
          { label: "Efficiency Increase", value: "200%" },
          { label: "Time Saved", value: "5 hours/week" },
          {
            label: "User Satisfaction",
            value: 9.8,
            includePercentageSymbol: true
          }
        ],
        image: matching.src
      }
    }
  ];
  return renderTemplate`${renderComponent($$result, "Section", Section, { "client:visible": true, "idName": "solution", "title": "The Solution", "backgroundColor": "accent", "minHeight": "160svh", "className": "flex flex-col items-center min-h-max ", "client:component-hydration": "visible", "client:component-path": "@/components/ui/section", "client:component-export": "Section" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container mx-auto h-svh"> ${renderComponent($$result2, "Tabs", Tabs, { "tabs": tabs, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "/Users/atrujillo/at/src/pages/projects/bhf/_components/solution-tabs", "client:component-export": "Tabs" })} </div> ` })}`;
}, "/Users/atrujillo/at/src/pages/projects/bhf/_components/solution.astro", void 0);

const $$Impact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", Section, { "client:visible": true, "idName": "impact", "title": "Impact", "backgroundColor": "bgColor", "className": "flex flex-col   items-center relative", "client:component-hydration": "visible", "client:component-path": "@/components/ui/section", "client:component-export": "Section" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-l"> <p> ${renderComponent($$result2, "Highlight", Highlight, {}, { "default": ($$result3) => renderTemplate`Despite its global success, BHF acknowledged the
        need to optimize operations and enhance efficiency.` })} Occasional communication gaps between departments hindered
      access to crucial information, potentially impacting production
      schedules, revenue, and reputation. The existing manual
      processes, although functional, presented opportunities
      for improvement to minimize errors and boost productivity.
</p> <p>
Leadership recognized that a more integrated internal
      system would bridge communication gaps, streamline
      inventory management, and simplify financial
      reporting. The current system required upgrades to
      enhance performance and user experience. ${renderComponent($$result2, "Highlight", Highlight, {}, { "default": ($$result3) => renderTemplate`Investing in a robust, unified system would
        position BHF for continued growth and success.` })} </p> <p>
To tackle this challenge, BHF hired me to develop a
      comprehensive ERP system from the ground up. The
      objective was to create a seamless platform that would
      improve processes, increase data accuracy, and deliver
      real-time insights. ${renderComponent($$result2, "Highlight", Highlight, {}, { "default": ($$result3) => renderTemplate`I constructed the system module by module,
        encompassing item creation, purchase orders,
        invoicing, vendor portal, DocuSign integration, API
        connections, and more.` })} By unifying these components, BHF would operate more
      efficiently, reduce errors, and make informed, data-driven
      decisions.
</p> <p>
As the system grew in complexity and scope, it became
      necessary to expand the development team to ensure
      effective maintenance and continuous improvement. ${renderComponent($$result2, "Highlight", Highlight, {}, { "default": ($$result3) => renderTemplate`I took on the role of a manager and mentor, guiding
        junior and intermediate developers as they joined
        the team.` })} This transition allowed me to oversee the system's growth,
      delegate tasks, and provide guidance to the growing development
      team.
</p> </div> ` })}`;
}, "/Users/atrujillo/at/src/pages/projects/bhf/_components/impact.astro", void 0);

const $$Process = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", Section, { "client:visible": true, "idName": "process", "title": "The Process", "backgroundColor": "bgColorHero", "className": "flex flex-col   items-center relative", "client:component-hydration": "visible", "client:component-path": "@/components/ui/section", "client:component-export": "Section" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-l"> <p> ${renderComponent($$result2, "Highlight", Highlight, {}, { "default": ($$result3) => renderTemplate`Despite its global success, BHF acknowledged the
        need to optimize operations and enhance efficiency.` })} Occasional communication gaps between departments hindered
      access to crucial information, potentially impacting production
      schedules, revenue, and reputation. The existing manual
      processes, although functional, presented opportunities
      for improvement to minimize errors and boost productivity.
</p> <p>
Leadership recognized that a more integrated internal
      system would bridge communication gaps, streamline
      inventory management, and simplify financial
      reporting. The current system required upgrades to
      enhance performance and user experience. ${renderComponent($$result2, "Highlight", Highlight, {}, { "default": ($$result3) => renderTemplate`Investing in a robust, unified system would
        position BHF for continued growth and success.` })} </p> <p>
To tackle this challenge, BHF hired me to develop a
      comprehensive ERP system from the ground up. The
      objective was to create a seamless platform that would
      improve processes, increase data accuracy, and deliver
      real-time insights. ${renderComponent($$result2, "Highlight", Highlight, {}, { "default": ($$result3) => renderTemplate`I constructed the system module by module,
        encompassing item creation, purchase orders,
        invoicing, vendor portal, DocuSign integration, API
        connections, and more.` })} By unifying these components, BHF would operate more
      efficiently, reduce errors, and make informed, data-driven
      decisions.
</p> <p>
As the system grew in complexity and scope, it became
      necessary to expand the development team to ensure
      effective maintenance and continuous improvement. ${renderComponent($$result2, "Highlight", Highlight, {}, { "default": ($$result3) => renderTemplate`I took on the role of a manager and mentor, guiding
        junior and intermediate developers as they joined
        the team.` })} This transition allowed me to oversee the system's growth,
      delegate tasks, and provide guidance to the growing development
      team.
</p> </div> ` })}`;
}, "/Users/atrujillo/at/src/pages/projects/bhf/_components/process.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Andres Trujillo - Case Study BHF" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Client", $$Client, {})} ${renderComponent($$result2, "Problem", $$Problem, {})} ${renderComponent($$result2, "Process", $$Process, {})} ${renderComponent($$result2, "Solution", $$Solution, {})}  ${renderComponent($$result2, "Impact", $$Impact, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "/Users/atrujillo/at/src/pages/projects/bhf/index.astro", void 0);

const $$file = "/Users/atrujillo/at/src/pages/projects/bhf/index.astro";
const $$url = "/projects/bhf";

export { $$Index as default, $$file as file, $$url as url };
