(this.webpackJsonpps_personal_website=this.webpackJsonpps_personal_website||[]).push([[0],{57:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(3),r=n.n(a),c=n(36),i=n.n(c),o=n(43),s=n(81),d=n(6),l=n(12),p=n(35),h=n(39),j=n(40);var b,u,x,m,f,g,O,y,v,k,w,S,C,I,F=n(5),L=n(78),P=n(0),R=function(e){var t=e.sections,n=Object(a.useState)(""),r=Object(l.a)(n,2),c=r[0],i=r[1],o=Object(a.useState)(!1),s=Object(l.a)(o,2),d=s[0],b=s[1],u=function(e){i(e),b(!1)},x=function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){var t=window.matchMedia(e);t.matches!==r&&c(t.matches);var n=function(){return c(t.matches)};return t.addEventListener("change",n),function(){return t.removeEventListener("change",n)}}),[r,e]),r}("(max-width: 500px)");Object(a.useEffect)((function(){x||b(!1)}),[x]);var m=[];x?(m.push(Object(P.jsx)(M,{menuState:"",elem:" ",href:"#0",onClick:function(){return b(!d)},children:Object(P.jsx)("img",{src:"https://img.icons8.com/material-outlined/24/000000/menu--v1.png",alt:"Menu"})},"menu")),d&&m.push(t.map((function(e){return Object(P.jsx)(M,{menuState:c,elem:e,href:"#"+e,onClick:function(){return u(e)},children:Object(P.jsx)(L.a,{children:e})},e)})))):m=t.map((function(e){return Object(P.jsx)(M,{menuState:c,elem:e,href:"#"+e,onClick:function(){return u(e)},children:Object(P.jsx)(L.a,{children:e})},e)}));var f=x?null:Object(P.jsxs)(P.Fragment,{children:[Object(P.jsx)(N,{menuState:"",elem:" ",href:"https://www.linkedin.com/in/peterysun/",target:"_blank",rel:"noreferrer",children:Object(P.jsx)(p.Icon,{icon:j.a})}),Object(P.jsx)(N,{menuState:"",elem:" ",href:"https://github.com/Narnian12",target:"_blank",rel:"noreferrer",children:Object(P.jsx)(p.Icon,{icon:h.a})})]});return Object(P.jsxs)(E,{children:[m,f]})},E=F.a.div(b||(b=Object(d.a)(["\n  background-color: #404040;\n  overflow: hidden;\n  position: fixed;\n  width: 100%;\n  top: 0;\n"]))),M=F.a.a(u||(u=Object(d.a)(["\n  display: block;\n  float: left;\n  color: white;\n  padding: 14px 16px;\n  font-size: 15px;\n  text-decoration: none;\n  background-color: ",";\n  :hover {\n    background-color: lightgray;\n    color: #ffffff;\n  }\n  @media only screen and (max-width: 500px) {\n    float: none;\n    text-align: left;\n  }\n"])),(function(e){return e.menuState===e.elem?"gray":"#404040"})),N=Object(F.a)(M)(x||(x=Object(d.a)(["\n  float: right;\n  @media only screen and (max-width: 500px) {\n    float: none;\n  }\n"]))),T=n.p+"static/media/egypt.e65cb444.jpg",_=function(){return Object(P.jsxs)(z,{children:[Object(P.jsx)(L.a,{variant:"h2",color:"text.primary",children:"PS Portfolio"}),Object(P.jsx)(q,{src:T,alt:"Egypt"})]})},z=F.a.div(m||(m=Object(d.a)(["\n  width: 100%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-items: center;\n  margin: 45px 0px 0px 0px;\n  @media only screen and (max-width: 500px) {\n    margin: 50px 0px 0px 0px;\n  }\n"]))),q=F.a.img(f||(f=Object(d.a)(["\n  height: 90px;\n  max-width: 300px;\n  margin: 5px;\n"]))),A=function(){var e=Object(a.useState)({quote:"",character:"",anime:""}),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){fetch("https://animechan.vercel.app/api/quotes/anime?title=toradora").then((function(e){return e.json()})).then((function(e){return r(e[Math.floor(10*Math.random())])}))}),[]),0===n.quote.length?Object(P.jsx)("p",{children:"Loading quote..."}):Object(P.jsxs)(B,{children:[Object(P.jsx)(L.a,{color:"text.primary",children:Object(P.jsxs)("i",{children:['"',n.quote,'"']})}),Object(P.jsxs)(L.a,{color:"text.secondary",children:[n.character,", ",Object(P.jsx)("b",{children:n.anime})," [Generated by ",Object(P.jsx)("a",{href:"https://animechan.vercel.app/",target:"_blank",rel:"noreferrer",children:"Animechan"}),"]"]})]})},B=F.a.div(g||(g=Object(d.a)(["\n  margin: 10px 20px;\n"]))),H=n(79),J=n(82),G=function(e){var t=e.cards,n={backgroundColor:"#212121",minWidth:300,maxWidth:400,margin:1};return Object(P.jsx)(Q,{children:t.map((function(e){return Object(P.jsx)(r.a.Fragment,{children:Object(P.jsxs)(H.a,{sx:n,children:[Object(P.jsxs)(J.a,{children:[Object(P.jsx)(L.a,{variant:"h5",color:"text.primary",children:e.link?Object(P.jsx)("a",{href:e.link,target:"_blank",rel:"noreferrer",children:e.header}):e.header}),Object(P.jsx)(L.a,{color:"text.secondary",children:e.body})]}),Object(P.jsx)(P.Fragment,{children:e.footer?Object(P.jsxs)(L.a,{color:"text.primary",gutterBottom:!0,children:[Object(P.jsx)("b",{children:"Tech Stack: "}),e.footer]}):Object(P.jsx)(P.Fragment,{})})]})},e.header)}))})},Q=F.a.div(O||(O=Object(d.a)(["\n  margin: 10px;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n"]))),W=function(e){var t=e.languages;return Object(P.jsx)(P.Fragment,{children:t.map((function(e){return Object(P.jsx)(U,{children:Object(P.jsxs)(D,{children:[Object(P.jsx)(K,{percentage:e.percentage,children:Object(P.jsx)(V,{children:Object(P.jsx)(L.a,{color:"text.primary",children:Object(P.jsx)("b",{children:e.name})})})}),Object(P.jsx)(X,{children:Object(P.jsx)(L.a,{color:"text.primary",children:Object(P.jsx)("b",{children:e.percentage})})})]})},e.name)}))})},U=F.a.div(y||(y=Object(d.a)(["\n  display: flex;\n  justify-content: center;\n  width: 100%;\n"]))),D=F.a.div(v||(v=Object(d.a)(["\n  margin: 5px 10px;\n  max-width: 600px;\n  width: 100%;\n"]))),K=F.a.div(k||(k=Object(d.a)(["\n  height: 100%;\n  background-color: #ffffff;\n  float: left;\n  width: ",";\n"])),(function(e){return e.percentage})),V=F.a.div(w||(w=Object(d.a)(["\n  width: 100px;\n  float: left;\n  font-weight: bold;\n  background-color: #404040;\n"]))),X=F.a.div(S||(S=Object(d.a)(["\n  display: flex;\n  justify-content: flex-end;\n  padding: 0px 10px 0px 0px;\n  background-color: #181818;\n"]))),Y=["Profile","Languages","Projects"],Z=[{header:"Introduction",body:"Hello! I am Peter, a full-stack developer with a passion in building software for healthcare."},{header:"Work",body:"I am a software engineer in Availity specializing in backend development using .NET Core."},{header:"Education",body:"I completed a Master of Science in Computer Science at Oakland University."},{header:"Research",body:"I have written an open-source paper on the potential for dependency injection to improve software maintainability."},{header:"Passions",body:"I love writing, and hope to publish a novel one day. I enjoy playing guitar and piano."},{header:"Current Tech Stack",body:"I am working with .NET and EF. My personal projects involve React."}],$=[{name:"C#",percentage:"80%"},{name:"C++",percentage:"70%"},{name:"JavaScript",percentage:"60%"},{name:"React",percentage:"60%"},{name:"SQL",percentage:"55%"},{name:"HTML",percentage:"55%"},{name:"CSS",percentage:"50%"},{name:"Rust",percentage:"50%"}],ee=[{link:"https://github.com/Narnian12/ckjm-analyzer",header:"ckjm-analyzer",body:"CLI application that analyzes Dependency Injection and Chidamber and Kemerer Java Metrics in Java class files.",footer:"C#"},{link:"https://github.com/Narnian12/ps-calculator",header:"ps-calculator",body:"Online calculator that executes simple math, tracks history, and supports keyboard use. Uses regex to generalize computational logic.",footer:"React, TypeScript, HTML, CSS"},{link:"https://github.com/Narnian12/todo-app-client",header:"todo-app-client",body:"Client-side application of todo app linked to a server deployed on Heroku. Responsive to mobile devices.",footer:"React, TypeScript, GraphQL, Apollo Client"},{link:"https://github.com/Narnian12/todo-app-server-expanded",header:"todo-app-server-expanded",body:"Server-side application of todo app deployed on Heroku. Uses a Prisma ORM SQLite database to store data.",footer:"Node.js, Apollo Server Express, Prisma, GraphQL"},{link:"https://github.com/Narnian12/tic-tac-toe",header:"tic-tac-toe",body:"Full implementation of tic-tac-toe game from React tutorial. Includes Redux to keep track of move history.",footer:"React, TypeScript, Redux"},{link:"https://github.com/Narnian12/ps-studio-ghibli-films",header:"ps-studio-ghibli-films",body:"Web application showcasing Studio Ghibli data from online API in grid format. Includes pagination support.",footer:"React, TypeScript"}],te=function(){return Object(P.jsxs)(ne,{children:[Object(P.jsx)(R,{sections:Y}),Object(P.jsx)(_,{}),Object(P.jsx)(A,{}),Object(P.jsx)(ae,{id:"Profile",children:Object(P.jsx)(L.a,{variant:"h3",color:"text.primary",children:"Profile"})}),Object(P.jsx)(G,{cards:Z}),Object(P.jsx)(ae,{id:"Languages",children:Object(P.jsx)(L.a,{variant:"h3",color:"text.primary",children:"Languages"})}),Object(P.jsx)(W,{languages:$}),Object(P.jsx)(ae,{id:"Projects",children:Object(P.jsx)(L.a,{variant:"h3",color:"text.primary",children:"Projects"})}),Object(P.jsx)(G,{cards:ee})]})},ne=F.a.div(C||(C=Object(d.a)(["\n  text-align: center;\n"]))),ae=F.a.div(I||(I=Object(d.a)(["\n  width: 100%;\n  padding-top: 50px;\n  margin-top: -50px;\n  @media only screen and (max-width: 500px) {\n    padding-top: 70px;\n    margin-top: -70px;\n  }\n"]))),re=(n(57),Object(o.a)({palette:{background:{paper:"#282828"},text:{primary:"#FFFFFF",secondary:"#B0B3B8"}}}));i.a.render(Object(P.jsx)(P.Fragment,{children:Object(P.jsx)(s.a,{theme:re,children:Object(P.jsx)(te,{})})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.2df3cbd0.chunk.js.map