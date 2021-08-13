import '../Styles/Card.css';
import './Projects.css';

function Projects() {
  return (
    <div className="card-layout" style={{justifyContent: "center"}}>
      <div className="card project">
        <h2><a href="https://github.com/Narnian12/ckjm_analyzer" target="_blank" rel="noreferrer">ckjm_analyzer</a></h2>
        <p className="card-text">
          Command-line application that detects Dependency Injection (DI) occurrences in Java class files,
          using the <a href="http://gromit.iiar.pwr.wroc.pl/p_inf/ckjm/" target="_blank" rel="noreferrer">CKJM-Extended</a> tool to measure metrics.
        </p>
        <p><b>Languages/Libraries Used</b>: Rust</p>
      </div>
      <div className="card project">
        <h2><a href="https://github.com/Narnian12/ps_calculator" target="_blank" rel="noreferrer">ps_calculator</a></h2>
        <p className="card-text">
          Online calculator that executes simple math, tracks history, and supports keyboard use. Uses a significant amount of regex to generalize computational logic.
        </p>
        <p><b>Languages/Libraries Used</b>: React, TypeScript, HTML, CSS</p>
      </div>
      <div className="card project">
        <h2><a href="https://github.com/Narnian12/ps_todo" target="_blank" rel="noreferrer">ps_todo</a></h2>
        <p className="card-text">
          Todo app that implements the client side of a fullstack application with GraphQL, using a Hasura/Heroku-generated cloud database.
        </p>
        <p><b>Languages/Libraries Used</b>: React, TypeScript, GraphQL, Apollo Client</p>
      </div>
    </div>
  );
}

export default Projects;