import './App.css';
import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Profile from './Components/Profile';
import Languages from './Components/Languages';

const navSections = ["Profile", "Languages", "Projects", "Contact"];

function App() {
  return (
    <div className="App">
      <NavBar sections={navSections}/>
      <Header />
      <h1 id="Profile" className="headers">Profile</h1>
      <Profile />
      <h1 id="Languages" className="headers">Languages</h1>
      <Languages />
    </div>
  );
}

export default App;