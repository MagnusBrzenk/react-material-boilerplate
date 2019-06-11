(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"./client/Components/Template/index.tsx":function(e,t,n){"use strict";n.r(t),n.d(t,"Template",function(){return m});n("./client/Components/Template/styles.scss");var l=n("./node_modules/react/index.js"),a=n.n(l),o=n("./node_modules/styled-components/dist/styled-components.browser.esm.js"),r=n("./node_modules/react-router-dom/esm/react-router-dom.js");const s=o.a.h1`
  background-color: rgba(0, 0, 150, 0.6);
`,c=o.a.div`
  /* background-color: rgba(255, 0, 150, 0.6); */
  border: solid 10px red;
  ul {
    background-color: cyan;
  }
`,m=e=>{const[t,n]=Object(l.useState)({counter:0});return a.a.createElement("div",{className:"template-class"},a.a.createElement(s,null,"Template XXXY Page"),a.a.createElement("div",null,"Here are some props: "+e),a.a.createElement("div",null,"Counter:"+t.counter," "),a.a.createElement("button",{onClick:()=>n(e=>({counter:e.counter+1}))},"INCREASE COUNTER"),a.a.createElement("hr",null),a.a.createElement(c,null,a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(r.b,{to:"/"},"Home")),a.a.createElement("li",null,a.a.createElement(r.b,{to:"/testing"},"Testing")),a.a.createElement("li",null,a.a.createElement(r.b,{to:"/template"},"Template")))))};t.default=m},"./client/Components/Template/styles.scss":function(e,t,n){e.exports={"template-class":"template-class__10hJB"}}}]);
//# sourceMappingURL=MyTemplate.284a8f8d9d697c8858e3.js.map