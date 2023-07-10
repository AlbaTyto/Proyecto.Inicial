// import h from './Home.module.css';
import React from "react";
import { Flex, Image } from '@chakra-ui/react';
import Projects from '../../components/Projects/Projects';
import Skills from '../../components/Skills/Skills';

export default function Home(): React.JSX.Element {
  return <Flex
    direction={{ base: 'column', md: 'row' }}
    justifyContent="space-around"
    alignItems='center'
  >
    <Skills />
    <Image
      src='/IMG_20230314_151421030.jpg'
      boxSize={['100%', '33%']}
      borderRadius='full'
      fallbackSrc='https://via.placeholder.com/400'
      alt="'Gustavo's Picture" />
    <Projects />
  </Flex>;
}
