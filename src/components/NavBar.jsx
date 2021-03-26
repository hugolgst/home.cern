import React from 'react'
import { Flex, Text, Image, MenuItem, Menu, MenuButton, IconButton, MenuList, useMediaQuery } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'

const items = ['About', 'News', 'Science', 'Resources']

const NavBarItems = () => {
  return items.map((text, index) => (
    <Text
      textTransform="uppercase"
      m="0 15px"
      {...(index === 0 ? {
        marginLeft: 'auto'
      } : {})}
    >{text}</Text>
  ))
}

const BurgerMenu = () => {
  return <Menu>
    <MenuButton
      as={IconButton}
      aria-label="Options"
      icon={<HamburgerIcon w={8} h={8} />}
      size="lg"
      variant="outline"
      marginLeft="auto"
      border="none"
    />

    <MenuList>
      {items.map(text => {
        <MenuItem>{text}</MenuItem>
      })}
    </MenuList>
  </Menu>
}

const NavBar = () => {
  const [ isMobile ] = useMediaQuery("(min-width: 1280px)")

  return <Flex
    m={{
      base: '2vh 10vw',
      xl: '0 10vw'
    }}
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
      width={{
        base: '15vw',
        xl: '5vw'
      }}
      p="1.5%"
    />

    {isMobile ? <NavBarItems /> : <BurgerMenu />}
  </Flex>
}

export default NavBar