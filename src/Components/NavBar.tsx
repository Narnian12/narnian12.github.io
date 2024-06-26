import { useState, useEffect, FC } from "react";
import { Icon } from "@iconify/react";
import githubIcon from "@iconify-icons/logos/github-icon";
import linkedinFill from "@iconify-icons/akar-icons/linkedin-fill";
import { useMediaQuery } from "../CustomHooks/useMediaQuery";
import styled from "@emotion/styled";
import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

interface NavBarProps {
  sections: Array<string>;
}

const NavBar: FC<NavBarProps> = ({ sections }) => {
  const [menuState, setMenuState] = useState("");
  const [openState, setOpenState] = useState(false);

  const switchMenu = (title: string) => {
    setMenuState(title);
    setOpenState(false);
  };
  const toggleOpen = () => setOpenState(!openState);

  const isMobile = useMediaQuery("(max-width: 500px)");
  useEffect(() => {
    if (!isMobile) setOpenState(false);
  }, [isMobile]);

  let menu = [];

  if (isMobile) {
    menu.push(
      <NavLink menuState="" elem=" " href="#0" onClick={toggleOpen} key="menu">
        <img
          src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png"
          alt="Menu"
        />
      </NavLink>
    );
    if (openState) {
      menu.push(
        sections.map((elem) => {
          return (
            <NavLink
              menuState={menuState}
              elem={elem}
              href={"#" + elem}
              onClick={() => switchMenu(elem)}
              key={elem}
            >
              <Typography>{elem}</Typography>
            </NavLink>
          );
        })
      );
    }
  } else {
    menu = sections.map((elem) => {
      return (
        <NavLink
          menuState={menuState}
          elem={elem}
          href={"#" + elem}
          onClick={() => switchMenu(elem)}
          key={elem}
        >
          <Typography>{elem}</Typography>
        </NavLink>
      );
    });
  }

  const socials = isMobile ? null : (
    <>
      <SocialLink
        menuState=""
        elem=" "
        href="https://www.linkedin.com/in/peterysun/"
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon={linkedinFill} />
      </SocialLink>
      <SocialLink
        menuState=""
        elem=" "
        href="https://github.com/Narnian12"
        target="_blank"
        rel="noreferrer"
      >
        <Icon icon={githubIcon} />
      </SocialLink>
    </>
  );

  return (
    <NavigationWrapper>
      {menu}
      {socials}
    </NavigationWrapper>
  );
};

export default NavBar;

NavBar.propTypes = {
  sections: PropTypes.array.isRequired,
};

const NavigationWrapper = styled.div`
  background-color: #404040;
  overflow: hidden;
  position: fixed;
  width: 100%;
  top: 0;
`;

type NavLinkType = {
  menuState: string;
  elem: string;
};

const NavLink = styled.a<NavLinkType>`
  display: block;
  float: left;
  color: white;
  padding: 14px 16px;
  font-size: 15px;
  text-decoration: none;
  background-color: ${(props: NavLinkType) =>
    props.menuState === props.elem ? "gray" : "#404040"};
  :hover {
    background-color: lightgray;
    color: #ffffff;
  }
  @media only screen and (max-width: 500px) {
    float: none;
    text-align: left;
  }
`;

const SocialLink = styled(NavLink)`
  float: right;
  @media only screen and (max-width: 500px) {
    float: none;
  }
`;
