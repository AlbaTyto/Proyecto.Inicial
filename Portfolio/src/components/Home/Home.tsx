import h from './Home.module.css';
import React from "react";
import { Image } from '@chakra-ui/react';
import Projects from '../subcomponents/Projects/Projects';
import Skills from '../subcomponents/Skills/Skills';

export default function Home(): React.JSX.Element {
  return <div className={h.homStyle}>
    <Skills />
    <Image
     src='./src/assets/IMG_20230314_151421030.jpg'
     boxSize='35%'
     borderRadius='full'
     fallbackSrc='https://via.placeholder.com/450'
     alt="'Gustavo's Picture" />
    <Projects />
  </div>;
}
