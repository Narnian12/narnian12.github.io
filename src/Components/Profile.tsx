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
    </div>
  );
}

export default Profile;