import './Header.css';
import Profile from '../Images/profile.jpg';
import Egypt from '../Images/egypt.jpg';

function Header() {
  return (
    <div className="header">
      <h1>PS - My Portfolio!</h1>
      <img src={Profile} alt="Profile"></img>
      <img src={Egypt} alt="Egypt"></img>
    </div>
  );
}

export default Header;