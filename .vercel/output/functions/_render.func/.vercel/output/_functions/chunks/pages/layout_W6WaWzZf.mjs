import { e as createComponent, r as renderTemplate, g as addAttribute, h as createAstro, s as spreadAttributes, u as unescapeHTML, i as renderComponent, m as maybeRenderHead, k as renderSlot, l as renderTransition, n as renderHead } from '../astro_BqRHk3mo.mjs';
/* empty css                          */
import 'clsx';
/* empty css                           */
import { s as siteConfig, $ as $$Icon, n as navLinks, a as $$ContactMe, b as socialLinks, c as cn } from './index_BHIa_QUp.mjs';
import { g as getImage } from './generic_DSalWaey.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import { useState } from 'react';
import { Drawer as Drawer$1 } from 'vaul';
import { useScroll, useMotionValueEvent, AnimatePresence, motion } from 'framer-motion';

const $$Astro$e = createAstro();
const $$ViewTransitions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$ViewTransitions;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>`;
}, "/Users/atrujillo/at/node_modules/.pnpm/astro@4.10.1_typescript@5.4.5/node_modules/astro/components/ViewTransitions.astro", void 0);

const $$Astro$d = createAstro();
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/Users/atrujillo/at/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.4.5/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$c = createAstro();
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/Users/atrujillo/at/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.4.5/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$b = createAstro();
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/Users/atrujillo/at/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.4.5/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$a = createAstro();
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/Users/atrujillo/at/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.4.5/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$9 = createAstro();
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "/Users/atrujillo/at/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.4.5/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$8 = createAstro();
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/Users/atrujillo/at/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.4.5/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$7 = createAstro();
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "/Users/atrujillo/at/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.4.5/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$6 = createAstro();
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "/Users/atrujillo/at/node_modules/.pnpm/astro-seo@0.8.4_typescript@5.4.5/node_modules/astro-seo/src/SEO.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$5 = createAstro();
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const xHandle = "andretru22";
  const {
    description = siteConfig.description,
    image = siteConfig.image,
    canonicalURL = new URL(Astro2.request.url, Astro2.site),
    pageType = "website"
  } = Astro2.props;
  const title = "Andres Trujillo - Senior Frontend Developer ";
  const resolvedImage = await getImage({
    src: image.src,
    width: 1200,
    height: 630,
    aspectRatio: 2,
    format: "svg",
    alt: "AT"
  });
  const resolvedImageWithDomain = new URL(
    resolvedImage.src,
    Astro2.url
  ).toString();
  return renderTemplate(_a || (_a = __template(['<!-- High Priority Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>', '</title><meta name="generator"', '><meta name="theme-color" content="#8D46E7"><!-- Fathom - beautiful, simple website analytics --><!-- <script\n  src="https://cdn.usefathom.com/script.js"\n  data-site="EZBHTSIG"\n  defer><\/script> --><!-- Font preloads --><link rel="preload" href="/fonts/AvertaRegular.woff2" as="font" type="font/woff2" crossorigin="anonymous"><link rel="preload" href="/fonts/AvertaBold.woff2" as="font" type="font/woff2" crossorigin><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin><!-- Low Priority Global Metadata --><!-- <Favicon /> --><link rel="icon" href="/favicon.ico" sizes="any"><link rel="icon" href="/icon.svg" type="image/svg+xml"><link rel="apple-touch-icon" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><link rel="canonical"', '><!-- <link rel="mask-icon" href="/favicon.svg" color="#8D46E7" /> --><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml" href="/rss.xml" title="RSS">', "", '<!-- <script>\n  import Lenis from "lenis";\n\n  const lenis = new Lenis({ syncTouch: false });\n\n  function raf(time: number) {\n    lenis.raf(time);\n    requestAnimationFrame(raf);\n  }\n\n  requestAnimationFrame(raf);\n<\/script> -->'])), unescapeHTML(title), addAttribute(Astro2.generator, "content"), addAttribute(canonicalURL, "href"), renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "openGraph": {
    basic: {
      url: canonicalURL,
      type: "website",
      title: siteConfig.title,
      image: resolvedImageWithDomain
    },
    image: {
      alt: "Andres Trujillo"
    }
  }, "twitter": {
    creator: xHandle,
    site: ""
  } }), renderComponent($$result, "ViewTransitions", $$ViewTransitions, {}));
}, "/Users/atrujillo/at/src/components/base-head.astro", void 0);

const $$SkipLink = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<a href="#main" class="sr-only focus:not-sr-only focus:fixed focus:start-1 focus:top-1.5">skip to content</a>`;
}, "/Users/atrujillo/at/src/components/ui/skip-link.astro", void 0);

