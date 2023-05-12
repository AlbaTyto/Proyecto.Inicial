import React from "react";
import f from './Footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer(): React.JSX.Element {
  return <div className={f.NavDiv}>
      <Link to=''>Github</Link>
      <Link to=''>LinkedIn</Link>
      <Link to=''>Other</Link>
  </div>;
}