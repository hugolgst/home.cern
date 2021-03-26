import React from 'react'
import { Flex, Box, Image } from '@chakra-ui/react'

const Video = () => {
  return <>
    <Image
      src="/assets/images/logos/logo.svg"
      position="absolute"
      top="40vh"
      left="45vw"
      width="10vw"
      zIndex="99"
      pointerEvents="none"
    />

    <Box
      position="absolute"
      width="100vw"
      height="100vh"
      overflow="hidden"
    >
      <iframe
        src="https://www.youtube.com/embed/4aXgBzFAzDk?controls=0&mute=1&autoplay=1&showinfo=0&loop=1&rel=0&playlist=4aXgBzFAzDk"
        title="CERN Circular Collider presentation"
        frameborder="0"
        height="100vh"
        width="100vw"
        allowfullscreen
        style={{
          pointerEvents: 'none',
          position: 'relative',
          height: '120vh',
          width: '140vw',
          left: '-20vw',
          top: '-9vw'
        }}
      />

      <Flex justifyContent="center">
        <Image
          src="/assets/images/mouse.svg"
          position="absolute"
          bottom="5vh"
          zIndex="99"
          width="1vw"
        />
      </Flex>
    </Box>

    <Box height="100vh" width="100vw" />
  </>
}

export default Video