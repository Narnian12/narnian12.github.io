import NavBar from './Components/NavBar';
import Header from './Components/Header';
import AnimeQuote from './Components/AnimeQuote';
import Cards from './Components/Cards';
import Languages from './Components/Languages';
import styled from '@emotion/styled';
import { FC } from 'react';
import Typography from '@mui/material/Typography';
import { CardInfo, LanguageInfo } from './utils/interfaces';

const navSections = ['Profile', 'Languages', 'Projects'];

const profileCards: CardInfo[] = [
  {
    header: 'Introduction',
    body: "Hello! I'm Peter, an aspiring full-stack developer with a passion in building software for the healthcare field.",
  },
  {
    header: 'Work',
    body: 'I am a software engineer in Promess specializing in full-stack development using .NET and React.',
  },
  {
    header: 'Education',
    body: 'I am pursuing a Master of Science in Computer Science at Oakland University with an emphasis on research.',
  },
  {
    header: 'Research',
    body: 'I am researching on quantifying Dependency Injection analysis as a framework that can improve software maintainability.',
  },
  {
    header: 'Passions',
    body: 'I love writing, and hope to publish a novel one day. I enjoy playing guitar and piano, particularly Christian music.',
  },
  {
    header: 'Current Tech Stack',
    body: 'I am working and researching with JavaScript, React, Node.js, and Rust.',
  },
];

const languages: LanguageInfo[] = [
  { name: 'C++', percentage: '85%' },
  { name: 'JavaScript', percentage: '75%' },
  { name: 'React', percentage: '60%' },
  { name: 'HTML', percentage: '55%' },
  { name: 'CSS', percentage: '50%' },
  { name: 'Rust', percentage: '50%' },
  { name: 'C#', percentage: '40%' },
  { name: 'SQL', percentage: '40%' },
];

const projectCards: CardInfo[] = [
  {
    link: 'https://github.com/Narnian12/ckjm-analyzer',
    header: 'ckjm-analyzer',
    body: 'CLI application that analyzes Dependency Injection and Chidamber and Kemerer Java Metrics in Java class files.',
    footer: 'Rust',
  },
  {
    link: 'https://github.com/Narnian12/ps-calculator',
    header: 'ps-calculator',
    body: 'Online calculator that executes simple math, tracks history, and supports keyboard use. Uses regex to generalize computational logic.',
    footer: 'React, TypeScript, HTML, CSS',
  },
  {
    link: 'https://github.com/Narnian12/todo-app-client',
    header: 'todo-app-client',
    body: 'Client-side application of todo app linked to a server deployed on Heroku. Responsive to mobile devices.',
    footer: 'React, TypeScript, GraphQL, Apollo Client',
  },
  {
    link: 'https://github.com/Narnian12/todo-app-server-expanded',
    header: 'todo-app-server-expanded',
    body: 'Server-side application of todo app deployed on Heroku. Uses a Prisma ORM SQLite database to store data.',
    footer: 'Node.js, Apollo Server Express, Prisma, GraphQL',
  },
  {
    link: 'https://github.com/Narnian12/tic-tac-toe',
    header: 'tic-tac-toe',
    body: 'Full implementation of tic-tac-toe game from React tutorial. Includes Redux to keep track of move history.',
    footer: 'React, TypeScript, Redux',
  },
  {
    link: 'https://github.com/Narnian12/ps-studio-ghibli-films',
    header: 'ps-studio-ghibli-films',
    body: 'Web application showcasing Studio Ghibli data from online API in grid format. Includes pagination support',
    footer: 'React, TypeScript',
  },
];

const App: FC = () => {
  return (
    <Wrapper>
      <NavBar sections={navSections} />
      <Header />
      <AnimeQuote />
      <Headers id="Profile">
        <Typography variant="h3" color="text.primary">
          Profile
        </Typography>
      </Headers>
      <Cards cards={profileCards} />
      <Headers id="Languages">
        <Typography variant="h3" color="text.primary">
          Languages
        </Typography>
      </Headers>
      <Typography color="text.secondary" style={{ margin: '0px 40px' }}>
        Percentage bars are subjective. I am ranking them based on how often and
        comfortable I am using the language.
      </Typography>
      <Languages languages={languages} />
      <Headers id="Projects">
        <Typography variant="h3" color="text.primary">
          Projects
        </Typography>
      </Headers>
      <Cards cards={projectCards} />
      {/* <Projects /> */}
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  text-align: center;
`;

const Headers = styled.div`
  width: 100%;
  padding-top: 50px;
  margin-top: -50px;
  @media only screen and (max-width: 500px) {
    padding-top: 70px;
    margin-top: -70px;
  }
`;
