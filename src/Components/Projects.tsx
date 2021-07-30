import '../Styles/Card.css';
import './Projects.css';

function Projects() {
  return (
    <div className="card-layout">
      <div className="card project">
        <h2><a href="https://github.com/Narnian12/ckjm_analyzer" target="_blank" rel="noreferrer">ckjm_analyzer</a></h2>
        <p className="card-text">
          Command-line application that detects detect Dependency Injection (DI) occurrences in Java class files,
          using the <a href="http://gromit.iiar.pwr.wroc.pl/p_inf/ckjm/">CKJM-Extended</a> tool to measure metrics.
        </p>
        <p><b>Languages Used</b>: Rust</p>
      </div>
    </div>
  );
}

export default Projects;