import { a4 as bold, a5 as red, a6 as yellow, a7 as dim, a8 as blue } from './chunks/astro_BqRHk3mo.mjs';
import 'clsx';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.C_azkgQQ.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.10.1_typescript@5.4.5/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DR7a6WlH.js"},{"type":"external","value":"/_astro/page.C_azkgQQ.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/index.B6nJeko8.css"},{"type":"external","src":"/_astro/layout.CyNKeQTh.css"}],"routeData":{"route":"/layout","isIndex":false,"type":"page","pattern":"^\\/layout\\/?$","segments":[[{"content":"layout","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/layout.astro","pathname":"/layout","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DR7a6WlH.js"},{"type":"external","value":"/_astro/page.C_azkgQQ.js"},{"stage":"head-inline","children":"window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };\n\t\tvar script = document.createElement('script');\n\t\tscript.defer = true;\n\t\tscript.src = '/_vercel/insights/script.js';\n\t\tvar head = document.querySelector('head');\n\t\thead.appendChild(script);\n\t"}],"styles":[{"type":"external","src":"/_astro/index.B6nJeko8.css"},{"type":"external","src":"/_astro/layout.CyNKeQTh.css"},{"type":"inline","content":".animate-children[data-astro-cid-ithgoeje]{display:flex;width:-moz-fit-content;width:fit-content;animation-name:loop;animation-timing-function:linear;animation-iteration-count:infinite;animation-duration:var(--duration);animation-direction:var(--direction);animation-play-state:running}@keyframes loop{0%{transform:translate(0)}50%{transform:translate(-25%)}to{transform:translate(-50%)}}.fade[data-astro-cid-2mdeh4hv]{pointer-events:none;background:linear-gradient(90deg,oklch(14.48% 0 0),transparent 10%,transparent 90%,oklch(14.48% 0 0));position:absolute;inset:0}\n"}],"routeData":{"route":"/projects/bhf","isIndex":true,"type":"page","pattern":"^\\/projects\\/bhf\\/?$","segments":[[{"content":"projects","dynamic":false,"spread":false}],[{"content":"bhf","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects/bhf/index.astro","pathname":"/projects/bhf","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/atrujillo/at/src/pages/layout.astro",{"propagation":"in-tree","containsHead":true}],["/Users/atrujillo/at/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/atrujillo/at/src/pages/projects/bhf/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/projects/bhf/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/layout@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/atrujillo/at/src/pages/_components/hero.astro",{"propagation":"in-tree","containsHead":false}],["/Users/atrujillo/at/src/pages/_components/project/project-details.astro",{"propagation":"in-tree","containsHead":false}],["/Users/atrujillo/at/src/pages/_components/project/project.astro",{"propagation":"in-tree","containsHead":false}],["/Users/atrujillo/at/src/pages/_components/projects.astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/layout.astro":"chunks/pages/layout_5JXChDrf.mjs","/src/pages/index.astro":"chunks/prerender_CWA8kHrw.mjs","\u0000@astrojs-manifest":"manifest_DWH4hg9v.mjs","/Users/atrujillo/at/node_modules/.pnpm/@astrojs+react@3.5.0_@types+react-dom@18.3.0_@types+react@18.3.3_react-dom@18.3.1_react@18.3.1_vite@5.3.2/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_C1YIWAGb.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.10.1_typescript@5.4.5/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_s4UJnVr9.mjs","\u0000@astro-page:src/pages/layout@_@astro":"chunks/layout_qv1HqYKI.mjs","\u0000@astro-page:src/pages/projects/bhf/index@_@astro":"chunks/index_DcjecG9z.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_BM4h0LC1.mjs","/Users/atrujillo/at/node_modules/.pnpm/astro@4.10.1_typescript@5.4.5/node_modules/astro/dist/env/setup.js":"chunks/setup_pmSpHZTB.mjs","/Users/atrujillo/at/src/pages/projects/bhf/_assets/logos/bhf-logo-amazon.svg?raw":"chunks/bhf-logo-amazon_72LvqM4Q.mjs","/Users/atrujillo/at/src/pages/projects/bhf/_assets/logos/bhf-logo-bloomingdales.svg?raw":"chunks/bhf-logo-bloomingdales_DiX7BW1v.mjs","/Users/atrujillo/at/src/pages/projects/bhf/_assets/logos/bhf-logo-burlington.svg?raw":"chunks/bhf-logo-burlington_DMkL7Fd3.mjs","/Users/atrujillo/at/src/pages/projects/bhf/_assets/logos/bhf-logo-costco.svg?raw":"chunks/bhf-logo-costco_UyBSHGMq.mjs","/Users/atrujillo/at/src/pages/projects/bhf/_assets/logos/bhf-logo-kohls.svg?raw":"chunks/bhf-logo-kohls_CW6wHvux.mjs","/Users/atrujillo/at/src/pages/projects/bhf/_assets/logos/bhf-logo-macys.svg?raw":"chunks/bhf-logo-macys_DsldNXmv.mjs","/Users/atrujillo/at/src/pages/projects/bhf/_assets/logos/bhf-logo-nordstrom.svg?raw":"chunks/bhf-logo-nordstrom_BxBuJQ_l.mjs","/Users/atrujillo/at/src/pages/projects/bhf/_assets/logos/bhf-logo-saks.svg?raw":"chunks/bhf-logo-saks_CAJnx9Yt.mjs","/Users/atrujillo/at/src/pages/projects/bhf/_assets/logos/bhf-logo-target.svg?raw":"chunks/bhf-logo-target_BoC4iizg.mjs","/Users/atrujillo/at/src/pages/projects/bhf/_assets/logos/bhf-logo-walmart.svg?raw":"chunks/bhf-logo-walmart_fm5eQQ-O.mjs","@/components/ui/swapper":"_astro/swapper.fdd-WUtq.js","/Users/atrujillo/at/src/components/ui/floating":"_astro/floating.CthgbcXB.js","@/components/ui/fade-up":"_astro/fade-up.DVOkLqUc.js","@/components/ui/progress-bar":"_astro/progress-bar.23XA0su6.js","@/components/ui/section":"_astro/section.DzZPOrVA.js","/Users/atrujillo/at/src/pages/projects/bhf/_components/client-brand-logos":"_astro/client-brand-logos.w0whLkFV.js","/astro/hoisted.js?q=1":"_astro/hoisted.BHIL-ZWS.js","@astrojs/react/client.js":"_astro/client.ECeix2yp.js","@/components/ui/moving-border":"_astro/moving-border.BkdfgorA.js","astro:scripts/page.js":"_astro/page.C_azkgQQ.js","/Users/atrujillo/at/src/pages/projects/bhf/_components/solution-tabs":"_astro/solution-tabs.Yi5qg8bz.js","/astro/hoisted.js?q=0":"_astro/hoisted.DR7a6WlH.js","/Users/atrujillo/at/src/components/ui/nav-mobile-button":"_astro/nav-mobile-button.C-_QhJmE.js","/Users/atrujillo/at/src/pages/_components/project/project-features":"_astro/project-features.DHEQHiK0.js","/Users/atrujillo/at/src/pages/_components/hero/canvas/sphere":"_astro/sphere.Bsj5sI46.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/client-bhf-logo.BJPfzIhv.png","/_astro/bhf-feature-matching.CutHSsS3.webp","/_astro/bhf-feature-design-system.m7TCRNcc.webp","/_astro/spr-storyboarder-dark.BuwX6fEO.png","/_astro/bhf-feature-pos.CAl5uFno.webp","/_astro/project-bhf-hero.m9Suq8hq.mp4","/_astro/project-gigstrax-hero.Dn018a0K.mp4","/_astro/design-system-showcase.BcWErlOC.mp4","/_astro/bhf-hero-original.DZD_13YX.webp","/_astro/about-at-kauai.aAOQKCkZ.webp","/_astro/project-other-projects.QHeiqdz4.mp4","/_astro/index.B6nJeko8.css","/_astro/layout.CyNKeQTh.css","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/bump.jpg","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/favicon.svg","/icon.svg","/noise2.png","/site.webmanifest","/_astro/VisualElement.BN1asjjl.js","/_astro/client-brand-logos.w0whLkFV.js","/_astro/client.Dv8xD9ZA.js","/_astro/client.ECeix2yp.js","/_astro/cn.BR_JCrAi.js","/_astro/extends.CF3RwP-h.js","/_astro/fade-up.DVOkLqUc.js","/_astro/floating.CthgbcXB.js","/_astro/hoisted.BHIL-ZWS.js","/_astro/hoisted.DR7a6WlH.js","/_astro/index.DDEQXXIH.js","/_astro/index.DNi1g-pO.js","/_astro/jsx-runtime.B6N9iRLn.js","/_astro/motion.BzpC3qKE.js","/_astro/motion.D17IJGZJ.js","/_astro/moving-border.BkdfgorA.js","/_astro/nav-mobile-button.C-_QhJmE.js","/_astro/page.C_azkgQQ.js","/_astro/progress-bar.23XA0su6.js","/_astro/project-features.DHEQHiK0.js","/_astro/resolve-element.BwSRoGbS.js","/_astro/section.DzZPOrVA.js","/_astro/solution-tabs.Yi5qg8bz.js","/_astro/sphere.Bsj5sI46.js","/_astro/swapper.fdd-WUtq.js","/_astro/use-motion-value.1rmzX7_x.js","/_astro/use-scroll.DvrfB-n1.js","/_astro/use-transform.CzdzUEUf.js","/cube/nx.png","/cube/ny.png","/cube/nz.png","/cube/px.png","/cube/py.png","/cube/pz.png","/fonts/AvertaBold.woff2","/fonts/AvertaRegular.woff2","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff","/fonts/averta-regular.woff2","/fonts/gotham-bold-italic.woff2","/fonts/gotham-bold.woff2","/fonts/gotham-book-italic.woff2","/fonts/gotham-book.woff2","/fonts/gotham-medium-italic.woff2","/fonts/gotham-medium.woff2","/fonts/ipa-gothic.woff2","/_astro/page.C_azkgQQ.js","/index.html"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