const $$Astro$4 = createAstro();
const $$SocialLinks = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SocialLinks;
  const { links, class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute([
    " flex items-center justify-center ",
    className
  ], "class:list")}> ${links.map((link) => renderTemplate`<a class=" hover:glow   " target="_blank" rel="noopener noreferer"${addAttribute(link.href, "href")}> <span class="sr-only">${link.platform}</span> ${renderComponent($$result, "Icon", $$Icon, { "name": link.icon, "class": "size-7 fill-white text-white" })} </a>`)} </div>`;
}, "/Users/atrujillo/at/src/components/ui/social-links.astro", void 0);

const $$Astro$3 = createAstro();
const $$NavLink = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$NavLink;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute([
    className,
    // "hover:text-link active:text-link hover:underline hover:underline-offset-4 hover:transition  hover:transition-all",
    {
      "underline underline-offset-2 decoration-1 ": isActive
    },
    "hover:glow  "
  ], "class:list")}${addAttribute(href, "href")}${spreadAttributes(props)}> ${renderSlot($$result, $$slots["default"])} </a>`;
}, "/Users/atrujillo/at/src/components/ui/nav-link.astro", void 0);

const $$Astro$2 = createAstro();
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Logo;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a href="/" data-astro-prefetch title="Home" data-home-link${addAttribute([className, ""], "class:list")}> <svg width="62" height="36" viewBox="0 0 62 36" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path d="M12.224 30.864C11.712 30.864 11.264 30.7147 10.88 30.416C10.496 30.1173 10.304 29.4773 10.304 28.496C10.304 28.048 10.464 27.3333 10.784 26.352C11.104 25.3707 11.5307 24.2187 12.064 22.896C12.6187 21.552 13.2373 20.1333 13.92 18.64C14.6027 17.1467 15.3173 15.664 16.064 14.192C16.8107 12.72 17.536 11.3547 18.24 10.096C18.944 8.83733 19.5947 7.77066 20.192 6.896C20.8107 6 21.312 5.40266 21.696 5.104C22.2507 4.69866 22.8053 4.496 23.36 4.496C23.6587 4.496 23.9467 4.528 24.224 4.592C24.5227 4.656 24.768 4.76267 24.96 4.912C25.408 5.18933 25.8027 5.72267 26.144 6.512C26.5067 7.28 26.8267 8.208 27.104 9.296C27.4027 10.384 27.648 11.5573 27.84 12.816C28.0533 14.0533 28.2347 15.28 28.384 16.496C29.1947 16.3893 29.7493 16.336 30.048 16.336C30.688 16.336 31.2533 16.432 31.744 16.624C32.2347 16.7947 32.4907 17.1573 32.512 17.712C32.5547 18.2453 32.384 18.6933 32 19.056C31.6373 19.4187 31.168 19.6853 30.592 19.856C30.336 19.9413 29.7173 20.08 28.736 20.272C28.8 21.36 28.832 22.2773 28.832 23.024C28.832 24.9227 28.7253 26.3947 28.512 27.44C28.32 28.4853 28.064 29.232 27.744 29.68C27.4453 30.128 27.1253 30.3947 26.784 30.48C26.464 30.5867 26.176 30.64 25.92 30.64C25.8987 30.64 25.8773 30.64 25.856 30.64C25.2373 30.64 24.7787 30.48 24.48 30.16C24.2027 29.84 24.064 29.3067 24.064 28.56V26.288C24.064 25.584 24.0533 24.7947 24.032 23.92C24.0107 23.0453 23.968 22.1173 23.904 21.136C22.6453 21.3493 21.3867 21.5627 20.128 21.776C18.8907 21.968 17.824 22.1387 16.928 22.288C16.5227 23.248 16.1707 24.112 15.872 24.88C15.5733 25.6267 15.3707 26.2133 15.264 26.64C14.944 27.6853 14.6453 28.5067 14.368 29.104C14.0907 29.68 13.824 30.0853 13.568 30.32C13.3333 30.576 13.1093 30.7253 12.896 30.768C12.6827 30.832 12.4587 30.864 12.224 30.864ZM18.688 18.352C19.584 18.1387 20.448 17.9467 21.28 17.776C22.112 17.584 22.9013 17.4133 23.648 17.264C23.5413 15.9413 23.4133 14.6507 23.264 13.392C23.1147 12.1333 22.944 11.0133 22.752 10.032C22.1973 11.0987 21.5467 12.3787 20.8 13.872C20.0747 15.344 19.3707 16.8373 18.688 18.352ZM32.2665 10.512C31.2425 10.512 30.4852 10.416 29.9945 10.224C29.5252 10.0107 29.2158 9.76533 29.0665 9.488C28.9385 9.18933 28.8745 8.92267 28.8745 8.688C28.8745 8.38933 29.0452 8.048 29.3865 7.664C29.7278 7.25867 30.3892 6.96 31.3705 6.768C32.3518 6.55467 33.5145 6.36267 34.8585 6.192C36.2025 6 37.6318 5.84 39.1465 5.712C40.6612 5.56267 42.1972 5.43467 43.7545 5.328C45.3118 5.22133 46.7945 5.14667 48.2025 5.104C49.6105 5.04 50.8585 5.008 51.9465 5.008C53.0772 5.008 53.9518 5.072 54.5705 5.2C55.1892 5.328 55.6265 5.488 55.8825 5.68C56.1598 5.872 56.3198 6.07467 56.3625 6.288C56.4265 6.50133 56.4585 6.704 56.4585 6.896C56.4585 6.93867 56.4585 6.97067 56.4585 6.992C56.4585 7.248 56.3945 7.52533 56.2665 7.824C56.1598 8.12267 55.9145 8.37867 55.5305 8.592C55.1465 8.784 54.5705 8.88 53.8025 8.88C53.5252 8.88 52.9065 8.92267 51.9465 9.008C50.9865 9.09333 49.8132 9.2 48.4265 9.328C47.0398 9.456 45.5678 9.584 44.0105 9.712C43.7758 10.672 43.5092 11.792 43.2105 13.072C42.9332 14.352 42.6452 15.696 42.3465 17.104C42.0692 18.512 41.8025 19.8987 41.5465 21.264C41.2905 22.608 41.0772 23.856 40.9065 25.008C40.7358 26.1387 40.6185 27.0667 40.5545 27.792C40.4692 28.7733 40.1812 29.4667 39.6905 29.872C39.2212 30.256 38.7518 30.448 38.2825 30.448C37.9412 30.448 37.5998 30.3733 37.2585 30.224C36.9172 30.096 36.6398 29.808 36.4265 29.36C36.2132 28.8907 36.1065 28.1973 36.1065 27.28C36.1065 26.3413 36.1918 25.1893 36.3625 23.824C36.5332 22.4373 36.7572 20.9547 37.0345 19.376C37.3332 17.7973 37.6638 16.208 38.0265 14.608C38.4105 13.008 38.8052 11.5147 39.2105 10.128C37.7812 10.2347 36.4585 10.3307 35.2425 10.416C34.0265 10.48 33.0345 10.512 32.2665 10.512Z" fill="currentColor"></path> </svg> </a>`;
}, "/Users/atrujillo/at/src/components/ui/logo.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Primary" class="grid grid-cols-12 gap-m w-full *:items-center *:justify-center"> ${renderComponent($$result, "Logo", $$Logo, { "class": "col-span-1 md:flex justify-self-start" })} <ul id="menu-items" class="col-span-6 flex-row gap-4xl hidden md:flex"> ${navLinks.map((link) => renderTemplate`<li class=" "> ${renderComponent($$result, "NavLink", $$NavLink, { "class": "", "href": link.href }, { "default": ($$result2) => renderTemplate`${link.title}` })} </li>`)} </ul> ${renderComponent($$result, "SocialLinks", $$SocialLinks, { "class": "col-span-3 gap-xl hidden md:flex", "links": socialLinks })} ${renderComponent($$result, "ContactMe", $$ContactMe, { "className": "col-span-2 hidden md:flex justify-self-end" })} <!-- <ThemeToggle
    class="col-span-1 hidden md:flex justify-self-end"
  /> --> </nav>`;
}, "/Users/atrujillo/at/src/components/ui/nav.astro", void 0);

