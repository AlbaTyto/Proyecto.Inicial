import React from "react";
import n from './NavBar.module.css';

export default function NavBar(): React.JSX.Element {
  return <div className={n.NavDiv}>
    <span>
        <h1>Gustavo Peretti</h1>
        </span>
    <span>
        <h3>Portfolio</h3>
        </span>
  </div>;
}
