import { CardInfo, LanguageInfo } from "../utils/interfaces";

export const navSections: string[] = ["Profile", "Languages", "Projects"];

export const profileCards: CardInfo[] = [
  {
    header: "Introduction",
    body: "Hello! I am Peter, a full-stack developer with a passion in building software for healthcare.",
  },
  {
    header: "Work",
    body: "I am a software engineer in Availity specializing in backend development using .NET Core.",
  },
  {
    header: "Education",
    body: "I completed a Master of Science in Computer Science at Oakland University.",
  },
  {
    header: "Research",
    body: "I have written a paper on dependency injection improving software maintainability.",
  },
  {
    header: "Passions",
    body: "I love writing, and hope to publish a novel one day. I enjoy playing guitar and piano.",
  },
  {
    header: "Current Tech Stack",
    body: "I am working with .NET and EF. My personal projects involve React.",
  },
];

export const languages: LanguageInfo[] = [
  { name: "C#", percentage: "80%" },
  { name: "C++", percentage: "70%" },
  { name: "JavaScript", percentage: "60%" },
  { name: "React", percentage: "60%" },
  { name: "Vue", percentage: "55%" },
  { name: "SQL", percentage: "55%" },
  { name: "HTML", percentage: "55%" },
  { name: "CSS", percentage: "50%" },
];

export const projectCards: CardInfo[] = [
  {
    link: "https://github.com/Narnian12/ckjm-analyzer",
    header: "ckjm-analyzer",
    body: "CLI application that analyzes Dependency Injection and Chidamber and Kemerer Java Metrics in Java class files.",
    footer: "C#",
  },
  {
    link: "https://github.com/Narnian12/ps-calculator",
    header: "ps-calculator",
    body: "Online calculator that executes simple math, tracks history, and supports keyboard use. Uses regex to generalize computational logic.",
    footer: "React, TypeScript, HTML, CSS",
  },
  {
    link: "https://github.com/Narnian12/todo-app-client",
    header: "todo-app-client",
    body: "Client-side application of todo app linked to a server deployed on Heroku. Responsive to mobile devices.",
    footer: "React, TypeScript, GraphQL, Apollo Client",
  },
  {
    link: "https://github.com/Narnian12/todo-app-server-expanded",
    header: "todo-app-server-expanded",
    body: "Server-side application of todo app deployed on Heroku. Uses a Prisma ORM SQLite database to store data.",
    footer: "Node.js, Apollo Server Express, Prisma, GraphQL",
  },
  {
    link: "https://github.com/Narnian12/tic-tac-toe",
    header: "tic-tac-toe",
    body: "Full implementation of tic-tac-toe game from React tutorial. Includes Redux to keep track of move history.",
    footer: "React, TypeScript, Redux",
  },
  {
    link: "https://github.com/Narnian12/ps-studio-ghibli-films",
    header: "ps-studio-ghibli-films",
    body: "Web application showcasing Studio Ghibli data from online API in grid format. Includes pagination support.",
    footer: "React, TypeScript",
  },
];
