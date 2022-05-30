import { Flex, Box, Text } from '@chakra-ui/react'
import React from 'react'
import SectionInfoButton from '../SectionLabel/sectionInfoButton'
import { Colors } from '../../colors'
import RoadmapCard from './roadmapCard'
import CarouselRoadmap from './carouselRoadmap'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


export const Roadmap = () => {
  return (
    <>
    <Flex alignItems="center" direction='column' mt='100px'>
            <SectionInfoButton label='ROADMAP'/>
        <Flex 
        p='20px' 
        fontSize='60px' 
        color='#ffffff' 
        fontWeight='700' 
        mt="38px"
        direction='column'>
            <Text>Where are we right now?</Text>
        </Flex>
        <Flex
        mb='40px'
        fontSize='20px' 
        color={Colors.greyText} 
        fontWeight="300" 
        direction='column' 
        alignItems='center'>
        <Text maxWidth="60vw" textAlign="center">We believe that by decentralization of game distribution it’s possible to lower a price of the game for the gamers and increase profits for creators. </Text>
        </Flex>
        </Flex>
        <CarouselRoadmap />
      </>

  )
}

export default Roadmap