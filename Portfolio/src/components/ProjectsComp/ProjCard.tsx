import React from "react";
import p from './Projects.module.css';
import { Box, Card, CardBody, Heading, Image, Stack, StackDivider, Text } from "@chakra-ui/react";
import { type ProjectInfo } from "./RepoTypes";
import pics from "../../assets/pictureIndex";
// import { getRepos } from "./getRepos";

type Props = {
    repo: ProjectInfo
}
export default function ProjCard(props: Props): React.JSX.Element {
    const repo = props.repo;     
    const pic = repo.image ? pics[repo.image] : null;
    return<>
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
          padding='1%'>
          <Image
            boxSize='3.5rem'
            borderRadius="full"
            src={pic}
            alt="Repo Owner"
            className={p.avatar}
          />
        </Box>
        <CardBody
          display='flex'
          mt={{ base: 2, md: 0 }}
          ml={{ md: 3 }}
          padding='0.5em'
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
              <Text mt={1} fontSize='sm' textAlign={"left"}>
                {repo.language}
              </Text>
              <Text mt={1} fontSize='xs' textAlign={"right"} hideBelow='sm'>
                Created at: {repo.created_at}
              </Text>
              <Text mt={1} fontSize='xs' textAlign={"right"} hideBelow='sm'>
                Updated at: {repo.updated_at}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      </>
}