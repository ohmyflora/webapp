"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[977],{3977:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(5230),s=n.n(r),a=n(4246),c=n(7378),o=n(7559);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var u=function(e){var t=i({},e);return(0,a.jsxs)("svg",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){l(e,t,n[t])}))}return e}({viewBox:"0 0 24 24",width:"24",height:"24",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",fill:"none",shapeRendering:"geometricPrecision"},t,{children:[(0,a.jsx)("circle",{cx:"12",cy:"12",r:"10",fill:"transparent"}),(0,a.jsx)("path",{d:"M12 8v4",stroke:"currentColor"}),(0,a.jsx)("path",{d:"M12 16h.01",stroke:"currentColor"})]}))},d=n(9716),h=n(6686),f=n(394),p=n(2e3),x=n(9557);function m(e,t,n,r,s,a,c){try{var o=e[a](c),l=o.value}catch(i){return void n(i)}o.done?t(l):Promise.resolve(l).then(r,s)}var v=function(){var e=(0,c.useState)(""),t=e[0],n=e[1],r=(0,c.useState)(""),l=r[0],i=r[1],v=(0,c.useState)(""),j=v[0],b=v[1],g=(0,c.useState)(""),w=g[0],y=g[1],N=(0,c.useState)(!1),k=N[0],O=N[1],S=(0,c.useState)(""),C=S[0],P=S[1],Z=(0,c.useState)(!1),E=Z[0],L=Z[1],_=(0,c.useState)(!1),I=_[0],M=_[1],D=(0,x.Z)(),G=(0,d.l8)(),V=G.setModalView,W=G.closeModal,z=function(){var e,n=(e=s().mark((function e(n){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),E||I||(L(!0),A()),e.prev=2,O(!0),P(""),e.next=7,D({email:t,firstName:j,lastName:w,password:l});case 7:O(!1),W(),e.next=16;break;case 11:e.prev=11,e.t0=e.catch(2),r=e.t0.errors,P(r[0].message),O(!1);case 16:case"end":return e.stop()}}),e,null,[[2,11]])})),function(){var t=this,n=arguments;return new Promise((function(r,s){var a=e.apply(t,n);function c(e){m(a,r,s,c,o,"next",e)}function o(e){m(a,r,s,c,o,"throw",e)}c(void 0)}))});return function(e){return n.apply(this,arguments)}}(),A=(0,c.useCallback)((function(){var e=/^(?=.*[a-zA-Z])(?=.*[0-9])/.test(l);E&&M(!(0,o.G)(t)||l.length<7||!e)}),[t,l,E]);return(0,c.useEffect)((function(){A()}),[A]),(0,a.jsxs)("form",{onSubmit:z,className:"w-80 flex flex-col justify-between p-3",children:[(0,a.jsx)("div",{className:"flex justify-center pb-12 ",children:(0,a.jsx)(h.Z,{width:"64px",height:"64px"})}),(0,a.jsxs)("div",{className:"flex flex-col space-y-4",children:[C&&(0,a.jsx)("div",{className:"text-red border border-red p-3",children:C}),(0,a.jsx)(f.Z,{placeholder:"First Name",onChange:b}),(0,a.jsx)(f.Z,{placeholder:"Last Name",onChange:y}),(0,a.jsx)(f.Z,{type:"email",placeholder:"Email",onChange:n}),(0,a.jsx)(f.Z,{type:"password",placeholder:"Password",onChange:i}),(0,a.jsxs)("span",{className:"text-accent-8",children:[(0,a.jsx)("span",{className:"inline-block align-middle ",children:(0,a.jsx)(u,{width:"15",height:"15"})})," ",(0,a.jsxs)("span",{className:"leading-6 text-sm",children:[(0,a.jsx)("strong",{children:"Info"}),": Passwords must be longer than 7 chars and include numbers."," "]})]}),(0,a.jsx)("div",{className:"pt-2 w-full flex flex-col",children:(0,a.jsx)(p.Z,{variant:"slim",type:"submit",loading:k,disabled:I,children:"Sign Up"})}),(0,a.jsxs)("span",{className:"pt-1 text-center text-sm",children:[(0,a.jsx)("span",{className:"text-accent-7",children:"Do you have an account?"})," ",(0,a.jsx)("a",{className:"text-accent-9 font-bold hover:underline cursor-pointer",onClick:function(){return V("LOGIN_VIEW")},children:"Log In"})]})]})]})}}}]);