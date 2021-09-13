import NavBar from './Components/NavBar';
import Header from './Components/Header';
import Profile from './Components/Profile';
import Languages from './Components/Languages';
import Projects from './Components/Projects';
import styled from 'styled-components';
import { FC } from 'react';

const navSections = ['Profile', 'Languages', 'Projects'];

const App: FC = () => {
  return (
    <Wrapper>
      <NavBar sections={navSections} />
      <Header />
      <Headers id="Profile">Profile</Headers>
      <Profile />
      <Headers id="Languages">Languages</Headers>
      <p style={{ margin: '0px 40px' }}>
        Percentage bars are subjective. I am ranking them based on how often and
        comfortable I am using the language.
      </p>
      <Languages />
      <Headers id="Projects">Projects</Headers>
      <Projects />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
`;

const Headers = styled.h1`
  width: 100%;
  padding-top: 50px;
  margin-top: -50px;
  @media only screen and (max-width: 500px) {
    padding-top: 70px;
    margin-top: -70px;
  }
`;
