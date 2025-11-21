import Egypt from "../Images/egypt.jpg";
import styled from "@emotion/styled";
import { FC } from "react";
import Typography from "@mui/material/Typography";

const Header: FC = () => {
  return (
    <Div>
      <Typography variant="h2" color="text.primary">
        Peter S Portfolio
      </Typography>
      <Img src={Egypt} alt="Egypt"></Img>
    </Div>
  );
};

export default Header;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 45px 0px 0px 0px;
  @media only screen and (max-width: 500px) {
    margin: 50px 0px 0px 0px;
  }
`;

const Img = styled.img`
  height: 90px;
  max-width: 300px;
  margin: 5px;
`;
