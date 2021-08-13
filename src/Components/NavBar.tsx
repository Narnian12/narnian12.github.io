import React, { useState, useEffect } from 'react';
import './NavBar.css';
import { Icon } from '@iconify/react';
import mediumIcon from '@iconify-icons/logos/medium-icon';
import githubIcon from '@iconify-icons/logos/github-icon';
import linkedinFill from '@iconify-icons/akar-icons/linkedin-fill';
import { useMediaQuery } from '../CustomHooks/useMediaQuery';

function NavBar(props: { sections: Array<string> }) {
  const [menuState, setMenuState] = useState("");
  const [openState, setOpenState] = useState(false);

  const switchMenu = (title: string) => {
    setMenuState(title);
    setOpenState(false);
  }
  const toggleOpen = () => setOpenState(!openState);

  let isMobile = useMediaQuery('(max-width: 500px)');
  useEffect(() => {
    if (!isMobile) setOpenState(false);
  }, [isMobile]);

  let menu = [];

  if (isMobile) {
    menu.push(<a href="#0" onClick={toggleOpen} key="menu">
      <img src="https://img.icons8.com/material-outlined/24/000000/menu--v1.png" alt="Menu"/>
    </a>);
    if (openState) {
      menu.push(props.sections.map((elem) => {
        return <a 
          className={menuState === elem ? "active" : undefined} 
          href={"#" + elem} 
          onClick={() => switchMenu(elem)} 
          key={elem}>
          {elem}
        </a>;
      }));
    }
  }
  else {
    menu = props.sections.map((elem) => {
      return <a 
        className={menuState === elem ? "active" : undefined} 
        href={"#" + elem} 
        onClick={() => switchMenu(elem)} 
        key={elem}>
          {elem}
      </a>;
    });
  }

  let socials = isMobile ? null :
    <>
      <a className="socials" href="https://medium.com/@pysun12" target="_blank" rel="noreferrer">
        <Icon icon={mediumIcon} />
      </a>
      <a className="socials" href="https://www.linkedin.com/in/peterysun/" target="_blank" rel="noreferrer">
        <Icon icon={linkedinFill} />
      </a>
      <a className="socials" href="https://github.com/Narnian12" target="_blank" rel="noreferrer">
        <Icon icon={githubIcon} />
      </a>
    </>;

  return (
    <div className="nav">
      {menu}
      {socials}
    </div>
  );
}

export default NavBar;