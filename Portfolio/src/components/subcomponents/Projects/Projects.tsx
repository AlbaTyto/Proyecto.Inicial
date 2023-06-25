import React from "react";
import p from './Projects.module.css';
import { Box, Card, CardBody, Heading, Image, Stack, StackDivider, Text } from "@chakra-ui/react";
import { type Filter } from "./RepoTypes";
import AlbaTyto from "../../../assets/InfoJSONs/AlbaTyto.json";
// import { getRepos } from "./getRepos";


export default function Projects(): React.JSX.Element {
  // const [reposToRender, setRepoTR] = React.useState<Filter[]>([
  //   ...AlbaTyto
  // ]);
  // React.useEffect(() => {
  //   if(reposToRender[0].owner.login === 'JSON'){
  //     getRepos()
  //     .then((response) => console.log(response))
  //     .then((data: Filter[]) => data?.length > 0 ?
  //      setRepoTR(data) : 
  //      window.alert("Projects couldn't be loaded"))
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
    {reposToRender.map((repo) =>
      <Card
        display='flex'
        direction={{ base: 'column', md: 'row' }}
        variant='outline'
        key={repo.id}
        bg="whiteAlpha.400"
        overflow="hidden"
      >
        <Box
          flexShrink={0}
          padding='2%'>
          <Image
            boxSize='4rem'
            borderRadius="full"
            src={repo.owner.avatar_url}
            alt="Repo Owner"
            className={p.avatar}
          />
        </Box>
        <CardBody
          display='flex'
          mt={{ base: 2, md: 0 }}
          ml={{ md: 3 }}
        >
          <Stack
            key={repo.id}
            divider={<StackDivider />}
            spacing='4'
          >
            <Box
            >
              <Heading size='sm' textTransform='uppercase' textAlign={"left"}>
                {repo.name}
              </Heading>
              <Text mt={2} fontSize='sm' textAlign={"left"}>
                {repo.language}
              </Text>
              <Text mt={2} fontSize='xs' textAlign={"right"} hideBelow='sm'>
                Created at: {repo.created_at}
              </Text>
              <Text mt={2} fontSize='xs' textAlign={"right"} hideBelow='sm'>
                Updated at: {repo.updated_at}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>)}
  </Card>;
}