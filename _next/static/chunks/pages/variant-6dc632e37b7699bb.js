(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[427],{5450:function(t,e,o){"use strict";o.d(e,{Z:function(){return Z}});var r=o(3366),n=o(7462),i=o(4780),a=o(6010),s=o(7294),l=o(948),c=o(1657),A=o(1588),u=o(4867);function m(t){return(0,u.Z)("MuiImageList",t)}(0,A.Z)("MuiImageList",["root","masonry","quilted","standard","woven"]);var d=o(2917),g=o(5893);let f=["children","className","cols","component","rowHeight","gap","style","variant"],p=t=>{let{classes:e,variant:o}=t;return(0,i.Z)({root:["root",o]},m,e)},h=(0,l.ZP)("ul",{name:"MuiImageList",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:o}=t;return[e.root,e[o.variant]]}})(({ownerState:t})=>(0,n.Z)({display:"grid",overflowY:"auto",listStyle:"none",padding:0,WebkitOverflowScrolling:"touch"},"masonry"===t.variant&&{display:"block"})),v=s.forwardRef(function(t,e){let o=(0,c.Z)({props:t,name:"MuiImageList"}),{children:i,className:l,cols:A=2,component:u="ul",rowHeight:m="auto",gap:v=4,style:Z,variant:b="standard"}=o,w=(0,r.Z)(o,f),y=s.useMemo(()=>({rowHeight:m,gap:v,variant:b}),[m,v,b]);s.useEffect(()=>{},[]);let S="masonry"===b?(0,n.Z)({columnCount:A,columnGap:v},Z):(0,n.Z)({gridTemplateColumns:`repeat(${A}, 1fr)`,gap:v},Z),x=(0,n.Z)({},o,{component:u,gap:v,rowHeight:m,variant:b}),E=p(x);return(0,g.jsx)(h,(0,n.Z)({as:u,className:(0,a.Z)(E.root,E[b],l),ref:e,style:S,ownerState:x},w,{children:(0,g.jsx)(d.Z.Provider,{value:y,children:i})}))});var Z=v},2917:function(t,e,o){"use strict";var r=o(7294);let n=r.createContext({});e.Z=n},9007:function(t,e,o){"use strict";o.d(e,{Z:function(){return w}});var r=o(3366),n=o(7462),i=o(4780),a=o(6010),s=o(7294);o(9864);var l=o(2917),c=o(948),A=o(1657),u=o(1579),m=o(1588),d=o(4867);function g(t){return(0,d.Z)("MuiImageListItem",t)}let f=(0,m.Z)("MuiImageListItem",["root","img","standard","woven","masonry","quilted"]);var p=o(5893);let h=["children","className","cols","component","rows","style"],v=t=>{let{classes:e,variant:o}=t;return(0,i.Z)({root:["root",o],img:["img"]},g,e)},Z=(0,c.ZP)("li",{name:"MuiImageListItem",slot:"Root",overridesResolver:(t,e)=>{let{ownerState:o}=t;return[{[`& .${f.img}`]:e.img},e.root,e[o.variant]]}})(({ownerState:t})=>(0,n.Z)({display:"block",position:"relative"},"standard"===t.variant&&{display:"flex",flexDirection:"column"},"woven"===t.variant&&{height:"100%",alignSelf:"center","&:nth-of-type(even)":{height:"70%"}},{[`& .${f.img}`]:(0,n.Z)({objectFit:"cover",width:"100%",height:"100%",display:"block"},"standard"===t.variant&&{height:"auto",flexGrow:1})})),b=s.forwardRef(function(t,e){let o=(0,A.Z)({props:t,name:"MuiImageListItem"}),{children:i,className:c,cols:m=1,component:d="li",rows:g=1,style:f}=o,b=(0,r.Z)(o,h),{rowHeight:w="auto",gap:y,variant:S}=s.useContext(l.Z),x="auto";"woven"===S?x=void 0:"auto"!==w&&(x=w*g+y*(g-1));let E=(0,n.Z)({},o,{cols:m,component:d,gap:y,rowHeight:w,rows:g,variant:S}),j=v(E);return(0,p.jsx)(Z,(0,n.Z)({as:d,className:(0,a.Z)(j.root,j[S],c),ref:e,style:(0,n.Z)({height:x,gridColumnEnd:"masonry"!==S?`span ${m}`:void 0,gridRowEnd:"masonry"!==S?`span ${g}`:void 0,marginBottom:"masonry"===S?y:void 0},f),ownerState:E},b,{children:s.Children.map(i,t=>s.isValidElement(t)?"img"===t.type||(0,u.Z)(t,["Image"])?s.cloneElement(t,{className:(0,a.Z)(j.img,t.props.className)}):t:null)}))});var w=b},1233:function(t,e,o){"use strict";o.d(e,{Z:function(){return j}});var r=o(3366),n=o(7462),i=o(7294),a=o(6010),s=o(9766),l=o(4780),c=o(4867),A=o(3264),u=o(9628),m=o(9707),d=o(6500),g=o(5408),f=o(8700),p=o(5893);let h=["component","direction","spacing","divider","children","className"],v=(0,d.Z)(),Z=(0,A.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root});function b(t){return(0,u.Z)({props:t,name:"MuiStack",defaultTheme:v})}let w=t=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[t],y=({ownerState:t,theme:e})=>{let o=(0,n.Z)({display:"flex",flexDirection:"column"},(0,g.k9)({theme:e},(0,g.P$)({values:t.direction,breakpoints:e.breakpoints.values}),t=>({flexDirection:t})));if(t.spacing){let r=(0,f.hB)(e),n=Object.keys(e.breakpoints.values).reduce((e,o)=>(("object"==typeof t.spacing&&null!=t.spacing[o]||"object"==typeof t.direction&&null!=t.direction[o])&&(e[o]=!0),e),{}),i=(0,g.P$)({values:t.direction,base:n}),a=(0,g.P$)({values:t.spacing,base:n});"object"==typeof i&&Object.keys(i).forEach((t,e,o)=>{let r=i[t];if(!r){let r=e>0?i[o[e-1]]:"column";i[t]=r}});let l=(e,o)=>({"& > :not(style) + :not(style)":{margin:0,[`margin${w(o?i[o]:t.direction)}`]:(0,f.NA)(r,e)}});o=(0,s.Z)(o,(0,g.k9)({theme:e},a,l))}return(0,g.dt)(e.breakpoints,o)};var S=o(948),x=o(1657);let E=function(t={}){let{createStyledComponent:e=Z,useThemeProps:o=b,componentName:s="MuiStack"}=t,A=()=>(0,l.Z)({root:["root"]},t=>(0,c.Z)(s,t),{}),u=e(y),d=i.forwardRef(function(t,e){let s=o(t),l=(0,m.Z)(s),{component:c="div",direction:d="column",spacing:g=0,divider:f,children:v,className:Z}=l,b=(0,r.Z)(l,h),w=A();return(0,p.jsx)(u,(0,n.Z)({as:c,ownerState:{direction:d,spacing:g},ref:e,className:(0,a.Z)(w.root,Z)},b,{children:f?function(t,e){let o=i.Children.toArray(t).filter(Boolean);return o.reduce((t,r,n)=>(t.push(r),n<o.length-1&&t.push(i.cloneElement(e,{key:`separator-${n}`})),t),[])}(v,f):v}))});return d}({createStyledComponent:(0,S.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(t,e)=>e.root}),useThemeProps:t=>(0,x.Z)({props:t,name:"MuiStack"})});var j=E},6429:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/variant",function(){return o(1726)}])},9901:function(t,e){"use strict";e.Z={src:"/_next/static/media/akinov.9868cd2c.jpg",height:951,width:1280,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAGAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAf/xAAfEAAABQQDAAAAAAAAAAAAAAAAAQIREgMEITEFE6H/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAAAAB/9oADAMBAAIRAxEAPwCdI5MjnaXE00+kpKosnWXjozbHoAAFSP/Z",blurWidth:8,blurHeight:6}},8538:function(t,e,o){"use strict";o.d(e,{Z:function(){return a}});var r=o(5893),n={src:"/_next/static/media/logo.7b36faa9.png",height:666,width:666,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEX///9ubm4BAQFzc3MZGRkQEBC2trZqamqVlZU7OzsQVShTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nDWKQQ7AMAyDsJ002/8/PK1qOSEBdrF5XkuzgLjbAaahBOhKXLXTUqJ/PnwU9QCB5ugbmwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8};let i=t=>{let{...e}=t;return(0,r.jsx)("img",{src:n.src,...e})};var a=i},1726:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return m}});var r=o(5893),n=o(8538),i=o(1233),a=o(7357),s=o(5450),l=o(9007),c=o(5861),A=o(9901);let u=[{img:"https://sun9-17.userapi.com/impg/uYk4c0BfSgJdPiKAtrnJR_mr0lXQB2GJ9-Pc_Q/bDOHwx5ZH7c.jpg?size=1600x1067&quality=95&sign=a99ca1b94488ae409b2753285829f44d&type=album",rows:1,cols:3,title:"SOLID SIGN #2"},{img:"https://sun9-51.userapi.com/impg/vk_QQZFNg4Kn5tVGZW-6r1P2QGHUfJXfQc4Ogw/iKmuCub9NUw.jpg?size=1160x1600&quality=95&sign=b35931004680502e9e3cd6f1ea31714a&type=album",rows:3,cols:1,title:"SOLID SIGN #2"},{img:"https://sun9-52.userapi.com/impg/_0Ejx0AHbizLTuLjagD0InQ6osM5RT5aKnXhlQ/jRv5bPTQsCA.jpg?size=1067x1600&quality=95&sign=4948ab458aabdbcd3bd7978f2fc428aa&type=album",rows:3,cols:1,title:"SOLID SIGN #2"},{img:"https://sun9-34.userapi.com/impg/xK67ZEz2qRgGMZt4FmldFPZ0pMuVJcV_2a2vgA/D53-N7QLEYQ.jpg?size=1600x1067&quality=95&sign=6da709b10f16b7b0b85c35f3b71e3eae&type=album",rows:2,cols:2,title:"SOLID SIGN #2"},{img:A.Z.src,rows:1,cols:3,title:"SOLID SIGN #2"}];function m(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(i.Z,{direction:"column",justifyContent:"space-around",width:"100hw",minHeight:"100vh",alignItems:"center",children:(0,r.jsxs)(i.Z,{direction:"column",justifyContent:"space-around",spacing:4,maxWidth:500,children:[(0,r.jsxs)(i.Z,{direction:"row",justifyContent:"space-between",children:[(0,r.jsx)(a.Z,{p:2,children:(0,r.jsx)(n.Z,{height:48})}),(0,r.jsx)(c.Z,{variant:"h2",color:"white",children:"SOLID SIGN"})]}),(0,r.jsx)(s.Z,{sx:{width:500},variant:"quilted",cols:4,rowHeight:121,children:u.map(t=>(0,r.jsx)(l.Z,{cols:t.cols||1,rows:t.rows||1,children:(0,r.jsx)("img",{...function(t,e){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return{src:"".concat(t,"?w=").concat(e*r,"&h=").concat(e*o,"&fit=crop&auto=format"),srcSet:"".concat(t,"?w=").concat(e*r,"&h=").concat(e*o,"&fit=crop&auto=format&dpr=2 2x")}}(t.img,121,t.rows,t.cols),alt:t.title,loading:"lazy"})},t.img))})]})})})}},9921:function(t,e){"use strict";Symbol.for("react.element"),Symbol.for("react.portal"),Symbol.for("react.fragment"),Symbol.for("react.strict_mode"),Symbol.for("react.profiler"),Symbol.for("react.provider"),Symbol.for("react.context"),Symbol.for("react.server_context"),Symbol.for("react.forward_ref"),Symbol.for("react.suspense"),Symbol.for("react.suspense_list"),Symbol.for("react.memo"),Symbol.for("react.lazy"),Symbol.for("react.offscreen"),Symbol.for("react.module.reference")},9864:function(t,e,o){"use strict";o(9921)}},function(t){t.O(0,[673,774,888,179],function(){return t(t.s=6429)}),_N_E=t.O()}]);