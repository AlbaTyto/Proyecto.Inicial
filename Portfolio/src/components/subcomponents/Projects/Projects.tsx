import React from "react";
import p from './Projects.module.css';
import { getRepos } from "./getRepos";
import { Box, Card, CardBody, Heading, Image, Stack, StackDivider, Text } from "@chakra-ui/react";
import { Filter } from "./RepoTypes";
import AlbaTyto from "./AlbaTyto.json";


export default function Projects(): React.JSX.Element {
  const [reposToRender, setRepoTR] = React.useState<Filter[]>([
    AlbaTyto
  ]);
  React.useEffect(() => {
    if (reposToRender[0].owner.login === 'JSON') {
      getRepos()
        // .then((response) => console.log(response))
        .then((data) => data?.length > 0 ? setRepoTR(data) : window.alert("Projects couldn't be loaded"))
    }
  }, [reposToRender]);

  return <Card 
  className={p.proj}
  boxSize='30%'
  >
    <Heading size={"md"} p={5} color={"white"} >
      Projects
    </Heading>
    {reposToRender.map((repo) =>
      <Card
      className={p.card}
        direction={{ base: 'column', sm: 'row' }}
        variant='outline'
      >
        <Image
        className={p.avatar}
          boxSize='4rem'
          borderRadius="full"
          src={repo.owner.avatar_url} 
          />
        <CardBody>
          <Stack key='1' divider={<StackDivider />} spacing='4'>
            <Box
              key={repo.id}
            >
              <Heading size='sm' textTransform='uppercase' textAlign={"left"}>
                {repo.name}
              </Heading>
              <Text pt='2' fontSize='sm' textAlign={"left"}>
                {repo.language}
              </Text>
              <Text pt='2' fontSize='xs' textAlign={"right"}>
                Created at: {repo.created_at}
              </Text>
              <Text pt='2' fontSize='xs'textAlign={"right"}>
                Updated at: {repo.updated_at}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>)}

  </Card>;
}