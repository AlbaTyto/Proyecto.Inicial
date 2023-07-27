import React from "react";
import ProjScroller from "../../components/ProjectsComp/ProjScroller";
import { Heading } from '@chakra-ui/react';

export default function Projects(): React.JSX.Element {
  return <div>
    <Heading>Proyectos</Heading>
    <ProjScroller />
  </div>
}