const $$Astro$1 = createAstro();
const $$ThemeToggle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ThemeToggle;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<button id="theme-toggle"${addAttribute([
    "flex items-center justify-center   text-textColor w-full h-max  ",
    className
  ], "class:list")} aria-label="Change color scheme"> <div class="h-full w-max hover:glow"> ${renderComponent($$result, "Icon", $$Icon, { "name": "moon", "class": "size-6" })} </div> </button> `;
}, "/Users/atrujillo/at/src/components/ui/theme-toggle.astro", void 0);

const $$NavMobileContent = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav aria-label="Primary" class="flex items-end w-full h-full flex-col text-right [&>*]:p-l"> <ul id="menu-items" class="flex flex-col gap-l"> ${navLinks.map((link) => renderTemplate`<li class="py-1"> ${renderComponent($$result, "NavLink", $$NavLink, { "class": "", "href": link.href }, { "default": ($$result2) => renderTemplate`${link.title}` })} </li>`)} </ul> ${renderComponent($$result, "SocialLinks", $$SocialLinks, { "links": socialLinks, "class": "gap-xl" })} ${renderComponent($$result, "ThemeToggle", $$ThemeToggle, {})} </nav>`;
}, "/Users/atrujillo/at/src/components/ui/nav-mobile-content.astro", void 0);

