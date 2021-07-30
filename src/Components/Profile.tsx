import '../Styles/Card.css';

function Profile() {
  return (
    <div className="card-layout">
      <div className="card">
        <h2>Introduction</h2>
        <p className="card-text">Hello! I'm Peter, an aspiring full-stack developer with experience in 
        QA, DevOps, and back-end technologies. My hope for this page is to gain a stronger
        understanding of UI development with the React library, especially with Hooks and TypeScript.
        </p>
      </div>
      <div className="card">
        <h2>Work</h2>
        <p className="card-text">I am a software engineer in Promess, a manufacturing company specializing
          in sensing systems. For a few years, I developed full-stack features in the .NET framework. More recently,
          I am working on developing with a new tech stack using Rust and React.
        </p>
      </div>
      <div className="card">
        <h2>Education</h2>
        <p className="card-text">I am pursuing a Master of Science in Computer Science at Oakland University.
        I graduated with a Bachelor of Science in Microbiology from the University of Michigan.
        </p>
      </div>
      <div className="card">
        <h2>Research</h2>
        <p className="card-text">I hope to complete a Master's Thesis during my graduate studies. I am working on analyzing Dependency Injection (DI),
          a framework that may help in developing more maintainable software. More specifically, I am currently expanding on
          the CKJM metrics tool to detect the presence of DI in Java projects.
        </p>
      </div>
      <div className="card">
        <h2>Passions</h2>
        <p className="card-text">I enjoy writing. One of my favorite features of the Rust language is its robust
          out-of-the-box documentation generator. More than technical documentation, I love
          writing prose and poetry, and hope to publish a novel one day. I also love running and biking.
        </p>
      </div>
      <div className="card">
        <h2>Fun Facts</h2>
        <p className="card-text">I have two gerbils. I studied microbiology during my undergraduate years. I love broccoli.</p>
      </div>
    </div>
  );
}

export default Profile;