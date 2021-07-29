import './App.css';
import NavBar from './Components/NavBar';
import Profile from './Components/Profile';

const navSections = ["Profile", "Languages", "Projects", "Contact"];

function App() {
  return (
    <div className="App">
      <NavBar sections={navSections}/>
      <Profile />
    </div>
  );
}

export default App;