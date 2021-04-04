import React from 'react'
import { Flex, Heading, Text, Box, Image } from '@chakra-ui/react'

const Footer = () => {
  return <Box
    marginTop="15vh"
    backgroundColor="cern-blue"
    p="3vh 0"
  >
    <Flex
      m="2vh 0"
      justifyContent="center"
      direction={{
        base: 'column-reverse',
        md: 'row'
      }}
      alignItems={{
        base: 'center',
        md: 'flex-start'
      }}
    >
      <Flex 
        direction="column"
        alignItems="center"
      >
        <Image
          src="/assets/images/logos/logo.svg"
          w={{
            base: '30vw',
            md: '15w'
          }}
          m={{
            base: '4vh 5vw',
            md: '0 5vw'
          }}
          pointerEvents="none"
        />

        <Text
          w={{
            base: '70vw',
            md: '10vw'
          }}
          marginTop="4vh"
          color="white"
        >
          CERN<br/>
          Esplanade des Particules 1<br/>
          P.O. Box<br/>
          1211 Geneva 23<br/>
          Switzerland
        </Text>
      </Flex>

      <Flex
        direction="column"
        m={{
          base: '2vh 2vw',
          md: '0 2vw'
        }}
        w={{
          base: '80vw',
          md: '15vw'
        }}
      >
        <Heading
          textTransform="uppercase"
          color="white"
          m="2vh 0"
          fontSize="2em"
        >Find us</Heading>

        <Text color="white">– Contact us</Text>
        <Text color="white">– Getting here</Text>
      </Flex>

      <Flex
        direction="column"
        m={{
          base: '2vh 2vw',
          md: '0 2vw'
        }}
        w={{
          base: '80vw',
          md: '15vw'
        }}
      >
        <Heading
          textTransform="uppercase"
          color="white"
          m="2vh 0"
          fontSize="2em"
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
        m={{
          base: '2vh 2vw',
          md: '0 2vw'
        }}
        w={{
          base: '80vw',
          md: '15vw'
        }}
      >
        <Heading
          textTransform="uppercase"
          color="white"
          m="2vh 0"
          fontSize="2em"
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
}

export default Footer