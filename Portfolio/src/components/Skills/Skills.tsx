import React from "react";
import s from './Skills.module.css';
import { Card, Flex, Heading, Icon, } from "@chakra-ui/react";
import {
  FaNodeJs, FaReact,
  FaSlack
} from "react-icons/fa";
import {
  SiChakraui,
  SiCss3,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiRedux,
  SiSequelize,
  SiTypescript,
} from "react-icons/si";

export default function Skills(): React.JSX.Element {
  const iconSize = 10
  return <Card
    id={s.skills}
    w={{ base: '94%', md: '29.5%' }}
    variant='outline'
    bg="whiteAlpha.300"
    m='1em'
  >
    <Heading size={"md"} p={5} color={"white"}>
      Skills
    </Heading>
    <Card
      bg="whiteAlpha.400"
      >
        <Flex
        flexWrap="wrap"
        justifyContent="space-between"
      gap={6}
    >
      <Icon className={s.icons} boxSize={iconSize} color="#e84e31" as={SiGit} />
      <Icon className={s.icons} boxSize={iconSize} color="orange" as={SiHtml5} />
      <Icon className={s.icons} boxSize={iconSize} color="#277ac0" as={SiCss3} />
      <Icon className={s.icons} boxSize={iconSize} color="yellow" as={SiJavascript} />
      <Icon className={s.icons} boxSize={iconSize} color="purple" as={SiRedux} />
      <Icon className={s.icons} boxSize={iconSize} color="cyan" as={FaReact} />
      <Icon className={s.icons} boxSize={iconSize} color="white" as={SiExpress} />
      <Icon className={s.icons} boxSize={iconSize} color="green" as={FaNodeJs} />
      <Icon className={s.icons} boxSize={iconSize} color="#52b0e7" as={SiSequelize} />
      <Icon className={s.icons} boxSize={iconSize} color="#277ac0" as={SiTypescript} />
      <Icon className={s.icons} boxSize={iconSize} color="#1264a3" as={FaSlack} />
      <Icon className={s.icons} boxSize={iconSize} color="#319795" as={SiChakraui} />
      <img className={s.icons} rel="icon" src="/vite.svg" />
      <img className={s.icons} rel="icon" src="/chaijs_logo_icon_168435.svg" />
      <img className={s.icons} rel="icon" src="https://jestjs.io/img/favicon/favicon.ico" />
    </Flex>
    </Card>    
  </Card>;
}