const Drawer = ({
  shouldScaleBackground = true,
  ...props
}) => /* @__PURE__ */ jsx(
  Drawer$1.Root,
  {
    shouldScaleBackground,
    ...props
  }
);
Drawer.displayName = "Drawer";
const DrawerTrigger = Drawer$1.Trigger;
const DrawerPortal = Drawer$1.Portal;
Drawer$1.Close;
const DrawerOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Drawer$1.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80",
      className
    ),
    ...props
  }
));
DrawerOverlay.displayName = Drawer$1.Overlay.displayName;
const DrawerContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DrawerPortal, { children: [
  /* @__PURE__ */ jsx(DrawerOverlay, {}),
  /* @__PURE__ */ jsxs(
    Drawer$1.Content,
    {
      ref,
      className: cn(
        "fixed inset-x-0 bottom-0 z-50 mt-24 flex h-auto flex-col rounded-t-[10px] border bg-bgColor",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" }),
        children
      ]
    }
  )
] }));
DrawerContent.displayName = "DrawerContent";
const DrawerTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Drawer$1.Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DrawerTitle.displayName = Drawer$1.Title.displayName;
const DrawerDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  Drawer$1.Description,
  {
    ref,
    className: cn(
      "text-sm text-muted-foreground",
      className
    ),
    ...props
  }
));
DrawerDescription.displayName = Drawer$1.Description.displayName;

