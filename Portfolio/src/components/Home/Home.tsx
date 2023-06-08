// import h from './Home.module.css';
import React from "react";
import { Flex, Image } from '@chakra-ui/react';
import Projects from '../subcomponents/Projects/Projects';
import Skills from '../subcomponents/Skills/Skills';

export default function Home(): React.JSX.Element {
  return <Flex 
  direction={['column', 'row']}
  padding= '1%'
    height= 'max-content'
    justify-content= 'space-between'
    alignItems= 'center'
  >
    <Skills />
    <Image
     src='/IMG_20230314_151421030.jpg'
     boxSize={['100%', '30%']}
     borderRadius='full'
     fallbackSrc='https://via.placeholder.com/400'
     alt="'Gustavo's Picture" />
    <Projects />
  </Flex>;
}
