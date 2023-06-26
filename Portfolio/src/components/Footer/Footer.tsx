import React from "react";
import f from './Footer.module.css';
import { Link as ReactLink } from "react-router-dom";
import { Flex, Link } from "@chakra-ui/react";
import { BsLinkedin, BsGithub, BsDiscord } from "react-icons/bs";

export default function Footer(): React.JSX.Element {
  return <Flex
   className={f.footDiv}
   >
    <Flex
    bg='whiteAlpha.300'>
      <Link as={ReactLink} className={f.footLink} to='https://github.com/AlbaTyto' isExternal><BsGithub /></Link>
      <Link as={ReactLink} className={f.footLink} to='https://www.linkedin.com/in/gustavo-peretti-gus/' isExternal><BsLinkedin /></Link>
      <Link as={ReactLink} className={f.footLink} to='https://discordapp.com/users/1020451757303795743' isExternal><BsDiscord /></Link>
      </Flex>      
  </Flex>;
}