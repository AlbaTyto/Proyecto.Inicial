import React from "react";
// import p from './Projects.module.css';
import {  Card, Heading, Link } from "@chakra-ui/react";
import { type Filter } from "./RepoTypes";
import AlbaTyto from "../../assets/InfoJSONs/AlbaTyto.json";
import ProjCard from "./ProjCard";
import { Link as ReactLink } from "react-router-dom";
// import { getRepos } from "./getRepos";


export default function Projects(): React.JSX.Element {
 
  const reposToRender: Filter[] = (AlbaTyto);
  return <Card
    w={{ base: '94%', md: '29.5%' }}
    display='flex'
    variant='outline'
    bg="whiteAlpha.300"
    m='1em'
  >
    <Heading size={"md"} p={5} color={"white"} >
      Projects
    </Heading>
    {reposToRender.map((repo) => <div>
    {repo.page_link ? 
    <Link as={ReactLink} to={`${repo.page_link}`}> <ProjCard repo={repo}/> </Link>: 
    <ProjCard repo={repo}/>}
    </div>)}
  
  
  </Card>;
}