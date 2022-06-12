import { Flex, Box } from '@chakra-ui/react'
import React, { useRef, useState, } from 'react';
import { HashScrollImages } from '../components/pages/Creators/BigHashSection/hashScrollImages';
import { CartridgesScroll } from '../components/pages/Gamers/PlatformInfo/cartridgesScroll';
import { HashpadScroll } from '../components/pages/Gamers/PlatformInfo/hashPadSroll';


export const Investors = () => {

  const ref = useRef(null!);
  const inputRef = useRef(null!);

  return (
  <Flex >
    <Box h='400px'  bgColor='red'/>
    <Flex pt='600px' ref={inputRef}></Flex>
    <CartridgesScroll animationHookReference={inputRef}/>
  </Flex>
          
  )
}

export default Investors