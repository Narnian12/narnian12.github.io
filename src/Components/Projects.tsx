import '../Styles/Card.css';
import './Projects.css';

function Projects() {
  return (
    <div className="card-layout" style={{justifyContent: "center"}}>
      <div className="card project">
        <h2><a href="https://github.com/Narnian12/ckjm-analyzer" target="_blank" rel="noreferrer">ckjm-analyzer</a></h2>
        <p className="card-text">
          CLI application that detects Dependency Injection (DI) occurrences in Java class files,
          using the <a href="http://gromit.iiar.pwr.wroc.pl/p_inf/ckjm/" target="_blank" rel="noreferrer">CKJM-Extended</a> tool to measure metrics.
        </p>
        <p><b>Languages/Libraries Used</b>: Rust</p>
      </div>
      <div className="card project">
        <h2><a href="https://github.com/Narnian12/ps-calculator" target="_blank" rel="noreferrer">ps-calculator</a></h2>
        <p className="card-text">
          Online calculator that executes simple math, tracks history, and supports keyboard use. Uses regex to generalize computational logic.
        </p>
        <p><b>Languages/Libraries Used</b>: React, TypeScript, HTML, CSS</p>
      </div>
      <div className="card project">
        <h2><a href="https://github.com/Narnian12/todo-app-client" target="_blank" rel="noreferrer">todo-app-client</a></h2>
        <p className="card-text">
          Client-side application of todo app linked to a server deployed on Heroku.
        </p>
        <p><b>Languages/Libraries Used</b>: React, TypeScript, GraphQL, Apollo Client</p>
      </div>
      <div className="card project">
        <h2><a href="https://github.com/Narnian12/todo-app-server" target="_blank" rel="noreferrer">todo-app-server</a></h2>
        <p className="card-text">
          Server-side application of todo app deployed on Heroku. Uses a Prisma ORM SQLite database to store data.
        </p>
        <p><b>Languages/Libraries Used</b>: Node.js, Apollo Server, Prisma</p>
      </div>
    </div>
  );
}

export default Projects;