import React from "react";
import n from './NavBar.module.css';

export default function NavBar(): React.JSX.Element {
  return <div className={n.NavDiv}>
    <span id={n.name}>
        <h1>Gustavo Peretti</h1>
        </span>
    <span className={n.NavDiv}>
        <h3>About</h3>
        <h3>Proyects</h3>
        <h3>contact</h3>
        </span>
  </div>;
}
