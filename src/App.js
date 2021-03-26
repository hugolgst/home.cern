import React from 'react'
import { Flex, Heading, Text, Box, Image } from '@chakra-ui/react'

const App = () => {
  return <>
    <Image
      src="/assets/images/logo.svg"
      position="absolute"
      top="35vh"
      left="45vw"
      width="10vw"
      zIndex="99"
      pointerEvents="none"
    />
    
    <Box
      position="absolute"
      width="130vw"
      height="120vh"
      left="-15vw"
      top="-30vh"
    >
      <iframe
        src="https://www.youtube.com/embed/4aXgBzFAzDk?controls=0&mute=1&autoplay=1&showinfo=0&loop=1&rel=0"
        title="YouTube video player"
        height="100vh"
        width="100vw"
        frameborder="0"
        allowfullscreen
        style={{
          pointerEvents: 'none',
          height: '100%',
          width: '100%'
        }}
      />
    </Box>
    <Box height="90vh" width="100vw" />

    <Flex
      m="0 10vw"   
      alignItems="center" 
    >
      {/* <Heading
        textTransform="uppercase"
        fontSize="3em"
        p="1%"
        color="cern-blue"
      >What is the nature of our universe?</Heading> */}
      <Image 
        src="/assets/images/logo-blue.svg" 
        width="5vw"
        p="1.5%"
      />

      {['About', 'News', 'Science', 'Resources'].map((text, index) => (
        <Text 
          textTransform="uppercase"
          m="0 15px"
          {...(index == 0 ? {
            marginLeft: 'auto'
          } : {})}
        >{text}</Text>
      ))}
    </Flex>

    <Box m="5vh 20vw">
      <Flex 
        alignItems="center"
        m="10vh 0"
      >
        <Flex direction="column">
          <Heading>Searching for the unknown.</Heading>
          <Text>Feature <span style={{
            color: 'gray'
          }}>– 5 March 2021</span></Text>
        </Flex>

        <Image 
          src="/assets/images/exploring-unknown.png" 
          w="18vw"
          marginLeft="auto"
        />
      </Flex>

      <Heading
        textTransform="uppercase"
        fontSize="3em"
        m="2vh 0"
      >What is the nature of our universe?</Heading>
      <Image src="/assets/images/background.jpeg" />
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
