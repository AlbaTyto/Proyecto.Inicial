import React from "react";
import a from './About.module.css';
import { Text } from "@chakra-ui/react";

export default function About(): React.JSX.Element {
  return <Text 
  id={a.ab}
  fontSize='2xl'
  >
    Hello, my name is Gustavo Peretti.<br/>I work as a Dairy Cattle Veterinarian and recently learned FullStack Developer skills at #SoyHenry. Now I have tech skills in JavaScript, Express, React, Redux, and more.<br/> Being a Vet has taught me about responsibility, teamwork, the scientific method, diagnosis, and prioritization.<br/> As I have always been a logical thinker, my friends and my brother recommended that I learn about programming. They suggested I try out SoyHenry, and I took a chance. I never thought that this new world could be so thrilling. This program not only gave me knowledge about software programming, but also introduced me to new friends, boosted my self-confidence, and provided me with a new perspective.<br/>
  </Text>;
}