function NavMobileButton({ children }) {
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsxs(
    Drawer,
    {
      direction: "right",
      open,
      onOpenChange: setOpen,
      children: [
        /* @__PURE__ */ jsx(
          DrawerTrigger,
          {
            asChild: true,
            className: "md:hidden md:invisible mr-4 ",
            children: /* @__PURE__ */ jsxs(
              "button",
              {
                className: "group relative ms-4 h-7 w-7 text-current",
                type: "button",
                "aria-label": "Open main menu",
                "aria-expanded": "false",
                "aria-haspopup": "menu",
                children: [
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      id: "line-svg",
                      className: "absolute start-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 transition-all group-aria-expanded:scale-0 group-aria-expanded:opacity-0",
                      "aria-hidden": "true",
                      focusable: "false",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      strokeWidth: "1.5",
                      stroke: "currentColor",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M3.75 9h16.5m-16.5 6.75h16.5"
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "svg",
                    {
                      id: "cross-svg",
                      className: "absolute start-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 scale-0 text-accent opacity-0 transition-all group-aria-expanded:scale-100 group-aria-expanded:opacity-100 ",
                      "aria-hidden": "true",
                      focusable: "false",
                      xmlns: "http://www.w3.org/2000/svg",
                      fill: "none",
                      viewBox: "0 0 24 24",
                      strokeWidth: "1.5",
                      stroke: "currentColor",
                      children: /* @__PURE__ */ jsx(
                        "path",
                        {
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          d: "M6 18L18 6M6 6l12 12"
                        }
                      )
                    }
                  )
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ jsx(DrawerContent, { className: "border-0 mt-0 top-10 p-l", children })
      ]
    }
  );
}

function Floating({ children, className }) {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  useMotionValueEvent(
    scrollYProgress,
    "change",
    (current) => {
      if (typeof current === "number") {
        let direction = current - scrollYProgress.getPrevious();
        direction > 0 ? setVisible(false) : setVisible(true);
      }
    }
  );
  return /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: {
        opacity: 1,
        y: -100
      },
      animate: {
        y: visible ? 0 : -100,
        opacity: visible ? 1 : 0
      },
      transition: {
        duration: 0.2
      },
      className: cn(" fixed top-10  z-[5000]", className),
      children
    }
  ) });
}

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header id="main-header" class=""> ${renderComponent($$result, "Floating", Floating, { "client:load": true, "className": "group w-full mt-s md:container mx-auto   fixed  rounded-xl top-0 max-h-5xl p-s bg-bgColor/40  shadow-sm shadow-white/10 backdrop-blur-md   flex flex-row  items-center inset-x-5 md:inset-x-0   z-[5000]", "client:component-hydration": "load", "client:component-path": "/Users/atrujillo/at/src/components/ui/floating", "client:component-export": "Floating" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Nav", $$Nav, {})} ${renderComponent($$result2, "NavMobileButton", NavMobileButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/atrujillo/at/src/components/ui/nav-mobile-button", "client:component-export": "NavMobileButton" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "NavMobile", $$NavMobileContent, {})} ` })} ` })} </header>`;
}, "/Users/atrujillo/at/src/components/ui/header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer class="mt-auto max-w-2xl mx-auto flex w-full flex-col items-center justify-center gap-y-2 py-l text-center align-top font-semibold text-gray-600 dark:text-gray-400 sm:flex-row sm:justify-between sm:text-xs"> <div class="me-0 sm:me-4">
Created by yours truly &copy; ${year}${" "} ${siteConfig.name} </div> <nav aria-label="More on this site" class="flex gap-x-2 sm:gap-x-0 sm:divide-x sm:divide-gray-500"> ${navLinks.map((link) => renderTemplate`<a${addAttribute(link.href, "href")} class="px-4 py-2 sm:px-2 sm:py-0 sm:hover:text-textColor sm:hover:underline"> ${link.title} </a>`)} </nav> </footer>`;
}, "/Users/atrujillo/at/src/components/ui/footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { ...head } = Astro2.props;
  return renderTemplate`<html lang="en" class="h-full scroll-smooth break-words"${addAttribute(renderTransition($$result, "hei6g6t4", "initial", ""), "data-astro-transition-scope")}> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { ...head })}${renderHead()}</head> <body class=""> ${renderComponent($$result, "SkipLink", $$SkipLink, {})} ${renderComponent($$result, "Header", $$Header, {})} <main id="main" class="relative z-10 flex flex-col"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} <!-- <ThemeProvider /> --> <!-- <slot /> --> </body></html>`;
}, "/Users/atrujillo/at/src/pages/layout.astro", "self");

const $$file = "/Users/atrujillo/at/src/pages/layout.astro";
const $$url = "/layout";

export { $$Layout as default, $$file as file, $$url as url };
