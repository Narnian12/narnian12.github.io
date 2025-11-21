import NavBar from "./Components/NavBar";
import Header from "./Components/Header";
import Cards from "./Components/Cards";
import Languages from "./Components/Languages";
import styled from "@emotion/styled";
import { FC } from "react";
import Typography from "@mui/material/Typography";
import {
  navSections,
  profileCards,
  languages,
  projectCards,
} from "./data/content";

const App: FC = () => {
  return (
    <Wrapper>
      <NavBar sections={navSections} />
      <Header />
      <Headers id="Profile">
        <Typography variant="h3" color="text.primary">
          Profile
        </Typography>
      </Headers>
      <Cards cards={profileCards} />
      <Headers id="Languages">
        <Typography variant="h3" color="text.primary">
          Languages
        </Typography>
      </Headers>
      <Languages languages={languages} />
      <Headers id="Projects">
        <Typography variant="h3" color="text.primary">
          Projects
        </Typography>
      </Headers>
      <Cards cards={projectCards} />
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  text-align: center;
`;

const Headers = styled.div`
  width: 100%;
  padding-top: 50px;
  margin-top: -50px;
  @media only screen and (max-width: 500px) {
    padding-top: 70px;
    margin-top: -70px;
  }
`;
