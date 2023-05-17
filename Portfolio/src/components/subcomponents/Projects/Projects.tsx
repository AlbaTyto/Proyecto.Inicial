import React from "react";
import p from './Projects.module.css';
import { Box, Card, CardBody, Heading, Image, Stack, StackDivider, Text } from "@chakra-ui/react";
import { type Filter } from "./RepoTypes";
import AlbaTyto from "./AlbaTyto.json";


export default function Projects(): React.JSX.Element {
  const reposToRender: Filter[] = (AlbaTyto);

  return <Card 
  className={p.proj}
  boxSize='28%'
  variant='outline'
  bg="whiteAlpha.300"
  >
    <Heading size={"md"} p={5} color={"white"} >
      Projects
    </Heading>
    {reposToRender.map((repo) =>
      <Card
      className={p.card}
        direction={{ base: 'column', sm: 'row' }}
        variant='outline'
        key={repo.id}
        bg="whiteAlpha.400"
      >
        <Image
        className={p.avatar}
          boxSize='4rem'
          borderRadius="full"
          src={repo.owner.avatar_url} 
          />
        <CardBody>
          <Stack key={repo.id} divider={<StackDivider />} spacing='4'>
            <Box
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