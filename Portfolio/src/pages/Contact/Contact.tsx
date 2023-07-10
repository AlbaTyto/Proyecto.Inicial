import React from "react";
import c from './Contact.module.css';
import {
  Flex, Grid, GridItem 
} from '@chakra-ui/react';
import { BsWhatsapp, BsMailbox } from "react-icons/bs";

export default function Contact(): React.JSX.Element {
  return <Flex
    className={c.contDiv}
  >
    <Grid
    templateRows='repeat(2, 1fr)'
    templateColumns='repeat(8, 1fr)' 
      fontSize={"2xl"}
    >
      <GridItem gridRow={1} gridColumn={1}><BsMailbox /></GridItem>
      <GridItem gridRow={1} gridColumn={'2/8'}>gperettig@gmail.com </GridItem>
      <GridItem gridRow={2} gridColumn={1}><BsWhatsapp /></GridItem>
      <GridItem gridRow={2} gridColumn={'2/8'}> +54 9 3874628790 </GridItem>
      {/* <div className={c.cont}><BsSlack /> Gustavo Peretti (U042MP77KRS)</div> */}
     
    </Grid>
  </Flex>;
}