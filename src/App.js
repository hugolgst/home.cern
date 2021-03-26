import React from 'react'
import { Flex, Heading, Text, Box, Image, useMediaQuery } from '@chakra-ui/react'
import Video from './components/Video'
import NavBar from './components/NavBar'

const App = () => {
  const [ isMobile ] = useMediaQuery("(min-width: 1280px)")

  return <>
    { isMobile ? <Video /> : '' }

    <NavBar />

    <Box m="5vh 20vw">
      <Flex
        alignItems="center"
        m="10vh 0"
        direction={{
          base: 'column',
          xl: 'row'
        }}
      >
        <Flex direction="column">
          <Heading>Searching for the unknown</Heading>
          <Text>Feature <span style={{
            color: 'gray'
          }}>– 5 March 2021</span></Text>
        </Flex>

        <Image
          src="/assets/images/exploring-unknown.png"
          w={{
            base: '70vw',
            xl: '18vw'
          }}
          marginLeft="auto"
        />
      </Flex>

      <Heading
        textTransform="uppercase"
        fontSize="3em"
        m="2vh 0"
      >What is the nature of our universe?</Heading>
      <Image src="/assets/images/background.jpeg" />

      <Heading>Explore the CERN</Heading>
    </Box>

    <Box
      marginTop="10vh"
      backgroundColor="cern-blue"
      p="3vh 0"
    >
      <Flex
        m="2vh 0"
        justifyContent="center"
      >
        <Image
          src="/assets/images/new-logo.svg"
          w="15vw"
          m="0 5vw"
          pointerEvents="none"
        />

        <Flex
          direction="column"
          m="0 2vw"
          w="15vw"
        >
          <Heading
            textTransform="uppercase"
            color="white"
            m="2vh 0"
          >Find us</Heading>

          <Text color="white">– Contact us</Text>
          <Text color="white">– Getting here</Text>
        </Flex>

        <Flex
          direction="column"
          m="0 2vw"
          w="15vw"
        >
          <Heading
            textTransform="uppercase"
            color="white"
            m="2vh 0"
          >Cern {'&'} you</Heading>

          <Text color="white">– Doing business with CERN</Text>
          <Text color="white">– Knowledge transfer</Text>
          <Text color="white">– CERN's neighbours</Text>
          <Text color="white">– CERN {'&'} Society Foundation</Text>
          <Text color="white">– Partnerships</Text>
          <Text color="white">– Alumni</Text>
        </Flex>

        <Flex
          direction="column"
          m="0 2vw"
          w="15vw"
        >
          <Heading
            textTransform="uppercase"
            color="white"
            m="2vh 0"
          >General information</Heading>

          <Text color="white">– Careers</Text>
          <Text color="white">– Visists</Text>
          <Text color="white">– Privacy policy</Text>
        </Flex>
      </Flex>

      <Text
        textAlign="center"
        color="white"
        fontSize="0.8em"
        marginTop="7vh"
      >
        Copyright © 2021 CERN
      </Text>
    </Box>
  </>
}

export default App
