import React from "react";
import p from './Projects.module.css';
import { getRepos } from "./getRepos";
import { Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text } from "@chakra-ui/react";
import { Repos } from "./RepoTypes";
import AlbaTyto from "./AlbaTyto.json";


export default function Projects(): React.JSX.Element {
  const [reposToRender, setRepoTR] = React.useState([AlbaTyto]);
  React.useEffect(() => {
    if(reposToRender.length < 0){
      getRepos()
      .then((response) => console.log(response))
      // .then(data => data?.length > 0 ? setRepoTR(data) : window.alert("Projects couldn't be loaded"))
    }
  }, []);
  
  return <div className={p.proj}>
    <Card>
  <CardHeader>
    <Heading size='md'>Client Report</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      {/* {()=> reposToRender.map((repo: Repos)=><Box>
        <Heading size='xs' textTransform='uppercase'>
          {repo.name}
        </Heading>
        <Text pt='2' fontSize='sm'>
         {repo.language}
        </Text>
        <Text pt='2' fontSize='sm'>
         {repo.created_at}
        </Text>
        <Text pt='2' fontSize='sm'>
         {repo.updated_at}
        </Text>
      </Box>)} */}
      </Stack>
      </CardBody>
      </Card>
    
  </div>;
}