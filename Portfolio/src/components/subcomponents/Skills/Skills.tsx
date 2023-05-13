import React from "react";
import s from './Skills.module.css';
import { Card, Grid, Heading, Icon } from "@chakra-ui/react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiCss3,
  SiExpress,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiNextdotjs,
  SiRedux,
  SiSequelize,
  SiTypescript,
} from "react-icons/si";

export default function Skills(): React.JSX.Element {
  const iconSize = 10;
  return <Card className={s.proj}>
    <Heading size={"md"} p={5} color={"white"}>
        Skills
      </Heading>
    <Grid
    templateRows='repeat(2, 1fr)'
    templateColumns='repeat(2, 1fr)'
    gap={4}
    >      
      <Icon boxSize={iconSize} color="cyan" as={FaReact} />
      <Icon boxSize={iconSize} color="white" as={SiNextdotjs} />
      <Icon boxSize={iconSize} color="green" as={FaNodeJs} />
      <Icon boxSize={iconSize} color="white" as={SiExpress} />
      <Icon boxSize={iconSize} color="green" as={SiMongodb} />
      <Icon boxSize={iconSize} color="#52b0e7" as={SiSequelize} />
      <Icon boxSize={iconSize} color="#277ac0" as={SiTypescript} />
      <Icon boxSize={iconSize} color="purple" as={SiRedux} />
      <Icon boxSize={iconSize} color="yellow" as={SiJavascript} />
      <Icon boxSize={iconSize} color="orange" as={SiHtml5} />
      <Icon boxSize={iconSize} color="#277ac0" as={SiCss3} />
      <Icon boxSize={iconSize} color="#e84e31" as={SiGit} />
    </Grid>

  </Card>;
}