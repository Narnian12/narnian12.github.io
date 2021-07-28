import './App.css';
import NavBar from './Components/NavBar';
import Profile from './Components/Profile';

function App() {
  return (
    <div className="App">
      <NavBar sections={["Profile", "Languages", "Projects", "Contact"]}/>
      <Profile />
    </div>
  );
}

export default App;