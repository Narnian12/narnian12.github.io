import { useState } from 'react';
import './NavBar.css';
import { Icon } from '@iconify/react';
import githubIcon from '@iconify-icons/logos/github-icon';
import linkedinFill from '@iconify-icons/akar-icons/linkedin-fill';

function NavBar(props: { sections: Array<string> }) {
  const [navState, setNavState] = useState({
    menu: props.sections[0]
  });

  const switchMenu = (title: string) => {
    setNavState({
      menu: title
    });
  }

  return (
    <div className="nav">
      {props.sections.map((elem) => {
        return <a 
          className={navState.menu === elem ? "active" : undefined} 
          href={"#" + elem} 
          onClick={() => switchMenu(elem)} 
          key={elem}>
            {elem}
        </a>;
      })}
      <a className="socials" href="https://www.linkedin.com/in/peterysun/" target="_blank">
        <Icon icon={linkedinFill} />
      </a>
      <a className="socials" href="https://github.com/Narnian12" target="_blank">
        <Icon icon={githubIcon} />
      </a>
    </div>
  );
}

export default NavBar;