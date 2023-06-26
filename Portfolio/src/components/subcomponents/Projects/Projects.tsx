import React from "react";
// import p from './Projects.module.css';
import {  Card, Heading} from "@chakra-ui/react";
import { type Filter } from "./RepoTypes";
import AlbaTyto from "../../../assets/InfoJSONs/AlbaTyto.json";
import ProjCard from "./ProjCard";
import { Link } from "react-router-dom";
// import { getRepos } from "./getRepos";


export default function Projects(): React.JSX.Element {
  // const [reposToRender, setRepoTR] = React.useState<Filter[]>([
  //   ...AlbaTyto
  // ]);
  // React.useEffect(() => {
  //   if(reposToRender[0].owner.login === 'JSON'){
  //     getRepos()
  //     .then((response) => console.log(response))
      // .then((data: Filter[]) => data?.length > 0 ?
      //  setRepoTR(data) : 
      //  window.alert("Projects couldn't be loaded"))
  //   }
  // }, [reposToRender]);
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
    <Link to={repo.page_link}> <ProjCard repo={repo}/> </Link>: 
    <ProjCard repo={repo}/>}
    </div>)}
  
  
  </Card>;
}