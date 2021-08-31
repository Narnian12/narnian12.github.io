import { Card, CardLayout, CardText } from '../Styles/Card';
import styled from 'styled-components';

const CardProjectLayout = styled(CardLayout)`
  justify-content: center
`

const CardProject = styled(Card)`
  transition: transform .3s;
  :hover {
    -ms-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`

function Projects() {
  return (
    <CardProjectLayout>
      <CardProject>
        <h2><a href="https://github.com/Narnian12/ckjm-analyzer" target="_blank" rel="noreferrer">ckjm-analyzer</a></h2>
        <CardText>
          CLI application that detects Dependency Injection (DI) occurrences in Java class files,
          using the <a href="http://gromit.iiar.pwr.wroc.pl/p_inf/ckjm/" target="_blank" rel="noreferrer">CKJM-Extended</a> tool to measure metrics.
        </CardText>
        <p><b>Languages/Libraries Used</b>: Rust</p>
      </CardProject>
      <CardProject>
        <h2><a href="https://github.com/Narnian12/ps-calculator" target="_blank" rel="noreferrer">ps-calculator</a></h2>
        <CardText>
          Online calculator that executes simple math, tracks history, and supports keyboard use. Uses regex to generalize computational logic.
        </CardText>
        <p><b>Languages/Libraries Used</b>: React, TypeScript, HTML, CSS</p>
      </CardProject>
      <CardProject>
        <h2><a href="https://github.com/Narnian12/todo-app-client" target="_blank" rel="noreferrer">todo-app-client</a></h2>
        <CardText>
          Client-side application of todo app linked to a server deployed on Heroku.
        </CardText>
        <p><b>Languages/Libraries Used</b>: React, TypeScript, GraphQL, Apollo Client</p>
      </CardProject>
      <CardProject>
        <h2><a href="https://github.com/Narnian12/todo-app-server-expanded" target="_blank" rel="noreferrer">todo-app-server-expanded</a></h2>
        <CardText>
          Server-side application of todo app deployed on Heroku. Uses a Prisma ORM SQLite database to store data.
        </CardText>
        <p><b>Languages/Libraries Used</b>: Node.js, Apollo Server Express, Prisma, GraphQL</p>
      </CardProject>
    </CardProjectLayout>
  );
}

export default Projects;