(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2904)}])},2904:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return pe}});var t=n(5893),o=n(7294),s=n(8527),i=n(1801),a=n(4651),l=n(5113),c=n(4164);function d(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){d(e,r,n[r])}))}return e}function m(e){var r=e.pages,n=e.setHome;return(0,t.jsxs)(x,{children:[(0,t.jsx)(p,{}),(0,t.jsx)(h,{pages:r,setHome:n})]})}var x=function(e){var r=e.children,n=(0,o.useState)(0),a=n[0],l=n[1];(0,o.useEffect)((function(){var e=function(){var e=document.querySelector("#hero");l(e.clientHeight)};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);var c=(0,o.useState)(0),d=c[0],u=c[1],m=(0,o.useState)("rgb(17 24 39 / 0.75)"),x=(m[0],m[1]);return window.onscroll=function(){var e=window.pageYOffset;d>e?e<=a&&x("rgb(17 24 39 / 0.75)"):e>=a&&x("rgb(209 213 219 / 0.4)"),u(e)},(0,t.jsx)(s.xu,{as:"header",children:(0,t.jsx)(i.Mi,{direction:"top",in:!0,children:(0,t.jsx)(s.kC,{bg:"gray.900",borderBottomWidth:1,backdropFilter:"blur(10px)",as:"nav",position:"relative",w:"100%",h:16,px:4,children:r})})})},h=function(e){var r=e.pages,n=e.setHome;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.kC,{display:{xs:"none",md:"flex"},w:"100%",justify:"end",align:"center",gap:1,px:6,children:r.map((function(e){return(0,t.jsx)(g,{name:e.name,isActive:e.isActive,handleClick:n},e.name)}))}),(0,t.jsx)(f,{pages:r,setHome:n,display:!0})]})},g=function(e){var r=e.isActive?"text-blue-800 border-b-4 border-blue-500":"text-gray-300 hover:text-blue-500 transition duration-300";return(0,t.jsx)(s.rU,{href:"#"+e.name,my:1,children:(0,t.jsx)("button",{onClick:function(){return e.handleClick(e.name)},className:"pb-1 px-2 font-semibold "+r,children:e.name})})},f=function(e){var r=e.pages,n=e.setHome,o=e.display;return(0,t.jsx)(c.v,{children:(0,t.jsxs)(s.kC,{w:"100%",display:{xs:"flex",md:"none"},justify:"end",align:"center",children:[(0,t.jsx)(c.v.Button,{children:(0,t.jsx)(b,{})}),(0,t.jsx)(c.v.Items,{children:(0,t.jsx)(i.Mi,{direction:"top",in:o,unmountOnExit:!0,children:(0,t.jsx)(s.Kq,{position:"absolute",top:16,right:5,bg:"gray.600",p:6,shadow:"2xl",rounded:"lg",children:r.map((function(e){return(0,t.jsx)(j,{name:e.name,isActive:e.isActive,handleClick:n},e.name)}))})})})]})})},p=function(){return(0,t.jsx)(s.rU,{minW:"40%",children:(0,t.jsxs)(s.kC,{align:"center",justify:"start",gap:2,px:6,mr:"auto",as:"div",children:[(0,t.jsx)(a.Ee,{mt:"0.7rem",src:"PC.svg",width:12,height:12,alt:"Logo"}),(0,t.jsxs)(s.kC,{display:{xs:"none",lg:"flex"},fontWeight:"semibold",fontSize:"1.7rem",children:[(0,t.jsx)(s.xv,{color:"bblue",children:"Computer"}),"\xa0",(0,t.jsx)(s.xv,{color:"rred",children:"Paradise"})]})]})})},j=function(e){var r=e.isActive,n=e.name,o=e.handleClick,i=r?{color:"gray.800",bg:"blue.500",fontWeight:"semibold"}:{color:"blue.500",bg:"transparant"};return(0,t.jsx)(c.v.Item,{children:(0,t.jsx)(s.rU,{href:"#"+n,p:0,my:1,children:(0,t.jsx)(l.zx,u({as:"button",onClick:function(){return o(n)},w:"100%",rounded:"lg",size:"sm",px:4,py:7,_hover:{bg:"bblue",color:"gray.200",opacity:"100%"}},i,{className:"transition duration-300",children:n}))})})},b=function(){return(0,t.jsx)("svg",{className:"w-8 h-8 text-blue-500","x-show":"!showMenu",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,t.jsx)("path",{d:"M4 6h16M4 12h14M4 18h16"})})};function v(e){var r=e.pages,n=e.setHome;return(0,t.jsxs)(s.xu,{id:"footer",bg:"gray.900",color:"gray.200",position:"absolute",bottom:0,right:0,left:0,w:"100%",children:[(0,t.jsx)(s.W2,{as:s.kC,flexWrap:"wrap",flexDir:"row",justify:"center",pt:5,children:r.map((function(e){return(0,t.jsx)(w,{name:e.name,handleClick:n},e.name)}))}),(0,t.jsxs)(s.xu,{pb:5,children:[(0,t.jsx)(s.kC,{align:"center",_before:{content:'""',borderBottom:"1px solid",borderColor:"gray.700",flexGrow:1,mr:8},_after:{content:'""',borderBottom:"1px solid",borderColor:"gray.700",flexGrow:1,ml:8},children:(0,t.jsx)(y,{})}),(0,t.jsx)(s.xv,{pt:4,fontSize:"sm",textAlign:"center",children:"Computer Paradise \xae 2005"})]})]})}var y=function(e){return(0,t.jsx)(a.Ee,{src:"PC.svg",width:12,height:12,alt:"Logo"})},w=function(e){var r=e.name,n=e.handleClick;return(0,t.jsx)(s.rU,{p:0,href:"#"+r,_hover:{textDecoration:"none"},children:(0,t.jsxs)(l.zx,{onClick:function(){return n(r)},fontWeight:"500",fontSize:"md",bg:"transparent",p:0,_hover:{bg:"transparent",textDecoration:"none"},children:[r,"\xa0","Contact"!==r&&"/","\xa0"]})})},k=n(3801);function C(e){return(0,t.jsx)(s.xu,{as:"section",id:"Home",children:(0,t.jsx)("div",{className:"bg-gray-900",children:(0,t.jsx)(S,{handleClick:e.setHome})})})}function S(e){var r=e.handleClick;return(0,t.jsxs)(s.W2,{maxW:"7xl",minH:"calc(100vh - 4rem)",id:"hero",children:[(0,t.jsx)(s.xu,{bg:"gray.900",className:"absolute -z h-20 w-screen -top-20 right-0"}),(0,t.jsxs)(s.Kq,{position:"relative",align:"center",spacing:{xs:8,lg:10},pb:{xs:20,lg:28},pt:10,direction:{xs:"column",lg:"row"},children:[(0,t.jsxs)(s.Kq,{flex:1,spacing:{xs:5,lg:10},children:[(0,t.jsxs)(s.X6,{lineHeight:1.1,fontWeight:600,fontSize:{xs:"4xl",base:"3xl",lg:"6xl"},children:[(0,t.jsx)(s.xv,{as:"span",color:"rred",children:"We just not sell,"}),(0,t.jsx)("br",{}),(0,t.jsx)(s.xv,{as:"span",position:"relative",children:"we develop relations"})]}),(0,t.jsxs)(s.Kq,{spacing:{xs:6,base:4},direction:{xs:"column",md:"row"},children:[(0,t.jsx)(s.rU,{p:0,w:"100%",href:"#Contact",children:(0,t.jsx)(l.zx,{rounded:"full",w:"100%",size:"lg",fontWeight:"normal",onClick:function(){return r("Contact")},px:6,colorScheme:"red",bg:"rred",_hover:{bg:"red.500"},children:"Contact us"})}),(0,t.jsx)(s.rU,{p:0,w:"100%",href:"#Products",children:(0,t.jsx)(l.zx,{rounded:"full",w:"100%",size:"lg",fontWeight:"normal",onClick:function(){return r("Products")},px:6,bg:"gray.700",_hover:{bg:"gray.800"},children:"Catalogue"})}),(0,t.jsx)("div",{className:"my-1/2 absolute bottom-2 right-0 w-full flex items-center justify-center",children:(0,t.jsx)(k.v4q,{className:"w-8 flex items-center justify-center"})})]})]}),(0,t.jsx)(s.kC,{flex:1,justify:"center",align:"center",position:"relative",w:"full",children:(0,t.jsx)(s.kC,{position:"relative",width:"full",justify:"center",children:(0,t.jsx)(a.Ee,{alt:"Hero Image",maxW:"xl",fit:"cover",align:"center",w:"100%",h:"100%",src:"https://images01.nicepage.com/c461c07a441a5d220e8feb1a/1cc3ed7cfea351718e7bec74/xcc-min.png"})})})]})]})}var O=n(2684);var z=function(){return(0,t.jsx)("svg",{className:"w-6 h-6",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{fillRule:"evenodd",d:"M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z",clipRule:"evenodd"})})},N=function(){return(0,t.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"})})},W=function(){return(0,t.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"})})},H=function(){return(0,t.jsx)("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"})})},D=n(7516),I=n(6066);function E(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function P(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){E(e,r,n[r])}))}return e}function M(){var e=(0,o.useState)({dots:!1,focusOnSelect:!0,centerMode:!0,arrows:!0,fade:!1,infinite:!0,autoplay:!0,speed:500,autoplaySpeed:5e3,swipeToSlide:!0,centerPadding:(0,O.Sx)({xs:"50px",sm:"60px",base:"80px",md:"100px",lg:"300px"})}),r=e[0],n=(e[1],(0,o.useState)(null)),s=n[0],i=n[1];return(0,t.jsxs)(B,{children:[(0,t.jsx)(_,{}),(0,t.jsx)(T,{slider:s}),(0,t.jsx)(I.Z,P({},r,{className:"relative max-h-[calc(100vh-7rem)]",ref:function(e){return i(e)},children:[{title:"Design Projects 1",text:"The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",image:"https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"},{title:"Design Projects 2",text:"The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",image:"https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80"},{title:"Design Projects 3",text:"The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",image:"https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"}].map((function(e,r){return(0,t.jsx)(A,{card:e,index:r},e)}))}))]})}var B=function(e){var r=e.children;return(0,t.jsxs)(s.xu,{id:"Recognition",as:"section",position:"relative",minH:"screen",width:"full",overflow:"hidden",children:[(0,t.jsx)("link",{rel:"stylesheet",type:"text/css",charSet:"UTF-8",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"}),(0,t.jsx)("link",{rel:"stylesheet",type:"text/css",href:"https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"}),r]})},A=function(e){var r=e.index,n=e.card;return(0,t.jsx)(s.xu,{maxH:"95vh",position:"relative",mx:"2rem",borderRadius:"3rem",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",backgroundImage:"url(".concat(n.image,")"),children:(0,t.jsx)(s.W2,{size:"container.lg",height:"600px",position:"relative",children:(0,t.jsxs)(s.Kq,{spacing:6,w:"full",maxW:"lg",position:"absolute",top:"50%",transform:"translate(0, -50%)",children:[(0,t.jsx)(s.X6,{fontSize:{base:"3xl",md:"4xl",lg:"5xl"},children:n.title}),(0,t.jsx)(s.xv,{fontSize:{base:"md",lg:"lg"},color:"GrayText",children:n.text})]})})},r)},T=function(e){var r=e.slider;return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.hU,{"aria-label":"left-arrow",variant:"ghost",position:"absolute",left:10,top:"50%",transform:"translate(0%, -50%)",zIndex:2,onClick:function(){return null===r||void 0===r?void 0:r.slickPrev()},children:(0,t.jsx)(D.u_m,{size:"40px"})}),(0,t.jsx)(l.hU,{"aria-label":"right-arrow",variant:"ghost",position:"absolute",right:10,top:"50%",transform:"translate(0%, -50%)",zIndex:2,onClick:function(){return null===r||void 0===r?void 0:r.slickNext()},children:(0,t.jsx)(D.OEZ,{size:"40px"})})]})},_=function(){return(0,t.jsx)(s.kC,{flexDir:"column",gap:3,align:"center",py:3,color:"white",mx:2,children:(0,t.jsx)(s.X6,{as:"h2",pt:"2rem",mx:4,my:6,h:"100%",fontSize:{xs:"xl",md:"2xl"},fontWeight:"bold",color:"gray.900",maxW:"min",children:"RECOGNITION"})})},F=n(4051),q=n.n(F),L=n(9196),X=n(8346),R=n(6257);(0,n(5503).ZF)({apiKey:"AIzaSyBUs18K1qBjTZAQXe3QzptCxZgYtIzUHfo",authDomain:"computer-paradise-1f198.firebaseapp.com",projectId:"computer-paradise-1f198",storageBucket:"computer-paradise-1f198.appspot.com",messagingSenderId:"689797045979",appId:"1:689797045979:web:b1209cd6f406208ce1f6fe",measurementId:"G-FC00C97D2N"});var U=(0,R.ad)(),Z=n(9762),G=n(4612),V=n(3441);function K(e,r,n,t,o,s,i){try{var a=e[s](i),l=a.value}catch(c){return void n(c)}a.done?r(l):Promise.resolve(l).then(t,o)}function J(e){return function(){var r=this,n=arguments;return new Promise((function(t,o){var s=e.apply(r,n);function i(e){K(s,t,o,i,a,"next",e)}function a(e){K(s,t,o,i,a,"throw",e)}i(void 0)}))}}function Y(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function Q(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){Y(e,r,n[r])}))}return e}function $(e){return(0,t.jsxs)(s.kC,{borderTop:"whitesmoke",mt:2,as:"section",id:"Contact",flexDir:"column",w:"100%",justify:"end",children:[(0,t.jsx)(ee,{}),(0,t.jsx)(re,{props:e})]})}function ee(){return(0,t.jsxs)(s.kC,{flexDir:"column",gap:3,align:"center",py:3,color:"white",mx:2,children:[(0,t.jsx)(s.X6,{as:"h2",mx:4,my:6,h:"100%",fontSize:{xs:"xl",md:"2xl"},fontWeight:"bold",color:"gray.900",maxW:"min",children:"CONTACT"}),(0,t.jsx)(s.xv,{fontSize:{xs:"0.8rem",sm:"1.6rem",base:"2.4rem",lg:"4rem"},fontWeight:"medium",textAlign:"center",children:"Reach out for support or just say hello"})]})}function re(e){return(0,t.jsx)(s.xu,{mx:"auto",maxW:"90vw",children:(0,t.jsxs)(s.kC,{flexDir:{xs:"column",lg:"row"},px:"1.5rem",pt:{xs:"0.5rem",lg:"2.5rem"},pb:{xs:"0.5rem",lg:"2rem"},shadow:"xl",borderWidth:2,borderColor:"gray.900",rounded:"3xl",bg:"gray.800",maxW:"100vw",w:"100%",mx:"auto",gap:"1rem",className:"lg:divide-x lg:divide-y-0 divide-gray-300 lg:pt-8 xs:divide-y xs:divide-x-0",children:[(0,t.jsx)(te,{props:e}),(0,t.jsx)(oe,{})]})})}function ne(e){var r=e.closeModal,n=e.isOpen,s=e.isError;return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(L.u,{appear:!0,show:n,as:o.Fragment,children:(0,t.jsx)(X.V,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:r,children:(0,t.jsxs)("div",{className:"min-h-screen backdrop-blur-md px-4 text-center",children:[(0,t.jsx)(L.u.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,t.jsx)(X.V.Overlay,{className:"fixed inset-0"})}),(0,t.jsx)("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),(0,t.jsx)(L.u.Child,{as:o.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:(0,t.jsxs)("div",{className:"inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-gray-900 shadow-xl rounded-2xl",children:[(0,t.jsx)(X.V.Title,{as:"h3",className:"text-lg font-medium leading-6 text-gray-200",children:s?"Message could not be sent":"Message sent successfully"}),(0,t.jsx)("div",{className:"mt-2",children:(0,t.jsx)("p",{className:"text-sm text-gray-500",children:s?"Your message could not be sent. Check your internet connection and reload the page before sending the message again. The error is logged in the console.":"Your message has been successfully submitted. You will recieve an email as soon as we review your message."})}),(0,t.jsx)("div",{className:"mt-4",children:(0,t.jsx)("button",{type:"button",className:"inline-flex justify-center px-4 py-2 text-sm font-medium ".concat(s?"text-red-900 bg-red-200":"text-blue-900 bg-blue-200"," border border-transparent rounded-md ").concat(s?"hover:bg-red-500":"hover:bg-blue-500"," focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"),onClick:r,children:s?"Ok":"Got it, thanks!"})})]})})]})})})})}function te(e){e.props;var r=(0,o.useState)(!1),n=r[0],i=r[1],a=(0,o.useState)(!1),c=a[0],d=a[1],u=(0,o.useState)({}),m=u[0],x=u[1];(0,o.useEffect)((function(){f(localStorage.getItem("userData")?JSON.parse(localStorage.getItem("userData")):{name:"",email:"",subject:"",message:""})}),[]);var h=(0,o.useState)({name:"",email:"",subject:"",message:""}),g=h[0],f=h[1],p=function(e){var r=e.target.name,n=e.target.value;f((function(e){var t=Q({},e,Y({},r,n));return localStorage.setItem("userData",JSON.stringify(t)),t}))};function j(){return(j=J(q().mark((function e(r){var n;return q().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),x({isLoading:!0}),e.prev=2,e.next=5,(0,R.ET)((0,R.hJ)(U,"contacts"),{userData:g});case 5:n=e.sent,console.log("Document written with ID: ",n.id),d(!1),f({name:"",email:"",subject:"",message:""}),localStorage.removeItem("userData"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),console.error("Error adding document: ",e.t0),d(!0);case 16:i(!0),x("");case 18:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"py-8 text-base min-w-lg md:min-w-2xl leading-7 space-y-6 text-gray-600",children:[(0,t.jsx)(s.X6,{as:"h3",textTransform:"uppercase",fontWeight:"medium",fontSize:"sm",mb:"2rem",letterSpacing:"0.1em",color:"white",children:"Send us a message"}),(0,t.jsxs)(s.kC,{as:"form",direction:"column",minW:{xs:0,md:"40ch"},gap:"0.5rem",w:"100%",onSubmit:function(e){return j.apply(this,arguments)},children:[(0,t.jsxs)(Z.NI,{isRequired:!0,children:[(0,t.jsx)(Z.lX,{display:"block",fontSize:"md",color:"gray.100",htmlFor:"name",children:"Name"}),(0,t.jsxs)(G.BZ,{children:[(0,t.jsx)(G.Z8,{pointerEvents:"none",children:(0,t.jsx)(N,{})}),(0,t.jsx)(G.II,{id:"name",name:"name",type:"text",px:"0.75rem",rounded:"lg",w:"100%",color:"gray.100",borderColor:"gray.300",bg:"gray.700",mb:"0.25rem",focusBorderColor:"gray.300",className:"focus:ring-gray-500",placeholder:"John Doe",value:g.name,onChange:p,required:!0})]})]}),(0,t.jsxs)(Z.NI,{isRequired:!0,children:[(0,t.jsx)(Z.lX,{display:"block",fontSize:"md",color:"gray.100",htmlFor:"email",children:"Email"}),(0,t.jsxs)(G.BZ,{children:[(0,t.jsx)(G.Z8,{pointerEvents:"none",children:(0,t.jsx)(z,{})}),(0,t.jsx)(G.II,{id:"email",name:"email",type:"email",px:"0.75rem",rounded:"lg",w:"100%",color:"gray.100",borderColor:"gray.300",bg:"gray.700",mb:"0.25rem",focusBorderColor:"gray.300",className:"focus:ring-gray-500",placeholder:"john@doe.com",value:g.email,onChange:p,required:!0})]})]}),(0,t.jsxs)(Z.NI,{children:[(0,t.jsx)(Z.lX,{display:"block",fontSize:"md",color:"gray.100",htmlFor:"subject",children:"Subject"}),(0,t.jsxs)(G.BZ,{children:[(0,t.jsx)(G.Z8,{pointerEvents:"none",children:(0,t.jsx)(H,{})}),(0,t.jsx)(G.II,{id:"subject",name:"subject",type:"text",px:"0.75rem",rounded:"lg",w:"100%",color:"gray.100",borderColor:"gray.300",bg:"gray.700",mb:"0.25rem",focusBorderColor:"gray.300",className:"focus:ring-gray-500",placeholder:"just a hi",value:g.subject,onChange:p})]})]}),(0,t.jsxs)(Z.NI,{isRequired:!0,className:"",children:[(0,t.jsx)(Z.lX,{display:"block",fontSize:"md",color:"gray.100",htmlFor:"message",children:"Message"}),(0,t.jsxs)(G.BZ,{children:[(0,t.jsx)(G.Z8,{pointerEvents:"none",children:(0,t.jsx)(W,{})}),(0,t.jsx)(V.g,{id:"message",name:"message",px:"0.75rem",pl:"2.4rem",rounded:"lg",w:"100%",color:"gray.100",borderColor:"gray.300",resize:"vertical",bg:"gray.700",mb:"0.25rem",maxH:"50ch",minH:"10ch",focusBorderColor:"gray.300",className:"focus:ring-gray-500",placeholder:"hi",value:g.message,onChange:p,required:!0})]})]}),(0,t.jsx)(l.zx,Q({},m,{type:"submit",w:"full",display:"flex",justifyContent:"center",alignItems:"center",px:"1rem",borderColor:"transparent",rounded:"md",fontSize:"md",color:"gray.100",bg:"green.600",_hover:{bg:"green.700",borderWidth:3,borderColor:"green.500"},_focus:{bg:"green.700",borderWidth:3,borderColor:"green.500"},children:"Submit"}))]}),(0,t.jsx)(ne,{closeModal:function(){return i(!1)},isOpen:n,isError:c})]})})}function oe(e){e.props;return(0,t.jsxs)(s.xu,{py:"2rem",fontWeight:"medium",px:"1rem",color:"white",children:[(0,t.jsx)(s.X6,{as:"h3",textTransform:"uppercase",fontWeight:"medium",fontSize:"sm",mb:"2rem",letterSpacing:"0.1em",color:"white",children:"Contact info"}),(0,t.jsx)(s.xu,{className:"divide-y divide-gray-300",children:[{name:"Where to find us",type:"link",link:"https://www.google.com/maps/place/Computer+Paradise/@26.7166353,88.4190114,17z/data=!4m5!3m4!1s0x39e4416f20fd3b41:0xbe77cdd11fd07b4b!8m2!3d26.7166016!4d88.4212002",data:["Beside Hotel Vinayak Building, 1st Floor","Hill Cart Road, Siliguri - 734 001","West Bengal, India"]},{name:"Email us at",type:"email",data:["support@computerparadisesa.com","akhilsharma@computerparadisesa.com","somansharma@computerparadisesa.com"]},{name:"Call us at",type:"phone",data:["+91 89428 60901","+91 97331 44909"]}].map((function(e){return(0,t.jsx)(ce,{props:e},e.type)}))})]})}function se(e){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.rU,{decoration:"none",isExternal:!0,href:"mailto:".concat(e.data),_hover:{textDecoration:"none"},children:e.data}),(0,t.jsx)("br",{})]})}function ie(e){return(0,t.jsxs)(t.Fragment,{children:[e.data,(0,t.jsx)("br",{})]})}function ae(e){return(0,t.jsx)(s.X6,{as:"h4",color:"green.300",mb:"1rem",mt:"1.25rem",fontSize:"md",fontWeight:"300",children:e.name})}function le(e){var r=e.data,n=e.link;return(0,t.jsx)(s.rU,{decoration:"none",isExternal:!0,href:n,_hover:{textDecoration:"none"},children:(0,t.jsx)(ie,{data:r},r)})}function ce(e){var r=e.props;return(0,t.jsxs)(s.xu,{children:[(0,t.jsx)(ae,{name:r.name}),(0,t.jsx)(s.xv,{mb:"1.25rem",children:"email"===r.type?r.data.map((function(e){return(0,t.jsx)(se,{data:e},e)})):"link"===r.type?r.data.map((function(e){return(0,t.jsx)(le,{data:e,link:r.link},e)})):r.data.map((function(e){return(0,t.jsx)(ie,{data:e},e)}))})]})}function de(){return(0,t.jsx)(ue,{})}var ue=function(){return(0,t.jsx)(s.kC,{flexDir:"column",gap:3,align:"center",py:3,color:"white",mx:2,children:(0,t.jsx)(s.X6,{as:"h2",pt:"2rem",mx:4,my:6,h:"100%",fontSize:{xs:"xl",md:"2xl"},fontWeight:"bold",color:"gray.900",maxW:"min",children:"ABOUT"})})};function me(){return(0,t.jsx)(s.W2,{minH:"screen",children:(0,t.jsx)(xe,{})})}var xe=function(){return(0,t.jsx)(s.kC,{flexDir:"column",gap:3,align:"center",py:3,color:"white",mx:2,children:(0,t.jsx)(s.X6,{as:"h2",pt:"2rem",mx:4,my:6,h:"100%",fontSize:{xs:"xl",md:"2xl"},fontWeight:"bold",color:"gray.900",maxW:"min",children:"PROUDCTS"})})};function he(e){for(var r=e.pages,n=e.setHome,i={},a=0;a<r.length;a++)r[a].isActive&&(i=r[a]);var l=i.name;"Home"===i.name?l=(0,t.jsx)(C,{pages:i,setHome:n}):"Recognition"===i.name?l=(0,t.jsx)(M,{pages:i}):"Contact"===i.name&&(l=(0,t.jsx)($,{pages:i}));var c=(0,o.useState)(0),d=c[0],u=c[1];return(0,o.useEffect)((function(){var e=function(){var e=document.querySelector("#footer");u(e.clientHeight)};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),l=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(C,{pages:i,setHome:n}),(0,t.jsx)(de,{pages:i,setHome:n}),(0,t.jsx)(me,{pages:i,setHome:n}),(0,t.jsx)(M,{pages:i}),(0,t.jsx)($,{pages:i}),(0,t.jsx)(s.W2,{bg:"transparent",h:d+"px"})]}),(0,t.jsx)(s.W2,{as:"main",w:"100%",bg:"gray.700",maxW:"max",m:0,p:0,pb:50,mt:16,children:l})}function ge(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function fe(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},t=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),t.forEach((function(r){ge(e,r,n[r])}))}return e}function pe(){var e=function(e){s((function(r){for(var n=[],t=0;t<r.length;t++)n.push(fe({},r[t],{isActive:r[t].name===e}));return localStorage.setItem("pages",JSON.stringify(n)),n}))},r=(0,o.useState)([{name:"Home",isActive:!0},{name:"About"},{name:"Products"},{name:"Recognition"},{name:"Contact"}]),n=r[0],s=r[1];return(0,o.useEffect)((function(){s((function(e){return localStorage.getItem("pages")?JSON.parse(localStorage.getItem("pages")):e}))}),[]),(0,t.jsxs)("div",{children:[(0,t.jsx)(m,{pages:n,setHome:e}),(0,t.jsx)(he,{pages:n,setHome:e}),(0,t.jsx)(v,{pages:n,setHome:e})]})}}},function(e){e.O(0,[874,16,722,774,888,179],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);