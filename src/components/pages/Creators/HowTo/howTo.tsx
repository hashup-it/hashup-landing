import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import SectionInfoButton from '../../../SectionLabel/sectionInfoButton'

export const HowTo = () => {
  return (
    <Flex direction='column' pt='150px' justifyContent='center' alignItems='center'>
        <Flex maxW='30%'>
            <SectionInfoButton label ='HOW TO...'/>
        </Flex>
        <Text pt='30px' fontSize='50px' fontWeight='700'>Our platform is really easy to use<strong>.</strong></Text>
        <Text fontSize='35px' fontWeight='700'>see how</Text>
    </Flex>
  )
}

export default HowTo