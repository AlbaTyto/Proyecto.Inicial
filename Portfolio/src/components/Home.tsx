import h from './Home.module.css';
import React from "react";

export default function Home(): React.JSX.Element {
  return <div className={h.homStyle}>
    <img id={h.img} src='./src/assets/IMG_20230314_151421030.jpg' alt='Picture'/>
  </div>;
}
