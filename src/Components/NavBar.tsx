import { useState } from 'react';
import './NavBar.css';

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
    </div>
  );
}

export default NavBar;