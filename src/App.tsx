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
      <p style={{margin: "0px 40px"}}>
        Percentage bars are subjective. I am ranking them based on how often and comfortable I am in using the language.
      </p>
      <Languages />
    </div>
  );
}

export default App;