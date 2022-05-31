import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

export const AboutHashUp = () => {
  return (
    <Flex direction='column' fontSize='12px'>
        <Text color="#6D6D6D" fontWeight="600">HASHUP</Text>
        <Flex
        mt='10px'
        mb='23px' 
        gridGap='9px'
        direction='column'
		fontWeight="400"
		fontSize="13px"
		color="white">
            <Text>Team</Text>
            <Text>Media</Text>
            <Text>O nas</Text>
        </Flex>
    </Flex>
  )
}

export default AboutHashUp