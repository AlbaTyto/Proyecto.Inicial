import React from "react";
import f from './Footer.module.css';
import { Link } from 'react-router-dom';
import { Flex } from "@chakra-ui/react";
import { BsLinkedin, BsGithub, BsDiscord } from "react-icons/bs";

export default function Footer(): React.JSX.Element {
  return <Flex
   className={f.footDiv}
   >
    <Flex>
      <Link className={f.footLink} to='https://github.com/AlbaTyto'><BsGithub /></Link>
      <Link className={f.footLink} to='https://www.linkedin.com/in/gustavo-peretti-gus/'><BsLinkedin /></Link>
      <Link className={f.footLink} to='https://discordapp.com/users/1020451757303795743'><BsDiscord /></Link>
      </Flex>
      
  </Flex>;
}