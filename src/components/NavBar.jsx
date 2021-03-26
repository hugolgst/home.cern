import React from 'react'
import { Flex, Text, Image, MenuItem, Menu, MenuButton, IconButton, MenuList, useMediaQuery } from '@chakra-ui/react'
import { HamburgerIcon, SearchIcon, ChevronDownIcon } from '@chakra-ui/icons'

const items = ['About', 'News', 'Science', 'Resources']

const NavBarItem = ({ children, ...props }) => {
  return <Text
    textTransform="uppercase"
    m="0 15px"
    cursor="pointer"
    borderBottom="2px solid white"
    _hover={{
      borderBottom: '2px solid'
    }}
    transition="0.7s"
    {...props}
  >
    {children}
  </Text>
}

const NavBarItems = () => {
  return <>
    {items.map((text, index) => (
      <NavBarItem
        {...(index === 0 ? {
          marginLeft: 'auto'
        } : {})}
      >{text}</NavBarItem>
    ))}

    <NavBarItem>
      <SearchIcon /> Search
    </NavBarItem>

    <NavBarItem>
      EN <ChevronDownIcon />
    </NavBarItem>
  </>
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
      _focus={{
        border: 'none',
        backgroundColor: 'transparent'
      }}
    />

    <MenuList
      borderRadius="0"
    >
      {items.map(text => (
        <MenuItem 
          textTransform="uppercase"
        >{text}</MenuItem>
      ))}
    </MenuList>
  </Menu>
}

const NavBar = () => {
  const [ isMobile ] = useMediaQuery("(min-width: 1000px)")

  return <Flex
    m={{
      base: '2vh 10vw',
      md: '0 10vw'
    }}
    alignItems="center"
    id="navbar"
  >
    {/* <Heading
      textTransform="uppercase"
      fontSize="3em"
      p="1%"
      color="cern-blue"
    >What is the nature of our universe?</Heading> */}
    <Image
      src="/assets/images/logos/logo-blue.svg"
      width={{
        base: '15vw',
        md: '5vw'
      }}
      p="1.5%"
    />

    {isMobile ? <NavBarItems /> : <BurgerMenu />}
  </Flex>
}

export default NavBar