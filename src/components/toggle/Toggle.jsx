import React, { useContext } from 'react';
import "./toggle.css";
import Moon from "../../img/moon.png";
import Sun from "../../img/sun.png";
import { ThemeContext } from '../../context';

const Toggle = () => {
const theme = useContext(ThemeContext);

const handleClick = () => {
  theme.dispatch({type: "TOGGLE"});
}
    return (
      <div className="t">
        <img src={Sun} alt="sun" className="t-icon" />
        <img src={Moon} alt="moon" className="t-icon" />
        <div onClick={handleClick} className="t-button" style={{left: theme.state.darkMode ? 0 : 25}}></div>
      </div>
    );
}

export default Toggle;
