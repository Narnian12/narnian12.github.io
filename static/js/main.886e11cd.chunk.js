(this.webpackJsonpps_personal_website=this.webpackJsonpps_personal_website||[]).push([[0],{24:function(e,n,t){"use strict";t.r(n);var r=t(2),a=t(1),c=t.n(a),i=t(10),s=t.n(i),o=t(4),l=t(6),d=t(11),j=t(12),p=t(13);var h,b,x,u,g,m,f,O,y,w,v,k,I,S,L,C,M,P,_,E,D=t(3),R=t(0),U=function(e){var n=e.sections,t=Object(a.useState)(""),r=Object(o.a)(t,2),c=r[0],i=r[1],s=Object(a.useState)(!1),h=Object(o.a)(s,2),b=h[0],x=h[1],u=function(e){i(e),x(!1)},g=function(e){var n=Object(a.useState)(!1),t=Object(o.a)(n,2),r=t[0],c=t[1];return Object(a.useEffect)((function(){var n=window.matchMedia(e);n.matches!==r&&c(n.matches);var t=function(){return c(n.matches)};return n.addEventListener("change",t),function(){return n.removeEventListener("change",t)}}),[r,e]),r}("(max-width: 500px)");Object(a.useEffect)((function(){g||x(!1)}),[g]);var m=[];g?(m.push(Object(R.jsx)(J,{menuState:"",elem:" ",href:"#0",onClick:function(){return x(!b)},children:Object(R.jsx)("img",{src:"https://img.icons8.com/material-outlined/24/000000/menu--v1.png",alt:"Menu"})},"menu")),b&&m.push(n.map((function(e){return Object(R.jsx)(J,{menuState:c,elem:e,href:"#"+e,onClick:function(){return u(e)},children:e},e)})))):m=n.map((function(e){return Object(R.jsx)(J,{menuState:c,elem:e,href:"#"+e,onClick:function(){return u(e)},children:e},e)}));var f=g?null:Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)(T,{menuState:"",elem:" ",href:"https://medium.com/@pysun12",target:"_blank",rel:"noreferrer",children:Object(R.jsx)(l.Icon,{icon:d.a})}),Object(R.jsx)(T,{menuState:"",elem:" ",href:"https://www.linkedin.com/in/peterysun/",target:"_blank",rel:"noreferrer",children:Object(R.jsx)(l.Icon,{icon:p.a})}),Object(R.jsx)(T,{menuState:"",elem:" ",href:"https://github.com/Narnian12",target:"_blank",rel:"noreferrer",children:Object(R.jsx)(l.Icon,{icon:j.a})})]});return Object(R.jsxs)(N,{children:[m,f]})},N=D.b.div(h||(h=Object(r.a)(["\n  background-color: #5586de;\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n  top: 0;\n"]))),J=D.b.a(b||(b=Object(r.a)(["\n  display: block;\n  float: left;\n  color: white;\n  padding: 14px 16px;\n  font-size: 15px;\n  text-decoration: none;\n  background-color: ",";\n  :hover {\n    background-color: lightgray;\n    color: midnightblue;\n  }\n  @media only screen and (max-width: 500px) {\n    float: none;\n    text-align: left;\n  }\n"])),(function(e){return e.menuState===e.elem?"gray":"#5586DE"})),T=Object(D.b)(J)(x||(x=Object(r.a)(["\n  float: right;\n  @media only screen and (max-width: 500px) {\n    float: none;\n  }\n"]))),z=t.p+"static/media/profile.df9b74bd.jpg",H=t.p+"static/media/egypt.e65cb444.jpg",A=D.b.div(u||(u=Object(r.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n  margin: 45px 0px 0px 0px;\n  background-color: #5585de;\n  background-image: linear-gradient(#5586de, white);\n"]))),Q=D.b.img(g||(g=Object(r.a)(["\n  height: auto;\n  max-width: 300px;\n  margin: 5px;\n"]))),F=D.b.h1(m||(m=Object(r.a)(["\n  width: 300px;\n"]))),G=function(){return Object(R.jsxs)(A,{children:[Object(R.jsx)(F,{children:"PS - My Portfolio!"}),Object(R.jsx)(Q,{src:z,alt:"Profile"}),Object(R.jsx)(Q,{src:H,alt:"Egypt"})]})},B=function(){var e=Object(a.useState)({quote:"I hate waiting, but if waiting means being able to be with you, I'll wait for as long as forever",character:"Aisaka Taiga",anime:"Toradora"}),n=Object(o.a)(e,2),t=n[0],r=n[1];return Object(a.useEffect)((function(){fetch("https://animechan.vercel.app/api/random").then((function(e){return e.json()})).then((function(e){return r(e)}))}),[]),Object(R.jsxs)(q,{children:[Object(R.jsx)("p",{children:Object(R.jsxs)("i",{children:['"',t.quote,'"']})}),Object(R.jsxs)("p",{children:[t.character,", ",Object(R.jsx)("b",{children:t.anime})," [Generated by ",Object(R.jsx)("a",{href:"https://animechan.vercel.app/",target:"_blank",rel:"noreferrer",children:"Animechan"}),"]"]})]})},q=D.b.div(f||(f=Object(r.a)(["\n  margin: 0px 20px;\n"]))),K=D.b.div(O||(O=Object(r.a)(["\n  box-shadow: 5px 5px 5px powderblue;\n  padding: 3px;\n  margin: 10px;\n  max-width: 400px;\n"]))),V=D.b.div(y||(y=Object(r.a)(["\n  margin: 10px 0px;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n"]))),W=D.b.p(w||(w=Object(r.a)(["\n  min-width: 200px;\n  margin: 20px;\n  text-align: center;\n"]))),X=function(){return Object(R.jsxs)(V,{children:[Object(R.jsxs)(K,{children:[Object(R.jsx)("h2",{children:"Introduction"}),Object(R.jsx)(W,{children:"Hello! I'm Peter, an aspiring full-stack developer with experience in QA, DevOps, and back-end technologies. My hope for this page is to gain a stronger understanding of UI development with the React library, especially with Hooks and TypeScript."})]}),Object(R.jsxs)(K,{children:[Object(R.jsx)("h2",{children:"Work"}),Object(R.jsx)(W,{children:"I am a software engineer in Promess, a manufacturing company specializing in sensing systems. For a few years, I developed full-stack features in the .NET framework. I am also heavily involved in the DevOps operations, using Microsoft Azure and CI/CD pipelines."})]}),Object(R.jsxs)(K,{children:[Object(R.jsx)("h2",{children:"Education"}),Object(R.jsx)(W,{children:"I am pursuing a Master of Science in Computer Science at Oakland University. I graduated with a Bachelor of Science in Microbiology from the University of Michigan."})]}),Object(R.jsxs)(K,{children:[Object(R.jsx)("h2",{children:"Research"}),Object(R.jsxs)(W,{children:["I am working on analyzing"," ",Object(R.jsx)("a",{href:"https://en.wikipedia.org/wiki/Dependency_injection",target:"_blank",rel:"noreferrer",children:"Dependency Injection"})," ","(DI), a framework that may help in developing more maintainable software. More specifically, I am currently expanding on the CKJM metrics tool to detect the presence of DI in Java projects."]})]}),Object(R.jsxs)(K,{children:[Object(R.jsx)("h2",{children:"Passions"}),Object(R.jsx)(W,{children:"I enjoy writing. I love writing prose and poetry, and hope to publish a novel one day. I also like playing guitar and piano. I am trying to learn a new piano song and would appreciate any suggestions! My musical interests primarily comprise of classical, Christian, and Japanese pop."})]}),Object(R.jsxs)(K,{children:[Object(R.jsx)("h2",{children:"Current Tech Stack"}),Object(R.jsx)(W,{children:"I am working and researching with Rust, React, GraphQL, Node.js, and Java. Languages I hope to tackle soon include Go and Python, and I want to try Vue.js in the future as well."})]})]})},Y=function(){return Object(R.jsx)(R.Fragment,{children:[{name:"C++",percentage:"85%"},{name:"JavaScript",percentage:"75%"},{name:"React",percentage:"60%"},{name:"HTML",percentage:"55%"},{name:"CSS",percentage:"50%"},{name:"Rust",percentage:"50%"},{name:"C#",percentage:"40%"},{name:"SQL",percentage:"40%"}].map((function(e){return Object(R.jsx)(Z,{children:Object(R.jsxs)($,{children:[Object(R.jsx)(ee,{percentage:e.percentage,children:Object(R.jsx)(ne,{children:Object(R.jsx)("p",{children:e.name})})}),Object(R.jsx)(te,{children:Object(R.jsx)("p",{children:e.percentage})})]})},e.name)}))})},Z=D.b.div(v||(v=Object(r.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]))),$=D.b.div(k||(k=Object(r.a)(["\n  margin: 5px 10px;\n  max-width: 600px;\n  width: 100%;\n"]))),ee=D.b.div(I||(I=Object(r.a)(["\n  height: 100%;\n  background-color: powderblue;\n  float: left;\n  width: ",";\n"])),(function(e){return e.percentage})),ne=D.b.div(S||(S=Object(r.a)(["\n  width: 100px;\n  float: left;\n  font-weight: bold;\n  background-color: cornflowerblue;\n"]))),te=D.b.div(L||(L=Object(r.a)(["\n  display: flex;\n  justify-content: flex-end;\n  padding: 0px 10px 0px 0px;\n  background-color: lightgray;\n"]))),re=function(){return Object(R.jsxs)(ae,{children:[Object(R.jsxs)(ce,{children:[Object(R.jsx)("h2",{children:Object(R.jsx)("a",{href:"https://github.com/Narnian12/ckjm-analyzer",target:"_blank",rel:"noreferrer",children:"ckjm-analyzer"})}),Object(R.jsxs)(W,{children:["CLI application that detects Dependency Injection (DI) occurrences in Java class files, using the"," ",Object(R.jsx)("a",{href:"http://gromit.iiar.pwr.wroc.pl/p_inf/ckjm/",target:"_blank",rel:"noreferrer",children:"CKJM-Extended"})," ","tool to measure metrics."]}),Object(R.jsxs)("p",{children:[Object(R.jsx)("b",{children:"Languages/Libraries Used"}),": Rust"]})]}),Object(R.jsxs)(ce,{children:[Object(R.jsx)("h2",{children:Object(R.jsx)("a",{href:"https://github.com/Narnian12/ps-calculator",target:"_blank",rel:"noreferrer",children:"ps-calculator"})}),Object(R.jsx)(W,{children:"Online calculator that executes simple math, tracks history, and supports keyboard use. Uses regex to generalize computational logic."}),Object(R.jsxs)("p",{children:[Object(R.jsx)("b",{children:"Languages/Libraries Used"}),": React, TypeScript, HTML, CSS"]})]}),Object(R.jsxs)(ce,{children:[Object(R.jsx)("h2",{children:Object(R.jsx)("a",{href:"https://github.com/Narnian12/todo-app-client",target:"_blank",rel:"noreferrer",children:"todo-app-client"})}),Object(R.jsx)(W,{children:"Client-side application of todo app linked to a server deployed on Heroku."}),Object(R.jsxs)("p",{children:[Object(R.jsx)("b",{children:"Languages/Libraries Used"}),": React, TypeScript, GraphQL, Apollo Client"]})]}),Object(R.jsxs)(ce,{children:[Object(R.jsx)("h2",{children:Object(R.jsx)("a",{href:"https://github.com/Narnian12/todo-app-server-expanded",target:"_blank",rel:"noreferrer",children:"todo-app-server-expanded"})}),Object(R.jsx)(W,{children:"Server-side application of todo app deployed on Heroku. Uses a Prisma ORM SQLite database to store data."}),Object(R.jsxs)("p",{children:[Object(R.jsx)("b",{children:"Languages/Libraries Used"}),": Node.js, Apollo Server Express, Prisma, GraphQL"]})]})]})},ae=Object(D.b)(V)(C||(C=Object(r.a)(["\n  justify-content: center;\n"]))),ce=Object(D.b)(K)(M||(M=Object(r.a)(["\n  transition: transform 0.3s;\n  :hover {\n    -ms-transform: scale(1.1);\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1);\n  }\n"]))),ie=["Profile","Languages","Projects"],se=function(){return Object(R.jsxs)(oe,{children:[Object(R.jsx)(U,{sections:ie}),Object(R.jsx)(G,{}),Object(R.jsx)(B,{}),Object(R.jsx)(le,{id:"Profile",children:"Profile"}),Object(R.jsx)(X,{}),Object(R.jsx)(le,{id:"Languages",children:"Languages"}),Object(R.jsx)("p",{style:{margin:"0px 40px"},children:"Percentage bars are subjective. I am ranking them based on how often and comfortable I am using the language."}),Object(R.jsx)(Y,{}),Object(R.jsx)(le,{id:"Projects",children:"Projects"}),Object(R.jsx)(re,{})]})},oe=D.b.div(P||(P=Object(r.a)(["\n  text-align: center;\n  font-family: Arial, Helvetica, sans-serif;\n"]))),le=D.b.h1(_||(_=Object(r.a)(["\n  width: 100%;\n  padding-top: 50px;\n  margin-top: -50px;\n  @media only screen and (max-width: 500px) {\n    padding-top: 70px;\n    margin-top: -70px;\n  }\n"]))),de=Object(D.a)(E||(E=Object(r.a)(["\n  body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  code {\n    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',\n      monospace;\n  }\n\n  a {\n    text-decoration: none;\n  }\n"])));s.a.render(Object(R.jsxs)(c.a.StrictMode,{children:[Object(R.jsx)(de,{}),Object(R.jsx)(se,{})]}),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.886e11cd.chunk.js.map