import { Flex, Image } from '@chakra-ui/react'
import React from 'react'
import ForGamers from '../../Gamers/Header/forGamers'
import InfoHeader from './infoHeader'

export const HeaderToken = () => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="space-between" w="100%" h="85vh" mb="200px">
    <Image
        src="/assets/forGamersHeader.png"
        w="100vw"
        zIndex="0"
        opacity="0.7"
        bgGradient="linear(180deg, rgba(0, 0, 0, 0) 77.54%, #000000 92.75%)"
    />

    <InfoHeader />
</Flex>
  )
}

export default HeaderToken