import React from "react";
import p from './Projects.module.css';
import { Box, Card, CardBody, Heading, Image, Stack, StackDivider, Text } from "@chakra-ui/react";
import { type Filter } from "./RepoTypes";
import AlbaTyto from "./AlbaTyto.json";


export default function Projects(): React.JSX.Element {
  const reposToRender: Filter[] = (AlbaTyto);

  return <Card
    display='flex'
    flex='1'
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
        direction={{ base: 'column', sm: 'row' }}
        variant='outline'
        key={repo.id}
        bg="whiteAlpha.400"
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
              <Text mt={2} fontSize='xs' textAlign={"right"}>
                Created at: {repo.created_at}
              </Text>
              <Text mt={2} fontSize='xs' textAlign={"right"}>
                Updated at: {repo.updated_at}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>)}
  </Card>;
}

/*<Box p={4} display={{ md: 'flex' }}>
 
    <Image
      borderRadius='lg'
      width={{ md: 40 }}
      src='https://bit.ly/2jYM25F'
      alt='Woman paying for a purchase'
    />
  </Box>
  <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
    <Text
      fontWeight='bold'
      textTransform='uppercase'
      fontSize='sm'
      letterSpacing='wide'
      color='teal.600'
    >
      Marketing
    </Text>
    <Link
      mt={1}
      display='block'
      fontSize='lg'
      lineHeight='normal'
      fontWeight='semibold'
      href='#'
    >
      Finding customers for your new business
    </Link>
    <Text mt={2} color='gray.500'>
      Getting a new business off the ground is a lot of hard work. Here are five
      ideas you can use to find your first customers.
    </Text>
  </Box>
</Box> */