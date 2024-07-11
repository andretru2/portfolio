import{j as r}from"./jsx-runtime.B6N9iRLn.js";import{r as f}from"./index.DNi1g-pO.js";import{c as g}from"./cn.tCEEUih2.js";import{u as j}from"./use-motion-value.21hFmx8X.js";import{M as b,i as h,f as y,b as N,e as S,g as E}from"./VisualElement.CxbBZmL_.js";import{r as I}from"./resolve-element.BwSRoGbS.js";import{m as v}from"./motion.BmONR6My.js";function V(t,s={}){const{isStatic:a}=f.useContext(b),n=f.useRef(null),e=j(h(t)?t.get():t),o=f.useRef(e.get()),c=f.useRef(()=>{}),m=()=>{const i=n.current;i&&i.time===0&&i.sample(S.delta),u(),n.current=E({keyframes:[e.get(),o.current],velocity:e.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...s,onUpdate:c.current})},u=()=>{n.current&&n.current.stop()};return f.useInsertionEffect(()=>e.attach((i,l)=>a?l(i):(o.current=i,c.current=l,y.update(m),e.get()),u),[JSON.stringify(s)]),N(()=>{if(h(t))return t.on("change",i=>e.set(parseFloat(i)))},[e]),e}const C={some:0,all:1};function M(t,s,{root:a,margin:n,amount:e="some"}={}){const o=I(t),c=new WeakMap,m=i=>{i.forEach(l=>{const p=c.get(l.target);if(l.isIntersecting!==!!p)if(l.isIntersecting){const d=s(l);typeof d=="function"?c.set(l.target,d):u.unobserve(l.target)}else p&&(p(l),c.delete(l.target))})},u=new IntersectionObserver(m,{root:a,rootMargin:n,threshold:typeof e=="number"?e:C[e]});return o.forEach(i=>u.observe(i)),()=>u.disconnect()}function T(t,{root:s,margin:a,amount:n,once:e=!1}={}){const[o,c]=f.useState(!1);return f.useEffect(()=>{if(!t.current||e&&o)return;const m=()=>(c(!0),e?void 0:()=>c(!1)),u={root:s&&s.current||void 0,margin:a,amount:n};return M(t.current,m,u)},[s,t,a,e,n]),o}function k({value:t,direction:s="up",as:a="span",className:n,includePercentageSymbol:e=!1}){const o=f.useRef(null),c=j(s==="down"?t:0),m=V(c,{damping:50,stiffness:100}),u=T(o,{once:!0,margin:"-100px"});return f.useEffect(()=>{u&&c.set(s==="down"?0:t)},[c,u]),f.useEffect(()=>m.on("change",i=>{if(o.current){let l=Intl.NumberFormat("en-US").format(i.toFixed(0));e&&(l+="%"),o.current.textContent=l}}),[m]),r.jsx("span",{className:n,ref:o})}function A({label:t,value:s,includePercentageSymbol:a}){return r.jsxs("div",{className:"flex flex-col gap-xs items-center",children:[typeof s=="number"?r.jsx(k,{value:s,className:"fluid:text-4xl font-bold text-accent",includePercentageSymbol:a}):r.jsx("h5",{className:"text-accent",children:s}),r.jsx("span",{className:"text-s font-light opacity-80",children:t})]})}function H({tabs:t,containerClassName:s,activeTabClassName:a,tabClassName:n,contentClassName:e}){const[o,c]=f.useState(t[0]),[m,u]=f.useState(t),i=d=>{const x=[...t],w=x.splice(d,1);x.unshift(w[0]),u(x),c(x[0])},[l,p]=f.useState(!1);return r.jsxs("div",{className:"",children:[r.jsx("div",{className:g("flex flex-row   items-center justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",s),children:t.map((d,x)=>r.jsxs("button",{onClick:()=>{i(x)},onMouseEnter:()=>p(!0),onMouseLeave:()=>p(!1),className:g("relative px-4 py-2 rounded-full",n),style:{transformStyle:"preserve-3d"},children:[o.value===d.value&&r.jsx(v.div,{layoutId:"clickedbutton",transition:{type:"spring",bounce:.3,duration:.6},className:g("absolute inset-0 bg-[#9DF2D5] rounded-xl ",a)}),r.jsx("span",{className:"relative block text-bgColor ",children:d.title})]},d.title))}),r.jsx(D,{tabs:m,active:o,hovering:l,className:g("mt-3xl",e)},o.value)]})}function D({className:t,tabs:s}){const a=n=>n.value===s[0].value;return r.jsx("div",{className:"relative w-full    ",children:s.map((n,e)=>r.jsx(v.div,{layoutId:n.value,style:{scale:1-e*.1,top:e*-70,zIndex:-e,opacity:e<3?1-e*.3:0},animate:{y:a(n)?[0,40,0]:0},className:g("min-h-max min-w-[50svw] absolute inset-0 bg-bgColor   rounded-[3rem]  ",t),children:r.jsx(F,{header:n.content?.header??"",description:n.content?.description,stats:n.content?.stats,image:n.content?.image})},n.value))})}function F({header:t,description:s,stats:a,image:n}){return r.jsxs("div",{className:" p-2xl flex gap-l flex-col items-center    min-w-0 h-full rounded-xl ",children:[r.jsx("h5",{children:t}),r.jsx("p",{className:"prose-p w-screen h-max ",children:s}),r.jsx("div",{className:"flex flex-row gap-2xl items-center align-middle justify-start w-full  z-10 max-w-2xl mt-xl",children:a&&a.map((e,o)=>r.jsx(A,{value:e.value,label:e.label,includePercentageSymbol:e.includePercentageSymbol},o))}),n&&r.jsx(v.img,{initial:{y:-10,rotate:-2},animate:{y:0,rotate:0,transition:{type:"spring",damping:50,stiffness:100,bounce:10}},src:n,alt:t,className:"mt-xl aspect-video   rounded-xl object-cover object-left-top h-[60%]  md:h-[90%]  w-[90%]",loading:"lazy",decoding:"async",width:"1000",height:"1000"})]})}export{H as Tabs};