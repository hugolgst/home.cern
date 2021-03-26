import React, { useEffect } from 'react'
import { Flex, Heading, Text, Box, Image, useMediaQuery, baseStyle } from '@chakra-ui/react'
import Video from './components/Video'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const FadeInWhenVisible = ({ style, children }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return <motion.div
    ref={ref}
    animate={controls}
    initial="hidden"
    transition={{ duration: 0.3 }}
    variants={{
      visible: { opacity: 1, scale: 1 },
      hidden: { opacity: 0, scale: 1.3 }
    }}
    style={style}
  >
    {children}
  </motion.div>
}

const App = () => {
  const [isMobile] = useMediaQuery("(min-width: 1000px)")

  return <>
    { isMobile ? <Video /> : ''}

    <NavBar />

    <Box m={{
      base: '5vh 10vw',
      md: '5vh 20vw'
    }}>
      <Flex
        alignItems="center"
        m={{
          base: '5vh 0',
          md: '10vh 0'
        }}
        marginBottom="10vh"
        direction={{
          base: 'column',
          md: 'row'
        }}
      >
        <FadeInWhenVisible>
          <Flex direction="column">
            <Heading
              marginBottom={{
                base: '2vh',
                md: '0'
              }}
            >Searching for the unknown</Heading>
            {isMobile ? '' : <Image
              src="/assets/images/exploring-unknown.png"
              w={{
                base: '90vw',
                md: '18vw'
              }}
            />}
            <Text
              marginTop={{
                base: '2vh',
                md: '0'
              }}
            >
              Feature <span style={{
                color: 'gray'
              }}>– 5 March 2021</span>
            </Text>
          </Flex>
        </FadeInWhenVisible>

        {isMobile ? <FadeInWhenVisible style={{
          marginLeft: 'auto'
        }}>
          <Image
            src="/assets/images/exploring-unknown.png"
            w={{
              base: '90vw',
              md: '18vw'
            }}
          />
        </FadeInWhenVisible> : '' }
      </Flex>

      <FadeInWhenVisible>
        <Heading
          textTransform="uppercase"
          fontSize={{
            base: '1.6em',
            md: '3em'
          }}
          m="2vh 0"
        >What is the nature of our universe?</Heading>
        <Image src="/assets/images/background.jpeg" />
      </FadeInWhenVisible>
    </Box>

    <Footer />
  </>
}

export default App
