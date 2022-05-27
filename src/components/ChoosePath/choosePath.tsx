import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import SectionInfoButton from './sectionInfoButton'
import { Colors } from '../../colors'
import PathComponent, { IPathComponents } from './pathComponent'

export const ChoosePath = () => {
    const data: IPathComponents[] = [
        {
        topText: "New economy for",
        name: "Creator",
        description: "Get familiar with the new model of the creator economy. Publish games without intermediaries and decide how you want to earn. "
        },
        {
        topText: "Freedom for",
        name: "Gamers",
        description: "Share your experiences with other gamers. Take pride in your collection, follow your friends, and dive into the new wave of gaming!"
            },
        {
        topText: "New place for",
        name: "Investor",
        description: "A new distribution model means new and better opportunities. Discover the new world of investment!"
        },
    ]
  return (
    <Flex direction='column' alignItems='center'>
        <SectionInfoButton />
        <Flex 
        p='20px'
        fontSize='60px' 
        color='#ffffff' 
        fontWeight='700'>
            <Text> Choose a Path</Text>
            <strong>.</strong>
        </Flex>
        <Flex
        fontSize='20px' 
        color={Colors.greyText} 
        fontWeight='300' direction='column' 
        alignItems='center'>
            <Text maxWidth="60vw" textAlign="center">Be the part of the revolution in the game industry and join our growing community of game creators, innovators, and gamers!</Text>
        </Flex>
        <Flex paddingTop='30px' gridGap='32px'>
        {data.map(element => <PathComponent {...element} />)}
        </Flex>
    </Flex>
  )
}

export default ChoosePath