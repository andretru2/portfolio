import{j as e}from"./jsx-runtime.B6N9iRLn.js";import{d as p}from"./site.DLW9OK0x.js";import{r as d}from"./index.DNi1g-pO.js";import{P as w}from"./index.BHFpgX55.js";import{c as j}from"./cn.tCEEUih2.js";import{m as f}from"./motion.BmONR6My.js";import"./index.DDEQXXIH.js";import"./VisualElement.CxbBZmL_.js";var N="Separator",m="horizontal",g=["horizontal","vertical"],h=d.forwardRef((t,r)=>{const{decorative:l,orientation:o=m,...i}=t,n=S(o)?o:m,a=l?{role:"none"}:{"aria-orientation":n==="vertical"?n:void 0,role:"separator"};return e.jsx(w.div,{"data-orientation":n,...a,...i,ref:r})});h.displayName=N;function S(t){return g.includes(t)}var x=h;const v=d.forwardRef(({className:t,orientation:r="horizontal",decorative:l=!0,...o},i)=>e.jsx(x,{ref:i,decorative:l,orientation:r,className:j("shrink-0 bg-white/20 backdrop-blur-md",r==="horizontal"?"h-[3px] w-full":"h-full w-[1px]",t),...o}));v.displayName=x.displayName;function b({features:t}){const o=p/t.length,[i,n]=d.useState(t);return d.useEffect(()=>{n(t);const s=setInterval(()=>{n(a=>{const c=[...a];return c.unshift(c.pop()),c})},o*1e3);return()=>clearInterval(s)},[t]),e.jsx("div",{className:"relative w-full h-full",children:i.map((s,a)=>e.jsx(f.div,{className:"absolute  p-m gap-4 bg-black  w-full h-full rounded-xl shadow-sm border border-white/30  shadow-white/[0.05] flex flex-col  sm:translate-y-0 ",style:{transformOrigin:"top center"},animate:{top:a*-10,scale:1-a*.06,zIndex:i.length-a},children:e.jsx(A,{section:s.section,title:s.title,description:s.description,wordsToHighlight:s.wordsToHighlight})},s.title))})}function A({title:t,description:r,wordsToHighlight:l}){return e.jsxs(f.div,{className:"flex flex-col justify-between gap-s h-max p-xs sm:p-s overflow-hidden  ",children:[e.jsx("div",{className:"flex flex-row justify-between",children:e.jsx("h6",{className:"text-base sm:fluid:text-xl",children:t})}),e.jsx(v,{}),e.jsx("p",{className:"fluid:text-base sm:fluid:text-lg ",children:r})]})}function P({features:t}){const r=["About","Features","More"],l=p,[o,i]=d.useState(0),[n,s]=d.useState(a(r[o]));d.useEffect(()=>{const c=setInterval(()=>{const u=(o+1)%r.length;s(a(r[u])),i(u)},l*1e3);return()=>clearInterval(c)},[o]);function a(c){return t.filter(u=>u.section===c)}return e.jsx(f.div,{className:"h-full w-full ",children:n&&e.jsx(b,{features:n})})}export{P as ProjectFeatures};