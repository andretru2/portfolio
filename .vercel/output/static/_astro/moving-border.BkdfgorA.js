import{j as o}from"./jsx-runtime.B6N9iRLn.js";import{r as c}from"./index.DNi1g-pO.js";import{c as f}from"./cn.BR_JCrAi.js";import{u as v}from"./use-motion-value.1rmzX7_x.js";import{i as p,M as b,f as j,c as w}from"./VisualElement.BN1asjjl.js";import{a as y,u as x}from"./use-transform.CzdzUEUf.js";import{m as M}from"./motion.D17IJGZJ.js";function N(e,...r){const a=e.length;function i(){let s="";for(let t=0;t<a;t++){s+=e[t];const n=r[t];n&&(s+=p(n)?n.get():n)}return s}return y(r.filter(p),i)}function R(e){const r=c.useRef(0),{isStatic:a}=c.useContext(b);c.useEffect(()=>{if(a)return;const i=({timestamp:s,delta:t})=>{r.current||(r.current=s),e(s-r.current,t)};return j.update(i,!0),()=>w(i)},[e])}function P({borderRadius:e="0.75rem",children:r,as:a="button",containerClassName:i,borderClassName:s,duration:t,className:n,...u}){return o.jsxs(a,{className:f("bg-transparent relative text-xl  h-12 w-max p-[1px] overflow-hidden cursor-default",i),style:{borderRadius:e},...u,children:[o.jsx("div",{className:"absolute inset-0",style:{borderRadius:`calc(${e} * 0.96)`},children:o.jsx(T,{duration:t,rx:"30%",ry:"30%",children:o.jsx("div",{className:f("h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--green-500)_40%,transparent_60%)]",s)})})}),o.jsx("div",{className:f("relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-md antialiased px-s",n),style:{borderRadius:`calc(${e} * 0.96)`},children:r})]})}const T=({children:e,duration:r=2e3,rx:a,ry:i,...s})=>{const t=c.useRef(),n=v(0);R(l=>{const m=t.current?.getTotalLength();if(m){const h=m/r;n.set(l*h%m)}});const u=x(n,l=>t.current?.getPointAtLength(l).x),d=x(n,l=>t.current?.getPointAtLength(l).y),g=N`translateX(${u}px) translateY(${d}px) translateX(-50%) translateY(-50%)`;return o.jsxs(o.Fragment,{children:[o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none",className:"absolute h-full w-full",width:"100%",height:"100%",...s,children:o.jsx("rect",{fill:"none",width:"100%",height:"100%",rx:a,ry:i,ref:t})}),o.jsx(M.div,{style:{position:"absolute",top:0,left:0,display:"inline-block",transform:g},children:e})]})};export{P as MovingBorderWrapper};