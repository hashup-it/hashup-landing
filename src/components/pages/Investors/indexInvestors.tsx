import { Flex } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useInViewport } from "react-in-viewport";
import { HashScrollImages } from '../Creators/BigHashSection/hashScrollImages';


export const IndexInvestors = () => {
    const ref = useRef(null!);
    const { enterCount } = useInViewport(
      ref,
      {},
      { disconnectOnLeave: false },
      {}
    );


  return (
    <Flex flexDirection="column"
      mt="100vh"
      alignItems="flex-start"
      justifyContent="space-between"
      w="100%"
      zIndex="0"
      position="relative"
      ref={ref}>
          <HashScrollImages animationHookReference={ref}/>
    </Flex>
  )
}

export default IndexInvestors