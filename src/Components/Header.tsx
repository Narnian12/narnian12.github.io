import Profile from '../Images/profile.jpg';
import Egypt from '../Images/egypt.jpg';
import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 45px 0px 0px 0px;
  background-color: #5585de;
  background-image: linear-gradient(#5586DE, white);
`

const Img = styled.img`
  height: auto;
  max-width: 300px;
  margin: 5px;
`

const H1 = styled.h1`
  width: 300px;
`

function Header() {
  return (
    <Div>
      <H1>PS - My Portfolio!</H1>
      <Img src={Profile} alt="Profile"></Img>
      <Img src={Egypt} alt="Egypt"></Img>
    </Div>
  );
}

export default Header;