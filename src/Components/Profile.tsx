import './Profile.css';
import ProPic from '../Images/Profile.jpg';

function Profile() {
  return (
    <div id="Profile">
      <div className="header">
        <img src={ProPic} alt="Profile Picture"></img>
        <h1>Peter Sun's Personal Portfolio</h1>
      </div>
      <div className="card">
        <h2>Introduction</h2>
        <p>Hello! I'm Peter, an aspiring full-stack developer with experience in 
        QA, DevOps, and back-end technologies. My hope for this page is to gain a stronger
        understanding of UI development with the React library.
        </p>
      </div>
      <div className="card">
        <h2>Work</h2>
        <p>I am currently a software engineer in Promess, a manufacturing company specializing
          in sensing systems. For a few years, I was heavily
          involved in creating full-stack features using the .NET framework. More recently,
          I am working on developing with a new tech stack using Rust and React.
        </p>
      </div>
      <div className="card">
        <h2>Education</h2>
        <p>I am pursuing a Master of Science in Computer Science from Oakland University.
          More informally, I have been completing certifications from 
          <a href="https://www.freecodecamp.org/learn" target="_blank"> freeCodeCamp</a>.
        </p>
      </div>
      <div className="card">
        <h2>Research</h2>
        <p></p>
      </div>
    </div>
  );
}

export default Profile;