import { Flex, Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Colors } from '../../colors'
import RoadmapTaskDone from '../../Icons/roadmapTaskDone'
import {IRoadmapCardElement, RoadmapCardElement} from './roadmapCardElement'

export interface IRoadmapCardIRoadmapCard {
    quarter: string, 
    data: IRoadmapCardElement[]
}

export const RoadmapCard = ({data, quarter}: IRoadmapCardIRoadmapCard) => {
  return (
    <Flex bgColor='linear-gradient(180deg, #010101 0%, rgba(1, 1, 1, 0) 100%)' direction='column' borderRadius='40px' p='40px' width="calc(50vw - 90px)"> 
        <Box h="2px" w="25px" bgColor={Colors.brandMain} />
        <Flex fontSize='24px' fontWeight='400' color='white' paddingTop='15px'>
            <Flex fontSize='24px' fontWeight='400' color='white' paddingTop='15px'>
                <Text>{quarter}</Text>
            </Flex>
        </Flex>
        <Flex mt='30px' direction='column' gridGap='9px'>
            {data.map(element => <RoadmapCardElement {...element} />)}
        </Flex>
    </Flex>
  )
}

export default RoadmapCard