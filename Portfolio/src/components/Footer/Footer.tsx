import React from "react";
import f from './Footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer(): React.JSX.Element {
  return <div className={f.footDiv}>
      <Link className={f.footLink} to='https://github.com/AlbaTyto'>Github</Link>
      <Link className={f.footLink} to='https://www.linkedin.com/in/gustavo-peretti-gus/'>LinkedIn</Link>
      <Link className={f.footLink} to=''>Other</Link>
  </div>;
}