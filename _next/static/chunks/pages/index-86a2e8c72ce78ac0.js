(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1233:function(A,e,t){"use strict";t.d(e,{Z:function(){return b}});var s=t(3366),i=t(7462),r=t(7294),n=t(6010),a=t(9766),o=t(4780),l=t(4867),c=t(3264),h=t(9628),g=t(9707),d=t(6500),x=t(5408),E=t(8700),z=t(5893);let O=["component","direction","spacing","divider","children","className"],u=(0,d.Z)(),D=(0,c.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(A,e)=>e.root});function j(A){return(0,h.Z)({props:A,name:"MuiStack",defaultTheme:u})}let w=A=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[A],f=({ownerState:A,theme:e})=>{let t=(0,i.Z)({display:"flex",flexDirection:"column"},(0,x.k9)({theme:e},(0,x.P$)({values:A.direction,breakpoints:e.breakpoints.values}),A=>({flexDirection:A})));if(A.spacing){let s=(0,E.hB)(e),i=Object.keys(e.breakpoints.values).reduce((e,t)=>(("object"==typeof A.spacing&&null!=A.spacing[t]||"object"==typeof A.direction&&null!=A.direction[t])&&(e[t]=!0),e),{}),r=(0,x.P$)({values:A.direction,base:i}),n=(0,x.P$)({values:A.spacing,base:i});"object"==typeof r&&Object.keys(r).forEach((A,e,t)=>{let s=r[A];if(!s){let s=e>0?r[t[e-1]]:"column";r[A]=s}});let o=(e,t)=>({"& > :not(style) + :not(style)":{margin:0,[`margin${w(t?r[t]:A.direction)}`]:(0,E.NA)(s,e)}});t=(0,a.Z)(t,(0,x.k9)({theme:e},n,o))}return(0,x.dt)(e.breakpoints,t)};var B=t(948),Q=t(1657);let m=function(A={}){let{createStyledComponent:e=D,useThemeProps:t=j,componentName:a="MuiStack"}=A,c=()=>(0,o.Z)({root:["root"]},A=>(0,l.Z)(a,A),{}),h=e(f),d=r.forwardRef(function(A,e){let a=t(A),o=(0,g.Z)(a),{component:l="div",direction:d="column",spacing:x=0,divider:E,children:u,className:D}=o,j=(0,s.Z)(o,O),w=c();return(0,z.jsx)(h,(0,i.Z)({as:l,ownerState:{direction:d,spacing:x},ref:e,className:(0,n.Z)(w.root,D)},j,{children:E?function(A,e){let t=r.Children.toArray(A).filter(Boolean);return t.reduce((A,s,i)=>(A.push(s),i<t.length-1&&A.push(r.cloneElement(e,{key:`separator-${i}`})),A),[])}(u,E):u}))});return d}({createStyledComponent:(0,B.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:(A,e)=>e.root}),useThemeProps:A=>(0,Q.Z)({props:A,name:"MuiStack"})});var b=m},5557:function(A,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1864)}])},8538:function(A,e,t){"use strict";t.d(e,{Z:function(){return n}});var s=t(5893),i={src:"/_next/static/media/logo.7b36faa9.png",height:666,width:666,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEX///9ubm4BAQFzc3MZGRkQEBC2trZqamqVlZU7OzsQVShTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nDWKQQ7AMAyDsJ002/8/PK1qOSEBdrF5XkuzgLjbAaahBOhKXLXTUqJ/PnwU9QCB5ugbmwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8};let r=A=>{let{...e}=A;return(0,s.jsx)("img",{src:i.src,...e})};var n=r},5365:function(A,e,t){"use strict";t.d(e,{Z:function(){return m}});var s=t(5893),i=t(7294),r=t(5582),n=t(9008),a=t.n(n),o={src:"/_next/static/media/favicon.908b5de3.ico",height:64,width:64,blurWidth:0,blurHeight:0};let l=()=>(0,s.jsxs)(a(),{children:[(0,s.jsx)("link",{rel:"icon",href:o.src}),(0,s.jsx)("title",{children:"SOLID SIGN"})]});var c=t(2293),h=t(155),g=t(5861),d=t(3321),x=t(7357),E=t(3946),z=t(326),O=t(3181),u=t(8462),D=t(7212),j=t(9953),w=t(8619),f=t(8538);let B=[{label:"СОБЫТИЯ",href:"/"},{label:"АРТИСТЫ",href:"/artists"}];var Q=()=>{let[A,e]=i.useState(!1),t=t=>{("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&e(!A)};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c.Z,{component:"nav",sx:{borderBottom:1,borderColor:"#333"},children:(0,s.jsx)(r.Z,{maxWidth:"lg",children:(0,s.jsxs)(h.Z,{disableGutters:!0,children:[(0,s.jsx)("a",{href:"/",children:(0,s.jsx)(f.Z,{height:"24"})}),(0,s.jsx)(g.Z,{className:"solid-sign",noWrap:!0,component:"a",href:"/",color:"white",sx:{pl:1,flexGrow:1,textDecoration:"none"},children:"SOLID SIGN"}),(0,s.jsx)(x.Z,{sx:{display:{xs:"none",sm:"block"}},children:B.map(A=>(0,s.jsx)(d.Z,{href:A.href,sx:{color:"#fff"},children:A.label},A.label))}),(0,s.jsx)(x.Z,{sx:{display:{xs:"flex",sm:"none"}},children:(0,s.jsx)(E.Z,{onClick:t,children:(0,s.jsx)(z.Z,{sx:{color:"#fff"}})})})]})})}),(0,s.jsx)(O.ZP,{anchor:"right",open:A,onClose:t,children:(0,s.jsx)(x.Z,{sx:{width:200},children:(0,s.jsx)(u.Z,{children:B.map(A=>(0,s.jsx)(D.ZP,{disablePadding:!0,children:(0,s.jsx)(w.Z,{component:"a",href:A.href,children:(0,s.jsx)(j.Z,{primary:A.label})})},A.label))})})})]})},m=A=>{let{children:e,maxWidth:t}=A;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l,{}),(0,s.jsx)(Q,{}),(0,s.jsx)(r.Z,{maxWidth:t||"sm",sx:{pt:10},children:e})]})}},1864:function(A,e,t){"use strict";t.r(e),t.d(e,{default:function(){return u}});var s=t(5893),i=t(1233),r=t(5365);t(7294);var n=t(7357),a=t(3321),o=t(5861);let l=A=>new Date(A.getFullYear(),A.getMonth(),A.getDate()),c=(A,e)=>l(A)>l(e),h=A=>"".concat(A.getDate().toString().padStart(2,"0"),".").concat((A.getMonth()+1).toString().padStart(2,"0"),".").concat(A.getFullYear());var g=A=>{let{date:e,img:t,href:r,...l}=A,g=!c(new Date,e);return(0,s.jsxs)(n.Z,{children:[(0,s.jsx)(o.Z,{color:"white",children:h(e)}),(0,s.jsx)(o.Z,{color:"gray",children:g?"Следующее мероприятие":"Мероприятие состоялось"}),(0,s.jsx)(i.Z,{alignItems:"center",sx:{pt:2},children:(0,s.jsx)("img",{style:{maxWidth:"100%",...l},src:t.src})}),g&&r&&(0,s.jsx)(i.Z,{orient:"row",alignItems:"center",sx:{pt:2},children:(0,s.jsx)(a.Z,{variant:"contained",component:"a",target:"_blank",href:r,sx:{width:200},color:"button",children:"Купить билет"})})]})},d={src:"/_next/static/media/solid-sign-5.8fd6aeb6.jpg",height:1600,width:1146,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAYDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAcEAACAgIDAAAAAAAAAAAAAAAAAQIDERIEQWH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBf/EABcRAQEBAQAAAAAAAAAAAAAAAAEAAiH/2gAMAwEAAhEDEQA/AJuymMqWqeVDC02TXeH4ACQaTkd//9k=",blurWidth:6,blurHeight:8},x={src:"/_next/static/media/solid-sign-4.3aa6be00.jpg",height:788,width:788,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAcEAACAwADAQAAAAAAAAAAAAABAgADEQQFBtH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AoOI3nesYNx77ema12rZbbDWzqpwHM0gkHD9iIgf/2Q==",blurWidth:8,blurHeight:8},E={src:"/_next/static/media/solid-sign-3.c1aa9ab9.jpg",height:1182,width:1182,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAdEAABBAMBAQAAAAAAAAAAAAACAAEDBAUhMRES/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AJWXnxUNISo2o8vOWiCtA8YgDcd2+d+8REQf/9k=",blurWidth:8,blurHeight:8},z={src:"/_next/static/media/solid-sign-2.38aff7ff.jpg",height:1180,width:1180,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAX/xAAcEAACAgIDAAAAAAAAAAAAAAABAgAEAxEGEjH/xAAUAQEAAAAAAAAAAAAAAAAAAAAD/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQAREv/aAAwDAQACEQMRAD8AjNy5Ll00cWJ2UMzt1fRGj5ERBXLRFDRbP//Z",blurWidth:8,blurHeight:8},O={src:"/_next/static/media/solid-sign-1.0bef310c.jpg",height:1235,width:1280,blurDataURL:"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAL/xAAfEAABAwQDAQAAAAAAAAAAAAACAAMRAQQFIRIxYcH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AjC3OWsszSrLr5ADECzogjnv7XuZ8REQf/9k=",blurWidth:8,blurHeight:8},u=()=>(0,s.jsx)(r.Z,{children:(0,s.jsxs)(i.Z,{direction:"column",justifyContent:"space-around",spacing:5,children:[(0,s.jsx)(g,{date:new Date("2023-06-30"),img:d,href:"https://nabchelny.qtickets.events/75912-solid-sign-special-2"}),(0,s.jsx)(g,{date:new Date("2023-05-26"),img:x}),(0,s.jsx)(g,{date:new Date("2023-04-28"),img:E,objectPosition:"-1px -1px"}),(0,s.jsx)(g,{date:new Date("2022-09-16"),img:z}),(0,s.jsx)(g,{date:new Date("2022-02-11"),img:O})]})})}},function(A){A.O(0,[673,631,774,888,179],function(){return A(A.s=5557)}),_N_E=A.O()}]);