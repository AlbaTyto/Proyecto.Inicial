import React from "react";
import n from './NavBar.module.css';
import { NavLink } from 'react-router-dom';

export default function NavBar(): React.JSX.Element {
  return <div className={n.NavDiv}>
    <span id={n.name}>
    <NavLink to='/'><h1>Gustavo Peretti</h1></NavLink>
    </span>
    <div className={n.NLinks}>
      <NavLink to='/about'>About</NavLink>
      <NavLink to='/projects'>Projects</NavLink>
      <NavLink to='/contact'>Contact</NavLink>
    </div>
  </div>;
}
