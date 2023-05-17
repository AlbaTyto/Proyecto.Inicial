import React from "react";
import c from './Contact.module.css';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Flex
} from '@chakra-ui/react'
import { Link } from "react-router-dom";
import { BsWhatsapp, BsMailbox, BsLinkedin, BsGithub, BsDiscord, BsSlack } from "react-icons/bs";

export default function Contact(): React.JSX.Element {
  return <Flex
    className={c.contDiv}
  >
    <Flex
      flexDirection="column"
      fontSize={"2xl"}
    >
      <div className={c.cont}><BsMailbox /> gperettig@gmail.com </div>
      <div className={c.cont}><BsWhatsapp /> +54 9 3874628790 </div>
      <div className={c.cont}><BsSlack /> Gustavo Peretti (U042MP77KRS)</div>
     
    </Flex>
  </Flex>;
}